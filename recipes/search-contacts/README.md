# Recipe: Search Contacts Agent Tool

Build a tool that searches contacts by a safe query and returns a small list of matches.

## Mock-First Output

Return only the fields the user needs to choose a record:

```json
{
  "hs_execution_state": "SUCCESS",
  "outputFields": {
    "matchesJson": "[{\"id\":\"sample-1\",\"name\":\"Sample Contact\",\"company\":\"Example Company\"}]",
    "matchCount": "1",
    "status": "sample"
  }
}
```

## Security Notes

- Validate and limit the query length.
- Return a small result set.
- Do not return full CRM records.
- Do not log search terms if they may contain private customer information.

## Prompt

```text
Use the search contacts recipe. Create a mock-first search contacts tool with input validation, small result limits, and a clear path to real HubSpot CRM search later. Do not ask me for tokens in chat.
```