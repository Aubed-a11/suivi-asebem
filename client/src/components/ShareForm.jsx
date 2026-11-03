import { useState } from 'react';
import { formulaire as f, urgences } from '../data/content.js';

const empty = {
  themes: [],
  ressenti: '',
  message: '',
  encore: '',
  attente: '',
  pseudo: '',
  contact: '',
  referent: '',
  website: ''
};

function Radios({ name, options, value, onChange }) {
  return (
    <div className="choices">
      {options.map((o) => (
        <label key={o.v} className={`choice ${value === o.v ? 'is-on' : ''}`}>
          <input type="radio" name={name} value={o.v} checked={value === o.v} onChange={() => onChange(o.v)} />
          <span>{o.l}</span>
        </label>
      ))}
    </div>
  );
}

export default function ShareForm() {
  const [d, setD] = useState(empty);
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const set = (k) => (v) => setD((s) => ({ ...s, [k]: v }));
  const toggleTheme = (v) =>
    setD((s) => ({ ...s, themes: s.themes.includes(v) ? s.themes.filter((t) => t !== v) : [...s.themes, v] }));

  const wantsCallback = d.attente === 'rappel' || d.attente === 'orienter';

  async function submit(e) {
    e.preventDefault();
    if (d.message.trim().length < 5) {
      setError('Écris au moins quelques mots dans « Raconte-nous ».');
      return;
    }
    setStatus('sending');
    setError('');
    try {
      const r = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/message`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'omit',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(d)
      });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.ok) throw new Error(j.error || 'Envoi impossible pour le moment.');
      setResult(j);
      setD(empty); // le texte est effacé du navigateur dès l'envoi
      setStatus('done');
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <section className="section section-form" id="formulaire">
        <div className="wrap narrow">
          <div className="confirm" role="status">
            <h2>Merci de nous avoir fait confiance.</h2>
            {result?.urgent && (
              <div className="confirm-alert">
                <div>
                  <p><strong>Si tu es en danger en ce moment, n’attends pas notre réponse.</strong></p>
                  <div className="confirm-nums">
                    {urgences.map((u) => (
                      <a key={u.numero} href={`tel:${u.numero}`}> {u.numero} {u.label}</a>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <p>Si tu es en danger, appelle le 19 (police) ou le 15.</p>
            <p>
              {result?.hasContact
                ? 'Tu as laissé un contact : un ou une référente te répond sous 72 h.'
                : 'Tu n’as pas laissé de contact : ton message sera lu et compté, sans réponse possible. Si tu veux parler à quelqu’un, tu peux écrire sur le WhatsApp de la cellule.'}
            </p>
            <p className="muted">Ce que tu as écrit a été effacé de cette page.</p>
            <button className="btn btn-ghost" onClick={() => setStatus('idle')}> Écrire un autre message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section section-form" id="formulaire">
      <div className="wrap narrow">
        <h2>Écris-nous, sans signer.</h2>
        <p className="section-intro">
          Comme une lettre qu’on glisse sous la porte. Une seule question est obligatoire, tout le reste est facultatif.
        </p>
        <div className="privacy-note">
          <p>
            <strong>Ce formulaire est 100 % anonyme.</strong> Il n’enregistre ni ton nom, ni ton adresse IP, ni aucun cookie.
            Ton message arrive à la cellule sans expéditeur : personne, pas même les référents, ne peut savoir qu’il vient de toi.
            Pour encore plus de discrétion, utilise une fenêtre de navigation privée.
          </p>
        </div>

        <form onSubmit={submit} noValidate autoComplete="off">
          <fieldset>
            <legend><span className="q">1</span> Ton message concerne plutôt…</legend>
            <div className="choices">
              {f.themes.map((o) => (
                <label key={o.v} className={`choice ${d.themes.includes(o.v) ? 'is-on' : ''}`}>
                  <input type="checkbox" checked={d.themes.includes(o.v)} onChange={() => toggleTheme(o.v)} />
                  <span>{o.l}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend><span className="q">2</span> C’est une expérience…</legend>
            <Radios name="ressenti" options={f.ressenti} value={d.ressenti} onChange={set('ressenti')} />
          </fieldset>

          <fieldset>
            <legend><span className="q">3</span> Raconte-nous <span className="req">obligatoire</span></legend>
            <textarea
              className="letter"
              rows={9}
              maxLength={8000}
              value={d.message}
              onChange={(e) => set('message')(e.target.value)}
              placeholder="Écris avec tes mots, à ton rythme."
              aria-describedby="msg-help"
              spellCheck="false"
            />
            <p id="msg-help" className="help">
              Ne mets ni ton nom ni celui d’une autre personne. {d.message.length > 0 && <span className="count">{d.message.length} / 8000</span>}
            </p>
          </fieldset>

          <fieldset>
            <legend><span className="q">4</span> Est-ce que cela se passe encore aujourd’hui ?</legend>
            <Radios name="encore" options={f.encore} value={d.encore} onChange={set('encore')} />
          </fieldset>

          <fieldset>
            <legend><span className="q">5</span> Qu’attends-tu de nous ?</legend>
            <Radios name="attente" options={f.attente} value={d.attente} onChange={set('attente')} />
          </fieldset>

          <fieldset className={wantsCallback ? 'highlight' : ''}>
            <legend><span className="q">6</span> Si tu veux qu’on te recontacte <span className="opt">facultatif</span></legend>
            <p className="help">
              À remplir seulement si tu veux une réponse. Laisse ces champs vides pour rester 100 % anonyme.
              Si tu les remplis, seuls les référents verront ce contact, et il sera effacé une fois l’échange terminé.
              Utilise un pseudo, jamais ton vrai nom.
            </p>
            <div className="row">
              <input type="text" maxLength={60} placeholder="Pseudo" value={d.pseudo} onChange={(e) => set('pseudo')(e.target.value)} />
              <input type="text" maxLength={120} placeholder="WhatsApp ou email" value={d.contact} onChange={(e) => set('contact')(e.target.value)} />
            </div>
            {wantsCallback && !d.contact && (
              <p className="help warn">Sans contact, on ne pourra pas te rappeler.</p>
            )}
            {d.contact && (
              <p className="help warn">Avec ce contact, les référents pourront te recontacter : tu n’es plus anonyme pour eux.</p>
            )}
          </fieldset>

          <fieldset>
            <legend><span className="q">7</span> Tu préfères parler à…</legend>
            <Radios name="referent" options={f.referent} value={d.referent} onChange={set('referent')} />
          </fieldset>

          {/* Champ piège pour les robots, invisible pour les humains */}
          <div className="hp" aria-hidden="true">
            <label>Site web<input tabIndex={-1} value={d.website} onChange={(e) => set('website')(e.target.value)} /></label>
          </div>

          {error && <p className="form-error" role="alert">{error}</p>}

          <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'sending'}>
            {status === 'sending' ? 'Envoi…' : 'Envoyer anonymement'}
          </button>
        </form>
      </div>
    </section>
  );
}
