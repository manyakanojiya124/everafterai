# EverAfter AI Backend Source

Generated automatically.

---

## Project Tree

```text
app
├── __pycache__
│   ├── __init__.cpython-314.pyc
│   └── main.cpython-314.pyc
├── api
│   ├── __pycache__
│   │   └── __init__.cpython-314.pyc
│   ├── v1
│   │   ├── __pycache__
│   │   │   ├── __init__.cpython-314.pyc
│   │   │   ├── auth.cpython-314.pyc
│   │   │   ├── chat.cpython-314.pyc
│   │   │   ├── memory_files.cpython-314.pyc
│   │   │   ├── memory_people.cpython-314.pyc
│   │   │   └── users.cpython-314.pyc
│   │   ├── __init__.py
│   │   ├── auth.py
│   │   ├── chat.py
│   │   ├── memory_files.py
│   │   ├── memory_people.py
│   │   └── users.py
│   └── __init__.py
├── core
│   ├── __pycache__
│   │   ├── __init__.cpython-314.pyc
│   │   ├── config.cpython-314.pyc
│   │   ├── oauth.cpython-314.pyc
│   │   └── security.cpython-314.pyc
│   ├── __init__.py
│   ├── config.py
│   ├── jwt.py
│   ├── oauth.py
│   └── security.py
├── db
│   ├── __pycache__
│   │   ├── __init__.cpython-314.pyc
│   │   ├── base.cpython-314.pyc
│   │   └── database.cpython-314.pyc
│   ├── __init__.py
│   ├── base.py
│   ├── database.py
│   └── session.py
├── dependecies
│   ├── __pycache__
│   │   ├── __init__.cpython-314.pyc
│   │   └── auth.cpython-314.pyc
│   ├── __init__.py
│   ├── auth.py
│   └── database.py
├── expectations
│   └── auth.py
├── middleware
│   ├── __init__.py
│   ├── auth_middleware.py
│   └── logging.py
├── models
│   ├── __pycache__
│   │   ├── __init__.cpython-314.pyc
│   │   ├── chat_message.cpython-314.pyc
│   │   ├── email_verification.cpython-314.pyc
│   │   ├── memory_file.cpython-314.pyc
│   │   ├── memory_person.cpython-314.pyc
│   │   ├── password_reset.cpython-314.pyc
│   │   ├── refresh_token.cpython-314.pyc
│   │   └── user.cpython-314.pyc
│   ├── __init__.py
│   ├── chat_message.py
│   ├── email_verification.py
│   ├── memory_file.py
│   ├── memory_person.py
│   ├── password_reset.py
│   ├── refresh_token.py
│   └── user.py
├── repositories
│   ├── __pycache__
│   │   ├── __init__.cpython-314.pyc
│   │   ├── chat_repository.cpython-314.pyc
│   │   ├── email_verification_repository.cpython-314.pyc
│   │   ├── memory_file_repository.cpython-314.pyc
│   │   ├── memory_person_repository.cpython-314.pyc
│   │   ├── token_repository.cpython-314.pyc
│   │   └── user_repository.cpython-314.pyc
│   ├── __init__.py
│   ├── chat_repository.py
│   ├── email_verification_repository.py
│   ├── memory_file_repository.py
│   ├── memory_person_repository.py
│   ├── token_repository.py
│   └── user_repository.py
├── schemas
│   ├── __pycache__
│   │   ├── __init__.cpython-314.pyc
│   │   ├── auth.cpython-314.pyc
│   │   ├── chat.cpython-314.pyc
│   │   ├── memory_file.cpython-314.pyc
│   │   ├── memory_person.cpython-314.pyc
│   │   └── user.cpython-314.pyc
│   ├── __init__.py
│   ├── auth.py
│   ├── chat.py
│   ├── memory_file.py
│   ├── memory_person.py
│   ├── token.py
│   └── user.py
├── services
│   ├── __pycache__
│   │   ├── __init__.cpython-314.pyc
│   │   ├── auth_service.cpython-314.pyc
│   │   ├── chat_service.cpython-314.pyc
│   │   ├── email_service.cpython-314.pyc
│   │   ├── llm_service.cpython-314.pyc
│   │   ├── memory_file_service.cpython-314.pyc
│   │   ├── memory_person_service.cpython-314.pyc
│   │   ├── oauth_service.cpython-314.pyc
│   │   └── safety_service.cpython-314.pyc
│   ├── __init__.py
│   ├── auth_service.py
│   ├── chat_service.py
│   ├── email_service.py
│   ├── llm_service.py
│   ├── memory_file_service.py
│   ├── memory_person_service.py
│   ├── oauth_service.py
│   ├── safety_service.py
│   └── token_service.py
├── tests
│   ├── __init__.py
│   ├── test_auth.py
│   ├── test_safety.py
│   └── test_users.py
├── utils
│   ├── __pycache__
│   │   ├── __init__.cpython-314.pyc
│   │   ├── helpers.cpython-314.pyc
│   │   └── validators.cpython-314.pyc
│   ├── __init__.py
│   ├── helpers.py
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
from fastapi import APIRouter, Depends
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
    companion_id: int, payload: ChatMessageCreate,
    db: Session = Depends(get_db), current_user: User = Depends(get_current_user),
):
    user_message, assistant_message, is_crisis = send_message(db, current_user.id, companion_id, payload.message)
    return {
        "user_message": user_message,
        "assistant_message": assistant_message,
        "is_crisis_response": is_crisis,
        "resources": CRISIS_RESOURCES if is_crisis else None,
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
from app.services.memory_file_service import (
    get_single_memory_file, list_memory_files, remove_memory_file, upload_memory_file,
)

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
    companion_id: int,
    file_type: Optional[str] = None,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    return list_memory_files(db, current_user.id, companion_id, file_type)


@router.get("/{file_id}", response_model=MemoryFileResponse)
def get_file(
    companion_id: int, file_id: int,
    db: Session = Depends(get_db), current_user: User = Depends(get_current_user),
):
    return get_single_memory_file(db, current_user.id, companion_id, file_id)


@router.delete("/{file_id}")
def delete_file(
    companion_id: int, file_id: int,
    db: Session = Depends(get_db), current_user: User = Depends(get_current_user),
):
    return remove_memory_file(db, current_user.id, companion_id, file_id)

```

