from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.dependecies.auth import get_current_user
from app.models.user import User
from app.schemas.chat import ChatHistoryResponse, ChatMessageCreate, ChatReplyResponse
from app.services.chat_service import clear_history, get_history, send_message
from app.services.safety_service import CRISIS_RESOURCES

router = APIRouter(prefix="/api/v1/memory-people/{companion_id}/chat", tags=["Chat"])


@router.post("", response_model=ChatReplyResponse)
def chat(
    companion_id: int, payload: ChatMessageCreate,
    db: Session = Depends(get_db), current_user: User = Depends(get_current_user),
):
    user_message, assistant_message, is_crisis, sources = send_message(db, current_user.id, companion_id, payload.message)
    return {
        "user_message": user_message,
        "assistant_message": assistant_message,
        "is_crisis_response": is_crisis,
        "resources": CRISIS_RESOURCES if is_crisis else None,
        "sources_used": sources,
    }


@router.get("", response_model=ChatHistoryResponse)
def history(companion_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    messages = get_history(db, current_user.id, companion_id)
    return {"memory_person_id": companion_id, "messages": messages}


@router.delete("")
def clear(companion_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return clear_history(db, current_user.id, companion_id)
