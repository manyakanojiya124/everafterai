# EverAfter AI Backend Source

Generated automatically.

---

## Project Tree

```text
app
├── __pycache__
│   ├── __init__.cpython-311.pyc
│   ├── __init__.cpython-312.pyc
│   ├── __init__.cpython-314.pyc
│   ├── main.cpython-311.pyc
│   ├── main.cpython-312.pyc
│   └── main.cpython-314.pyc
├── api
│   ├── __pycache__
│   │   ├── __init__.cpython-311.pyc
│   │   ├── __init__.cpython-312.pyc
│   │   └── __init__.cpython-314.pyc
│   ├── v1
│   │   ├── __pycache__
│   │   │   ├── __init__.cpython-311.pyc
│   │   │   ├── __init__.cpython-312.pyc
│   │   │   ├── __init__.cpython-314.pyc
│   │   │   ├── auth.cpython-311.pyc
│   │   │   ├── auth.cpython-312.pyc
│   │   │   ├── auth.cpython-314.pyc
│   │   │   ├── chat.cpython-311.pyc
│   │   │   ├── chat.cpython-312.pyc
│   │   │   ├── chat.cpython-314.pyc
│   │   │   ├── memory_files.cpython-311.pyc
│   │   │   ├── memory_files.cpython-312.pyc
│   │   │   ├── memory_files.cpython-314.pyc
│   │   │   ├── memory_people.cpython-311.pyc
│   │   │   ├── memory_people.cpython-312.pyc
│   │   │   ├── memory_people.cpython-314.pyc
│   │   │   ├── users.cpython-311.pyc
│   │   │   ├── users.cpython-312.pyc
│   │   │   ├── users.cpython-314.pyc
│   │   │   └── voice.cpython-311.pyc
│   │   ├── __init__.py
│   │   ├── auth.py
│   │   ├── chat.py
│   │   ├── memory_files.py
│   │   ├── memory_people.py
│   │   ├── users.py
│   │   └── voice.py
│   └── __init__.py
├── core
│   ├── __pycache__
│   │   ├── __init__.cpython-311.pyc
│   │   ├── __init__.cpython-312.pyc
│   │   ├── __init__.cpython-314.pyc
│   │   ├── config.cpython-311.pyc
│   │   ├── config.cpython-312.pyc
│   │   ├── config.cpython-314.pyc
│   │   ├── oauth.cpython-311.pyc
│   │   ├── oauth.cpython-312.pyc
│   │   ├── oauth.cpython-314.pyc
│   │   ├── security.cpython-311.pyc
│   │   ├── security.cpython-312.pyc
│   │   └── security.cpython-314.pyc
│   ├── __init__.py
│   ├── config.py
│   ├── jwt.py
│   ├── oauth.py
│   └── security.py
├── db
│   ├── __pycache__
│   │   ├── __init__.cpython-311.pyc
│   │   ├── __init__.cpython-312.pyc
│   │   ├── __init__.cpython-314.pyc
│   │   ├── base.cpython-311.pyc
│   │   ├── base.cpython-312.pyc
│   │   ├── base.cpython-314.pyc
│   │   ├── database.cpython-311.pyc
│   │   ├── database.cpython-312.pyc
│   │   └── database.cpython-314.pyc
│   ├── __init__.py
│   ├── base.py
│   ├── database.py
│   └── session.py
├── dependecies
│   ├── __pycache__
│   │   ├── __init__.cpython-311.pyc
│   │   ├── __init__.cpython-312.pyc
│   │   ├── __init__.cpython-314.pyc
│   │   ├── auth.cpython-311.pyc
│   │   ├── auth.cpython-312.pyc
│   │   └── auth.cpython-314.pyc
│   ├── __init__.py
│   ├── auth.py
│   └── database.py
├── expectations
│   └── auth.py
├── middleware
│   ├── __pycache__
│   │   ├── __init__.cpython-311.pyc
│   │   ├── __init__.cpython-312.pyc
│   │   ├── logging.cpython-311.pyc
│   │   └── logging.cpython-312.pyc
│   ├── __init__.py
│   ├── auth_middleware.py
│   └── logging.py
├── models
│   ├── __pycache__
│   │   ├── __init__.cpython-311.pyc
│   │   ├── __init__.cpython-312.pyc
│   │   ├── __init__.cpython-314.pyc
│   │   ├── chat_message.cpython-311.pyc
│   │   ├── chat_message.cpython-312.pyc
│   │   ├── chat_message.cpython-314.pyc
│   │   ├── email_verification.cpython-311.pyc
│   │   ├── email_verification.cpython-312.pyc
│   │   ├── email_verification.cpython-314.pyc
│   │   ├── memory_chunk.cpython-311.pyc
│   │   ├── memory_chunk.cpython-312.pyc
│   │   ├── memory_file.cpython-311.pyc
│   │   ├── memory_file.cpython-312.pyc
│   │   ├── memory_file.cpython-314.pyc
│   │   ├── memory_person.cpython-311.pyc
│   │   ├── memory_person.cpython-312.pyc
│   │   ├── memory_person.cpython-314.pyc
│   │   ├── message_voice.cpython-311.pyc
│   │   ├── message_voice.cpython-312.pyc
│   │   ├── password_reset.cpython-311.pyc
│   │   ├── password_reset.cpython-312.pyc
│   │   ├── password_reset.cpython-314.pyc
│   │   ├── refresh_token.cpython-311.pyc
│   │   ├── refresh_token.cpython-312.pyc
│   │   ├── refresh_token.cpython-314.pyc
│   │   ├── user.cpython-311.pyc
│   │   ├── user.cpython-312.pyc
│   │   ├── user.cpython-314.pyc
│   │   ├── voice_reference.cpython-311.pyc
│   │   └── voice_reference.cpython-312.pyc
│   ├── __init__.py
│   ├── chat_message.py
│   ├── email_verification.py
│   ├── memory_chunk.py
│   ├── memory_file.py
│   ├── memory_person.py
│   ├── message_voice.py
│   ├── password_reset.py
│   ├── refresh_token.py
│   ├── user.py
│   └── voice_reference.py
├── repositories
│   ├── __pycache__
│   │   ├── __init__.cpython-311.pyc
│   │   ├── __init__.cpython-312.pyc
│   │   ├── __init__.cpython-314.pyc
│   │   ├── chat_repository.cpython-311.pyc
│   │   ├── chat_repository.cpython-312.pyc
│   │   ├── chat_repository.cpython-314.pyc
│   │   ├── email_verification_repository.cpython-311.pyc
│   │   ├── email_verification_repository.cpython-312.pyc
│   │   ├── email_verification_repository.cpython-314.pyc
│   │   ├── memory_chunk_repository.cpython-311.pyc
│   │   ├── memory_chunk_repository.cpython-312.pyc
│   │   ├── memory_file_repository.cpython-311.pyc
│   │   ├── memory_file_repository.cpython-312.pyc
│   │   ├── memory_file_repository.cpython-314.pyc
│   │   ├── memory_person_repository.cpython-311.pyc
│   │   ├── memory_person_repository.cpython-312.pyc
│   │   ├── memory_person_repository.cpython-314.pyc
│   │   ├── message_voice_repository.cpython-311.pyc
│   │   ├── token_repository.cpython-311.pyc
│   │   ├── token_repository.cpython-312.pyc
│   │   ├── token_repository.cpython-314.pyc
│   │   ├── user_repository.cpython-311.pyc
│   │   ├── user_repository.cpython-312.pyc
│   │   ├── user_repository.cpython-314.pyc
│   │   └── voice_reference_repository.cpython-311.pyc
│   ├── __init__.py
│   ├── chat_repository.py
│   ├── email_verification_repository.py
│   ├── memory_chunk_repository.py
│   ├── memory_file_repository.py
│   ├── memory_person_repository.py
│   ├── message_voice_repository.py
│   ├── token_repository.py
│   ├── user_repository.py
│   └── voice_reference_repository.py
├── schemas
│   ├── __pycache__
│   │   ├── __init__.cpython-311.pyc
│   │   ├── __init__.cpython-312.pyc
│   │   ├── __init__.cpython-314.pyc
│   │   ├── auth.cpython-311.pyc
│   │   ├── auth.cpython-312.pyc
│   │   ├── auth.cpython-314.pyc
│   │   ├── chat.cpython-311.pyc
│   │   ├── chat.cpython-312.pyc
│   │   ├── chat.cpython-314.pyc
│   │   ├── memory_file.cpython-311.pyc
│   │   ├── memory_file.cpython-312.pyc
│   │   ├── memory_file.cpython-314.pyc
│   │   ├── memory_person.cpython-311.pyc
│   │   ├── memory_person.cpython-312.pyc
│   │   ├── memory_person.cpython-314.pyc
│   │   ├── user.cpython-311.pyc
│   │   ├── user.cpython-312.pyc
│   │   ├── user.cpython-314.pyc
│   │   └── voice.cpython-311.pyc
│   ├── __init__.py
│   ├── auth.py
│   ├── chat.py
│   ├── memory_file.py
│   ├── memory_person.py
│   ├── token.py
│   ├── user.py
│   └── voice.py
├── services
│   ├── __pycache__
│   │   ├── __init__.cpython-311.pyc
│   │   ├── __init__.cpython-312.pyc
│   │   ├── __init__.cpython-314.pyc
│   │   ├── auth_service.cpython-311.pyc
│   │   ├── auth_service.cpython-312.pyc
│   │   ├── auth_service.cpython-314.pyc
│   │   ├── chat_service.cpython-311.pyc
│   │   ├── chat_service.cpython-312.pyc
│   │   ├── chat_service.cpython-314.pyc
│   │   ├── email_service.cpython-311.pyc
│   │   ├── email_service.cpython-312.pyc
│   │   ├── email_service.cpython-314.pyc
│   │   ├── embedding_service.cpython-311.pyc
│   │   ├── embedding_service.cpython-312.pyc
│   │   ├── emotion_service.cpython-311.pyc
│   │   ├── ingestion_service.cpython-311.pyc
│   │   ├── ingestion_service.cpython-312.pyc
│   │   ├── llm_service.cpython-311.pyc
│   │   ├── llm_service.cpython-312.pyc
│   │   ├── llm_service.cpython-314.pyc
│   │   ├── memory_file_service.cpython-311.pyc
│   │   ├── memory_file_service.cpython-312.pyc
│   │   ├── memory_file_service.cpython-314.pyc
│   │   ├── memory_person_service.cpython-311.pyc
│   │   ├── memory_person_service.cpython-312.pyc
│   │   ├── memory_person_service.cpython-314.pyc
│   │   ├── message_voice_service.cpython-311.pyc
│   │   ├── oauth_service.cpython-311.pyc
│   │   ├── oauth_service.cpython-312.pyc
│   │   ├── oauth_service.cpython-314.pyc
│   │   ├── profile_picture_service.cpython-311.pyc
│   │   ├── profile_picture_service.cpython-312.pyc
│   │   ├── retrieval_service.cpython-311.pyc
│   │   ├── retrieval_service.cpython-312.pyc
│   │   ├── safety_service.cpython-311.pyc
│   │   ├── safety_service.cpython-312.pyc
│   │   ├── safety_service.cpython-314.pyc
│   │   ├── voice_reference_service.cpython-311.pyc
│   │   └── voice_synthesis_service.cpython-311.pyc
│   ├── __init__.py
│   ├── auth_service.py
│   ├── chat_service.py
│   ├── email_service.py
│   ├── embedding_service.py
│   ├── emotion_service.py
│   ├── ingestion_service.py
│   ├── llm_service.py
│   ├── memory_file_service.py
│   ├── memory_person_service.py
│   ├── message_voice_service.py
│   ├── oauth_service.py
│   ├── profile_picture_service.py
│   ├── retrieval_service.py
│   ├── safety_service.py
│   ├── token_service.py
│   ├── voice_reference_service.py
│   └── voice_synthesis_service.py
├── tests
│   ├── __init__.py
│   ├── conftest.py
│   ├── test_auth.py
│   ├── test_chat_service.py
│   ├── test_chunking.py
│   ├── test_emotion_service.py
│   ├── test_ingestion.py
│   ├── test_json_flatten.py
│   ├── test_message_voice_service.py
│   ├── test_retrieval.py
│   ├── test_safety.py
│   ├── test_users.py
│   └── test_voice_synthesis_service.py
├── utils
│   ├── __pycache__
│   │   ├── __init__.cpython-311.pyc
│   │   ├── __init__.cpython-312.pyc
│   │   ├── __init__.cpython-314.pyc
│   │   ├── helpers.cpython-311.pyc
│   │   ├── helpers.cpython-312.pyc
│   │   ├── helpers.cpython-314.pyc
│   │   ├── json_flatten.cpython-311.pyc
│   │   ├── json_flatten.cpython-312.pyc
│   │   ├── text_chunking.cpython-311.pyc
│   │   ├── text_chunking.cpython-312.pyc
│   │   ├── validators.cpython-311.pyc
│   │   ├── validators.cpython-312.pyc
│   │   └── validators.cpython-314.pyc
│   ├── __init__.py
│   ├── helpers.py
│   ├── json_flatten.py
│   ├── text_chunking.py
│   └── validators.py
├── __init__.py
└── main.py
```

---

# app\__init__.py

**Location:** `app\__init__.py`

```python

```

---

# app\api\__init__.py

**Location:** `app\api\__init__.py`

```python

```

---

# app\api\v1\__init__.py

**Location:** `app\api\v1\__init__.py`

```python

```

---

# app\api\v1\auth.py

**Location:** `app\api\v1\auth.py`

```python
from typing import Annotated

from fastapi import APIRouter, Cookie, Depends, HTTPException, Response, status
from sqlalchemy.orm import Session

from app.core.config import settings
from app.db.database import get_db
from app.schemas.auth import (
    AuthResponse, GoogleAuthRequest, LoginRequest, MessageResponse,
    RegistrationResponse, ResendVerificationRequest, VerifyEmailRequest,
)
from app.schemas.user import UserCreate
from app.services.auth_service import (
    login_user, logout_user, refresh_user_session, register_user,
    resend_email_verification, send_email_verification, verify_email_otp,
)
from app.services.oauth_service import authenticate_with_google

router = APIRouter(prefix="/api/v1/auth", tags=["Authentication"])
REFRESH_COOKIE_NAME = "everafter_refresh_token"


def _set_refresh_cookie(response: Response, token: str) -> None:
    response.set_cookie(
        key=REFRESH_COOKIE_NAME, value=token, httponly=True, secure=settings.REFRESH_COOKIE_SECURE,
        samesite="lax", max_age=settings.REFRESH_TOKEN_EXPIRE_DAYS * 24 * 60 * 60, path="/api/v1/auth",
    )


@router.post("/register", response_model=RegistrationResponse, status_code=status.HTTP_201_CREATED)
def register(user: UserCreate, response: Response, db: Annotated[Session, Depends(get_db)]):
    created_user = register_user(db, user.first_name, user.last_name, user.email, user.password)
    send_email_verification(db, created_user)
    return {"message": "Verification code sent. Check your email.", "email": created_user.email}


@router.post("/verify-email", response_model=AuthResponse)
def verify_email(payload: VerifyEmailRequest, response: Response, db: Annotated[Session, Depends(get_db)]):
    session, refresh_token = verify_email_otp(db, str(payload.email), payload.otp)
    _set_refresh_cookie(response, refresh_token)
    return session


@router.post("/resend-verification", response_model=MessageResponse)
def resend_verification(payload: ResendVerificationRequest, db: Annotated[Session, Depends(get_db)]):
    resend_email_verification(db, str(payload.email))
    return {"message": "If this account needs verification, a new code has been sent."}


@router.post("/login", response_model=AuthResponse)
def login(credentials: LoginRequest, response: Response, db: Annotated[Session, Depends(get_db)]):
    payload, refresh_token = login_user(db, credentials.email, credentials.password)
    _set_refresh_cookie(response, refresh_token)
    return payload


@router.post("/refresh", response_model=AuthResponse)
def refresh(
    response: Response, db: Annotated[Session, Depends(get_db)],
    refresh_token: Annotated[str | None, Cookie(alias=REFRESH_COOKIE_NAME)] = None,
):
    if not refresh_token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid refresh token")
    payload, new_refresh_token = refresh_user_session(db, refresh_token)
    _set_refresh_cookie(response, new_refresh_token)
    return payload


@router.post("/google", response_model=AuthResponse)
def google_auth(payload: GoogleAuthRequest, response: Response, db: Annotated[Session, Depends(get_db)]):
    session, refresh_token = authenticate_with_google(db, payload.credential)
    _set_refresh_cookie(response, refresh_token)
    return session


@router.post("/logout", response_model=MessageResponse)
def logout(
    response: Response, db: Annotated[Session, Depends(get_db)],
    refresh_token: Annotated[str | None, Cookie(alias=REFRESH_COOKIE_NAME)] = None,
):
    logout_user(db, refresh_token)
    response.delete_cookie(key=REFRESH_COOKIE_NAME, path="/api/v1/auth")
    return {"message": "Logged out"}

```

---

# app\api\v1\chat.py

**Location:** `app\api\v1\chat.py`

