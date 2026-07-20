"""
Universal OpenRouter Chat Client

Supports any model available through OpenRouter.

Examples:
- anthropic/claude-opus-4.1
- anthropic/claude-sonnet-4
- openai/gpt-5
- google/gemini-2.5-pro
- google/gemini-2.5-flash
- deepseek/deepseek-chat-v3
- qwen/qwen3-235b-a22b
"""

from typing import Any

import httpx
from fastapi import HTTPException, status

from app.core.config import settings


class AIClient:
    def __init__(self) -> None:
        self.client = httpx.Client(
            timeout=httpx.Timeout(120.0),
            headers={
                "Authorization": f"Bearer {settings.LLM_API_KEY}",
                "HTTP-Referer": settings.APP_URL,
                "X-Title": settings.APP_NAME,
                "Content-Type": "application/json",
            },
        )

    def chat(
        self,
        *,
        system_prompt: str,
        history: list[dict[str, Any]],
        user_message: str,
        temperature: float = 0.6,
        max_tokens: int = 1500,
    ) -> str:

        if not settings.LLM_API_KEY:
            raise HTTPException(
                status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                detail="OPENROUTER_API_KEY is missing.",
            )

        messages = [
            {
                "role": "system",
                "content": system_prompt,
            }
        ]

        messages.extend(history)

        messages.append(
            {
                "role": "user",
                "content": user_message,
            }
        )

        try:
            response = self.client.post(
                "https://openrouter.ai/api/v1/chat/completions",
                json={
                    "model": settings.LLM_MODEL,
                    "messages": messages,
                    "temperature": temperature,
                    "max_tokens": max_tokens,
                },
            )

            response.raise_for_status()

            data = response.json()

            return (
                data["choices"][0]["message"]["content"]
                .strip()
            )

        except httpx.HTTPStatusError as exc:
            detail = exc.response.text

            raise HTTPException(
                status_code=status.HTTP_502_BAD_GATEWAY,
                detail=f"OpenRouter Error: {detail}",
            ) from exc

        except Exception as exc:
            raise HTTPException(
                status_code=status.HTTP_502_BAD_GATEWAY,
                detail="Unable to contact OpenRouter.",
            ) from exc


ai_client = AIClient()


def generate_reply(
    system_prompt: str,
    history: list[dict],
    user_message: str,
) -> str:
    return ai_client.chat(
        system_prompt=system_prompt,
        history=history,
        user_message=user_message,
    )