from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    # ==========================================================
    # Database
    # ==========================================================
    DATABASE_URL: str

    # ==========================================================
    # Authentication
    # ==========================================================
    SECRET_KEY: str
    GOOGLE_CLIENT_ID: str
    ALGORITHM: str

    ACCESS_TOKEN_EXPIRE_MINUTES: int
    REFRESH_TOKEN_EXPIRE_DAYS: int = 30

    # ==========================================================
    # Frontend
    # ==========================================================
    APP_NAME: str = "EverAfter AI"
    APP_URL: str = "http://localhost:3000"

    CORS_ORIGINS: str = "http://localhost:3000"
    REFRESH_COOKIE_SECURE: bool = False

    # ==========================================================
    # Email
    # ==========================================================
    EMAIL_VERIFICATION_EXPIRE_MINUTES: int = 10

    SMTP_HOST: str | None = None
    SMTP_PORT: int = 587
    SMTP_USERNAME: str | None = None
    SMTP_PASSWORD: str | None = None
    SMTP_FROM_EMAIL: str | None = None
    SMTP_USE_TLS: bool = True

    # ==========================================================
    # Uploads
    # ==========================================================
    UPLOAD_DIR: str = "uploads"
    MAX_UPLOAD_SIZE_MB: int = 200

    ALLOWED_IMAGE_TYPES: str = (
        "image/jpeg,image/png,image/webp,image/gif"
    )

    ALLOWED_AUDIO_TYPES: str = (
        "audio/mpeg,"
        "audio/wav,"
        "audio/mp4,"
        "audio/x-m4a,"
        "audio/webm,"
        "audio/ogg"
    )

    ALLOWED_VIDEO_TYPES: str = (
        "video/mp4,"
        "video/quicktime,"
        "video/webm"
    )

    ALLOWED_DOCUMENT_TYPES: str = (
        "application/pdf,"
        "text/plain,"
        "application/msword,"
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    )

    # ==========================================================
    # LLM Provider (Provider Agnostic)
    # ==========================================================
    LLM_PROVIDER: str = "openrouter"

    LLM_API_KEY: str = ""

    LLM_BASE_URL: str = "https://openrouter.ai/api/v1"

    LLM_MODEL: str = "openrouter/free"

    # ==========================================================
    # Settings
    # ==========================================================
    model_config = SettingsConfigDict(
        env_file=Path(__file__).resolve().parents[2] / ".env",
        extra="ignore",
    )


settings = Settings()