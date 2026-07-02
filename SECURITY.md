# Security Policy

Please report security issues privately by opening a GitHub security advisory or contacting the maintainers.

## Supported versions

The `main` branch is the supported development line until the first stable release.

## Security controls in this repository

- Zod validation on API request bodies.
- Bounded string and number inputs for public routes.
- In-memory rate limiting for API endpoints.
- Structured JSON logs.
- Audit events for sensitive actions.
- Human approval guard for high-impact scenarios.
- Docker container runs as a non-root user.
- Environment variables are documented in `.env.example` and real secrets must not be committed.

## Production requirements

Before storing real customer documents or company data:

- Add authentication and RBAC.
- Use managed Postgres or Supabase instead of JSON storage.
- Use private object storage for uploaded documents.
- Enable encryption at rest and in transit.
- Forward logs to a monitored SIEM or log platform.
- Enable CodeQL, dependency review and Dependabot.
- Configure backups and restore drills.

## Known limitations

- Local JSON storage is not suitable for multi-user production.
- Native auth and RBAC are not yet implemented.
- Document parsing is registration-only until a parser pipeline is added.
