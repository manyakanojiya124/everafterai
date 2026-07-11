# EverAfter AI Backend

====================================================================================================
FILE: main.py
====================================================================================================

```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.v1.auth import router as auth_router
from app.api.v1.users import router as users_router
from app.core.config import settings
import app.db.base  # Ensure all SQLAlchemy models are registered before requests.

app = FastAPI(
    title="EverAfter AI"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in settings.CORS_ORIGINS.split(",") if origin.strip()],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Authorization", "Content-Type"],
)

app.include_router(auth_router)
app.include_router(users_router)


@app.get("/")
def home():
    return {
        "message": "EverAfter AI Running"
    }

```

====================================================================================================
FILE: api\v1\auth.py
====================================================================================================

```python
from typing import Annotated

from fastapi import APIRouter, Cookie, Depends, HTTPException, Response, status
from sqlalchemy.orm import Session

from app.core.config import settings
from app.db.database import get_db
from app.schemas.auth import (
    AuthResponse,
    LoginRequest,
    MessageResponse,
    RegistrationResponse,
    ResendVerificationRequest,
    VerifyEmailRequest,
)
from app.schemas.user import UserCreate
from app.services.auth_service import (
    login_user,
    logout_user,
    refresh_user_session,
    register_user,
    resend_email_verification,
    send_email_verification,
    verify_email_otp,
)

router = APIRouter(prefix="/api/v1/auth", tags=["Authentication"])
REFRESH_COOKIE_NAME = "everafter_refresh_token"


def _set_refresh_cookie(response: Response, token: str) -> None:
    response.set_cookie(
        key=REFRESH_COOKIE_NAME,
        value=token,
        httponly=True,
        secure=settings.REFRESH_COOKIE_SECURE,
        samesite="lax",
        max_age=settings.REFRESH_TOKEN_EXPIRE_DAYS * 24 * 60 * 60,
        path="/api/v1/auth",
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
    response: Response,
    db: Annotated[Session, Depends(get_db)],
    refresh_token: Annotated[str | None, Cookie(alias=REFRESH_COOKIE_NAME)] = None,
):
    if not refresh_token:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid refresh token")
    payload, new_refresh_token = refresh_user_session(db, refresh_token)
    _set_refresh_cookie(response, new_refresh_token)
    return payload


@router.post("/logout", response_model=MessageResponse)
def logout(
    response: Response,
    db: Annotated[Session, Depends(get_db)],
    refresh_token: Annotated[str | None, Cookie(alias=REFRESH_COOKIE_NAME)] = None,
):
    logout_user(db, refresh_token)
    response.delete_cookie(key=REFRESH_COOKIE_NAME, path="/api/v1/auth")
    return {"message": "Logged out"}

```

====================================================================================================
FILE: api\v1\users.py
====================================================================================================

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

====================================================================================================
FILE: core\config.py
====================================================================================================

```python
from pydantic_settings import BaseSettings, SettingsConfigDict
from pathlib import Path


class Settings(BaseSettings):
    DATABASE_URL: str

    SECRET_KEY: str

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

    model_config = SettingsConfigDict(
        env_file=Path(__file__).resolve().parents[2] / ".env",
        extra="ignore"
    )


settings = Settings()

```

====================================================================================================
FILE: core\jwt.py
====================================================================================================

```python

```

====================================================================================================
FILE: core\oauth.py
====================================================================================================

```python

```

====================================================================================================
FILE: core\security.py
====================================================================================================

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

====================================================================================================
FILE: db\__init__.py
====================================================================================================

```python
"""Database package."""

```

====================================================================================================
FILE: db\base.py
====================================================================================================

```python
from app.db.database import Base
from app.models import EmailVerificationToken, PasswordResetToken, RefreshToken, User


```

====================================================================================================
FILE: db\database.py
====================================================================================================

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

====================================================================================================
FILE: db\session.py
====================================================================================================

```python

```

====================================================================================================
FILE: dependecies\auth.py
====================================================================================================

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

====================================================================================================
FILE: dependecies\database.py
====================================================================================================

```python

```

====================================================================================================
FILE: expectations\auth.py
====================================================================================================

```python

```

