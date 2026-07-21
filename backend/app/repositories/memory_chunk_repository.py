from sqlalchemy.orm import Session

from app.models.memory_chunk import MemoryChunk


def replace_file_chunks(db: Session, *, memory_person_id: int, memory_file_id: int, source_label: str,
                         chunks_with_embeddings: list[tuple[str, list[float]]]) -> int:
    """Delete any existing chunks for this file, then insert the new ones. Called on every
    (re-)upload so re-processing a file never leaves stale/duplicate chunks behind."""
    db.query(MemoryChunk).filter(MemoryChunk.memory_file_id == memory_file_id).delete(synchronize_session=False)

    for index, (content, embedding) in enumerate(chunks_with_embeddings):
        db.add(MemoryChunk(
            memory_person_id=memory_person_id,
            memory_file_id=memory_file_id,
            source_type="file",
            source_label=source_label,
            chunk_index=index,
            content=content,
            embedding=embedding,
        ))
    db.commit()
    return len(chunks_with_embeddings)


def replace_profile_chunks(db: Session, *, memory_person_id: int,
                            chunks_with_embeddings: list[tuple[str, list[float]]]) -> int:
    """Same idea, for chunks derived from the memory person's own profile fields
    (bond_story, special_memories, etc) rather than an uploaded file."""
    (db.query(MemoryChunk)
        .filter(MemoryChunk.memory_person_id == memory_person_id, MemoryChunk.source_type == "profile")
        .delete(synchronize_session=False))

    for index, (content, embedding) in enumerate(chunks_with_embeddings):
        db.add(MemoryChunk(
            memory_person_id=memory_person_id,
            memory_file_id=None,
            source_type="profile",
            source_label="Profile",
            chunk_index=index,
            content=content,
            embedding=embedding,
        ))
    db.commit()
    return len(chunks_with_embeddings)


def similarity_search(db: Session, *, memory_person_id: int, query_embedding: list[float], top_k: int) -> list[MemoryChunk]:
    """Cosine-distance nearest neighbours via pgvector's <=> operator (needs the
    ivfflat/hnsw index created in the migration for this to stay fast at scale)."""
    return (
        db.query(MemoryChunk)
        .filter(MemoryChunk.memory_person_id == memory_person_id)
        .order_by(MemoryChunk.embedding.cosine_distance(query_embedding))
        .limit(top_k)
        .all()
    )


def delete_chunks_for_file(db: Session, memory_file_id: int) -> None:
    db.query(MemoryChunk).filter(MemoryChunk.memory_file_id == memory_file_id).delete(synchronize_session=False)
    db.commit()
