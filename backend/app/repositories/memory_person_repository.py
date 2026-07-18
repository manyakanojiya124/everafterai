from sqlalchemy.orm import Session

from app.models.memory_person import MemoryPerson
from app.schemas.memory_person import (
    MemoryPersonCreate,
    MemoryPersonUpdate,
)


def create_memory_person(
    db: Session,
    user_id: int,
    payload: MemoryPersonCreate,
):
    data = payload.model_dump()

    data["relationship_type"] = data.pop("relationship")

    memory_person = MemoryPerson(
        user_id=user_id,
        **data,
    )

    db.add(memory_person)
    db.commit()
    db.refresh(memory_person)

    return memory_person

def get_memory_people(
    db: Session,
    user_id: int,
):
    return (
        db.query(MemoryPerson)
        .filter(MemoryPerson.user_id == user_id)
        .order_by(MemoryPerson.created_at.desc())
        .all()
    )


def get_memory_person(
    db: Session,
    user_id: int,
    memory_person_id: int,
):
    return (
        db.query(MemoryPerson)
        .filter(
            MemoryPerson.id == memory_person_id,
            MemoryPerson.user_id == user_id,
        )
        .first()
    )


def update_memory_person(
    db: Session,
    memory_person: MemoryPerson,
    payload: MemoryPersonUpdate,
):
    data = payload.model_dump(exclude_unset=True)

    if "relationship" in data:
        data["relationship_type"] = data.pop("relationship")

    for key, value in data.items():
        setattr(memory_person, key, value)

    db.commit()
    db.refresh(memory_person)

    return memory_person

def delete_memory_person(
    db: Session,
    memory_person: MemoryPerson,
):
    db.delete(memory_person)
    db.commit()