from datetime import date, datetime
from typing import List, Optional
from pydantic import BaseModel, ConfigDict


class MemoryPersonBase(BaseModel):
    full_name: str
    nickname: Optional[str] = None
    relationship: str
    gender: Optional[str] = None
    birth_date: Optional[date] = None
    passing_date: Optional[date] = None
    profile_picture: Optional[str] = None
    occupation: Optional[str] = None
    country: Optional[str] = None
    city: Optional[str] = None
    languages: Optional[str] = None
    biography: Optional[str] = None
    favorite_quote: Optional[str] = None
    favorite_food: Optional[str] = None
    favorite_song: Optional[str] = None
    favorite_color: Optional[str] = None
    hobbies: Optional[str] = None
    personality_traits: List[str] = []
    bond_story: Optional[str] = None
    nickname_for_user: Optional[str] = None
    special_memories: Optional[str] = None
    topics_to_avoid: Optional[str] = None
    communication_style: Optional[str] = None
    speaking_style: Optional[str] = None
    humor_level: Optional[str] = None
    emotional_tone: Optional[str] = None
    is_public: bool = False


class MemoryPersonCreate(MemoryPersonBase):
    pass


class MemoryPersonUpdate(BaseModel):
    full_name: Optional[str] = None
    nickname: Optional[str] = None
    relationship: Optional[str] = None
    gender: Optional[str] = None
    birth_date: Optional[date] = None
    passing_date: Optional[date] = None
    profile_picture: Optional[str] = None
    occupation: Optional[str] = None
    country: Optional[str] = None
    city: Optional[str] = None
    languages: Optional[str] = None
    biography: Optional[str] = None
    favorite_quote: Optional[str] = None
    favorite_food: Optional[str] = None
    favorite_song: Optional[str] = None
    favorite_color: Optional[str] = None
    hobbies: Optional[str] = None
    personality_traits: Optional[List[str]] = None
    bond_story: Optional[str] = None
    nickname_for_user: Optional[str] = None
    special_memories: Optional[str] = None
    topics_to_avoid: Optional[str] = None
    communication_style: Optional[str] = None
    speaking_style: Optional[str] = None
    humor_level: Optional[str] = None
    emotional_tone: Optional[str] = None
    is_public: Optional[bool] = None


class MemoryPersonResponse(MemoryPersonBase):
    id: int
    user_id: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)
