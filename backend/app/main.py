from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

import app.db.base

from app.core.config import settings

from app.api.v1.auth import router as auth_router
from app.api.v1.users import router as users_router
from app.api.v1.memory_people import router as memory_people_router


app = FastAPI(
    title="EverAfter AI",
    version="1.0.0",
)


# ==========================================================
# Static Files
# ==========================================================

app.mount(
    "/uploads",
    StaticFiles(directory="uploads"),
    name="uploads",
)


# ==========================================================
# CORS
# ==========================================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        origin.strip()
        for origin in settings.CORS_ORIGINS.split(",")
        if origin.strip()
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ==========================================================
# API Routes
# ==========================================================

app.include_router(auth_router)

app.include_router(users_router)

app.include_router(memory_people_router)


# ==========================================================
# Root
# ==========================================================

@app.get("/")
def home():
    return {
        "status": "running",
        "application": "EverAfter AI",
        "version": "1.0.0",
        "message": "Backend is running successfully 🚀",
    }


# ==========================================================
# Health Check
# ==========================================================

@app.get("/health")
def health():
    return {
        "status": "healthy",
    }