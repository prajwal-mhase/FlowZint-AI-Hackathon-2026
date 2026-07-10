import { NextResponse } from "next/server";
import { mockApi } from "@/lib/mock-api";

export async function GET() {
  return NextResponse.json(await mockApi.dashboard());
}

