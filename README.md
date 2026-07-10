# EchoTwin AI

**Every conversation builds a better business.**

EchoTwin AI is an AI-powered customer intelligence platform built for the FlowZint AI Hackathon 2026. It turns support conversations into **grounded answers** and **actionable business insights**—helping teams detect recurring issues, track sentiment shifts, and prioritize product and documentation improvements.

---

## What it does

EchoTwin AI provides:

- **RAG-grounded support answers** with source citations
- **Conversation analysis** (sentiment, confidence, and structured feedback)
- **Signals for business impact** (recurring complaints, churn risk, feature requests)
- **Dashboards & recommendations** to turn insights into next steps

---

## Hackathon snapshot (Phase 1)

- Architecture and monorepo scaffold
- Frontend preview (`preview.html`)
- Documentation and deployment guidance

---

## Repository layout

```text
frontend/      Next.js application
backend/       FastAPI application and AI services
shared/        Cross-stack contracts and shared types
infra/         Local infrastructure (Docker Compose)
docker/        Container build files
scripts/       Local helpers (preview server, dev scripts)
docs/          Architecture, API design, deployment, and diagrams
tests/         Testing strategy and future fixtures
preview.html   Static judge-friendly preview for Phase 1
```

---

## Quickstart: run the Phase 1 preview

1) Start the static preview server:

```powershell
node scripts/static-preview-server.mjs
```

2) Open:

```text
http://127.0.0.1:3003
```

You can also open `preview.html` directly in a browser.

---

## Build: run the Next.js frontend

From the repository root:

```powershell
npm install
npm --workspace frontend run dev
```

Typecheck:

```powershell
npm run typecheck
```

Production build:

```powershell
npm run build
```

---

## GitHub push checklist

```powershell
git status
npm run typecheck
npm run build

git add .
git commit -m "chore: update echotwin ai scaffold"
git branch -M main

git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Avoid committing secrets, local logs, build output, databases, and `node_modules` (see `.gitignore`).

