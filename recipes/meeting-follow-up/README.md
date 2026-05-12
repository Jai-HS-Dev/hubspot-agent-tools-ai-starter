# Recipe: Meeting Follow-Up Agent Tool

Build a tool that drafts a follow-up after a meeting.

## Mock-First Inputs

- `contactId`
- `meetingNotes`
- `tone`

## Mock-First Output

```json
{
  "hs_execution_state": "SUCCESS",
  "outputFields": {
    "draft": "Thanks for your time today...",
    "nextStep": "Review and send from your email tool.",
    "status": "draft_only"
  }
}
```

## Safety Notes

- Treat meeting notes as sensitive.
- Do not store notes unless the user explicitly builds that feature.
- Avoid sending emails automatically in the first version.
- Use draft-only output until the user intentionally adds write scopes.

## Prompt

```text
Use the meeting follow-up recipe. Build draft-only behavior first. Do not send emails or write CRM notes until I explicitly choose write scopes and deployment security.
```