# Shared

Cross-stack contracts and shared assets used across EchoTwin AI.

## Purpose

Shared contracts keep the frontend and backend aligned so teams don’t drift on naming, types, enums, and response envelopes.

## Structure

```text
typescript/    Frontend-facing constants and TypeScript types
python/        Reserved for Python shared schemas/constants
openapi/       Reserved for OpenAPI artifacts
```

## GitHub notes

Only commit generated files when they are part of the source of truth. Temporary build artifacts should remain ignored.

