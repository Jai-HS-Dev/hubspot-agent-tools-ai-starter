const requirements = [
  ['ownerConfirmed', 'follow-up owner'],
  ['meetingDateConfirmed', 'next meeting date']
];

function checkHandoff(inputFields) {
  if (!inputFields || typeof inputFields !== 'object' || Array.isArray(inputFields)) {
    throw new Error('Expected an object of handoff answers.');
  }
  const missing = [];
  for (const [key, label] of requirements) {
    const answer = Object.hasOwn(inputFields, key) ? inputFields[key] : undefined;
    if (![undefined, '', 'yes', 'no'].includes(answer)) {
      throw new Error('Use yes, no, or leave an answer blank.');
    }
    if (answer !== 'yes') missing.push(label);
  }
  return {
    hs_execution_state: 'SUCCESS',
    outputFields: {
      decision: missing.length ? 'Needs review' : 'Ready',
      missingItems: missing.join(', ')
    }
  };
}

const sampleHandoff = { ownerConfirmed: 'yes', meetingDateConfirmed: 'no' };

// The built-in workflow exercise uses only the fixture, not the enrolled record.
function main(_event, callback) {
  callback({ outputFields: checkHandoff(sampleHandoff).outputFields });
}

module.exports = { checkHandoff, main, sampleHandoff };
