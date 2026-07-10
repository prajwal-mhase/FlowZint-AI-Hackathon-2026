export const APP_NAME = "EchoTwin AI";
export const APP_TAGLINE = "Every Conversation Builds a Better Business.";

export type UserRole = "owner" | "admin" | "agent" | "analyst" | "viewer";

export type Sentiment = "positive" | "neutral" | "negative" | "mixed";

export interface ApiEnvelope<T> {
  data: T;
  requestId: string;
}

export interface ApiError {
  message: string;
  code: string;
  requestId?: string;
}

