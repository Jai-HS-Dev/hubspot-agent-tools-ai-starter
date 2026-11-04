# Security For Non-Developers

## Optional AI Connector Access

Do not enable Sensitive Data access just to finish setup. Require explicit admin
approval, permitted data use, minimum permissions, and safe log retention first.
The beta gives Remote MCP read-only Sensitive Data engagements, not Sensitive Data
properties; Highly Sensitive Data properties remain restricted. Engagement writes
through AI connectors are blocked in accounts with Sensitive Data enabled, even if
a write tool or permission is visible. Never retry by broadening access.

These are AI-connector restrictions, not a new authentication model for your
backend app. Reconnection for this beta needs approval; do not disconnect a
working connector automatically. See [HubSpot's permission guide](https://knowledge.hubspot.com/account-security/configure-ai-connector-access-sensitive-data).

## Everyday Safety

Secrets are passwords for software.

If someone gets your HubSpot token, OAuth client secret, refresh token, hosting API key, or database URL, they may be able to access private data or change your app.

## Do Not Paste Into AI Chat

- API keys
- access tokens
- refresh tokens
- client secrets
- private app tokens
- database URLs
- customer data
- screenshots showing private account details

## Safer Places For Secrets

- your terminal prompt
- a local `.env` file that is ignored by git
- your hosting provider's secret manager
- your organization's approved password manager

## Logging Rule

Logs should help debug behavior. Logs should not store secrets, full CRM records, or sensitive customer information.

