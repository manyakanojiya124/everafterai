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
