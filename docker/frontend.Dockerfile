FROM node:22-alpine AS base

WORKDIR /app

COPY package.json package-lock.json* ./
COPY frontend/package.json frontend/package.json
COPY shared/typescript/package.json shared/typescript/package.json

RUN npm install

COPY frontend frontend
COPY shared shared

CMD ["npm", "--workspace", "frontend", "run", "dev"]