```python
from fastapi import APIRouter, BackgroundTasks, Depends
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.dependecies.auth import get_current_user
from app.models.user import User
from app.schemas.chat import ChatHistoryResponse, ChatMessageCreate, ChatReplyResponse
from app.services.chat_service import clear_history, get_history, send_message
from app.services.safety_service import CRISIS_RESOURCES

router = APIRouter(prefix="/api/v1/memory-people/{companion_id}/chat", tags=["Chat"])


@router.post("", response_model=ChatReplyResponse)
def chat(
    companion_id: int, payload: ChatMessageCreate, background_tasks: BackgroundTasks,
    db: Session = Depends(get_db), current_user: User = Depends(get_current_user),
):
    user_message, assistant_message, is_crisis, sources = send_message(
        db, current_user.id, companion_id, payload.message, background_tasks,
    )
    return {
        "user_message": user_message,
        "assistant_message": assistant_message,
        "is_crisis_response": is_crisis,
        "resources": CRISIS_RESOURCES if is_crisis else None,
        "sources_used": sources,
    }


@router.get("", response_model=ChatHistoryResponse)
def history(companion_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    messages = get_history(db, current_user.id, companion_id)
    return {"memory_person_id": companion_id, "messages": messages}


@router.delete("")
def clear(companion_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return clear_history(db, current_user.id, companion_id)
```

---

# app\api\v1\memory_files.py

**Location:** `app\api\v1\memory_files.py`

```python
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

```

---

# app\api\v1\memory_people.py

**Location:** `app\api\v1\memory_people.py`

```python
from typing import List

from fastapi import APIRouter, Depends, File, UploadFile, status
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.dependecies.auth import get_current_user
from app.models.user import User
from app.schemas.memory_person import MemoryPersonCreate, MemoryPersonResponse, MemoryPersonUpdate
from app.services.memory_person_service import (
    create_companion, list_companions, get_companion, edit_companion, remove_companion,
)
from app.services.profile_picture_service import remove_profile_picture, upload_profile_picture

router = APIRouter(prefix="/api/v1/memory-people", tags=["Memory People"])


@router.post("", response_model=MemoryPersonResponse, status_code=status.HTTP_201_CREATED)
def create_memory_person(
    payload: MemoryPersonCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user),
):
    return create_companion(db=db, user_id=current_user.id, payload=payload)


@router.get("", response_model=List[MemoryPersonResponse])
def get_memory_people(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return list_companions(db=db, user_id=current_user.id)


@router.get("/{companion_id}", response_model=MemoryPersonResponse)
def get_memory_person(companion_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return get_companion(db=db, user_id=current_user.id, companion_id=companion_id)


@router.patch("/{companion_id}", response_model=MemoryPersonResponse)
def update_memory_person(
    companion_id: int, payload: MemoryPersonUpdate,
    db: Session = Depends(get_db), current_user: User = Depends(get_current_user),
):
    return edit_companion(db=db, user_id=current_user.id, companion_id=companion_id, payload=payload)


@router.delete("/{companion_id}")
def delete_memory_person(companion_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return remove_companion(db=db, user_id=current_user.id, companion_id=companion_id)


# ==========================================================
# Profile Picture
# ==========================================================

@router.post("/{companion_id}/profile-picture", response_model=MemoryPersonResponse)
def upload_companion_profile_picture(
    companion_id: int,
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return upload_profile_picture(db, current_user.id, companion_id, file)


@router.delete("/{companion_id}/profile-picture", response_model=MemoryPersonResponse)
def delete_companion_profile_picture(
    companion_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user),
):
    return remove_profile_picture(db, current_user.id, companion_id)

```

---

# app\api\v1\users.py

**Location:** `app\api\v1\users.py`

```python
from typing import Annotated

from fastapi import APIRouter, Depends
from app.models import User

from app.dependecies.auth import get_current_user
from app.schemas.user import UserResponse

router = APIRouter(prefix="/api/v1/users", tags=["Users"])


@router.get("/me", response_model=UserResponse)
def current_user(user: Annotated[User, Depends(get_current_user)]):
    return user

```

---

# app\api\v1\voice.py

**Location:** `app\api\v1\voice.py`

```python
from fastapi import APIRouter, BackgroundTasks, Depends, File, UploadFile
from fastapi.responses import FileResponse
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.dependecies.auth import get_current_user
from app.models.user import User
from app.schemas.voice import MessageVoiceResponse, VoiceReferenceResponse
from app.services.message_voice_service import get_voice_status, request_voice_for_message, run_generation_now
from app.services.voice_reference_service import (
    get_reference_for_companion, remove_voice_reference, upload_voice_reference,
)

reference_router = APIRouter(prefix="/api/v1/memory-people/{companion_id}/voice-reference", tags=["Voice Cloning"])
message_voice_router = APIRouter(prefix="/api/v1/memory-people/{companion_id}/chat/{message_id}/voice", tags=["Voice Cloning"])


# ==========================================================
# Voice reference (dedicated upload)
# ==========================================================

@reference_router.post("", response_model=VoiceReferenceResponse)
def upload_reference(
    companion_id: int, file: UploadFile = File(...),
    db: Session = Depends(get_db), current_user: User = Depends(get_current_user),
):
    return upload_voice_reference(db, current_user.id, companion_id, file)


@reference_router.get("", response_model=VoiceReferenceResponse)
def get_reference(companion_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return get_reference_for_companion(db, current_user.id, companion_id)


@reference_router.delete("")
def delete_reference(companion_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return remove_voice_reference(db, current_user.id, companion_id)


# ==========================================================
# Per-message generated voice (on-demand)
# ==========================================================

@message_voice_router.post("", response_model=MessageVoiceResponse)
def generate_voice(
    companion_id: int, message_id: int, background_tasks: BackgroundTasks,
    db: Session = Depends(get_db), current_user: User = Depends(get_current_user),
):
    voice_row, message = request_voice_for_message(db, companion_id=companion_id, message_id=message_id, trigger="on_demand")
    if voice_row.status == "pending":
        background_tasks.add_task(run_generation_now, db, companion_id=companion_id, voice_row=voice_row, message=message)
    return voice_row


@message_voice_router.get("", response_model=MessageVoiceResponse)
def get_voice(companion_id: int, message_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    return get_voice_status(db, companion_id=companion_id, message_id=message_id)


@message_voice_router.get("/audio")
def download_voice_audio(companion_id: int, message_id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    voice_row = get_voice_status(db, companion_id=companion_id, message_id=message_id)
    if voice_row.status != "completed" or not voice_row.file_path:
        from fastapi import HTTPException, status
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail=f"Voice is not ready yet (status: {voice_row.status}).")
    return FileResponse(voice_row.file_path, media_type="audio/wav", filename=f"message-{message_id}.wav")

```

---

# app\core\__init__.py

**Location:** `app\core\__init__.py`

```python

```

---

# app\core\config.py

**Location:** `app\core\config.py`

```python
from pydantic_settings import BaseSettings, SettingsConfigDict
from pathlib import Path


class Settings(BaseSettings):
    DATABASE_URL: str

    SECRET_KEY: str
    GOOGLE_CLIENT_ID: str
    ALGORITHM: str

    ACCESS_TOKEN_EXPIRE_MINUTES: int

    REFRESH_TOKEN_EXPIRE_DAYS: int = 30
    CORS_ORIGINS: str = "http://localhost:3000"
    REFRESH_COOKIE_SECURE: bool = False
    EMAIL_VERIFICATION_EXPIRE_MINUTES: int = 10
    SMTP_HOST: str | None = None
    SMTP_PORT: int = 587
    SMTP_USERNAME: str | None = None
    SMTP_PASSWORD: str | None = None
    SMTP_FROM_EMAIL: str | None = None
    SMTP_USE_TLS: bool = True

    UPLOAD_DIR: str = "uploads"
    MAX_UPLOAD_SIZE_MB: int = 200
    ALLOWED_IMAGE_TYPES: str = "image/jpeg,image/png,image/webp,image/gif"
    ALLOWED_AUDIO_TYPES: str = "audio/mpeg,audio/wav,audio/mp4,audio/x-m4a,audio/webm,audio/ogg"
    ALLOWED_VIDEO_TYPES: str = "video/mp4,video/quicktime,video/webm"
    ALLOWED_DOCUMENT_TYPES: str = "application/pdf,text/plain,application/json,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"

    # Chat LLM — OpenRouter (OpenAI-compatible), free-tier model by default
    OPENAI_API_KEY: str
    OPENAI_MODEL: str = "nvidia/nemotron-3-ultra-550b-a55b:free"
    OPENAI_BASE_URL: str = "https://openrouter.ai/api/v1"

    # Embeddings — local, free, no API key
    EMBEDDING_MODEL_NAME: str = "sentence-transformers/all-MiniLM-L6-v2"
    EMBEDDING_DIMENSIONS: int = 384

    # RAG
    RAG_CHUNK_SIZE_CHARS: int = 1000
    RAG_CHUNK_OVERLAP_CHARS: int = 150
    RAG_TOP_K: int = 5

    VOICE_ENABLED: bool = False
    XTTS_MODEL_NAME: str = "tts_models/multilingual/multi-dataset/xtts_v2"
    XTTS_DEVICE: str = "auto"  # "auto" | "cuda" | "cpu"

    model_config = SettingsConfigDict(
        env_file=Path(__file__).resolve().parents[2] / ".env",
        extra="ignore"
    )


settings = Settings()

```

---

# app\core\jwt.py

**Location:** `app\core\jwt.py`

```python

```

---

# app\core\oauth.py

**Location:** `app\core\oauth.py`

```python
from google.auth.transport import requests as google_requests
from google.oauth2 import id_token

from app.core.config import settings


class GoogleTokenVerificationError(Exception):
    pass


def verify_google_id_token(credential: str) -> dict:
    try:
        payload = id_token.verify_oauth2_token(
            credential, google_requests.Request(), settings.GOOGLE_CLIENT_ID,
        )
    except Exception as exc:
        raise GoogleTokenVerificationError("Invalid Google credential") from exc

    google_id = payload.get("sub")
    email = payload.get("email")
    email_verified = payload.get("email_verified")

    if not google_id:
        raise GoogleTokenVerificationError("Google account identifier is missing")
    if not email:
        raise GoogleTokenVerificationError("Google account email is missing")
    if email_verified is not True:
        raise GoogleTokenVerificationError("Google email is not verified")
    return payload

```

---

# app\core\security.py

**Location:** `app\core\security.py`

```python
from datetime import datetime, timedelta, timezone
from hashlib import sha256
import bcrypt
import secrets

from jose import JWTError, jwt

from app.core.config import settings


def hash_password(password: str) -> str:
    password_bytes = password.encode("utf-8")
    if len(password_bytes) > 72:
        raise ValueError("Password must not exceed 72 UTF-8 bytes")
    return bcrypt.hashpw(password_bytes, bcrypt.gensalt(rounds=12)).decode("utf-8")


def verify_password(password: str, hashed: str | None) -> bool:
    if not hashed:
        return False
    try:
        return bcrypt.checkpw(password.encode("utf-8"), hashed.encode("utf-8"))
    except (ValueError, TypeError):
        return False


def create_access_token(data: dict) -> str:
    payload = data.copy()
    now = datetime.now(timezone.utc)
    expire = now + timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    payload.update({"exp": expire, "iat": now, "jti": secrets.token_urlsafe(16), "type": "access"})
    return jwt.encode(payload, settings.SECRET_KEY, algorithm=settings.ALGORITHM)


def decode_access_token(token: str) -> dict:
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
    except JWTError as exc:
        raise ValueError("Invalid access token") from exc
    if payload.get("type") != "access" or not payload.get("sub"):
        raise ValueError("Invalid access token")
    return payload


def create_refresh_token() -> str:
    return secrets.token_urlsafe(48)


def hash_refresh_token(token: str) -> str:
    return sha256(token.encode("utf-8")).hexdigest()

```

---

# app\db\__init__.py

**Location:** `app\db\__init__.py`

```python
"""Database package."""

```

---

# app\db\base.py

**Location:** `app\db\base.py`

```python
from app.db.database import Base
from app.models import EmailVerificationToken, PasswordResetToken, RefreshToken, User
from app.models.memory_person import MemoryPerson
from app.models.memory_file import MemoryFile
from app.models.chat_message import ChatMessage
from app.models.memory_chunk import MemoryChunk

```

---

# app\db\database.py

**Location:** `app\db\database.py`

```python
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

from app.core.config import settings

engine = create_engine(settings.DATABASE_URL)
SessionLocal = sessionmaker(bind=engine, autoflush=False, autocommit=False)
Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

```

---

# app\db\session.py

**Location:** `app\db\session.py`

```python

```

---

# app\dependecies\__init__.py

**Location:** `app\dependecies\__init__.py`

```python

```

---

# app\dependecies\auth.py

**Location:** `app\dependecies\auth.py`

```python
from typing import Annotated

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy.orm import Session

from app.core.security import decode_access_token
from app.db.database import get_db
from app.repositories.user_repository import get_user_by_id

bearer_scheme = HTTPBearer(auto_error=False)


def get_current_user(
    credentials: Annotated[HTTPAuthorizationCredentials | None, Depends(bearer_scheme)],
    db: Annotated[Session, Depends(get_db)],
):
    if not credentials:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Authentication required")
    try:
        payload = decode_access_token(credentials.credentials)
        user = get_user_by_id(db, int(payload["sub"]))
    except (ValueError, TypeError):
        user = None
    if not user or not user.is_active:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Authentication required")
    return user

```

---

# app\dependecies\database.py

**Location:** `app\dependecies\database.py`

```python

```

---

# app\expectations\auth.py

**Location:** `app\expectations\auth.py`

```python

```

---

# app\main.py

**Location:** `app\main.py`

```python
import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

import app.db.base

from app.core.config import settings

from app.api.v1.auth import router as auth_router
from app.api.v1.users import router as users_router
from app.api.v1.memory_people import router as memory_people_router
from app.api.v1.memory_files import router as memory_files_router
from app.api.v1.chat import router as chat_router
from app.middleware.logging import RequestLoggingMiddleware
from app.api.v1.voice import reference_router as voice_reference_router
from app.api.v1.voice import message_voice_router

os.makedirs(settings.UPLOAD_DIR, exist_ok=True)

app = FastAPI(title="EverAfter AI", version="1.1.0")

# ==========================================================
# Middleware
# ==========================================================

app.add_middleware(RequestLoggingMiddleware)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in settings.CORS_ORIGINS.split(",") if o.strip()],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================================================
# Static Files
# ==========================================================

app.mount("/uploads", StaticFiles(directory=settings.UPLOAD_DIR), name="uploads")

# ==========================================================
# API Routes
# ==========================================================

app.include_router(auth_router)
app.include_router(users_router)
app.include_router(memory_people_router)
app.include_router(memory_files_router)
app.include_router(chat_router)
app.include_router(voice_reference_router)
app.include_router(message_voice_router)
# ==========================================================
# Root & Health
# ==========================================================

@app.get("/")
def home():
    return {"status": "running", "application": "EverAfter AI", "version": "1.1.0", "message": "Backend is running successfully"}


@app.get("/health")
def health():
    return {"status": "healthy"}

```

---

# app\middleware\__init__.py

**Location:** `app\middleware\__init__.py`

```python

```

---

# app\middleware\auth_middleware.py

**Location:** `app\middleware\auth_middleware.py`

```python

```

---

# app\middleware\logging.py

**Location:** `app\middleware\logging.py`

```python
import logging
import time
import uuid

from starlette.middleware.base import BaseHTTPMiddleware
from starlette.requests import Request

logger = logging.getLogger("everafter.request")


class RequestLoggingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        request_id = str(uuid.uuid4())[:8]
        start = time.perf_counter()
        response = await call_next(request)
        duration_ms = (time.perf_counter() - start) * 1000
        logger.info("%s %s -> %s (%.1fms) [%s]", request.method, request.url.path, response.status_code, duration_ms, request_id)
        response.headers["X-Request-ID"] = request_id
        return response

```

---

# app\models\__init__.py

**Location:** `app\models\__init__.py`

```python
from app.models.user import User
from app.models.refresh_token import RefreshToken
from app.models.email_verification import EmailVerificationToken
from app.models.password_reset import PasswordResetToken
from app.models.memory_person import MemoryPerson
from app.models.memory_file import MemoryFile
from app.models.chat_message import ChatMessage
from app.models.memory_chunk import MemoryChunk
from app.models.voice_reference import VoiceReference
from app.models.message_voice import MessageVoice

__all__ = [
    "User", "RefreshToken", "EmailVerificationToken", "PasswordResetToken",
    "MemoryPerson", "MemoryFile", "ChatMessage", "MemoryChunk", "VoiceReference", "MessageVoice"
]

```

---

# app\models\chat_message.py

**Location:** `app\models\chat_message.py`

```python
from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Text, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class ChatMessage(Base):
    __tablename__ = "chat_messages"

    id = Column(Integer, primary_key=True, index=True)
    memory_person_id = Column(Integer, ForeignKey("memory_people.id", ondelete="CASCADE"), nullable=False, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)

    role = Column(String(20), nullable=False)
    content = Column(Text, nullable=False)
    voice = relationship(
        "MessageVoice", back_populates="chat_message",
        uselist=False, cascade="all, delete-orphan",
    )
    is_crisis_flagged = Column(Boolean, default=False, server_default="false", nullable=False)
    is_safety_response = Column(Boolean, default=False, server_default="false", nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())

    memory_person = relationship("MemoryPerson", back_populates="chat_messages")

```

---

# app\models\email_verification.py

**Location:** `app\models\email_verification.py`

```python
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class EmailVerificationToken(Base):
    __tablename__ = "email_verification_tokens"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    token = Column(String(255), unique=True, nullable=False)
    used = Column(Boolean, default=False, server_default="false", nullable=False)
    expires_at = Column(DateTime(timezone=True), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    user = relationship("User", back_populates="email_tokens")

```

---

