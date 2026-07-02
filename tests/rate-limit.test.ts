import { describe, expect, it } from 'vitest';
import { checkRateLimit } from '../src/lib/rate-limit';

describe('rate limiter', () => {
  it('blocks requests after the threshold', () => {
    process.env.RAEBURN_RATE_LIMIT_WINDOW_MS = '60000';
    process.env.RAEBURN_RATE_LIMIT_MAX = '1';
    const key = `rate-${Date.now()}`;
    expect(checkRateLimit(key).allowed).toBe(true);
    expect(checkRateLimit(key).allowed).toBe(false);
  });
});
