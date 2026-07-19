from sqlalchemy import (
    Boolean, Column, DateTime, ForeignKey, Integer, String, BigInteger, Text,
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class MemoryFile(Base):
    __tablename__ = "memory_files"

    id = Column(Integer, primary_key=True, index=True)
    memory_person_id = Column(Integer, ForeignKey("memory_people.id", ondelete="CASCADE"), nullable=False, index=True)

    file_name = Column(String(255), nullable=False)
    original_name = Column(String(255), nullable=False)
    file_path = Column(String(1000), nullable=False)
    thumbnail_path = Column(String(1000), nullable=True)

    file_type = Column(String(50), nullable=False)  # image, video, audio, document, chat, email, letter
    mime_type = Column(String(120), nullable=False)
    extension = Column(String(20), nullable=True)
    file_size = Column(BigInteger, nullable=True)
    duration = Column(Integer, nullable=True)  # seconds
    description = Column(Text, nullable=True)

    is_processed = Column(Boolean, default=False, nullable=False)
    processing_status = Column(String(50), default="pending", nullable=False)  # pending, processing, completed, failed
    processing_error = Column(Text, nullable=True)

    extracted_text = Column(Text, nullable=True)
    embedding_id = Column(String(255), nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    memory_person = relationship("MemoryPerson", back_populates="files")
