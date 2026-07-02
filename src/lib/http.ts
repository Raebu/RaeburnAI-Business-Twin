import { NextResponse } from 'next/server';
import { z } from 'zod';

export function ok<T>(data: T, status = 200) {
  return NextResponse.json({ data }, { status });
}

export function fail(message: string, status = 400, details?: unknown) {
  return NextResponse.json({ error: { message, details } }, { status });
}

export async function parseJson<T>(request: Request, schema: z.Schema<T>): Promise<T> {
  const body = await request.json();
  return schema.parse(body);
}

export function handleError(error: unknown) {
  if (error instanceof z.ZodError) return fail('Validation failed', 422, error.flatten());
  if (error instanceof Error) return fail(error.message, 400);
  return fail('Unexpected error', 500);
}
