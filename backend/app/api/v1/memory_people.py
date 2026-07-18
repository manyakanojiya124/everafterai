from typing import List

from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.db.database import get_db

from app.dependecies.auth import get_current_user

from app.models.user import User

from app.schemas.memory_person import (
    MemoryPersonCreate,
    MemoryPersonResponse,
    MemoryPersonUpdate,
)

from app.services.memory_person_service import (
    create_companion,
    list_companions,
    get_companion,
    edit_companion,
    remove_companion,
)

router = APIRouter(
    prefix="/api/v1/memory-people",
    tags=["Memory People"],
)


@router.post(
    "",
    response_model=MemoryPersonResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_memory_person(
    payload: MemoryPersonCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
): 
    print(current_user)
    return create_companion(
        db=db,
        user_id=current_user.id,
        payload=payload,
    )


@router.get(
    "",
    response_model=List[MemoryPersonResponse],
)
def get_memory_people(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return list_companions(
        db=db,
        user_id=current_user.id,
    )


@router.get(
    "/{companion_id}",
    response_model=MemoryPersonResponse,
)
def get_memory_person(
    companion_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return get_companion(
        db=db,
        user_id=current_user.id,
        companion_id=companion_id,
    )


@router.patch(
    "/{companion_id}",
    response_model=MemoryPersonResponse,
)
def update_memory_person(
    companion_id: int,
    payload: MemoryPersonUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return edit_companion(
        db=db,
        user_id=current_user.id,
        companion_id=companion_id,
        payload=payload,
    )


@router.delete(
    "/{companion_id}",
)
def delete_memory_person(
    companion_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return remove_companion(
        db=db,
        user_id=current_user.id,
        companion_id=companion_id,
    )