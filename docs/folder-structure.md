# Folder Structure

EchoTwin AI is organized as a professional monorepo so judges and contributors can understand the system quickly.

```text
.
├── backend
│   ├── alembic
│   └── app
│       ├── ai
│       ├── api
│       ├── core
│       ├── domain
│       ├── repositories
│       ├── schemas
│       ├── services
│       └── workers
├── docker
├── docs
├── frontend
│   └── src
│       ├── app
│       ├── components
│       ├── features
│       ├── lib
│       ├── stores
│       └── styles
├── infra
├── scripts
├── shared
│   ├── openapi
│   ├── python
│   └── typescript
├── tests
└── preview.html
```

## Directory Responsibilities

| Path | Responsibility |
| --- | --- |
| `frontend` | Next.js SaaS UI and customer experience |
| `backend` | FastAPI API, domain services, AI orchestration |
| `shared` | Cross-stack contracts and generated API assets |
| `infra` | Local services and deployment infrastructure |
| `docker` | Container build files |
| `scripts` | Local automation and demo helpers |
| `docs` | Architecture, deployment, API, and schema notes |
| `tests` | Cross-project testing strategy and future fixtures |
| `preview.html` | Static Phase 1 preview for judges |

## GitHub Review Notes

The repo is intentionally split into small folders rather than one large demo file. This makes the project easier to judge, extend, and deploy phase by phase.

