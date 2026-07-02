# Changelog

All notable changes to RaeburnAI Business Twin are documented here.

## 0.1.0 - 2026-07-02

### Added

- Next.js application shell and dashboard.
- Business twin domain model for teams, roles, workflows and KPIs.
- Scenario engine for capacity, volume and automation modelling.
- Document registration API.
- Health check endpoint.
- JSON development store.
- Structured logging, audit events, rate limiting and approval guard.
- Unit tests and UI smoke test.
- Docker and Docker Compose.
- OpenAPI, architecture, security and contribution documentation.

### Changed

- Replaced placeholder lint script with real ESLint command.
- Replaced floating dependency versions with pinned versions.

### Known gaps

- Production database adapter is documented but not yet implemented.
- Authentication and RBAC are documented as required before public production exposure.
- CodeQL and dependency-review workflow writes were blocked by connector safety checks and should be added manually.
