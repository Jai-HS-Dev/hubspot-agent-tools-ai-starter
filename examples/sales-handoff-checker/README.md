# Build A Sales Handoff Checker

**Example status:** Runnable locally.
**Developer-account verification:** Not verified.
**Production prerequisites:** See [implementation responsibility](../../docs/implementation-responsibility.md)
and [where to get help](../../docs/SUPPORT.md).

Build a tool that checks a team's handoff rules and explains what is missing.
It uses answers supplied to it, not CRM records. It does not send a message,
update a record, or call an AI model or external service.

## 1. Try Three Answers

From the starter root, run these commands. Use `npm.cmd` on Windows.
No accounts, credentials, packages, or hosting are needed.

| Command | Expected result |
| --- | --- |
| `npm run build:example` | `Needs review`, missing `next meeting date`. |
| `npm run build:example -- yes yes` | `Ready`, no missing items. |
| `npm run build:example -- yes maybe` | Error. The tool does not guess. |

Customize the meeting-date requirement by changing its label in
[`check-handoff.cjs`](check-handoff.cjs). Rerun the first two commands to see
that the wording changed without changing the decision or output fields.

## 2. Run The Same Rules In A Draft Workflow

If the test account supports HubSpot's [built-in Custom code action](https://developers.hubspot.com/docs/api-reference/legacy/automation/workflow-actions/custom-code-actions),
you can test this example without registering an app or hosting an endpoint.
This is a workflow exercise, not a registered Breeze agent tool.

1. With approval, create a draft contact workflow in a developer test account.
   Add just one **Custom code** action. Leave the workflow off.
2. Paste the contents of [`check-handoff.cjs`](check-handoff.cjs) into the
   Node.js editor. Do not add secrets or map record properties. Define two
   string outputs: `decision` and `missingItems`.
3. Use the action's **Test** option with a synthetic contact. Expect
   `Needs review` and `next meeting date` from the sample answers in the code.
   Change the sample's `meetingDateConfirmed` to `yes` and run the test again.
   Expect `Ready` and an empty missing-items field. Keep the workflow off.

If the Custom code action is unavailable in your test account, stop after
the local result. Do not buy a plan or use a live account just for this example.

## 3. Register A Custom Agent Tool When Needed

This is real decision logic with an illustrative action definition, not a
complete deployed tool. [HubSpot's setup guide](https://developers.hubspot.com/docs/apps/developer-platform/add-features/agent-tools/create-an-agent-tool)
explains project setup, eligibility, and how to add a workflow action.

1. First decide whether built-in workflow conditions already solve the problem.
   If you need a custom tool, choose an approved HTTPS runtime with
   [the hosting guide](../../docs/hosting-options.md). No vendor is required.
2. A developer should wire the endpoint to call
   `checkHandoff(verifiedRequest.inputFields)` and send the returned JSON
   envelope unchanged: it already contains `hs_execution_state` and
   `outputFields`. Before processing inputs, bound the request size, verify
   [HubSpot's signature for the action](https://developers.hubspot.com/docs/apps/developer-platform/add-features/agent-tools/reference#verifying-agent-tool-request-origin)
   on the raw request, and check the permitted test account in the verified
   `origin`. Use the signature version documented for this action, not an
   app-card or unrelated webhook verifier. Reject invalid input without echoing
   it. No server or signing adapter is supplied here. Do not point a public
   URL at the local mock.
3. Adapt [the action metadata](handoff-action.example.json) in a dedicated
   test project with the approved endpoint. Validate it and request approval
   before deploy or installation. Keep secrets server-side and never add
   a secret as an input field. The checker does not need CRM API access.
4. On a synthetic contact, invoke the registered action once in an isolated test workflow
   with no other actions. Verify the two expected outputs and malformed-input
   handling. A workflow result does not prove Breeze tool availability;
   use the Developer Tool Testing Agent separately if enabled.

Do not remove signature checks or enable a live workflow to get past a failure.
Ask a developer to help if you cannot verify the inbound request or test account.
