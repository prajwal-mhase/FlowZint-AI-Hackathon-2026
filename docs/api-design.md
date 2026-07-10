# API Design

EchoTwin AI exposes a versioned API under `/api/v1`.

The API is designed for a production-style SaaS product with organizations, users, documents, conversations, insights, recommendations, and audit logs.

---

## API goals

- Predictable frontend integration
- Stable response envelopes
- Support streaming AI responses
- Organization-level access control
- Easy-to-query analytics and insights
- Errors that are useful for users and developers

---

## Response envelope

### Success

```json
{
  "data": {},
  "requestId": "req_01HACKATHON"
}
```

### Error

```json
{
  "message": "Document not found",
  "code": "DOCUMENT_NOT_FOUND",
  "requestId": "req_01HACKATHON"
}
```

---

## Resource groups (planned)

| Route group | Purpose |
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

---

## Streaming chat contract (planned)

The chat endpoint supports token streaming for a fast, modern UI.

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

---

## Security expectations

- Protected routes require JWT access tokens
- Organization context is derived from membership (not trusted from client input)
- File uploads are validated by permissions, size, and type
- Audit logs are written for auth, document, role, and export-related events

