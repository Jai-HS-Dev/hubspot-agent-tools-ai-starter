# First Test With HubSpot

> **Status:** written 2026-11-10 from this repository's example and HubSpot's
> official documentation. The maintainer has **not yet run these steps end to
> end**. Use them as a checklist to confirm, not as a guarantee, and record what
> really happened.

## What This Is

The made-up data demo on your computer proves nothing about HubSpot. This is the
smallest real test: the example service, still running only on your computer,
reads **one test contact** from a free developer test account. It writes nothing.
It is optional. You can learn a lot and stop before this step.

This test does not install an agent tool in HubSpot. The example's tool
definition files are illustrations; a real tool is created with HubSpot's
official tools and needs a caller check that this starter does not include.

## Before You Start

- [ ] You finished [the walkthrough](start-here.md) and the mock example passed.
- [ ] You have a developer test account that holds no real customer data, with
      one made-up contact in it. See [choosing where to test](connect-to-hubspot.md).
- [ ] The account owner approves two things, for that test account only:
      creating a read-only credential for contacts, and using it on this computer.

If any box is unchecked, stop here. Nothing is wrong; you are simply not ready.

## Steps

1. **Choose how the service signs in.** Read
   [authentication choices](auth-options.md) and section 3 of the
   [connection guide](connect-to-hubspot.md). Pick the smallest option that can
   read contacts in one account, with read-only contact access and nothing else.
2. **Read the example's live-read notes.** The
   [HubSpot setup notes](../examples/simple-contact-brief-agent-tool/README.md#hubspot-setup-notes)
   explain the two values the service needs and why startup stops without them.
3. **Put the values in a local file, never in chat.** In the example folder, copy
   `.env.example` to `.env` (Git ignores it). Set `USE_MOCK_DATA=false`, a random
   `AGENT_TOOL_SHARED_SECRET` of at least 32 characters, and the read-only
   credential as `HUBSPOT_ACCESS_TOKEN`. Type them into the file yourself. Do not
   paste them into an AI chat, an issue or a screenshot.
4. **Start the service and ask about your test contact.** Run `npm start` in the
   example folder. It listens only on your own computer. Send one request with
   the test contact's numeric ID and the secret in the `x-agent-tool-secret`
   header. The example README shows the request shape.
5. **Check the answer.** Success is a brief that names your made-up test contact
   with `confidence` set to `medium`. A request without the secret must be
   refused.
6. **Stop the service** with Ctrl+C, then **write down what happened** using the
   template below. If you are finished, delete the `.env` file and remove the
   credential in HubSpot.

## Record The Result

Keep the full note private. Add only a short, cleaned-up summary to
[EVIDENCE.md](../EVIDENCE.md).

```text
Date:
Tested by (role, not a name):
Account type: developer test account
Sign-in option used, and its permissions:
Tool versions (Node.js):
What the service returned for the test contact:
Was a request without the secret refused:
What I had to change to make it work:
Not tested:
```

Leave out account IDs, people's names, keys, and screenshots of real records.

## If Something Fails

Stop and read [troubleshooting](troubleshooting.md). Do not remove the secret
check, ask for wider permissions, or move to your everyday business account to
get past an error. Put the service back on made-up data with `USE_MOCK_DATA=true`.

## What This Does Not Prove

Reading one test contact is a learning milestone. It is not an installed agent
tool, not a security review and not approval for real customers. To create a
real tool, follow HubSpot's guide to
[creating an agent tool](https://developers.hubspot.com/docs/apps/developer-platform/add-features/agent-tools/create-an-agent-tool).
Before real use, go through the [live-use checklist](../REAL_TOOL_CHECKLIST.md)
and [implementation responsibility](implementation-responsibility.md).
