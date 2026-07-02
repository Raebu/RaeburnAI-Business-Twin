import { ok } from '../../../lib/http';

export async function GET() {
  return ok({ status: 'ok', service: 'raeburnai-business-twin', time: new Date().toISOString() });
}
