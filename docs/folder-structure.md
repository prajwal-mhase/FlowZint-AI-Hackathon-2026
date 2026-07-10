# Folder structure

EchoTwin AI is organized as a professional monorepo so judges and contributors can understand the system quickly.

```text
.
├── backend/
├── docs/
├── frontend/
├── infra/
├── docker/
├── scripts/
├── shared/
├── tests/
└── preview.html
```

## Responsibility overview

| Path | Responsibility |
| --- | --- |
| `frontend` | Next.js SaaS UI and customer experience |
| `backend` | FastAPI API, domain services, AI orchestration |
| `shared` | Cross-stack contracts and shared assets |
| `infra` | Local services and deployment infrastructure |
| `docker` | Container build files |
| `scripts` | Local automation and preview/demo helpers |
| `docs` | Architecture, API design, deployment, and schema notes |
| `tests` | Testing strategy and future fixtures |
| `preview.html` | Static Phase 1 preview for judges |