---

# app\api\v1\memory_people.py

**Location:** `app\api\v1\memory_people.py`

```python
from typing import List

from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.dependecies.auth import get_current_user
from app.models.user import User
from app.schemas.memory_person import MemoryPersonCreate, MemoryPersonResponse, MemoryPersonUpdate
from app.services.memory_person_service import (
    create_companion, list_companions, get_companion, edit_companion, remove_companion,
)

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
    ALLOWED_DOCUMENT_TYPES: str = "application/pdf,text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"

    OPENAI_API_KEY: str | None = None
    OPENAI_MODEL: str = "gpt-4o-mini"
    OPENAI_BASE_URL: str = "https://api.openai.com/v1"

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
            credential,
            google_requests.Request(),
            settings.GOOGLE_CLIENT_ID,
        )
    except Exception as exc:
        raise GoogleTokenVerificationError(
            "Invalid Google credential"
        ) from exc

    google_id = payload.get("sub")
    email = payload.get("email")
    email_verified = payload.get("email_verified")

    if not google_id:
        raise GoogleTokenVerificationError(
            "Google account identifier is missing"
        )

    if not email:
        raise GoogleTokenVerificationError(
            "Google account email is missing"
        )

    if email_verified is not True:
        raise GoogleTokenVerificationError(
            "Google email is not verified"
        )

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
    expire = now + timedelta(
        minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES
    )
    payload.update(
        {
            "exp": expire,
            "iat": now,
            "jti": secrets.token_urlsafe(16),
            "type": "access",
        }
    )

    return jwt.encode(
        payload,
        settings.SECRET_KEY,
        algorithm=settings.ALGORITHM,
    )


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

```

---

# app\db\database.py

**Location:** `app\db\database.py`

