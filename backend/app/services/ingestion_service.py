"""
Orchestrates: extracted text -> chunks -> embeddings -> stored MemoryChunk
rows. Called from memory_file_service right after a .txt/.json (or any
other text-extractable) upload, and from memory_person_service whenever a
companion's profile narrative fields change.
"""
from sqlalchemy.orm import Session

from app.repositories.memory_chunk_repository import replace_file_chunks, replace_profile_chunks
from app.services.embedding_service import embed_texts
from app.utils.text_chunking import chunk_text

PROFILE_NARRATIVE_FIELDS = [
    ("biography", "Biography"),
    ("bond_story", "Their bond with the user"),
    ("special_memories", "Special memories"),
    ("favorite_quote", "Favorite quote"),
    ("communication_style", "How they communicated"),
]


def ingest_file_text(db: Session, *, memory_person_id: int, memory_file_id: int,
                      source_label: str, text: str) -> int:
    pieces = chunk_text(text)
    if not pieces:
        return 0
    vectors = embed_texts(pieces)
    return replace_file_chunks(
        db, memory_person_id=memory_person_id, memory_file_id=memory_file_id,
        source_label=source_label, chunks_with_embeddings=list(zip(pieces, vectors)),
    )


def ingest_profile(db: Session, memory_person) -> int:
    pieces: list[str] = []
    for field_name, label in PROFILE_NARRATIVE_FIELDS:
        value = getattr(memory_person, field_name, None)
        if value and str(value).strip():
            pieces.append(f"{label}: {value.strip()}")

    if not pieces:
        replace_profile_chunks(db, memory_person_id=memory_person.id, chunks_with_embeddings=[])
        return 0

    vectors = embed_texts(pieces)
    return replace_profile_chunks(
        db, memory_person_id=memory_person.id, chunks_with_embeddings=list(zip(pieces, vectors)),
    )
