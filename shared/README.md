# Shared

This folder contains contracts and shared assets used across EchoTwin AI.

## Purpose

Shared contracts keep the frontend, backend, and future worker services aligned. In a hackathon project, this helps reviewers see that the system is designed as a real product rather than disconnected demo files.

## Structure

```text
typescript/    Shared frontend-facing constants and TypeScript types
python/        Future shared Python schemas and constants
openapi/       Future generated OpenAPI artifacts
```

## Planned Usage

- Export stable API response envelopes
- Share role, sentiment, and analytics enums
- Store generated OpenAPI clients or schemas
- Keep frontend and backend naming consistent

## GitHub Notes

Generated files should only be committed when they are part of the source of truth for reviewers or deployment. Temporary build artifacts should remain ignored.

