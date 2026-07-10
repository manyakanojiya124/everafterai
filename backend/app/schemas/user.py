from pydantic import BaseModel, EmailStr, Field
from datetime import datetime


class UserCreate(BaseModel):
    full_name: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    full_name: str
    email: EmailStr
    profile_picture: str | None = None
    provider: str
    is_verified: bool
    is_active: bool
    created_at: datetime

    model_config = {
        "from_attributes": True
    }