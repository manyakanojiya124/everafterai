"""
Companion profile picture upload. Deliberately separate from the general
Memory Vault file pipeline: this is a single, replaceable image tied
directly to MemoryPerson.profile_picture, not a MemoryFile/RAG chunk.
"""
from pathlib import Path

from fastapi import HTTPException, UploadFile, status
from sqlalchemy.orm import Session

from app.core.config import settings
from app.services.memory_person_service import get_companion
from app.utils.helpers import safe_filename

ALLOWED_PROFILE_IMAGE_TYPES = set(settings.ALLOWED_IMAGE_TYPES.split(","))
MAX_PROFILE_IMAGE_SIZE_MB = 10


def upload_profile_picture(db: Session, user_id: int, companion_id: int, file: UploadFile):
    companion = get_companion(db, user_id, companion_id)

    mime_type = file.content_type or ""
    if mime_type not in ALLOWED_PROFILE_IMAGE_TYPES:
        raise HTTPException(
            status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
            detail=f"Profile pictures must be one of: {', '.join(sorted(ALLOWED_PROFILE_IMAGE_TYPES))}",
        )

    contents = file.file.read()
    max_bytes = MAX_PROFILE_IMAGE_SIZE_MB * 1024 * 1024
    if len(contents) > max_bytes:
        raise HTTPException(
            status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
            detail=f"Profile pictures must be under {MAX_PROFILE_IMAGE_SIZE_MB}MB",
        )

    upload_root = Path(settings.UPLOAD_DIR) / "profile_pictures" / str(companion.id)
    upload_root.mkdir(parents=True, exist_ok=True)

    # remove any previous profile picture for this companion so we don't
    # accumulate orphaned files every time someone re-uploads
    _delete_existing_profile_picture(companion)

    stored_name = safe_filename(file.filename or "profile.jpg")
    destination = upload_root / stored_name
    destination.write_bytes(contents)

    companion.profile_picture = f"/uploads/profile_pictures/{companion.id}/{stored_name}"
    db.commit()
    db.refresh(companion)
    return companion


def remove_profile_picture(db: Session, user_id: int, companion_id: int):
    companion = get_companion(db, user_id, companion_id)
    _delete_existing_profile_picture(companion)
    companion.profile_picture = None
    db.commit()
    db.refresh(companion)
    return companion


def _delete_existing_profile_picture(companion) -> None:
    if not companion.profile_picture:
        return
    relative = companion.profile_picture.removeprefix("/uploads/")
    existing_path = Path(settings.UPLOAD_DIR) / relative
    if existing_path.exists() and existing_path.is_file():
        existing_path.unlink(missing_ok=True)
