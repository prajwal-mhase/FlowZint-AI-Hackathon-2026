export interface ApiEnvelope<T> {
  data: T;
  requestId: string;
}

export interface ApiError {
  message: string;
  code: string;
  requestId?: string;
}

export interface HealthResponse {
  status: "ok";
  service: string;
  version: string;
  environment: string;
}
