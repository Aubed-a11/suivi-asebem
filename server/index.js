import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import crypto from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5050;
const DRY_RUN = process.env.DRY_RUN === 'true';

/*
  PRINCIPES D'ANONYMAT
  1. Aucun journal des requêtes (pas de morgan, pas de console.log de l'IP).
  2. Aucun cookie, aucune session, aucun compte.
  3. L'adresse IP n'est jamais lue pour être stockée. Le seul usage est un
     anti-spam en mémoire vive : l'IP est hachée avec un sel aléatoire qui
     change toutes les heures, puis oubliée. Rien n'est écrit sur disque.
  4. Aucune base de données : le message est transmis par email puis oublié.
  5. L'email est envoyé PAR le serveur VERS la boîte de la cellule : l'expéditeur
     visible est toujours le compte de la cellule, jamais la personne.
  6. Pages et API marquées "noindex" : rien n'est indexé par les moteurs.
*/

app.disable('x-powered-by');
app.set('trust proxy', false);

app.use((req, res, next) => {
  res.setHeader('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet');
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Permissions-Policy', 'geolocation=(), camera=(), microphone=(), interest-cohort=()');
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
  );
  next();
});

app.use(express.json({ limit: '30kb' }));

/* Anti-spam en mémoire vive uniquement, clés hachées et sel tournant */
let salt = crypto.randomBytes(32);
let buckets = new Map();
setInterval(() => {
  salt = crypto.randomBytes(32);
  buckets = new Map();
}, 60 * 60 * 1000).unref();

function tooMany(req) {
  const raw = req.socket?.remoteAddress || 'x';
  const key = crypto.createHmac('sha256', salt).update(raw).digest('hex').slice(0, 16);
  const n = (buckets.get(key) || 0) + 1;
  buckets.set(key, n);
  return n > 8;
}

const THEMES = ['accueil', 'logement', 'etudes', 'argent', 'sante', 'discrimination', 'harcelement', 'positif', 'autre'];
const THEME_LABELS = {
  accueil: 'Accueil',
  logement: 'Logement',
  etudes: 'Études',
  argent: 'Argent',
  sante: 'Santé',
  discrimination: 'Discrimination',
  harcelement: 'Harcèlement ou abus',
  positif: 'Expérience positive',
  autre: 'Autre'
};
const RESSENTI = { positive: 'Positive', negative: 'Négative', les_deux: 'Les deux' };
const ENCORE = { oui: 'Oui', non: 'Non', ne_sait_pas: 'Je ne sais pas' };
const ATTENTE = {
  partager: 'Rien, juste partager',
  rappel: "Qu'on me rappelle",
  orienter: "Qu'on m'oriente vers un professionnel",
  agir: "Que l'association agisse pour éviter que ça se reproduise"
};
const REFERENT = { femme: 'Une femme', homme: 'Un homme', egal: 'Peu importe' };

const DANGER_WORDS = [
  'suicide', 'suicid', 'me tuer', 'en finir', 'mourir', 'plus envie de vivre',
  'menace', 'menac', 'chantage', 'il va me', 'elle va me', 'frappe', 'battu',
  'viol', 'enferm', 'danger', 'peur pour ma vie', 'mineur', 'mineure', '15 ans', '16 ans', '17 ans'
];

const clean = (v, max) =>
  typeof v === 'string' ? v.replace(/\u0000/g, '').trim().slice(0, max) : '';

const pick = (v, dict) => (typeof v === 'string' && dict[v] ? v : '');

function levelOf(data) {
  const text = data.message.toLowerCase();
  const hit = DANGER_WORDS.some((w) => text.includes(w));
  if (hit || (data.encore === 'oui' && data.themes.includes('harcelement'))) return 'URGENT POSSIBLE';
  if (data.themes.includes('harcelement') || data.themes.includes('sante')) return 'PRIORITAIRE';
  if (data.themes.length === 1 && data.themes[0] === 'positif') return 'RETOUR';
  return 'SUIVI';
}

const escapeHtml = (s) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

let transporter = null;
if (!DRY_RUN) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });
}

