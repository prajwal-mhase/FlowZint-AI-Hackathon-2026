# EchoTwin AI Backend

This folder contains the planned FastAPI backend for EchoTwin AI. The backend is responsible for authentication, organization data, knowledge-base ingestion, AI orchestration, analytics, audit logging, and API delivery.

## Hackathon Role

The backend is the intelligence and trust layer of the product. It will turn uploaded business knowledge and customer conversations into secure, source-grounded responses and structured insights.

## Planned Responsibilities

- Serve versioned REST and streaming APIs under `/api/v1`
- Authenticate users with JWT and Google OAuth
- Enforce organization-level RBAC
- Store relational state in PostgreSQL
- Cache rate limits and expensive lookups in Redis
- Connect to ChromaDB for semantic retrieval
- Orchestrate LangGraph agents for support and analytics workflows
- Generate recommendations, churn risk, sentiment labels, and documentation gaps
- Emit audit logs for sensitive actions

## Intended Structure

```text
app/
  api/            FastAPI routers, dependencies, middleware
  ai/             LangGraph workflows, RAG, agents, evaluation
  core/           config, security, logging, settings
  domain/         business entities and domain services
  repositories/   SQLAlchemy data access
  schemas/        Pydantic request and response models
  services/       application use cases
  workers/        background jobs for ingestion and analytics
alembic/          database migrations
```

## Local Development Plan

The backend implementation begins in Phase 2. Expected commands after implementation:

```powershell
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -e ".[dev]"
uvicorn app.main:app --reload
```

## Production Notes

- All configuration will be environment-driven through Pydantic settings.
- Database access will use SQLAlchemy models and repository classes.
- Public API schemas will be separated from internal domain models.
- Background document ingestion will be separated from request handling.
- Security-sensitive events will be recorded in audit logs.

## GitHub Notes

Do not commit local virtual environments, `.env` files, generated uploads, logs, or database snapshots.

