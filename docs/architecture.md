# EchoTwin AI Architecture

## Architectural Principles

EchoTwin AI uses a modular monorepo with clear boundaries between presentation, application, domain, infrastructure, and AI orchestration. The goal is to support a hackathon-speed MVP without creating throwaway code.

## System Context

```mermaid
flowchart LR
  Customer[Customer] --> Frontend[Next.js Frontend]
  SupportTeam[Support Team] --> Frontend
  Frontend --> API[FastAPI Backend]
  API --> Postgres[(PostgreSQL)]
  API --> Redis[(Redis)]
  API --> Chroma[(ChromaDB)]
  API --> Storage[Supabase Storage]
  API --> LLM[Gemini or OpenAI LLM]
  API --> Embeddings[Sentence Transformer Embeddings]
```

## Core Modules

- Authentication and identity: JWT, Google OAuth, sessions, RBAC, audit logs
- Knowledge base: upload, parse, chunk, embed, retrieve, delete, and re-index
- AI chat: RAG, citations, memory, confidence scoring, feedback, and streaming
- Agents: support, sales, sentiment, analytics, knowledge, and recommendations
- Insights: recurring complaints, churn risk, missing docs, pain points, feature requests
- Analytics: KPIs, trends, agent performance, satisfaction, confidence, and recommendations

## AI Workflow

```mermaid
flowchart TD
  Q[User question] --> Embed[Generate query embedding]
  Embed --> Search[Vector search in ChromaDB]
  Search --> Context[Retrieve ranked context]
  Context --> Prompt[Assemble grounded prompt]
  Prompt --> Graph[LangGraph agent workflow]
  Graph --> LLM[LLM response]
  LLM --> Guard[Confidence and hallucination checks]
  Guard --> Store[Store messages and analytics]
  Store --> Response[Stream answer with citations]
```

## Data Ownership

PostgreSQL stores relational business state, ChromaDB stores vector-searchable chunks, Redis handles cache and rate limiting, and Supabase Storage stores uploaded source files.

