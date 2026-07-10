export function createRequestId(seed: string): string {
  const normalized = seed.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return `req_${normalized || "unknown"}`;
}
