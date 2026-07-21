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
