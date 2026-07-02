import { getTwin } from '../../../../lib/store';
import { fail, handleError, ok } from '../../../../lib/http';

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: Request, context: Params) {
  try {
    const { id } = await context.params;
    const twin = await getTwin(id);
    if (!twin) return fail('Twin not found', 404);
    return ok(twin);
  } catch (error) {
    return handleError(error);
  }
}