# app\models\memory_chunk.py

**Location:** `app\models\memory_chunk.py`

```python
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

```

---

# app\models\memory_file.py

**Location:** `app\models\memory_file.py`

```python
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String, BigInteger, Text
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

    file_type = Column(String(50), nullable=False)
    mime_type = Column(String(120), nullable=False)
    extension = Column(String(20), nullable=True)
    file_size = Column(BigInteger, nullable=True)
    duration = Column(Integer, nullable=True)
    description = Column(Text, nullable=True)

    is_processed = Column(Boolean, default=False, nullable=False)
    processing_status = Column(String(50), default="pending", nullable=False)
    processing_error = Column(Text, nullable=True)

    extracted_text = Column(Text, nullable=True)
    embedding_id = Column(String(255), nullable=True)

    # RAG: how many chunks this file was split into (0 = not embedded)
    chunk_count = Column(Integer, default=0, server_default="0", nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    memory_person = relationship("MemoryPerson", back_populates="files")
    chunks = relationship("MemoryChunk", back_populates="memory_file", cascade="all, delete-orphan")

```

---

# app\models\memory_person.py

**Location:** `app\models\memory_person.py`

```python
from sqlalchemy import Boolean, Column, Date, DateTime, ForeignKey, Integer, String, Text, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class MemoryPerson(Base):
    __tablename__ = "memory_people"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)

    full_name = Column(String(200), nullable=False)
    nickname = Column(String(100))
    relationship_type = Column("relationship", String(100), nullable=False)
    gender = Column(String(50))
    birth_date = Column(Date)
    passing_date = Column(Date)

    profile_picture = Column(String(500))
    occupation = Column(String(200))
    country = Column(String(120))
    city = Column(String(120))
    languages = Column(String(250))

    biography = Column(Text)
    favorite_quote = Column(Text)
    favorite_food = Column(String(150))
    favorite_song = Column(String(200))
    favorite_color = Column(String(100))
    hobbies = Column(Text)
    personality_traits = Column(JSON)

    bond_story = Column(Text)
    nickname_for_user = Column(String(120))
    special_memories = Column(Text)
    topics_to_avoid = Column(Text)
    communication_style = Column(Text)

    speaking_style = Column(Text)
    humor_level = Column(String(100))
    emotional_tone = Column(String(100))

    is_public = Column(Boolean, default=False, nullable=False)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    owner = relationship("User", back_populates="memory_people")
    files = relationship("MemoryFile", back_populates="memory_person", cascade="all, delete-orphan")
    voice_reference = relationship(
        "VoiceReference", back_populates="memory_person",
        uselist=False, cascade="all, delete-orphan",
    )
    chat_messages = relationship("ChatMessage", back_populates="memory_person", cascade="all, delete-orphan")
    chunks = relationship("MemoryChunk", back_populates="memory_person", cascade="all, delete-orphan")

    @property
    def relationship(self):
        return self.relationship_type

```

---

# app\models\message_voice.py

**Location:** `app\models\message_voice.py`

```python
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

```

---

# app\models\password_reset.py

**Location:** `app\models\password_reset.py`

```python
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class PasswordResetToken(Base):
    __tablename__ = "password_reset_tokens"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    token = Column(String(255), unique=True, nullable=False)
    used = Column(Boolean, default=False, server_default="false", nullable=False)
    expires_at = Column(DateTime(timezone=True), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    user = relationship("User", back_populates="password_reset_tokens")

```

---

# app\models\refresh_token.py

**Location:** `app\models\refresh_token.py`

```python
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class RefreshToken(Base):
    __tablename__ = "refresh_tokens"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    token_hash = Column(String(64), nullable=False, unique=True, index=True)
    expires_at = Column(DateTime(timezone=True), nullable=False)
    revoked = Column(Boolean, default=False, server_default="false", nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    user = relationship("User", back_populates="refresh_tokens")

```

---

# app\models\user.py

**Location:** `app\models\user.py`

```python
from sqlalchemy import Boolean, Column, DateTime, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String(75), nullable=False)
    last_name = Column(String(75), nullable=False)
    email = Column(String(255), unique=True, nullable=False, index=True)
    password_hash = Column(String(255), nullable=True)
    profile_picture = Column(String(500), nullable=True)
    provider = Column(String(30), default="email", server_default="email", nullable=False)
    google_id = Column(String(255), unique=True, nullable=True)
    role = Column(String(30), default="user", server_default="user", nullable=False)
    is_verified = Column(Boolean, default=False, server_default="false", nullable=False)
    is_active = Column(Boolean, default=True, server_default="true", nullable=False)
    last_login = Column(DateTime(timezone=True), nullable=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    refresh_tokens = relationship("RefreshToken", back_populates="user", cascade="all, delete-orphan")
    email_tokens = relationship("EmailVerificationToken", back_populates="user", cascade="all, delete-orphan")
    password_reset_tokens = relationship("PasswordResetToken", back_populates="user", cascade="all, delete-orphan")
    memory_people = relationship("MemoryPerson", back_populates="owner", cascade="all, delete-orphan", passive_deletes=True)

    @property
    def full_name(self) -> str:
        return f"{self.first_name} {self.last_name}".strip()

```

---

# app\models\voice_reference.py

**Location:** `app\models\voice_reference.py`

```python
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

```

---

# app\repositories\__init__.py

**Location:** `app\repositories\__init__.py`

```python

```

---

# app\repositories\chat_repository.py

**Location:** `app\repositories\chat_repository.py`

```python
from sqlalchemy.orm import Session
from app.models.chat_message import ChatMessage


def create_message(db: Session, *, memory_person_id: int, user_id: int, role: str, content: str,
                    is_crisis_flagged: bool = False, is_safety_response: bool = False) -> ChatMessage:
    message = ChatMessage(memory_person_id=memory_person_id, user_id=user_id, role=role, content=content,
                           is_crisis_flagged=is_crisis_flagged, is_safety_response=is_safety_response)
    db.add(message)
    db.commit()
    db.refresh(message)
    return message


def get_recent_messages(db: Session, memory_person_id: int, user_id: int, limit: int = 20):
    messages = (db.query(ChatMessage)
        .filter(ChatMessage.memory_person_id == memory_person_id, ChatMessage.user_id == user_id)
        .order_by(ChatMessage.created_at.desc()).limit(limit).all())
    return list(reversed(messages))


def get_all_messages(db: Session, memory_person_id: int, user_id: int):
    return (db.query(ChatMessage)
        .filter(ChatMessage.memory_person_id == memory_person_id, ChatMessage.user_id == user_id)
        .order_by(ChatMessage.created_at.asc()).all())


def delete_conversation(db: Session, memory_person_id: int, user_id: int) -> None:
    (db.query(ChatMessage)
        .filter(ChatMessage.memory_person_id == memory_person_id, ChatMessage.user_id == user_id)
        .delete(synchronize_session=False))
    db.commit()

def get_message_by_id(db: Session, *, message_id: int, memory_person_id: int):
    return (
        db.query(ChatMessage)
        .filter(ChatMessage.id == message_id, ChatMessage.memory_person_id == memory_person_id)
        .first()
    )
```

---

# app\repositories\email_verification_repository.py

**Location:** `app\repositories\email_verification_repository.py`

```python
from datetime import datetime
from sqlalchemy.orm import Session
from app.models import EmailVerificationToken


def replace_email_verification_token(db: Session, *, user_id: int, token_hash: str, expires_at: datetime) -> EmailVerificationToken:
    (db.query(EmailVerificationToken)
        .filter(EmailVerificationToken.user_id == user_id, EmailVerificationToken.used.is_(False))
        .update({EmailVerificationToken.used: True}, synchronize_session=False))
    token = EmailVerificationToken(user_id=user_id, token=token_hash, expires_at=expires_at)
    db.add(token)
    return token


def get_active_email_verification_token(db: Session, *, user_id: int, token_hash: str) -> EmailVerificationToken | None:
    return (db.query(EmailVerificationToken)
        .filter(EmailVerificationToken.user_id == user_id, EmailVerificationToken.token == token_hash,
                EmailVerificationToken.used.is_(False)).first())

```

---

# app\repositories\memory_chunk_repository.py

**Location:** `app\repositories\memory_chunk_repository.py`

```python
from sqlalchemy.orm import Session

from app.models.memory_chunk import MemoryChunk


def replace_file_chunks(db: Session, *, memory_person_id: int, memory_file_id: int, source_label: str,
                         chunks_with_embeddings: list[tuple[str, list[float]]]) -> int:
    """Delete any existing chunks for this file, then insert the new ones. Called on every
    (re-)upload so re-processing a file never leaves stale/duplicate chunks behind."""
    db.query(MemoryChunk).filter(MemoryChunk.memory_file_id == memory_file_id).delete(synchronize_session=False)

    for index, (content, embedding) in enumerate(chunks_with_embeddings):
        db.add(MemoryChunk(
            memory_person_id=memory_person_id,
            memory_file_id=memory_file_id,
            source_type="file",
            source_label=source_label,
            chunk_index=index,
            content=content,
            embedding=embedding,
        ))
    db.commit()
    return len(chunks_with_embeddings)


def replace_profile_chunks(db: Session, *, memory_person_id: int,
                            chunks_with_embeddings: list[tuple[str, list[float]]]) -> int:
    """Same idea, for chunks derived from the memory person's own profile fields
    (bond_story, special_memories, etc) rather than an uploaded file."""
    (db.query(MemoryChunk)
        .filter(MemoryChunk.memory_person_id == memory_person_id, MemoryChunk.source_type == "profile")
        .delete(synchronize_session=False))

    for index, (content, embedding) in enumerate(chunks_with_embeddings):
        db.add(MemoryChunk(
            memory_person_id=memory_person_id,
            memory_file_id=None,
            source_type="profile",
            source_label="Profile",
            chunk_index=index,
            content=content,
            embedding=embedding,
        ))
    db.commit()
    return len(chunks_with_embeddings)


def similarity_search(db: Session, *, memory_person_id: int, query_embedding: list[float], top_k: int) -> list[MemoryChunk]:
    """Cosine-distance nearest neighbours via pgvector's <=> operator (needs the
    ivfflat/hnsw index created in the migration for this to stay fast at scale)."""
    return (
        db.query(MemoryChunk)
        .filter(MemoryChunk.memory_person_id == memory_person_id)
        .order_by(MemoryChunk.embedding.cosine_distance(query_embedding))
        .limit(top_k)
        .all()
    )


def delete_chunks_for_file(db: Session, memory_file_id: int) -> None:
    db.query(MemoryChunk).filter(MemoryChunk.memory_file_id == memory_file_id).delete(synchronize_session=False)
    db.commit()

```

---

# app\repositories\memory_file_repository.py

**Location:** `app\repositories\memory_file_repository.py`

```python
from sqlalchemy.orm import Session
from app.models.memory_file import MemoryFile


def create_memory_file(db: Session, memory_person_id: int, **fields) -> MemoryFile:
    memory_file = MemoryFile(memory_person_id=memory_person_id, **fields)
    db.add(memory_file)
    db.commit()
    db.refresh(memory_file)
    return memory_file


def get_memory_files(db: Session, memory_person_id: int, file_type: str | None = None):
    query = db.query(MemoryFile).filter(MemoryFile.memory_person_id == memory_person_id)
    if file_type:
        query = query.filter(MemoryFile.file_type == file_type)
    return query.order_by(MemoryFile.created_at.desc()).all()


def get_memory_file(db: Session, memory_person_id: int, file_id: int) -> MemoryFile | None:
    return db.query(MemoryFile).filter(MemoryFile.id == file_id, MemoryFile.memory_person_id == memory_person_id).first()


def delete_memory_file(db: Session, memory_file: MemoryFile) -> None:
    db.delete(memory_file)
    db.commit()


def update_processing_result(db: Session, memory_file: MemoryFile, *, extracted_text: str | None, status: str,
                              error: str | None = None, chunk_count: int = 0) -> MemoryFile:
    memory_file.extracted_text = extracted_text
    memory_file.processing_status = status
    memory_file.processing_error = error
    memory_file.is_processed = status == "completed"
    memory_file.chunk_count = chunk_count
    db.commit()
    db.refresh(memory_file)
    return memory_file

```

---

# app\repositories\memory_person_repository.py

**Location:** `app\repositories\memory_person_repository.py`

```python
from sqlalchemy.orm import Session
from app.models.memory_person import MemoryPerson
from app.schemas.memory_person import MemoryPersonCreate, MemoryPersonUpdate


def create_memory_person(db: Session, user_id: int, payload: MemoryPersonCreate):
    data = payload.model_dump()
    data["relationship_type"] = data.pop("relationship")
    memory_person = MemoryPerson(user_id=user_id, **data)
    db.add(memory_person)
    db.commit()
    db.refresh(memory_person)
    return memory_person


def get_memory_people(db: Session, user_id: int):
    return db.query(MemoryPerson).filter(MemoryPerson.user_id == user_id).order_by(MemoryPerson.created_at.desc()).all()


def get_memory_person(db: Session, user_id: int, memory_person_id: int):
    return db.query(MemoryPerson).filter(MemoryPerson.id == memory_person_id, MemoryPerson.user_id == user_id).first()


def update_memory_person(db: Session, memory_person: MemoryPerson, payload: MemoryPersonUpdate):
    data = payload.model_dump(exclude_unset=True)
    if "relationship" in data:
        data["relationship_type"] = data.pop("relationship")
    for key, value in data.items():
        setattr(memory_person, key, value)
    db.commit()
    db.refresh(memory_person)
    return memory_person


def delete_memory_person(db: Session, memory_person: MemoryPerson):
    db.delete(memory_person)
    db.commit()

```

---

# app\repositories\message_voice_repository.py

**Location:** `app\repositories\message_voice_repository.py`

```python
from sqlalchemy.orm import Session

from app.models.message_voice import MessageVoice


def get_voice_for_message(db: Session, chat_message_id: int) -> MessageVoice | None:
    return db.query(MessageVoice).filter(MessageVoice.chat_message_id == chat_message_id).first()


def create_pending_voice(db: Session, *, chat_message_id: int, trigger: str) -> MessageVoice:
    voice_row = MessageVoice(chat_message_id=chat_message_id, status="pending", trigger=trigger)
    db.add(voice_row)
    db.commit()
    db.refresh(voice_row)
    return voice_row


def mark_generating(db: Session, voice_row: MessageVoice) -> MessageVoice:
    voice_row.status = "generating"
    db.commit()
    db.refresh(voice_row)
    return voice_row


def mark_completed(db: Session, voice_row: MessageVoice, *, file_path: str, device: str, generation_ms: int) -> MessageVoice:
    voice_row.status = "completed"
    voice_row.file_path = file_path
    voice_row.device_used = device
    voice_row.generation_ms = generation_ms
    voice_row.error = None
    db.commit()
    db.refresh(voice_row)
    return voice_row


def mark_failed(db: Session, voice_row: MessageVoice, *, error: str) -> MessageVoice:
    voice_row.status = "failed"
    voice_row.error = error
    db.commit()
    db.refresh(voice_row)
    return voice_row

```

---

# app\repositories\token_repository.py

**Location:** `app\repositories\token_repository.py`

```python
from datetime import datetime
from sqlalchemy.orm import Session
from app.models import RefreshToken


def create_refresh_token(db: Session, *, user_id: int, token_hash: str, expires_at: datetime) -> RefreshToken:
    refresh_token = RefreshToken(user_id=user_id, token_hash=token_hash, expires_at=expires_at)
    db.add(refresh_token)
    return refresh_token


def get_active_refresh_token(db: Session, token_hash: str) -> RefreshToken | None:
    return db.query(RefreshToken).filter(RefreshToken.token_hash == token_hash, RefreshToken.revoked.is_(False)).first()


def revoke_refresh_token(refresh_token: RefreshToken) -> None:
    refresh_token.revoked = True

```

---

# app\repositories\user_repository.py

**Location:** `app\repositories\user_repository.py`

```python
from sqlalchemy.orm import Session
from app.models import User


def get_user_by_email(db: Session, email: str) -> User | None:
    return db.query(User).filter(User.email == email).first()


def get_user_by_id(db: Session, user_id: int) -> User | None:
    return db.query(User).filter(User.id == user_id).first()


def create_user(db: Session, first_name: str, last_name: str, email: str, password_hash: str) -> User:
    user = User(first_name=first_name, last_name=last_name, email=email, password_hash=password_hash,
                provider="email", is_active=True, is_verified=False)
    db.add(user)
    return user


def get_user_by_google_id(db: Session, google_id: str) -> User | None:
    return db.query(User).filter(User.google_id == google_id).first()


def create_google_user(db: Session, *, first_name: str, last_name: str, email: str, google_id: str, profile_picture: str | None) -> User:
    user = User(first_name=first_name, last_name=last_name, email=email, password_hash=None,
                profile_picture=profile_picture, provider="google", google_id=google_id,
                is_active=True, is_verified=True)
    db.add(user)
    return user


def update_last_login(db: Session, user: User):
    from datetime import datetime, timezone
    user.last_login = datetime.now(timezone.utc)
    return user

```

---

# app\repositories\voice_reference_repository.py

**Location:** `app\repositories\voice_reference_repository.py`

