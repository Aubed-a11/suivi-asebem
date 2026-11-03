import { portes } from '../data/content.js';

export default function Doors() {
  return (
    <section className="section" id="portes">
      <div className="wrap">
        <h2>Trois façons d’entrer</h2>
        <p className="section-intro">C’est toi qui choisis, et tu peux changer d’avis à tout moment.</p>
        <div className="doors">
          {portes.map((p, i) => (
            <article className="door" key={p.id}>
              <p className="door-num">{i + 1}.</p>
              <h3>{p.titre}</h3>
              <p className="door-pour">{p.pour}</p>
              <p className="door-meta"><strong>Comment :</strong> {p.comment}</p>
              <p className="door-meta"><strong>Anonymat :</strong> {p.anonymat}</p>
              <a className="door-link" href={p.cible}>{p.action}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
