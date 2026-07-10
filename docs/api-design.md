# API Design

EchoTwin AI will expose a versioned API under `/api/v1`. The API is designed for a production-style SaaS product with organizations, users, documents, conversations, insights, recommendations, and audit logs.

## API Goals

- Keep frontend integration predictable
- Return stable response envelopes
- Support streaming AI responses
- Enforce organization-level access control
- Make analytics and insights easy to query
- Keep errors useful for both users and developers

## Response Envelope

Successful responses:

```json
{
  "data": {},
  "requestId": "req_01HACKATHON"
}
```

Error responses:

```json
{
  "message": "Document not found",
  "code": "DOCUMENT_NOT_FOUND",
  "requestId": "req_01HACKATHON"
}
```

## Planned Resource Groups

| Route Group | Purpose |
| --- | --- |
| `/auth` | Register, login, refresh, forgot password, Google OAuth |
| `/users` | Profile, roles, organization membership |
| `/organizations` | Workspace settings and team metadata |
| `/documents` | Upload, list, delete, re-index, semantic search |
| `/conversations` | Chat sessions, messages, history, feedback |
| `/agents` | Agent metadata and workflow status |
| `/insights` | Complaints, gaps, churn risk, opportunities |
| `/analytics` | KPI cards and chart-ready datasets |
| `/recommendations` | AI-generated business recommendations |
| `/audit-logs` | Security and compliance events |

## Streaming Chat Contract

The chat endpoint will support token streaming so the UI feels fast and modern.

Planned endpoint:

```text
POST /api/v1/conversations/{conversationId}/messages:stream
```

Expected event types:

- `token`
- `citation`
- `confidence`
- `follow_up`
- `complete`
- `error`

## Security Expectations

- All protected routes require JWT access tokens.
- Organization ID is derived from membership, not trusted blindly from the client.
- File uploads are validated by size, type, and organization permissions.
- Audit logs are written for auth, document, role, and data-export events.

