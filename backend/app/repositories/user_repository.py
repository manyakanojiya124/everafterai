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


def get_user_by_google_id(
    db: Session,
    google_id: str,
) -> User | None:
    return (
        db.query(User)
        .filter(User.google_id == google_id)
        .first()
    )


def create_google_user(
    db: Session,
    *,
    first_name: str,
    last_name: str,
    email: str,
    google_id: str,
    profile_picture: str | None,
) -> User:
    user = User(
        first_name=first_name,
        last_name=last_name,
        email=email,
        password_hash=None,
        profile_picture=profile_picture,
        provider="google",
        google_id=google_id,
        is_active=True,
        is_verified=True,
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
