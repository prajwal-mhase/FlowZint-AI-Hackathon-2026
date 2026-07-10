# Tests

This folder contains cross-project testing notes and future end-to-end assets for EchoTwin AI.

## Hackathon Testing Strategy

Testing should focus on the flows most likely to impress judges and protect the core product story:

- User can authenticate and access an organization workspace
- User can upload a knowledge-base document
- Backend chunks, embeds, and retrieves relevant context
- AI chat returns a grounded answer with citations
- Conversation is stored and analyzed
- Sentiment, churn risk, and recommendations appear in the dashboard
- RBAC prevents unauthorized access

## Planned Test Layers

- Backend unit tests with `pytest`
- Backend integration tests for database and retrieval services
- Frontend component and page tests
- API contract tests using OpenAPI
- End-to-end tests for upload, chat, insights, and dashboard

## Current Verification

Phase 1 verification:

```powershell
npm run typecheck
npm run build
```

## GitHub Notes

Tests should be runnable from a clean clone. Avoid committing local screenshots, logs, generated coverage output, or private test documents.

