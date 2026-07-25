from fastapi import APIRouter, BackgroundTasks, Depends, File, UploadFile
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.dependecies.auth import get_current_user
from app.models.user import User
from app.schemas.voice import MessageVoiceResponse, VoiceReferenceResponse
from app.services.message_voice_service import (
    get_voice_status, request_voice_for_message, run_generation_in_background,
)
from app.services.voice_reference_service import (
    get_reference_for_companion, remove_voice_reference, upload_voice_reference,
)

reference_router = APIRouter(prefix="/api/v1/memory-people/{companion_id}/voice-reference", tags=["Voice Cloning"])
message_voice_router = APIRouter(prefix="/api/v1/memory-people/{companion_id}/chat/{message_id}/voice", tags=["Voice Cloning"])


# ==========================================================
# Voice reference (dedicated upload)
# ==========================================================

@reference_router.post("", response_model=VoiceReferenceResponse)
def upload_reference(
    companion_id: int, file: UploadFile = File(...),
    db: Session = Depends(get_db), current_user: User = Depends(get_current_user),
):
    return upload_voice_reference(db, current_user.id, companion_id, file)


@reference_router.get("", response_model=VoiceReferenceResponse)
def get_reference(companion_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return get_reference_for_companion(db, current_user.id, companion_id)


@reference_router.delete("")
def delete_reference(companion_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return remove_voice_reference(db, current_user.id, companion_id)


# ==========================================================
# Per-message generated voice (on-demand)
# ==========================================================

@message_voice_router.post("", response_model=MessageVoiceResponse)
def generate_voice(
    companion_id: int, message_id: int, background_tasks: BackgroundTasks,
    db: Session = Depends(get_db), current_user: User = Depends(get_current_user),
):
    voice_row, message = request_voice_for_message(db, companion_id=companion_id, message_id=message_id, trigger="on_demand")
    if voice_row.status == "pending":
        # FIX: schedule the background-safe function with plain ids/strings,
        # never the request-scoped `db` session or ORM objects bound to it —
        # both are invalid the instant this response is sent.
        background_tasks.add_task(
            run_generation_in_background,
            companion_id=companion_id,
            message_id=message.id,
            message_content=message.content,
            voice_row_id=voice_row.id,
        )
    return voice_row


@message_voice_router.get("", response_model=MessageVoiceResponse)
def get_voice(companion_id: int, message_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return get_voice_status(db, companion_id=companion_id, message_id=message_id)


@message_voice_router.get("/audio")
def download_voice_audio(companion_id: int, message_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    voice_row = get_voice_status(db, companion_id=companion_id, message_id=message_id)
    if voice_row.status != "completed" or not voice_row.file_path:
        from fastapi import HTTPException, status
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail=f"Voice is not ready yet (status: {voice_row.status}).")
    return FileResponse(voice_row.file_path, media_type="audio/wav", filename=f"message-{message_id}.wav")