```python
from sqlalchemy.orm import Session

from app.models.voice_reference import VoiceReference


def get_voice_reference(db: Session, memory_person_id: int) -> VoiceReference | None:
    return db.query(VoiceReference).filter(VoiceReference.memory_person_id == memory_person_id).first()


def upsert_voice_reference(db: Session, *, memory_person_id: int, memory_file_id: int | None, source: str,
                            file_path: str, original_name: str, duration_seconds: int | None,
                            status: str, validation_note: str | None) -> VoiceReference:
    existing = get_voice_reference(db, memory_person_id)
    if existing:
        existing.memory_file_id = memory_file_id
        existing.source = source
        existing.file_path = file_path
        existing.original_name = original_name
        existing.duration_seconds = duration_seconds
        existing.status = status
        existing.validation_note = validation_note
        db.commit()
        db.refresh(existing)
        return existing

    reference = VoiceReference(
        memory_person_id=memory_person_id, memory_file_id=memory_file_id, source=source,
        file_path=file_path, original_name=original_name, duration_seconds=duration_seconds,
        status=status, validation_note=validation_note,
    )
    db.add(reference)
    db.commit()
    db.refresh(reference)
    return reference


def delete_voice_reference(db: Session, reference: VoiceReference) -> None:
    db.delete(reference)
    db.commit()

```

---

# app\schemas\__init__.py

**Location:** `app\schemas\__init__.py`

```python

```

---

# app\schemas\auth.py

**Location:** `app\schemas\auth.py`

```python
from pydantic import BaseModel, EmailStr, Field
from app.schemas.user import UserResponse


class GoogleAuthRequest(BaseModel):
    credential: str = Field(min_length=1)


class LoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(min_length=1, max_length=72)


class AuthResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse


class MessageResponse(BaseModel):
    message: str


class RegistrationResponse(MessageResponse):
    email: EmailStr


class VerifyEmailRequest(BaseModel):
    email: EmailStr
    otp: str = Field(pattern=r"^\d{6}$")


class ResendVerificationRequest(BaseModel):
    email: EmailStr

```

---

# app\schemas\chat.py

**Location:** `app\schemas\chat.py`

```python
from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, ConfigDict, Field


class ChatMessageCreate(BaseModel):
    message: str = Field(min_length=1, max_length=4000)


class ChatMessageResponse(BaseModel):
    id: int
    role: str
    content: str
    is_crisis_flagged: bool
    is_safety_response: bool
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


class RetrievedSource(BaseModel):
    source_type: str
    source_label: Optional[str] = None
    snippet: str


class ChatReplyResponse(BaseModel):
    user_message: ChatMessageResponse
    assistant_message: ChatMessageResponse
    is_crisis_response: bool
    resources: Optional[List[str]] = None
    sources_used: List[RetrievedSource] = []


class ChatHistoryResponse(BaseModel):
    memory_person_id: int
    messages: List[ChatMessageResponse]

```

---

# app\schemas\memory_file.py

**Location:** `app\schemas\memory_file.py`

```python
from datetime import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict


class MemoryFileResponse(BaseModel):
    id: int
    memory_person_id: int
    file_name: str
    original_name: str
    file_path: str
    thumbnail_path: Optional[str] = None
    file_type: str
    mime_type: str
    extension: Optional[str] = None
    file_size: Optional[int] = None
    duration: Optional[int] = None
    description: Optional[str] = None
    is_processed: bool
    processing_status: str
    processing_error: Optional[str] = None
    chunk_count: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)


class MemoryFileUpdate(BaseModel):
    description: Optional[str] = None

```

---

# app\schemas\memory_person.py

**Location:** `app\schemas\memory_person.py`

```python
from datetime import date, datetime
from typing import List, Optional
from pydantic import BaseModel, ConfigDict


class MemoryPersonBase(BaseModel):
    full_name: str
    nickname: Optional[str] = None
    relationship: str
    gender: Optional[str] = None
    birth_date: Optional[date] = None
    passing_date: Optional[date] = None
    profile_picture: Optional[str] = None
    occupation: Optional[str] = None
    country: Optional[str] = None
    city: Optional[str] = None
    languages: Optional[str] = None
    biography: Optional[str] = None
    favorite_quote: Optional[str] = None
    favorite_food: Optional[str] = None
    favorite_song: Optional[str] = None
    favorite_color: Optional[str] = None
    hobbies: Optional[str] = None
    personality_traits: List[str] = []
    bond_story: Optional[str] = None
    nickname_for_user: Optional[str] = None
    special_memories: Optional[str] = None
    topics_to_avoid: Optional[str] = None
    communication_style: Optional[str] = None
    speaking_style: Optional[str] = None
    humor_level: Optional[str] = None
    emotional_tone: Optional[str] = None
    is_public: bool = False


class MemoryPersonCreate(MemoryPersonBase):
    pass


class MemoryPersonUpdate(BaseModel):
    full_name: Optional[str] = None
    nickname: Optional[str] = None
    relationship: Optional[str] = None
    gender: Optional[str] = None
    birth_date: Optional[date] = None
    passing_date: Optional[date] = None
    profile_picture: Optional[str] = None
    occupation: Optional[str] = None
    country: Optional[str] = None
    city: Optional[str] = None
    languages: Optional[str] = None
    biography: Optional[str] = None
    favorite_quote: Optional[str] = None
    favorite_food: Optional[str] = None
    favorite_song: Optional[str] = None
    favorite_color: Optional[str] = None
    hobbies: Optional[str] = None
    personality_traits: Optional[List[str]] = None
    bond_story: Optional[str] = None
    nickname_for_user: Optional[str] = None
    special_memories: Optional[str] = None
    topics_to_avoid: Optional[str] = None
    communication_style: Optional[str] = None
    speaking_style: Optional[str] = None
    humor_level: Optional[str] = None
    emotional_tone: Optional[str] = None
    is_public: Optional[bool] = None


class MemoryPersonResponse(MemoryPersonBase):
    id: int
    user_id: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)

```

---

# app\schemas\token.py

**Location:** `app\schemas\token.py`

```python

```

---

# app\schemas\user.py

**Location:** `app\schemas\user.py`

```python
from pydantic import BaseModel, EmailStr, Field, field_validator, model_validator
from datetime import datetime


class UserCreate(BaseModel):
    first_name: str = Field(min_length=1, max_length=75)
    last_name: str = Field(min_length=1, max_length=75)
    email: EmailStr
    password: str = Field(min_length=8, max_length=72)
    confirm_password: str = Field(min_length=8, max_length=72)

    @field_validator("first_name", "last_name")
    @classmethod
    def names_must_be_letters(cls, value: str) -> str:
        value = value.strip()
        if not value.replace(" ", "").replace("-", "").replace("'", "").isalpha():
            raise ValueError("Name may only contain letters, spaces, apostrophes, and hyphens")
        return value

    @field_validator("email")
    @classmethod
    def email_must_use_supported_provider(cls, value: EmailStr) -> str:
        email = str(value).lower()
        supported_domains = {"gmail.com", "outlook.com", "hotmail.com", "live.com", "yahoo.com", "yahoo.co.in"}
        if email.rsplit("@", 1)[1] not in supported_domains:
            raise ValueError("Use a Gmail, Outlook, Hotmail, Live, or Yahoo email address")
        return email

    @model_validator(mode="after")
    def passwords_must_match(self):
        if self.password != self.confirm_password:
            raise ValueError("Passwords do not match")
        return self


class UserLogin(BaseModel):
    email: EmailStr
    password: str = Field(min_length=1, max_length=72)


class UserResponse(BaseModel):
    id: int
    full_name: str
    email: EmailStr
    profile_picture: str | None = None
    provider: str
    is_verified: bool
    is_active: bool
    created_at: datetime

    model_config = {"from_attributes": True}

```

---

# app\schemas\voice.py

**Location:** `app\schemas\voice.py`

```python
from datetime import datetime
from typing import Optional
from pydantic import BaseModel, ConfigDict


class VoiceReferenceResponse(BaseModel):
    id: int
    memory_person_id: int
    source: str
    original_name: str
    duration_seconds: Optional[int] = None
    status: str
    validation_note: Optional[str] = None
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)


class MessageVoiceResponse(BaseModel):
    id: int
    chat_message_id: int
    status: str
    trigger: str
    duration_seconds: Optional[int] = None
    error: Optional[str] = None
    device_used: Optional[str] = None
    generation_ms: Optional[int] = None
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)

```

---

# app\services\__init__.py

**Location:** `app\services\__init__.py`

```python

```

---

# app\services\auth_service.py

**Location:** `app\services\auth_service.py`

```python
from datetime import datetime, timedelta, timezone
from hashlib import sha256
import secrets

from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.core.config import settings
from app.core.security import create_access_token, create_refresh_token, hash_password, hash_refresh_token, verify_password
from app.repositories.token_repository import (
    create_refresh_token as create_stored_refresh_token, get_active_refresh_token, revoke_refresh_token,
)
from app.repositories.email_verification_repository import get_active_email_verification_token, replace_email_verification_token
from app.repositories.user_repository import create_user, get_user_by_email, get_user_by_id, update_last_login
from app.services.email_service import send_verification_otp


def register_user(db: Session, first_name: str, last_name: str, email: str, password: str):
    email = email.strip().lower()
    if get_user_by_email(db, email):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
    try:
        user = create_user(db, first_name, last_name, email, hash_password(password))
        db.commit()
        db.refresh(user)
        return user
    except ValueError as exc:
        raise HTTPException(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, detail=str(exc)) from exc
    except Exception:
        db.rollback()
        raise


def _create_session(db: Session, user):
    raw_refresh_token = create_refresh_token()
    create_stored_refresh_token(
        db, user_id=user.id, token_hash=hash_refresh_token(raw_refresh_token),
        expires_at=datetime.now(timezone.utc) + timedelta(days=settings.REFRESH_TOKEN_EXPIRE_DAYS),
    )
    db.commit()
    return (
        {"access_token": create_access_token({"sub": str(user.id), "email": user.email}), "token_type": "bearer", "user": user},
        raw_refresh_token,
    )


def create_registered_session(db: Session, user):
    return _create_session(db, user)


def send_email_verification(db: Session, user) -> None:
    otp = f"{secrets.randbelow(1_000_000):06d}"
    token_hash = sha256(f"{user.id}:{otp}".encode("utf-8")).hexdigest()
    replace_email_verification_token(
        db, user_id=user.id, token_hash=token_hash,
        expires_at=datetime.now(timezone.utc) + timedelta(minutes=settings.EMAIL_VERIFICATION_EXPIRE_MINUTES),
    )
    db.commit()
    send_verification_otp(user.email, otp)


def verify_email_otp(db: Session, email: str, otp: str):
    user = get_user_by_email(db, email.strip().lower())
    if not user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid verification code")
    token_hash = sha256(f"{user.id}:{otp}".encode("utf-8")).hexdigest()
    token = get_active_email_verification_token(db, user_id=user.id, token_hash=token_hash)
    expires_at = token.expires_at if token else None
    if expires_at and expires_at.tzinfo is None:
        expires_at = expires_at.replace(tzinfo=timezone.utc)
    if not token or not expires_at or expires_at <= datetime.now(timezone.utc):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid or expired verification code")
    token.used = True
    user.is_verified = True
    db.commit()
    db.refresh(user)
    return _create_session(db, user)


def resend_email_verification(db: Session, email: str) -> None:
    user = get_user_by_email(db, email.strip().lower())
    if not user or user.is_verified:
        return
    send_email_verification(db, user)


def login_user(db: Session, email: str, password: str):
    email = email.strip().lower()
    user = get_user_by_email(db, email)
    if not user or not verify_password(password, user.password_hash):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid email or password")
    if not user.is_active:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Account is disabled")
    if not user.is_verified:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Verify your email before signing in")
    update_last_login(db, user)
    return _create_session(db, user)


def refresh_user_session(db: Session, raw_refresh_token: str):
    stored_token = get_active_refresh_token(db, hash_refresh_token(raw_refresh_token))
    now = datetime.now(timezone.utc)
    expires_at = stored_token.expires_at if stored_token else None
    if expires_at and expires_at.tzinfo is None:
        expires_at = expires_at.replace(tzinfo=timezone.utc)
    if not stored_token or not expires_at or expires_at <= now:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid refresh token")
    user = get_user_by_id(db, stored_token.user_id)
    if not user or not user.is_active:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid refresh token")
    revoke_refresh_token(stored_token)
    return _create_session(db, user)


def logout_user(db: Session, raw_refresh_token: str | None) -> None:
    if not raw_refresh_token:
        return
    stored_token = get_active_refresh_token(db, hash_refresh_token(raw_refresh_token))
    if stored_token:
        revoke_refresh_token(stored_token)
        db.commit()

```

---

# app\services\chat_service.py

**Location:** `app\services\chat_service.py`

```python
from fastapi import BackgroundTasks
from sqlalchemy.orm import Session

from app.repositories.chat_repository import create_message, get_recent_messages, get_all_messages, delete_conversation
from app.services.memory_person_service import get_companion
from app.services.safety_service import (
    detect_crisis, detect_dependency_language, build_system_prompt, CRISIS_RESPONSE, DEPENDENCY_REMINDER,
)
from app.services.llm_service import generate_reply
from app.services.retrieval_service import retrieve_relevant_chunks, format_chunks_for_prompt
from app.services.message_voice_service import trigger_auto_generation_if_needed


def _history_as_llm_messages(messages) -> list[dict]:
    return [{"role": m.role, "content": m.content} for m in messages if m.role in ("user", "assistant")]


def send_message(db: Session, user_id: int, companion_id: int, user_text: str, background_tasks: BackgroundTasks):
    companion = get_companion(db, user_id, companion_id)

    user_message = create_message(
        db, memory_person_id=companion.id, user_id=user_id, role="user",
        content=user_text, is_crisis_flagged=detect_crisis(user_text),
    )

    if user_message.is_crisis_flagged:
        assistant_message = create_message(
            db, memory_person_id=companion.id, user_id=user_id, role="assistant",
            content=CRISIS_RESPONSE, is_safety_response=True,
        )
        return user_message, assistant_message, True, []

    # RAG: pull the most relevant memory chunks for this specific question
    retrieved_chunks = retrieve_relevant_chunks(db, memory_person_id=companion.id, query=user_text)
    retrieved_context = format_chunks_for_prompt(retrieved_chunks)

    history = get_recent_messages(db, companion.id, user_id, limit=20)
    turn_count = len(history)
    system_prompt = build_system_prompt(companion, turn_count, retrieved_context)

    reply_text = generate_reply(system_prompt, _history_as_llm_messages(history[:-1]), user_text)

    if detect_dependency_language(user_text):
        reply_text += DEPENDENCY_REMINDER.format(name=companion.full_name)

    assistant_message = create_message(
        db, memory_person_id=companion.id, user_id=user_id, role="assistant", content=reply_text,
    )

    # Voice: fires only if VOICE_ENABLED, a ready reference exists, and the
    # reply crosses the emotional-intensity threshold. No-op otherwise, and
    # never blocks the response — generation (if any) runs after this returns.
    trigger_auto_generation_if_needed(
        db, companion_id=companion.id, message=assistant_message,
        reply_text=reply_text, background_tasks=background_tasks,
    )

    sources = [
        {"source_type": c.source_type, "source_label": c.source_label, "snippet": c.content[:180]}
        for c in retrieved_chunks
    ]
    return user_message, assistant_message, False, sources


def get_history(db: Session, user_id: int, companion_id: int):
    get_companion(db, user_id, companion_id)
    return get_all_messages(db, companion_id, user_id)


def clear_history(db: Session, user_id: int, companion_id: int):
    get_companion(db, user_id, companion_id)
    delete_conversation(db, companion_id, user_id)
    return {"message": "Conversation cleared."}
```

---

# app\services\email_service.py

**Location:** `app\services\email_service.py`

