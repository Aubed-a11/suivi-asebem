import { hero, garanties } from '../data/content.js';
import Illustration from './Illustration.jsx';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <h1>Tu peux en parler ici.<br />Sans dire qui tu es.</h1>
          <p className="hero-band">Cellule d’écoute ASEBEM, 100 % anonyme</p>
          <p className="lead">{hero.texte}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#formulaire">Écrire anonymement</a>
            <a className="btn btn-ghost" href="#parler">Parler à quelqu’un</a>
          </div>
        </div>
        <div className="hero-visual">
          <Illustration />
        </div>
      </div>
      <div className="wrap">
        <dl className="guarantees">
          {garanties.map((g, i) => (
            <div key={g.titre}>
              <span className="g-num">{String(i + 1).padStart(2, '0')}</span>
              <dt>{g.titre}</dt>
              <dd>{g.texte}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
