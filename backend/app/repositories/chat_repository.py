from sqlalchemy.orm import Session
from app.models.chat_message import ChatMessage


def create_message(db: Session, *, memory_person_id: int, user_id: int, role: str, content: str,
                    is_crisis_flagged: bool = False, is_safety_response: bool = False) -> ChatMessage:
    message = ChatMessage(memory_person_id=memory_person_id, user_id=user_id, role=role, content=content,
                           is_crisis_flagged=is_crisis_flagged, is_safety_response=is_safety_response)
    db.add(message)
    db.commit()
    db.refresh(message)
    return message


def get_recent_messages(db: Session, memory_person_id: int, user_id: int, limit: int = 20):
    messages = (db.query(ChatMessage)
        .filter(ChatMessage.memory_person_id == memory_person_id, ChatMessage.user_id == user_id)
        .order_by(ChatMessage.created_at.desc()).limit(limit).all())
    return list(reversed(messages))


def get_all_messages(db: Session, memory_person_id: int, user_id: int):
    return (db.query(ChatMessage)
        .filter(ChatMessage.memory_person_id == memory_person_id, ChatMessage.user_id == user_id)
        .order_by(ChatMessage.created_at.asc()).all())


def delete_conversation(db: Session, memory_person_id: int, user_id: int) -> None:
    (db.query(ChatMessage)
        .filter(ChatMessage.memory_person_id == memory_person_id, ChatMessage.user_id == user_id)
        .delete(synchronize_session=False))
    db.commit()

def get_message_by_id(db: Session, *, message_id: int, memory_person_id: int):
    return (
        db.query(ChatMessage)
        .filter(ChatMessage.id == message_id, ChatMessage.memory_person_id == memory_person_id)
        .first()
    )