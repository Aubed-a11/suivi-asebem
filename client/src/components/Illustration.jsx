/* Scène originale : un salon calme, deux fauteuils face à face, un thé, la porte ouverte sur la lumière */
export default function Illustration() {
  return (
    <svg className="scene" viewBox="-40 0 780 480" role="img" aria-label="Un salon accueillant : deux fauteuils face à face autour d'une petite table avec un thé, près d'une porte ouverte sur la lumière">
      <defs>
        <linearGradient id="sc-wall" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#f6ead0" />
          <stop offset=".7" stopColor="#fbf1dc" />
          <stop offset="1" stopColor="#fff6e2" />
        </linearGradient>
        <radialGradient id="sc-glow" cx=".88" cy=".42" r=".75">
          <stop offset="0" stopColor="#fff3c4" stopOpacity="1" />
          <stop offset=".45" stopColor="#ffe9a6" stopOpacity=".45" />
          <stop offset="1" stopColor="#ffe9a6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sc-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ead6ad" />
          <stop offset="1" stopColor="#e2c897" />
        </linearGradient>
        <linearGradient id="sc-beam" x1="1" y1="0" x2="0" y2=".6">
          <stop offset="0" stopColor="#ffe28a" stopOpacity=".85" />
          <stop offset="1" stopColor="#ffe28a" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="sc-open" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fffbea" />
          <stop offset="1" stopColor="#ffe7a0" />
        </linearGradient>
        <linearGradient id="sc-door" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c98544" />
          <stop offset="1" stopColor="#a8652b" />
        </linearGradient>
        <linearGradient id="sc-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#14834b" />
          <stop offset="1" stopColor="#0a5a31" />
        </linearGradient>
      </defs>

      {/* Mur, lumière, plinthe, sol */}
      <rect x="-40" width="780" height="372" fill="url(#sc-wall)" />
      <rect x="-40" width="780" height="480" fill="url(#sc-glow)" />
      <rect x="-40" y="364" width="780" height="8" fill="#e4cfa4" />
      <rect x="-40" y="372" width="780" height="108" fill="url(#sc-floor)" />

      {/* Cadre au mur : un soleil qui se lève */}
      <g transform="translate(232 92)">
        <rect width="136" height="96" rx="6" fill="#fffaf0" stroke="#b07a42" strokeWidth="5" />
        <rect x="12" y="12" width="112" height="72" fill="#fdeec6" />
        <circle cx="68" cy="70" r="24" fill="#f2c500" />
        <rect x="12" y="66" width="112" height="18" fill="#0b6b3a" />
        <rect x="12" y="78" width="112" height="6" fill="#c8102e" />
      </g>

      {/* Porte ouverte */}
      <rect x="548" y="96" width="112" height="276" fill="#c4874a" />
      <rect x="556" y="104" width="96" height="268" fill="url(#sc-open)" />
      <path d="M652 104 L690 92 L690 388 L652 372 Z" fill="url(#sc-door)" />
      <rect x="658" y="236" width="8" height="5" rx="2" fill="#6b3d14" />

      {/* Lumière sur le sol */}
      <path className="scene-beam" d="M556 372 L652 372 L420 480 L150 480 Z" fill="url(#sc-beam)" />

      {/* Tapis aux motifs */}
      <ellipse cx="300" cy="404" rx="232" ry="30" fill="#d9a441" opacity=".55" />
      <ellipse cx="300" cy="404" rx="212" ry="24" fill="none" stroke="#9c5b2b" strokeWidth="3" strokeDasharray="10 7" opacity=".55" />
      <ellipse cx="300" cy="404" rx="180" ry="18" fill="none" stroke="#0b6b3a" strokeWidth="2" opacity=".35" />

      {/* Plante */}
      <g transform="translate(26 260)">
        <path d="M30 40 C10 20 6 0 18 -30 C26 -6 34 14 30 40 Z" fill="#2e8b57" />
        <path d="M34 40 C44 10 62 -4 78 -14 C70 12 56 30 34 40 Z" fill="#237a49" />
        <path d="M32 42 C24 18 30 -10 46 -40 C50 -10 44 16 32 42 Z" fill="#3c9d65" />
        <path d="M8 44 H62 L56 104 H14 Z" fill="#b8693a" />
        <rect x="4" y="40" width="62" height="10" rx="3" fill="#9c5b2b" />
      </g>

      {/* Fauteuil gauche, tourné vers la droite */}
      <g>
        <ellipse cx="150" cy="392" rx="84" ry="8" fill="#8f6a35" opacity=".25" />
        <path d="M100 384 L92 344 M212 384 L220 344" stroke="#6f4219" strokeWidth="8" strokeLinecap="round" />
        <rect x="78" y="208" width="54" height="138" rx="26" fill="url(#sc-back)" />
        <rect x="92" y="300" width="138" height="52" rx="20" fill="#0d6d3d" />
        <rect x="118" y="276" width="104" height="26" rx="13" fill="#11804a" />
      </g>

      {/* Fauteuil droit, tourné vers la gauche */}
      <g transform="translate(600 0) scale(-1 1)">
        <ellipse cx="150" cy="392" rx="84" ry="8" fill="#8f6a35" opacity=".25" />
        <path d="M100 384 L92 344 M212 384 L220 344" stroke="#6f4219" strokeWidth="8" strokeLinecap="round" />
        <rect x="78" y="208" width="54" height="138" rx="26" fill="url(#sc-back)" />
        <rect x="92" y="300" width="138" height="52" rx="20" fill="#0d6d3d" />
        <rect x="118" y="276" width="104" height="26" rx="13" fill="#11804a" />
      </g>

      {/* Petite table et thé */}
      <g>
        <ellipse cx="300" cy="392" rx="30" ry="5" fill="#8f6a35" opacity=".3" />
        <path d="M300 300 V386 M282 388 H318" stroke="#7a4a22" strokeWidth="6" strokeLinecap="round" />
        <ellipse cx="300" cy="300" rx="40" ry="9" fill="#b97a3e" />
        <ellipse cx="300" cy="297" rx="40" ry="8" fill="#cf9354" />
        <path d="M288 270 H312 L309 294 H291 Z" fill="#fffaf0" stroke="#d9c39a" strokeWidth="1.5" />
        <path d="M312 276 C322 276 322 288 311 288" fill="none" stroke="#d9c39a" strokeWidth="3" />
        <path className="scene-steam" d="M296 262 C290 252 302 246 296 236 M305 262 C299 252 311 246 305 236" fill="none" stroke="#c9b48c" strokeWidth="2" strokeLinecap="round" opacity=".7" />
      </g>
    </svg>
  );
}
