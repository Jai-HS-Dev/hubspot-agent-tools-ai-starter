# Simple Contact Brief Agent Tool

This example shows the smallest useful shape of a HubSpot agent tool:

1. HubSpot calls an HTTPS endpoint.
2. The endpoint validates input.
3. The endpoint returns structured `outputFields`.
4. A HubSpot agent can use those fields to answer the user.

The example uses mock data by default. That makes it safe for learning and easy for AI coding tools to adapt.

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

Replace that with the user's deployed HTTPS endpoint before uploading to HubSpot.

For real CRM access, add server-side OAuth or another reviewed server-side token strategy. Do not expose access tokens in browser code, metadata files, or AI chat.

