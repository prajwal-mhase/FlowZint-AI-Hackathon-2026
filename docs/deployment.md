# Deployment

This guide documents the recommended deployment approach for EchoTwin AI.

---

## Phase 1 (current)

Phase 1 can be pushed to GitHub and deployed as a frontend preview. The most reliable option is **Vercel**.

### Vercel settings

- Framework preset: Next.js
- Root directory: `frontend`
- Install command: `npm install`
- Build command: `npm run build`

---

## GitHub push

```powershell
git add .
git commit -m "chore: initial echotwin ai scaffold"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Import the repository into Vercel afterward.

---

## Full MVP (planned)

| Component | Recommended host |
| --- | --- |
| Frontend | Vercel |
| Backend | Render or Railway |
| PostgreSQL | Supabase or Neon |
| Redis | Upstash |
| Vector database | ChromaDB (or Supabase pgvector) |
| File storage | Supabase Storage |
| LLM | Gemini or an OpenAI-compatible API |

---

## Environment variables (planned)

```text
FRONTEND_URL
BACKEND_URL
DATABASE_URL
REDIS_URL
CHROMA_HOST
CHROMA_PORT
JWT_SECRET_KEY
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
SUPABASE_STORAGE_BUCKET
GEMINI_API_KEY
OPENAI_API_KEY
```

---

## Judge demo recommendation

Deploy the frontend first so judges can access a polished URL quickly. Then connect backend services as the implementation phases complete.

