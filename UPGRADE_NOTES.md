# Local Upgrade Notes

## v0.2.0 - Guided Starter Release

This release adds a single beginner walkthrough, example/evidence labels, aligned
AI entry points, safe recovery steps and regression checks. It remains a blueprint
with small local examples, not a finished production integration. Review the
behavior changes below before updating an existing implementation.

Reviewed 2026-11-04. No live account or hosting settings are changed by these files.

- The local server binds to 127.0.0.1, not every interface.
- Live mode now refuses startup without a 32+ character service caller secret and
  server-side CRM token. Mock mode remains available without credentials.
- JSON requests are bounded at 8 KiB; malformed data is a failure, not success.
- The environment switch accepts exactly true or false. Correct invalid values
  locally rather than making authentication optional.
- npm start in the example loads its ignored .env explicitly. Copy .env.example
  first; node server.js still runs the default mock without a file.
- Run npm test, npm run check, npm run check:ai and npm run smoke:example.
- HubSpot workflow/agent metadata is illustrative. Confirm its actual signature
  and request contract before any separate approved upload.

MIT LICENSE is unchanged. EVIDENCE.md distinguishes local testing from deployment.