```python
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

from app.core.config import settings


engine = create_engine(settings.DATABASE_URL)

SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False
)

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

import os

os.makedirs(settings.UPLOAD_DIR, exist_ok=True)

app = FastAPI(title="EverAfter AI", version="1.0.0")

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

# ==========================================================
# Root & Health
# ==========================================================

@app.get("/")
def home():
    return {
        "status": "running",
        "application": "EverAfter AI",
        "version": "1.0.0",
        "message": "Backend is running successfully",
    }


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
        logger.info(
            "%s %s -> %s (%.1fms) [%s]",
            request.method, request.url.path, response.status_code, duration_ms, request_id,
        )
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

__all__ = [
    "User",
    "RefreshToken",
    "EmailVerificationToken",
    "PasswordResetToken",
    "MemoryPerson",
    "MemoryFile",
    "ChatMessage",
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

    role = Column(String(20), nullable=False)  # user | assistant | system
    content = Column(Text, nullable=False)

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

# app\models\memory_file.py

**Location:** `app\models\memory_file.py`

```python
from sqlalchemy import (
    Boolean, Column, DateTime, ForeignKey, Integer, String, BigInteger, Text,
)
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

    file_type = Column(String(50), nullable=False)  # image, video, audio, document, chat, email, letter
    mime_type = Column(String(120), nullable=False)
    extension = Column(String(20), nullable=True)
    file_size = Column(BigInteger, nullable=True)
    duration = Column(Integer, nullable=True)  # seconds
    description = Column(Text, nullable=True)

    is_processed = Column(Boolean, default=False, nullable=False)
    processing_status = Column(String(50), default="pending", nullable=False)  # pending, processing, completed, failed
    processing_error = Column(Text, nullable=True)

    extracted_text = Column(Text, nullable=True)
    embedding_id = Column(String(255), nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    memory_person = relationship("MemoryPerson", back_populates="files")

```

---

# app\models\memory_person.py

**Location:** `app\models\memory_person.py`

```python
from sqlalchemy import (
    Boolean, Column, Date, DateTime, ForeignKey, Integer, String, Text, JSON,
)
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
    chat_messages = relationship("ChatMessage", back_populates="memory_person", cascade="all, delete-orphan")

    @property
    def relationship(self):
        return self.relationship_type

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
from sqlalchemy import (
    Boolean,
    Column,
    DateTime,
    Integer,
    String,
)
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
    message = ChatMessage(
        memory_person_id=memory_person_id,
        user_id=user_id,
        role=role,
        content=content,
        is_crisis_flagged=is_crisis_flagged,
        is_safety_response=is_safety_response,
    )
    db.add(message)
    db.commit()
    db.refresh(message)
    return message


def get_recent_messages(db: Session, memory_person_id: int, user_id: int, limit: int = 20):
    messages = (
        db.query(ChatMessage)
        .filter(ChatMessage.memory_person_id == memory_person_id, ChatMessage.user_id == user_id)
        .order_by(ChatMessage.created_at.desc())
        .limit(limit)
        .all()
    )
    return list(reversed(messages))


def get_all_messages(db: Session, memory_person_id: int, user_id: int):
    return (
        db.query(ChatMessage)
        .filter(ChatMessage.memory_person_id == memory_person_id, ChatMessage.user_id == user_id)
        .order_by(ChatMessage.created_at.asc())
        .all()
    )


def delete_conversation(db: Session, memory_person_id: int, user_id: int) -> None:
    (
        db.query(ChatMessage)
        .filter(ChatMessage.memory_person_id == memory_person_id, ChatMessage.user_id == user_id)
        .delete(synchronize_session=False)
    )
    db.commit()

```

---

# app\repositories\email_verification_repository.py

**Location:** `app\repositories\email_verification_repository.py`

```python
from datetime import datetime

from sqlalchemy.orm import Session

from app.models import EmailVerificationToken


def replace_email_verification_token(db: Session, *, user_id: int, token_hash: str, expires_at: datetime) -> EmailVerificationToken:
    (
        db.query(EmailVerificationToken)
        .filter(EmailVerificationToken.user_id == user_id, EmailVerificationToken.used.is_(False))
        .update({EmailVerificationToken.used: True}, synchronize_session=False)
    )
    token = EmailVerificationToken(user_id=user_id, token=token_hash, expires_at=expires_at)
    db.add(token)
    return token


def get_active_email_verification_token(db: Session, *, user_id: int, token_hash: str) -> EmailVerificationToken | None:
    return (
        db.query(EmailVerificationToken)
        .filter(
            EmailVerificationToken.user_id == user_id,
            EmailVerificationToken.token == token_hash,
            EmailVerificationToken.used.is_(False),
        )
        .first()
    )

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
    return (
        db.query(MemoryFile)
        .filter(MemoryFile.id == file_id, MemoryFile.memory_person_id == memory_person_id)
        .first()
    )


def delete_memory_file(db: Session, memory_file: MemoryFile) -> None:
    db.delete(memory_file)
    db.commit()


def update_processing_result(db: Session, memory_file: MemoryFile, *, extracted_text: str | None, status: str, error: str | None = None) -> MemoryFile:
    memory_file.extracted_text = extracted_text
    memory_file.processing_status = status
    memory_file.processing_error = error
    memory_file.is_processed = status == "completed"
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
    user = User(
        first_name=first_name, last_name=last_name, email=email,
        password_hash=password_hash, provider="email", is_active=True, is_verified=False,
    )
    db.add(user)
    return user


def get_user_by_google_id(db: Session, google_id: str) -> User | None:
    return db.query(User).filter(User.google_id == google_id).first()


def create_google_user(db: Session, *, first_name: str, last_name: str, email: str, google_id: str, profile_picture: str | None) -> User:
    user = User(
        first_name=first_name, last_name=last_name, email=email, password_hash=None,
        profile_picture=profile_picture, provider="google", google_id=google_id,
        is_active=True, is_verified=True,
    )
    db.add(user)
    return user


def update_last_login(db: Session, user: User):
    from datetime import datetime, timezone
    user.last_login = datetime.now(timezone.utc)
    return user

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


class ChatReplyResponse(BaseModel):
    user_message: ChatMessageResponse
    assistant_message: ChatMessageResponse
    is_crisis_response: bool
    resources: Optional[List[str]] = None


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
from app.core.security import (
    create_access_token, create_refresh_token, hash_password, hash_refresh_token, verify_password,
)
from app.repositories.token_repository import (
    create_refresh_token as create_stored_refresh_token, get_active_refresh_token, revoke_refresh_token,
)
from app.repositories.email_verification_repository import (
    get_active_email_verification_token, replace_email_verification_token,
)
from app.repositories.user_repository import (
    create_user, get_user_by_email, get_user_by_id, update_last_login,
)
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
        {
            "access_token": create_access_token({"sub": str(user.id), "email": user.email}),
            "token_type": "bearer",
            "user": user,
        },
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
from sqlalchemy.orm import Session

from app.repositories.chat_repository import create_message, get_recent_messages, get_all_messages, delete_conversation
from app.services.memory_person_service import get_companion
from app.services.safety_service import (
    detect_crisis, detect_dependency_language, build_system_prompt,
    CRISIS_RESPONSE, DEPENDENCY_REMINDER,
)
from app.services.llm_service import generate_reply


def _history_as_llm_messages(messages) -> list[dict]:
    return [{"role": m.role, "content": m.content} for m in messages if m.role in ("user", "assistant")]


def send_message(db: Session, user_id: int, companion_id: int, user_text: str):
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
        return user_message, assistant_message, True

    history = get_recent_messages(db, companion.id, user_id, limit=20)
    turn_count = len(history)
    system_prompt = build_system_prompt(companion, turn_count)

    reply_text = generate_reply(system_prompt, _history_as_llm_messages(history[:-1]), user_text)

    if detect_dependency_language(user_text):
        reply_text += DEPENDENCY_REMINDER.format(name=companion.full_name)

    assistant_message = create_message(
        db, memory_person_id=companion.id, user_id=user_id, role="assistant", content=reply_text,
    )

    return user_message, assistant_message, False


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
import smtplib
from email.message import EmailMessage

from fastapi import HTTPException, status

from app.core.config import settings


def send_verification_otp(email: str, otp: str) -> None:
    if not all([settings.SMTP_HOST, settings.SMTP_USERNAME, settings.SMTP_PASSWORD, settings.SMTP_FROM_EMAIL]):
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Email verification is not configured. Add SMTP settings to backend/.env.",
        )
    message = EmailMessage()
    message["Subject"] = "Your EverAfter verification code"
    message["From"] = settings.SMTP_FROM_EMAIL
    message["To"] = email
    message.set_content(
        f"Your EverAfter verification code is: {otp}\n\n"
        f"It expires in {settings.EMAIL_VERIFICATION_EXPIRE_MINUTES} minutes. "
        "If you did not create an account, you can ignore this email."
    )
    try:
        with smtplib.SMTP(settings.SMTP_HOST, settings.SMTP_PORT, timeout=15) as client:
            if settings.SMTP_USE_TLS:
                client.starttls()
            client.login(settings.SMTP_USERNAME, settings.SMTP_PASSWORD)
            client.send_message(message)
    except (OSError, smtplib.SMTPException) as exc:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="We could not send the verification email. Please try again shortly.",
        ) from exc

