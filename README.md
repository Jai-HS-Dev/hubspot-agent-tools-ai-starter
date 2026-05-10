# HubSpot Agent Tools AI Starter

This is a community starter kit for learning how to build HubSpot agent tools with help from an AI coding assistant.

It is written for developers, non-developers, and vibe coders who want a safe starting point they can give to Codex, Claude Code, GitHub Copilot, Gemini CLI, Cursor, Windsurf, or another coding assistant.

## What This Repo Is

- A beginner-friendly guide for planning and building HubSpot agent tools.
- An AI-readable project structure with instructions for coding assistants.
- A security-first checklist for working with HubSpot tokens, OAuth, hosting, and environment variables.
- A starter reference, not a production-certified app.

## What This Repo Is Not

- It is not an official HubSpot product.
- It is not affiliated with, endorsed by, or sponsored by HubSpot.
- It is not a security audit, legal recommendation, or production guarantee.
- It does not include private deployment URLs, real HubSpot account IDs, access tokens, client secrets, or customer data.

## Start Here

Give your AI coding tool this instruction:

```text
Read this repository before making changes. Start with README.md, AGENTS.md, docs/start-here.md, and docs/security-for-non-developers.md.

Walk me step by step to build a HubSpot agent tool. Ask one question at a time. Do not ask me to paste secrets, tokens, client secrets, refresh tokens, portal IDs, or customer data into chat. When secrets are needed, tell me how to enter them in my terminal, local .env file, or hosting provider secret manager.
```

## Your First Decisions

Before building, decide:

- What should the agent tool help a HubSpot user do?
- Does it need HubSpot data access?
- Will it use OAuth, a private app token for local testing, or another server-side auth method?
- Where will the server-side endpoint run?
- What data should never be logged or shown to the browser?

See [docs/choose-your-path.md](docs/choose-your-path.md).

## Security First

Never paste these into an AI chat:

- HubSpot private app tokens
- OAuth client secrets
- OAuth refresh tokens or access tokens
- Hosting provider API tokens
- Database URLs
- Customer names, emails, phone numbers, notes, deals, tickets, or CRM exports

Use placeholders in chat, for example:

```text
HUBSPOT_CLIENT_SECRET=<stored in hosting secret manager>
```

## Suggested Local Tools

Your AI assistant may ask you to install or update the HubSpot CLI:

```bash
npm install -g @hubspot/cli@latest
```

This installs HubSpot's command-line tool so your terminal can create, validate, and upload HubSpot project files. Do not paste access tokens into the AI chat. Follow terminal prompts or HubSpot's current authentication flow.

## Repo Contents

- `AGENTS.md`: instructions for AI coding agents.
- `docs/start-here.md`: beginner workflow.
- `docs/choose-your-path.md`: decisions before building.
- `docs/security-for-non-developers.md`: plain-English security guide.
- `docs/agent-tool-blueprint.md`: planning template for a new agent tool.
- `.github/prompts/start-here.prompt.md`: prompt you can give to an AI coding tool.
- `.github/ISSUE_TEMPLATE/`: issue forms that warn users not to share secrets.

## Production Reminder

Before using any code or generated tool with real customer data, validate your own HubSpot scopes, hosting security, authentication, logging, privacy requirements, data retention, and compliance needs.

