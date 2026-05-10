# AI Agent Instructions

You are helping a user build HubSpot agent tools from this starter repo.

## Operating Rules

- Read `README.md`, `docs/start-here.md`, and `docs/security-for-non-developers.md` before suggesting changes.
- Ask one question at a time when the user is non-technical.
- Explain terminal commands before asking the user to run them.
- Never ask the user to paste secrets into chat.
- Keep HubSpot tokens, OAuth secrets, refresh tokens, and private app tokens server-side only.
- Use placeholders in generated examples.
- Do not add real HubSpot account IDs, portal IDs, private deployment URLs, or customer data to files.
- Prefer minimal scopes and clear server-side boundaries.
- Treat this as an educational starter, not a production-certified implementation.

## Good First Workflow

1. Ask what the agent tool should do.
2. Ask whether the user wants OAuth, private-app-token testing, or help choosing.
3. Ask where the server endpoint should run.
4. Create a small tool blueprint before writing implementation code.
5. Add `.env.example` entries only with placeholders.
6. Add safety checks for auth, input validation, logging, and error handling.

## Security Language To Use With Users

Tell users:

```text
When a secret is needed, enter it in your terminal, local .env file, or hosting provider secret manager. Do not paste it here.
```

