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
