"""
Manages the dedicated voice-sample upload per memory person. Separate
from the general Memory Vault pipeline on purpose — this file has one
job (be a clean clonable reference) and gets validated for that, not
just stored.
"""
from pathlib import Path

from fastapi import HTTPException, UploadFile, status
from sqlalchemy.orm import Session

from app.core.config import settings
from app.repositories.voice_reference_repository import (
    delete_voice_reference as repo_delete,
    get_voice_reference,
    upsert_voice_reference,
)
from app.services.memory_person_service import get_companion
from app.utils.helpers import safe_filename

ALLOWED_VOICE_MIME_TYPES = {"audio/mpeg", "audio/wav", "audio/x-wav", "audio/mp4", "audio/x-m4a", "audio/webm", "audio/ogg"}
MIN_DURATION_SECONDS = 6   # XTTS's stated minimum for a usable clone
MAX_DURATION_SECONDS = 120  # longer doesn't help XTTS and just slows upload/processing
MAX_FILE_SIZE_MB = 25


def _probe_duration_seconds(file_path: Path) -> int | None:
    try:
        import wave
        with wave.open(str(file_path), "rb") as wav_file:
            return int(wav_file.getnframes() / wav_file.getframerate())
    except Exception:
        # non-wav formats (mp3/m4a/webm) aren't readable by the stdlib wave
        # module; XTTS/ffmpeg will still accept them fine at generation time,
        # we just can't pre-validate duration for those without ffprobe.
        return None


def upload_voice_reference(db: Session, user_id: int, companion_id: int, file: UploadFile):
    companion = get_companion(db, user_id, companion_id)

    mime_type = file.content_type or ""
    if mime_type not in ALLOWED_VOICE_MIME_TYPES:
        raise HTTPException(
            status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
            detail=f"Voice sample must be one of: {', '.join(sorted(ALLOWED_VOICE_MIME_TYPES))}",
        )

    contents = file.file.read()
    if len(contents) > MAX_FILE_SIZE_MB * 1024 * 1024:
        raise HTTPException(status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE, detail=f"Voice sample must be under {MAX_FILE_SIZE_MB}MB")

    upload_root = Path(settings.UPLOAD_DIR) / "voice_references" / str(companion.id)
    upload_root.mkdir(parents=True, exist_ok=True)

    stored_name = safe_filename(file.filename or "voice-sample.wav")
    destination = upload_root / stored_name
    destination.write_bytes(contents)

    duration = _probe_duration_seconds(destination)
    status_value, note = "ready", None
    if duration is not None:
        if duration < MIN_DURATION_SECONDS:
            status_value, note = "too_short", f"Clip is {duration}s; XTTS needs at least {MIN_DURATION_SECONDS}s for a good clone."
        elif duration > MAX_DURATION_SECONDS:
            note = f"Clip is {duration}s; only the first ~{MAX_DURATION_SECONDS}s will meaningfully help the clone."

    # remove any previous reference file for this companion before saving the new pointer
    existing = get_voice_reference(db, companion.id)
    if existing and existing.file_path and Path(existing.file_path).exists():
        Path(existing.file_path).unlink(missing_ok=True)

    return upsert_voice_reference(
        db, memory_person_id=companion.id, memory_file_id=None, source="dedicated_upload",
        file_path=str(destination.as_posix()), original_name=file.filename or stored_name,
        duration_seconds=duration, status=status_value, validation_note=note,
    )


def get_reference_for_companion(db: Session, user_id: int, companion_id: int):
    get_companion(db, user_id, companion_id)
    reference = get_voice_reference(db, companion_id)
    if reference is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No voice reference uploaded yet.")
    return reference


def remove_voice_reference(db: Session, user_id: int, companion_id: int):
    reference = get_reference_for_companion(db, user_id, companion_id)
    file_path = Path(reference.file_path)
    repo_delete(db, reference)
    if file_path.exists():
        file_path.unlink(missing_ok=True)
    return {"message": "Voice reference removed."}
