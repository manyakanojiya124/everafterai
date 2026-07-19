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
