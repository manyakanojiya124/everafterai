from sqlalchemy.orm import Session

from app.models.memory_file import MemoryFile


def create_memory_file(db: Session, memory_person_id: int, **fields) -> MemoryFile:
    memory_file = MemoryFile(memory_person_id=memory_person_id, **fields)
    db.add(memory_file)
    db.commit()
    db.refresh(memory_file)
    return memory_file


def get_memory_files(db: Session, memory_person_id: int, file_type: str | None = None):
    query = db.query(MemoryFile).filter(MemoryFile.memory_person_id == memory_person_id)
    if file_type:
        query = query.filter(MemoryFile.file_type == file_type)
    return query.order_by(MemoryFile.created_at.desc()).all()


def get_memory_file(db: Session, memory_person_id: int, file_id: int) -> MemoryFile | None:
    return (
        db.query(MemoryFile)
        .filter(MemoryFile.id == file_id, MemoryFile.memory_person_id == memory_person_id)
        .first()
    )


def delete_memory_file(db: Session, memory_file: MemoryFile) -> None:
    db.delete(memory_file)
    db.commit()


def update_processing_result(db: Session, memory_file: MemoryFile, *, extracted_text: str | None, status: str, error: str | None = None) -> MemoryFile:
    memory_file.extracted_text = extracted_text
    memory_file.processing_status = status
    memory_file.processing_error = error
    memory_file.is_processed = status == "completed"
    db.commit()
    db.refresh(memory_file)
    return memory_file
