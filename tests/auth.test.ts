import { afterEach, describe, expect, it } from 'vitest';
import { authenticate, requireRole } from '../src/lib/auth';

afterEach(() => {
  delete process.env.RAEBURN_AUTH_ENABLED;
  delete process.env.RAEBURN_API_TOKEN;
});

describe('auth and rbac', () => {
  it('allows local development when auth is disabled', () => {
    const result = authenticate(new Request('http://localhost'));
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.role).toBe('owner');
  });

  it('rejects missing bearer token when auth is enabled', () => {
    process.env.RAEBURN_AUTH_ENABLED = 'true';
    process.env.RAEBURN_API_TOKEN = 'test-token';
    const result = authenticate(new Request('http://localhost'));
    expect(result.ok).toBe(false);
  });

  it('accepts bearer token and role header', () => {
    process.env.RAEBURN_AUTH_ENABLED = 'true';
    process.env.RAEBURN_API_TOKEN = 'test-token';
    const result = authenticate(
      new Request('http://localhost', {
        headers: { authorization: 'Bearer test-token', 'x-raeburn-role': 'admin' },
      }),
    );
    expect(result.ok).toBe(true);
    if (result.ok) expect(result.role).toBe('admin');
  });

  it('enforces minimum role', () => {
    expect(requireRole('viewer', 'admin')).not.toBeNull();
    expect(requireRole('owner', 'admin')).toBeNull();
  });
});
