# Security For Non-Developers

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