```

---

# app\services\llm_service.py

**Location:** `app\services\llm_service.py`

```python
"""
Thin wrapper around an OpenAI-compatible chat completions endpoint.
Swappable: point OPENAI_BASE_URL at any compatible provider (Azure OpenAI,
OpenRouter, a local vLLM server, etc.) without touching calling code.
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
            headers={"Authorization": f"Bearer {settings.OPENAI_API_KEY}"},
            json={
                "model": settings.OPENAI_MODEL,
                "messages": messages,
                "temperature": 0.7,
                "max_tokens": 500,
            },
            timeout=30,
        )
        response.raise_for_status()
        data = response.json()
        return data["choices"][0]["message"]["content"].strip()
    except httpx.HTTPStatusError as exc:
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="The AI provider returned an error.",
        ) from exc
    except (httpx.RequestError, KeyError, IndexError) as exc:
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="Could not reach the AI provider.",
        ) from exc

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
from app.services.memory_person_service import get_companion
from app.utils.helpers import safe_filename
from app.utils.validators import classify_and_validate_mime, validate_file_size

TEXT_EXTRACTABLE_TYPES = {"text/plain"}


def _extract_text_if_possible(path: Path, mime_type: str) -> str | None:
    if mime_type in TEXT_EXTRACTABLE_TYPES:
        try:
            return path.read_text(encoding="utf-8", errors="ignore")[:20000]
        except OSError:
            return None
    return None


def upload_memory_file(db: Session, user_id: int, companion_id: int, file: UploadFile, description: str | None):
    companion = get_companion(db, user_id, companion_id)

    file_type = classify_and_validate_mime(file.content_type or "")

    contents = file.file.read()
    validate_file_size(len(contents))

    upload_root = Path(settings.UPLOAD_DIR) / "memory_files" / str(companion.id)
    upload_root.mkdir(parents=True, exist_ok=True)

    stored_name = safe_filename(file.filename or "upload.bin")
    destination = upload_root / stored_name
    destination.write_bytes(contents)

    extracted_text = _extract_text_if_possible(destination, file.content_type or "")

    memory_file = create_memory_file(
        db,
        memory_person_id=companion.id,
        file_name=stored_name,
        original_name=file.filename or stored_name,
        file_path=str(destination.as_posix()),
        file_type=file_type,
        mime_type=file.content_type or "application/octet-stream",
        extension=destination.suffix.lstrip("."),
        file_size=len(contents),
        description=description,
        processing_status="completed" if extracted_text is not None else "pending",
        extracted_text=extracted_text,
        is_processed=extracted_text is not None,
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


def create_companion(db: Session, user_id: int, payload: MemoryPersonCreate):
    return create_memory_person(db, user_id, payload)


def list_companions(db: Session, user_id: int):
    return get_memory_people(db, user_id)


def get_companion(db: Session, user_id: int, companion_id: int):
    companion = get_memory_person(db, user_id, companion_id)
    if companion is None:
        raise HTTPException(status_code=404, detail="Memory companion not found.")
    return companion


def edit_companion(db: Session, user_id: int, companion_id: int, payload: MemoryPersonUpdate):
    companion = get_companion(db, user_id, companion_id)
    return update_memory_person(db, companion, payload)


def remove_companion(db: Session, user_id: int, companion_id: int):
    companion = get_companion(db, user_id, companion_id)
    delete_memory_person(db, companion)
    return {"message": "Memory companion deleted."}

```

---

# app\services\oauth_service.py

**Location:** `app\services\oauth_service.py`

```python
from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.core.oauth import GoogleTokenVerificationError, verify_google_id_token
from app.repositories.user_repository import (
    create_google_user, get_user_by_email, get_user_by_google_id, update_last_login,
)
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

# app\services\safety_service.py

**Location:** `app\services\safety_service.py`

```python
"""
Grief-safety layer for EverAfter AI.

