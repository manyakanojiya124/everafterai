from sqlalchemy import (
    Boolean,
    Column,
    Date,
    DateTime,
    ForeignKey,
    Integer,
    String,
    Text,
    JSON,
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class MemoryPerson(Base):
    __tablename__ = "memory_people"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False,
        index=True,
    )

    # ==========================================================
    # Basic Information
    # ==========================================================

    full_name = Column(String(200), nullable=False)

    nickname = Column(String(100))

    # IMPORTANT:
    # Python attribute name != SQL column name
    relationship_type = Column(
        "relationship",
        String(100),
        nullable=False,
    )

    gender = Column(String(50))

    birth_date = Column(Date)

    passing_date = Column(Date)

    # ==========================================================
    # Profile
    # ==========================================================

    profile_picture = Column(String(500))

    occupation = Column(String(200))

    country = Column(String(120))

    city = Column(String(120))

    languages = Column(String(250))

    # ==========================================================
    # Personality
    # ==========================================================

    biography = Column(Text)

    favorite_quote = Column(Text)

    favorite_food = Column(String(150))

    favorite_song = Column(String(200))

    favorite_color = Column(String(100))

    hobbies = Column(Text)

    personality_traits = Column(JSON)

    # ==========================================================
    # Relationship Details
    # ==========================================================

    bond_story = Column(Text)

    nickname_for_user = Column(String(120))

    special_memories = Column(Text)

    topics_to_avoid = Column(Text)

    communication_style = Column(Text)

    # ==========================================================
    # AI Behaviour
    # ==========================================================

    speaking_style = Column(Text)

    humor_level = Column(String(100))

    emotional_tone = Column(String(100))

    # ==========================================================
    # Settings
    # ==========================================================

    is_public = Column(
        Boolean,
        default=False,
        nullable=False,
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now(),
    )

    # ==========================================================
    # Relationships
    # ==========================================================

    owner = relationship(
        "User",
        back_populates="memory_people",
    )

    files = relationship(
        "MemoryFile",
        back_populates="memory_person",
        cascade="all, delete-orphan",
    )

    @property
    def relationship(self):
     return self.relationship_type