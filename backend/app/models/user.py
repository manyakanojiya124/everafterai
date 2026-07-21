from sqlalchemy import Boolean, Column, DateTime, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(75), nullable=False)
    last_name = Column(String(75), nullable=False)
    email = Column(String(255), unique=True, nullable=False, index=True)
    password_hash = Column(String(255), nullable=True)
    profile_picture = Column(String(500), nullable=True)
    provider = Column(String(30), default="email", server_default="email", nullable=False)
    google_id = Column(String(255), unique=True, nullable=True)
    role = Column(String(30), default="user", server_default="user", nullable=False)
    is_verified = Column(Boolean, default=False, server_default="false", nullable=False)
    is_active = Column(Boolean, default=True, server_default="true", nullable=False)
    last_login = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    refresh_tokens = relationship("RefreshToken", back_populates="user", cascade="all, delete-orphan")
    email_tokens = relationship("EmailVerificationToken", back_populates="user", cascade="all, delete-orphan")
    password_reset_tokens = relationship("PasswordResetToken", back_populates="user", cascade="all, delete-orphan")
    memory_people = relationship("MemoryPerson", back_populates="owner", cascade="all, delete-orphan", passive_deletes=True)

    @property
    def full_name(self) -> str:
        return f"{self.first_name} {self.last_name}".strip()
