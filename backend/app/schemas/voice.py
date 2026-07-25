from datetime import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict


class VoiceReferenceResponse(BaseModel):
    id: int
    memory_person_id: int
    source: str
    original_name: str
    duration_seconds: Optional[int] = None
    status: str
    validation_note: Optional[str] = None
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)


class MessageVoiceResponse(BaseModel):
    id: int
    chat_message_id: int
    status: str
    trigger: str
    duration_seconds: Optional[int] = None
    error: Optional[str] = None
    device_used: Optional[str] = None
    generation_ms: Optional[int] = None
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)
