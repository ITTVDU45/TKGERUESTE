import { generateContactConfirmationHtml } from '@/lib/emailTemplates/contactConfirmation';
import { sendGraphMail } from '@/lib/graphMailer';
import fs from 'fs';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // build attachments for nodemailer
    const attachments = (body.attachments || []).map((a: any) => ({
      filename: a.filename,
      content: Buffer.from(a.data, 'base64'),
      contentType: a.contentType,
    }));

    // prefer Microsoft Graph when configured
    const graphFrom = process.env.GRAPH_SENDER || process.env.SMTP_FROM || 'no-reply@tk-geruest.de';
    const graphTo = process.env.GRAPH_RECIPIENT || 'info@tk-geruest.de';

    const subject = `Neue Anfrage von ${body.first_name || ''} ${body.last_name || ''}`;
    const text = `Neue Kontaktanfrage:\n\nName: ${body.first_name || ''} ${body.last_name || ''}\nE-Mail: ${body.user_email || ''}\nTelefon: ${body.user_phone || ''}\nProjektadresse: ${body.project_address || ''}\nArt: ${body.project_type || ''}\nStartdatum: ${body.preferred_start_date || ''}\nDauer: ${body.estimated_duration || ''}\nEinsatzbereich: ${body.usage_area || ''}\nProjektmaße: H ${body.building_height || ''} m, L ${body.building_length || ''} m\nBudget: ${body.budget || ''}\nBesondere Anforderungen: ${body.special_requirements || ''}\nWeitere Infos: ${body.message || ''}\n`;

    // Convert attachments to Graph format (contentBytes must be base64)
    const graphAttachments = (attachments || []).map((a: any) => ({
      name: a.filename,
      contentType: a.contentType,
      contentBytes: Buffer.isBuffer(a.content) ? a.content.toString('base64') : Buffer.from(a.content).toString('base64'),
    }));

    const now = new Date().toISOString();
    const logLine = `${now} [contact] Sending internal mail: ${graphFrom} -> ${graphTo} subject: ${subject}\n`;
    try {
      fs.appendFileSync('/tmp/contact_send.log', logLine);
    } catch (e) {
      // ignore logging failures
    }

    await sendGraphMail({
      from: graphFrom,
      to: graphTo,
      subject,
      bodyText: text,
      attachments: graphAttachments,
    });
    try {
      fs.appendFileSync('/tmp/contact_send.log', `${new Date().toISOString()} [contact] Internal mail sent (Graph accepted)\n`);
    } catch (e) {}

    // send confirmation to the user if an email was provided
    if (body.user_email) {
      try {
        const logoUrl = `${process.env.NEXT_PUBLIC_BASE_URL || ''}/assets/imgs/logo/TKGEURSTE-Logoweiß.png`;
        const html = generateContactConfirmationHtml(body, logoUrl);
        const confirmTo = body.user_email;
        try {
          fs.appendFileSync('/tmp/contact_send.log', `${new Date().toISOString()} [contact] Sending confirmation mail: ${graphFrom} -> ${confirmTo}\n`);
        } catch (e) {}
        await sendGraphMail({
          from: graphFrom,
          to: confirmTo,
          subject: 'Ihre Anfrage bei TK Gerüste GmbH ist eingegangen',
          bodyText: `Hallo ${body.first_name || ''},\n\nvielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich bei Ihnen.\n\nMit freundlichen Grüßen\nTK Gerüste GmbH`,
          bodyHtml: html,
          attachments: graphAttachments,
        });
        try {
          fs.appendFileSync('/tmp/contact_send.log', `${new Date().toISOString()} [contact] Confirmation mail sent (Graph accepted)\n`);
        } catch (e) {}
      } catch (confirmErr) {
        console.error('Confirmation mail failed', confirmErr);
        // don't fail the whole request because confirmation mail failed
      }
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'sending failed' }), { status: 500 });
  }
}


