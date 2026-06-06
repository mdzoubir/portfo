/* =============================================================
   i18n — TRANSLATIONS & LANGUAGE SYSTEM
   ============================================================= */

const translations = {
  fr: {
    'nav.home': 'Accueil', 'nav.about': 'Profil', 'nav.timeline': 'Parcours',
    'nav.projects': 'Projets', 'nav.stack': 'Stack', 'nav.contact': 'Contact',
    'hero.eyebrow': 'Disponible pour des missions',
    'hero.subtitle': 'Ingénierie Applicative & Web',
    'hero.desc': "Développeur Full-Stack avec 2+ ans d'expérience en production — APIs backend, déploiements cloud et interfaces frontend. Approfondissement en ingénierie système à l'École 1337 (42 Network).",
    'hero.btn.contact': 'Me contacter', 'hero.btn.cv': 'Télécharger CV',
    'widget.title': 'profile.json',
    'widget.label.status': 'statut', 'widget.val.status': '"Étudiant 1337 / Dev"',
    'widget.label.origin': 'localisation', 'widget.label.domains': 'stack',
    'widget.label.links': 'liens',
    'metric.label.1': 'Algorithmique & C/C++', 'metric.label.2': "Ans d'expérience", 'metric.label.3': 'Frameworks',
    'avatar.available': 'Disponible',
    'section.about.badge': 'PRÉSENTATION',
    'section.about.title': 'Concevoir des architectures fiables',
    'section.about.desc': "Mon approche repose sur l'implémentation de solutions logicielles structurées, la clarté du code et l'agilité technique.",
    'about.content.title': 'Rigueur technique & résolution de problèmes',
    'about.text': "Mon cursus au sein de l'<strong>École 1337 (42 Network)</strong> a consolidé ma capacité à appréhender des concepts de bas niveau (gestion mémoire, programmation système C/C++) et à résoudre des problématiques architecturales complexes en peer-learning.<br><br>J'interviens sur l'ensemble du cycle de développement, depuis la modélisation de bases relationnelles (PostgreSQL, MySQL) jusqu'au déploiement dans le cloud (Heroku, OVH) et l'intégration de maquettes réactives.",
    'tab.skills': 'Expertise', 'tab.languages': 'Langues',
    'skills.cat.languages': 'Langages', 'skills.cat.backend': 'Backend', 'skills.cat.frontend': 'Frontend',
    'lang.ar': 'Arabe', 'lang.ar.level': 'Maternelle',
    'lang.en': 'Anglais', 'lang.en.level': 'Avancé',
    'lang.fr': 'Français', 'lang.fr.level': 'Intermédiaire',
    'section.timeline.badge': 'EXPÉRIENCE & ÉDUCATION',
    'section.timeline.title': 'Chronologie Technique',
    'section.timeline.desc': 'Mon parcours académique et mes interventions logicielles professionnelles.',
    'tl.1.date': '2025 — Présent', 'tl.1.org': 'École 1337 | 42 Network', 'tl.1.title': 'Cursus Ingénierie Logicielle',
    'tl.1.desc': "Apprentissage rigoureux basé sur la peer-education, axé sur les architectures systèmes (C/C++), la gestion d'allocation mémoire, l'algorithmique complexe et la gestion d'infrastructure.",
    'tl.2.date': '2024 — Présent', 'tl.2.org': 'OFPPT / ISGI Khouribga', 'tl.2.title': 'Développement Digital (Full-Stack)',
    'tl.2.desc': "Formation approfondie axée sur les patrons de conception (Design Patterns), l'administration de bases de données et la sécurisation des architectures web d'entreprise.",
    'tl.3.date': 'Avr 2023 — Mai 2024', 'tl.3.org': 'Automize | Freelance', 'tl.3.title': 'Développeur Full-Stack',
    'tl.3.desc': '<li>Développement d\'applications et de services web sous Django et Python.</li><li>Conception et documentation d\'APIs REST asynchrones (Django Rest Framework).</li><li>Déploiement, configuration d\'infrastructures et hébergement sous Heroku et OVH Cloud.</li><li>Gestion continue du code source et collaboration via Git/GitHub.</li>',
    'tl.4.date': '2022', 'tl.4.org': 'Bzcorp', 'tl.4.title': 'Développeur Full-Stack',
    'tl.4.desc': '<li>Conception et développement d\'une plateforme de gestion locative immobilière.</li><li>Mise en place de la stack technique : Spring Boot (Java) pour l\'API et Angular pour le frontend.</li><li>Modélisation des tables et intégration de la base de données relationnelle MySQL (JPA/Hibernate).</li>',
    'tl.5.date': 'Oct 2021 — Déc 2021', 'tl.5.org': 'Diidasko Technology', 'tl.5.title': 'Stage Développeur Backend',
    'tl.5.desc': '<li>Développement de microservices de données complexes en Spring Boot.</li><li>Écriture et automatisation de plans de tests unitaires et d\'intégration.</li><li>Optimisation de requêtes SQL complexes et restructuration des réponses JSON.</li>',
    'tl.6.date': '2019 — 2021', 'tl.6.org': 'YouCode | Youssofia', 'tl.6.title': 'Formation Développement Web',
    'tl.6.desc': "Formation intensive axée sur l'apprentissage par la pratique en méthode Agile (Scrum) et l'intégration des concepts MVC (PHP, Laravel, JavaScript, MySQL).",
    'section.projects.badge': 'SELECTED WORKS',
    'section.projects.title': 'Applications Conçues',
    'section.projects.desc': "Une sélection d'applications réelles conçues avec des technologies industrielles.",
    'filter.all': 'Tous', 'filter.fullstack': 'Full-Stack', 'filter.backend': 'Back-End', 'filter.frontend': 'Front-End',
    'project.rentease.title': 'RentEase',
    'project.rentease.desc': "Plateforme de gestion locative immobilière facilitant l'interaction opérationnelle entre propriétaires et locataires.",
    'project.automize.title': 'Automize REST Services',
    'project.automize.desc': "Architecture d'APIs REST asynchrones hautement sécurisées pour l'automatisation de flux administratifs en entreprise.",
    'project.larastore.title': 'Inas Admin Hub',
    'project.larastore.desc': "Portail interne de suivi d'approvisionnement et de centralisation des indicateurs d'achat.",
    'project.culturalevents.title': 'Cultural Moroccan Events',
    'project.culturalevents.desc': "Plateforme de découverte d'événements culturels marocains en temps réel, avec filtres par région et catégorie.",
    'project.quordle.title': 'Quordle Game',
    'project.quordle.desc': "Jeu de mots interactif inspiré de Wordle, permettant de deviner 4 mots simultanément avec animations temps réel.",
    'project.knowplus.title': 'Knowplus',
    'project.knowplus.desc': "Plateforme e-learning belge permettant la gestion de cours, modules et utilisateurs avec tableau de bord interactif.",
    'project.link.details': 'Détails',
    'project.private': 'Code source confidentiel',
    'section.services.badge': 'TECHNOLOGIES',
    'section.services.title': 'Stack & Outils',
    'section.services.desc': "Les technologies que j'utilise au quotidien pour concevoir, construire et déployer des logiciels fiables.",
    'stack.cat.languages': 'Langages', 'stack.cat.backend': 'Backend', 'stack.cat.frontend': 'Frontend',
    'stack.cat.db': 'Bases de données', 'stack.cat.devops': 'DevOps / Cloud',
    'section.contact.badge': 'DISPONIBILITÉ',
    'section.contact.title': 'Coordonnées',
    'section.contact.desc': "Je suis à votre disposition pour toute proposition de collaboration ou opportunité de stage.",
    'contact.info.title': 'Discutons de vos besoins',
    'contact.info.desc': "Je suis à votre disposition pour étudier vos propositions de projets, opportunités de stage de fin d'études ou collaborations techniques.",
    'contact.phone.label': 'Téléphone', 'contact.phone.reveal': 'Cliquer pour révéler', 'contact.email.label': 'Email',
    'contact.location.label': 'Adresse', 'contact.location.val': 'Beni Mellal, Maroc',
    'form.name.label': 'Nom complet', 'form.email.label': 'Email',
    'form.subject.label': 'Objet', 'form.message.label': 'Message',
    'form.name.placeholder': 'Votre nom', 'form.email.placeholder': 'votre@email.com',
    'form.subject.placeholder': 'Objet du message', 'form.message.placeholder': 'Votre message...',
    'form.submit': 'Envoyer le message',
    'form.success.title': 'Message envoyé !',
    'form.success.desc': 'Merci pour votre message. Je vous recontacterai rapidement.',
    'form.success.btn': 'Envoyer un autre',
    'footer.copy': '© 2026 Mohamed Zoubir. Tous droits réservés.',
    'typewriter': ["Développeur Full-Stack", "Étudiant École 1337", "Concepteur d'APIs Robustes", "Passionné d'Ingénierie Logicielle"]
  },
  en: {
    'nav.home': 'Home', 'nav.about': 'Profile', 'nav.timeline': 'Journey',
    'nav.projects': 'Projects', 'nav.stack': 'Stack', 'nav.contact': 'Contact',
    'hero.eyebrow': 'Available for projects',
    'hero.subtitle': 'Applied Engineering & Web',
    'hero.desc': "Full-Stack Developer with 2+ years of production experience across backend APIs, cloud deployments, and frontend interfaces. Currently deepening low-level engineering at École 1337 (42 Network).",
    'hero.btn.contact': 'Contact me', 'hero.btn.cv': 'Download CV',
    'widget.title': 'profile.json',
    'widget.label.status': 'status', 'widget.val.status': '"1337 Student / Dev"',
    'widget.label.origin': 'location', 'widget.label.domains': 'stack',
    'widget.label.links': 'links',
    'metric.label.1': 'Algorithms & C/C++', 'metric.label.2': 'Years of exp.', 'metric.label.3': 'Frameworks',
    'avatar.available': 'Available',
    'section.about.badge': 'PRESENTATION',
    'section.about.title': 'Designing Reliable Architectures',
    'section.about.desc': "My approach is grounded in implementing structured software solutions, code clarity, and technical agility.",
    'about.content.title': 'Technical Rigor & Problem Solving',
    'about.text': "My curriculum at <strong>École 1337 (42 Network)</strong> strengthened my ability to grasp low-level concepts (memory management, C/C++ systems programming) and to solve complex architectural challenges through peer-learning.<br><br>I work across the full development cycle — from relational database modeling (PostgreSQL, MySQL) to cloud deployment (Heroku, OVH) and reactive interface integration.",
    'tab.skills': 'Expertise', 'tab.languages': 'Languages',
    'skills.cat.languages': 'Languages', 'skills.cat.backend': 'Backend', 'skills.cat.frontend': 'Frontend',
    'lang.ar': 'Arabic', 'lang.ar.level': 'Native',
    'lang.en': 'English', 'lang.en.level': 'Advanced',
    'lang.fr': 'French', 'lang.fr.level': 'Intermediate',
    'section.timeline.badge': 'EXPERIENCE & EDUCATION',
    'section.timeline.title': 'Technical Timeline',
    'section.timeline.desc': 'My academic background and professional software contributions.',
    'tl.1.date': '2025 — Present', 'tl.1.org': 'École 1337 | 42 Network', 'tl.1.title': 'Software Engineering Program',
    'tl.1.desc': "Rigorous peer-education learning focused on system architectures (C/C++), memory allocation, advanced algorithmics, and infrastructure management.",
    'tl.2.date': '2024 — Present', 'tl.2.org': 'OFPPT / ISGI Khouribga', 'tl.2.title': 'Digital Development (Full-Stack)',
    'tl.2.desc': "In-depth training focused on design patterns, database administration, and securing enterprise web architectures.",
    'tl.3.date': 'Apr 2023 — May 2024', 'tl.3.org': 'Automize | Freelance', 'tl.3.title': 'Full-Stack Developer',
    'tl.3.desc': '<li>Development of web applications and services using Django and Python.</li><li>Design and documentation of asynchronous REST APIs (Django Rest Framework).</li><li>Infrastructure deployment, configuration and hosting on Heroku and OVH Cloud.</li><li>Continuous source code management and collaboration via Git/GitHub.</li>',
    'tl.4.date': '2022', 'tl.4.org': 'Bzcorp', 'tl.4.title': 'Full-Stack Developer',
    'tl.4.desc': '<li>Design and development of a real estate rental management platform.</li><li>Set up the tech stack: Spring Boot (Java) for the API and Angular for the frontend.</li><li>Database modeling and MySQL relational integration (JPA/Hibernate).</li>',
    'tl.5.date': 'Oct 2021 — Dec 2021', 'tl.5.org': 'Diidasko Technology', 'tl.5.title': 'Backend Developer Intern',
    'tl.5.desc': '<li>Development of complex data microservices in Spring Boot.</li><li>Writing and automation of unit and integration test plans.</li><li>Optimization of complex SQL queries and restructuring of JSON responses.</li>',
    'tl.6.date': '2019 — 2021', 'tl.6.org': 'YouCode | Youssofia', 'tl.6.title': 'Web Development Training',
    'tl.6.desc': "Intensive hands-on training using Agile methodology (Scrum) and MVC concept integration (PHP, Laravel, JavaScript, MySQL).",
    'section.projects.badge': 'SELECTED WORKS',
    'section.projects.title': 'Built Applications',
    'section.projects.desc': "A selection of real-world applications built with industry-standard technologies.",
    'filter.all': 'All', 'filter.fullstack': 'Full-Stack', 'filter.backend': 'Back-End', 'filter.frontend': 'Front-End',
    'project.rentease.title': 'RentEase',
    'project.rentease.desc': "Real estate rental management platform facilitating operational interactions between landlords and tenants.",
    'project.automize.title': 'Automize REST Services',
    'project.automize.desc': "Highly secure asynchronous REST API architecture for automating enterprise administrative workflows.",
    'project.larastore.title': 'Inas Admin Hub',
    'project.larastore.desc': "Internal procurement tracking portal and purchasing indicator centralization dashboard.",
    'project.culturalevents.title': 'Cultural Moroccan Events',
    'project.culturalevents.desc': "Real-time Moroccan cultural events discovery platform with filtering by region and category.",
    'project.quordle.title': 'Quordle Game',
    'project.quordle.desc': "Interactive word game inspired by Wordle, allowing players to guess 4 words simultaneously with real-time animations.",
    'project.knowplus.title': 'Knowplus',
    'project.knowplus.desc': "Belgian e-learning platform for managing courses, modules and users with an interactive dashboard.",
    'project.link.details': 'Details',
    'project.private': 'Private codebase',
    'section.services.badge': 'TECHNOLOGIES',
    'section.services.title': 'Stack & Tools',
    'section.services.desc': "The technologies I use day-to-day to design, build, and deploy reliable software.",
    'stack.cat.languages': 'Languages', 'stack.cat.backend': 'Backend', 'stack.cat.frontend': 'Frontend',
    'stack.cat.db': 'Databases', 'stack.cat.devops': 'DevOps / Cloud',
    'section.contact.badge': 'AVAILABILITY',
    'section.contact.title': 'Contact Details',
    'section.contact.desc': "I am available for any collaboration proposal or internship opportunity.",
    'contact.info.title': "Let's Discuss Your Needs",
    'contact.info.desc': "I'm available to study your project proposals, end-of-study internship opportunities, or technical collaborations.",
    'contact.phone.label': 'Phone', 'contact.phone.reveal': 'Click to reveal', 'contact.email.label': 'Email',
    'contact.location.label': 'Address', 'contact.location.val': 'Beni Mellal, Morocco',
    'form.name.label': 'Full Name', 'form.email.label': 'Email',
    'form.subject.label': 'Subject', 'form.message.label': 'Message',
    'form.name.placeholder': 'Your name', 'form.email.placeholder': 'your@email.com',
    'form.subject.placeholder': 'Message subject', 'form.message.placeholder': 'Your message...',
    'form.submit': 'Send Message',
    'form.success.title': 'Message Sent!',
    'form.success.desc': 'Thank you for your message. I will get back to you shortly.',
    'form.success.btn': 'Send Another',
    'footer.copy': '© 2026 Mohamed Zoubir. All rights reserved.',
    'typewriter': ["Full-Stack Developer", "École 1337 Student", "Robust API Designer", "Software Engineering Enthusiast"]
  }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'fr';

/** Callback to reset the typewriter when language changes */
let onLangChange = null;

export function setOnLangChange(cb) {
  onLangChange = cb;
}

export function getTypewriterWords() {
  return translations[currentLang]['typewriter'];
}

export function getCurrentLang() {
  return currentLang;
}

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
  });

  document.documentElement.setAttribute('lang', lang);
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) langBtn.textContent = lang === 'fr' ? 'EN' : 'FR';

  if (onLangChange) onLangChange();
}

export function init() {
  applyLang(currentLang);

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'fr' ? 'en' : 'fr';
      localStorage.setItem('portfolio-lang', currentLang);
      applyLang(currentLang);
    });
  }
}
