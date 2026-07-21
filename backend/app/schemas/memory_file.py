from datetime import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict


class MemoryFileResponse(BaseModel):
    id: int
    memory_person_id: int
    file_name: str
    original_name: str
    file_path: str
    thumbnail_path: Optional[str] = None
    file_type: str
    mime_type: str
    extension: Optional[str] = None
    file_size: Optional[int] = None
    duration: Optional[int] = None
    description: Optional[str] = None
    is_processed: bool
    processing_status: str
    processing_error: Optional[str] = None
    chunk_count: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)


class MemoryFileUpdate(BaseModel):
    description: Optional[str] = None
