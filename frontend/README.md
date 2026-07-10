# EchoTwin AI Frontend

Next.js frontend for EchoTwin AI.

---

## Purpose

The frontend is the primary user experience for judges and early adopters. It is intended to feel like a polished SaaS product, including:

- A modern dashboard
- A responsive chat experience
- Knowledge-base management
- Insights and recommendations

---

## Current state (Phase 1)

Phase 1 includes:

- A minimal Next.js screen
- A static preview (`preview.html`) at the repository root

---

## Tech stack

- React 19
- Next.js 15 (App Router)
- TypeScript
- TailwindCSS
- shadcn/ui-style components
- Framer Motion
- React Query
- Zustand
- Recharts
- Lucide icons

---

## Development

From the repository root:

```powershell
npm install
npm run typecheck
npm run build
npm --workspace frontend run dev
```

---

## Deployment (recommended: Vercel)

Vercel settings:

- Root Directory: `frontend`
- Install Command: `npm install`
- Build Command: `npm run build`

For a monorepo setup, you may also configure Vercel to install/build from the repository root and build the `frontend` workspace.

