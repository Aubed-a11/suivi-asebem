import { contact } from '../data/content.js';
import { quickExit } from '../quickExit.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <img src="/logo-asebem.png" alt="Logo de l'ASEBEM" width="64" height="64" />
        <div>
          <p>Cellule d’écoute de l’Association des Stagiaires et Étudiants Béninois au Maroc (ASEBEM).</p>
          <p className="muted">{contact.email} · WhatsApp {contact.whatsappDisplay}</p>
          <p className="muted">
            Ce site n’utilise aucun cookie, aucun outil de mesure d’audience et aucune ressource externe.
            Appuie sur Échap pour quitter la page instantanément.
          </p>
          <button className="link-btn" onClick={quickExit}>Quitter la page</button>
        </div>
      </div>
    </footer>
  );
}
