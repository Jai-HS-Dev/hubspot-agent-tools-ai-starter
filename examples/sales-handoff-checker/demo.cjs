const { checkHandoff, sampleHandoff } = require('./check-handoff.cjs');
const [ownerConfirmed, meetingDateConfirmed] = process.argv.slice(2);
try {
  console.log(JSON.stringify(checkHandoff({
    ownerConfirmed: ownerConfirmed ?? sampleHandoff.ownerConfirmed,
    meetingDateConfirmed: meetingDateConfirmed ?? sampleHandoff.meetingDateConfirmed
  }), null, 2));
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
