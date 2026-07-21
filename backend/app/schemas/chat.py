from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, ConfigDict, Field


class ChatMessageCreate(BaseModel):
    message: str = Field(min_length=1, max_length=4000)


class ChatMessageResponse(BaseModel):
    id: int
    role: str
    content: str
    is_crisis_flagged: bool
    is_safety_response: bool
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


class RetrievedSource(BaseModel):
    source_type: str
    source_label: Optional[str] = None
    snippet: str


class ChatReplyResponse(BaseModel):
    user_message: ChatMessageResponse
    assistant_message: ChatMessageResponse
    is_crisis_response: bool
    resources: Optional[List[str]] = None
    sources_used: List[RetrievedSource] = []


class ChatHistoryResponse(BaseModel):
    memory_person_id: int
    messages: List[ChatMessageResponse]