====================================================================================================
FILE: middleware\auth_middleware.py
====================================================================================================

```python

```

====================================================================================================
FILE: middleware\logging.py
====================================================================================================

```python

```

====================================================================================================
FILE: models\__init__.py
====================================================================================================

```python
from app.models.email_verification import EmailVerificationToken
from app.models.password_reset import PasswordResetToken
from app.models.refresh_token import RefreshToken
from app.models.user import User

__all__ = ["EmailVerificationToken", "PasswordResetToken", "RefreshToken", "User"]

```

====================================================================================================
FILE: models\email_verification.py
====================================================================================================

```python
from sqlalchemy import (
    Boolean,
    Column,
    DateTime,
    ForeignKey,
    Integer,
    String,
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class EmailVerificationToken(Base):
    __tablename__ = "email_verification_tokens"

    id = Column(Integer, primary_key=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False
    )

    token = Column(String(255), unique=True, nullable=False)

    used = Column(Boolean, default=False, server_default="false", nullable=False)

    expires_at = Column(DateTime(timezone=True), nullable=False)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    user = relationship(
        "User",
        back_populates="email_tokens"
    )

```

====================================================================================================
FILE: models\password_reset.py
====================================================================================================

```python
from sqlalchemy import (
    Boolean,
    Column,
    DateTime,
    ForeignKey,
    Integer,
    String,
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class PasswordResetToken(Base):
    __tablename__ = "password_reset_tokens"

    id = Column(Integer, primary_key=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False
    )

    token = Column(String(255), unique=True, nullable=False)

    used = Column(Boolean, default=False, server_default="false", nullable=False)

    expires_at = Column(DateTime(timezone=True), nullable=False)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    user = relationship(
        "User",
        back_populates="password_reset_tokens"
    )

```

====================================================================================================
FILE: models\refresh_token.py
====================================================================================================

```python
from sqlalchemy import (
    Boolean,
    Column,
    DateTime,
    ForeignKey,
    Integer,
    String,
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from app.db.database import Base


class RefreshToken(Base):
    __tablename__ = "refresh_tokens"

    id = Column(Integer, primary_key=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False
    )

    token_hash = Column(String(64), nullable=False, unique=True, index=True)

    expires_at = Column(DateTime(timezone=True), nullable=False)

    revoked = Column(Boolean, default=False, server_default="false", nullable=False)

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    user = relationship(
        "User",
        back_populates="refresh_tokens"
    )

```

====================================================================================================
FILE: models\user.py
====================================================================================================

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

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )

    updated_at = Column(
        DateTime(timezone=True),
        server_default=func.now(),
        onupdate=func.now()
    )

    refresh_tokens = relationship(
        "RefreshToken",
        back_populates="user",
        cascade="all, delete-orphan"
    )

    email_tokens = relationship(
        "EmailVerificationToken",
        back_populates="user",
        cascade="all, delete-orphan"
    )

    password_reset_tokens = relationship(
        "PasswordResetToken",
        back_populates="user",
        cascade="all, delete-orphan"
    )

    @property
    def full_name(self) -> str:
        return f"{self.first_name} {self.last_name}".strip()

```

====================================================================================================
FILE: repositories\auth_repository.py
====================================================================================================

```python

```

====================================================================================================
FILE: repositories\email_verification_repository.py
====================================================================================================

```python
from datetime import datetime

from sqlalchemy.orm import Session

from app.models import EmailVerificationToken


def replace_email_verification_token(
    db: Session, *, user_id: int, token_hash: str, expires_at: datetime
) -> EmailVerificationToken:
    (
        db.query(EmailVerificationToken)
        .filter(EmailVerificationToken.user_id == user_id, EmailVerificationToken.used.is_(False))
        .update({EmailVerificationToken.used: True}, synchronize_session=False)
    )
    token = EmailVerificationToken(user_id=user_id, token=token_hash, expires_at=expires_at)
    db.add(token)
    return token


def get_active_email_verification_token(
    db: Session, *, user_id: int, token_hash: str
) -> EmailVerificationToken | None:
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

====================================================================================================
FILE: repositories\token_repository.py
====================================================================================================

