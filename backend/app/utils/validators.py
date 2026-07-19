from fastapi import HTTPException, status

from app.core.config import settings

CATEGORY_MAP = {
    "image": settings.ALLOWED_IMAGE_TYPES.split(","),
    "video": settings.ALLOWED_VIDEO_TYPES.split(","),
    "audio": settings.ALLOWED_AUDIO_TYPES.split(","),
    "document": settings.ALLOWED_DOCUMENT_TYPES.split(","),
}


def classify_and_validate_mime(mime_type: str) -> str:
    for category, allowed in CATEGORY_MAP.items():
        if mime_type in allowed:
            return category
    raise HTTPException(
        status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
        detail=f"Unsupported file type: {mime_type}",
    )


def validate_file_size(size_bytes: int) -> None:
    max_bytes = settings.MAX_UPLOAD_SIZE_MB * 1024 * 1024
    if size_bytes > max_bytes:
        raise HTTPException(
            status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
            detail=f"File exceeds the {settings.MAX_UPLOAD_SIZE_MB}MB limit",
        )
