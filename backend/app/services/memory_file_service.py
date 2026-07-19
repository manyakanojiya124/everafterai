from pathlib import Path

from fastapi import HTTPException, UploadFile, status
from sqlalchemy.orm import Session

from app.core.config import settings
from app.repositories.memory_file_repository import (
    create_memory_file, delete_memory_file, get_memory_file, get_memory_files, update_processing_result,
)
from app.services.memory_person_service import get_companion
from app.utils.helpers import safe_filename
from app.utils.validators import classify_and_validate_mime, validate_file_size

TEXT_EXTRACTABLE_TYPES = {"text/plain"}


def _extract_text_if_possible(path: Path, mime_type: str) -> str | None:
    if mime_type in TEXT_EXTRACTABLE_TYPES:
        try:
            return path.read_text(encoding="utf-8", errors="ignore")[:20000]
        except OSError:
            return None
    return None


def upload_memory_file(db: Session, user_id: int, companion_id: int, file: UploadFile, description: str | None):
    companion = get_companion(db, user_id, companion_id)

    file_type = classify_and_validate_mime(file.content_type or "")

    contents = file.file.read()
    validate_file_size(len(contents))

    upload_root = Path(settings.UPLOAD_DIR) / "memory_files" / str(companion.id)
    upload_root.mkdir(parents=True, exist_ok=True)

    stored_name = safe_filename(file.filename or "upload.bin")
    destination = upload_root / stored_name
    destination.write_bytes(contents)

    extracted_text = _extract_text_if_possible(destination, file.content_type or "")

    memory_file = create_memory_file(
        db,
        memory_person_id=companion.id,
        file_name=stored_name,
        original_name=file.filename or stored_name,
        file_path=str(destination.as_posix()),
        file_type=file_type,
        mime_type=file.content_type or "application/octet-stream",
        extension=destination.suffix.lstrip("."),
        file_size=len(contents),
        description=description,
        processing_status="completed" if extracted_text is not None else "pending",
        extracted_text=extracted_text,
        is_processed=extracted_text is not None,
    )
    return memory_file


def list_memory_files(db: Session, user_id: int, companion_id: int, file_type: str | None = None):
    get_companion(db, user_id, companion_id)
    return get_memory_files(db, companion_id, file_type)


def get_single_memory_file(db: Session, user_id: int, companion_id: int, file_id: int):
    get_companion(db, user_id, companion_id)
    memory_file = get_memory_file(db, companion_id, file_id)
    if memory_file is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Memory file not found.")
    return memory_file


def remove_memory_file(db: Session, user_id: int, companion_id: int, file_id: int):
    memory_file = get_single_memory_file(db, user_id, companion_id, file_id)
    file_path = Path(memory_file.file_path)
    delete_memory_file(db, memory_file)
    if file_path.exists():
        file_path.unlink(missing_ok=True)
    return {"message": "Memory file deleted."}
