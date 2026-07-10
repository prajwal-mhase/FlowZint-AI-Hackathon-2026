# Backend

The backend will be a FastAPI service organized around clean architecture:

- `app/api`: HTTP routes and dependencies
- `app/core`: configuration, security, logging, and infrastructure adapters
- `app/domain`: business entities and domain services
- `app/repositories`: database access
- `app/services`: application services
- `app/ai`: LangGraph agents, RAG, retrieval, and insight generation
- `app/workers`: background jobs

Phase 2 will introduce the runnable FastAPI application, configuration, health checks, dependency injection, service boundaries, and initial API structure.

