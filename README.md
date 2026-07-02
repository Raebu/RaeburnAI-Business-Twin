# RaeburnAI Business Twin

![Status](https://img.shields.io/badge/status-production--foundation-blue) ![Licence](https://img.shields.io/badge/licence-Apache--2.0-green) ![Platform](https://img.shields.io/badge/RaeburnAI-platform-purple)

Enterprise digital twin for modelling company operations, workflow cost, capacity risk and automation opportunities.

RaeburnAI Business Twin turns policies, org charts, KPI reports and process documents into an operational model of the business. Leaders can ask what-if questions, identify bottlenecks, compare workflow costs and prioritise automation with auditable assumptions.

## Part of the RaeburnAI Platform

RaeburnAI is an open enterprise AI platform for business automation, governance, knowledge, operations and decision intelligence. Each module is designed to work alone or as part of a wider operating layer for modern organisations.

### Ecosystem map

- RaeburnAI Business Twin: operational modelling and scenario simulation.
- RaeburnAI Compliance Engine: AI governance, GDPR, ISO and regulatory controls.
- Universal AI Knowledge Graph: searchable enterprise memory across documents and systems.
- RaeburnAI Executive: daily executive briefing and decision support.
- OpenAI Operations Dashboard: model usage, cost, latency, safety and audit visibility.
- RaeburnAI Proposal Generator: proposals, roadmaps, pricing and ROI analysis.
- RaeburnAI Enterprise MCP Server: shared connector layer for assistants and agents.
- RaeburnAI Meeting Intelligence: decisions, actions and follow-up automation.
- RaeburnAI AgentOS: multi-agent orchestration, memory and human approvals.
- RaeburnAI Workflow Auditor: automation opportunity discovery and implementation planning.

## Core features

- Business twin model for teams, roles, workflows, KPIs and source documents.
- Scenario engine for capacity loss, workflow volume changes and automation savings.
- Workflow cost ranking and bottleneck analysis.
- Document registration API for policies, org charts, KPI reports and process notes.
- Optional bearer-token auth and RBAC for API routes.
- Human approval guard for high-impact scenarios.
- Structured JSON logging and audit events.
- Input validation with bounded schemas.
- In-memory rate limiting for API routes.
- JSON demo storage plus Postgres/Supabase HTTP adapter path.
- Health check endpoint.
- Demo data for a recruitment consultancy.
- Next.js dashboard UI.
- Docker and Docker Compose deployment assets.
- Unit, integration-style and UI smoke tests.

## Architecture

Next.js App Router provides the dashboard and API routes. The domain core contains the BusinessTwin model, workflow cost calculations and scenario engine. Operational controls include validation, auth/RBAC, rate limiting, audit logging and approval checks. Storage supports JSON for local demos and a Postgres/Supabase-style HTTP adapter for production deployments.

See `docs/ARCHITECTURE.md` and `docs/DEPLOYMENT.md` for more detail.

## Quick start

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open `http://localhost:3000`.

Quality checks:

```bash
pnpm lint
pnpm format
pnpm typecheck
pnpm test
pnpm build
```

Docker:

```bash
docker compose up --build
```

## Environment variables

| Variable | Purpose | Default |
| --- | --- | --- |
| `NODE_ENV` | Runtime mode. | `development` |
| `NEXT_PUBLIC_APP_URL` | Public app URL. | `http://localhost:3000` |
| `RAEBURN_AUTH_ENABLED` | Enables bearer-token API auth. | `false` |
| `RAEBURN_API_TOKEN` | API bearer token when auth is enabled. | empty |
| `RAEBURN_STORAGE_DRIVER` | Storage backend: `json`, `postgres`, or `supabase`. | `json` |
| `RAEBURN_DATA_DIR` | Local data directory. | `.data` |
| `RAEBURN_DATABASE_HTTP_URL` | HTTP database adapter endpoint. | empty |
| `RAEBURN_DATABASE_SERVICE_TOKEN` | Service token for database adapter. | empty |
| `RAEBURN_RATE_LIMIT_WINDOW_MS` | API rate-limit window. | `60000` |
| `RAEBURN_RATE_LIMIT_MAX` | Max requests per window. | `120` |
| `RAEBURN_LOG_LEVEL` | Logging level. | `info` |
| `RAEBURN_REQUIRE_APPROVAL` | Require human approval for guarded scenarios. | `true` |
| `OPENAI_API_KEY` | Optional future LLM enrichment. | empty |
| `DATABASE_URL` | Optional direct database URL for future adapters. | empty |

## Usage examples

Create a twin with `POST /api/twins` and run approved scenarios with `POST /api/twins/demo-twin/scenarios`. When auth is enabled, include `Authorization: Bearer <token>` and `X-Raeburn-Role` headers. See `openapi.yaml` for request shapes.

## Security model

- No secrets are committed to the repository.
- API auth can be enabled with `RAEBURN_AUTH_ENABLED=true`.
- RBAC roles: `viewer`, `analyst`, `admin`, `owner`.
- API inputs are validated with Zod and bounded to safe lengths and ranges.
- API routes use rate limiting to reduce abuse risk.
- Sensitive actions emit audit events.
- High-impact scenarios require explicit human approval.
- Docker runs as a non-root user with a healthcheck.
- Production deployments should use private storage, managed database encryption, access control and centralised logs.

## Production readiness

Included: pinned dependencies, real linting, formatting, type checking, tests, Docker, health checks, OpenAPI, safe errors, structured logs, audit events, Dependabot, CodeQL, auth/RBAC, database adapter path and deployment notes. UI capture requirements are documented in `docs/DEPLOYMENT.md`.

## Roadmap

See `ROADMAP.md`.

## Contributing

See `CONTRIBUTING.md`.

## Licence

Apache-2.0. See `LICENSE`.