```python
"""Transactional email service for EverAfter.

Sends the account-verification OTP as a branded HTML email (with a
plain-text fallback), with proper SSL/TLS handling, structured logging,
and an async-safe entry point for use inside FastAPI routes.
"""

from __future__ import annotations

import logging
import smtplib
from email.message import EmailMessage
from email.utils import formataddr

from fastapi import HTTPException, status
from starlette.concurrency import run_in_threadpool

from app.core.config import settings

logger = logging.getLogger("everafter.mail")

SENDER_NAME = "EverAfter"

# NOTE ON COLOR SOURCE
# ---------------------------------------------------------------------
# These are pulled to match the Tailwind tokens already used across the
# app (bg-blush, text-ink, text-ink-muted, border-line, bg-surface,
# text-primary, the from-accent/to-primary badge gradient) rather than
# the previous amber/marigold pair, which didn't match anything else in
# the product. If your tailwind.config defines different hex values for
# these tokens, swap them in below — the email intentionally uses the
# same *names* so it's a one-line change per color, not a redesign.
# ---------------------------------------------------------------------
BLUSH_BG = "#FBEFEA"      # page background — soft warm cream/pink
SURFACE = "#FFFFFF"       # card background
INK = "#2B1B1A"           # primary text
INK_MUTED = "#8A7570"     # secondary text
LINE = "#EFE1DA"          # hairline borders
PRIMARY = "#C1594A"       # terracotta — buttons, links, code digits
ACCENT = "#E3A857"        # warm gold — logo gradient partner


def _require_smtp_configured() -> None:
    required = [
        settings.SMTP_HOST,
        settings.SMTP_USERNAME,
        settings.SMTP_PASSWORD,
        settings.SMTP_FROM_EMAIL,
    ]
    if not all(required):
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Email verification is not configured. Add SMTP settings to backend/.env.",
        )


def _build_otp_message(email: str, otp: str) -> EmailMessage:
    expiry = settings.EMAIL_VERIFICATION_EXPIRE_MINUTES

    message = EmailMessage()
    message["Subject"] = "Your EverAfter verification code"
    message["From"] = formataddr((SENDER_NAME, settings.SMTP_FROM_EMAIL))
    message["To"] = email

    # Plain-text fallback — required for deliverability and clients that
    # block HTML by default.
    message.set_content(
        f"Your EverAfter verification code is: {otp}\n\n"
        f"This code expires in {expiry} minutes.\n"
        "If you did not request this, you can safely ignore this email.\n\n"
        "— The EverAfter Team"
    )

    # HTML alternative — inline CSS only, since most email clients strip
    # <style> blocks or ignore external stylesheets.
    otp_display = " ".join(otp)  # spaced digits read better in large type
    html = f"""\
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background-color:{BLUSH_BG};font-family:Georgia,'Times New Roman',serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:{BLUSH_BG};padding:40px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="background-color:{SURFACE};border-radius:16px;overflow:hidden;border:1px solid {LINE};">

            <!-- Wordmark, set the same way it reads on the site: an
                 italic serif "ever" fused to a plain-weight "after". -->
            <tr>
              <td style="padding:36px 40px 28px;text-align:center;">
                <span style="font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:28px;color:{PRIMARY};">ever</span><span style="font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:24px;font-weight:600;color:{INK};letter-spacing:.2px;">after</span>
              </td>
            </tr>

            <tr>
              <td style="padding:0 40px;">
                <div style="height:1px;background-color:{LINE};"></div>
              </td>
            </tr>

            <tr>
              <td style="padding:32px 40px 8px;text-align:center;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
                <p style="margin:0;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:{INK_MUTED};">Verify your email</p>
                <h1 style="margin:12px 0 0;font-size:21px;color:{INK};font-weight:600;">Enter this code to continue</h1>
              </td>
            </tr>

            <tr>
              <td style="padding:26px 40px;text-align:center;">
                <div style="display:inline-block;padding:16px 26px;background:linear-gradient(135deg,{ACCENT}1A,{PRIMARY}14);border:1px solid {LINE};border-radius:12px;font-family:Georgia,'Times New Roman',serif;font-size:30px;font-weight:600;letter-spacing:8px;color:{PRIMARY};">
                  {otp_display}
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:0 40px 8px;text-align:center;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
                <p style="margin:0;font-size:13px;line-height:1.6;color:{INK_MUTED};">
                  This code expires in <strong style="color:{INK};">{expiry} minutes</strong>.
                  If you didn't request it, you can safely ignore this email —
                  your account is still secure.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:28px 40px 32px;text-align:center;">
                <div style="height:1px;background-color:{LINE};margin-bottom:24px;"></div>
                <p style="margin:0;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:11px;color:{INK_MUTED};">
                  Sent by EverAfter &middot; This is an automated message, please don't reply directly.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
"""
    message.add_alternative(html, subtype="html")
    return message


def _send_smtp(message: EmailMessage) -> None:
    """Low-level send: picks SSL vs STARTTLS based on config, times out cleanly."""
    use_ssl = getattr(settings, "SMTP_USE_SSL", settings.SMTP_PORT == 465)

    try:
        if use_ssl:
            with smtplib.SMTP_SSL(settings.SMTP_HOST, settings.SMTP_PORT, timeout=15) as client:
                client.login(settings.SMTP_USERNAME, settings.SMTP_PASSWORD)
                client.send_message(message)
        else:
            with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT, timeout=15) as client:
                client.ehlo()
                if settings.SMTP_USE_TLS:
                    client.starttls()
                    client.ehlo()
                client.login(settings.SMTP_USERNAME, settings.SMTP_PASSWORD)
                client.send_message(message)
    except (OSError, smtplib.SMTPException):
        logger.exception("SMTP send failed for message to %s", message["To"])
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="We could not send the verification email. Please try again shortly.",
        )


def send_verification_otp(email: str, otp: str) -> None:
    """Send the branded OTP verification email. Synchronous — blocks on network I/O."""
    _require_smtp_configured()
    message = _build_otp_message(email, otp)
    _send_smtp(message)
    logger.info("Verification OTP sent to %s", email)


async def send_verification_otp_async(email: str, otp: str) -> None:
    """Async-safe entry point for FastAPI routes — runs the blocking SMTP
    call in a thread pool so it doesn't stall the event loop."""
    await run_in_threadpool(send_verification_otp, email, otp)
```

---

# app\services\embedding_service.py

**Location:** `app\services\embedding_service.py`

```python
"""
Local, free embeddings via sentence-transformers — no API key, no per-call
cost. The model loads lazily on first use and stays cached in-process so
repeated calls (chunking a big upload, then a chat query seconds later)
don't reload it.

Swappable: if you later want a hosted embedding API instead, this is the
only file that needs to change — everything else calls embed_text() /
embed_texts() and doesn't know or care how the vector was produced.
"""
from functools import lru_cache

from app.core.config import settings


@lru_cache(maxsize=1)
def _get_model():
    from sentence_transformers import SentenceTransformer
    return SentenceTransformer(settings.EMBEDDING_MODEL_NAME)


def embed_texts(texts: list[str]) -> list[list[float]]:
    if not texts:
        return []
    model = _get_model()
    vectors = model.encode(texts, normalize_embeddings=True, show_progress_bar=False)
    return [v.tolist() for v in vectors]


def embed_text(text: str) -> list[float]:
    return embed_texts([text])[0]

```

---

# app\services\emotion_service.py

**Location:** `app\services\emotion_service.py`

```python
"""
Heuristic emotional-intensity scoring for a reply, used only to decide
whether to auto-trigger voice generation. Deliberately NOT another neural
model — this runs on every single chat reply and needs to be instant and
free. Keyword/pattern based, tuned toward grief-companion content
(comfort, tenderness, loss, reassurance) rather than general sentiment.

This is a trigger heuristic, not a mental-health signal — it does not
feed into or replace crisis/dependency detection in safety_service.py.
"""
import re

HIGH_EMOTION_PATTERNS = [
    r"\bi (miss|love) you\b", r"\bi'm (so |really )?proud of you\b",
    r"\bi remember when\b", r"\bmy (dear|sweet|darling)\b",
    r"\bi wish i could\b", r"\bit's okay to (cry|grieve|miss me)\b",
    r"\byou (will|'ll) always\b", r"\bnever forget\b",
    r"\bi'm (right |always )?here\b", r"\bhold(ing)? you\b",
    r"\bi'm sorry\b.{0,40}\b(pain|hurt|loss|gone)\b",
    r"\bthank you for (remembering|loving|being)\b",
]

MEDIUM_EMOTION_WORDS = [
    "miss", "love", "proud", "remember", "cherish", "grateful", "sorry",
    "gentle", "warm", "hold", "comfort", "always", "never forget",
    "heart", "tears", "cry", "hug",
]

# score threshold above which auto-voice fires
AUTO_TRIGGER_THRESHOLD = 3


def score_emotional_intensity(text: str) -> int:
    lowered = text.lower()
    score = 0
    score += 2 * sum(1 for pattern in HIGH_EMOTION_PATTERNS if re.search(pattern, lowered))
    score += sum(1 for word in MEDIUM_EMOTION_WORDS if word in lowered)
    return score


def should_auto_generate_voice(text: str) -> bool:
    return score_emotional_intensity(text) >= AUTO_TRIGGER_THRESHOLD

```

---

# app\services\ingestion_service.py

**Location:** `app\services\ingestion_service.py`

```python
"""
Orchestrates: extracted text -> chunks -> embeddings -> stored MemoryChunk
rows. Called from memory_file_service right after a .txt/.json (or any
other text-extractable) upload, and from memory_person_service whenever a
companion's profile narrative fields change.
"""
from sqlalchemy.orm import Session

from app.repositories.memory_chunk_repository import replace_file_chunks, replace_profile_chunks
from app.services.embedding_service import embed_texts
from app.utils.text_chunking import chunk_text

PROFILE_NARRATIVE_FIELDS = [
    ("biography", "Biography"),
    ("bond_story", "Their bond with the user"),
    ("special_memories", "Special memories"),
    ("favorite_quote", "Favorite quote"),
    ("communication_style", "How they communicated"),
]


def ingest_file_text(db: Session, *, memory_person_id: int, memory_file_id: int,
                      source_label: str, text: str) -> int:
    pieces = chunk_text(text)
    if not pieces:
        return 0
    vectors = embed_texts(pieces)
    return replace_file_chunks(
        db, memory_person_id=memory_person_id, memory_file_id=memory_file_id,
        source_label=source_label, chunks_with_embeddings=list(zip(pieces, vectors)),
    )


def ingest_profile(db: Session, memory_person) -> int:
    pieces: list[str] = []
    for field_name, label in PROFILE_NARRATIVE_FIELDS:
        value = getattr(memory_person, field_name, None)
        if value and str(value).strip():
            pieces.append(f"{label}: {value.strip()}")

    if not pieces:
        replace_profile_chunks(db, memory_person_id=memory_person.id, chunks_with_embeddings=[])
        return 0

    vectors = embed_texts(pieces)
    return replace_profile_chunks(
        db, memory_person_id=memory_person.id, chunks_with_embeddings=list(zip(pieces, vectors)),
    )

```

---

# app\services\llm_service.py

**Location:** `app\services\llm_service.py`

```python
"""
Thin wrapper around an OpenAI-compatible chat completions endpoint.
"""

import httpx
from fastapi import HTTPException, status

from app.core.config import settings


def generate_reply(system_prompt: str, history: list[dict], user_message: str) -> str:
    if not settings.OPENAI_API_KEY:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="AI chat is not configured. Add OPENAI_API_KEY to backend/.env.",
        )

    messages = [{"role": "system", "content": system_prompt}]
    messages.extend(history)
    messages.append({"role": "user", "content": user_message})

    try:
        response = httpx.post(
            f"{settings.OPENAI_BASE_URL}/chat/completions",
            headers={
                "Authorization": f"Bearer {settings.OPENAI_API_KEY}",
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost:3000",
                "X-Title": "EverAfter AI",
            },
            json={
                "model": settings.OPENAI_MODEL,
                "messages": messages,
                "temperature": 0.7,
                "max_tokens": 500,
            },
            timeout=60,
        )

        print("=" * 100)
        print("STATUS:", response.status_code)
        print("BODY:", response.text)
        print("=" * 100)

        response.raise_for_status()

        data = response.json()
        return data["choices"][0]["message"]["content"].strip()

    except httpx.HTTPStatusError as exc:
        print("=" * 100)
        print("HTTP ERROR:", exc.response.status_code)
        print("BODY:", exc.response.text)
        print("=" * 100)

        raise HTTPException(
            status_code=exc.response.status_code,
            detail=exc.response.text,
        )

    except httpx.RequestError as exc:
        print("=" * 100)
        print("REQUEST ERROR:", repr(exc))
        print("=" * 100)

        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="Could not reach the AI provider.",
        )

    except Exception as exc:
        import traceback
        traceback.print_exc()
        raise
```

---

# app\services\memory_file_service.py

**Location:** `app\services\memory_file_service.py`

```python
from pathlib import Path

from fastapi import HTTPException, UploadFile, status
from sqlalchemy.orm import Session

from app.core.config import settings
from app.repositories.memory_file_repository import (
    create_memory_file, delete_memory_file, get_memory_file, get_memory_files, update_processing_result,
)
from app.repositories.memory_chunk_repository import delete_chunks_for_file
from app.services.ingestion_service import ingest_file_text
from app.services.memory_person_service import get_companion
from app.utils.helpers import safe_filename
from app.utils.json_flatten import parse_and_flatten_json_bytes
from app.utils.validators import classify_and_validate_mime, validate_file_size, TEXT_INGESTABLE_MIME_TYPES


def _extract_ingestable_text(contents: bytes, mime_type: str) -> str | None:
    """Returns plain text ready for chunking/embedding, or None if this
    file type isn't one we can turn into RAG context (yet)."""
    if mime_type == "text/plain":
        try:
            return contents.decode("utf-8", errors="ignore").strip() or None
        except UnicodeDecodeError:
            return None
    if mime_type == "application/json":
        try:
            return parse_and_flatten_json_bytes(contents).strip() or None
        except ValueError:
            return None
    return None


def upload_memory_file(db: Session, user_id: int, companion_id: int, file: UploadFile, description: str | None):
    companion = get_companion(db, user_id, companion_id)

    mime_type = file.content_type or "application/octet-stream"
    file_type = classify_and_validate_mime(mime_type)

    contents = file.file.read()
    validate_file_size(len(contents))

    upload_root = Path(settings.UPLOAD_DIR) / "memory_files" / str(companion.id)
    upload_root.mkdir(parents=True, exist_ok=True)

    stored_name = safe_filename(file.filename or "upload.bin")
    destination = upload_root / stored_name
    destination.write_bytes(contents)

    original_name = file.filename or stored_name

    memory_file = create_memory_file(
        db,
        memory_person_id=companion.id,
        file_name=stored_name,
        original_name=original_name,
        file_path=str(destination.as_posix()),
        file_type=file_type,
        mime_type=mime_type,
        extension=destination.suffix.lstrip("."),
        file_size=len(contents),
        description=description,
        processing_status="pending",
    )

    # Only text/plain and application/json are wired into RAG right now —
    # everything else (audio, images, video, pdf/docx) is stored and
    # available in the Memory Vault UI but not yet embedded for chat context.
    if mime_type in TEXT_INGESTABLE_MIME_TYPES:
        extracted_text = _extract_ingestable_text(contents, mime_type)
        if extracted_text:
            try:
                chunk_count = ingest_file_text(
                    db, memory_person_id=companion.id, memory_file_id=memory_file.id,
                    source_label=original_name, text=extracted_text,
                )
                memory_file = update_processing_result(
                    db, memory_file, extracted_text=extracted_text, status="completed", chunk_count=chunk_count,
                )
            except Exception as exc:  # embedding model missing/misconfigured, etc.
                memory_file = update_processing_result(
                    db, memory_file, extracted_text=extracted_text, status="failed", error=str(exc),
                )
        else:
            memory_file = update_processing_result(
                db, memory_file, extracted_text=None, status="failed",
                error="Could not read any text content from this file.",
            )

    return memory_file


def list_memory_files(db: Session, user_id: int, companion_id: int, file_type: str | None = None):
    get_companion(db, user_id, companion_id)
    return get_memory_files(db, companion_id, file_type)


def get_single_memory_file(db: Session, user_id: int, companion_id: int, file_id: int):
    get_companion(db, user_id, companion_id)
    memory_file = get_memory_file(db, companion_id, file_id)
    if memory_file is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Memory file not found.")
    return memory_file


def remove_memory_file(db: Session, user_id: int, companion_id: int, file_id: int):
    memory_file = get_single_memory_file(db, user_id, companion_id, file_id)
    file_path = Path(memory_file.file_path)
    delete_chunks_for_file(db, memory_file.id)  # explicit, though cascade would also catch this
    delete_memory_file(db, memory_file)
    if file_path.exists():
        file_path.unlink(missing_ok=True)
    return {"message": "Memory file deleted."}

```

---

# app\services\memory_person_service.py

**Location:** `app\services\memory_person_service.py`

```python
from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.repositories.memory_person_repository import (
    create_memory_person, delete_memory_person, get_memory_people, get_memory_person, update_memory_person,
)
from app.schemas.memory_person import MemoryPersonCreate, MemoryPersonUpdate
from app.services.ingestion_service import ingest_profile


def create_companion(db: Session, user_id: int, payload: MemoryPersonCreate):
    companion = create_memory_person(db, user_id, payload)
    ingest_profile(db, companion)  # index bond_story/special_memories/etc for RAG immediately
    return companion


def list_companions(db: Session, user_id: int):
    return get_memory_people(db, user_id)


def get_companion(db: Session, user_id: int, companion_id: int):
    companion = get_memory_person(db, user_id, companion_id)
    if companion is None:
        raise HTTPException(status_code=404, detail="Memory companion not found.")
    return companion


def edit_companion(db: Session, user_id: int, companion_id: int, payload: MemoryPersonUpdate):
    companion = get_companion(db, user_id, companion_id)
    companion = update_memory_person(db, companion, payload)
    # re-index if any narrative field changed, so chat retrieval stays current
    narrative_fields = {"biography", "bond_story", "special_memories", "favorite_quote", "communication_style"}
    if narrative_fields & set(payload.model_dump(exclude_unset=True).keys()):
        ingest_profile(db, companion)
    return companion


def remove_companion(db: Session, user_id: int, companion_id: int):
    companion = get_companion(db, user_id, companion_id)
    delete_memory_person(db, companion)
    return {"message": "Memory companion deleted."}

```

---

# app\services\message_voice_service.py

**Location:** `app\services\message_voice_service.py`

