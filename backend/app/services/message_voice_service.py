"""
Orchestrates generating speech for a specific chat message: on-demand
(user taps play) or auto-triggered for emotionally intense replies. Both
paths converge on the same _run_generation() so behaviour never diverges
between "the user asked" and "it happened automatically".

IMPORTANT: any function that gets handed to FastAPI's BackgroundTasks
(run_generation_in_background, below) must open its OWN database session.
The request-scoped `Session` from Depends(get_db) is closed the instant
the HTTP response is sent — BackgroundTasks run *after* that — so reusing
it here silently hangs/fails and the frontend polls forever. This was the
actual bug behind "voice never finishes generating."
"""
from pathlib import Path

from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.core.config import settings
from app.db.database import SessionLocal
from app.repositories.chat_repository import get_message_by_id
from app.repositories.message_voice_repository import (
    create_pending_voice, get_voice_for_message, mark_completed, mark_failed, mark_generating,
)
from app.repositories.voice_reference_repository import get_voice_reference
from app.services.voice_synthesis_service import VoiceSynthesisError, is_available, synthesize_speech


def _output_path(companion_id: int, message_id: int) -> str:
    output_dir = Path(settings.UPLOAD_DIR) / "message_voices" / str(companion_id)
    output_dir.mkdir(parents=True, exist_ok=True)
    return str((output_dir / f"message-{message_id}.wav").as_posix())


def _run_generation(db: Session, *, companion_id: int, message_id: int, message_content: str, voice_row_id: int) -> None:
    """Pure logic, takes primitive ids/content (not ORM objects bound to a
    different session) plus a session it's allowed to use for its whole
    lifetime. Re-fetches the voice_row itself so it's attached to `db`."""
    from app.models.message_voice import MessageVoice

    voice_row = db.query(MessageVoice).filter(MessageVoice.id == voice_row_id).first()
    if voice_row is None:
        return  # shouldn't happen, but never crash a background task over it

    reference = get_voice_reference(db, companion_id)
    if reference is None or reference.status != "ready":
        mark_failed(db, voice_row, error="No usable voice reference uploaded for this companion yet.")
        return

    mark_generating(db, voice_row)
    try:
        result = synthesize_speech(
            text=message_content,
            reference_audio_path=reference.file_path,
            output_path=_output_path(companion_id, message_id),
        )
        mark_completed(db, voice_row, file_path=result["file_path"], device=result["device"], generation_ms=result["generation_ms"])
    except VoiceSynthesisError as exc:
        mark_failed(db, voice_row, error=str(exc))
    except Exception as exc:  # noqa: BLE001 - never let a background task die silently
        mark_failed(db, voice_row, error=f"Unexpected error during voice generation: {exc}")


def run_generation_in_background(*, companion_id: int, message_id: int, message_content: str, voice_row_id: int) -> None:
    """The ONLY function that should ever be passed to
    BackgroundTasks.add_task() for voice generation. Opens its own DB
    session and guarantees it's closed afterwards, regardless of outcome."""
    db = SessionLocal()
    try:
        _run_generation(
            db, companion_id=companion_id, message_id=message_id,
            message_content=message_content, voice_row_id=voice_row_id,
        )
    finally:
        db.close()


def request_voice_for_message(db: Session, *, companion_id: int, message_id: int, trigger: str = "on_demand"):
    """Creates (or returns the existing) voice job for a message using the
    REQUEST's session — reads only, safe. The caller is responsible for
    scheduling run_generation_in_background(...) (not run_generation_now)
    on BackgroundTasks if the returned row's status is "pending"."""
    message = get_message_by_id(db, message_id=message_id, memory_person_id=companion_id)
    if message is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Message not found.")

    existing = get_voice_for_message(db, message_id)
    if existing and existing.status in ("completed", "generating", "pending"):
        return existing, message

    if not is_available():
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Voice generation isn't set up on this server yet (install the TTS package and set VOICE_ENABLED=true).",
        )

    voice_row = existing or create_pending_voice(db, chat_message_id=message.id, trigger=trigger)
    return voice_row, message


def get_voice_status(db: Session, *, companion_id: int, message_id: int):
    message = get_message_by_id(db, message_id=message_id, memory_person_id=companion_id)
    if message is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Message not found.")
    voice_row = get_voice_for_message(db, message_id)
    if voice_row is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No voice has been requested for this message yet.")
    return voice_row


def trigger_auto_generation_if_needed(db: Session, *, companion_id: int, message, reply_text: str, background_tasks) -> None:
    """Called from chat_service right after an assistant message is
    created. Fire-and-forget: schedules generation on FastAPI's
    BackgroundTasks so the chat response returns immediately and voice
    shows up a few seconds later via the status/poll endpoint."""
    from app.services.emotion_service import should_auto_generate_voice

    if not settings.VOICE_ENABLED or not should_auto_generate_voice(reply_text):
        return
    if not is_available():
        return
    reference = get_voice_reference(db, companion_id)
    if reference is None or reference.status != "ready":
        return

    voice_row = create_pending_voice(db, chat_message_id=message.id, trigger="auto_emotional")
    background_tasks.add_task(
        run_generation_in_background,
        companion_id=companion_id,
        message_id=message.id,
        message_content=message.content,
        voice_row_id=voice_row.id,
    )