# Agent Tool Contract

Use this shape for HubSpot agent-tool-style endpoints and workflow action examples.

## Request

```json
{
  "inputFields": {
    "contactId": "123",
    "prompt": "Summarize this contact"
  },
  "object": {
    "objectId": "123",
    "objectType": "CONTACT"
  }
}
```

## Response

```json
{
  "outputFields": {
    "summary": "Short useful result for the HubSpot user"
  },
  "hs_execution_state": "SUCCESS"
}
```

## Error Response

Return helpful but limited errors. Do not include tokens, full CRM records, stack traces, or private deployment details.
