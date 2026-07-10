# API Design

The backend API will be versioned under `/api/v1`.

## Planned Resource Groups

- `/auth`: register, login, refresh, forgot password, Google OAuth
- `/users`: profile, roles, organization membership
- `/organizations`: organization settings and billing-ready metadata
- `/documents`: upload, list, delete, re-index, semantic search
- `/conversations`: chat sessions, history, messages, feedback
- `/agents`: agent status and workflow metadata
- `/insights`: complaints, gaps, churn risk, opportunities
- `/analytics`: dashboard KPIs and chart data
- `/recommendations`: generated business recommendations
- `/audit-logs`: security and compliance events

## Response Envelope

```json
{
  "data": {},
  "requestId": "req_..."
}
```

Errors use stable machine-readable codes and include request IDs for supportability.

