# Contributing

This repository is a hackathon project, but it should still read and behave like a serious startup codebase.

## Development Principles

- Keep changes scoped to the current phase.
- Prefer clear, typed contracts over implicit data shapes.
- Avoid placeholder code in production paths.
- Write small modules with obvious ownership.
- Keep secrets, logs, and generated files out of Git.
- Make the judge demo path easy to run from a fresh clone.

## Phase Discipline

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

Each phase should leave the repository in a runnable or reviewable state.

## Commit Style

Use short imperative messages:

```text
feat: add document upload service
fix: validate organization access
docs: update hackathon deployment guide
test: cover conversation insight generation
```

## Pull Request Checklist

- The change matches the current phase.
- `npm run typecheck` passes when frontend/shared code changes.
- `npm run build` passes when frontend code changes.
- Backend tests pass when backend code exists.
- New environment variables are documented in `.env.example`.
- Documentation is updated when architecture, setup, or deployment changes.

## GitHub Hygiene

Do not commit:

- `.env` files
- `node_modules`
- `.next`
- local databases
- uploaded documents
- logs
- API keys
- private customer data

