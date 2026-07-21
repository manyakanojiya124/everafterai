from typing import List, Optional

from fastapi import APIRouter, Depends, File, Form, UploadFile, status
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.dependecies.auth import get_current_user
from app.models.user import User
from app.schemas.memory_file import MemoryFileResponse
from app.services.memory_file_service import get_single_memory_file, list_memory_files, remove_memory_file, upload_memory_file

router = APIRouter(prefix="/api/v1/memory-people/{companion_id}/files", tags=["Memory Vault"])


@router.post("", response_model=MemoryFileResponse, status_code=status.HTTP_201_CREATED)
def upload_file(
    companion_id: int,
    file: UploadFile = File(...),
    description: Optional[str] = Form(None),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return upload_memory_file(db, current_user.id, companion_id, file, description)


@router.get("", response_model=List[MemoryFileResponse])
def list_files(
    companion_id: int, file_type: Optional[str] = None,
    db: Session = Depends(get_db), current_user: User = Depends(get_current_user),
):
    return list_memory_files(db, current_user.id, companion_id, file_type)


@router.get("/{file_id}", response_model=MemoryFileResponse)
def get_file(companion_id: int, file_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return get_single_memory_file(db, current_user.id, companion_id, file_id)


@router.delete("/{file_id}")
def delete_file(companion_id: int, file_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return remove_memory_file(db, current_user.id, companion_id, file_id)
