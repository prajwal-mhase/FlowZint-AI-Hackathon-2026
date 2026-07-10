# Docker

Container build files for EchoTwin AI.

## Purpose

Docker helps judges, teammates, and deployment platforms reproduce the environment consistently—especially for services like PostgreSQL, Redis, and ChromaDB.

## Included Dockerfiles

- `docker/backend.Dockerfile` (planned FastAPI backend image)
- `docker/frontend.Dockerfile` (planned Next.js frontend image)

## Local stack

The primary local stack is defined in `infra/docker-compose.yml`.

Currently it includes:

- PostgreSQL
- Redis
- ChromaDB

Application containers are planned for later phases.

## Production recommendation

For the hackathon submission, prefer managed platforms when possible:

- Vercel for frontend
- Render or Railway for backend
- Supabase for PostgreSQL and storage
- Upstash for Redis

Docker is primarily for local reproducibility and packaging.

