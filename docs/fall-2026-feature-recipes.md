# Fall 2026 Feature Recipes

These are optional extensions. Add one at a time after the base mock and smoke tests pass.

## Task Series

Use the GA Task Series API only when the user explicitly selects recurrence.

Contract additions:

```json
{
  "recurrence": {
    "enabled": false,
    "frequency": "WEEKLY",
    "interval": 1,
    "endDate": "YYYY-MM-DD"
  }
}
```

Keep `enabled: false` by default. Include the recurrence plan in dry-run output, use an idempotency key, and show the exact future schedule before a live write.

## Activity Auto Associations

This API is public beta. Put it behind `ENABLE_ACTIVITY_AUTO_ASSOCIATIONS=false`, test in a developer account, and preserve the explicit association path as a fallback. Log which rule produced each association without logging the record contents.

## Agent Hub

Test the tool with synthetic records and prompts that cover:

- missing required input
- permission denied
- conditional property validation
- a successful read
- dry-run write preview
- duplicate retry with the same idempotency key
- live write requiring confirmation

## MCP Server Component

Platform `2026.09` can expose an existing remote MCP server through an app `mcp-server` component. Treat this as a separate integration boundary: define narrow tools, authenticate users, validate every argument, and require HubSpot review before marketplace distribution.

