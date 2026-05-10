# AI Customization Notes

When adapting this example for a user:

1. Keep mock mode on until the user confirms they are ready to connect real HubSpot data.
2. Ask which hosting service they prefer.
3. Replace `https://your-host.example.com` only after the user has a real HTTPS endpoint.
4. Do not ask the user to paste secrets into chat.
5. Add only the minimum HubSpot scopes needed.
6. Keep logs free of tokens and full CRM records.

Useful first prompt:

```text
Read this example and help me adapt it into one HubSpot agent tool. Ask one question at a time. Keep mock data on until I confirm I am ready to connect real HubSpot data.
```
