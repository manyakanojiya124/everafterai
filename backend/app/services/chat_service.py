from fastapi import BackgroundTasks
from sqlalchemy.orm import Session

from app.repositories.chat_repository import create_message, get_recent_messages, get_all_messages, delete_conversation
from app.services.memory_person_service import get_companion
from app.services.safety_service import (
    detect_crisis, detect_dependency_language, build_system_prompt, CRISIS_RESPONSE, DEPENDENCY_REMINDER,
)
from app.services.llm_service import generate_reply
from app.services.retrieval_service import retrieve_relevant_chunks, format_chunks_for_prompt
from app.services.message_voice_service import trigger_auto_generation_if_needed


def _history_as_llm_messages(messages) -> list[dict]:
    return [{"role": m.role, "content": m.content} for m in messages if m.role in ("user", "assistant")]


def send_message(db: Session, user_id: int, companion_id: int, user_text: str, background_tasks: BackgroundTasks):
    companion = get_companion(db, user_id, companion_id)

    user_message = create_message(
        db, memory_person_id=companion.id, user_id=user_id, role="user",
        content=user_text, is_crisis_flagged=detect_crisis(user_text),
    )

    if user_message.is_crisis_flagged:
        assistant_message = create_message(
            db, memory_person_id=companion.id, user_id=user_id, role="assistant",
            content=CRISIS_RESPONSE, is_safety_response=True,
        )
        return user_message, assistant_message, True, []

    # RAG: pull the most relevant memory chunks for this specific question
    retrieved_chunks = retrieve_relevant_chunks(db, memory_person_id=companion.id, query=user_text)
    retrieved_context = format_chunks_for_prompt(retrieved_chunks)

    history = get_recent_messages(db, companion.id, user_id, limit=20)
    turn_count = len(history)
    system_prompt = build_system_prompt(companion, turn_count, retrieved_context)

    reply_text = generate_reply(system_prompt, _history_as_llm_messages(history[:-1]), user_text)

    if detect_dependency_language(user_text):
        reply_text += DEPENDENCY_REMINDER.format(name=companion.full_name)

    assistant_message = create_message(
        db, memory_person_id=companion.id, user_id=user_id, role="assistant", content=reply_text,
    )

    # Voice: fires only if VOICE_ENABLED, a ready reference exists, and the
    # reply crosses the emotional-intensity threshold. No-op otherwise, and
    # never blocks the response — generation (if any) runs after this returns.
    trigger_auto_generation_if_needed(
        db, companion_id=companion.id, message=assistant_message,
        reply_text=reply_text, background_tasks=background_tasks,
    )

    sources = [
        {"source_type": c.source_type, "source_label": c.source_label, "snippet": c.content[:180]}
        for c in retrieved_chunks
    ]
    return user_message, assistant_message, False, sources


def get_history(db: Session, user_id: int, companion_id: int):
    get_companion(db, user_id, companion_id)
    return get_all_messages(db, companion_id, user_id)


def clear_history(db: Session, user_id: int, companion_id: int):
    get_companion(db, user_id, companion_id)
    delete_conversation(db, companion_id, user_id)
    return {"message": "Conversation cleared."}