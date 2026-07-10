# EchoTwin AI

**Every Conversation Builds a Better Business.**

EchoTwin AI is an AI-powered customer intelligence platform built for the FlowZint AI Hackathon 2026. It is designed for SaaS teams, startups, and support organizations that want more than a chatbot: they need a system that answers customers accurately and turns every conversation into product, support, and business intelligence.

Most support tools stop at ticket resolution. EchoTwin AI uses Retrieval-Augmented Generation, multi-agent AI workflows, analytics, and feedback loops to detect recurring complaints, sentiment shifts, churn risk, feature requests, documentation gaps, and improvement opportunities.

## Hackathon Snapshot

| Field | Details |
| --- | --- |
| Project | EchoTwin AI |
| Tagline | Every Conversation Builds a Better Business. |
| Category | Open Innovation |
| Target users | SaaS companies, startups, customer support teams, product managers |
| Core value | Convert customer conversations into grounded answers and actionable business intelligence |
| Current build stage | Phase 1 complete: architecture, monorepo, preview, docs, and deployment-ready scaffold |

## Problem

Customer conversations contain high-value signals: product bugs, confusing documentation, churn indicators, missing features, and repeated support friction. In many companies, those signals stay buried in chats and tickets. Support teams answer the same questions repeatedly while product and leadership teams miss patterns that could improve the business.

## Solution

EchoTwin AI provides:

- Grounded AI support using company knowledge
- RAG-based answers with source citations
- Conversation memory and confidence scoring
- Sentiment and churn-risk analysis
- Detection of recurring complaints and documentation gaps
- Product feedback and feature request extraction
- Executive-ready dashboards and recommendations
- A foundation for secure, organization-based SaaS deployment

## Planned Product Modules

- Authentication: register, login, JWT, Google OAuth, RBAC
- Dashboard: KPIs, sentiment, churn risk, documentation score, recommendations
- Knowledge Base: PDF, DOCX, TXT, Markdown upload, chunking, embeddings, re-indexing
- Customer Chat: streaming responses, markdown, citations, history, feedback
- AI Agents: support, sales, sentiment, analytics, knowledge, recommendation agents
- Insights: complaints, product pain points, churn, upsell opportunities
- Analytics: Recharts dashboards for customer satisfaction, feedback, confidence, and trends

## Tech Stack

| Layer | Stack |
| --- | --- |
| Frontend | React 19, Next.js 15, TypeScript, TailwindCSS, shadcn/ui patterns, Framer Motion, React Query, Zustand |
| Backend | FastAPI, Python 3.12, SQLAlchemy, Pydantic, Alembic |
| Database | PostgreSQL |
| Vector DB | ChromaDB |
| Cache | Redis |
| AI | LangGraph, LangChain, Gemini 2.5 Pro or OpenAI-compatible LLMs, sentence-transformers |
| Auth | JWT, Google OAuth, RBAC |
| Storage | Supabase Storage |
| Deployment | Vercel, Render or Railway, Supabase, Upstash, Docker Compose |

## Repository Structure

```text
frontend/      Next.js application
backend/       FastAPI application and AI services
shared/        Shared contracts and generated API assets
infra/         Local and cloud infrastructure configuration
docker/        Dockerfiles and container notes
scripts/       Developer and preview scripts
docs/          Architecture, API, deployment, and schema documentation
tests/         Cross-project testing notes and future fixtures
preview.html   Static judge-friendly preview for Phase 1
```

## Current Demo

The repository currently includes a static Phase 1 preview and a minimal Next.js screen.

Run the reliable local preview:

```powershell
node scripts/static-preview-server.mjs
```

Open:

```text
http://127.0.0.1:3003
```

You can also open `preview.html` directly in a browser.

Run the Next.js frontend:

```powershell
npm install
npm run build
npm --workspace frontend run dev
```

## GitHub Push Checklist

Before pushing:

```powershell
git status
npm run typecheck
npm run build
```

Then:

```powershell
git add .
git commit -m "initial echotwin ai scaffold"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

Do not commit `.env`, logs, build output, local databases, or `node_modules`. The `.gitignore` is configured for those files.

## Recommended Hackathon Hosting

For the current preview:

- Vercel or Netlify for the frontend preview
- GitHub repository for judges and reviewers

For the complete MVP:

- Vercel: frontend
- Render or Railway: FastAPI backend and ChromaDB
- Supabase: PostgreSQL and file storage
- Upstash: Redis
- Gemini or OpenAI-compatible API: LLM inference

## Build Roadmap

1. Architecture and folder structure: complete
2. Backend: pending
3. Database: pending
4. AI pipeline: pending
5. Frontend: pending
6. Authentication: pending
7. Deployment: pending
8. Testing: pending
9. Documentation: in progress and expanded each phase

## Why This Can Win

EchoTwin AI is positioned as a real startup product, not just a chatbot demo. It connects customer support, product intelligence, documentation improvement, and executive analytics into one continuous learning loop. Judges can understand the business value quickly, while the architecture shows a credible path toward a production SaaS platform.

