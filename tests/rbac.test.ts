import { describe, expect, it } from 'vitest';
import { requireRole } from '../src/lib/auth';

describe('rbac', () => {
  it('blocks low privilege roles', () => {
    expect(requireRole('viewer', 'admin')).toBeInstanceOf(Response);
  });

  it('allows high privilege roles', () => {
    expect(requireRole('owner', 'admin')).toBeNull();
  });
});
