const { test } = require('node:test');
const assert = require('node:assert/strict');
const { checkHandoff, main } = require('../examples/sales-handoff-checker/check-handoff.cjs');
const { config } = require('../examples/sales-handoff-checker/handoff-action.example.json');

test('handoff rules match the sample action inputs and outputs', () => {
  const fields = config.inputFields.map(field => field.typeDefinition.name);
  const ready = checkHandoff(Object.fromEntries(fields.map(name => [name, 'yes'])));
  assert.equal(ready.hs_execution_state, 'SUCCESS');
  assert.deepEqual(ready.outputFields, { decision: 'Ready', missingItems: '' });
  assert.deepEqual(Object.keys(ready.outputFields), config.outputFields.map(field => field.typeDefinition.name));
  assert.equal(config.isPublished, false);
  assert.equal(new URL(config.actionUrl).hostname, 'your-host.example.com');
});

test('missing answers never pass and invalid answers are rejected', () => {
  assert.equal(checkHandoff({ ownerConfirmed: 'yes' }).outputFields.missingItems, 'next meeting date');
  assert.equal(checkHandoff({}).outputFields.decision, 'Needs review');
  assert.throws(() => checkHandoff({ ownerConfirmed: 'maybe' }), /Use yes, no/);
});

test('built-in workflow action uses its fixture, not the selected CRM record', () => {
  const event = { get inputFields() { throw new Error('The sample must not read record properties'); } };
  let result;
  main(event, output => { result = output; });
  assert.deepEqual(result, { outputFields: { decision: 'Needs review', missingItems: 'next meeting date' } });
});
