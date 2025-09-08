const fs = require('fs');
require('dotenv').config();
const nodemailer = require('nodemailer');

(async () => {
  try {
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || user;

    if (!host || !user || !pass) {
      console.error('Missing SMTP configuration. Ensure SMTP_HOST, SMTP_USER and SMTP_PASS are set in .env');
      process.exit(2);
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const info = await transporter.sendMail({
      from,
      to: 'info@it-techvision.de',
      subject: 'Test-E-Mail aus lokaler Umgebung',
      text: 'Dies ist eine Test-E-Mail, gesendet von deinem lokalen Skript.',
      html: `
        <div style="font-family:Arial,sans-serif;color:#111">
          <h2>Test-E-Mail</h2>
          <p>Dies ist eine Test-E-Mail, gesendet von deinem lokalen Skript.</p>
          <p>Wenn du diese E-Mail erhalten hast, funktioniert dein SMTP-Setup.</p>
        </div>
      `,
    });

    console.log('E-Mail gesendet:', info.messageId || info.response || info);
    process.exit(0);
  } catch (err) {
    console.error('Fehler beim Senden der E-Mail:', err);
    process.exit(1);
  }
})();