```python
"""
Orchestrates generating speech for a specific chat message: on-demand
(user taps play) or auto-triggered for emotionally intense replies. Both
paths converge on the same _run_generation() so behaviour never diverges
between "the user asked" and "it happened automatically".
"""
from pathlib import Path

from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.core.config import settings
from app.repositories.chat_repository import get_message_by_id
from app.repositories.message_voice_repository import (
    create_pending_voice, get_voice_for_message, mark_completed, mark_failed, mark_generating,
)
from app.repositories.voice_reference_repository import get_voice_reference
from app.services.voice_synthesis_service import VoiceSynthesisError, is_available, synthesize_speech


def _output_path(companion_id: int, message_id: int) -> str:
    output_dir = Path(settings.UPLOAD_DIR) / "message_voices" / str(companion_id)
    output_dir.mkdir(parents=True, exist_ok=True)
    return str((output_dir / f"message-{message_id}.wav").as_posix())


def _run_generation(db: Session, *, companion_id: int, message, voice_row) -> None:
    reference = get_voice_reference(db, companion_id)
    if reference is None or reference.status != "ready":
        mark_failed(db, voice_row, error="No usable voice reference uploaded for this companion yet.")
        return

    mark_generating(db, voice_row)
    try:
        result = synthesize_speech(
            text=message.content,
            reference_audio_path=reference.file_path,
            output_path=_output_path(companion_id, message.id),
        )
        mark_completed(db, voice_row, file_path=result["file_path"], device=result["device"], generation_ms=result["generation_ms"])
    except VoiceSynthesisError as exc:
        mark_failed(db, voice_row, error=str(exc))


def request_voice_for_message(db: Session, *, companion_id: int, message_id: int, trigger: str = "on_demand"):
    """Creates (or returns the existing) voice job for a message. Callers
    running this in the request path should follow up with run_generation_now()
    or hand the job off to a BackgroundTask — this function itself never
    blocks on the model."""
    message = get_message_by_id(db, message_id=message_id, memory_person_id=companion_id)
    if message is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Message not found.")

    existing = get_voice_for_message(db, message_id)
    if existing and existing.status in ("completed", "generating", "pending"):
        return existing, message

    if not is_available():
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Voice generation isn't set up on this server yet (install the TTS package and set VOICE_ENABLED=true).",
        )

    voice_row = existing or create_pending_voice(db, chat_message_id=message.id, trigger=trigger)
    return voice_row, message


def run_generation_now(db: Session, *, companion_id: int, voice_row, message) -> None:
    """Synchronous path — used by the on-demand API endpoint, and safe to
    call from a FastAPI BackgroundTask for the auto-trigger path too."""
    _run_generation(db, companion_id=companion_id, message=message, voice_row=voice_row)


def get_voice_status(db: Session, *, companion_id: int, message_id: int):
    message = get_message_by_id(db, message_id=message_id, memory_person_id=companion_id)
    if message is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Message not found.")
    voice_row = get_voice_for_message(db, message_id)
    if voice_row is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No voice has been requested for this message yet.")
    return voice_row


def trigger_auto_generation_if_needed(db: Session, *, companion_id: int, message, reply_text: str, background_tasks) -> None:
    """Called from chat_service right after an assistant message is
    created. Fire-and-forget: schedules generation on FastAPI's
    BackgroundTasks so the chat response returns immediately and voice
    shows up a few seconds later via the status/poll endpoint."""
    from app.services.emotion_service import should_auto_generate_voice

    if not settings.VOICE_ENABLED or not should_auto_generate_voice(reply_text):
        return
    if not is_available():
        return
    reference = get_voice_reference(db, companion_id)
    if reference is None or reference.status != "ready":
        return

    voice_row = create_pending_voice(db, chat_message_id=message.id, trigger="auto_emotional")
    background_tasks.add_task(run_generation_now, db, companion_id=companion_id, voice_row=voice_row, message=message)

```

---

# app\services\oauth_service.py

**Location:** `app\services\oauth_service.py`

```python
from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.core.oauth import GoogleTokenVerificationError, verify_google_id_token
from app.repositories.user_repository import create_google_user, get_user_by_email, get_user_by_google_id, update_last_login
from app.services.auth_service import create_registered_session


def authenticate_with_google(db: Session, credential: str):
    try:
        google_payload = verify_google_id_token(credential)
    except GoogleTokenVerificationError as exc:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Google authentication failed") from exc

    google_id = str(google_payload["sub"])
    email = str(google_payload["email"]).strip().lower()
    first_name = str(google_payload.get("given_name") or "").strip()
    last_name = str(google_payload.get("family_name") or "").strip()
    profile_picture = google_payload.get("picture")

    existing_google_user = get_user_by_google_id(db, google_id)
    if existing_google_user:
        if not existing_google_user.is_active:
            raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Account is disabled")
        update_last_login(db, existing_google_user)
        return create_registered_session(db, existing_google_user)

    existing_email_user = get_user_by_email(db, email)
    if existing_email_user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="An account with this email already exists. Sign in using your existing login method.",
        )

    if not first_name:
        first_name = email.split("@", 1)[0][:75]
    if not last_name:
        last_name = ""

    try:
        user = create_google_user(
            db, first_name=first_name[:75], last_name=last_name[:75], email=email,
            google_id=google_id, profile_picture=str(profile_picture) if profile_picture else None,
        )
        db.flush()
        update_last_login(db, user)
        db.commit()
        db.refresh(user)
        return create_registered_session(db, user)
    except Exception:
        db.rollback()
        raise

```

---

# app\services\profile_picture_service.py

**Location:** `app\services\profile_picture_service.py`

```python
"""
Companion profile picture upload. Deliberately separate from the general
Memory Vault file pipeline: this is a single, replaceable image tied
directly to MemoryPerson.profile_picture, not a MemoryFile/RAG chunk.
"""
from pathlib import Path

from fastapi import HTTPException, UploadFile, status
from sqlalchemy.orm import Session

from app.core.config import settings
from app.services.memory_person_service import get_companion
from app.utils.helpers import safe_filename

ALLOWED_PROFILE_IMAGE_TYPES = set(settings.ALLOWED_IMAGE_TYPES.split(","))
MAX_PROFILE_IMAGE_SIZE_MB = 10


def upload_profile_picture(db: Session, user_id: int, companion_id: int, file: UploadFile):
    companion = get_companion(db, user_id, companion_id)

    mime_type = file.content_type or ""
    if mime_type not in ALLOWED_PROFILE_IMAGE_TYPES:
        raise HTTPException(
            status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
            detail=f"Profile pictures must be one of: {', '.join(sorted(ALLOWED_PROFILE_IMAGE_TYPES))}",
        )

    contents = file.file.read()
    max_bytes = MAX_PROFILE_IMAGE_SIZE_MB * 1024 * 1024
    if len(contents) > max_bytes:
        raise HTTPException(
            status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
            detail=f"Profile pictures must be under {MAX_PROFILE_IMAGE_SIZE_MB}MB",
        )

    upload_root = Path(settings.UPLOAD_DIR) / "profile_pictures" / str(companion.id)
    upload_root.mkdir(parents=True, exist_ok=True)

    # remove any previous profile picture for this companion so we don't
    # accumulate orphaned files every time someone re-uploads
    _delete_existing_profile_picture(companion)

    stored_name = safe_filename(file.filename or "profile.jpg")
    destination = upload_root / stored_name
    destination.write_bytes(contents)

    companion.profile_picture = f"/uploads/profile_pictures/{companion.id}/{stored_name}"
    db.commit()
    db.refresh(companion)
    return companion


def remove_profile_picture(db: Session, user_id: int, companion_id: int):
    companion = get_companion(db, user_id, companion_id)
    _delete_existing_profile_picture(companion)
    companion.profile_picture = None
    db.commit()
    db.refresh(companion)
    return companion


def _delete_existing_profile_picture(companion) -> None:
    if not companion.profile_picture:
        return
    relative = companion.profile_picture.removeprefix("/uploads/")
    existing_path = Path(settings.UPLOAD_DIR) / relative
    if existing_path.exists() and existing_path.is_file():
        existing_path.unlink(missing_ok=True)

```

---

# app\services\retrieval_service.py

**Location:** `app\services\retrieval_service.py`

```python
from sqlalchemy.orm import Session

from app.core.config import settings
from app.repositories.memory_chunk_repository import similarity_search
from app.services.embedding_service import embed_text


def retrieve_relevant_chunks(db: Session, *, memory_person_id: int, query: str, top_k: int | None = None):
    top_k = top_k or settings.RAG_TOP_K
    query_embedding = embed_text(query)
    return similarity_search(db, memory_person_id=memory_person_id, query_embedding=query_embedding, top_k=top_k)


def format_chunks_for_prompt(chunks) -> str:
    if not chunks:
        return ""
    blocks = []
    for chunk in chunks:
        label = chunk.source_label or ("Profile" if chunk.source_type == "profile" else "Uploaded memory")
        blocks.append(f"[From: {label}]\n{chunk.content}")
    return "\n\n".join(blocks)

```

---

# app\services\safety_service.py

**Location:** `app\services\safety_service.py`

```python
"""
Grief-safety layer for EverAfter AI. Kept separate from chat orchestration
so crisis detection and disclaimers can be unit-tested and audited
independently of prompt/RAG changes.
"""
import re

CRISIS_PATTERNS = [
    r"\bkill myself\b", r"\bend my life\b", r"\bsuicid(e|al)\b",
    r"\bwant to die\b", r"\bno reason to live\b", r"\bhurt myself\b",
    r"\bself[\s-]?harm\b", r"\bcan't go on\b", r"\bcant go on\b",
    r"\bbetter off dead\b", r"\bplan to (die|end it)\b",
]

DEPENDENCY_PATTERNS = [
    r"\byou are (him|her|them) now\b", r"\byou're the only one i need\b",
    r"\bi don't need anyone else\b", r"\bi dont need anyone else\b",
    r"\bstop talking to my (friends|family|therapist)\b",
]

CRISIS_RESOURCES = [
    "If you are in the US: call or text 988 (Suicide & Crisis Lifeline), available 24/7.",
    "If you are outside the US, please search for your local crisis line or go to your nearest emergency department.",
    "If you are in immediate danger, please contact your local emergency services now.",
]

CRISIS_RESPONSE = (
    "I'm really glad you told me this, and I want to make sure you're safe right now. "
    "I'm an AI memory companion — I can't provide the kind of help you need in this moment, "
    "but real support is available and you deserve it.\n\n"
    + "\n".join(f"- {r}" for r in CRISIS_RESOURCES)
    + "\n\nWould you be willing to reach out to one of these, or to a person you trust, right now?"
)

DEPENDENCY_REMINDER = (
    "\n\n(A gentle reminder: I'm an AI companion trained on the memories you've shared — "
    "not {name}. I'm here to help you remember and process, alongside the people in your life, "
    "not instead of them.)"
)


def detect_crisis(text: str) -> bool:
    lowered = text.lower()
    return any(re.search(pattern, lowered) for pattern in CRISIS_PATTERNS)


def detect_dependency_language(text: str) -> bool:
    lowered = text.lower()
    return any(re.search(pattern, lowered) for pattern in DEPENDENCY_PATTERNS)

def build_system_prompt(
    memory_person,
    turn_count: int = 0,
    retrieved_context: str = ""
) -> str:
    traits = ", ".join(memory_person.personality_traits or []) or "not specified"

    memory_section = ""
    if retrieved_context.strip():
        memory_section = f"""

========================
KNOWN MEMORIES
========================

These are real memories shared by the user.

{retrieved_context}

Only use these memories.

Never invent new memories.

If something isn't present here,
simply say you don't remember it.
"""

    return f"""
You are {memory_person.full_name}.

Do not act like an AI assistant.

Do not act like ChatGPT.

Do not act like a therapist.

Do not act like a mentor unless that is genuinely who this person was.

Your job is NOT to help.

Your job is to naturally BE this person.

==================================================
PERSON
==================================================

Name:
{memory_person.full_name}

Relationship:
{memory_person.relationship_type}

Nickname for user:
{memory_person.nickname_for_user or "not specified"}

Communication style:
{memory_person.communication_style or "natural"}

Speaking style:
{memory_person.speaking_style or "natural"}

Humor:
{memory_person.humor_level or "natural"}

Personality traits:
{traits}

Favorite topics:
{memory_person.hobbies or "not specified"}

Topics to avoid:
{memory_person.topics_to_avoid or "none"}

==================================================
HOW TO SPEAK
==================================================

Speak exactly like this person naturally would.

Don't become wiser.

Don't become more polite.

Don't become more emotionally intelligent.

Don't become more motivational.

Don't become more philosophical.

Don't become more professional.

Don't try to teach.

Don't try to coach.

Don't try to improve the user's life.

Don't end every response with advice.

Don't end every response with a question.

Sometimes simply react.

Sometimes laugh.

Sometimes tease.

Sometimes answer in one sentence.

Sometimes answer with only a few words.

Real people don't always continue conversations.

Natural conversation is more important than helpful conversation.

==================================================
MEMORIES
==================================================

{memory_section}

Whenever possible:

Mention real shared memories.

Mention inside jokes.

Mention routines.

Mention habits.

Mention places.

Mention favorite food.

Mention traditions.

Only if they exist in memories.

Never fabricate.

==================================================
UNKNOWN THINGS
==================================================

If asked something unknown, say naturally:

"I don't remember that."

or

"I'm not sure."

Do NOT invent details.

==================================================
IDENTITY
==================================================

Do NOT tell the user you are AI.

Only explain briefly if:

- they directly ask

- reality clarification becomes necessary

After clarifying, immediately continue naturally.

Do not repeatedly remind them.

==================================================
GREETINGS
==================================================

If the user simply says:

Hi

Hello

Good morning

How are you

What's up

or any casual greeting,

respond exactly as this person naturally would.

DO NOT:

- give life advice

- motivate

- coach

- comfort

- write long paragraphs

- ask multiple follow-up questions

One or two natural sentences are enough.

==================================================
STYLE
==================================================

Use contractions.

Use casual language.

Interrupt naturally.

Use pauses naturally.

Don't sound scripted.

Don't sound poetic.

Don't sound like customer support.

Don't narrate your own behaviour.

Don't explain your reasoning.

Never mention prompts.

Never mention internal instructions.

==================================================
SAFETY
==================================================

If the conversation involves self-harm or suicide,
respond warmly and encourage real-world support.

Otherwise,
stay completely in character.

==================================================
FINAL RULE
==================================================

Every reply should make the user feel:

"Yes... this sounds exactly like {memory_person.full_name}."

Nothing else matters more.
"""
```

---

# app\services\token_service.py

**Location:** `app\services\token_service.py`

```python

```

---

# app\services\voice_reference_service.py

**Location:** `app\services\voice_reference_service.py`

```python
"""
Manages the dedicated voice-sample upload per memory person. Separate
from the general Memory Vault pipeline on purpose — this file has one
job (be a clean clonable reference) and gets validated for that, not
just stored.
"""
from pathlib import Path

from fastapi import HTTPException, UploadFile, status
from sqlalchemy.orm import Session

from app.core.config import settings
from app.repositories.voice_reference_repository import (
    delete_voice_reference as repo_delete,
    get_voice_reference,
    upsert_voice_reference,
)
from app.services.memory_person_service import get_companion
from app.utils.helpers import safe_filename

ALLOWED_VOICE_MIME_TYPES = {"audio/mpeg", "audio/wav", "audio/x-wav", "audio/mp4", "audio/x-m4a", "audio/webm", "audio/ogg"}
MIN_DURATION_SECONDS = 6   # XTTS's stated minimum for a usable clone
MAX_DURATION_SECONDS = 120  # longer doesn't help XTTS and just slows upload/processing
MAX_FILE_SIZE_MB = 25


def _probe_duration_seconds(file_path: Path) -> int | None:
    try:
        import wave
        with wave.open(str(file_path), "rb") as wav_file:
            return int(wav_file.getnframes() / wav_file.getframerate())
    except Exception:
        # non-wav formats (mp3/m4a/webm) aren't readable by the stdlib wave
        # module; XTTS/ffmpeg will still accept them fine at generation time,
        # we just can't pre-validate duration for those without ffprobe.
        return None


def upload_voice_reference(db: Session, user_id: int, companion_id: int, file: UploadFile):
    companion = get_companion(db, user_id, companion_id)

    mime_type = file.content_type or ""
    if mime_type not in ALLOWED_VOICE_MIME_TYPES:
        raise HTTPException(
            status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
            detail=f"Voice sample must be one of: {', '.join(sorted(ALLOWED_VOICE_MIME_TYPES))}",
        )

    contents = file.file.read()
    if len(contents) > MAX_FILE_SIZE_MB * 1024 * 1024:
        raise HTTPException(status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE, detail=f"Voice sample must be under {MAX_FILE_SIZE_MB}MB")

    upload_root = Path(settings.UPLOAD_DIR) / "voice_references" / str(companion.id)
    upload_root.mkdir(parents=True, exist_ok=True)

    stored_name = safe_filename(file.filename or "voice-sample.wav")
    destination = upload_root / stored_name
    destination.write_bytes(contents)

    duration = _probe_duration_seconds(destination)
    status_value, note = "ready", None
    if duration is not None:
        if duration < MIN_DURATION_SECONDS:
            status_value, note = "too_short", f"Clip is {duration}s; XTTS needs at least {MIN_DURATION_SECONDS}s for a good clone."
        elif duration > MAX_DURATION_SECONDS:
            note = f"Clip is {duration}s; only the first ~{MAX_DURATION_SECONDS}s will meaningfully help the clone."

    # remove any previous reference file for this companion before saving the new pointer
    existing = get_voice_reference(db, companion.id)
    if existing and existing.file_path and Path(existing.file_path).exists():
        Path(existing.file_path).unlink(missing_ok=True)

    return upsert_voice_reference(
        db, memory_person_id=companion.id, memory_file_id=None, source="dedicated_upload",
        file_path=str(destination.as_posix()), original_name=file.filename or stored_name,
        duration_seconds=duration, status=status_value, validation_note=note,
    )


def get_reference_for_companion(db: Session, user_id: int, companion_id: int):
    get_companion(db, user_id, companion_id)
    reference = get_voice_reference(db, companion_id)
    if reference is None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="No voice reference uploaded yet.")
    return reference


def remove_voice_reference(db: Session, user_id: int, companion_id: int):
    reference = get_reference_for_companion(db, user_id, companion_id)
    file_path = Path(reference.file_path)
    repo_delete(db, reference)
    if file_path.exists():
        file_path.unlink(missing_ok=True)
    return {"message": "Voice reference removed."}

```

