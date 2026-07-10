# Infrastructure

This folder contains infrastructure configuration for EchoTwin AI.

## Hackathon Purpose

Infrastructure should be easy to understand, cheap to run, and realistic enough for a startup-style MVP. The project is designed so local services can run with Docker Compose while cloud hosting can use managed services.

## Current File

```text
docker-compose.yml
```

The Compose stack includes:

- PostgreSQL for structured application data
- Redis for caching, rate limiting, and background coordination
- ChromaDB for vector search over knowledge-base chunks

## Local Infrastructure

From the repository root:

```powershell
docker compose -f infra/docker-compose.yml up -d
```

Stop services:

```powershell
docker compose -f infra/docker-compose.yml down
```

## Recommended Cloud Mapping

| Local Service | Cloud Option |
| --- | --- |
| PostgreSQL | Supabase or Neon |
| Redis | Upstash |
| ChromaDB | Render, Railway, or pgvector replacement |
| File storage | Supabase Storage |
| Backend runtime | Render or Railway |
| Frontend runtime | Vercel |

## GitHub Notes

Never commit provider secrets, service-role keys, database dumps, local volumes, or generated infrastructure state.

