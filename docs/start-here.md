# Your First Working Result

## What You Will Finish

Run a contact-brief endpoint with synthetic data, recognize its structured response, and write a small plan for your own tool.

This finishes a **local learning result and a next-step plan**, not a production
integration. A local endpoint returns a sample contact brief. No tool is installed in HubSpot. No HubSpot account, credentials, hosting or package
installation is needed for this first result.

A mock uses made-up data. A backend runs server-side. A smoke check is a short
automated test that something basic works.

## 1. Open The Project And Describe Your Goal

If your editor already has the repository open, keep using that folder. For a
published copy on GitHub, use **Code > Download ZIP**, extract it, then open the
extracted folder as a project. No Git installation is required for this route.
[GitHub download instructions](https://docs.github.com/en/repositories/working-with-files/using-files/downloading-source-code-archives).

The repository root contains README.md and package.json. It is not the ZIP, its
parent folder or an examples subfolder. Open a terminal there; in VS Code use
**Terminal > New Terminal**. Type commands in that terminal, not the AI chat.

Use [START_WITH_AI.md](../START_WITH_AI.md), then describe your goal in everyday
language. Your assistant should first ask: "What should your tool help a HubSpot user do?" No MCP connection or
account access is needed to help with the local example.

Check that Node.js (which runs the example) and npm (which runs named scripts)
are available:

```bash
node --version
npm --version
```

In Windows PowerShell use `npm.cmd --version` if npm.ps1 is blocked.
The local examples declare Node.js 22+.
This walkthrough was checked with Node.js 24.22.1; that is separate from managed
HubSpot or provider runtimes. If a command is missing, stop and ask for installation
guidance. Use a supported Node.js 24 release from the [official downloads](https://nodejs.org/en/download)
to reproduce this path, then reopen the terminal. Do not run random install scripts
or weaken execution policy.

## 2. Run The Mock Example

From the repository root, check prerequisites, then run the short example:

```bash
npm run doctor
npm run smoke:example
```

Windows PowerShell equivalent:

```powershell
npm.cmd run doctor
npm.cmd run smoke:example
```

Do not run npm install, create an app or enter credentials to make this step work.
The smoke script starts a local server, sends its sample requests and closes the server automatically.

### Recognize Success

The doctor reports `"ok": true`.
The example ends with:

```text
agent smoke example passed.
```

Other lines, timings and ports may differ. The terminal prompt returns when the
short check finishes. The smoke check leaves no server running.
If you separately start a long-running example, press **Ctrl+C in that example's
terminal** to stop it; do not stop unrelated programs.

You may stop here: the first local result is complete. A local endpoint returns a sample contact brief. No tool is installed in HubSpot.
If it fails, use [troubleshooting](troubleshooting.md). Never disable authentication,
grant extra scopes or enter production credentials just to make a check pass.

## 3. Choose Authentication And Hosting Only If Needed

Read [which path fits](choose-your-path.md). You do not need all four starters.
You only need to display a static card, use an existing supported HubSpot feature, or learn OAuth without building a tool endpoint.

For real work, identify the minimum data, access and existing host/auth first.
Preserve working choices unless a change is necessary. Use [auth choices](auth-options.md),
[hosting choices](hosting-options.md) and [compatibility](../COMPATIBILITY.md).
Provider options are alternatives, not ready-made adapters for every host.

Do not connect anything yet. Obtain explicit approval for the exact account,
operation and synthetic test data before any live trial. Passing mock tests is
not permission to read customer data, create records, publish or deploy.

## 4. Build One Small Change

Make a [blueprint or plan](../docs/agent-tool-blueprint.md): one user goal, required inputs/outputs,
a safe failure and an acceptance check. Have the AI explain its changes before
a small, approved local edit. Keep mock mode available.
Use the selected example README rather than treating every recipe as implemented code.

Check [example labels](../examples/catalog.json) and [evidence](../EVIDENCE.md).
Do not upload an illustrative folder or deploy an in-memory teaching service just
because it contains configuration files.

## 5. Verify And Record What Is Still Unfinished

Repeat the mock check after editing. Follow the selected example's setup before
the full local checks:

```bash
npm run check:ai
npm run check
npm test
```

Use npm.cmd in Windows PowerShell. These local checks need no third-party packages.
Report failures and skipped tests honestly; a skip is not passed coverage.

### Starter Walkthrough Complete

- You can explain your goal and recognize the expected local result.
- You know how to stop a manually started example.
- You can say which checks ran and which did not.
- You chose one next step, or deliberately stopped at mock-only learning.
- You understand that installed-account and production behavior remain unverified.

A real implementation still needs: An actual HubSpot caller adapter and metadata review, caller/account authorization, credentials, hosting and developer-account verification.
Review [the live-use checklist](../REAL_TOOL_CHECKLIST.md) and
[implementation responsibility](implementation-responsibility.md) before real use.

Report **generated**, **locally tested**, **developer-account verified** and
**deployed** separately, with evidence and remaining unknowns. Keep customer data
out of reports; do not commit filled private plans or environment files.