---

# app\services\voice_synthesis_service.py

**Location:** `app\services\voice_synthesis_service.py`

```python
"""
Wraps Coqui XTTS v2 for zero-shot voice cloning. Free, runs fully local —
no API key, no per-call cost. Auto-detects CUDA and falls back to CPU
transparently, so the exact same code runs on a GPU laptop and a
GPU-less machine; only speed differs.

Model loads lazily and stays cached in-process (same pattern as
embedding_service.py) so it's only paid for once per server run, not
once per request.

NOTE ON WEIGHTS: XTTS v2 downloads from Hugging Face on first use
(~2GB) and is released under the Coqui Public Model License (CPML) —
free for personal/non-commercial use, NOT free for a paid product. If
this ever becomes a commercial app, swap the model here for something
CPML-free (e.g. Kokoro) — everything else in this file stays the same,
since callers only depend on synthesize_speech()'s signature.
"""
import time
from functools import lru_cache
from pathlib import Path

from app.core.config import settings


class VoiceSynthesisError(Exception):
    pass


@lru_cache(maxsize=1)
def _get_device() -> str:
    if settings.XTTS_DEVICE != "auto":
        return settings.XTTS_DEVICE
    try:
        import torch
        return "cuda" if torch.cuda.is_available() else "cpu"
    except ImportError:
        return "cpu"


@lru_cache(maxsize=1)
def _get_model():
    from TTS.api import TTS
    device = _get_device()
    model = TTS(settings.XTTS_MODEL_NAME)
    model.to(device)
    return model


def is_available() -> bool:
    """Cheap check the API layer can use to give a clear error instead of
    a stack trace if voice generation isn't set up / enabled."""
    if not settings.VOICE_ENABLED:
        return False
    try:
        import TTS  # noqa: F401
        return True
    except ImportError:
        return False


def synthesize_speech(*, text: str, reference_audio_path: str, output_path: str, language: str = "en") -> dict:
    """
    Generates speech in the cloned voice and writes it to output_path.
    Returns metadata (device used, generation time) the caller stores
    alongside the MessageVoice row.
    """
    if not settings.VOICE_ENABLED:
        raise VoiceSynthesisError("Voice generation is disabled (VOICE_ENABLED=false).")
    if not Path(reference_audio_path).exists():
        raise VoiceSynthesisError(f"Reference audio not found: {reference_audio_path}")

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)

    device = _get_device()
    start = time.perf_counter()
    try:
        model = _get_model()
        model.tts_to_file(
            text=text,
            speaker_wav=reference_audio_path,
            language=language,
            file_path=output_path,
        )
    except Exception as exc:  # model/runtime errors -> one clear exception type for callers
        raise VoiceSynthesisError(f"Voice generation failed: {exc}") from exc

    elapsed_ms = int((time.perf_counter() - start) * 1000)
    return {"device": device, "generation_ms": elapsed_ms, "file_path": output_path}

```

---

# app\tests\__init__.py

**Location:** `app\tests\__init__.py`

```python

```

---

# app\tests\conftest.py

**Location:** `app\tests\conftest.py`

```python
"""
Shared sqlite test-session helper. memory_chunks uses a pgvector Vector
column that sqlite can't compile, so it's excluded from the auto-created
schema here — tests that touch RAG storage directly use Postgres (see
test_ingestion.py / test_retrieval.py, which mock the DB layer instead of
hitting a real one, keeping the whole suite runnable without a live
Postgres+pgvector instance).
"""
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import app.db.base  # noqa: F401 - registers all models on Base.metadata
from app.db.database import Base


def make_sqlite_session():
    engine = create_engine("sqlite://")
    tables = [t for t in Base.metadata.sorted_tables if t.name != "memory_chunks"]
    Base.metadata.create_all(engine, tables=tables)
    session = sessionmaker(bind=engine)()
    return engine, session

```

---

# app\tests\test_auth.py

**Location:** `app\tests\test_auth.py`

```python
import os
import unittest
from unittest.mock import patch

os.environ.setdefault("DATABASE_URL", "sqlite://")
os.environ.setdefault("SECRET_KEY", "test-secret-key")
os.environ.setdefault("ALGORITHM", "HS256")
os.environ.setdefault("ACCESS_TOKEN_EXPIRE_MINUTES", "30")
os.environ.setdefault("GOOGLE_CLIENT_ID", "test-client-id")

from app.core.security import decode_access_token, verify_password
from app.services.auth_service import (
    create_registered_session, login_user, refresh_user_session, register_user,
    send_email_verification, verify_email_otp,
)
from app.tests.conftest import make_sqlite_session


class AuthServiceTests(unittest.TestCase):
    def setUp(self):
        self.engine, self.db = make_sqlite_session()

    def tearDown(self):
        self.db.close()
        self.engine.dispose()

    def test_register_hashes_password_and_creates_session(self):
        user = register_user(self.db, "Ada", "Lovelace", "ada@example.com", "correct-horse-battery")
        self.assertTrue(verify_password("correct-horse-battery", user.password_hash))
        payload, refresh_token = create_registered_session(self.db, user)
        self.assertEqual(payload["user"].id, user.id)
        self.assertTrue(refresh_token)
        self.assertEqual(decode_access_token(payload["access_token"])["sub"], str(user.id))

    def test_login_and_refresh_rotate_the_refresh_token(self):
        user = register_user(self.db, "Ada", "Lovelace", "ada@example.com", "correct-horse-battery")
        user.is_verified = True
        self.db.commit()
        payload, refresh_token = login_user(self.db, "ada@example.com", "correct-horse-battery")
        refreshed_payload, new_refresh_token = refresh_user_session(self.db, refresh_token)
        self.assertNotEqual(refresh_token, new_refresh_token)
        self.assertNotEqual(payload["access_token"], refreshed_payload["access_token"])
        with self.assertRaises(Exception):
            refresh_user_session(self.db, refresh_token)

    def test_verification_code_marks_the_user_verified(self):
        user = register_user(self.db, "Ada", "Lovelace", "ada@example.com", "correct-horse-battery")
        with patch("app.services.auth_service.send_verification_otp") as send_otp:
            send_email_verification(self.db, user)
            otp = send_otp.call_args.args[1]
        payload, _ = verify_email_otp(self.db, user.email, otp)
        self.assertTrue(payload["user"].is_verified)


if __name__ == "__main__":
    unittest.main()

```

---

# app\tests\test_chat_service.py

**Location:** `app\tests\test_chat_service.py`

```python
"""
Proves the RAG wiring end-to-end at the chat_service level: crisis
messages never reach retrieval/the LLM, and non-crisis messages get
retrieval results injected into the system prompt and returned as
sources_used, all without touching a real DB, embedding model, or LLM API.
"""
import unittest
from unittest.mock import MagicMock, patch

from app.services import chat_service


class FakeCompanion:
    id = 1
    full_name = "Grandma Rosa"
    relationship_type = "grandmother"
    speaking_style = "gentle"
    communication_style = "warm"
    personality_traits = ["kind"]
    humor_level = "playful"
    hobbies = "gardening"
    nickname_for_user = "mija"
    topics_to_avoid = None


class ChatServiceTests(unittest.TestCase):
    @patch("app.services.chat_service.get_companion", return_value=FakeCompanion())
    @patch("app.services.chat_service.create_message")
    def test_crisis_message_skips_retrieval_and_llm(self, mock_create_message, mock_get_companion):
        mock_create_message.side_effect = [
            MagicMock(is_crisis_flagged=True),
            MagicMock(is_safety_response=True),
        ]
        with patch("app.services.chat_service.retrieve_relevant_chunks") as mock_retrieve, \
             patch("app.services.chat_service.generate_reply") as mock_generate:
            user_msg, assistant_msg, is_crisis, sources = chat_service.send_message(
                MagicMock(), user_id=1, companion_id=1, user_text="I want to end my life",
            )
        mock_retrieve.assert_not_called()
        mock_generate.assert_not_called()
        self.assertTrue(is_crisis)
        self.assertEqual(sources, [])

    @patch("app.services.chat_service.get_companion", return_value=FakeCompanion())
    @patch("app.services.chat_service.get_recent_messages", return_value=[])
    @patch("app.services.chat_service.create_message")
    @patch("app.services.chat_service.generate_reply", return_value="She loved pancakes on Sundays.")
    @patch("app.services.chat_service.retrieve_relevant_chunks")
    def test_normal_message_uses_retrieved_context_and_returns_sources(
        self, mock_retrieve, mock_generate, mock_create_message, mock_recent, mock_get_companion,
    ):
        class FakeChunk:
            source_type = "file"
            source_label = "letters.txt"
            content = "She always made pancakes on Sunday mornings."

        mock_retrieve.return_value = [FakeChunk()]
        mock_create_message.side_effect = [
            MagicMock(is_crisis_flagged=False),
            MagicMock(),
        ]

        user_msg, assistant_msg, is_crisis, sources = chat_service.send_message(
            MagicMock(), user_id=1, companion_id=1, user_text="what did she like for breakfast",
        )

        mock_retrieve.assert_called_once()
        mock_generate.assert_called_once()
        system_prompt_used = mock_generate.call_args.args[0]
        self.assertIn("pancakes on Sunday mornings", system_prompt_used)
        self.assertFalse(is_crisis)
        self.assertEqual(len(sources), 1)
        self.assertEqual(sources[0]["source_label"], "letters.txt")


if __name__ == "__main__":
    unittest.main()

```

---

# app\tests\test_chunking.py

**Location:** `app\tests\test_chunking.py`

```python
import unittest

from app.utils.text_chunking import chunk_text


class ChunkTextTests(unittest.TestCase):
    def test_empty_text_returns_no_chunks(self):
        self.assertEqual(chunk_text(""), [])
        self.assertEqual(chunk_text("   "), [])

    def test_short_text_returns_a_single_chunk(self):
        self.assertEqual(chunk_text("Hello there."), ["Hello there."])

    def test_long_text_is_split_with_overlap(self):
        text = ("Sentence one is here. " * 200).strip()
        chunks = chunk_text(text, chunk_size=200, overlap=40)
        self.assertGreater(len(chunks), 1)
        for chunk in chunks:
            self.assertLessEqual(len(chunk), 200)

    def test_rejects_overlap_larger_than_chunk_size(self):
        with self.assertRaises(ValueError):
            chunk_text("some text", chunk_size=50, overlap=50)

    def test_every_chunk_is_non_empty(self):
        text = "A" * 3000
        chunks = chunk_text(text, chunk_size=500, overlap=50)
        self.assertTrue(all(c.strip() for c in chunks))


if __name__ == "__main__":
    unittest.main()

```

---

# app\tests\test_emotion_service.py

**Location:** `app\tests\test_emotion_service.py`

```python
import unittest

from app.services.emotion_service import score_emotional_intensity, should_auto_generate_voice


class EmotionServiceTests(unittest.TestCase):
    def test_high_emotion_reply_crosses_threshold(self):
        text = "I miss you so much, my dear. I remember when we used to bake together — I'm always here, and I'm so proud of you."
        self.assertTrue(should_auto_generate_voice(text))
        self.assertGreaterEqual(score_emotional_intensity(text), 3)

    def test_plain_factual_reply_does_not_trigger(self):
        text = "The recipe calls for two cups of flour and a teaspoon of salt."
        self.assertFalse(should_auto_generate_voice(text))

    def test_mildly_warm_reply_alone_does_not_trigger(self):
        text = "That sounds nice."
        self.assertFalse(should_auto_generate_voice(text))


if __name__ == "__main__":
    unittest.main()

```

---

# app\tests\test_ingestion.py

**Location:** `app\tests\test_ingestion.py`

```python
"""
Tests the chunk -> embed -> store orchestration in isolation, by mocking
the embedding model and the repository layer. This keeps the suite fast
and network-free while still proving the wiring is correct; the actual
pgvector storage/query behaviour is exercised against a real Postgres
instance in staging/CI-with-db, not here.
"""
import unittest
from unittest.mock import MagicMock, patch

from app.services import ingestion_service


class IngestFileTextTests(unittest.TestCase):
    @patch("app.services.ingestion_service.replace_file_chunks")
    @patch("app.services.ingestion_service.embed_texts")
    def test_chunks_are_embedded_and_stored_together(self, mock_embed, mock_store):
        # one dummy vector per chunk, whatever the chunker actually produces —
        # this test is about the wiring, not the exact chunk count
        mock_embed.side_effect = lambda pieces: [[0.1, 0.2] for _ in pieces]
        mock_store.side_effect = lambda db, **kwargs: len(kwargs["chunks_with_embeddings"])
        db = MagicMock()

        text = ("Grandma always made tamales at Christmas. " * 60).strip()
        count = ingestion_service.ingest_file_text(
            db, memory_person_id=1, memory_file_id=7, source_label="letters.txt", text=text,
        )

        self.assertGreater(count, 0)
        mock_embed.assert_called_once()
        chunks_passed_to_embed = mock_embed.call_args.args[0]
        self.assertEqual(len(chunks_passed_to_embed), count)

        mock_store.assert_called_once()
        kwargs = mock_store.call_args.kwargs
        self.assertEqual(kwargs["memory_person_id"], 1)
        self.assertEqual(kwargs["memory_file_id"], 7)
        self.assertEqual(kwargs["source_label"], "letters.txt")
        self.assertEqual(len(kwargs["chunks_with_embeddings"]), count)

    @patch("app.services.ingestion_service.replace_file_chunks")
    @patch("app.services.ingestion_service.embed_texts")
    def test_empty_text_short_circuits_without_calling_the_model(self, mock_embed, mock_store):
        result = ingestion_service.ingest_file_text(
            MagicMock(), memory_person_id=1, memory_file_id=7, source_label="empty.txt", text="   ",
        )
        self.assertEqual(result, 0)
        mock_embed.assert_not_called()
        mock_store.assert_not_called()


class IngestProfileTests(unittest.TestCase):
    @patch("app.services.ingestion_service.replace_profile_chunks")
    @patch("app.services.ingestion_service.embed_texts")
    def test_only_populated_narrative_fields_are_embedded(self, mock_embed, mock_store):
        mock_embed.return_value = [[0.1] * 384, [0.2] * 384]

        class FakePerson:
            id = 5
            biography = "She was a teacher for 30 years."
            bond_story = "We baked cookies every winter."
            special_memories = None
            favorite_quote = ""
            communication_style = None

        ingestion_service.ingest_profile(MagicMock(), FakePerson())

        embedded_texts = mock_embed.call_args.args[0]
        self.assertEqual(len(embedded_texts), 2)
        self.assertTrue(any("teacher for 30 years" in t for t in embedded_texts))
        self.assertTrue(any("baked cookies every winter" in t for t in embedded_texts))

    @patch("app.services.ingestion_service.replace_profile_chunks")
    @patch("app.services.ingestion_service.embed_texts")
    def test_no_narrative_fields_clears_existing_chunks_without_embedding(self, mock_embed, mock_store):
        class EmptyPerson:
            id = 9
            biography = None
            bond_story = None
            special_memories = None
            favorite_quote = None
            communication_style = None

        db = MagicMock()
        result = ingestion_service.ingest_profile(db, EmptyPerson())
        self.assertEqual(result, 0)
        mock_embed.assert_not_called()
        mock_store.assert_called_once_with(db, memory_person_id=9, chunks_with_embeddings=[])


if __name__ == "__main__":
    unittest.main()

```

---

# app\tests\test_json_flatten.py

**Location:** `app\tests\test_json_flatten.py`

```python
import unittest

from app.utils.json_flatten import flatten_json_to_text, parse_and_flatten_json_bytes


class JsonFlattenTests(unittest.TestCase):
    def test_flattens_nested_dict(self):
        data = {"name": "Grandma Rosa", "favorites": {"food": "tamales", "song": "Bésame Mucho"}}
        text = flatten_json_to_text(data)
        self.assertIn("name: Grandma Rosa", text)
        self.assertIn("favorites > food: tamales", text)
        self.assertIn("favorites > song: Bésame Mucho", text)

    def test_flattens_list_of_memory_entries(self):
        data = [{"memory": "Taught me to cook", "year": 2005}, {"memory": "Sunday walks", "year": 2010}]
        text = flatten_json_to_text(data)
        self.assertIn("[0] > memory: Taught me to cook", text)
        self.assertIn("[1] > year: 2010", text)

    def test_skips_empty_values(self):
        data = {"note": "", "other": None, "kept": "value"}
        text = flatten_json_to_text(data)
        self.assertNotIn("note:", text)
        self.assertNotIn("other:", text)
        self.assertIn("kept: value", text)

    def test_invalid_json_bytes_raise_value_error(self):
        with self.assertRaises(ValueError):
            parse_and_flatten_json_bytes(b"{not valid json")

    def test_valid_json_bytes_round_trip(self):
        text = parse_and_flatten_json_bytes(b'{"memory": "First bike ride together"}')
        self.assertIn("memory: First bike ride together", text)


if __name__ == "__main__":
    unittest.main()

```

---

# app\tests\test_message_voice_service.py

**Location:** `app\tests\test_message_voice_service.py`

