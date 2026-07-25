import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

import app.db.base

from app.core.config import settings

from app.api.v1.auth import router as auth_router
from app.api.v1.users import router as users_router
from app.api.v1.memory_people import router as memory_people_router
from app.api.v1.memory_files import router as memory_files_router
from app.api.v1.chat import router as chat_router
from app.middleware.logging import RequestLoggingMiddleware
from app.api.v1.voice import reference_router as voice_reference_router
from app.api.v1.voice import message_voice_router

os.makedirs(settings.UPLOAD_DIR, exist_ok=True)

app = FastAPI(title="EverAfter AI", version="1.1.0")

# ==========================================================
# Middleware
# ==========================================================

app.add_middleware(RequestLoggingMiddleware)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[o.strip() for o in settings.CORS_ORIGINS.split(",") if o.strip()],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ==========================================================
# Static Files
# ==========================================================

app.mount("/uploads", StaticFiles(directory=settings.UPLOAD_DIR), name="uploads")

# ==========================================================
# API Routes
# ==========================================================

app.include_router(auth_router)
app.include_router(users_router)
app.include_router(memory_people_router)
app.include_router(memory_files_router)
app.include_router(chat_router)
app.include_router(voice_reference_router)
app.include_router(message_voice_router)
# ==========================================================
# Root & Health
# ==========================================================

@app.get("/")
def home():
    return {"status": "running", "application": "EverAfter AI", "version": "1.1.0", "message": "Backend is running successfully"}


@app.get("/health")
def health():
    return {"status": "healthy"}
