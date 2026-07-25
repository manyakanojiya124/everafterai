from pydantic_settings import BaseSettings, SettingsConfigDict
from pathlib import Path


class Settings(BaseSettings):
    DATABASE_URL: str

    SECRET_KEY: str
    GOOGLE_CLIENT_ID: str
    ALGORITHM: str

    ACCESS_TOKEN_EXPIRE_MINUTES: int

    REFRESH_TOKEN_EXPIRE_DAYS: int = 30
    CORS_ORIGINS: str = "http://localhost:3000"
    REFRESH_COOKIE_SECURE: bool = False
    EMAIL_VERIFICATION_EXPIRE_MINUTES: int = 10
    SMTP_HOST: str | None = None
    SMTP_PORT: int = 587
    SMTP_USERNAME: str | None = None
    SMTP_PASSWORD: str | None = None
    SMTP_FROM_EMAIL: str | None = None
    SMTP_USE_TLS: bool = True

    UPLOAD_DIR: str = "uploads"
    MAX_UPLOAD_SIZE_MB: int = 200
    ALLOWED_IMAGE_TYPES: str = "image/jpeg,image/png,image/webp,image/gif"
    ALLOWED_AUDIO_TYPES: str = "audio/mpeg,audio/wav,audio/mp4,audio/x-m4a,audio/webm,audio/ogg"
    ALLOWED_VIDEO_TYPES: str = "video/mp4,video/quicktime,video/webm"
    ALLOWED_DOCUMENT_TYPES: str = "application/pdf,text/plain,application/json,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"

    # Chat LLM — OpenRouter (OpenAI-compatible), free-tier model by default
    OPENAI_API_KEY: str
    OPENAI_MODEL: str = "nvidia/nemotron-3-ultra-550b-a55b:free"
    OPENAI_BASE_URL: str = "https://openrouter.ai/api/v1"

    # Embeddings — local, free, no API key
    EMBEDDING_MODEL_NAME: str = "sentence-transformers/all-MiniLM-L6-v2"
    EMBEDDING_DIMENSIONS: int = 384

    # RAG
    RAG_CHUNK_SIZE_CHARS: int = 1000
    RAG_CHUNK_OVERLAP_CHARS: int = 150
    RAG_TOP_K: int = 5

    VOICE_ENABLED: bool = False
    XTTS_MODEL_NAME: str = "tts_models/multilingual/multi-dataset/xtts_v2"
    XTTS_DEVICE: str = "auto"  # "auto" | "cuda" | "cpu"

    model_config = SettingsConfigDict(
        env_file=Path(__file__).resolve().parents[2] / ".env",
        extra="ignore"
    )


settings = Settings()
