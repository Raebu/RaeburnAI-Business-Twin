# Roadmap

## Phase 1: Production foundation

- Pinned dependencies.
- Real lint, format, typecheck, test and build commands.
- Docker and Compose deployment.
- Structured logging and safe error handling.
- Health checks.
- Audit logging and approval guard.
- CodeQL and Dependabot configuration.
- Baseline API auth and RBAC.
- Postgres and Supabase storage adapter path.
- Production database schema.

## Phase 2: Enterprise data layer

- Add a first-party database adapter package instead of the current HTTP adapter contract.
- Add migration runner commands.
- Add seed scripts.
- Add object storage for uploaded documents.
- Add backups and restore testing.

## Phase 3: Authentication and permissions

- Add organisation accounts.
- Add persistent users and memberships.
- Add tenant-aware RBAC.
- Add API keys for service integrations.
- Add tenant-aware audit trails.

## Phase 4: Document intelligence

- Add PDF, DOCX, CSV and spreadsheet parsers.
- Add entity extraction for roles, processes, KPIs, tools and risks.
- Add human review before extracted changes update the twin.

## Phase 5: Commercial readiness

- Add hosted deployment guide.
- Add billing integration.
- Add customer onboarding flow.
- Add enterprise export and reporting.

## Explicit TODOs

- Document parsing currently registers documents but does not extract structured entities.
- Add final UI images under `docs/assets/` after dashboard design approval.
- Replace bearer-token auth with full user login and organisation membership before multi-tenant SaaS launch.
