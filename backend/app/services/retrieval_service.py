from sqlalchemy.orm import Session

from app.core.config import settings
from app.repositories.memory_chunk_repository import similarity_search
from app.services.embedding_service import embed_text


def retrieve_relevant_chunks(db: Session, *, memory_person_id: int, query: str, top_k: int | None = None):
    top_k = top_k or settings.RAG_TOP_K
    query_embedding = embed_text(query)
    return similarity_search(db, memory_person_id=memory_person_id, query_embedding=query_embedding, top_k=top_k)


def format_chunks_for_prompt(chunks) -> str:
    if not chunks:
        return ""
    blocks = []
    for chunk in chunks:
        label = chunk.source_label or ("Profile" if chunk.source_type == "profile" else "Uploaded memory")
        blocks.append(f"[From: {label}]\n{chunk.content}")
    return "\n\n".join(blocks)