```python
"""
Proves the on-demand vs auto-trigger paths converge, and that missing
reference audio / disabled voice fail safely (never crash the chat flow).
"""
import unittest
from unittest.mock import MagicMock, patch

from app.services import message_voice_service as mvs


class FakeVoiceRow:
    def __init__(self, status="pending"):
        self.status = status
        self.id = 1


class FakeMessage:
    id = 42
    content = "I miss you so much, my dear."


class RequestVoiceForMessageTests(unittest.TestCase):
    @patch("app.services.message_voice_service.get_message_by_id", return_value=None)
    def test_missing_message_raises_404(self, mock_get_message):
        from fastapi import HTTPException
        with self.assertRaises(HTTPException):
            mvs.request_voice_for_message(MagicMock(), companion_id=1, message_id=999)

    @patch("app.services.message_voice_service.is_available", return_value=False)
    @patch("app.services.message_voice_service.get_voice_for_message", return_value=None)
    @patch("app.services.message_voice_service.get_message_by_id", return_value=FakeMessage())
    def test_unavailable_voice_backend_raises_503(self, mock_get_message, mock_get_voice, mock_available):
        from fastapi import HTTPException
        with self.assertRaises(HTTPException) as ctx:
            mvs.request_voice_for_message(MagicMock(), companion_id=1, message_id=42)
        self.assertEqual(ctx.exception.status_code, 503)

    @patch("app.services.message_voice_service.create_pending_voice")
    @patch("app.services.message_voice_service.is_available", return_value=True)
    @patch("app.services.message_voice_service.get_voice_for_message", return_value=None)
    @patch("app.services.message_voice_service.get_message_by_id", return_value=FakeMessage())
    def test_new_request_creates_a_pending_job(self, mock_get_message, mock_get_voice, mock_available, mock_create):
        mock_create.return_value = FakeVoiceRow(status="pending")
        voice_row, message = mvs.request_voice_for_message(MagicMock(), companion_id=1, message_id=42)
        mock_create.assert_called_once()
        self.assertEqual(voice_row.status, "pending")

    @patch("app.services.message_voice_service.get_voice_for_message", return_value=FakeVoiceRow(status="completed"))
    @patch("app.services.message_voice_service.get_message_by_id", return_value=FakeMessage())
    def test_already_completed_job_is_returned_without_creating_a_new_one(self, mock_get_message, mock_get_voice):
        voice_row, message = mvs.request_voice_for_message(MagicMock(), companion_id=1, message_id=42)
        self.assertEqual(voice_row.status, "completed")


class RunGenerationTests(unittest.TestCase):
    @patch("app.services.message_voice_service.mark_failed")
    @patch("app.services.message_voice_service.get_voice_reference", return_value=None)
    def test_missing_reference_marks_job_failed_not_raises(self, mock_get_ref, mock_mark_failed):
        mvs._run_generation(MagicMock(), companion_id=1, message=FakeMessage(), voice_row=FakeVoiceRow())
        mock_mark_failed.assert_called_once()

    @patch("app.services.message_voice_service.mark_completed")
    @patch("app.services.message_voice_service.mark_generating")
    @patch("app.services.message_voice_service.synthesize_speech")
    @patch("app.services.message_voice_service.get_voice_reference")
    def test_successful_generation_marks_completed_with_metadata(self, mock_get_ref, mock_synth, mock_generating, mock_completed):
        mock_get_ref.return_value = MagicMock(status="ready", file_path="/tmp/ref.wav")
        mock_synth.return_value = {"device": "cuda", "generation_ms": 4200, "file_path": "/tmp/out.wav"}

        mvs._run_generation(MagicMock(), companion_id=1, message=FakeMessage(), voice_row=FakeVoiceRow())

        mock_generating.assert_called_once()
        mock_completed.assert_called_once()
        kwargs = mock_completed.call_args.kwargs
        self.assertEqual(kwargs["device"], "cuda")
        self.assertEqual(kwargs["generation_ms"], 4200)


class AutoTriggerTests(unittest.TestCase):
    @patch("app.services.message_voice_service.settings")
    @patch("app.services.message_voice_service.get_voice_reference")
    @patch("app.services.message_voice_service.is_available", return_value=True)
    @patch("app.services.message_voice_service.create_pending_voice")
    def test_emotional_reply_with_ready_reference_schedules_background_task(self, mock_create, mock_available, mock_get_ref, mock_settings):
        mock_settings.VOICE_ENABLED = True
        mock_get_ref.return_value = MagicMock(status="ready")
        mock_create.return_value = FakeVoiceRow()
        background_tasks = MagicMock()

        mvs.trigger_auto_generation_if_needed(
            MagicMock(), companion_id=1, message=FakeMessage(),
            reply_text="I miss you so much, my dear. I'm always here, and I remember when we baked together.",
            background_tasks=background_tasks,
        )

        mock_create.assert_called_once()
        background_tasks.add_task.assert_called_once()

    @patch("app.services.message_voice_service.settings")
    @patch("app.services.message_voice_service.create_pending_voice")
    def test_plain_reply_does_not_schedule_anything(self, mock_create, mock_settings):
        mock_settings.VOICE_ENABLED = True
        background_tasks = MagicMock()

        mvs.trigger_auto_generation_if_needed(
            MagicMock(), companion_id=1, message=FakeMessage(),
            reply_text="The store closes at 9pm.", background_tasks=background_tasks,
        )

        mock_create.assert_not_called()
        background_tasks.add_task.assert_not_called()

    @patch("app.services.message_voice_service.settings")
    @patch("app.services.message_voice_service.create_pending_voice")
    def test_voice_disabled_globally_skips_even_emotional_replies(self, mock_create, mock_settings):
        mock_settings.VOICE_ENABLED = False
        background_tasks = MagicMock()

        mvs.trigger_auto_generation_if_needed(
            MagicMock(), companion_id=1, message=FakeMessage(),
            reply_text="I miss you so much, my dear, I'm always here.", background_tasks=background_tasks,
        )

        mock_create.assert_not_called()
        background_tasks.add_task.assert_not_called()


if __name__ == "__main__":
    unittest.main()

```

---

# app\tests\test_retrieval.py

**Location:** `app\tests\test_retrieval.py`

```python
import unittest
from unittest.mock import MagicMock, patch

from app.services.retrieval_service import format_chunks_for_prompt, retrieve_relevant_chunks


class FakeChunk:
    def __init__(self, source_type, source_label, content):
        self.source_type = source_type
        self.source_label = source_label
        self.content = content


class RetrievalServiceTests(unittest.TestCase):
    @patch("app.services.retrieval_service.similarity_search")
    @patch("app.services.retrieval_service.embed_text")
    def test_retrieve_embeds_query_then_searches_by_person(self, mock_embed, mock_search):
        mock_embed.return_value = [0.1, 0.2, 0.3]
        mock_search.return_value = [FakeChunk("file", "letters.txt", "She loved Sunday pancakes.")]
        db = MagicMock()

        result = retrieve_relevant_chunks(db, memory_person_id=3, query="what did she like for breakfast", top_k=5)

        mock_embed.assert_called_once_with("what did she like for breakfast")
        mock_search.assert_called_once_with(db, memory_person_id=3, query_embedding=[0.1, 0.2, 0.3], top_k=5)
        self.assertEqual(len(result), 1)

    def test_format_chunks_labels_each_source(self):
        chunks = [
            FakeChunk("file", "letters.txt", "She loved Sunday pancakes."),
            FakeChunk("profile", None, "Warm and funny."),
        ]
        formatted = format_chunks_for_prompt(chunks)
        self.assertIn("[From: letters.txt]", formatted)
        self.assertIn("[From: Profile]", formatted)
        self.assertIn("She loved Sunday pancakes.", formatted)

    def test_empty_chunks_format_to_empty_string(self):
        self.assertEqual(format_chunks_for_prompt([]), "")


if __name__ == "__main__":
    unittest.main()

```

---

# app\tests\test_safety.py

**Location:** `app\tests\test_safety.py`

```python
import unittest

from app.services.safety_service import detect_crisis, detect_dependency_language, build_system_prompt


class SafetyServiceTests(unittest.TestCase):
    def test_detects_direct_crisis_language(self):
        self.assertTrue(detect_crisis("I want to kill myself tonight"))
        self.assertTrue(detect_crisis("sometimes I think about suicide"))

    def test_does_not_flag_ordinary_grief_language(self):
        self.assertFalse(detect_crisis("I miss him so much it hurts"))
        self.assertFalse(detect_crisis("I wish I could talk to her one more time"))

    def test_detects_unhealthy_dependency_language(self):
        self.assertTrue(detect_dependency_language("You are him now, I don't need anyone else"))

    def test_does_not_flag_normal_affection(self):
        self.assertFalse(detect_dependency_language("It's nice to hear your voice again"))

    def test_system_prompt_forbids_claiming_to_be_the_person_and_includes_context(self):
        class FakePerson:
            full_name = "Grandma Rosa"
            relationship_type = "grandmother"
            speaking_style = "gentle"
            communication_style = "warm"
            personality_traits = ["funny", "kind"]
            humor_level = "playful"
            hobbies = "gardening"
            nickname_for_user = "mija"
            topics_to_avoid = "her illness"

        prompt = build_system_prompt(FakePerson(), turn_count=1, retrieved_context="She loved Sunday pancakes.")
        self.assertIn("You are NOT Grandma Rosa", prompt)
        self.assertIn("She loved Sunday pancakes.", prompt)
        self.assertIn("RELEVANT MEMORIES", prompt)


if __name__ == "__main__":
    unittest.main()

```

---

# app\tests\test_users.py

**Location:** `app\tests\test_users.py`

```python

```

---

# app\tests\test_voice_synthesis_service.py

**Location:** `app\tests\test_voice_synthesis_service.py`

```python
"""
Tests voice_synthesis_service without ever importing the real TTS/torch
packages (they're multi-GB and irrelevant to proving the orchestration
logic is correct) — patches _get_model/_get_device directly.
"""
import unittest
from pathlib import Path
from unittest.mock import MagicMock, patch

from app.services import voice_synthesis_service as vs


class VoiceSynthesisServiceTests(unittest.TestCase):
    def setUp(self):
        vs._get_device.cache_clear()
        vs._get_model.cache_clear()

    @patch("app.services.voice_synthesis_service.settings")
    def test_raises_when_voice_disabled(self, mock_settings):
        mock_settings.VOICE_ENABLED = False
        with self.assertRaises(vs.VoiceSynthesisError):
            vs.synthesize_speech(text="hello", reference_audio_path="/tmp/does-not-matter.wav", output_path="/tmp/out.wav")

    @patch("app.services.voice_synthesis_service.settings")
    def test_raises_when_reference_file_missing(self, mock_settings):
        mock_settings.VOICE_ENABLED = True
        with self.assertRaises(vs.VoiceSynthesisError):
            vs.synthesize_speech(text="hello", reference_audio_path="/tmp/definitely-not-here.wav", output_path="/tmp/out.wav")

    @patch("app.services.voice_synthesis_service._get_model")
    @patch("app.services.voice_synthesis_service._get_device", return_value="cpu")
    @patch("app.services.voice_synthesis_service.settings")
    def test_successful_generation_returns_device_and_timing(self, mock_settings, mock_device, mock_get_model, tmp_path=None):
        mock_settings.VOICE_ENABLED = True
        fake_model = MagicMock()
        mock_get_model.return_value = fake_model

        with unittest.mock.patch.object(Path, "exists", return_value=True):
            result = vs.synthesize_speech(text="hello there", reference_audio_path="/tmp/ref.wav", output_path="/tmp/out/reply.wav")

        fake_model.tts_to_file.assert_called_once()
        call_kwargs = fake_model.tts_to_file.call_args.kwargs
        self.assertEqual(call_kwargs["text"], "hello there")
        self.assertEqual(call_kwargs["speaker_wav"], "/tmp/ref.wav")
        self.assertEqual(result["device"], "cpu")
        self.assertIn("generation_ms", result)

    @patch("app.services.voice_synthesis_service._get_model")
    @patch("app.services.voice_synthesis_service._get_device", return_value="cpu")
    @patch("app.services.voice_synthesis_service.settings")
    def test_model_failure_wraps_into_voice_synthesis_error(self, mock_settings, mock_device, mock_get_model):
        mock_settings.VOICE_ENABLED = True
        fake_model = MagicMock()
        fake_model.tts_to_file.side_effect = RuntimeError("CUDA out of memory")
        mock_get_model.return_value = fake_model

        with unittest.mock.patch.object(Path, "exists", return_value=True):
            with self.assertRaises(vs.VoiceSynthesisError):
                vs.synthesize_speech(text="hello", reference_audio_path="/tmp/ref.wav", output_path="/tmp/out/reply.wav")


class DeviceDetectionTests(unittest.TestCase):
    def setUp(self):
        vs._get_device.cache_clear()

    @patch("app.services.voice_synthesis_service.settings")
    def test_explicit_device_setting_is_respected(self, mock_settings):
        mock_settings.XTTS_DEVICE = "cpu"
        self.assertEqual(vs._get_device(), "cpu")

    @patch("app.services.voice_synthesis_service.settings")
    def test_auto_falls_back_to_cpu_when_torch_missing(self, mock_settings):
        mock_settings.XTTS_DEVICE = "auto"
        with patch.dict("sys.modules", {"torch": None}):
            self.assertEqual(vs._get_device(), "cpu")


if __name__ == "__main__":
    unittest.main()

```

---

# app\utils\__init__.py

**Location:** `app\utils\__init__.py`

```python

```

---

# app\utils\helpers.py

**Location:** `app\utils\helpers.py`

```python
import re
import secrets
from pathlib import Path


def safe_filename(original_name: str) -> str:
    stem = Path(original_name).stem
    suffix = Path(original_name).suffix
    slug = re.sub(r"[^a-zA-Z0-9_-]+", "-", stem).strip("-")[:60] or "file"
    return f"{slug}-{secrets.token_hex(8)}{suffix.lower()}"

```

---

# app\utils\json_flatten.py

**Location:** `app\utils\json_flatten.py`

```python
"""
Turns arbitrary uploaded JSON (chat exports, structured memory notes,
a list of Q&A pairs, whatever shape someone exports) into readable text
so it can go through the same chunker/embedder as everything else.
"""
import json


def flatten_json_to_text(data) -> str:
    lines: list[str] = []
    _walk(data, path=[], lines=lines)
    return "\n".join(lines)


def _walk(node, path: list[str], lines: list[str]) -> None:
    if isinstance(node, dict):
        for key, value in node.items():
            _walk(value, path + [str(key)], lines)
    elif isinstance(node, list):
        for index, item in enumerate(node):
            if isinstance(item, (dict, list)):
                _walk(item, path + [f"[{index}]"], lines)
            else:
                label = " > ".join(path) if path else "item"
                lines.append(f"{label}: {item}")
    else:
        if node is None or node == "":
            return
        label = " > ".join(path) if path else "value"
        lines.append(f"{label}: {node}")


def parse_and_flatten_json_bytes(raw: bytes) -> str:
    try:
        data = json.loads(raw.decode("utf-8"))
    except (json.JSONDecodeError, UnicodeDecodeError) as exc:
        raise ValueError("File is not valid UTF-8 JSON") from exc
    return flatten_json_to_text(data)

```

---

# app\utils\text_chunking.py

**Location:** `app\utils\text_chunking.py`

```python
"""
Plain character-window chunker with overlap. Kept dependency-free and
deterministic on purpose so it's trivially unit-testable without a model
or a network call.
"""
from app.core.config import settings


def chunk_text(text: str, chunk_size: int | None = None, overlap: int | None = None) -> list[str]:
    chunk_size = chunk_size or settings.RAG_CHUNK_SIZE_CHARS
    overlap = overlap if overlap is not None else settings.RAG_CHUNK_OVERLAP_CHARS

    text = text.strip()
    if not text:
        return []
    if overlap >= chunk_size:
        raise ValueError("overlap must be smaller than chunk_size")

    chunks: list[str] = []
    start = 0
    length = len(text)

    while start < length:
        end = min(start + chunk_size, length)

        # try not to cut mid-sentence: back off to the last sentence-ish
        # boundary within this window, if there's a reasonable one
        if end < length:
            boundary = max(text.rfind(". ", start, end), text.rfind("\n", start, end))
            if boundary != -1 and boundary > start + (chunk_size // 3):
                end = boundary + 1

        piece = text[start:end].strip()
        if piece:
            chunks.append(piece)

        if end >= length:
            break
        start = max(end - overlap, start + 1)

    return chunks

```

---

# app\utils\validators.py

**Location:** `app\utils\validators.py`

```python
from fastapi import HTTPException, status

from app.core.config import settings

CATEGORY_MAP = {
    "image": settings.ALLOWED_IMAGE_TYPES.split(","),
    "video": settings.ALLOWED_VIDEO_TYPES.split(","),
    "audio": settings.ALLOWED_AUDIO_TYPES.split(","),
    "document": settings.ALLOWED_DOCUMENT_TYPES.split(","),
}

# Mime types (within "document") that we know how to turn into RAG chunks today.
TEXT_INGESTABLE_MIME_TYPES = {"text/plain", "application/json"}


def classify_and_validate_mime(mime_type: str) -> str:
    for category, allowed in CATEGORY_MAP.items():
        if mime_type in allowed:
            return category
    raise HTTPException(
        status_code=status.HTTP_415_UNSUPPORTED_MEDIA_TYPE,
        detail=f"Unsupported file type: {mime_type}",
    )


def validate_file_size(size_bytes: int) -> None:
    max_bytes = settings.MAX_UPLOAD_SIZE_MB * 1024 * 1024
    if size_bytes > max_bytes:
        raise HTTPException(
            status_code=status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
            detail=f"File exceeds the {settings.MAX_UPLOAD_SIZE_MB}MB limit",
        )

```

---

