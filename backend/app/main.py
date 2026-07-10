from fastapi import FastAPI

from app.api.v1.auth import router as auth_router

app = FastAPI(
    title="EverAfter AI"
)

app.include_router(auth_router)


@app.get("/")
def home():
    return {
        "message": "EverAfter AI Running"
    }