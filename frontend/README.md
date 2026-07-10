# EchoTwin AI Frontend

This folder contains the Next.js frontend for EchoTwin AI.

## Hackathon Role

The frontend is the first impression for judges and users. It should feel like a polished SaaS product: clear navigation, premium typography, responsive layouts, dark and light modes, analytics dashboards, a beautiful chat experience, and smooth interactions.

## Current State

Phase 1 includes a minimal Next.js screen and a static `preview.html` at the repository root for reliable local viewing.

## Planned Product Screens

- Public product entry screen or authenticated redirect
- Login, register, forgot password, and Google OAuth flows
- SaaS dashboard with KPIs and insight cards
- Conversation center with AI chat and history
- Knowledge-base upload and document management
- Analytics pages with Recharts visualizations
- Recommendations and product feedback views
- Command palette and global search
- Settings, organization, members, and RBAC management

## Tech Stack

- React 19
- Next.js 15 App Router
- TypeScript
- TailwindCSS
- shadcn/ui-style component architecture
- Framer Motion
- React Query
- Zustand
- Recharts
- Lucide icons

## Local Commands

From the repository root:

```powershell
npm install
npm run typecheck
npm run build
npm --workspace frontend run dev
```

## Deployment

Recommended Vercel settings:

```text
Framework Preset: Next.js
Root Directory: frontend
Install Command: npm install
Build Command: npm run build
Output Directory: .next
```

For a monorepo import, make sure Vercel installs from the repository root and builds the `frontend` workspace.