app.post('/api/message', async (req, res) => {
  if (tooMany(req)) {
    return res.status(429).json({ ok: false, error: 'Trop d’envois récents. Réessaie dans un moment.' });
  }

  const b = req.body || {};

  /* Pot de miel : un robot remplit ce champ invisible */
  if (clean(b.website, 200)) return res.json({ ok: true });

  const data = {
    themes: Array.isArray(b.themes) ? b.themes.filter((t) => THEMES.includes(t)).slice(0, 9) : [],
    ressenti: pick(b.ressenti, RESSENTI),
    message: clean(b.message, 8000),
    encore: pick(b.encore, ENCORE),
    attente: pick(b.attente, ATTENTE),
    pseudo: clean(b.pseudo, 60),
    contact: clean(b.contact, 120),
    referent: pick(b.referent, REFERENT)
  };

  if (data.message.length < 5) {
    return res.status(400).json({ ok: false, error: 'Le champ « Raconte-nous » est obligatoire.' });
  }

  const level = levelOf(data);
  const ref = crypto.randomBytes(3).toString('hex').toUpperCase();
  const hasContact = Boolean(data.contact);
  const date = new Date().toLocaleDateString('fr-FR', { timeZone: 'Africa/Casablanca' });

  const rows = [
    ['Niveau suggéré', level],
    ['Référence interne', ref],
    ['Date (jour seulement)', date],
    ['Thèmes', data.themes.map((t) => THEME_LABELS[t]).join(', ') || 'Non précisé'],
    ['Expérience', RESSENTI[data.ressenti] || 'Non précisé'],
    ['Encore aujourd’hui ?', ENCORE[data.encore] || 'Non précisé'],
    ['Attente', ATTENTE[data.attente] || 'Non précisé'],
    ['Préfère parler à', REFERENT[data.referent] || 'Non précisé'],
    ['Pseudo', data.pseudo || 'Aucun'],
    ['Contact laissé', data.contact || 'Aucun (pas de réponse possible)']
  ];

  const text =
    rows.map(([k, v]) => `${k} : ${v}`).join('\n') +
    `\n\nMESSAGE\n${data.message}\n\n` +
    'Rappel charte : ne pas transférer, ne pas faire de capture, effacer le contact une fois l’échange terminé, supprimer le message brut après 6 mois.';

  const html = `
  <div style="font-family:Arial,sans-serif;font-size:14px;color:#111;max-width:640px">
    <table cellpadding="6" style="border-collapse:collapse;width:100%">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="border:1px solid #ddd;width:38%;font-weight:bold">${escapeHtml(k)}</td><td style="border:1px solid #ddd">${escapeHtml(v)}</td></tr>`
        )
        .join('')}
    </table>
    <h3 style="margin:20px 0 8px">Message</h3>
    <div style="white-space:pre-wrap;border:1px solid #ddd;padding:12px;background:#fafafa">${escapeHtml(data.message)}</div>
    <p style="font-size:12px;color:#555;margin-top:20px">Rappel charte : ne pas transférer, ne pas faire de capture, effacer le contact une fois l’échange terminé, supprimer le message brut après 6 mois.</p>
  </div>`;

  const subject = `[Cellule ${level}] ${hasContact ? 'Contact laissé' : 'Sans contact'} · réf ${ref}`;

  try {
    if (DRY_RUN) {
      console.log('\n===== DRY RUN : email non envoyé =====\n' + subject + '\n' + text + '\n======================================\n');
    } else {
      await transporter.sendMail({
        from: `"Cellule d'écoute ASEBEM" <${process.env.SMTP_USER}>`,
        to: process.env.MAIL_TO,
        subject,
        text,
        html,
        headers: { 'X-Priority': level === 'URGENT POSSIBLE' ? '1' : '3' }
      });
    }
    res.json({ ok: true, urgent: level === 'URGENT POSSIBLE', hasContact });
  } catch {
    /* On ne journalise pas le contenu de l'erreur, qui pourrait contenir le message */
    console.error('Échec de l’envoi SMTP (contenu non journalisé).');
    res.status(502).json({ ok: false, error: 'Envoi impossible pour le moment. Tu peux réessayer ou écrire sur le WhatsApp de la cellule.' });
  }
});

app.get('/robots.txt', (_req, res) => res.type('text/plain').send('User-agent: *\nDisallow: /\n'));

/* En production, le serveur sert aussi le site React compilé */
const dist = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(dist, { etag: false, lastModified: false }));
app.get('*', (_req, res, next) => {
  res.sendFile(path.join(dist, 'index.html'), (err) => err && next());
});

app.listen(PORT, () => {
  console.log(`Cellule d'écoute : serveur sur le port ${PORT}${DRY_RUN ? ' (mode test, aucun email envoyé)' : ''}`);
});
