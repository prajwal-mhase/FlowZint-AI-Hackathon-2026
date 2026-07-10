# Architecture

EchoTwin AI is designed as a modular SaaS platform that combines customer support automation with business intelligence.

---

## High-level system

```mermaid
flowchart LR
  Customer[Customer] --> Frontend[Next.js Frontend]
  Support[Support Team] --> Frontend
  Product[Product Team] --> Frontend

  Frontend --> API[FastAPI Backend]
  API --> Postgres[(PostgreSQL)]
  API --> Redis[(Redis)]
  API --> Chroma[(ChromaDB)]
  API --> Storage[Supabase Storage]
  API --> LLM[Gemini or OpenAI-Compatible LLM]
  API --> Embeddings[Sentence Transformer Embeddings]
```

---

## Core product loop

```mermaid
flowchart TD
  Upload[Upload company knowledge] --> Chunk[Chunk documents]
  Chunk --> Embed[Create embeddings]
  Embed --> Retrieve[Retrieve relevant context]
  Retrieve --> Answer[Generate grounded support answer]
  Answer --> Store[Store conversation]
  Store --> Analyze[Analyze sentiment, churn, gaps, and requests]
  Analyze --> Recommend[Recommend business improvements]
  Recommend --> Dashboard[Show insights on dashboard]
```

---

## RAG workflow

```mermaid
flowchart TD
  Q[User question] --> QE[Query embedding]
  QE --> VS[Vector search]
  VS --> CTX[Ranked context]
  CTX --> Prompt[Grounded prompt assembly]
  Prompt --> Graph[LangGraph workflow]
  Graph --> LLM[LLM answer]
  LLM --> Guard[Confidence and hallucination checks]
  Guard --> Save[Persist messages and sources]
  Save --> Stream[Stream answer with citations]
```

---

## Key architectural choices

- **Monorepo**: fast hackathon delivery with clear boundaries
- **FastAPI**: typed, documented APIs and async support
- **PostgreSQL**: relational business state
- **ChromaDB**: vector search for knowledge chunks
- **Redis**: caching, rate limiting, and coordination
- **LangGraph**: orchestrates specialized agents
- **Supabase Storage**: keeps original knowledge files out of the database

---

## Production concerns

- Secrets via environment variables
- Server-side RBAC enforcement
- Uploaded document validation
- Citations and confidence metadata on AI answers
- Audit logs for sensitive operations
- Background jobs for ingestion and analytics

