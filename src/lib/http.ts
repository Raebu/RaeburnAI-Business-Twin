import { NextResponse } from 'next/server';
import { z } from 'zod';
import { logger } from './logger';

export function ok<T>(data: T, status = 200) {
  return NextResponse.json({ data }, { status });
}

export function fail(message: string, status = 400, details?: unknown) {
  return NextResponse.json({ error: { message, details } }, { status });
}

export async function parseJson<T>(request: Request, schema: z.Schema<T>): Promise<T> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    throw new Error('Request body must be valid JSON.');
  }
  return schema.parse(body);
}

export function handleError(error: unknown) {
  if (error instanceof z.ZodError) {
    logger.warn('validation.failed', { issues: error.issues.length });
    return fail('Validation failed', 422, error.flatten());
  }

  if (error instanceof Error) {
    logger.warn('request.failed', { message: error.message });
    return fail(error.message, 400);
  }

  logger.error('request.unexpected_error');
  return fail('Unexpected error', 500);
}
