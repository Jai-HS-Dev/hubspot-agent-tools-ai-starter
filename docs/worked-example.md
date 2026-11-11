# Worked Exercise: A Sales Follow-Up

**Scope:** Local synthetic data only. No HubSpot install, account access or model API.
You will adapt one useful response without changing the endpoint or auth contract.

## 1. See The Existing Result

From the repository root:

```bash
npm run example:guided
```

Use `npm.cmd` on Windows. No package install or credentials are required.
The named check is:

```text
worked sales follow-up preserves the endpoint contract and rejects missing input
```

It sends a made-up contact ID to the loopback server and checks a successful brief,
sample confidence and rejection of missing input. The server closes automatically.
This is a deterministic example, not an LLM-generated summary.

## 2. Make One Small Change In Your Copy

Open `tests/worked-example.test.js`. Change the expected
`recommendedNextStep` from:

```text
Send a short personalized follow-up and ask one discovery question.
```

to:

```text
Confirm the next meeting before sending a follow-up.
```

Run the command again. An assertion failure is expected: the requirement changed,
but the implementation has not.

In `examples/simple-contact-brief-agent-tool/server.js`, find
`buildContactBrief` and change only the same no-open-deals message to match.
Do not change request validation, authentication or mock mode.

Run `npm run example:guided`, then `npm test`. Both should pass.
The first command is a focused check, not the whole security suite.

## 3. What You Have Built

A tiny follow-up policy behind an existing request/response contract. You can
explain the desired behavior, identify the two files involved and recognize a
failing acceptance test before fixing the implementation.

For a real goal, extend [the blueprint](agent-tool-blueprint.md) with who uses
the result, required fields, a safe failure, one acceptance check and what is
out of scope. Keep write actions and model/API calls outside this exercise.

## 4. Decide On A HubSpot Trial Separately

A local brief is not an installed agent tool. Use [the connection guide](connect-to-hubspot.md)
for caller adapters, minimal scopes, account/user authorization and approved
synthetic account testing. Preserve existing auth/hosting where appropriate.

If setup or tests fail, use [troubleshooting](troubleshooting.md). Never paste
secrets or customer records to get help. Report the actual test result and
[remaining evidence limits](EVIDENCE.md).
