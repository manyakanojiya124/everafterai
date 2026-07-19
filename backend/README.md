# EverAfter AI — Backend

FastAPI backend for EverAfter AI, a grief-support memory companion app.

## What's implemented in this slice

- **Auth**: register + email OTP verification, login, refresh-token rotation
  (httpOnly cookie), Google OAuth, logout.
- **Memory People**: full CRUD for the people users create memory companions for.
- **Memory Vault (new)**: file upload/list/get/delete per memory person, with
  mime-type validation, size limits, and plain-text extraction on upload.
- **AI Chat (new)**: chat endpoint per memory person that:
  - builds a grief-safe system prompt from the person's stored profile,
  - **never** lets the model claim to literally be the deceased person,
  - runs every incoming message through crisis-language detection and
    returns crisis resources (988, emergency services) instead of an AI
    reply if triggered,
  - detects unhealthy-dependency language and appends a gentle "I'm an AI,
    not them" reminder,
  - calls any OpenAI-compatible chat completions endpoint (swap
    `OPENAI_BASE_URL` for Azure OpenAI / a local vLLM server / etc).

## Not in this slice (intentionally — see chat notes)

Voice cloning, real-time voice streaming, vector-DB semantic search/RAG over
the Memory Vault, background workers, and the training pipeline described in
the full product vision are substantial standalone subsystems. Wiring the
Memory Vault's `extracted_text` into a vector store (FAISS/ChromaDB) for real
RAG retrieval is the natural next step once you're ready for it.

## Setup

```bash
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env        # fill in DATABASE_URL, SECRET_KEY, etc.
alembic upgrade head
uvicorn app.main:app --reload
```

API docs: http://localhost:8000/docs

## Run tests

```bash
python -m unittest discover app/tests
```

## New API surface

| Method | Path | Purpose |
|---|---|---|
| POST | `/api/v1/memory-people/{id}/files` | Upload a memory file (multipart) |
| GET | `/api/v1/memory-people/{id}/files` | List files (optional `?file_type=`) |
| GET | `/api/v1/memory-people/{id}/files/{file_id}` | Get one file's metadata |
| DELETE | `/api/v1/memory-people/{id}/files/{file_id}` | Delete a file |
| POST | `/api/v1/memory-people/{id}/chat` | Send a message, get an AI reply |
| GET | `/api/v1/memory-people/{id}/chat` | Full chat history |
| DELETE | `/api/v1/memory-people/{id}/chat` | Clear a conversation |

All routes require `Authorization: Bearer <access_token>`.
