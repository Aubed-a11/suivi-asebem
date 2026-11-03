import { portes } from '../data/content.js';

export default function Doors() {
  return (
    <section className="section" id="portes">
      <div className="wrap">
        <div className="section-head">
          <h2>Trois portes pour entrer</h2>
          <p className="section-intro">C’est toi qui choisis, et tu peux changer d’avis à tout moment.</p>
        </div>
        <div className="doors">
          {portes.map((p, i) => (
            <article className={`door door-${i + 1}`} key={p.id}>
              <span className="door-num" aria-hidden="true">{i + 1}</span>
              <h3>{p.titre}</h3>
              <p className="door-pour">{p.pour}</p>
              <p className="door-meta">{p.anonymat}</p>
              <a className="door-link" href={p.cible}>{p.action}</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
