/* Illustration originale : deux fauteuils face à face et une porte ouverte sur la lumière */
export default function Illustration() {
  return (
    <svg className="illu" viewBox="0 0 520 420" role="img" aria-label="Deux fauteuils face à face près d'une porte ouverte sur la lumière">
      <defs>
        <linearGradient id="wall" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbf4e4" />
          <stop offset="1" stopColor="#f4e6c8" />
        </linearGradient>
        <linearGradient id="beam" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd46a" stopOpacity=".75" />
          <stop offset="1" stopColor="#ffd46a" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="opening" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff6d8" />
          <stop offset="1" stopColor="#ffe39a" />
        </linearGradient>
        <linearGradient id="door" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#d08a45" />
          <stop offset="1" stopColor="#b06a2c" />
        </linearGradient>
        <linearGradient id="seat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#13804a" />
          <stop offset="1" stopColor="#0a5c32" />
        </linearGradient>
        <radialGradient id="glow" cx=".82" cy=".45" r=".7">
          <stop offset="0" stopColor="#fff0bf" stopOpacity=".9" />
          <stop offset="1" stopColor="#fff0bf" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Mur et sol */}
      <rect x="0" y="0" width="520" height="320" rx="0" fill="url(#wall)" />
      <rect x="0" y="0" width="520" height="420" fill="url(#glow)" />
      <path d="M0 320 H520 V420 H0 Z" fill="#efdfbf" />
      <path d="M0 320 H520" stroke="#e2cda3" strokeWidth="2" />

      {/* Porte ouverte */}
      <rect x="382" y="70" width="104" height="250" fill="#c98b4c" />
      <rect x="390" y="78" width="88" height="242" fill="url(#opening)" />
      <path d="M478 78 L514 66 L514 334 L478 320 Z" fill="url(#door)" />
      <path d="M484 104 L508 97 L508 190 L484 194 Z M484 214 L508 211 L508 312 L484 306 Z" fill="none" stroke="#9a5a22" strokeWidth="2" opacity=".55" />
      <rect x="486" y="196" width="10" height="4" rx="2" fill="#6b3d14" />

      {/* Faisceau de lumière sur le sol */}
      <path d="M390 320 L478 320 L300 420 L60 420 Z" fill="url(#beam)" />

      {/* Fauteuil gauche */}
      <g>
        <path d="M66 214 C64 168 84 150 122 150 C160 150 172 170 170 214 Z" fill="url(#seat)" />
        <path d="M58 226 C58 212 70 206 86 206 H182 C196 206 204 214 204 228 V252 C204 260 198 266 190 266 H72 C64 266 58 260 58 252 Z" fill="#0d6d3d" />
        <path d="M82 266 L70 322 M182 266 L194 322 M108 266 L104 310 M160 266 L164 310" stroke="#7a4a22" strokeWidth="7" strokeLinecap="round" />
      </g>

      {/* Fauteuil droit */}
      <g>
        <path d="M352 214 C354 168 334 150 296 150 C258 150 246 170 248 214 Z" fill="url(#seat)" />
        <path d="M360 226 C360 212 348 206 332 206 H236 C222 206 214 214 214 228 V252 C214 260 220 266 228 266 H346 C354 266 360 260 360 252 Z" fill="#0d6d3d" />
        <path d="M336 266 L348 322 M236 266 L224 322 M310 266 L314 310 M258 266 L254 310" stroke="#7a4a22" strokeWidth="7" strokeLinecap="round" />
      </g>

      {/* Ombres douces */}
      <ellipse cx="132" cy="326" rx="78" ry="8" fill="#b9935a" opacity=".22" />
      <ellipse cx="286" cy="326" rx="78" ry="8" fill="#b9935a" opacity=".22" />
    </svg>
  );
}
