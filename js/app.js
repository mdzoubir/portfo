/* ==========================================================================
   MOHAMED ZOUBIR PORTFOLIO - JAVASCRIPT CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
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
    const words = [
        "Développeur Full-Stack",
        "Étudiant École 1337 (42)",
        "Passionné d'Ingénierie Web",
        "Résolveur de Problèmes"
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function handleTypewriter() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typewriterTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Deleting is faster
        } else {
            typewriterTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 120; // Natural typing speed
        }
        
        // State transition checks
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause when finished typing word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Brief pause before typing next word
        }
        
        setTimeout(handleTypewriter, typingSpeed);
    }
    
    // Start the typewriter loop
    if (typewriterTextElement) {
        setTimeout(handleTypewriter, 1000);
    }

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
            
            // Capture elements
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('contact-subject').value;
            const message = document.getElementById('contact-message').value;
            
            // Set sending button state
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                Envoi en cours...
                <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" style="animation: spin 1s infinite linear;">
                    <circle cx="12" cy="12" r="10" stroke-dasharray="40" stroke-dashoffset="10"></circle>
                </svg>
            `;
            
            // Simulate API request (1.5 seconds)
            setTimeout(() => {
                // Success actions
                formSuccessOverlay.classList.add('active');
                contactForm.reset();
                
                // Restore button
                submitBtn.disabled = false;
                submitBtn.innerHTML = submitBtnText;
            }, 1500);
        });
    }
    
    // Reset Contact Form Overlay
    if (formResetBtn) {
        formResetBtn.addEventListener('click', () => {
            formSuccessOverlay.classList.remove('active');
        });
    }

    // --- 9. Dynamic Scroll Reveal Effects ---
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Trigger only once
            }
        });
    }, {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Offset triggers slightly
    });
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
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
