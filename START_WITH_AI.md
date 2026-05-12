# Start With AI

Paste this into Codex, Cursor, Claude Code, GitHub Copilot, Gemini CLI, Windsurf, or another AI coding tool:

```text
I am using this HubSpot starter repository to build something real.

Read README.md, AGENTS.md, docs/start-here.md, docs/choose-your-path.md, docs/security-for-non-developers.md, and docs/agent-tool-blueprint.md before making changes.

Ask me one question at a time. Start with mock data unless I explicitly choose real HubSpot data. Do not ask me to paste secrets, access tokens, refresh tokens, client secrets, portal IDs, private URLs, or customer data into chat.

Help me design a HubSpot agent tool or workflow action by choosing:
- what the tool does
- what inputs it needs
- what HubSpot data it needs
- whether it uses mock data, a private app token for local testing, or OAuth
- where the server endpoint should run

Before editing code, create a short tool blueprint. After editing, tell me what changed, what command to run, and what security step I should verify.
```

## Safe Default

Build with mock data first, then replace the mock HubSpot client with a server-side integration only after auth and scopes are clear.
