import { contact, ecoute } from '../data/content.js';

export default function Talk() {
  return (
    <section className="section section-alt" id="parler">
      <div className="wrap talk">
        <div>
          <h2>Parler à quelqu’un</h2>
          <p className="section-intro">
            Deux ou trois référents, dont au moins une femme et un homme, choisis pour leur discrétion.
            Aucun d’eux n’a de rôle dans l’accueil ou l’hébergement des nouveaux. Si un référent connaît
            la personne dont tu parles, il se retire.
          </p>
          <div className="talk-cards">
            <a className="talk-card" href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <span className="talk-label">WhatsApp</span>
              <span className="talk-value">{contact.whatsappDisplay}</span>
            </a>
            <a className="talk-card" href={`mailto:${contact.email}`}>
              <span className="talk-label">Email</span>
              <span className="talk-value">{contact.email}</span>
            </a>
          </div>
          <p className="warning">
            Attention : sur WhatsApp ou par email, ton numéro ou ton adresse sont visibles. Si tu veux que
            personne ne sache que c’est toi, utilise le <a href="#formulaire">formulaire anonyme</a>.
          </p>
          <p className="muted small">{contact.horaires}. Ce n’est pas un service d’urgence.</p>
        </div>
        <aside className="promise">
          <h3>Quand tu te confies, on s’engage à :</h3>
          <ol>
            {ecoute.map((e) => <li key={e}>{e}</li>)}
          </ol>
        </aside>
      </div>
    </section>
  );
}
