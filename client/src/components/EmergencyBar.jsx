import { urgences } from '../data/content.js';
import { quickExit } from '../quickExit.js';

export default function EmergencyBar() {
  return (
    <div className="emergency" role="region" aria-label="Numéros d'urgence">
      <div className="wrap emergency-inner">
        <p className="emergency-label">En danger maintenant ? Appelle :</p>
        <ul className="emergency-list">
          {urgences.map((u) => (
            <li key={u.numero}>
              <a href={`tel:${u.numero}`}>
                <strong>{u.numero}</strong>
                <span>{u.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <button className="exit-btn" onClick={quickExit} title="Quitter la page tout de suite (touche Échap)">
          Quitter vite
        </button>
      </div>
    </div>
  );
}
