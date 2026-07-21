"""
Plain character-window chunker with overlap. Kept dependency-free and
deterministic on purpose so it's trivially unit-testable without a model
or a network call.
"""
from app.core.config import settings


def chunk_text(text: str, chunk_size: int | None = None, overlap: int | None = None) -> list[str]:
    chunk_size = chunk_size or settings.RAG_CHUNK_SIZE_CHARS
    overlap = overlap if overlap is not None else settings.RAG_CHUNK_OVERLAP_CHARS

    text = text.strip()
    if not text:
        return []
    if overlap >= chunk_size:
        raise ValueError("overlap must be smaller than chunk_size")

    chunks: list[str] = []
    start = 0
    length = len(text)

    while start < length:
        end = min(start + chunk_size, length)

        # try not to cut mid-sentence: back off to the last sentence-ish
        # boundary within this window, if there's a reasonable one
        if end < length:
            boundary = max(text.rfind(". ", start, end), text.rfind("\n", start, end))
            if boundary != -1 and boundary > start + (chunk_size // 3):
                end = boundary + 1

        piece = text[start:end].strip()
        if piece:
            chunks.append(piece)

        if end >= length:
            break
        start = max(end - overlap, start + 1)

    return chunks
