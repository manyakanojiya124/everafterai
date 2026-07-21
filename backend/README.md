# EverAfter AI — Backend

FastAPI backend for EverAfter AI, a grief-support memory companion app.

## What's implemented

- **Auth**: register + email OTP verification, login, refresh-token rotation
  (httpOnly cookie), Google OAuth, logout.
- **Memory People**: full CRUD for companions, plus **profile picture
  upload/replace/remove**.
- **Memory Vault**: file upload/list/get/delete per memory person.
- **RAG (new this slice)**: `.txt` and `.json` uploads are chunked, embedded
  locally (free, no API key), and stored in Postgres via `pgvector`. A
  companion's own profile narrative (biography, bond story, special
  memories, etc.) is embedded automatically too. Every chat message
  retrieves the most relevant chunks first and injects them into the LLM's
  system prompt — the AI answers from what was actually uploaded/written,
  not from generic guesses, and the API tells you which sources it used.
- **AI Chat**: crisis-language detection (returns 988/emergency resources
  instead of an AI reply), dependency-language detection (adds a gentle
  "I'm an AI, not them" reminder), and a system prompt that hard-forbids
  the model from claiming to literally be the deceased person. LLM calls
  go through **OpenRouter's free tier** by default — no billing required.

## How the RAG pipeline works

```
Upload .txt / .json  ──┐
                        ├─▶ extract text ─▶ chunk (≈1000 chars, 150 overlap)
Profile fields ─────────┘         │
                                   ▼
                     local embedding model (MiniLM, 384-dim, free)
                                   │
                                   ▼
                    memory_chunks table (Postgres + pgvector)
                                   │
      user sends a chat message ──┤
                                   ▼
          embed the question ─▶ pgvector cosine similarity search (top 5)
                                   │
                                   ▼
        top chunks injected into the chat system prompt ─▶ OpenRouter LLM
                                   │
                                   ▼
              reply + sources_used returned to the client
```

**Only `.txt` and `application/json` uploads are embedded right now.**
Photos, audio, video, and PDFs still upload and store fine (Memory Vault
works for them), they just aren't turned into chat context yet —
transcription (audio) and OCR/PDF-text-extraction (documents) are the
natural follow-up slices, using this exact same `ingestion_service`
pipeline once there's text to feed it.

## Setup

Requires **Postgres with the `pgvector` extension**. Easiest local option:

```bash
docker run -d --name everafter-db -e POSTGRES_USER=everafter \
  -e POSTGRES_PASSWORD=everafter -e POSTGRES_DB=everafter \
  -p 5432:5432 pgvector/pgvector:pg16
```

Then:

```bash
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# fill in DATABASE_URL, SECRET_KEY, OPENAI_API_KEY (OpenRouter key)
alembic upgrade head
uvicorn app.main:app --reload
```

First chat/upload will download the local embedding model (~90MB, once).

API docs: http://localhost:8000/docs

## Run tests

```bash
python -m unittest discover app/tests -v
```

All RAG-related tests (`test_chunking`, `test_json_flatten`,
`test_ingestion`, `test_retrieval`, `test_chat_service`) mock the embedding
model and the LLM, so the full suite runs without a live Postgres, without
downloading the embedding model, and without an OpenRouter key.

## Full API surface

| Method | Path | Purpose |
|---|---|---|
| POST | `/api/v1/auth/register` \| `/login` \| `/verify-email` \| `/resend-verification` \| `/refresh` \| `/google` \| `/logout` | Auth |
| GET | `/api/v1/users/me` | Current user |
| POST/GET | `/api/v1/memory-people` | Create / list companions |
| GET/PATCH/DELETE | `/api/v1/memory-people/{id}` | Read / update / delete a companion |
| **POST/DELETE** | **`/api/v1/memory-people/{id}/profile-picture`** | **Upload / remove a companion's profile picture** |
| POST/GET | `/api/v1/memory-people/{id}/files` | Upload a memory file / list files |
| GET/DELETE | `/api/v1/memory-people/{id}/files/{file_id}` | Get / delete one file |
| POST/GET/DELETE | `/api/v1/memory-people/{id}/chat` | Send a message (RAG-grounded reply) / history / clear |

All routes except auth require `Authorization: Bearer <access_token>`.

## What's still not in here

Voice cloning, real-time voice, transcription/OCR for audio/PDF Memory
Vault items, background job workers, an admin dashboard, and the frontend
are each their own slice. This RAG pipeline is written so audio/PDF
ingestion is a small addition later (extract text → call the same
`ingest_file_text()`), not a rewrite.
