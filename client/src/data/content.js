/*
  Tout le contenu du site est ici. Pour modifier un numéro, un texte ou
  le contact WhatsApp, il suffit de changer ce fichier.
*/

export const contact = {
  whatsapp: '212664053895',
  whatsappDisplay: '+212 664-053895',
  email: 'asebem.nationale@gmail.com',
  horaires: 'Réponse en général sous 48 h, du lundi au samedi'
};

export const urgences = [
  { label: 'Police', numero: '19', detail: 'en ville' },
  { label: 'Gendarmerie', numero: '177', detail: 'hors ville' },
  { label: 'Pompiers, ambulance', numero: '15', detail: 'urgence médicale' }
];

export const hero = {
  titre: 'Tu peux en parler ici. Sans dire qui tu es.',
  texte:
    "La cellule d'écoute de l'ASEBEM est un espace pour chaque étudiant ou stagiaire béninois au Maroc. Une galère d'accueil, de logement, d'études, une période difficile, un harcèlement, un abus, ou au contraire quelque chose de bien : tu peux le dire. On écoute sans juger, on protège ton anonymat, et on t'oriente vers de l'aide si tu le veux."
};

export const garanties = [
  { titre: 'Aucun nom demandé', texte: 'Ni nom, ni école, ni ville. Tu écris, c’est tout.' },
  { titre: 'Aucune trace', texte: 'Pas de compte, pas de cookie, pas d’adresse IP enregistrée.' },
  { titre: 'Personne ne sait que c’est toi', texte: 'Le message arrive sans expéditeur. Même les référents ignorent de qui il vient.' },
  { titre: 'Effacé après 6 mois', texte: 'Les messages bruts sont supprimés. Seule une synthèse reste.' }
];

export const portes = [
  {
    id: 'partager',
    titre: 'Partager',
    pour: 'Raconter une expérience, bonne ou mauvaise, sans attendre de réponse.',
    comment: 'Formulaire anonyme ci-dessous.',
    anonymat: '100 % anonyme : aucun nom, aucun contact, aucune adresse IP. Personne ne peut savoir que le message vient de toi.',
    cible: '#formulaire',
    action: 'Écrire un message'
  },
  {
    id: 'parler',
    titre: 'Parler à quelqu’un',
    pour: 'Tu as besoin d’être écouté par une vraie personne.',
    comment: 'WhatsApp de la cellule, email dédié, ou demande de rappel dans le formulaire.',
    anonymat: 'Sur WhatsApp ou par email, ton numéro ou ton adresse sont visibles par les référents. Pour rester anonyme, utilise le formulaire.',
    cible: '#parler',
    action: 'Contacter un référent'
  },
  {
    id: 'accompagner',
    titre: 'Être accompagné',
    pour: 'Tu as besoin d’aide médicale, psychologique, juridique ou de sécurité.',
    comment: 'Annuaire ci-dessous, et orientation personnalisée par un référent.',
    anonymat: 'Tu contactes le professionnel toi-même, ou avec un référent si tu le demandes.',
    cible: '#annuaire',
    action: 'Voir l’annuaire'
  }
];

export const formulaire = {
  themes: [
    { v: 'accueil', l: 'Accueil' },
    { v: 'logement', l: 'Logement' },
    { v: 'etudes', l: 'Études' },
    { v: 'argent', l: 'Argent' },
    { v: 'sante', l: 'Santé' },
    { v: 'discrimination', l: 'Discrimination' },
    { v: 'harcelement', l: 'Harcèlement ou abus' },
    { v: 'positif', l: 'Expérience positive' },
    { v: 'autre', l: 'Autre' }
  ],
  ressenti: [
    { v: 'positive', l: 'Positive' },
    { v: 'negative', l: 'Négative' },
    { v: 'les_deux', l: 'Les deux' }
  ],
  encore: [
    { v: 'oui', l: 'Oui' },
    { v: 'non', l: 'Non' },
    { v: 'ne_sait_pas', l: 'Je ne sais pas' }
  ],
  attente: [
    { v: 'partager', l: 'Rien, juste partager' },
    { v: 'rappel', l: 'Qu’on me rappelle' },
    { v: 'orienter', l: 'Qu’on m’oriente vers un professionnel' },
    { v: 'agir', l: 'Que l’association agisse pour éviter que ça se reproduise' }
  ],
  referent: [
    { v: 'femme', l: 'Une femme' },
    { v: 'homme', l: 'Un homme' },
    { v: 'egal', l: 'Peu importe' }
  ]
};

export const ecoute = [
  'On te croit.',
  'Merci d’avoir parlé, ce n’est pas facile.',
  'Ce qui t’est arrivé n’est pas de ta faute.',
  'Tu ne dois aucun détail que tu ne veux pas donner.',
  'C’est toi qui choisis la suite.'
];