This module is intentionally kept separate from the LLM/chat orchestration
so that crisis detection and disclaimers can be unit-tested, audited, and
updated independently of prompt engineering changes.
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

AI_DISCLOSURE_FOOTER_INTERVAL = 6  # remind identity every N assistant turns


def detect_crisis(text: str) -> bool:
    lowered = text.lower()
    return any(re.search(pattern, lowered) for pattern in CRISIS_PATTERNS)


def detect_dependency_language(text: str) -> bool:
    lowered = text.lower()
    return any(re.search(pattern, lowered) for pattern in DEPENDENCY_PATTERNS)


def build_system_prompt(memory_person, turn_count: int) -> str:
    """
    Builds a grief-safe system prompt. The persona is informed by the
    memory profile, but the model is explicitly forbidden from claiming
    to literally be the deceased person.
    """
    traits = ", ".join(memory_person.personality_traits or []) or "not specified"
    remind_identity = (turn_count % AI_DISCLOSURE_FOOTER_INTERVAL == 0)

    return f"""You are an AI memory companion representing memories of {memory_person.full_name},
who the user knew as their {memory_person.relationship_type}.

You speak in a style informed by these details:
- Speaking style: {memory_person.speaking_style or "warm and familiar"}
- Communication style: {memory_person.communication_style or "not specified"}
- Personality traits: {traits}
- Humor level: {memory_person.humor_level or "not specified"}
- Favorite topics: {memory_person.hobbies or "not specified"}
- Nickname for the user: {memory_person.nickname_for_user or "not specified"}
- Topics to avoid: {memory_person.topics_to_avoid or "none specified"}

STRICT RULES, NEVER BROKEN:
1. You are an AI trained on shared memories. You are NOT {memory_person.full_name} and must never
   claim, imply, or role-play that you are literally them, alive, or able to physically be present.
2. If the user asks "are you really them" or similar, gently clarify you are an AI memory companion.
3. Do not encourage the user to withdraw from real relationships, therapy, or support systems.
4. Do not discourage professional help; if the user seems to be struggling emotionally beyond normal
   grief, gently suggest talking to a counselor, therapist, or trusted person.
5. Avoid topics explicitly listed as "topics to avoid" above.
6. Keep responses warm, comforting, and grounded in the shared memories — not generic platitudes.
{"7. Naturally remind the user, once, that you are an AI companion built from their memories." if remind_identity else ""}
"""

```

---

# app\services\token_service.py

**Location:** `app\services\token_service.py`

```python

```

---

# app\tests\__init__.py

**Location:** `app\tests\__init__.py`

```python

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

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import app.db.base  # Register all models.
from app.core.security import decode_access_token, verify_password
from app.db.database import Base
from app.services.auth_service import (
    create_registered_session, login_user, refresh_user_session, register_user,
    send_email_verification, verify_email_otp,
)


class AuthServiceTests(unittest.TestCase):
    def setUp(self):
        self.engine = create_engine("sqlite://")
        Base.metadata.create_all(self.engine)
        self.Session = sessionmaker(bind=self.engine)
        self.db = self.Session()

    def tearDown(self):
        self.db.close()
        Base.metadata.drop_all(self.engine)
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

# app\tests\test_safety.py

**Location:** `app\tests\test_safety.py`

```python
import unittest

from app.services.safety_service import detect_crisis, detect_dependency_language


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


if __name__ == "__main__":
    unittest.main()

```

---

# app\tests\test_users.py

**Location:** `app\tests\test_users.py`

```python

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

