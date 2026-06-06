# Mohamed Zoubir — Portfolio

> **Dark Dev Aesthetic · Electric Blue · Glassmorphism**
>
> A premium, fully responsive single-page portfolio website for **Mohamed Zoubir**, Full-Stack Developer & École 1337 (42 Network) student. Built with pure HTML, CSS, and JavaScript — no frameworks, no build tools.

---

## Table of Contents

- [Project Overview](#project-overview)
- [File Structure](#file-structure)
- [Design System](#design-system)
  - [Typography](#typography)
  - [Color Palette](#color-palette)
  - [CSS Custom Properties (Tokens)](#css-custom-properties-tokens)
  - [Glassmorphism](#glassmorphism)
  - [Theming (Dark / Light)](#theming-dark--light)
- [Sections Breakdown](#sections-breakdown)
  - [Page Loader](#1-page-loader)
  - [Navbar](#2-navbar)
  - [Hero Section](#3-hero-section)
  - [About Section](#4-about-section-01--présentation)
  - [Timeline Section](#5-timeline-section-02--expérience--éducation)
  - [Projects Section](#6-projects-section-03--selected-works)
  - [Stack Section](#7-stack-section-04--technologies)
  - [Contact Section](#8-contact-section-05--disponibilité)
  - [Footer](#9-footer)
  - [Modals](#10-project-modals)
- [Interactive Features (JavaScript)](#interactive-features-javascript)
- [Animation System](#animation-system)
- [Responsive Design](#responsive-design)
- [Internationalization (i18n)](#internationalization-i18n)
- [SEO & Accessibility](#seo--accessibility)
- [Assets](#assets)

---

## Project Overview

| Feature             | Detail                                                                    |
|---------------------|---------------------------------------------------------------------------|
| **Language**         | HTML5, CSS3, Vanilla JavaScript                                          |
| **Fonts**            | Inter, JetBrains Mono, Space Grotesk (Google Fonts)                      |
| **Theme**            | Dark & Light mode with localStorage persistence                          |
| **i18n**             | French (default) & English, toggled via navbar button                    |
| **Form Backend**     | Formspree (`https://formspree.io/f/xnjrgerk`)                           |
| **Deployment-ready** | Static site — drop into any hosting (Vercel, Netlify, GitHub Pages, OVH) |

---

## File Structure

```
portfolio/
├── index.html                  # Main HTML (single-page architecture)
├── mohamed_zoubir.pdf          # Downloadable CV
├── css/
│   └── styles.css              # Full stylesheet (all custom CSS)
├── js/
│   ├── app.js                  # Entry point — imports all modules
│   └── modules/
│       ├── i18n.js             # Translations & language switching
│       ├── theme.js            # Dark/light toggle
│       ├── typewriter.js       # Typewriter effect
│       ├── navbar.js           # Scroll effect, hamburger, active link
│       ├── reveal.js           # Scroll reveal + counter animations
│       ├── tabs.js             # Tab switching + language bars
│       ├── filters.js          # Project category filtering
│       ├── modals.js           # Modal open/close/keyboard
│       ├── cursor.js           # Custom cursor follow + expand
│       ├── form.js             # Contact form + Formspree
│       └── ui.js               # Loader, back-to-top, progress, ripple
├── assets/
│   ├── mohamed_zoubir.pdf      # CV file
│   └── images/
│       ├── profile.webp              # About section avatar
│       ├── portfolio-banner.webp     # OG social sharing image
│       ├── rentease_ui.webp          # RentEase screenshot
│       ├── automize_api.webp         # Automize screenshot
│       ├── inas_admin.webp           # Inas Admin Hub screenshot
│       ├── cultural_events.webp      # Cultural Events screenshot
│       ├── quordle_game.webp         # Quordle Game screenshot
│       ├── knowplus_learning.webp    # Knowplus screenshot
│       └── originals/                # Backup of original PNG/JPG files
└── README.md                   # This file
```

---

## Design System

### Typography

| Token           | Font             | Usage                                    |
|-----------------|------------------|------------------------------------------|
| `--font-sans`   | Inter            | Body text, buttons, descriptions         |
| `--font-mono`   | JetBrains Mono   | Code snippets, labels, badges, dates     |
| `--font-head`   | Space Grotesk    | Section titles, hero name, card headings |

All fonts are loaded via Google Fonts `<link>` tag with weights:
- **Inter**: 300, 400, 500, 600, 700
- **JetBrains Mono**: 400, 500, 600
- **Space Grotesk**: 500, 600, 700, 800

### Color Palette

| Color Name      | Hex/Value                          | Usage                                      |
|-----------------|------------------------------------|--------------------------------------------|
| `--blue`        | `#4f8ef7`                          | Primary accent, links, active states       |
| `--blue-dim`    | `#3a6fd4`                          | Hover state for primary buttons            |
| `--blue-glow`   | `rgba(79, 142, 247, 0.18)`         | Glow effects, box-shadows                  |
| `--blue-glow2`  | `rgba(79, 142, 247, 0.06)`         | Subtle hover backgrounds                   |
| `--cyan`        | `#00c2ff`                          | Gradient partner, secondary accent         |
| Green dots      | `#27c93f`                          | "Available" badge, success states          |
| Red dot         | `#ff5f56`                          | macOS-style close dot, error messages      |
| Yellow dot      | `#ffbd2e`                          | macOS-style minimize dot                   |

### CSS Custom Properties (Tokens)

```css
/* Transitions */
--t-fast:   0.18s ease;
--t-med:    0.32s cubic-bezier(0.4,0,0.2,1);
--t-slow:   0.55s cubic-bezier(0.4,0,0.2,1);

/* Border Radii */
--radius-sm:   6px;
--radius-md:   12px;
--radius-lg:   18px;
--radius-xl:   24px;
--radius-pill: 999px;
```

### Glassmorphism

The `.glass-card` utility class applies the signature glassmorphism effect used across the entire site:

```css
.glass-card {
  background: var(--bg-card);          /* Semi-transparent background */
  backdrop-filter: var(--glass-blur);  /* blur(18px) */
  border: 1px solid var(--border);     /* Subtle border */
  border-radius: var(--radius-lg);     /* 18px rounded corners */
}
```

Used on: hero code card, metric cards, timeline cards, project cards, stack cards, contact cards, form container, modals, back-to-top button.

### Theming (Dark / Light)

Two complete color sets are defined via `[data-theme="dark"]` and `[data-theme="light"]` selectors:

| Token       | Dark Theme                 | Light Theme               |
|-------------|----------------------------|---------------------------|
| `--bg`      | `#0d0d0f`                  | `#f4f5f9`                 |
| `--bg-2`    | `#111115`                  | `#ffffff`                 |
| `--bg-3`    | `#16161c`                  | `#ebedf5`                 |
| `--bg-card` | `rgba(22, 22, 30, 0.7)`    | `rgba(255, 255, 255, 0.75)` |
| `--text`    | `#f0f0f4`                  | `#0e0e14`                 |
| `--text-2`  | `#9a9ab0`                  | `#555570`                 |
| `--text-3`  | `#5a5a70`                  | `#9a9ab0`                 |
| `--border`  | `rgba(255,255,255,0.08)`   | `rgba(0,0,0,0.08)`        |
| `--border-2`| `rgba(255,255,255,0.14)`   | `rgba(0,0,0,0.14)`        |

Theme toggle persists via `localStorage` key `portfolio-theme`. Falls back to `prefers-color-scheme` media query on first visit.

---

## Sections Breakdown

### 1. Page Loader

**Content**: Displays the `<MZ/>` logo with a pulsing animation while the page loads.

**Styling**:
- Full-screen fixed overlay (`z-index: 100000`) over entire viewport
- Logo in JetBrains Mono, blue color (`--blue`), with `loader-pulse` keyframe animation (scales 0.95→1 and opacity 0.4→1)
- Dismissed after `window.load` event with a 300ms delay, fades out (`opacity: 0`) then removed from DOM after 800ms

---

### 2. Navbar

**Content**:
- Logo `<MZ/>` linking to `#home` (with shimmer gradient animation on hover)
- 6 navigation links: Accueil, Profil, Parcours, Projets, Stack, Contact
- Language toggle button (FR / EN)
- Theme toggle button (moon/sun SVG icons)
- Hamburger menu (mobile only)

**Styling**:
- **Position**: Fixed at top, `z-index: 900`, 64px height
- **Default**: Transparent background
- **Scrolled state** (`.scrolled`): Glassmorphism background with blur, bottom border, box-shadow, height shrinks to 58px
- **Links**: 0.85rem font, `--text-2` color, underline animation via `::after` pseudo-element that slides from `width: 0` to `width: 100%` on hover/active
- **Action buttons**: 36×36px, rounded `--radius-md`, monospace font, bordered, blue hover effect
- **Logo hover**: Shimmer animation using `background-image: linear-gradient` with `background-size: 300% 100%`, animating `background-position` from 0% to 100%
- **Hamburger**: 3-span animated toggle (rotate and opacity transitions for the ✕ close state)
- **Mobile**: Nav links become a fixed dropdown panel sliding from `translateY(-100%)`, full-width links at 0.95rem

---

### 3. Hero Section

**Content**:
- Animated background grid (CSS `background-image` with linear gradients, masked with radial-gradient)
- Two floating glowing orbs (soft blue/cyan radial gradients, `filter: blur(80px)`, `float` animation)
- **Left column**:
  - Eyebrow badge: "Disponible pour des missions" with pulsing green dot
  - Name: "Mohamed" + "Zoubir" (accent gradient text: blue→cyan)
  - Typewriter effect: Cycles through developer titles with blinking cursor
  - Description paragraph
  - Two CTA buttons: "Me contacter" (primary) + "Télécharger CV" (outline with download icon)
  - Social icons: GitHub + LinkedIn
- **Right column** — Code-style card:
  - macOS-style window chrome (red/yellow/green dots + `profile.json` title bar)
  - JSON-like key-value pairs: statut, localisation, stack, liens
  - Stats bar: 1337 | 4+ | 6+ (animated counters)
- Scroll indicator: Mouse icon with animated wheel at bottom center

**Styling**:
- **Layout**: `min-height: 100vh`, CSS Grid `1.1fr 0.9fr`, center-aligned
- **Background grid**: 60×60px grid lines using repeating linear-gradient, faded with radial-gradient mask
- **Glowing orbs**: Absolute positioned, 500px/350px circles, `filter: blur(80px)`, floating animation (8s infinite, -20px translateY)
- **Title**: Space Grotesk, `clamp(3rem, 6vw, 5rem)`, weight 800, letter-spacing -0.04em
- **Accent text**: `background: linear-gradient(135deg, var(--blue), var(--cyan))` with `-webkit-background-clip: text`
- **Typewriter**: JetBrains Mono, 1.05rem, with `blink` cursor animation (0.8s step-end)
- **Eyebrow glow**: `eyebrow-glow` animation using `drop-shadow` filter (3s infinite cycle)
- **Hero card**: `float` animation (7s, -2s delay), box-shadow `0 24px 64px`, glassmorphism
- **Code lines**: Mono font 0.82rem, colored keys (blue), strings (green `#7dd3a8`), links (cyan)
- **Stats**: 3-column grid inside card, border-top, Space Grotesk numbers in blue
- **Scroll indicator**: Mouse shape (20×32px border outline, pill radius), wheel animates down 12px and fades

---

### 4. About Section (01 — Présentation)

**Content**:
- Section label: `01` pill badge + line + "PRÉSENTATION" tag
- **Left column** — Avatar:
  - Profile photo (`profile.jpg`) inside gradient border wrapper (blue→cyan)
  - Fallback: "MZ" initials in gradient text if image fails
  - "Disponible" badge at bottom with pulsing green dot
  - Name + role underneath
- **Right column** — Content:
  - Title: "Concevoir des architectures fiables"
  - Subtitle paragraph about approach
  - Sub-heading: "Rigueur technique & résolution de problèmes"
  - Body text about École 1337, full-cycle development, databases, cloud deployment
  - **Tabbed interface**:
    - Tab 1 — "Expertise": Skills grid with 3 groups (Langages, Backend, Frontend) showing pill badges
    - Tab 2 — "Langues": Language proficiency bars (Arabe 100%, Anglais 85%, Français 65%)
- **Metrics bar**: 3 glass cards with animated counters:
  - 1337 — Algorithmique & C/C++
  - 4+ — Ans d'expérience
  - 6+ — Frameworks maîtrisés

**Styling**:
- **Layout**: CSS Grid `300px 1fr`, 60px gap
- **Avatar wrapper**: 260×280px, 2px gradient border (blue→cyan), `border-radius: var(--radius-xl)`
- **Avatar image**: `object-fit: cover`, `filter: grayscale(10%)`, brightens on hover
- **Available badge**: Absolute positioned at bottom center, glassmorphism pill, green pulsing dot (`pulse-green` keyframe)
- **Section label**: Flexbox row — number in blue pill (`padding: 3px 10px`), 32px line, tag in mono uppercase
- **Section title**: Space Grotesk, `clamp(1.8rem, 4vw, 2.8rem)`, weight 800
- **Tabs navigation**: Bottom-border style tabs, active = blue text + blue bottom border
- **Tab panels**: `fadeIn` animation (0.3s) on switch
- **Skills grid**: `auto-fill, minmax(160px, 1fr)`, groups with mono uppercase titles + bordered pill badges
- **Skill badges**: 0.78rem, `--radius-pill`, `--bg-3` background, blue border on hover
- **Skill badge animation**: Pop-in effect (`scale(0.6)→scale(1)`) with staggered delays (0.05s increments) and spring easing `cubic-bezier(0.34,1.56,0.64,1)`
- **Language bars**: 4px height, gradient fill (blue→cyan), animated width from 0→target on tab open
- **Metric cards**: Glass cards, centered text, number in gradient (blue→cyan) text with `clamp(2.4rem, 5vw, 3.5rem)`, hover lift (-4px) with blue glow shadow
- **Counter animation**: Ease-out cubic easing, 1200-1800ms duration, `countPulse` keyframe (scale 0.9→1.05→1)

---

### 5. Timeline Section (02 — Expérience & Éducation)

**Content** — 6 chronological entries:

| # | Period | Organization | Title | Tags |
|---|--------|-------------|-------|------|
| 1 | 2025 — Present | École 1337 / 42 Network | Cursus Ingénierie Logicielle | C/C++, Algorithmique, Systèmes |
| 2 | 2024 — Present | OFPPT / ISGI Khouribga | Développement Digital (Full-Stack) | Design Patterns, BDD, Sécurité Web |
| 3 | Avr 2023 — Mai 2024 | Automize / Freelance | Développeur Full-Stack | Django, Python, REST API, Heroku |
| 4 | 2022 | Bzcorp | Développeur Full-Stack | Spring Boot, Angular, MySQL |
| 5 | Oct 2021 — Déc 2021 | Diidasko Technology | Stage Développeur Backend | Spring Boot, Microservices, Tests |
| 6 | 2019 — 2021 | YouCode / Youssofia | Formation Développement Web | PHP, Laravel, JavaScript, Scrum |

**Styling**:
- **Vertical timeline**: `padding-left: 44px` with `::before` pseudo-element as a 2px-wide gradient line (`var(--blue)→transparent`) on the left side
- **Timeline dots**: 24×24px circles, absolute positioned at left edge, blue border + glow background + box-shadow, contain SVG icons (graduation cap or laptop)
- **Timeline cards**: Glass cards with `padding: 24px 28px`, hover: `translateX(6px)` + blue glow shadow
- **Date badges**: Mono font 0.75rem, blue pill with border + faint blue background
- **Organization names**: 0.82rem, weight 600, `--text-2` color
- **Titles**: Space Grotesk, 1.1rem, weight 700
- **Description lists**: Custom `▸` blue bullet markers via `::before`, 0.88rem text
- **Technology tags**: Mono font 0.68rem, `--bg-3` background, bordered pills
- **Staggered animation**: Odd items slide from left (`translateX(-30px)`), even from right (`translateX(30px)`), with 0.1s incremental delays per item

---

### 6. Projects Section (03 — Selected Works)

**Content**:
- Filter buttons: Tous | Full-Stack | Back-End | Front-End
- 6 project cards in responsive grid:

| Project | Category | Stack | Visibility |
|---------|----------|-------|------------|
| **RentEase** | Full-Stack | Spring Boot, Angular, PostgreSQL | Private |
| **Automize REST Services** | Backend | Django DRF, Python, PostgreSQL | Private |
| **Inas Admin Hub** | Backend | Laravel, MySQL, Blade | — |
| **Cultural Moroccan Events** | Frontend | JavaScript, HTML5/CSS3, API REST | Public (Vercel + GitHub) |
| **Quordle Game** | Frontend | JavaScript, HTML5/CSS3, Game Logic | Public (Vercel + GitHub) |
| **Knowplus** | Full-Stack | Django, Python, Full-Stack | Public (Live site) |

**Styling**:
- **Filter buttons**: Pill-shaped, bordered, active state = solid blue background with box-shadow
- **Filter animation**: Non-matching cards fade out (`opacity: 0, scale(0.95)`) then `display: none` after 300ms
- **Project grid**: `auto-fill, minmax(320px, 1fr)`, 28px gap
- **Project cards**: Glass card, flex column, overflow hidden
- **Image wrapper**: 210px height, `object-fit: cover`, scale to 1.06 on hover
- **Image overlay**: Absolute inset, dark background `rgba(13,13,15,0.7)` + `blur(4px)`, fades in on hover
- **Overlay button**: 52px circle, blue semi-transparent background, scales from 0.8→1→1.1
- **Technology tags**: Blue bordered pills, mono font, **turns solid blue on card hover**
- **Card hover**: `-6px` lift + 50px box-shadow + blue glow
- **Private badge**: Dashed border, mono font, lock icon
- **Ghost button**: Text-only blue link, arrow slides right on hover (`gap: 6px→10px`, svg `translateX(4px)`)
- **Staggered animation**: Cards slide up from `translateY(40px) scale(0.97)` with 0.12s incremental delays

---

### 7. Stack Section (04 — Technologies)

**Content** — 5 category cards:

| Category | Technologies |
|----------|-------------|
| **Langages** | Java, Python, PHP, JavaScript, TypeScript, SQL, C/C++, Bash |
| **Backend** | Spring Boot, Django/DRF, Laravel, Hibernate/JPA, JWT Auth, REST APIs |
| **Frontend** | Angular, HTML5/CSS3, Sass/SCSS, Bootstrap, Vanilla JS |
| **Bases de données** | PostgreSQL, MySQL, SQLite, Eloquent ORM |
| **DevOps / Cloud** | Docker, Git/GitHub, Heroku, OVH Cloud, Vercel, Linux/Shell |

**Styling**:
- **Grid**: `auto-fill, minmax(280px, 1fr)`, 24px gap
- **Cards**: Glass cards, flex column, 28px padding, relative position with `overflow: hidden`
- **Top accent line**: `::after` pseudo-element — 2px gradient bar (blue→cyan), `scaleX(0)→scaleX(1)` on hover, originates from left
- **Icon containers**: 44×44px, rounded, blue border + faint blue background, **fills solid blue on hover** with glow shadow
- **Icon SVGs**: Stroke color transitions from blue to white on hover
- **Icon bounce**: `icon-bounce` keyframe on hover (translateY: 0→-6→2→-3→0 in 0.5s)
- **Card tilt**: `perspective: 1000px`, hover rotates `rotateX(-2deg) rotateY(2deg)` with -5px lift
- **Technology tags**: 0.8rem, pill shape, `--bg-3` background, blue border/text on hover
- **Tag pop-in animation**: Same as skill badges — `scale(0.6)→scale(1)` with staggered delays

---

### 8. Contact Section (05 — Disponibilité)

**Content**:
- **Left column** — Contact info:
  - Title: "Discutons de vos besoins"
  - Description text
  - 3 contact link cards:
    - Phone: +212 617 198 646 (clickable `tel:` link)
    - Email: mohamed.zoubir.dev@gmail.com (clickable `mailto:` link)
    - Address: Beni Mellal, Maroc
- **Right column** — Contact form:
  - Fields: Name, Email (side by side), Subject, Message (textarea)
  - Submit button: "Envoyer le message" with paper plane icon
  - Success overlay: Green check icon + confirmation message + "Send another" button
  - Error display area

**Styling**:
- **Layout**: CSS Grid `1fr 1.3fr`, 48px gap
- **Contact link cards**: Glass cards, flex row with 14px gap, icon on left, label + value on right
- **Icon containers**: 38×38px, blue border + faint background, SVG icons in blue
- **Card hover**: `translateX(4px)` + blue border
- **Form container**: Glass card, 28px padding, 18px gap flex column
- **Form inputs**: `--bg-3` background, bordered, `--radius-md`, mono label font
- **Input focus**: Blue border + `0 0 0 3px var(--blue-glow)` box-shadow
- **Animated input border**: Uses `background-image` trick with dual linear-gradients — the gradient bottom border animates `background-size` from `0% 2px` to `100% 2px` on focus
- **Submit button states**:
  - `.loading`: Color hidden, spinner overlay (18px rotating border circle)
  - `.success`: Green background (`#27c93f`), shows `✓`
- **Button ripple**: Creates a `<span class="ripple">` at click position, scales from 0→4 with fade-out (0.6s)
- **Success overlay**: Absolute positioned over form, fadeIn animation, green bordered circle with checkmark SVG
- **Contact info slide-in**: `translateX(-40px)→translateX(0)` reveal animation
- **Form submission**: Sent via `fetch` POST to Formspree with `Accept: application/json` header

---

### 9. Footer

**Content**:
- Brand: `<MZ/>` logo + tagline "Crafted with clean code & passion."
- Navigation links: Profil, Parcours, Projets, Stack, Contact
- Social icons: GitHub + LinkedIn
- Copyright: © 2026 Mohamed Zoubir. Tous droits réservés.

**Styling**:
- **Top section**: Flexbox, space-between, wrapped, separated by 1px `--border` bottom line
- **Logo**: Mono font, 1.1rem, hover turns blue
- **Tagline**: Mono font, 0.8rem, `--text-3` color
- **Nav links**: 0.82rem, weight 500, blue on hover
- **Social icons**: 34×34px bordered squares, blue border/background on hover
- **Copyright**: Centered, 0.78rem, `--text-3`
- **Mobile**: Column layout, centered text

---

### 10. Project Modals

Each project has a detailed modal popup with:
- **Close button** (✕): Sticky top-right, rotates 90° on hover
- **Project image**: Full-width, 220px height, cover fit
- **Technology tags**: Same blue pills as project cards
- **Title**: Space Grotesk, 1.5rem, weight 800
- **Metadata grid**: Background panel with key-value pairs (Rôle, Date, Client/Live/GitHub)
- **Description paragraph**
- **Features list**: With blue `▸` bullet markers
- **Technical stack**: Additional text
- **Action buttons**: Live Demo (primary) + GitHub (outline) or "Code source privé" badge

**Styling**:
- **Overlay**: Fixed `inset: 0`, `z-index: 9999`, centered with padding
- **Backdrop**: `rgba(0,0,0,0.8)` with `blur(8px)`
- **Modal box**: Max-width 640px, max-height 88vh, scrollable, `--radius-xl` rounded
- **Open animation**: Scale `0.85→1` with spring easing `cubic-bezier(0.34,1.56,0.64,1)`, opacity `0→1`
- **Close on**: Backdrop click, ✕ button, Escape key
- **Scroll fade mask**: `::after` pseudo-element with gradient overlay at bottom of modal for scroll indication
- **Body scroll lock**: `document.body.style.overflow = 'hidden'` when modal is open

---

## Interactive Features (JavaScript)

The JavaScript controller (`js/app.js`, 736 lines) manages all interactivity:

| Feature | Description |
|---------|-------------|
| **Page Loader** | Dismisses after `window.load` with 300ms delay |
| **Theme Toggle** | Switches `data-theme` attribute, persists in `localStorage` |
| **Language Toggle** | Switches between FR/EN, updates all `[data-i18n]` elements, persists in `localStorage` |
| **Typewriter** | Cycles through 4 developer titles with typing/deleting animation (90ms/55ms per char) |
| **Scroll Progress Bar** | Tracks scroll position, updates width of gradient bar at top |
| **Custom Cursor** | 12px blue dot following mouse with 0.15 interpolation factor, expands to 40px white on interactive elements, uses `mix-blend-mode: difference` |
| **Navbar Scroll** | Adds `.scrolled` class when `scrollY > 20` |
| **Active Nav Link** | IntersectionObserver tracks which section is visible and highlights corresponding nav link |
| **Scroll Reveal** | IntersectionObserver adds `.visible` class to `.reveal` elements when they enter viewport |
| **Tabs** | Click-based tab switching with `fadeIn` animation |
| **Language Bars** | Animated width from 0→target on language tab activation |
| **Project Filters** | Category-based filtering with fade/scale animation |
| **Modals** | Open/close with body scroll lock, keyboard escape support |
| **Counter Animation** | Numbers count up with ease-out cubic easing on scroll into view |
| **Hero Stats** | Separate counter for hero card (1337, 4+, 6+) triggered after 800ms delay |
| **Button Ripple** | Material-style ripple effect on all `.btn` elements |
| **Back to Top** | Appears after 400px scroll, smooth scrolls to top |
| **Animated Page Title** | When tab is hidden, cycles through titles every 2s; resets when tab becomes visible |
| **Scroll Indicator** | Fades out after 60px of scrolling |
| **Form Submission** | Async fetch POST to Formspree with loading/success/error states |

---

## Animation System

### Keyframe Animations

| Animation | Effect | Duration | Usage |
|-----------|--------|----------|-------|
| `float` | `translateY(0→-20px→0)` | 8s infinite | Hero orbs, hero card |
| `pulse` | Opacity + box-shadow pulse | 2s infinite | Eyebrow dot |
| `pulse-green` | Green box-shadow pulse | 2s infinite | Available badge dot |
| `blink` | Opacity 1→0 step | 0.8s infinite | Typewriter cursor |
| `scroll-anim` | `translateY(0→12px)` + fade | 1.8s infinite | Scroll wheel |
| `fadeIn` | `opacity 0→1, translateY(6px→0)` | 0.3s | Tab panel switch |
| `fadeInUp` | `opacity 0→1, translateY(20px→0)` | 1s | Scroll indicator |
| `loader-pulse` | Scale 0.95↔1, opacity 0.4↔1 | 1s infinite | Page loader logo |
| `shimmer` | `background-position 0%→100%` | 1.2s | Logo hover |
| `countPulse` | Scale 0.9→1.05→1 | 0.6s | Metric numbers |
| `ripple-anim` | `scale(0→4), opacity→0` | 0.6s | Button ripple |
| `icon-bounce` | `translateY(0→-6→2→-3→0)` | 0.5s | Stack card icons |
| `spinner` | `rotate(0→360deg)` | 0.6s infinite | Form loading state |
| `eyebrow-glow` | `drop-shadow` 0px→10px | 3s infinite | Hero eyebrow |

### Reveal Animations

- **Default reveal**: `translateY(28px)→translateY(0)`, opacity 0→1, 0.6s ease
- **Timeline items**: Odd = `translateX(-30px)`, even = `translateX(30px)`, staggered 0.1s
- **Project cards**: `translateY(40px) scale(0.97)→none`, staggered 0.12s
- **Skill/Stack badges**: `scale(0.6)→scale(1)` with spring easing, staggered 0.05s
- **Contact info**: `translateX(-40px)→translateX(0)`, 0.6s ease
- **Section number**: `clip-path: inset(0 100% 0 0)→inset(0)` draw animation, 0.8s

### `prefers-reduced-motion` Support

All animations are completely disabled when `prefers-reduced-motion: reduce` is detected — all elements become instantly visible with `animation-duration: 0.01ms` and `transition-duration: 0.01ms`.

---

## Responsive Design

Three breakpoints handle the mobile-first responsive behavior:

### `@media (max-width: 900px)`
- Hero grid → single column
- About grid → single column, avatar centered at max 300px
- Contact layout → single column
- Modal → full-width

### `@media (max-width: 768px)`
- Section padding reduced: 120px → 80px
- **Mobile nav**: Links become a fixed dropdown panel, hamburger visible
- Hero title: `clamp(2.4rem, 8vw, 3.5rem)`
- Timeline: Reduced padding-left (44px→32px), smaller dots (24px→18px)
- Form row: Single column
- Metrics bar: Single column
- Hero CTA: Column layout
- Projects grid: Single column
- Stack grid: Single column
- Footer: Column layout, centered
- Back-to-top: Smaller (38px), closer to edges

### `@media (max-width: 480px)`
- Container padding: 24px → 16px
- Hero stat numbers: 1.5rem → 1.2rem
- Modal image height: 220px → 160px
- Language row: 2 columns (level text hidden)

---

## Internationalization (i18n)

The site supports **French** (default) and **English**, managed entirely client-side:

- All translatable elements use `data-i18n="key"` attributes for text content
- HTML-containing translations use `data-i18n-html="key"` (parsed via `innerHTML`)
- Placeholder translations use `data-i18n-placeholder="key"`
- Language preference persists in `localStorage` key `portfolio-lang`
- Toggle button shows the opposite language (clicking "EN" switches to English, button changes to "FR")
- Typewriter phrases are also translated per language
- The `<html lang="">` attribute updates accordingly

---

## SEO & Accessibility

### SEO
- **Title**: `Mohamed Zoubir | Développeur Full-Stack`
- **Meta description**: Detailed description with keywords
- **Open Graph tags**: Type, URL, title, description, image
- **Twitter Card tags**: Large image summary card
- **Keywords meta**: Name, role, schools, technologies, location
- **Semantic HTML**: `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`
- **Single `<h1>`** per page (hero name)
- **Inline SVG favicon**: `MZ` monogram on dark background

### Accessibility
- All interactive elements have unique `id` attributes
- `aria-label` on icon-only buttons and social links
- `aria-hidden="true"` on decorative elements (grid, orbs, cursor, progress bar)
- `role="dialog"` and `aria-modal="true"` on modals with `aria-labelledby`
- Custom keyboard focus styles: Blue `outline` with `outline-offset`, glow `box-shadow`
- `prefers-reduced-motion` respected — all animations disabled
- Custom cursor hidden on touch devices (`@media (hover: none) and (pointer: coarse)`)
- Form inputs have proper `<label>` associations, `autocomplete` attributes, and `required` validation
- Custom scrollbar styling
- `scroll-padding-top: 80px` for proper anchor scroll offset under sticky navbar

---

## Assets

| File | Size | Purpose |
|------|------|---------|
| `profile.jpg` | 83 KB | About section avatar |
| `portfolio-banner.jpg` | 871 KB | OG/Twitter social sharing image |
| `rentease_ui.png` | 579 KB | RentEase project screenshot |
| `automize_api.png` | 1.04 MB | Automize API project screenshot |
| `inas_admin.png` | 516 KB | Inas Admin Hub screenshot |
| `cultural_events.png` | 732 KB | Cultural Events screenshot |
| `quordle_game.png` | 652 KB | Quordle Game screenshot |
| `knowplus_learning.png` | 539 KB | Knowplus platform screenshot |
| `mohamed_zoubir.pdf` | 94 KB | Downloadable CV |

---

## Global UI Elements

### Scroll Progress Bar
- Fixed at top of viewport, `z-index: 9999`
- 3px height gradient bar (blue→cyan)
- Width updates dynamically with scroll position via JS

### Custom Cursor (Desktop Only)
- 12px blue circle, smooth follow via `requestAnimationFrame` (0.15 interpolation)
- Expands to 40px on hover over interactive elements
- **Dark theme**: `mix-blend-mode: difference`, white hover color
- **Light theme**: `mix-blend-mode: exclusion` (avoids glitchy inversion on white backgrounds), `opacity: 0.85`, dark hover color (`#222`)
- Hidden on touch devices via `@media (hover: none)`

### Back to Top Button
- Fixed bottom-right (28px offset), 42px circle
- Glassmorphism background, blue hover effects
- Appears after 400px scroll with fade + slide-up transition
- Smooth scrolls to top on click

---

## Known Limitations & Future Improvements

| Item | Status | Notes |
|------|--------|-------|
| **Form rate limiting** | ⚠️ Handled by Formspree | No client-side throttle. If migrating to a custom backend, implement rate limiting, CSRF protection, and a honeypot field. |
| **Custom cursor UX** | ✅ Fixed | `mix-blend-mode: exclusion` used on light theme to avoid visual glitches on white/near-white card backgrounds. |
| **Image optimization** | ✅ Done | All images converted to WebP (< 200KB each). Originals preserved in `assets/images/originals/`. |
| **JS architecture** | ✅ Done | Monolithic `app.js` split into 11 ES modules. Uses native `type="module"` — no bundler required. |
| **Lazy loading** | ✅ Done | All project card + modal images use `loading="lazy"`. Profile avatar stays eager (near fold). |
| **Bundle optimization** | 💡 Future | Consider a bundler (Vite/esbuild) if module count grows, to reduce HTTP requests via concatenation. |
| **Image CDN** | 💡 Future | Serve images via a CDN with responsive `srcset` for further performance gains. |

---

> **Built with** clean code, vanilla technologies, and a passion for premium design.
>
> **© 2026 Mohamed Zoubir. All rights reserved.**
