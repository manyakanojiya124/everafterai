from pathlib import Path

from fastapi import HTTPException, UploadFile, status
from sqlalchemy.orm import Session

from app.core.config import settings
from app.repositories.memory_file_repository import (
    create_memory_file, delete_memory_file, get_memory_file, get_memory_files, update_processing_result,
)
from app.repositories.memory_chunk_repository import delete_chunks_for_file
from app.services.ingestion_service import ingest_file_text
from app.services.memory_person_service import get_companion
from app.utils.helpers import safe_filename
from app.utils.json_flatten import parse_and_flatten_json_bytes
from app.utils.validators import classify_and_validate_mime, validate_file_size, TEXT_INGESTABLE_MIME_TYPES


def _extract_ingestable_text(contents: bytes, mime_type: str) -> str | None:
    """Returns plain text ready for chunking/embedding, or None if this
    file type isn't one we can turn into RAG context (yet)."""
    if mime_type == "text/plain":
        try:
            return contents.decode("utf-8", errors="ignore").strip() or None
        except UnicodeDecodeError:
            return None
    if mime_type == "application/json":
        try:
            return parse_and_flatten_json_bytes(contents).strip() or None
        except ValueError:
            return None
    return None


def upload_memory_file(db: Session, user_id: int, companion_id: int, file: UploadFile, description: str | None):
    companion = get_companion(db, user_id, companion_id)

    mime_type = file.content_type or "application/octet-stream"
    file_type = classify_and_validate_mime(mime_type)

    contents = file.file.read()
    validate_file_size(len(contents))

    upload_root = Path(settings.UPLOAD_DIR) / "memory_files" / str(companion.id)
    upload_root.mkdir(parents=True, exist_ok=True)

    stored_name = safe_filename(file.filename or "upload.bin")
    destination = upload_root / stored_name
    destination.write_bytes(contents)

    original_name = file.filename or stored_name

    memory_file = create_memory_file(
        db,
        memory_person_id=companion.id,
        file_name=stored_name,
        original_name=original_name,
        file_path=str(destination.as_posix()),
        file_type=file_type,
        mime_type=mime_type,
        extension=destination.suffix.lstrip("."),
        file_size=len(contents),
        description=description,
        processing_status="pending",
    )

    # Only text/plain and application/json are wired into RAG right now —
    # everything else (audio, images, video, pdf/docx) is stored and
    # available in the Memory Vault UI but not yet embedded for chat context.
    if mime_type in TEXT_INGESTABLE_MIME_TYPES:
        extracted_text = _extract_ingestable_text(contents, mime_type)
        if extracted_text:
            try:
                chunk_count = ingest_file_text(
                    db, memory_person_id=companion.id, memory_file_id=memory_file.id,
                    source_label=original_name, text=extracted_text,
                )
                memory_file = update_processing_result(
                    db, memory_file, extracted_text=extracted_text, status="completed", chunk_count=chunk_count,
                )
            except Exception as exc:  # embedding model missing/misconfigured, etc.
                memory_file = update_processing_result(
                    db, memory_file, extracted_text=extracted_text, status="failed", error=str(exc),
                )
        else:
            memory_file = update_processing_result(
                db, memory_file, extracted_text=None, status="failed",
                error="Could not read any text content from this file.",
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
    delete_chunks_for_file(db, memory_file.id)  # explicit, though cascade would also catch this
    delete_memory_file(db, memory_file)
    if file_path.exists():
        file_path.unlink(missing_ok=True)
    return {"message": "Memory file deleted."}
