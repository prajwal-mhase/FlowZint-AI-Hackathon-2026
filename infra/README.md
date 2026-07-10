# Infrastructure

Infrastructure configuration for EchoTwin AI.

## Purpose

This project is designed so local services can run via Docker Compose while cloud hosting can use managed equivalents.

## Local infrastructure

Start the local stack from the repository root:

```powershell
docker compose -f infra/docker-compose.yml up -d
```

Stop services:

```powershell
docker compose -f infra/docker-compose.yml down
```

Local stack includes:

- PostgreSQL (structured application data)
- Redis (caching, rate limiting, background coordination)
- ChromaDB (vector search over knowledge chunks)

## Local → cloud mapping (recommended)

| Local service | Cloud option |
| --- | --- |
| PostgreSQL | Supabase or Neon |
| Redis | Upstash |
| ChromaDB | Render, Railway, or a pgvector replacement |
| File storage | Supabase Storage |
| Backend runtime | Render or Railway |
| Frontend runtime | Vercel |

## GitHub notes

Never commit provider secrets, service-role keys, database dumps, local volumes, or generated infrastructure state.

