"""
Local, free embeddings via sentence-transformers — no API key, no per-call
cost. The model loads lazily on first use and stays cached in-process so
repeated calls (chunking a big upload, then a chat query seconds later)
don't reload it.

Swappable: if you later want a hosted embedding API instead, this is the
only file that needs to change — everything else calls embed_text() /
embed_texts() and doesn't know or care how the vector was produced.
"""
from functools import lru_cache

from app.core.config import settings


@lru_cache(maxsize=1)
def _get_model():
    from sentence_transformers import SentenceTransformer
    return SentenceTransformer(settings.EMBEDDING_MODEL_NAME)


def embed_texts(texts: list[str]) -> list[list[float]]:
    if not texts:
        return []
    model = _get_model()
    vectors = model.encode(texts, normalize_embeddings=True, show_progress_bar=False)
    return [v.tolist() for v in vectors]


def embed_text(text: str) -> list[float]:
    return embed_texts([text])[0]
