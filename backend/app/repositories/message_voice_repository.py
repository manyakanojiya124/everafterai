from sqlalchemy.orm import Session

from app.models.message_voice import MessageVoice


def get_voice_for_message(db: Session, chat_message_id: int) -> MessageVoice | None:
    return db.query(MessageVoice).filter(MessageVoice.chat_message_id == chat_message_id).first()


def create_pending_voice(db: Session, *, chat_message_id: int, trigger: str) -> MessageVoice:
    voice_row = MessageVoice(chat_message_id=chat_message_id, status="pending", trigger=trigger)
    db.add(voice_row)
    db.commit()
    db.refresh(voice_row)
    return voice_row


def mark_generating(db: Session, voice_row: MessageVoice) -> MessageVoice:
    voice_row.status = "generating"
    db.commit()
    db.refresh(voice_row)
    return voice_row


def mark_completed(db: Session, voice_row: MessageVoice, *, file_path: str, device: str, generation_ms: int) -> MessageVoice:
    voice_row.status = "completed"
    voice_row.file_path = file_path
    voice_row.device_used = device
    voice_row.generation_ms = generation_ms
    voice_row.error = None
    db.commit()
    db.refresh(voice_row)
    return voice_row


def mark_failed(db: Session, voice_row: MessageVoice, *, error: str) -> MessageVoice:
    voice_row.status = "failed"
    voice_row.error = error
    db.commit()
    db.refresh(voice_row)
    return voice_row
