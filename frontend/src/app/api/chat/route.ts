import { NextResponse } from "next/server";
import { mockApi } from "@/lib/mock-api";

export async function POST(request: Request) {
  const body = (await request.json()) as { question?: string };
  return NextResponse.json(await mockApi.ask(body.question ?? ""));
}

