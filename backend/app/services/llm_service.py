"""
Thin wrapper around an OpenAI-compatible chat completions endpoint.
"""

import httpx
from fastapi import HTTPException, status

from app.core.config import settings


def generate_reply(system_prompt: str, history: list[dict], user_message: str) -> str:
    if not settings.OPENAI_API_KEY:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="AI chat is not configured. Add OPENAI_API_KEY to backend/.env.",
        )

    messages = [{"role": "system", "content": system_prompt}]
    messages.extend(history)
    messages.append({"role": "user", "content": user_message})

    try:
        response = httpx.post(
            f"{settings.OPENAI_BASE_URL}/chat/completions",
            headers={
                "Authorization": f"Bearer {settings.OPENAI_API_KEY}",
                "Content-Type": "application/json",
                "HTTP-Referer": "http://localhost:3000",
                "X-Title": "EverAfter AI",
            },
            json={
                "model": settings.OPENAI_MODEL,
                "messages": messages,
                "temperature": 0.7,
                "max_tokens": 500,
            },
            timeout=60,
        )

        print("=" * 100)
        print("STATUS:", response.status_code)
        print("BODY:", response.text)
        print("=" * 100)

        response.raise_for_status()

        data = response.json()
        return data["choices"][0]["message"]["content"].strip()

    except httpx.HTTPStatusError as exc:
        print("=" * 100)
        print("HTTP ERROR:", exc.response.status_code)
        print("BODY:", exc.response.text)
        print("=" * 100)

        raise HTTPException(
            status_code=exc.response.status_code,
            detail=exc.response.text,
        )

    except httpx.RequestError as exc:
        print("=" * 100)
        print("REQUEST ERROR:", repr(exc))
        print("=" * 100)

        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="Could not reach the AI provider.",
        )

    except Exception as exc:
        import traceback
        traceback.print_exc()
        raise