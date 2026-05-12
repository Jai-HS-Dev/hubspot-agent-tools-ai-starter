# Recipe: Contact Summary Agent Tool

Build a HubSpot agent tool that summarizes one contact for a sales or service user.

## Best For

- Non-developers who want a first useful CRM tool.
- Vibe coders who want to customize tone and output fields.
- Developers who want a small endpoint contract before adding real CRM calls.

## Mock-First Behavior

The tool accepts a `contactId` and optional `summaryStyle`, then returns:

```json
{
  "hs_execution_state": "SUCCESS",
  "outputFields": {
    "contactName": "Sample Contact",
    "summary": "Short CRM-safe summary.",
    "recommendedNextStep": "Send a short personalized follow-up.",
    "confidence": "sample"
  }
}
```

## Files An AI Tool Should Inspect First

- `START_WITH_AI.md`
- `AGENTS.md`
- `docs/contracts/agent-tool-contract.md`
- `examples/simple-contact-brief-agent-tool/server.js`
- `examples/simple-contact-brief-agent-tool/src/app/workflow-actions/contact-brief.js`

## Safe Real HubSpot Upgrade

When moving beyond mock data, ask the AI to document:

- object type: contact
- properties: firstname, lastname, company, lifecyclestage, jobtitle, email if needed
- minimum scopes: contact read scope only, unless the tool writes data
- auth path: private app token for local developer testing or OAuth for reusable apps
- logging rule: do not log full contact records

## Prompt

```text
Use the contact summary recipe. Keep mock mode available. Build the smallest working contact summary agent tool and preserve the response contract in docs/contracts/agent-tool-contract.md. Do not ask me for secrets in chat.
```