# Tests

Testing strategy and future fixtures for EchoTwin AI.

---

## Hackathon testing strategy

Focus on flows that demonstrate product value and protect the core story:

- Auth + organization workspace access
- Knowledge-base upload and ingestion
- Chunking/embedding/retrieval
- Chat answers are grounded and include citations
- Conversation persistence and analysis
- Insights (sentiment, churn risk, recommendations) visible in the dashboard
- RBAC prevents unauthorized access

---

## Planned test layers

- Backend unit tests (`pytest`)
- Backend integration tests (database/retrieval)
- Frontend component/page tests
- API contract tests (OpenAPI)
- End-to-end tests (upload → chat → insights → dashboard)

---

## Phase 1 verification

```powershell
npm run typecheck
npm run build
```

---

## GitHub notes

Ensure tests are runnable from a clean clone. Avoid committing local screenshots, logs, coverage output, or private documents.

