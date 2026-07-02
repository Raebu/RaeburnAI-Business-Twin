import { logger } from './logger';

type AuditAction = 'twin.create' | 'document.register' | 'scenario.run' | 'approval.required';

export function audit(action: AuditAction, subjectId: string, context: Record<string, string | number | boolean | undefined> = {}) {
  logger.info('audit.event', {
    action,
    subjectId,
    ...context,
  });
}
