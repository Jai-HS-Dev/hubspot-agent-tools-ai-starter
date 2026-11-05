const { test } = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { once } = require('node:events');
const path = require('node:path');
const modulePath = path.resolve(__dirname, '../examples/simple-contact-brief-agent-tool/server.js');

test('live startup fails without caller credentials', () => {
  const run = spawnSync(process.execPath, ['-e', 'require(process.argv[1]).startServer(0)', modulePath], {
    env: { ...process.env, USE_MOCK_DATA: 'false', AGENT_TOOL_SHARED_SECRET: '', HUBSPOT_ACCESS_TOKEN: '' }, encoding: 'utf8', timeout: 5000
  });
  assert.notEqual(run.status, 0); assert.match(run.stderr, /Live mode requires AGENT_TOOL_SHARED_SECRET/);
});
test('live startup also refuses a missing CRM token', () => {
  const run = spawnSync(process.execPath, ['-e', 'require(process.argv[1]).startServer(0)', modulePath], {
    env: { ...process.env, USE_MOCK_DATA: 'false', AGENT_TOOL_SHARED_SECRET: 'x'.repeat(32), HUBSPOT_ACCESS_TOKEN: '' }, encoding: 'utf8', timeout: 5000
  });
  assert.notEqual(run.status, 0); assert.match(run.stderr, /server-side HUBSPOT_ACCESS_TOKEN/);
});
test('mock endpoint, auth and input contract', async t => {
  process.env.USE_MOCK_DATA = 'true';
  process.env.AGENT_TOOL_SHARED_SECRET = 'synthetic-service-caller-secret';
  const { startServer } = require(modulePath);
  const server = startServer(0); await once(server, 'listening');
  const base = 'http://127.0.0.1:' + server.address().port;
  assert.equal(server.address().address, '127.0.0.1');
  t.after(() => new Promise(resolve => { server.closeAllConnections(); server.close(resolve); }));
  const post = (body, auth = true) => fetch(base + '/api/contact-brief', {
    method: 'POST', headers: { 'content-type': 'application/json', ...(auth ? { 'x-agent-tool-secret': process.env.AGENT_TOOL_SHARED_SECRET } : {}) }, body
  });
  await t.test('configured secret is enforced even in mock mode', async () => assert.equal((await post('{}', false)).status, 401));
  await t.test('valid sample returns success', async () => {
    const response = await post('{"inputFields":{"contactId":"sample-1"}}');
    assert.equal(response.status, 200); assert.equal((await response.json()).hs_execution_state, 'SUCCESS');
  });
  await t.test('missing input is a failure', async () => assert.equal((await post('{}')).status, 400));
  await t.test('malformed and oversized input never reports success', async () => {
    for (const body of ['null', '{', 'x'.repeat(8193)]) assert.ok((await post(body)).status >= 400);
  });
});
