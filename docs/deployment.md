# Deployment Guide

This guide explains the recommended hackathon deployment path for EchoTwin AI.

## Current Phase 1 Deployment

The current repository can be pushed to GitHub and deployed as a frontend preview. The most reliable live deployment target is Vercel.

### Vercel Settings

```text
Framework Preset: Next.js
Root Directory: frontend
Install Command: npm install
Build Command: npm run build
Output Directory: .next
```

If Vercel builds from the monorepo root, use:

```text
Install Command: npm install
Build Command: npm --workspace frontend run build
```

## GitHub Push Steps

```powershell
git add .
git commit -m "initial echotwin ai scaffold"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Then import the GitHub repository into Vercel.

## Full MVP Deployment Plan

| Component | Recommended Host |
| --- | --- |
| Frontend | Vercel |
| Backend | Render or Railway |
| PostgreSQL | Supabase or Neon |
| Redis | Upstash |
| Vector database | ChromaDB on Render/Railway, or Supabase pgvector |
| File storage | Supabase Storage |
| LLM | Gemini or OpenAI-compatible API |

## Environment Variables

Production deployments will need:

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

## Judge Demo Recommendation

For the hackathon demo, deploy the frontend first so judges can open a polished URL immediately. Then connect the backend and AI services as the implementation phases are completed.

