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
