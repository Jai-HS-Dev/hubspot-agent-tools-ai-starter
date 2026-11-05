const { test } = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');

test('worked sales follow-up preserves the endpoint contract and rejects missing input', async t => {
  process.env.USE_MOCK_DATA = 'true';
  process.env.AGENT_TOOL_SHARED_SECRET = '';
  const { startServer } = require('../examples/simple-contact-brief-agent-tool/server');
  const server = startServer(0);
  await once(server, 'listening');
  t.after(() => new Promise(resolve => { server.closeAllConnections(); server.close(resolve); }));
  const post = body => fetch('http://127.0.0.1:' + server.address().port + '/api/contact-brief', {
    method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body)
  });
  const result = await post({ inputFields: { contactId: 'sample-1', briefType: 'sales' } });
  assert.equal(result.status, 200);
  const data = await result.json();
  assert.equal(data.hs_execution_state, 'SUCCESS');
  assert.equal(data.outputFields.confidence, 'sample');
  assert.equal(data.outputFields.recommendedNextStep, 'Send a short personalized follow-up and ask one discovery question.');
  assert.equal((await post({})).status, 400);
});
