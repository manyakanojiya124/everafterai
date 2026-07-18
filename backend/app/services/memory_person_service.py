from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.repositories.memory_person_repository import (
    create_memory_person,
    delete_memory_person,
    get_memory_people,
    get_memory_person,
    update_memory_person,
)

from app.schemas.memory_person import (
    MemoryPersonCreate,
    MemoryPersonUpdate,
)


def create_companion(
    db: Session,
    user_id: int,
    payload: MemoryPersonCreate,
):
    return create_memory_person(
        db,
        user_id,
        payload,
    )


def list_companions(
    db: Session,
    user_id: int,
):
    return get_memory_people(
        db,
        user_id,
    )


def get_companion(
    db: Session,
    user_id: int,
    companion_id: int,
):
    companion = get_memory_person(
        db,
        user_id,
        companion_id,
    )

    if companion is None:
        raise HTTPException(
            status_code=404,
            detail="Memory companion not found.",
        )

    return companion


def edit_companion(
    db: Session,
    user_id: int,
    companion_id: int,
    payload: MemoryPersonUpdate,
):
    companion = get_companion(
        db,
        user_id,
        companion_id,
    )

    return update_memory_person(
        db,
        companion,
        payload,
    )


def remove_companion(
    db: Session,
    user_id: int,
    companion_id: int,
):
    companion = get_companion(
        db,
        user_id,
        companion_id,
    )

    delete_memory_person(
        db,
        companion,
    )

    return {
        "message": "Memory companion deleted."
    }