import { hero, garanties } from '../data/content.js';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <h1>{hero.titre}</h1>
          <p className="lead">{hero.texte}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#formulaire">Écrire anonymement</a>
            <a className="btn btn-ghost" href="#parler">Parler à quelqu’un</a>
          </div>
        </div>
        <img className="hero-logo" src="/logo-asebem.png" alt="" aria-hidden="true" width="300" height="300" />
      </div>
      <div className="wrap">
        <dl className="guarantees">
          {garanties.map((g) => (
            <div key={g.titre}>
              <dt>{g.titre}</dt>
              <dd>{g.texte}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
