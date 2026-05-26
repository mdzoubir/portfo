/* ==========================================================================
   MOHAMED ZOUBIR PORTFOLIO - JAVASCRIPT CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // --- i18n Translation System (FR / EN) ---
    // =========================================================================

    const translations = {
        fr: {
            'nav.home': 'Accueil', 'nav.about': 'Profil', 'nav.timeline': 'Parcours',
            'nav.projects': 'Projets', 'nav.services': 'Services', 'nav.contact': 'Contact',
            'hero.subtitle': 'Ingénierie Applicative & Web',
            'hero.desc': "Développeur Full-Stack et étudiant à l'École 1337 (42 Network). Je me concentre sur la création d'architectures backend rigoureuses et d'interfaces logicielles fluides, performantes et centrées sur le produit.",
            'hero.btn.contact': 'Me contacter', 'hero.btn.cv': 'Télécharger CV (PDF)',
            'widget.title': 'Indicateurs clés', 'widget.label.status': 'Statut professionnel',
            'widget.val.status': 'Étudiant École 1337 / Développeur',
            'widget.label.origin': 'Origine & Action', 'widget.label.domains': 'Domaines clés',
            'widget.label.links': 'Liens directes',
            'section.about.num': '01 // PROFIL', 'section.about.badge': 'PRÉSENTATION',
            'section.about.title': 'Concevoir des architectures fiables',
            'section.about.desc': "Mon approche repose sur l'implémentation de solutions logicielles structurées, la clarté du code et l'agilité technique.",
            'about.content.title': 'Rigueur technique & résolution de problèmes',
            'about.text': "Mon cursus au sein de l'<strong>École 1337 (42 Network)</strong> a consolidé ma capacité à appréhender des concepts de bas niveau (gestion mémoire, programmation système C/C++) et à résoudre des problématiques architecturales complexes en peer-learning.<br><br>J'interviens sur l'ensemble du cycle de développement, depuis la modélisation de bases relationnelles (PostgreSQL, MySQL) jusqu'au déploiement dans le cloud (Heroku, OVH) et l'intégration de maquettes réactives.",
            'tab.skills': 'Expertise', 'tab.languages': 'Langues',
            'skills.cat.languages': 'Langages', 'skills.cat.backend': 'Backend', 'skills.cat.frontend': 'Frontend',
            'lang.ar': 'Arabe', 'lang.ar.level': 'Langue maternelle',
            'lang.en': 'Anglais', 'lang.en.level': 'Avancé / Technique',
            'lang.fr': 'Français', 'lang.fr.level': 'Intermédiaire',
            'metric.label.1': 'Algorithmique & C/C++', 'metric.label.2': 'Mois de dev actif', 'metric.label.3': 'Frameworks maîtrisés',
            'section.timeline.num': '02 // PARCOURS', 'section.timeline.badge': 'EXPÉRIENCE & ÉDUCATION',
            'section.timeline.title': 'Chronologie Technique',
            'section.timeline.desc': 'Mon parcours académique et mes interventions logicielles professionnelles.',
            'tl.1.date': '2025 - Présent', 'tl.1.org': 'École 1337 | 42 Network', 'tl.1.title': 'Cursus Ingénierie Logicielle',
            'tl.1.desc': "Apprentissage rigoureux basé sur la peer-education, axé sur les architectures systèmes (C/C++), la gestion d'allocation mémoire, l'algorithmique complexe et la gestion d'infrastructure.",
            'tl.2.date': '2024 - Présent', 'tl.2.org': 'OFPPT / ISGI Khouribga', 'tl.2.title': 'Développement Digital (Full-Stack)',
            'tl.2.desc': "Formation approfondie axée sur les patrons de conception (Design Patterns), l'administration de bases de données et la sécurisation des architectures web d'entreprise.",
            'tl.3.date': 'Avr 2023 - Mai 2024', 'tl.3.org': 'Automize | Freelance', 'tl.3.title': 'Développeur Full-Stack',
            'tl.3.desc': '<li>Développement d\'applications et de services web sous Django et Python.</li><li>Conception et documentation d\'APIs REST asynchrones (Django Rest Framework).</li><li>Déploiement, configuration d\'infrastructures et hébergement sous Heroku et OVH Cloud.</li><li>Gestion continue du code source et collaboration via Git/GitHub.</li>',
            'tl.4.date': '2022', 'tl.4.org': 'Bzcorp', 'tl.4.title': 'Développeur Full-Stack',
            'tl.4.desc': '<li>Conception et développement d\'une plateforme de gestion locative immobilière.</li><li>Mise en place de la stack technique : Spring Boot (Java) pour l\'API et Angular pour le frontend.</li><li>Modélisation des tables et intégration de la base de données relationnelle MySQL (JPA/Hibernate).</li>',
            'tl.5.date': 'Oct 2021 - Déc 2021', 'tl.5.org': 'Diidasko Technology', 'tl.5.title': 'Stage Développeur Backend',
            'tl.5.desc': '<li>Développement de microservices de données complexes en Spring Boot.</li><li>Écriture et automatisation de plans de tests unitaires et d\'intégration.</li><li>Optimisation de requêtes SQL complexes et restructuration des réponses JSON.</li>',
            'tl.6.date': '2019 - 2021', 'tl.6.org': 'YouCode | Youssofia', 'tl.6.title': 'Formation Développement Web',
            'tl.6.desc': "Formation intensive axée sur l'apprentissage par la pratique en méthode Agile (Scrum) et l'intégration des concepts MVC (PHP, Laravel, JavaScript, MySQL).",
            'section.projects.num': '03 // PROJETS', 'section.projects.badge': 'SELECTED WORKS',
            'section.projects.title': 'Applications Conçues',
            'section.projects.desc': "Une sélection d'applications réelles conçues avec des technologies industrielles.",
            'filter.all': 'Tous les projets', 'filter.fullstack': 'Full-Stack', 'filter.backend': 'Back-End', 'filter.frontend': 'Front-End',
            'project.rentease.title': 'RentEase', 'project.rentease.desc': "Plateforme de gestion locative immobilière facilitant l'interaction opérationnelle entre propriétaires et locataires.",
            'project.automize.title': 'Automize REST Services', 'project.automize.desc': "Architecture d'APIs REST asynchrones hautement sécurisées pour l'automatisation de flux administratifs en entreprise.",
            'project.larastore.title': 'Inas Admin Hub', 'project.larastore.desc': "Portail interne de suivi d'approvisionnement et de centralisation des indicateurs d'achat.",
            'project.culturalevents.title': 'Cultural Moroccan Events', 'project.culturalevents.desc': "Plateforme de découverte d'événements culturels marocains en temps réel, avec filtres par région et catégorie.",
            'project.quordle.title': 'Quordle Game', 'project.quordle.desc': "Jeu de mots interactif inspiré de Wordle, permettant de deviner 4 mots simultanément avec animations temps réel.",
            'project.knowplus.title': 'Knowplus', 'project.knowplus.desc': "Plateforme e-learning belge permettant la gestion de cours, modules et utilisateurs avec tableau de bord interactif.",
            'project.link.view': 'Consulter la fiche →', 'project.link.details': 'Détails du projet →',
            'section.services.num': '05 // SERVICES', 'section.services.badge': 'CE QUE JE FAIS',
            'section.services.title': 'Expertises Proposées',
            'section.services.desc': "Des solutions logicielles complètes, du back-end robuste aux interfaces réactives et aux APIs scalables.",
            'service.fullstack.title': 'Développement Full-Stack', 'service.fullstack.desc': "Conception d'applications web complètes avec Python/Django, Java/Spring Boot et Angular — de la base de données à l'interface utilisateur.",
            'service.backend.title': 'Développement Back-End', 'service.backend.desc': "Architecture de services back-end robustes et scalables utilisant Spring Boot, Django, Laravel et Hibernate avec bases de données relationnelles.",
            'service.api.title': 'APIs REST & Microservices', 'service.api.desc': "Conception et documentation d'APIs REST asynchrones, sécurisées par JWT, avec authentification avancée et déploiement cloud (Heroku, OVH).",
            'service.frontend.title': 'Développement Front-End', 'service.frontend.desc': "Création d'interfaces dynamiques et réactives avec Angular, HTML5, CSS3 et JavaScript — centrées sur la performance et l'expérience utilisateur.",
            'service.ecommerce.title': 'Solutions E-Commerce', 'service.ecommerce.desc': "Développement de boutiques en ligne performantes et sécurisées, avec paniers, paiements et tableaux de bord de gestion intégrés.",
            'service.db.title': 'Architecture Base de Données', 'service.db.desc': "Modélisation relationnelle et optimisation de requêtes SQL complexes avec PostgreSQL, MySQL et intégration ORM (Hibernate, Eloquent).",
            'section.contact.num': '06 // COMMENCER', 'section.contact.badge': 'DISPONIBILITÉ',
            'section.contact.title': 'Coordonnées', 'section.contact.desc': "Je suis à votre disposition pour toute proposition de collaboration ou opportunité de stage.",
            'contact.info.title': 'Discutons de vos besoins', 'contact.info.desc': "Je suis à votre disposition pour étudier vos propositions de projets, opportunités de stage de fin d'études ou collaborations techniques.",
            'contact.phone.label': 'Téléphone', 'contact.email.label': 'Email', 'contact.location.label': 'Adresse', 'contact.location.val': 'Beni Mellal, Maroc',
            'form.name.label': 'Nom complet', 'form.email.label': 'Email', 'form.subject.label': 'Objet', 'form.message.label': 'Votre message',
            'form.name.placeholder': 'Votre nom', 'form.email.placeholder': 'votre@email.com', 'form.subject.placeholder': 'Objet du message', 'form.message.placeholder': 'Votre message...',
            'form.submit': 'Envoyer le message', 'form.success.title': 'Message envoyé',
            'form.success.desc': 'Merci pour votre message. Je vous recontacterai rapidement.',
            'form.success.btn': 'Envoyer un autre message',
            'footer.copy': '© 2026 Mohamed Zoubir. Tous droits réservés.',
            'typewriter': ["Développeur Full-Stack", "Cursus Ingénierie Logicielle", "Concepteur d'APIs Robustes"]
        },
        en: {
            'nav.home': 'Home', 'nav.about': 'Profile', 'nav.timeline': 'Journey',
            'nav.projects': 'Projects', 'nav.services': 'Services', 'nav.contact': 'Contact',
            'hero.subtitle': 'Applied Engineering & Web',
            'hero.desc': "Full-Stack Developer and student at École 1337 (42 Network). I focus on building rigorous backend architectures and fluid, high-performance, product-centered software interfaces.",
            'hero.btn.contact': 'Contact me', 'hero.btn.cv': 'Download CV (PDF)',
            'widget.title': 'Key Indicators', 'widget.label.status': 'Professional Status',
            'widget.val.status': '1337 School Student / Developer',
            'widget.label.origin': 'Origin & Location', 'widget.label.domains': 'Key Domains',
            'widget.label.links': 'Direct Links',
            'section.about.num': '01 // PROFILE', 'section.about.badge': 'PRESENTATION',
            'section.about.title': 'Designing Reliable Architectures',
            'section.about.desc': "My approach is grounded in implementing structured software solutions, code clarity, and technical agility.",
            'about.content.title': 'Technical Rigor & Problem Solving',
            'about.text': "My curriculum at <strong>École 1337 (42 Network)</strong> strengthened my ability to grasp low-level concepts (memory management, C/C++ systems programming) and to solve complex architectural challenges through peer-learning.<br><br>I work across the full development cycle — from relational database modeling (PostgreSQL, MySQL) to cloud deployment (Heroku, OVH) and reactive interface integration.",
            'tab.skills': 'Expertise', 'tab.languages': 'Languages',
            'skills.cat.languages': 'Languages', 'skills.cat.backend': 'Backend', 'skills.cat.frontend': 'Frontend',
            'lang.ar': 'Arabic', 'lang.ar.level': 'Native Language',
            'lang.en': 'English', 'lang.en.level': 'Advanced / Technical',
            'lang.fr': 'French', 'lang.fr.level': 'Intermediate',
            'metric.label.1': 'Algorithms & C/C++', 'metric.label.2': 'Active Dev Months', 'metric.label.3': 'Frameworks Mastered',
            'section.timeline.num': '02 // JOURNEY', 'section.timeline.badge': 'EXPERIENCE & EDUCATION',
            'section.timeline.title': 'Technical Timeline',
            'section.timeline.desc': 'My academic background and professional software contributions.',
            'tl.1.date': '2025 - Present', 'tl.1.org': 'École 1337 | 42 Network', 'tl.1.title': 'Software Engineering Program',
            'tl.1.desc': "Rigorous peer-education learning focused on system architectures (C/C++), memory allocation, advanced algorithmics, and infrastructure management.",
            'tl.2.date': '2024 - Present', 'tl.2.org': 'OFPPT / ISGI Khouribga', 'tl.2.title': 'Digital Development (Full-Stack)',
            'tl.2.desc': "In-depth training focused on design patterns, database administration, and securing enterprise web architectures.",
            'tl.3.date': 'Apr 2023 - May 2024', 'tl.3.org': 'Automize | Freelance', 'tl.3.title': 'Full-Stack Developer',
            'tl.3.desc': '<li>Development of web applications and services using Django and Python.</li><li>Design and documentation of asynchronous REST APIs (Django Rest Framework).</li><li>Infrastructure deployment, configuration and hosting on Heroku and OVH Cloud.</li><li>Continuous source code management and collaboration via Git/GitHub.</li>',
            'tl.4.date': '2022', 'tl.4.org': 'Bzcorp', 'tl.4.title': 'Full-Stack Developer',
            'tl.4.desc': '<li>Design and development of a real estate rental management platform.</li><li>Set up the tech stack: Spring Boot (Java) for the API and Angular for the frontend.</li><li>Database modeling and MySQL relational integration (JPA/Hibernate).</li>',
            'tl.5.date': 'Oct 2021 - Dec 2021', 'tl.5.org': 'Diidasko Technology', 'tl.5.title': 'Backend Developer Intern',
            'tl.5.desc': '<li>Development of complex data microservices in Spring Boot.</li><li>Writing and automation of unit and integration test plans.</li><li>Optimization of complex SQL queries and restructuring of JSON responses.</li>',
            'tl.6.date': '2019 - 2021', 'tl.6.org': 'YouCode | Youssofia', 'tl.6.title': 'Web Development Training',
            'tl.6.desc': "Intensive hands-on training using Agile methodology (Scrum) and MVC concept integration (PHP, Laravel, JavaScript, MySQL).",
            'section.projects.num': '03 // PROJECTS', 'section.projects.badge': 'SELECTED WORKS',
            'section.projects.title': 'Built Applications',
            'section.projects.desc': "A selection of real-world applications built with industry-standard technologies.",
            'filter.all': 'All Projects', 'filter.fullstack': 'Full-Stack', 'filter.backend': 'Back-End', 'filter.frontend': 'Front-End',
            'project.rentease.title': 'RentEase', 'project.rentease.desc': "Real estate rental management platform facilitating operational interactions between landlords and tenants.",
            'project.automize.title': 'Automize REST Services', 'project.automize.desc': "Highly secure asynchronous REST API architecture for automating enterprise administrative workflows.",
            'project.larastore.title': 'Inas Admin Hub', 'project.larastore.desc': "Internal procurement tracking portal and purchasing indicator centralization dashboard.",
            'project.culturalevents.title': 'Cultural Moroccan Events', 'project.culturalevents.desc': "Real-time Moroccan cultural events discovery platform with filtering by region and category.",
            'project.quordle.title': 'Quordle Game', 'project.quordle.desc': "Interactive word game inspired by Wordle, allowing players to guess 4 words simultaneously with real-time animations.",
            'project.knowplus.title': 'Knowplus', 'project.knowplus.desc': "Belgian e-learning platform for managing courses, modules and users with an interactive dashboard.",
            'project.link.view': 'View details →', 'project.link.details': 'Project details →',
            'section.services.num': '05 // SERVICES', 'section.services.badge': 'WHAT I DO',
            'section.services.title': 'Offered Expertise',
            'section.services.desc': "Complete software solutions, from robust back-end to reactive interfaces and scalable APIs.",
            'service.fullstack.title': 'Full-Stack Development', 'service.fullstack.desc': "Building complete web applications with Python/Django, Java/Spring Boot and Angular — from database to user interface.",
            'service.backend.title': 'Back-End Development', 'service.backend.desc': "Architecture of robust, scalable back-end services using Spring Boot, Django, Laravel and Hibernate with relational databases.",
            'service.api.title': 'REST APIs & Microservices', 'service.api.desc': "Design and documentation of asynchronous REST APIs, JWT-secured, with advanced authentication and cloud deployment (Heroku, OVH).",
            'service.frontend.title': 'Front-End Development', 'service.frontend.desc': "Creating dynamic, reactive interfaces with Angular, HTML5, CSS3 and JavaScript — focused on performance and user experience.",
            'service.ecommerce.title': 'E-Commerce Solutions', 'service.ecommerce.desc': "Development of fast, secure online stores with integrated carts, payments, and management dashboards.",
            'service.db.title': 'Database Architecture', 'service.db.desc': "Relational modeling and optimization of complex SQL queries with PostgreSQL, MySQL and ORM integration (Hibernate, Eloquent).",
            'section.contact.num': '06 // START', 'section.contact.badge': 'AVAILABILITY',
            'section.contact.title': 'Contact Details', 'section.contact.desc': "I am available for any collaboration proposal or internship opportunity.",
            'contact.info.title': "Let's Discuss Your Needs", 'contact.info.desc': "I'm available to study your project proposals, end-of-study internship opportunities, or technical collaborations.",
            'contact.phone.label': 'Phone', 'contact.email.label': 'Email', 'contact.location.label': 'Address', 'contact.location.val': 'Beni Mellal, Morocco',
            'form.name.label': 'Full Name', 'form.email.label': 'Email', 'form.subject.label': 'Subject', 'form.message.label': 'Your Message',
            'form.name.placeholder': 'Your name', 'form.email.placeholder': 'your@email.com', 'form.subject.placeholder': 'Message subject', 'form.message.placeholder': 'Your message...',
            'form.submit': 'Send Message', 'form.success.title': 'Message Sent',
            'form.success.desc': 'Thank you for your message. I will get back to you shortly.',
            'form.success.btn': 'Send Another Message',
            'footer.copy': '© 2026 Mohamed Zoubir. All rights reserved.',
            'typewriter': ["Full-Stack Developer", "Software Engineering Program", "Robust API Designer"]
        }
    };

    // Apply translations to the page
    const applyLang = (lang) => {
        const t = translations[lang];
        // Text content elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) el.textContent = t[key];
        });
        // HTML content elements (for rich text with <strong>, <br>, <li> etc.)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (t[key] !== undefined) el.innerHTML = t[key];
        });
        // Placeholder attributes
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
        });
        // Update lang-toggle button label
        const langBtn = document.getElementById('lang-toggle');
        if (langBtn) langBtn.textContent = lang === 'fr' ? 'EN' : 'FR';
        // Update document lang attribute
        document.documentElement.setAttribute('lang', lang === 'fr' ? 'fr' : 'en');
        // Restart typewriter with new language words
        if (typeof restartTypewriter === 'function') restartTypewriter(t['typewriter']);
    };

    // --- Language Toggle ---
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('portfolio-lang') || 'fr';

    // Apply on load
    if (currentLang === 'en') applyLang('en');

    if (langToggleBtn) {
        langToggleBtn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'fr' ? 'en' : 'fr';
            localStorage.setItem('portfolio-lang', currentLang);
            applyLang(currentLang);
        });
    }
    // --- 1. Theme Toggle System ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else {
        htmlElement.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
    }
    
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
    });

    // --- 2. Header Scroll Effect & Active Section Tracker ---
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        // Sticky shrink styling
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Active page indicator
        let currentActiveSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentActiveSectionId = section.getAttribute('id');
            }
        });
        
        // Premium scroll-to-bottom override for short sections
        const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60);
        if (isAtBottom) {
            currentActiveSectionId = 'contact';
        }
        
        if (currentActiveSectionId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentActiveSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // --- 3. Mobile Navigation Menu Toggle ---
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu on clicking any navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // --- 4. Hero Section Typing Animation ---
    const typewriterTextElement = document.querySelector('#hero-typewriter .text');
    let words = [
        "Développeur Full-Stack",
        "Cursus Ingénierie Logicielle",
        "Concepteur d'APIs Robustes"
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 80;
    let typewriterTimeout;
    
    function handleTypewriter() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typewriterTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40; // Deleting is faster
        } else {
            typewriterTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100; // Natural typing speed
        }
        
        // State transition checks
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 2500; // Pause when finished typing word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 400; // Brief pause before typing next word
        }
        
        typewriterTimeout = setTimeout(handleTypewriter, typingSpeed);
    }
    
    // Start the typewriter loop
    if (typewriterTextElement) {
        typewriterTimeout = setTimeout(handleTypewriter, 1000);
    }

    // Expose a function to change language words dynamically
    window.restartTypewriter = function(newWords) {
        if (!typewriterTextElement) return;
        clearTimeout(typewriterTimeout);
        words = newWords;
        wordIndex = 0;
        charIndex = 0;
        isDeleting = false;
        typewriterTextElement.textContent = '';
        typewriterTimeout = setTimeout(handleTypewriter, 1000);
    };

    // --- 5. About Sub-Tabs Switcher ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Remove active states
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Activate selection
            btn.classList.add('active');
            document.getElementById(`tab-content-${targetTab}`).classList.add('active');
        });
    });

    // --- 6. Projects Filter Grid ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedFilter = btn.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Animate grid items
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (selectedFilter === 'all' || category === selectedFilter) {
                    card.style.display = 'flex';
                    // Trigger tiny reflow for css entry transition
                    card.getBoundingClientRect();
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    // Delay display: none slightly to let transition complete
                    setTimeout(() => {
                        if (card.style.opacity === '0') {
                            card.style.display = 'none';
                        }
                    }, 350);
                }
            });
        });
    });

    // --- 7. Project Details Modals ---
    const projectDetailsBtns = document.querySelectorAll('.project-link-btn');
    const modals = document.querySelectorAll('.modal');
    
    projectDetailsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project-id');
            const targetModal = document.getElementById(`modal-${projectId}`);
            
            if (targetModal) {
                targetModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Stop body scrolling
            }
        });
    });
    
    // Close Modal Functions
    const closeModal = (modal) => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore body scrolling
    };
    
    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.modal-close-btn');
        const backdrop = modal.querySelector('.modal-backdrop');
        
        closeBtn.addEventListener('click', () => closeModal(modal));
        backdrop.addEventListener('click', () => closeModal(modal));
    });
    
    // Keyboard close via Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.classList.contains('active')) {
                    closeModal(modal);
                }
            });
        }
    });

    // --- 8. Contact Form Management ---
    const contactForm = document.getElementById('contact-form');
    const formSuccessOverlay = document.getElementById('form-success');
    const formResetBtn = document.getElementById('btn-success-reset');
    const submitBtn = document.getElementById('contact-submit');
    const submitBtnText = submitBtn.innerHTML;
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const currentLang = localStorage.getItem('portfolioLang') || 'fr';
            
            // Capture elements
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('contact-subject').value;
            const message = document.getElementById('contact-message').value;
            
            // Set sending button state
            submitBtn.disabled = true;
            const loadingText = currentLang === 'en' ? 'Sending...' : 'Envoi en cours...';
            submitBtn.innerHTML = `
                ${loadingText}
                <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="animation: spin 1s infinite linear; margin-left: 8px;">
                    <circle cx="12" cy="12" r="10" stroke-dasharray="40" stroke-dashoffset="10"></circle>
                </svg>
            `;
            
            // Live FormSubmit AJAX fetch targeting Mohamed's email directly
            fetch("https://formsubmit.co/ajax/simozoubir012@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    _subject: `Portfolio: ${subject}`,
                    message: message,
                    _captcha: "false"
                })
            })
            .then(response => response.json().then(data => ({ status: response.status, ok: response.ok, data })))
            .then(({ status, ok, data }) => {
                if (ok && (data.success === "true" || data.success === true)) {
                    // Success actions
                    formSuccessOverlay.classList.add('active');
                    contactForm.reset();
                } else if (data && data.message) {
                    alert(currentLang === 'en' ? "Message from server: " + data.message : "Message du serveur: " + data.message);
                } else {
                    alert(currentLang === 'en' ? "An error occurred. Please try again." : "Une erreur est survenue. Veuillez réessayer.");
                }
            })
            .catch(error => {
                console.error("Error submitting form:", error);
                alert(currentLang === 'en' ? "Network error. Please check your connection." : "Erreur de réseau. Veuillez vérifier votre connexion.");
            })
            .finally(() => {
                // Restore button
                submitBtn.disabled = false;
                applyLang(currentLang);
            });
        });
    }
    
    // Reset Contact Form Overlay
    if (formResetBtn) {
        formResetBtn.addEventListener('click', () => {
            formSuccessOverlay.classList.remove('active');
        });
    }

    // --- 9. Dynamic Scroll Reveal Effects ---
    // Staggered reveal for grid items
    const dynamicElements = document.querySelectorAll('.project-card, .timeline-item, .service-card');
    dynamicElements.forEach((el, index) => {
        el.classList.add('reveal');
        // Add a small inline transition delay based on horizontal/vertical position to create a staggered effect
        el.style.transitionDelay = `${(index % 3) * 0.1}s`;
    });

    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Trigger only once
                
                // Clear the delay after the animation completes so hover animations don't lag
                setTimeout(() => {
                    entry.target.style.transitionDelay = '0s';
                }, 800);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // --- 10. Metric Counter Animation ---
    const countUp = (element) => {
        const text = element.textContent.trim();
        const target = parseInt(text.replace(/[^0-9]/g, ''), 10);
        const suffix = text.replace(/[0-9]/g, '');
        
        if (isNaN(target)) return;
        
        let start = 0;
        const duration = 1600; // 1.6 seconds for maximum aesthetic appeal
        let startTime = null;
        
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease Out Quad logic: f(t) = t * (2 - t)
            const easeProgress = progress * (2 - progress);
            const currentVal = Math.floor(start + easeProgress * (target - start));
            
            element.textContent = currentVal + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                element.textContent = text; // snap exactly to raw final text
            }
        };
        
        requestAnimationFrame(animate);
    };

    const metricsRow = document.querySelector('.metrics-row');
    if (metricsRow) {
        const metricsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const metricNums = entry.target.querySelectorAll('.metric-num');
                    metricNums.forEach(num => {
                        // Set starting number to 0 before animation begins
                        const finalVal = num.textContent;
                        num.setAttribute('data-final', finalVal);
                        num.textContent = '0' + finalVal.replace(/[0-9]/g, '');
                        
                        setTimeout(() => countUp(num), 150); // slight delay after scrolling in
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });
        metricsObserver.observe(metricsRow);
    }
});

// Added spinner CSS animation inline dynamically
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(styleSheet);
