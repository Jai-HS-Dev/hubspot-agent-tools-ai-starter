# Start Here

Use this repo as a guided planning kit before building a HubSpot agent tool.

## Step 1: Describe The Tool

Write one sentence:

```text
This agent tool helps a HubSpot user ______.
```

Examples:

- summarize recent contact activity
- create a follow-up task
- check whether a contact has missing fields
- call an external API and return a short answer

## Step 2: Decide What Data It Needs

List the minimum data the tool needs. If it does not need CRM data, do not request CRM scopes.

## Step 3: Choose Auth

For a new one-account system integration, evaluate a scoped Service Key after mock mode. For a reusable public app or multi-customer flow, OAuth is the correct pattern. Treat private app tokens as a legacy migration path.

See `docs/choose-your-path.md`.

## Step 4: Build The Smallest Version

Start with one tool, one action, one endpoint, and safe logs.

Do not build broad CRM access until the smallest version works.
