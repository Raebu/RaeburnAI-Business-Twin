import { z } from 'zod';
import { getTwin } from '../../../../../lib/store';
import { runScenario } from '../../../../../domain/simulation';
import { fail, handleError, ok, parseJson } from '../../../../../lib/http';

const Input = z.object({
  question: z.string().min(3),
  scenario: z.union([
    z.object({ type: z.literal('capacity_loss'), role: z.string(), peopleLost: z.number().int().positive() }),
    z.object({ type: z.literal('workflow_volume_change'), workflowId: z.string(), percentageChange: z.number() }),
    z.object({ type: z.literal('automation'), workflowId: z.string(), automationLevel: z.number().min(0).max(1) })
  ])
});

type Params = { params: Promise<{ id: string }> };

export async function POST(request: Request, context: Params) {
  try {
    const params = await context.params;
    const twin = await getTwin(params.id);
    if (!twin) return fail('Twin not found', 404);
    const input = await parseJson(request, Input);
    const result = runScenario(twin, input.question, input.scenario);
    return ok(result);
  } catch (error) {
    return handleError(error);
  }
}
