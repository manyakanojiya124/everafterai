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
