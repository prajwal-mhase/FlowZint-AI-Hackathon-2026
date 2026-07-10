# Shared Python

Python contracts reserved for code shared across multiple runtimes (FastAPI, workers, evaluation jobs, or future CLIs).

## Planned contents

- Shared constants
- Common enum definitions
- Cross-service Pydantic models
- Evaluation payload schemas
- AI pipeline metadata contracts

## Design rule

Only place code here when it genuinely needs to be shared across multiple Python services/runtimes. Backend-only implementation should remain under `backend/app`.

