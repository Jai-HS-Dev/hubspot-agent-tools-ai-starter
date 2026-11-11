# Simple Contact Brief Agent Tool

**Example status:** Runnable locally.
**Local check:** `npm run smoke:example` from the repository root, after the documented setup.
**Developer-account verification:** Not verified.
**Production prerequisites:** Review [the checklist](../../docs/REAL_TOOL_CHECKLIST.md) and [evidence](../../docs/EVIDENCE.md); no production implementation is included.

Mock HTTP endpoint; workflow/tool metadata is illustrative, not an installed tool.


This example shows the smallest useful shape of a HubSpot agent tool:

1. A reviewed server-side caller calls an HTTPS endpoint.
2. The endpoint validates input.
3. The endpoint returns structured `outputFields`.
4. A HubSpot agent can use those fields to answer the user.

The example uses mock data by default. That makes it safe for learning and easy for AI coding tools to adapt.

This is a local, trusted-service endpoint, not an already installed HubSpot tool.
See [evidence and support](../../docs/EVIDENCE.md). It binds only to 127.0.0.1.

## Files

- `server.js`: hosting-neutral Node HTTP server.
- `src/app/app-hsmeta.json`: generic app metadata placeholder.
- `src/app/workflow-actions/contact-brief-hsmeta.json`: sample tool/action metadata.
- `src/app/workflow-actions/contact-brief.js`: optional local HubSpot serverless function shape.
- `.env.example`: placeholder-only environment variables.

## Try Locally

```bash
cp .env.example .env
npm start
```

In another terminal:

```bash
curl -X POST http://localhost:3000/api/contact-brief \
  -H "content-type: application/json" \
  -d "{\"inputFields\":{\"contactId\":\"demo-contact-001\",\"briefType\":\"sales\"}}"
```

Do not paste real HubSpot tokens into AI chat. If you later connect real HubSpot data, put secrets in `.env` or your hosting provider secret manager.

## Hosting

This example is intentionally not tied to one host. An AI coding tool can adapt `server.js` to:

- Cloudflare Workers
- Vercel Functions
- Railway
- Render
- AWS Lambda
- Azure Functions
- Google Cloud Run or Cloud Functions
- another Node-compatible host

Use `https://your-host.example.com/api/contact-brief` as a placeholder until the user has a real deployed URL.

## HubSpot Setup Notes

The metadata file contains:

```json
"actionUrl": "https://your-host.example.com/api/contact-brief"
```

The metadata is illustrative, not a complete uploadable project. Before registering
an action, implement and test HubSpot's exact signature version and request envelope
on a separate route. A shared-secret service route alone does not authenticate a
HubSpot workflow/agent call. Do not publish it by just replacing the action URL.

For a trusted server-to-server live read, set USE_MOCK_DATA=false and keep a random
AGENT_TOOL_SHARED_SECRET (32+ characters) and HUBSPOT_ACCESS_TOKEN server-side.
Startup fails without either. Configure the trusted service to send
x-agent-tool-secret; never embed this secret in a HubSpot card or browser code.
The token must have contact-read scope for the intended account. This example
grants that trusted caller contact reads in that account, not per-user permissions.
Reusable/multi-account apps need tenant-bound OAuth retrieval, refresh and caller
authorization. Do not deploy environment tokens as a public multi-tenant broker.

Run npm.cmd test from the repository root for auth/input/startup regression tests.
Add HTTPS, rate limits, safe audit logs and the selected host's adapter before an
approved deployment. The card companion demonstrates v3-signed card requests;
other HubSpot callers must use their own documented contract.

For real CRM access, add server-side OAuth or another reviewed server-side token strategy. Do not expose access tokens in browser code, metadata files, or AI chat.

