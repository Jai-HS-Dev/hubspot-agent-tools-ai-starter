const http = require('node:http');

const PORT = Number(process.env.PORT || 3000);
const USE_MOCK_DATA = String(process.env.USE_MOCK_DATA || 'true').toLowerCase() !== 'false';

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

    if (!contactId) {
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
    console.error('contact-brief failed:', error.message);
    return sendJson(response, 500, {
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

server.listen(PORT, () => {
  console.log(`Contact brief example listening on http://localhost:${PORT}`);
});

function isAuthorized(request) {
  const expected = cleanText(process.env.AGENT_TOOL_SHARED_SECRET);
  if (!expected) return true;

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
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  const raw = Buffer.concat(chunks).toString('utf8');
  if (!raw.trim()) return {};
  return JSON.parse(raw);
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

  const url = new URL(`https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(contactId)}`);
  url.searchParams.set('properties', 'firstname,lastname,company,lifecyclestage');

  const response = await fetch(url, {
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

