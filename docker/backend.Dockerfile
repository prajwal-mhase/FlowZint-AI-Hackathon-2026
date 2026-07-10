FROM python:3.12-slim AS base

WORKDIR /app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

COPY backend/pyproject.toml /app/pyproject.toml

RUN pip install --no-cache-dir --upgrade pip

COPY backend /app

CMD ["python", "-m", "app"]

