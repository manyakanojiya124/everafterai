"""
Generated speech audio for one specific ChatMessage. Kept as its own table
(rather than a column on ChatMessage) because generation is async and can
fail/retry independently of the message itself.
"""
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Text, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class MessageVoice(Base):
    __tablename__ = "message_voices"

    id = Column(Integer, primary_key=True, index=True)
    chat_message_id = Column(Integer, ForeignKey("chat_messages.id", ondelete="CASCADE"), nullable=False, index=True, unique=True)

    status = Column(String(30), nullable=False, default="pending")  # pending | generating | completed | failed
    trigger = Column(String(30), nullable=False, default="on_demand")  # "on_demand" | "auto_emotional"
    file_path = Column(String(1000), nullable=True)
    duration_seconds = Column(Integer, nullable=True)
    error = Column(Text, nullable=True)

    device_used = Column(String(20), nullable=True)  # "cuda" | "cpu"
    generation_ms = Column(Integer, nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    chat_message = relationship("ChatMessage", back_populates="voice")
