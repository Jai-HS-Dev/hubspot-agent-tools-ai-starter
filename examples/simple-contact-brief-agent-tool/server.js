const http = require('node:http');

const HUBSPOT_API_VERSION = process.env.HUBSPOT_API_VERSION || '2026-09';

if (!/^\d{4}-\d{2}$/.test(HUBSPOT_API_VERSION)) {
  throw new Error('HUBSPOT_API_VERSION must use YYYY-MM format');
}

const PORT = Number(process.env.PORT || 3000);
const mockSetting = process.env.USE_MOCK_DATA || 'true';
if (!['true', 'false'].includes(mockSetting)) throw new Error('USE_MOCK_DATA must be true or false');
const USE_MOCK_DATA = mockSetting === 'true';

const server = http.createServer(async (request, response) => {
  try {
    if (request.method === 'GET' && request.url === '/') {
      return sendJson(response, 200, {
        ok: true,
        routes: ['POST /api/contact-brief']
      });
    }

    if (request.method !== 'POST' || request.url !== '/api/contact-brief') {
      return sendJson(response, 404, { error: 'Not found' });
    }

    if (!isAuthorized(request)) {
      return sendJson(response, 401, { error: 'Unauthorized' });
    }

    const payload = await readJson(request);
    const inputFields = payload.inputFields || payload;
    const contactId = cleanText(inputFields.contactId);
    const briefType = cleanText(inputFields.briefType || 'sales');

    if (!/^[a-zA-Z0-9_-]{1,100}$/.test(contactId) || (!USE_MOCK_DATA && !/^\d+$/.test(contactId))) {
      return sendJson(response, 400, {
        hs_execution_state: 'FAIL_CONTINUE',
        outputFields: {
          error: 'contactId is required',
          brief: '',
          recommendedNextStep: '',
          confidence: 'low'
        }
      });
    }

    const contact = USE_MOCK_DATA
      ? getMockContact(contactId)
      : await getContactFromHubSpot(contactId);

    const outputFields = buildContactBrief(contact, briefType);

    return sendJson(response, 200, {
      hs_execution_state: 'SUCCESS',
      outputFields
    });
  } catch (error) {
    return sendJson(response, error.statusCode || 502, {
      hs_execution_state: 'FAIL_CONTINUE',
      outputFields: {
        error: 'Unable to build contact brief right now.',
        brief: '',
        recommendedNextStep: '',
        confidence: 'low'
      }
    });
  }
});

function startServer(port = PORT) {
  if (!USE_MOCK_DATA && cleanText(process.env.AGENT_TOOL_SHARED_SECRET).length < 32) {
    throw new Error('Live mode requires AGENT_TOOL_SHARED_SECRET of at least 32 characters');
  }
  if (!USE_MOCK_DATA && !cleanText(process.env.HUBSPOT_ACCESS_TOKEN)) {
    throw new Error('Live mode requires a server-side HUBSPOT_ACCESS_TOKEN');
  }
  return server.listen(port, '127.0.0.1', () => {
    console.log(`Contact brief example listening on http://127.0.0.1:${server.address().port}`);
  });
}

if (require.main === module) startServer();

module.exports = { server, startServer };

function isAuthorized(request) {
  const expected = cleanText(process.env.AGENT_TOOL_SHARED_SECRET);
  if (!expected) return USE_MOCK_DATA;

  const provided = cleanText(request.headers['x-agent-tool-secret']);
  return provided && timingSafeEqual(provided, expected);
}

function timingSafeEqual(left, right) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);
  if (leftBuffer.length !== rightBuffer.length) return false;
  return require('node:crypto').timingSafeEqual(leftBuffer, rightBuffer);
}

async function readJson(request) {
  if (String(request.headers['content-type']).split(';')[0] !== 'application/json') {
    throw Object.assign(new Error('Expected application/json'), { statusCode: 415 });
  }
  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > 8192) throw Object.assign(new Error('Request too large'), { statusCode: 413 });
    chunks.push(chunk);
  }
  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw.trim()) return {};
  let value;
  try { value = JSON.parse(raw); } catch { throw Object.assign(new Error('Invalid JSON'), { statusCode: 400 }); }
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw Object.assign(new Error('Expected object'), { statusCode: 400 });
  return value;
}

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store'
  });
  response.end(JSON.stringify(body, null, 2));
}

function cleanText(value) {
  return String(value || '').trim();
}

function getMockContact(contactId) {
  return {
    id: contactId,
    firstname: 'Sample',
    lastname: 'Contact',
    company: 'Example Company',
    lifecycleStage: 'lead',
    recentActivity: 'Downloaded a pricing guide and opened a follow-up email.',
    openDeals: 0
  };
}

async function getContactFromHubSpot(contactId) {
  const token = cleanText(process.env.HUBSPOT_ACCESS_TOKEN);
  if (!token) {
    throw new Error('HUBSPOT_ACCESS_TOKEN is required when USE_MOCK_DATA=false');
  }

  const url = new URL(`https://api.hubapi.com/crm/objects/${HUBSPOT_API_VERSION}/contacts/${encodeURIComponent(contactId)}`);
  url.searchParams.set('properties', 'firstname,lastname,company,lifecyclestage');

  const response = await fetch(url, {
    redirect: 'error',
    signal: AbortSignal.timeout(10000),
    headers: {
      authorization: `Bearer ${token}`,
      accept: 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`HubSpot contact lookup failed with status ${response.status}`);
  }

  const payload = await response.json();
  return {
    id: payload.id,
    firstname: payload.properties?.firstname || '',
    lastname: payload.properties?.lastname || '',
    company: payload.properties?.company || '',
    lifecycleStage: payload.properties?.lifecyclestage || '',
    recentActivity: 'CRM properties loaded. Add engagement lookup logic for richer context.',
    openDeals: 0
  };
}

function buildContactBrief(contact, briefType) {
  const name = [contact.firstname, contact.lastname].filter(Boolean).join(' ') || 'This contact';
  const company = contact.company || 'their company';
  const nextStep = contact.openDeals > 0
    ? 'Review the active deal and confirm the next milestone.'
    : 'Send a short personalized follow-up and ask one discovery question.';

  return {
    contactName: name,
    brief: `${name} at ${company} is currently marked as ${contact.lifecycleStage || 'unknown stage'}. Recent signal: ${contact.recentActivity}`,
    briefType,
    recommendedNextStep: nextStep,
    confidence: USE_MOCK_DATA ? 'sample' : 'medium'
  };
}
