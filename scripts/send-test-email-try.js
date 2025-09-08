require('dotenv').config();
const nodemailer = require('nodemailer');

const toAddress = process.env.TEST_TO || 'info@it-techvision.de';

const configs = [
  { name: 'STARTTLS (587)', host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT || 587), secure: false, tls: { rejectUnauthorized: false } },
  { name: 'SSL (465)', host: process.env.SMTP_HOST, port: 465, secure: true, tls: { rejectUnauthorized: false } },
  { name: 'STARTTLS explicit (587) with authMethod=LOGIN', host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT || 587), secure: false, authMethod: 'LOGIN', tls: { rejectUnauthorized: false } },
  { name: 'Service hotmail (587)', service: 'hotmail', secure: false, port: Number(process.env.SMTP_PORT || 587), tls: { rejectUnauthorized: false } },
];

async function tryConfig(cfg) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user;

  if (!user || !pass) {
    console.error('Fehler: SMTP_USER oder SMTP_PASS nicht gesetzt in .env');
    return { ok: false, error: 'missing-credentials' };
  }

  const transporterOptions = { ...cfg, auth: { user, pass } };

  // remove undefined keys
  Object.keys(transporterOptions).forEach(k => transporterOptions[k] === undefined && delete transporterOptions[k]);

  console.log('\nVersuche Konfiguration:', cfg.name);
  console.log('Optionen:', JSON.stringify({ host: transporterOptions.host, port: transporterOptions.port, secure: transporterOptions.secure, service: transporterOptions.service, authMethod: transporterOptions.authMethod || null }));

  const transporter = nodemailer.createTransport(transporterOptions);

  try {
    await transporter.verify();
    console.log('Verbindung OK für:', cfg.name);
  } catch (err) {
    console.error('Verbindungsprüfung fehlgeschlagen:', err && err.message ? err.message : err);
    return { ok: false, error: err };
  }

  try {
    const info = await transporter.sendMail({
      from,
      to: toAddress,
      subject: `Test-E-Mail (${cfg.name})`,
      text: `Test-E-Mail mit Konfiguration: ${cfg.name}`,
      html: `<p>Test-E-Mail mit Konfiguration: <strong>${cfg.name}</strong></p>`,
    });
    console.log('E-Mail gesendet:', info.messageId || info.response || info);
    return { ok: true, info };
  } catch (err) {
    console.error('Senden fehlgeschlagen:', err && err.message ? err.message : err);
    return { ok: false, error: err };
  }
}

(async () => {
  for (const cfg of configs) {
    const res = await tryConfig(cfg);
    if (res.ok) {
      console.log('\nErfolgreich mit Konfiguration:', cfg.name);
      process.exit(0);
    }
  }
  console.error('\nAlle Konfigurationen fehlgeschlagen. Sieh dir die Fehler oben an.');
  console.error('\nTipps:\n- Für Office365: Stelle sicher, dass SMTP AUTH für das Postfach aktiviert ist.\n- Wenn MFA aktiv ist, nutze ein App-Passwort oder OAuth2.\n- Prüfe Port/STARTTLS (587) oder SSL (465).\n- Prüfe, ob der Provider Verbindungsversuche blockiert (z.B. Conditional Access).');
  process.exit(1);
})();


