# Contributing

EchoTwin AI is a hackathon project—structured to read and behave like a serious startup repository.

---

## Development principles

- Keep changes scoped to the current phase
- Prefer explicit, typed contracts over implicit data shapes
- Avoid placeholder code in production paths
- Write small modules with clear ownership
- Do not commit secrets, logs, or generated files
- Ensure the judge demo path works from a clean clone

---

## Phase discipline

The project is intentionally built in phases:

1. Architecture and folder structure
2. Backend
3. Database
4. AI pipeline
5. Frontend
6. Authentication
7. Deployment
8. Testing
9. Documentation

Each phase should leave the repository reviewable and runnable.

---

## Commits

Use short, imperative commit messages, for example:

```text
feat: add document upload service
fix: validate organization access
docs: update deployment guide
test: cover conversation insight generation
```

---

## Pull request checklist

- The change matches the current phase
- Frontend/shared changes pass `npm run typecheck` and `npm run build`
- Backend changes include appropriate tests when available
- New environment variables are documented in `.env.example`
- Docs are updated for architecture/setup/deployment changes

---

## GitHub hygiene

Do not commit:

- `.env` files
- `node_modules`
- `.next`
- local databases / dumps
- uploaded documents
- logs and API keys
- any private customer data

