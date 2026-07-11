from typing import Annotated

from fastapi import APIRouter, Depends
from app.models import User

from app.dependecies.auth import get_current_user
from app.schemas.user import UserResponse

router = APIRouter(prefix="/api/v1/users", tags=["Users"])


@router.get("/me", response_model=UserResponse)
def current_user(user: Annotated[User, Depends(get_current_user)]):
    return user
