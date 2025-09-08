export async function getGraphToken(): Promise<string> {
  const tenant = process.env.GRAPH_TENANT_ID;
  const clientId = process.env.GRAPH_CLIENT_ID;
  const clientSecret = process.env.GRAPH_CLIENT_SECRET;

  if (!tenant || !clientId || !clientSecret) {
    throw new Error('Missing Graph credentials (GRAPH_TENANT_ID/GRAPH_CLIENT_ID/GRAPH_CLIENT_SECRET)');
  }

  // simple in-memory cache to avoid fetching token for each request in same runtime
  const cacheKey = `graph_token_${tenant}_${clientId}`;
  // @ts-ignore global cache
  if ((global as any).__graphTokenCache && (global as any).__graphTokenCache[cacheKey]) {
    const cached = (global as any).__graphTokenCache[cacheKey];
    if (cached.expiresAt > Date.now()) return cached.token;
  }

  const res = await fetch(`https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      scope: 'https://graph.microsoft.com/.default',
      grant_type: 'client_credentials',
    }),
  });

  const json = await res.json();
  if (!res.ok) throw new Error(`Failed to get Graph token: ${JSON.stringify(json)}`);

  const token = json.access_token;
  const expiresIn = Number(json.expires_in || 3600);
  (global as any).__graphTokenCache = (global as any).__graphTokenCache || {};
  (global as any).__graphTokenCache[cacheKey] = { token, expiresAt: Date.now() + (expiresIn - 60) * 1000 };
  return token;
}

interface GraphAttachment {
  name: string;
  contentType?: string;
  contentBytes: string; // base64
}

export async function sendGraphMail(opts: {
  from: string;
  to: string | string[];
  subject: string;
  bodyText?: string;
  bodyHtml?: string;
  attachments?: GraphAttachment[];
  saveToSentItems?: boolean;
}) {
  const token = await getGraphToken();
  const sender = opts.from;
  const toArr = Array.isArray(opts.to) ? opts.to : [opts.to];

  const message: any = {
    subject: opts.subject,
    body: { contentType: opts.bodyHtml ? 'HTML' : 'Text', content: opts.bodyHtml || opts.bodyText || '' },
    toRecipients: toArr.map((a) => ({ emailAddress: { address: a } })),
  };

  if (opts.attachments && opts.attachments.length) {
    message.attachments = opts.attachments.map((a) => ({
      '@odata.type': '#microsoft.graph.fileAttachment',
      name: a.name,
      contentType: a.contentType || 'application/octet-stream',
      contentBytes: a.contentBytes,
    }));
  }

  // retry logic
  let attempts = 0;
  const maxAttempts = 2;
  let lastErr: any = null;
  while (attempts < maxAttempts) {
    attempts++;
    try {
      const res = await fetch(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, saveToSentItems: opts.saveToSentItems !== false }),
      });

      if (res.status === 202) return true;
      const text = await res.text();
      lastErr = new Error(`Graph sendMail failed (${res.status}): ${text}`);
    } catch (err) {
      lastErr = err;
      // if token likely expired, refresh once
      if (attempts === 1) {
        token = await getGraphToken();
      }
    }
    // small backoff
    await new Promise((r) => setTimeout(r, 250 * attempts));
  }
  throw lastErr;
}


