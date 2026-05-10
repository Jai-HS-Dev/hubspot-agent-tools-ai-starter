# Agent Tool Blueprint

Copy this section into a new planning note before writing code.

## Tool Name

`example_tool_name`

## User Goal

What should the HubSpot user be able to do?

## Inputs

- Required input:
- Optional input:

## HubSpot Data Needed

- Object type:
- Properties:
- Scopes:

## Server Endpoint

```text
POST /api/agent-tools/example
```

## Security Checks

- Validate request method.
- Validate required input.
- Keep auth server-side.
- Do not log tokens or full CRM records.
- Return helpful but limited errors.

