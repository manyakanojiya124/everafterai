# EverAfter AI — Frontend

A calm, private space for preserving and continuing meaningful memories.
Built with Next.js 16 (App Router), React 19, TanStack Query, and Tailwind v4,
wired end‑to‑end to the EverAfter AI FastAPI backend described in
`openapi.json`.

This is a full rebuild of the original scaffold: every screen is wired to a
real API call (no mock data, no client-only stubs), and the UI follows the
"Quiet Blush" design system brief (warm rose/ivory palette, Fraunces + Inter
type, the "presence ring" motif, crisis-safe chat states).

## 1. Requirements

- Node.js 20+ (tested on Node 22)
- A running instance of the EverAfter AI backend (FastAPI) — the one whose
  OpenAPI schema this app was built against

## 2. Setup

```bash
npm install
cp .env.example .env.local
```

Edit `.env.local`:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api/v1   # your backend's base URL
NEXT_PUBLIC_GOOGLE_CLIENT_ID=                            # optional, enables "Continue with Google"
```

If `NEXT_PUBLIC_GOOGLE_CLIENT_ID` is left blank, the Google sign-in button
simply doesn't render — email/password auth works either way.

Run it:

```bash
npm run dev       # http://localhost:3000
npm run build && npm run start   # production build
```

## 3. What's wired up

Every screen calls the real backend — nothing here is mocked:

- **Auth** — register → OTP email verification (with resend + cooldown) →
  login (email/password or Google One Tap) → silent refresh-on-401 → logout.
  Access token lives in `sessionStorage`; the refresh token is the backend's
  own httpOnly cookie (the browser handles it automatically via
  `credentials: "include"`).
- **Memory People (companions)** — list, create (4-step wizard), read,
  update (edit sheet), delete.
- **Memory Vault** — list/filter by type, multipart upload (one or many
  files at once), delete, and a "set as profile photo" action that PATCHes
  `profile_picture` to a previously uploaded photo's path.
- **Chat** — history, send, clear. Assistant replies flagged
  `is_safety_response` render as a distinct, calm crisis-support card instead
  of a normal bubble; resources returned by the live `chat` response render
  as tappable `tel:`/link rows.

See `src/lib/api.ts` for the full client and `src/lib/types.ts` for types
mirroring the OpenAPI schema — keep both in sync if the backend contract
changes.

## 4. Notes & assumptions worth knowing about

- **Memory Vault filters** (`All / Photos / Voice / Videos / Letters`) send
  `?file_type=photo|voice|video|letter` to `GET /memory-people/{id}/files`.
  The OpenAPI spec doesn't enumerate the exact values the backend assigns to
  `file_type`, so these are a best guess at the obvious convention. If your
  backend uses different strings, update `FILTERS` in
  `src/components/vault/memory-vault-sheet.tsx` — "All" always works
  regardless.
- **Profile photos** aren't a separate upload endpoint in the API — a
  companion's `profile_picture` is just a string path. So the flow is:
  upload a photo to the Memory Vault, then hit the star icon on it to PATCH
  it onto the companion. You can also just paste an image URL directly in
  the edit form.
- **Fonts** are loaded via `<link>` tags in `src/app/layout.tsx` (Fraunces +
  Inter from Google Fonts) rather than `next/font/google`, so the build
  never needs network access to fonts.gstatic.com — useful in sandboxed CI.
  There's a full system-font fallback stack either way.
- **Sidebar rows** intentionally don't show a "last message" preview — the
  API has no lightweight endpoint for that, and this app avoids fabricating
  data. Add one (e.g. a `last_message` field on `GET /memory-people`) if you
  want that.
- A small, always-visible "AI companion" badge plus a quiet disclosure line
  ("not a replacement for … or professional support") appear on every chat —
  this is deliberate, matches the brief's safety section, and shouldn't be
  removed.

## 5. Project structure

```
src/
  app/                     routes (App Router)
    (app)/                 authenticated shell — companions, profile
    login/ register/ verify-email/   public auth pages
  components/
    ui/                    design-system primitives (Button, Field, Sheet…)
    auth/ marketing/       auth-card, Google button, landing page
    layout/                Sidebar + responsive two-pane AppShell
    wizard/                4-step companion creation form (+ schema)
    companions/            edit-profile sheet
    chat/                  header, bubbles, message list, composer
    vault/                 Memory Vault sheet
  hooks/                   TanStack Query hooks per resource
  lib/                     api.ts (client), types.ts, utils.ts
  providers/               QueryProvider, AuthProvider
```

## 6. Design system

All tokens live in `src/app/globals.css` under `@theme inline` (Tailwind v4):
`blush`, `surface`, `sunken`, `primary`, `primary-hover`, `accent`, `ink`,
`ink-muted`, `line`, `success`, `danger`, `crisis`, `crisis-ink` — use them as
regular Tailwind utilities, e.g. `bg-primary`, `text-ink-muted`,
`border-line`. The one recurring signature motif — the breathing
"presence ring" around a memory person's avatar — is the `.presence-ring`
class in the same file; it respects `prefers-reduced-motion` automatically,
as does the typing indicator and loading ripple.
