import { charte, estPas, loiNote } from '../data/content.js';

export default function Charter() {
  return (
    <section className="section section-alt" id="charte">
      <div className="wrap">
        <div className="is-isnt">
          <div>
            <h3>Ce que la cellule est</h3>
            <ul>{estPas.est.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div>
            <h3>Ce qu’elle n’est pas</h3>
            <ul>{estPas.nEstPas.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>

        <h2>Charte de confidentialité</h2>
        <p className="section-intro">Signée par chaque référent. Huit engagements.</p>
        <ol className="charter">
          {charte.map((c, i) => (
            <li key={c.t}>
              <span className="c-num">{i + 1}.</span>
              <div>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="note">{loiNote}</p>
      </div>
    </section>
  );
}
