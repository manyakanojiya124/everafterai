"""
A VoiceReference is the clean audio sample XTTS clones from for a given
memory person. One active reference per companion for now (dedicated
upload). The `source` field exists so a later "promote a Memory Vault
file to reference" flow can reuse this same table without a schema change
— it would just insert a row with source="vault_file" and memory_file_id set.
"""
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class VoiceReference(Base):
    __tablename__ = "voice_references"

    id = Column(Integer, primary_key=True, index=True)
    memory_person_id = Column(Integer, ForeignKey("memory_people.id", ondelete="CASCADE"), nullable=False, index=True, unique=True)

    # nullable FK so this table can later point at an existing Memory Vault
    # upload instead of a dedicated one, without a migration
    memory_file_id = Column(Integer, ForeignKey("memory_files.id", ondelete="SET NULL"), nullable=True)

    source = Column(String(30), nullable=False, default="dedicated_upload")  # "dedicated_upload" | "vault_file"
    file_path = Column(String(1000), nullable=False)
    original_name = Column(String(255), nullable=False)
    duration_seconds = Column(Integer, nullable=True)

    status = Column(String(30), nullable=False, default="ready")  # "ready" | "too_short" | "invalid"
    validation_note = Column(Text, nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    memory_person = relationship("MemoryPerson", back_populates="voice_reference")
