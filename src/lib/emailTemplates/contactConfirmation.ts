interface ContactPayload {
  first_name?: string;
  last_name?: string;
  user_email?: string;
  project_address?: string;
}

export function generateContactConfirmationHtml(payload: ContactPayload, logoUrl: string) {
  const name = payload.first_name ? `${payload.first_name} ${payload.last_name || ''}` : 'Kunde';
  const address = payload.project_address || '';

  return `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Ihre Anfrage bei TK Gerüste GmbH</title>
      <style>
        /* Inline-safe minimal styles */
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; background: #f6f8fa; margin:0; padding:0; }
        .container { max-width: 680px; margin: 28px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 6px 24px rgba(16,32,57,0.08); }
        .header { padding: 20px 28px; background: linear-gradient(90deg, #ff7a00 0%, #7c3aed 100%); color: #fff; display:flex; align-items:center; gap:16px }
        .logo { height: 40px; display:block }
        .content { padding: 28px; color: #0b1220; }
        h1 { font-size:20px; margin:0 0 8px 0; }
        p { margin: 12px 0; line-height:1.5; color: rgba(11,18,32,0.85) }
        .cta { display:inline-block; margin-top:16px; padding: 10px 16px; border-radius: 8px; text-decoration:none; background: linear-gradient(90deg, #ff7a00 12%, #7c3aed 88%); color:#fff; }
        .footer { padding: 18px 28px; font-size:13px; color: rgba(11,18,32,0.6); }
        .meta { font-size:13px; color: rgba(11,18,32,0.65); margin-top: 8px }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="${logoUrl}" alt="TK Gerüste" class="logo" />
          <div>
            <strong>TK Gerüste GmbH</strong>
            <div style="font-size:12px; opacity:0.95">Ihre Anfrage wurde erhalten</div>
          </div>
        </div>
        <div class="content">
          <h1>Hallo ${name},</h1>
          <p>vielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten und beginnen umgehend mit der Bearbeitung.</p>
          <p class="meta">Projektadresse: ${address}</p>
          <p>Ein Mitglied unseres Teams wird sich innerhalb der nächsten 24–48 Stunden bei Ihnen melden. Sollten Sie Rückfragen haben, erreichen Sie uns telefonisch unter <strong>+49 178 268 60 00</strong>.</p>
          <a href="/contact" class="cta">Weitere Anfrage stellen</a>
        </div>
        <div class="footer">Mit freundlichen Grüßen<br/>TK Gerüste GmbH — Düsseldorfer Landstraße 59, 47249 Duisburg</div>
      </div>
    </body>
  </html>
  `;
}


