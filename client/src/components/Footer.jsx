import { contact } from '../data/content.js';
import { quickExit } from '../quickExit.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <img src="/logo-asebem.png" alt="Logo de l'ASEBEM" width="72" height="72" />
        <div>
          <p className="footer-title">Cellule d’écoute de l’Association des Stagiaires et Étudiants Béninois au Maroc</p>
          <p className="muted">{contact.email}</p>
          <p className="muted">WhatsApp {contact.whatsappDisplay}</p>
          <p className="muted footer-small">
            Ce site n’utilise aucun cookie, aucun outil de mesure d’audience et aucune ressource externe.
            Appuie sur Échap pour quitter la page instantanément.
          </p>
          <button className="link-btn" onClick={quickExit}>Quitter la page</button>
        </div>
      </div>
    </footer>
  );
}
