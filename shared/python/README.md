# Shared Python

This folder is reserved for Python contracts that may need to be shared across the FastAPI app, background workers, evaluation jobs, and future CLI utilities.

## Planned Contents

- Shared constants
- Common enum definitions
- Cross-service Pydantic models
- Evaluation payload schemas
- AI pipeline metadata contracts

## Design Rule

Only place code here when more than one Python service or runtime genuinely needs it. Backend-only application code should remain inside `backend/app`.

