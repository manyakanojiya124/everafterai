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
BRAND_COLOR = "#E08A2A"      # amber-deep, matches the product palette
BRAND_BG = "#FCB94D"         # marigold
INK = "#2B1B1A"              # plum / body text


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
  <body style="margin:0;padding:0;background-color:#F4EFE6;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F4EFE6;padding:40px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 10px rgba(43,27,26,0.08);">

            <tr>
              <td style="background-color:{BRAND_BG};padding:32px 40px;text-align:center;">
                <span style="font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:26px;color:#ffffff;">ever</span><span style="font-size:22px;font-weight:600;color:{INK};letter-spacing:.5px;">after</span>
              </td>
            </tr>

            <tr>
              <td style="padding:40px 40px 8px;text-align:center;">
                <p style="margin:0;font-size:13px;letter-spacing:.14em;text-transform:uppercase;color:#9a8a86;">Verify your email</p>
                <h1 style="margin:12px 0 0;font-size:22px;color:{INK};font-weight:600;">Enter this code to continue</h1>
              </td>
            </tr>

            <tr>
              <td style="padding:28px 40px;text-align:center;">
                <div style="display:inline-block;padding:18px 28px;background-color:#FBF3E5;border:1px solid #F0DDBB;border-radius:10px;font-size:32px;font-weight:700;letter-spacing:8px;color:{BRAND_COLOR};">
                  {otp_display}
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:0 40px 36px;text-align:center;">
                <p style="margin:0;font-size:14px;line-height:1.6;color:#6b5a56;">
                  This code expires in <strong>{expiry} minutes</strong>.
                  If you didn't request it, you can safely ignore this email —
                  your account is still secure.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 40px;background-color:#FAF6EF;text-align:center;border-top:1px solid #EFE6D8;">
                <p style="margin:0;font-size:12px;color:#9a8a86;">
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