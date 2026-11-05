# Choose Your Scope

## Start With Mock-Only Learning

Use [the same beginner path](start-here.md) first. No HubSpot app, real account,
credentials, hosting or package installation is required for the first mock result.
A local endpoint returns a sample contact brief. No tool is installed in HubSpot.

## What This Starter Owns

Run a contact-brief endpoint with synthetic data, recognize its structured response, and write a small plan for your own tool. It is a guide and a small example, not an operated service, a complete
production app, or a promise of an adapter for every AI tool and hosting provider.

## When You Do Not Need It

You only need to display a static card, use an existing supported HubSpot feature, or learn OAuth without building a tool endpoint. Do not introduce OAuth, a new backend or another starter just to finish
a static/mock example or replace an existing reviewed implementation.

## Add Only The Responsibility You Need

| Need | Smallest relevant starting point |
| --- | --- |
| Tool/workflow endpoint behavior | [Agent-tools starter](https://github.com/Jai-HS-Dev/hubspot-agent-tools-ai-starter) |
| Contact-record UI | [Contact-card starter](https://github.com/Jai-HS-Dev/hubspot-contact-card-ai-starter) |
| Reusable installation/token lifecycle learning | [OAuth starter](https://github.com/Jai-HS-Dev/hubspot-oauth-service-ai-starter) |
| Preserve an existing integration through a migration | A migration inventory and the official guide; use the companion migration starter if available |

Companions are optional references, not plug-compatible services you must install
together. Each one has its own setup and evidence limits. Preserve working app
identity, authentication and hosting unless the goal requires a change.

## Only Then Plan A Developer Trial

Choose minimum data and scopes with [auth guidance](auth-options.md) and
[hosting guidance](hosting-options.md). Confirm prerequisites in [compatibility](../COMPATIBILITY.md).
A hosted demo is still a test, not production approval. Do not connect an account,
publish, deploy, change permissions or mutate records without explicit approval
for the target and operation. Start with approved synthetic data.

## Real-Use Responsibility

An actual HubSpot caller adapter and metadata review, caller/account authorization, credentials, hosting and developer-account verification. Keep verification distinct from generated code or local tests.
Read [implementation responsibility](implementation-responsibility.md) and the
[checklist](../REAL_TOOL_CHECKLIST.md).

