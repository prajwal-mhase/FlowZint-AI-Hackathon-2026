# Docker

This folder is reserved for container build files used by EchoTwin AI.

## Hackathon Purpose

Docker makes the project easier for judges, teammates, and deployment platforms to reproduce. The goal is to keep the local development environment close to production without forcing every reviewer to install PostgreSQL, Redis, and ChromaDB manually.

## Included Files

```text
backend.Dockerfile    Planned FastAPI backend image
frontend.Dockerfile   Planned Next.js frontend image
```

## Planned Local Stack

The main Compose file lives in `infra/docker-compose.yml` and currently defines:

- PostgreSQL
- Redis
- ChromaDB

Future phases will add application containers after the backend and frontend are fully implemented.

## Production Recommendation

For the hackathon submission, use managed platforms where possible:

- Vercel for frontend
- Render or Railway for backend
- Supabase for PostgreSQL and storage
- Upstash for Redis

Use Docker primarily for local reproducibility and backend deployment packaging.

