import { garanties } from '../data/content.js';
import Illustration from './Illustration.jsx';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <h1>Tu peux en parler ici.<br />Sans dire qui tu es.</h1>
          <p className="hero-band">Cellule d’écoute ASEBEM, 100 % anonyme</p>
          <p className="lead">
            Une galère d’accueil, de logement ou d’études, une période difficile, un harcèlement, un abus,
            ou au contraire quelque chose de bien : assieds-toi, prends ton temps. On écoute sans juger,
            et on t’oriente vers de l’aide si tu le veux.
          </p>
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
