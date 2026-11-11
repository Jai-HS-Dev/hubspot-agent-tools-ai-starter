# HubSpot Agent Tools AI Starter

Build a small tool that checks whether a sales handoff is ready and explains what is missing.

> [!NOTE]
> **A guided starter, not a production integration.** You can practice without
> a HubSpot account or credentials. To test inside HubSpot, use a developer
> test account with made-up records.

**Sample result:** `Needs review` because the `next meeting date` is missing. The checker does not read or change any contact.

## Pick Your Path

- **New to coding:** [Follow the walkthrough](docs/start-here.md), including what to install and where to type commands.
- **Building with AI:** Paste the message below into your assistant. The [full AI walkthrough](START_WITH_AI.md) explains what to do if it can't open the repo or run commands.
- **Developer:** [Code map](docs/developer-architecture.md) | [Request and response contract](docs/contracts/agent-tool-contract.md) | [Example files](examples/simple-contact-brief-agent-tool/README.md).

## Start With AI

Copy this into your AI chat. Add your goal in plain English if you already have one.

```text
Help me use this HubSpot learning starter: https://github.com/Jai-HS-Dev/hubspot-agent-tools-ai-starter
Read START_WITH_AI.md and AGENTS.md from the same version as my copy.
If you can't open them, ask for those public files. Ask what I want to build,
then guide me through the first local example with made-up data.
Don't ask for secrets, connect an account, or deploy anything. This is a prototype, not a production integration.
```

## Try It Locally

Install [Node.js 22 or newer](https://nodejs.org/en/download) if you don't have it.
On GitHub, choose **Code > Download ZIP**, extract it, and open a terminal in
the folder with this README. For a versioned copy, use a learning-starter ZIP
from [Releases](https://github.com/Jai-HS-Dev/hubspot-agent-tools-ai-starter/releases) and share its matching AI prompt.
No project packages need to be installed for this step.

```bash
npm run doctor
npm run build:example
```

In Windows PowerShell, use `npm.cmd` instead of `npm`.

**Success looks like:** `Needs review` and `next meeting date` in the output.

## Make It Yours

1. **Build a sales handoff checker:** [Run the build-along](examples/sales-handoff-checker/README.md), change a rule label, and see how to wire it into a test workflow. The [contact brief exercise](docs/worked-example.md) is another local option.
2. **Optional backend exercise:** [Read one test contact](docs/first-live-test.md) from a HubSpot developer test account. This tests a backend read; the handoff checker in step 1 does not need it.
3. **Before real use:** Review the [live-use checklist](docs/REAL_TOOL_CHECKLIST.md). Approve the account, permissions, and action first. Never paste secrets into chat or commit them.

Use this starter for something an agent should do. If people need a panel on a CRM record, [choose the card starter](docs/choose-your-path.md). Use [HubSpot's agent tool guide](https://developers.hubspot.com/docs/apps/developer-platform/add-features/agent-tools/create-an-agent-tool) to create the real tool. The sample definition files here are illustrations, not an uploadable app.

No specific AI editor or hosting provider is required. For account and authentication choices, see the [connection guide](docs/connect-to-hubspot.md). [AGENTS.md](AGENTS.md) gives assistants instructions; it does not control their permissions.

## Tests And Help

For production requirements, platform questions, or a complex build, see
[where to get help](docs/SUPPORT.md#hubspot-questions-and-production-help).

`npm test` checks the service and guidance without credentials or package installs. See [what was tested](docs/EVIDENCE.md), [troubleshooting](docs/troubleshooting.md), and the [plain-language glossary](docs/glossary.md). [Support](docs/SUPPORT.md) is best-effort. Use the [security policy](SECURITY.md) to report security issues without exposing private data.

## License And Responsibility

[MIT License](LICENSE). This project is independent: it is not affiliated
with, endorsed by, or supported by HubSpot.
The examples are not security-audited and are provided as is, without warranty. You are responsible for
[validating, securing, and operating what you build](docs/implementation-responsibility.md).
