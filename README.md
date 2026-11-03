# Cellule d'écoute ASEBEM

Site React (Vite) + petit serveur Node (Express + Nodemailer). Chaque message du formulaire est envoyé par email à la boîte de la cellule, sans aucune information sur la personne qui l'a écrit.

## Lancer en local

```bash
npm install    # installe tout (racine, front et back) en une fois
npm run dev    # lance le front (:5173) et le back (:5050) ensemble
```

Ouvrir http://localhost:5173. Ctrl+C arrête les deux.

En production : `npm start` (compile le site puis le serveur le sert sur le port 5050).

## Configurer l'email

1. Sur le compte `asebem.nationale@gmail.com`, activer la validation en 2 étapes.
2. Compte Google > Sécurité > Mots de passe des applications : générer un mot de passe.
3. Le mettre dans `server/.env` (`SMTP_PASS`) et passer `DRY_RUN=false`.

## Modifier le contenu

Tout est dans `client/src/data/content.js` : numéro WhatsApp (+212 664-053895), email (asebem.nationale@gmail.com), annuaire, charte, textes.

## Ce qui garantit l'anonymat

Côté serveur : aucun journal des requêtes, aucune base de données, aucun cookie, aucune session, `trust proxy` désactivé. L'IP sert seulement à l'anti-spam, hachée avec un sel qui change chaque heure, gardée en mémoire vive et jamais écrite. L'email part du compte de la cellule vers lui-même : l'expéditeur visible n'est jamais la personne. Seul le jour est indiqué, pas l'heure exacte.

Côté site : aucune police, image, script ou statistique externe (aucune requête vers Google ou autre), `Referrer-Policy: no-referrer`, formulaire vidé du navigateur après l'envoi, bouton « Quitter vite » et touche Échap qui remplacent la page dans l'historique.

Non indexé : `robots.txt` bloque tout, balises `noindex` dans la page et en-tête `X-Robots-Tag` sur toutes les réponses.

## Point important au déploiement

L'application ne garde aucune IP, mais l'hébergeur ou Nginx peuvent le faire par défaut. Sur le VPS, désactiver les logs d'accès pour ce site :

```nginx
server {
    server_name ecoute.asebem.org;
    access_log off;
    location / {
        proxy_pass http://127.0.0.1:5050;
        # ne PAS transmettre X-Forwarded-For / X-Real-IP
    }
}
```

Avec PM2 : `pm2 start server/index.js --name cellule-ecoute` (le serveur n'écrit que les erreurs d'envoi, sans contenu).

Le niveau « URGENT POSSIBLE » dans l'objet de l'email est une simple détection de mots-clés pour aider au tri : un référent doit toujours lire le message sous 48 h.
