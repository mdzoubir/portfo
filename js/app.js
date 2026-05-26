/* =============================================================
   MOHAMED ZOUBIR PORTFOLIO — JAVASCRIPT CONTROLLER
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  // ⚡ Activate CSS reveal system — sections are visible by default without this
  document.body.classList.add('js-loaded');


  /* ============================================================
     i18n — TRANSLATIONS
     ============================================================ */

  const translations = {
    fr: {
      'nav.home': 'Accueil', 'nav.about': 'Profil', 'nav.timeline': 'Parcours',
      'nav.projects': 'Projets', 'nav.stack': 'Stack', 'nav.contact': 'Contact',
      'hero.eyebrow': 'Disponible pour des missions',
      'hero.subtitle': 'Ingénierie Applicative & Web',
      'hero.desc': "Développeur Full-Stack et étudiant à l'École 1337 (42 Network). Je me concentre sur la création d'architectures backend rigoureuses et d'interfaces logicielles fluides, performantes et centrées sur le produit.",
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
      'contact.phone.label': 'Téléphone', 'contact.email.label': 'Email',
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
      'hero.desc': "Full-Stack Developer and student at École 1337 (42 Network). I focus on building rigorous backend architectures and fluid, high-performance, product-centered software interfaces.",
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
      'contact.phone.label': 'Phone', 'contact.email.label': 'Email',
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

  /* ============================================================
     LANGUAGE SYSTEM
     ============================================================ */
  let currentLang = localStorage.getItem('portfolio-lang') || 'fr';
  let typewriterWords = translations[currentLang]['typewriter'];

  /* ============================================================
     TYPEWRITER — defined here so applyLang can call resetTypewriter
     ============================================================ */
  const typewriterEl = document.getElementById('typewriter-text');
  let tw_wordIdx = 0;
  let tw_charIdx = 0;
  let tw_deleting = false;
  let tw_timer = null;

  function typeStep() {
    if (!typewriterEl || !typewriterWords || typewriterWords.length === 0) return;
    const word = typewriterWords[tw_wordIdx % typewriterWords.length];
    if (!tw_deleting) {
      tw_charIdx++;
      typewriterEl.textContent = word.slice(0, tw_charIdx);
      if (tw_charIdx === word.length) {
        tw_deleting = true;
        tw_timer = setTimeout(typeStep, 1800);
        return;
      }
    } else {
      tw_charIdx--;
      typewriterEl.textContent = word.slice(0, tw_charIdx);
      if (tw_charIdx === 0) { tw_deleting = false; tw_wordIdx++; }
    }
    tw_timer = setTimeout(typeStep, tw_deleting ? 55 : 90);
  }

  function resetTypewriter() {
    clearTimeout(tw_timer);
    tw_charIdx = 0; tw_deleting = false; tw_wordIdx = 0;
    if (typewriterEl) typewriterEl.textContent = '';
    tw_timer = setTimeout(typeStep, 400);
  }

  /* ============================================================
     i18n — applyLang
     ============================================================ */
  const applyLang = (lang) => {
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

    typewriterWords = t['typewriter'];
    resetTypewriter();
  };

  applyLang(currentLang);

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'fr' ? 'en' : 'fr';
      localStorage.setItem('portfolio-lang', currentLang);
      applyLang(currentLang);
    });
  }

  /* ============================================================
     THEME SYSTEM
     ============================================================ */
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('portfolio-theme') ||
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  html.setAttribute('data-theme', savedTheme);

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('portfolio-theme', next);
    });
  }

  /* ============================================================
     NAVBAR — scroll effect & mobile menu
     ============================================================ */
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-menu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
  }

  // Close mobile menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger && hamburger.classList.remove('open');
      navLinks && navLinks.classList.remove('open');
    });
  });

  /* ============================================================
     ACTIVE NAV LINK on scroll
     ============================================================ */
  const sections = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav-link');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinkEls.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => navObserver.observe(s));

  /* ============================================================
     REVEAL ON SCROLL
     ============================================================ */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

  const allReveal = document.querySelectorAll('.reveal');
  allReveal.forEach(el => revealObserver.observe(el));

  // Safety fallback: reveal anything already in viewport on load
  window.addEventListener('load', () => {
    allReveal.forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        setTimeout(() => el.classList.add('visible'), i * 60);
      }
    });
  });


  // Typewriter already initialised above — resetTypewriter() called via applyLang()

  /* ============================================================
     LANG BAR ANIMATION (for language tab)
     ============================================================ */
  const animateLangBars = () => {
    document.querySelectorAll('.lang-bar').forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0';
      setTimeout(() => { bar.style.width = width; }, 50);
    });
  };

  /* ============================================================
     TABS
     ============================================================ */
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      const parent = btn.closest('.tabs');
      parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      parent.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(`tab-content-${tab}`);
      if (panel) {
        panel.classList.add('active');
        if (tab === 'languages') animateLangBars();
      }
    });
  });

  // Trigger lang bar animation when lang tab is active on load
  if (document.querySelector('.tab-panel.active')?.id === 'tab-content-languages') {
    animateLangBars();
  }

  /* ============================================================
     PROJECT FILTERS
     ============================================================ */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        if (show) {
          card.style.opacity = '1';
          card.style.transform = '';
          card.style.display = '';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            if (btn.dataset.filter === filter) card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  /* ============================================================
     MODALS
     ============================================================ */
  const openModal = (id) => {
    const modal = document.getElementById(`modal-${id}`);
    if (!modal) return;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modal.querySelector('.modal-box')?.scrollTo(0, 0);
  };

  const closeModal = (modal) => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  const closeAllModals = () => {
    document.querySelectorAll('.modal.open').forEach(m => closeModal(m));
  };

  // Open via card buttons
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      openModal(trigger.dataset.modal);
    });
  });

  // Close via backdrop
  document.querySelectorAll('.modal-backdrop').forEach(bd => {
    bd.addEventListener('click', () => closeAllModals());
  });

  // Close via X button
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) closeModal(modal);
    });
  });

  // Keyboard escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAllModals();
  });

  /* ============================================================
     CONTACT FORM — Formspree
     ============================================================ */
  const form = document.getElementById('contact-form');
  const successOverlay = document.getElementById('form-success');
  const resetBtn = document.getElementById('btn-success-reset');
  const submitBtn = document.getElementById('contact-submit');
  const errorEl = document.getElementById('form-error');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (errorEl) errorEl.textContent = '';

      // Check if Formspree ID has been replaced
      const action = form.getAttribute('action');
      if (!action || action.includes('YOUR_FORM_ID')) {
        if (errorEl) errorEl.textContent = '⚠ Veuillez configurer votre Formspree ID dans le HTML.';
        return;
      }

      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = '...';

      try {
        const data = new FormData(form);
        const res = await fetch(action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          form.reset();
          submitBtn.classList.remove('loading');
          submitBtn.classList.add('success');
          const origText = submitBtn.innerHTML;
          submitBtn.innerHTML = '✓';
          setTimeout(() => {
            submitBtn.classList.remove('success');
            submitBtn.innerHTML = origText;
          }, 2000);
          if (successOverlay) successOverlay.classList.add('active');
        } else {
          const json = await res.json().catch(() => ({}));
          const msg = json?.errors?.map(e => e.message).join(', ') || 'Erreur lors de l\'envoi.';
          if (errorEl) errorEl.textContent = msg;
        }
      } catch (err) {
        if (errorEl) errorEl.textContent = 'Erreur réseau. Vérifiez votre connexion.';
      } finally {
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        submitBtn.textContent = originalText;
      }
    });
  }

  if (resetBtn && successOverlay) {
    resetBtn.addEventListener('click', () => {
      successOverlay.classList.remove('active');
    });
  }

  /* ============================================================
     SCROLL INDICATOR hide after first scroll
     ============================================================ */
  const scrollInd = document.querySelector('.scroll-indicator');
  if (scrollInd) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) scrollInd.style.opacity = '0';
      else scrollInd.style.opacity = '1';
    }, { passive: true });
  }

  /* ============================================================
     LANG BAR INIT — animate on tab open
     ============================================================ */
  // Trigger on first visit if lang tab visible
  const langTabBtn = document.getElementById('tab-btn-languages');
  if (langTabBtn) {
    langTabBtn.addEventListener('click', () => {
      setTimeout(animateLangBars, 50);
    });
  }
  /* ============================================================
     SCROLL PROGRESS BAR
     ============================================================ */
  const progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = pct + '%';
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  /* ============================================================
     CUSTOM CURSOR
     ============================================================ */
  const cursor = document.getElementById('custom-cursor');
  if (cursor && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let cx = 0, cy = 0, tx = 0, ty = 0;
    document.addEventListener('mousemove', e => {
      tx = e.clientX; ty = e.clientY;
      if (!cursor.classList.contains('visible')) cursor.classList.add('visible');
    });

    // Smooth follow via rAF
    const followCursor = () => {
      cx += (tx - cx) * 0.15;
      cy += (ty - cy) * 0.15;
      cursor.style.left = cx + 'px';
      cursor.style.top = cy + 'px';
      requestAnimationFrame(followCursor);
    };
    requestAnimationFrame(followCursor);

    // Expand on interactive elements
    const interactiveEls = 'a, button, .btn, .filter-btn, .overlay-btn, .nav-btn, .social-link, .footer-social, .btn-icon-link, .btn-ghost, input, textarea';
    document.querySelectorAll(interactiveEls).forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });

    document.addEventListener('mouseleave', () => cursor.classList.remove('visible'));
  }

  /* ============================================================
     COUNTER ANIMATION on metrics
     ============================================================ */
  const counterEls = document.querySelectorAll('[data-count]');
  let counterAnimated = false;

  function animateCounters() {
    if (counterAnimated) return;
    counterAnimated = true;

    counterEls.forEach(el => {
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const duration = target > 100 ? 1800 : 1200;
      const start = performance.now();
      el.classList.add('counting');

      const step = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  // Also animate hero stats (1337, 4+, 6+) on first visibility
  if (counterEls.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          counterObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });

    const metricsBar = document.querySelector('.metrics-bar');
    if (metricsBar) counterObserver.observe(metricsBar);
  }

  /* ============================================================
     HERO STAT COUNT-UP (in the card)
     ============================================================ */
  const heroStats = [
    { el: document.getElementById('stat-1337'), target: 1337, suffix: '' },
    { el: document.getElementById('stat-years'), target: 4, suffix: '+' },
    { el: document.getElementById('stat-fw'), target: 6, suffix: '+' }
  ];

  function animateHeroStats() {
    heroStats.forEach(({ el, target, suffix }) => {
      if (!el) return;
      const duration = target > 100 ? 2000 : 800;
      const start = performance.now();
      const step = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  // Trigger hero stat counting after a short delay on load
  setTimeout(animateHeroStats, 800);

  /* ============================================================
     BUTTON RIPPLE EFFECT
     ============================================================ */
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const existing = this.querySelector('.ripple');
      if (existing) existing.remove();

      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });

  /* ============================================================
     FORM SUBMIT — Loading / Success States
     (Enhances existing form handler — adds loading class)
     ============================================================ */
  if (form && submitBtn) {
    form.addEventListener('submit', () => {
      submitBtn.classList.add('loading');
    }, { capture: true });
  }
  /* ============================================================
     PAGE LOADER — dismiss after load
     ============================================================ */
  const loader = document.getElementById('page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 300);
      // Remove from DOM after transition
      setTimeout(() => loader.remove(), 800);
    });
  }

  /* ============================================================
     BACK TO TOP BUTTON
     ============================================================ */
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ============================================================
     ANIMATED PAGE TITLE — cycles in browser tab
     ============================================================ */
  const pageTitles = ['Mohamed Zoubir', 'Full-Stack Developer', '1337 Student'];
  let titleIdx = 0;
  let titleVisible = true;

  document.addEventListener('visibilitychange', () => {
    titleVisible = !document.hidden;
    if (titleVisible) {
      document.title = 'Mohamed Zoubir | Développeur Full-Stack';
      titleIdx = 0;
    }
  });

  setInterval(() => {
    if (!titleVisible) {
      document.title = pageTitles[titleIdx % pageTitles.length];
      titleIdx++;
    }
  }, 2000);

});
