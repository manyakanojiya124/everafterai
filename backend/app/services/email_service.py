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

# NOTE ON COLOR SOURCE
# ---------------------------------------------------------------------
# These are pulled to match the Tailwind tokens already used across the
# app (bg-blush, text-ink, text-ink-muted, border-line, bg-surface,
# text-primary, the from-accent/to-primary badge gradient) rather than
# the previous amber/marigold pair, which didn't match anything else in
# the product. If your tailwind.config defines different hex values for
# these tokens, swap them in below — the email intentionally uses the
# same *names* so it's a one-line change per color, not a redesign.
# ---------------------------------------------------------------------
BLUSH_BG = "#FBEFEA"      # page background — soft warm cream/pink
SURFACE = "#FFFFFF"       # card background
INK = "#2B1B1A"           # primary text
INK_MUTED = "#8A7570"     # secondary text
LINE = "#EFE1DA"          # hairline borders
PRIMARY = "#C1594A"       # terracotta — buttons, links, code digits
ACCENT = "#E3A857"        # warm gold — logo gradient partner


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
  <body style="margin:0;padding:0;background-color:{BLUSH_BG};font-family:Georgia,'Times New Roman',serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:{BLUSH_BG};padding:40px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="480" cellpadding="0" cellspacing="0" style="background-color:{SURFACE};border-radius:16px;overflow:hidden;border:1px solid {LINE};">

            <!-- Wordmark, set the same way it reads on the site: an
                 italic serif "ever" fused to a plain-weight "after". -->
            <tr>
              <td style="padding:36px 40px 28px;text-align:center;">
                <span style="font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:28px;color:{PRIMARY};">ever</span><span style="font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:24px;font-weight:600;color:{INK};letter-spacing:.2px;">after</span>
              </td>
            </tr>

            <tr>
              <td style="padding:0 40px;">
                <div style="height:1px;background-color:{LINE};"></div>
              </td>
            </tr>

            <tr>
              <td style="padding:32px 40px 8px;text-align:center;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
                <p style="margin:0;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:{INK_MUTED};">Verify your email</p>
                <h1 style="margin:12px 0 0;font-size:21px;color:{INK};font-weight:600;">Enter this code to continue</h1>
              </td>
            </tr>

            <tr>
              <td style="padding:26px 40px;text-align:center;">
                <div style="display:inline-block;padding:16px 26px;background:linear-gradient(135deg,{ACCENT}1A,{PRIMARY}14);border:1px solid {LINE};border-radius:12px;font-family:Georgia,'Times New Roman',serif;font-size:30px;font-weight:600;letter-spacing:8px;color:{PRIMARY};">
                  {otp_display}
                </div>
              </td>
            </tr>

            <tr>
              <td style="padding:0 40px 8px;text-align:center;font-family:'Segoe UI',Helvetica,Arial,sans-serif;">
                <p style="margin:0;font-size:13px;line-height:1.6;color:{INK_MUTED};">
                  This code expires in <strong style="color:{INK};">{expiry} minutes</strong>.
                  If you didn't request it, you can safely ignore this email —
                  your account is still secure.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:28px 40px 32px;text-align:center;">
                <div style="height:1px;background-color:{LINE};margin-bottom:24px;"></div>
                <p style="margin:0;font-family:'Segoe UI',Helvetica,Arial,sans-serif;font-size:11px;color:{INK_MUTED};">
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