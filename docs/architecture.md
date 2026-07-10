# Architecture

EchoTwin AI is designed as a modular SaaS platform that combines customer support automation with business intelligence. The architecture prioritizes judge-friendly clarity, MVP feasibility, and a credible path to production.

## High-Level System

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

## Core Product Loop

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

## RAG Workflow

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

## Multi-Agent Plan

| Agent | Responsibility |
| --- | --- |
| Support Agent | Answer customer questions using retrieved knowledge |
| Knowledge Agent | Evaluate retrieved context and documentation quality |
| Sentiment Agent | Classify emotion, urgency, and satisfaction |
| Analytics Agent | Aggregate trends and recurring issues |
| Recommendation Agent | Suggest documentation and product improvements |
| Sales Agent | Detect upsell and expansion opportunities |

## Architectural Decisions

- Monorepo keeps hackathon delivery fast while preserving clear boundaries.
- FastAPI provides typed, documented backend APIs and async support.
- PostgreSQL stores relational business data.
- ChromaDB stores vector-searchable document chunks.
- Redis supports caching, rate limiting, and future background coordination.
- LangGraph coordinates specialized AI agents instead of one oversized prompt.
- Supabase Storage keeps original knowledge files out of the application database.

## Production Concerns

- Secrets live in environment variables, never source control.
- RBAC is enforced server-side.
- Uploaded documents are scanned and type-validated.
- AI answers include citations and confidence metadata.
- Audit logs track sensitive actions.
- Background jobs handle expensive ingestion and analytics tasks.

