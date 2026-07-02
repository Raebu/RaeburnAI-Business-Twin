import { audit } from './audit';

const guardedTypes = new Set(['capacity_loss', 'automation']);

export function requireApproval(input: { scenarioType: string; approved?: boolean; twinId: string }) {
  if (process.env.RAEBURN_REQUIRE_APPROVAL === 'false') return;
  if (!guardedTypes.has(input.scenarioType)) return;
  if (input.approved === true) return;
  audit('approval.required', input.twinId, { scenarioType: input.scenarioType });
  throw new Error('Human approval is required for this scenario.');
}
