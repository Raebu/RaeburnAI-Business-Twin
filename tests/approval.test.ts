import { describe, expect, it } from 'vitest';
import { requireApproval } from '../src/lib/approval';

describe('approval guard', () => {
  it('blocks unapproved capacity scenario', () => {
    expect(() => requireApproval({ scenarioType: 'capacity_loss', twinId: 'demo' })).toThrow('Human approval');
  });

  it('allows approved capacity scenario', () => {
    expect(() => requireApproval({ scenarioType: 'capacity_loss', twinId: 'demo', approved: true })).not.toThrow();
  });
});
