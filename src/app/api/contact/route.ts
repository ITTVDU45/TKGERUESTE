import nodemailer from 'nodemailer';
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

    // create transporter using default sendmail if no SMTP configured
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || 'no-reply@tk-geruest.de',
      to: 'info@tk-geruest.de',
      subject: `Neue Anfrage von ${body.first_name || ''} ${body.last_name || ''}`,
      text: `Neue Kontaktanfrage:\n\nName: ${body.first_name || ''} ${body.last_name || ''}\nE-Mail: ${body.user_email || ''}\nTelefon: ${body.user_phone || ''}\nProjektadresse: ${body.project_address || ''}\nArt: ${body.project_type || ''}\nStartdatum: ${body.preferred_start_date || ''}\nDauer: ${body.estimated_duration || ''}\nEinsatzbereich: ${body.usage_area || ''}\nProjektmaße: H ${body.building_height || ''} m, L ${body.building_length || ''} m\nBudget: ${body.budget || ''}\nBesondere Anforderungen: ${body.special_requirements || ''}\nWeitere Infos: ${body.message || ''}\n`,
      attachments,
    };

    await transporter.sendMail(mailOptions);

    // send confirmation to the user if an email was provided
    if (body.user_email) {
      try {
        const confirmOptions: any = {
          from: process.env.SMTP_FROM || 'no-reply@tk-geruest.de',
          to: body.user_email,
          subject: 'Ihre Anfrage bei TK Gerüste GmbH ist eingegangen',
          text: `Hallo ${body.first_name || ''},\n\nvielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich bei Ihnen.\n\nMit freundlichen Grüßen\nTK Gerüste GmbH`,
          // attach the same files the user uploaded
          attachments,
        };
        await transporter.sendMail(confirmOptions);
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


