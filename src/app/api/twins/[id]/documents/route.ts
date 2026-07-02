import { z } from 'zod';
import { getTwin, saveTwin } from '../../../../../lib/store';
import { fail, handleError, ok, parseJson } from '../../../../../lib/http';

const Input = z.object({
  name: z.string().min(1),
  kind: z.enum(['policy', 'org_chart', 'kpi', 'process', 'other']),
  text: z.string().min(1)
});

type Params = { params: Promise<{ id: string }> };

export async function POST(request: Request, context: Params) {
  try {
    const params = await context.params;
    const twin = await getTwin(params.id);
    if (!twin) return fail('Twin not found', 404);
    const input = await parseJson(request, Input);
    const document = { id: crypto.randomUUID(), name: input.name, kind: input.kind, uploadedAt: new Date().toISOString() };
    const updated = await saveTwin({ ...twin, sourceDocuments: [...twin.sourceDocuments, document] });
    return ok({ twin: updated, extracted: { note: 'Document registered for later enrichment.' } }, 201);
  } catch (error) {
    return handleError(error);
  }
}
