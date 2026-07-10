# EchoTwin AI

Every Conversation Builds a Better Business.

EchoTwin AI is an AI-powered customer intelligence platform for support teams, SaaS companies, and startups. It combines grounded RAG chat with continuous analysis of customer conversations to surface sentiment, churn risk, recurring complaints, documentation gaps, feature requests, and product recommendations.

This repository is organized as a production-minded hackathon monorepo. The implementation is built phase by phase so the system remains understandable and runnable as it grows.

## Current Phase

Phase 1: Architecture and folder structure.

## Monorepo Layout

```text
frontend/      Next.js 15 React application
backend/       FastAPI application and domain services
shared/        Shared API contracts, constants, and schemas
infra/         Infrastructure, deployment, and database assets
docker/        Docker build files and container entrypoints
scripts/       Developer automation scripts
docs/          Architecture and product documentation
tests/         Cross-project test assets
```

## Planned Stack

- Frontend: React 19, Next.js 15, TypeScript, TailwindCSS, shadcn/ui, Framer Motion, React Query, Zustand
- Backend: FastAPI, Python 3.12, SQLAlchemy, Pydantic, Alembic
- Data: PostgreSQL, ChromaDB, Redis
- AI: LangGraph, LangChain, Gemini or OpenAI-compatible LLMs, sentence-transformers embeddings
- Auth: JWT, Google OAuth, RBAC
- Storage: Supabase Storage
- Deployment: Docker Compose, Vercel, Railway or Render

## Phase Roadmap

1. Architecture and folder structure
2. Backend
3. Database
4. AI pipeline
5. Frontend
6. Authentication
7. Deployment
8. Testing
9. Documentation

