const liens = [
  { href: '#formulaire', l: 'Écrire' },
  { href: '#parler', l: 'Parler' },
  { href: '#annuaire', l: 'Annuaire' },
  { href: '#charte', l: 'Charte' }
];

export default function Header() {
  return (
    <header className="header">
      <div className="wrap header-inner">
        <a className="logo-link" href="#top" aria-label="Accueil de la cellule d'écoute">
          <img src="/logo-asebem.png" alt="Logo de l'ASEBEM" width="56" height="56" />
          <span>
            <strong>Cellule d’écoute</strong>
            <small>ASEBEM</small>
          </span>
        </a>
        <nav aria-label="Navigation">
          {liens.map((x) => (
            <a key={x.href} href={x.href}>{x.l}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
