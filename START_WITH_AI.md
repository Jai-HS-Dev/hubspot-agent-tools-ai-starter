# Start With AI

You can start with the public GitHub link. You do not need a HubSpot login,
credentials, an MCP connection or a hosting account for the first exercise.

| What your assistant can do | How to start |
| --- | --- |
| Read GitHub links | Paste the prompt below with the public repository link. Ask it to name the files it could read. |
| Read project folders | Download the public repository ZIP, extract it, and open that folder in your coding tool. Then paste the prompt. |
| Only read chat or attachments | Share the public `README.md`, `START_WITH_AI.md` and `AGENTS.md`. Share the public walkthrough if asked. Never attach a private project, `.env` file or CRM export. |

Use the same version for your download and the files your assistant reads. If
you downloaded a release ZIP, share its link to this prompt or use the public
files from your extracted folder. Don't silently switch to the default branch.
If the assistant cannot run commands, run them yourself and share only the
success line or a sanitized error.

```text
Help me use the HubSpot Agent Tools AI Starter. This is a guided starter, not a production integration.
Public repository: https://github.com/Jai-HS-Dev/hubspot-agent-tools-ai-starter

First read AGENTS.md, README.md and docs/start-here.md. If you can't read them,
say which file you need. Don't guess at repository commands or claim you ran them.

Start by asking me: "What should your tool help a HubSpot user do?"
If I don't have an idea yet, offer the supplied example. Explain terms as needed.
Use the first build-along in the local walkthrough. State my goal, the expected
result, and what needs separate approval before any HubSpot or hosting step.
Explain the command, where to run it,
and the line or screen that means it worked. If I can't run it yet, help me plan
from the example and mark the result as not run.

When I can recognize the sample result, propose one small change, the file to
edit, and how to check it. Read the relevant contract and example README before
editing. Keep the local sample working.

Follow AGENTS.md. No secrets or customer data in chat. Sharing this repo is not
approval to install packages, sign in, change permissions, publish, deploy, or
touch live data. Finish with what actually ran, what is still unverified, and
one next decision.
```

**Try saying:** "Tell me whether a made-up sales handoff is ready and what is missing."

**First finish line:** Run `npm run build:example` using [the walkthrough](docs/start-here.md).
Look for `Needs review`. See why the sample handoff needs review, change one rule label, and check that the decision still makes sense. No tool is installed in HubSpot.

**A later decision:** [Try the rules in an off draft workflow](examples/sales-handoff-checker/README.md#2-run-the-same-rules-in-a-draft-workflow) if the developer test account supports it. A registered Breeze tool needs a separate, signed endpoint test.

**Optional:** [Try the contact-brief backend mock](docs/worked-example.md) if you want a tool that looks up data.

Report actual results separately from instructions or plans. See
[what was tested](docs/EVIDENCE.md) for this starter's verification limits.

[AGENTS.md](AGENTS.md) holds the operating instructions; README.md explains scope.
Client-specific files should point there, not maintain competing rule sets.
No particular AI subscription, HubSpot CLI or MCP connection is required for the mock demo.