```python
from datetime import datetime

from sqlalchemy.orm import Session

from app.models import RefreshToken


def create_refresh_token(db: Session, *, user_id: int, token_hash: str, expires_at: datetime) -> RefreshToken:
    refresh_token = RefreshToken(user_id=user_id, token_hash=token_hash, expires_at=expires_at)
    db.add(refresh_token)
    return refresh_token


def get_active_refresh_token(db: Session, token_hash: str) -> RefreshToken | None:
    return (
        db.query(RefreshToken)
        .filter(RefreshToken.token_hash == token_hash, RefreshToken.revoked.is_(False))
        .first()
    )


def revoke_refresh_token(refresh_token: RefreshToken) -> None:
    refresh_token.revoked = True

```

====================================================================================================
FILE: repositories\user_repository.py
====================================================================================================

```python
from sqlalchemy.orm import Session

from app.models import User


def get_user_by_email(db: Session, email: str) -> User | None:
    return (
        db.query(User)
        .filter(User.email == email)
        .first()
    )


def get_user_by_id(db: Session, user_id: int) -> User | None:
    return (
        db.query(User)
        .filter(User.id == user_id)
        .first()
    )


def create_user(
    db: Session,
    first_name: str,
    last_name: str,
    email: str,
    password_hash: str,
) -> User:

    user = User(
        first_name=first_name,
        last_name=last_name,
        email=email,
        password_hash=password_hash,
        provider="email",
        is_active=True,
        is_verified=False,
    )

    db.add(user)
    return user


def update_last_login(
    db: Session,
    user: User,
):

    from datetime import datetime, timezone

    user.last_login = datetime.now(timezone.utc)

    return user

```

====================================================================================================
FILE: schemas\auth.py
====================================================================================================

```python
from pydantic import BaseModel, EmailStr, Field

from app.schemas.user import UserResponse


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

====================================================================================================
FILE: schemas\token.py
====================================================================================================

```python

```

====================================================================================================
FILE: schemas\user.py
====================================================================================================

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

    model_config = {
        "from_attributes": True
    }

```

====================================================================================================
FILE: services\auth_service.py
====================================================================================================

```python
from datetime import datetime, timedelta, timezone
from hashlib import sha256
import secrets

from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.core.config import settings
from app.core.security import (
    create_access_token,
    create_refresh_token,
    hash_password,
    hash_refresh_token,
    verify_password,
)
from app.repositories.token_repository import (
    create_refresh_token as create_stored_refresh_token,
    get_active_refresh_token,
    revoke_refresh_token,
)
from app.repositories.email_verification_repository import (
    get_active_email_verification_token,
    replace_email_verification_token,
)
from app.repositories.user_repository import (
    create_user,
    get_user_by_email,
    get_user_by_id,
    update_last_login,
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
        db,
        user_id=user.id,
        token_hash=hash_refresh_token(raw_refresh_token),
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
        db,
        user_id=user.id,
        token_hash=token_hash,
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

====================================================================================================
FILE: services\email_service.py
====================================================================================================

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

====================================================================================================
FILE: services\oauth_service.py
====================================================================================================

```python

```

====================================================================================================
FILE: services\token_service.py
====================================================================================================

```python

```

====================================================================================================
FILE: tests\test_auth.py
====================================================================================================

```python
import os
import unittest
from unittest.mock import patch

os.environ.setdefault("DATABASE_URL", "sqlite://")
os.environ.setdefault("SECRET_KEY", "test-secret-key")
os.environ.setdefault("ALGORITHM", "HS256")
os.environ.setdefault("ACCESS_TOKEN_EXPIRE_MINUTES", "30")

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

import app.db.base  # Register all models.
from app.core.security import decode_access_token, verify_password
from app.db.database import Base
from app.services.auth_service import (
    create_registered_session,
    login_user,
    refresh_user_session,
    register_user,
    send_email_verification,
    verify_email_otp,
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

====================================================================================================
FILE: tests\test_users.py
====================================================================================================

```python

```

====================================================================================================
FILE: utils\helpers.py
====================================================================================================

```python

```

====================================================================================================
FILE: utils\validators.py
====================================================================================================

```python

```

