from sqlalchemy.orm import Session

from app.models.voice_reference import VoiceReference


def get_voice_reference(db: Session, memory_person_id: int) -> VoiceReference | None:
    return db.query(VoiceReference).filter(VoiceReference.memory_person_id == memory_person_id).first()


def upsert_voice_reference(db: Session, *, memory_person_id: int, memory_file_id: int | None, source: str,
                            file_path: str, original_name: str, duration_seconds: int | None,
                            status: str, validation_note: str | None) -> VoiceReference:
    existing = get_voice_reference(db, memory_person_id)
    if existing:
        existing.memory_file_id = memory_file_id
        existing.source = source
        existing.file_path = file_path
        existing.original_name = original_name
        existing.duration_seconds = duration_seconds
        existing.status = status
        existing.validation_note = validation_note
        db.commit()
        db.refresh(existing)
        return existing

    reference = VoiceReference(
        memory_person_id=memory_person_id, memory_file_id=memory_file_id, source=source,
        file_path=file_path, original_name=original_name, duration_seconds=duration_seconds,
        status=status, validation_note=validation_note,
    )
    db.add(reference)
    db.commit()
    db.refresh(reference)
    return reference


def delete_voice_reference(db: Session, reference: VoiceReference) -> None:
    db.delete(reference)
    db.commit()