export const annuaire = [
  { besoin: 'Danger immédiat en ville', contact: 'Police secours', numeros: ['19'], note: '24 h/24, gratuit' },
  { besoin: 'Danger immédiat hors ville', contact: 'Gendarmerie royale', numeros: ['177'], note: '24 h/24, gratuit' },
  { besoin: 'Blessure, malaise, urgence médicale', contact: 'Protection civile, ambulance', numeros: ['15', '141'], note: 'Ou les urgences de l’hôpital le plus proche. SAMU au 141.' },
  { besoin: 'Femme ou fille victime de violence', contact: 'Kolona Maak (UNFM)', numeros: ['8350'], note: 'Psychologues et assistantes sociales, écoute et orientation' },
  { besoin: 'Mineur en danger, ou adulte qui signale un mineur', contact: 'Centre d’écoute 2511 (ONDE)', numeros: ['2511', '0800002511'], note: '9 h à 16 h, gratuit et confidentiel. 2511@onde.ma' },
  {
    besoin: 'Écoute, soutien psychologique et juridique (femmes)',
    contact: 'Centres Annajda (UAF)',
    numeros: ['0537727222', '0522816134', '0524340018', '0535640692', '0539957775'],
    villes: ['Rabat', 'Casablanca', 'Marrakech', 'Fès', 'Tanger'],
    note: '13 villes au total'
  },
  { besoin: 'Aide juridique, droits des femmes', contact: 'AMVEF (Casablanca)', numeros: ['0522268667'], note: 'Accompagnement des victimes de violence' },
  { besoin: 'Hébergement d’urgence (femmes)', contact: 'S.O.S Annajda, Rabat', numeros: ['0668816325'], note: 'Centre d’accueil' },
  { besoin: 'Ressortissant béninois en difficulté', contact: 'Ambassade du Bénin, Rabat', numeros: [], note: 'Numéro officiel en cours de confirmation auprès de l’ambassade' }
];

export const annuaireNote =
  "Le Maroc n'a pas de ligne nationale d'écoute générale. Les garçons et les hommes victimes ont aussi le droit d'être aidés : écris à la cellule, un référent t'orientera vers un professionnel de confiance. Cet annuaire est vérifié tous les 6 mois.";

export const estPas = {
  est: [
    'Un espace d’expression anonyme, pour le bon comme pour le mauvais.',
    'Un premier point de contact humain pour qui veut parler.',
    'Un relais vers des professionnels : santé, psychologie, droit, police, ambassade.'
  ],
  nEstPas: [
    'Un tribunal ou une enquête : la cellule ne juge pas et ne désigne personne.',
    'Un service de soins : les référents ne sont pas thérapeutes.',
    'Un service d’urgence : en cas de danger immédiat, appelle le 19 ou le 15.'
  ]
};

export const charte = [
  { t: 'Anonymat par défaut', d: 'Le formulaire ne demande ni nom, ni école, ni ville. Aucun compte, aucune adresse IP, aucun cookie de suivi n’est enregistré.' },
  { t: 'Contact seulement si tu le veux', d: 'Un numéro ou un email laissé volontairement sert uniquement à te rappeler, puis il est effacé une fois l’échange terminé.' },
  { t: 'Accès limité', d: 'Seuls les référents lisent les messages, sur un compte dédié à la cellule, protégé par mot de passe et validation en deux étapes.' },
  { t: 'Rien n’est publié tel quel', d: 'Aucun témoignage n’est diffusé dans les groupes ou sur les réseaux sans l’accord explicite de son auteur, et jamais avec des détails qui permettent de le reconnaître.' },
  { t: 'Aucune dénonciation publique', d: 'La cellule ne nomme jamais une personne mise en cause. Les suites, plainte ou signalement, t’appartiennent.' },
  { t: 'Pas de capture d’écran', d: 'Les référents ne copient, ne transfèrent et ne gardent aucun message sur leur téléphone personnel.' },
  { t: 'Conservation courte', d: 'Les messages bruts sont supprimés après 6 mois ; seule la synthèse anonymisée est gardée.' },
  { t: 'Les limites sont dites à l’avance', d: 'La confidentialité peut être levée dans un seul cas : un danger immédiat pour la vie de quelqu’un, ou un mineur en danger. Même alors, la personne en est informée et seul le strict nécessaire est transmis aux secours.' }
];

export const loiNote =
  'Au Maroc, le traitement des données personnelles est encadré par la loi 09-08 (CNDP). En restant anonyme par défaut, la cellule limite fortement les données traitées.';
