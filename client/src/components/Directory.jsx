import { annuaire, annuaireNote } from '../data/content.js';

const fmt = (n) => (n.length === 10 ? n.replace(/(\d{4})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4') : n);

export default function Directory() {
  return (
    <section className="section" id="annuaire">
      <div className="wrap">
        <div className="section-head">
          <h2>Être accompagné</h2>
          <p className="section-intro">Des professionnels au Maroc, selon ce dont tu as besoin. Touche un numéro pour appeler.</p>
        </div>
        <ul className="directory">
          {annuaire.map((a) => (
            <li className="dir-row" key={a.contact}>
              <p className="dir-need">{a.besoin}</p>
              <div className="dir-who">
                <h3>{a.contact}</h3>
                <p className="dir-note">{a.note}</p>
              </div>
              <div className="dir-nums">
                {a.numeros.length === 0 && <span className="muted">À compléter</span>}
                {a.numeros.map((n, i) => (
                  <a key={n} href={`tel:${n}`}>
                    {a.villes ? <span className="city">{a.villes[i]}</span> : null}
                    {fmt(n)}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
        <p className="note">{annuaireNote}</p>
      </div>
    </section>
  );
}
