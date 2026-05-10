# Choose Your Path

## Path A: Learning Locally

Use this when you are experimenting in your own HubSpot test account.

- Use local environment variables.
- Use fake sample data where possible.
- Keep tokens out of chat and git.
- Do not connect real customer data.

## Path B: Team Demo

Use this when showing a prototype to teammates.

- Use a test HubSpot account.
- Use hosted secrets.
- Add clear logging limits.
- Validate scopes and permissions.

## Path C: Real Users

Use this only after review.

- Use OAuth or another reviewed server-side auth pattern.
- Validate HubSpot scopes.
- Review privacy, compliance, and hosting settings.
- Add monitoring, rate limits, audit logging, and incident response.

