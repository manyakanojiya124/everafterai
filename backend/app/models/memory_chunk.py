"""
A MemoryChunk is one embeddable slice of text belonging to a memory person:
either extracted from an uploaded file (memory_file_id set) or a structured
fact pulled straight from their profile fields (memory_file_id null,
source_type="profile"). Each chunk carries its own embedding vector so it
can be retrieved independently and cited back to its source.
"""
from pgvector.sqlalchemy import Vector
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.core.config import settings
from app.db.database import Base


class MemoryChunk(Base):
    __tablename__ = "memory_chunks"

    id = Column(Integer, primary_key=True, index=True)

    memory_person_id = Column(Integer, ForeignKey("memory_people.id", ondelete="CASCADE"), nullable=False, index=True)
    memory_file_id = Column(Integer, ForeignKey("memory_files.id", ondelete="CASCADE"), nullable=True, index=True)

    source_type = Column(String(30), nullable=False, default="file")  # "file" | "profile"
    source_label = Column(String(255), nullable=True)  # e.g. original filename, or "Profile: bond_story"
    chunk_index = Column(Integer, nullable=False, default=0)

    content = Column(Text, nullable=False)
    embedding = Column(Vector(settings.EMBEDDING_DIMENSIONS), nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())

    memory_person = relationship("MemoryPerson", back_populates="chunks")
    memory_file = relationship("MemoryFile", back_populates="chunks")
