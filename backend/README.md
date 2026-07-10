# EchoTwin AI Backend

Backend services for EchoTwin AI.

This folder contains the planned **FastAPI** backend and its AI orchestration layer responsible for:

- Authentication (JWT / OAuth)
- Organization-aware RBAC
- Knowledge ingestion and RAG retrieval
- AI agent workflows (LangGraph)
- Analytics, insights, and recommendations
- Audit logging for security-sensitive actions

---

## Intended API surface

The backend is designed to expose a versioned API under:

- `/api/v1`

Core resource groups:

- `/auth`
- `/users`
- `/organizations`
- `/documents`
- `/conversations`
- `/agents`
- `/insights`
- `/analytics`
- `/recommendations`
- `/audit-logs`

---

## Planned local development

Phase 2 is expected to contain the backend implementation. After it exists, the intended workflow is:

```powershell
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -e ".[dev]"

uvicorn app.main:app --reload
```

---

## Production notes

- Configuration via environment variables (Pydantic settings)
- Relational state in PostgreSQL
- Semantic retrieval via ChromaDB
- Caching/rate limits via Redis
- Background jobs for ingestion and analytics
- Audit logs for sensitive actions

---

## GitHub hygiene

Do not commit:

- `.env` files and secrets
- local virtual environments
- generated uploads
- logs or database snapshots

