# HubSpot Agent Tools AI Starter

Build HubSpot agent tools and workflow-action-style endpoints with help from any AI coding tool.

This starter is for three kinds of users:

- Non-developers who want an AI assistant to guide them one step at a time.
- Vibe coders who want to prototype real HubSpot tools without getting trapped by unsafe token handling.
- Developers who want clean contracts, mock-first examples, and portable hosting patterns.

This repo is AI-tool-neutral and hosting-neutral. It can be used with Codex, Cursor, Claude Code, GitHub Copilot, Gemini CLI, Windsurf, or another coding assistant. It can be adapted to Cloudflare, Vercel, Netlify, Railway, Render, AWS, Azure, Google Cloud, a VPS, or HubSpot project functions where appropriate.

## Quick Start

If you are using an AI coding tool, start here:

```text
Read START_WITH_AI.md first, then README.md, AGENTS.md, docs/start-here.md, docs/non-developer-safety-gates.md, and docs/security-for-non-developers.md.

Ask me one question at a time. Start with mock data. Do not ask me to paste secrets, access tokens, refresh tokens, client secrets, portal IDs, private URLs, or customer data into chat.

Help me build a real HubSpot agent tool safely.
```

Then run the local checks:

```bash
npm run check:ai
npm run smoke:example
```

On Windows PowerShell, if `npm` is blocked by script policy, use:

```powershell
npm.cmd run check:ai
npm.cmd run smoke:example
```

## Pick Your Path

### I Am A Non-Developer

Start with these files:

- `START_WITH_AI.md`: paste this into your AI tool.
- `docs/non-developer-safety-gates.md`: plain-English safety steps.
- `docs/security-for-non-developers.md`: what never to paste into chat.
- `docs/choose-your-path.md`: helps choose mock data, OAuth, private-token testing, or another path.
- `REAL_TOOL_CHECKLIST.md`: tells you when the result is becoming a real usable tool.

Your safest path is mock data first, then choose auth and hosting after the behavior works.

### I Am Vibe Coding

Start with:

- `recipes/contact-summary/`
- `recipes/search-contacts/`
- `recipes/meeting-follow-up/`
- `.github/prompts/build-my-first-hubspot-feature.prompt.md`
- `.github/prompts/turn-mock-into-real-hubspot-api.prompt.md`

Use recipes to give your AI assistant a clear target. Ask it to keep mock mode available while it adds real HubSpot API access.

### I Am A Developer

Start with:

- `docs/developer-architecture.md`
- `docs/contracts/agent-tool-contract.md`
- `examples/simple-contact-brief-agent-tool/`
- `scripts/ai-readiness-check.js`
- `scripts/smoke-example.js`

The included example is a small Node HTTP endpoint with mock data by default. It can be adapted to serverless or long-running hosts.

## If You Are An AI Coding Tool

Read these first, in order:

1. `AGENTS.md`
2. `START_WITH_AI.md`
3. `docs/non-developer-safety-gates.md`
4. `docs/security-for-non-developers.md`
5. `docs/contracts/agent-tool-contract.md`
6. The relevant `recipes/*/README.md`

Rules:

- Ask one question at a time for non-technical users.
- Start with mock data.
- Do not ask for secrets in chat.
- Do not hard-code real portal IDs, app IDs, account IDs, private URLs, tokens, or customer data.
- Explain auth and hosting before connecting real HubSpot data.
- Keep endpoint responses compatible with `docs/contracts/agent-tool-contract.md`.
- Run `npm run check:ai` and `npm run smoke:example` after meaningful changes.

## What This Repo Is

- A beginner-friendly guide for building HubSpot agent tools.
- An AI-readable project structure with instructions for coding assistants.
- A mock-first example that can become a real endpoint.
- A security-first reference for tokens, OAuth, hosting, and environment variables.

## What This Repo Is Not

- It is not an official HubSpot product.
- It is not affiliated with, endorsed by, or sponsored by HubSpot.
- It is not a security audit, legal recommendation, or production guarantee.
- It does not include private deployment URLs, real HubSpot account IDs, access tokens, client secrets, or customer data.

## Example Included

```text
examples/simple-contact-brief-agent-tool/
```

It includes:

- HubSpot project metadata placeholders.
- A sample workflow-action-style definition.
- A small Node HTTP endpoint using mock data by default.
- A path to replace mock data with server-side HubSpot API access.

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

## Real Tool Workflow

1. Start with `START_WITH_AI.md`.
2. Choose a recipe.
3. Build and smoke-test mock behavior.
4. Choose auth and hosting using `docs/auth-options.md` and `docs/hosting-options.md`.
5. Use `.github/prompts/turn-mock-into-real-hubspot-api.prompt.md` before real API access.
6. Run `npm run check:ai` and `npm run smoke:example`.
7. Review `REAL_TOOL_CHECKLIST.md` before using real CRM data.

## Repo Map

- `AGENTS.md`: primary instructions for AI coding tools.
- `START_WITH_AI.md`: first prompt for any AI coding tool.
- `.github/prompts/`: reusable AI task prompts.
- `.github/instructions/`: GitHub Copilot guidance.
- `.cursor/rules/`: Cursor guidance.
- `.windsurfrules`: Windsurf guidance.
- `docs/`: safety, architecture, auth, hosting, and contracts.
- `recipes/`: mock-first real feature plans.
- `examples/`: runnable starter examples.
- `scripts/`: AI readiness and smoke checks.

## License And Implementation Responsibility

This starter uses the MIT license, which is a good fit for community learning, copying, remixing, and building. The license is permissive, but the generated app is still the builder's responsibility.

Before using a tool with real HubSpot data, review `docs/implementation-responsibility.md`, `REAL_TOOL_CHECKLIST.md`, and `docs/non-developer-safety-gates.md`. Builders should verify their own HubSpot developer requirements, scopes, auth model, hosting setup, data/privacy obligations, and production readiness.
