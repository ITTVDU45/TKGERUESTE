require('dotenv').config();

async function getGraphToken() {
  const tenant = process.env.GRAPH_TENANT_ID;
  const clientId = process.env.GRAPH_CLIENT_ID;
  const clientSecret = process.env.GRAPH_CLIENT_SECRET;

  if (!tenant || !clientId || !clientSecret) {
    throw new Error('Missing GRAPH_ env vars (GRAPH_TENANT_ID/GRAPH_CLIENT_ID/GRAPH_CLIENT_SECRET)');
  }

  const params = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    scope: 'https://graph.microsoft.com/.default',
    grant_type: 'client_credentials',
  });

  const res = await fetch(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`token error: ${JSON.stringify(json)}`);
  return json.access_token;
}

async function sendTest() {
  const sender = process.env.GRAPH_SENDER;
  const to = process.env.TEST_TO || 'info@it-techvision.de';

  if (!sender) throw new Error('GRAPH_SENDER not set');

  const token = await getGraphToken();

  const message = {
    message: {
      subject: 'Test E-Mail via Microsoft Graph',
      body: { contentType: 'HTML', content: `<p>Testnachricht gesendet über Microsoft Graph.</p><p>Datum: ${new Date().toISOString()}</p>` },
      toRecipients: [{ emailAddress: { address: to } }],
    },
    saveToSentItems: true,
  };

  const res = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  });

  console.log('Graph send status:', res.status);
  if (res.status !== 202) {
    const text = await res.text();
    console.error('Graph error body:', text);
    process.exit(1);
  }

  console.log('Sent successfully via Graph');
}

sendTest().catch((err) => {
  console.error('Error:', err && err.message ? err.message : err);
  process.exit(1);
});


