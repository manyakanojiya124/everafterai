from pydantic import BaseModel, EmailStr, Field, field_validator, model_validator
from datetime import datetime


class UserCreate(BaseModel):
    first_name: str = Field(min_length=1, max_length=75)
    last_name: str = Field(min_length=1, max_length=75)
    email: EmailStr
    password: str = Field(min_length=8, max_length=72)
    confirm_password: str = Field(min_length=8, max_length=72)

    @field_validator("first_name", "last_name")
    @classmethod
    def names_must_be_letters(cls, value: str) -> str:
        value = value.strip()
        if not value.replace(" ", "").replace("-", "").replace("'", "").isalpha():
            raise ValueError("Name may only contain letters, spaces, apostrophes, and hyphens")
        return value

    @field_validator("email")
    @classmethod
    def email_must_use_supported_provider(cls, value: EmailStr) -> str:
        email = str(value).lower()
        supported_domains = {"gmail.com", "outlook.com", "hotmail.com", "live.com", "yahoo.com", "yahoo.co.in"}
        if email.rsplit("@", 1)[1] not in supported_domains:
            raise ValueError("Use a Gmail, Outlook, Hotmail, Live, or Yahoo email address")
        return email

    @model_validator(mode="after")
    def passwords_must_match(self):
        if self.password != self.confirm_password:
            raise ValueError("Passwords do not match")
        return self


class UserLogin(BaseModel):
    email: EmailStr
    password: str = Field(min_length=1, max_length=72)


class UserResponse(BaseModel):
    id: int
    full_name: str
    email: EmailStr
    profile_picture: str | None = None
    provider: str
    is_verified: bool
    is_active: bool
    created_at: datetime

    model_config = {"from_attributes": True}
