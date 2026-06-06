/* =============================================================
   AAA EFFECT SYSTEMS — Glow borders, 3D card tilts,
   magnetic buttons, and scroll-linked timeline tracking
   ============================================================= */

export function init() {
  initGlowAndTilt();
  initMagneticButtons();
  initTimelineProgress();
}

/**
 * 1. DYNAMIC GLOW BORDERS & 3D PERSPECTIVE TILT
 * Tracks cursor positions over cards to set --mouse-x and --mouse-y CSS variables.
 * Calculates rotational tilt based on mouse distance from the card center.
 */
function initGlowAndTilt() {
  const cards = document.querySelectorAll('.glass-card, .project-card, .stack-card, .metric-card, .hero-card');
  if (!cards.length) return;

  cards.forEach(card => {
    // Only apply hover tilt/glow if the device supports hover
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update custom variables for border-tracing gradient glow
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      // 3D Perspective Card Tilt (skip on modals or specific overlays if any)
      if (card.classList.contains('modal-box')) return;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation angles (max tilt ~4.5 degrees)
      const tiltX = ((y - centerY) / centerY) * -4.5;
      const tiltY = ((x - centerX) / centerX) * 4.5;

      // Apply perspective scale and tilt rotation
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.setProperty('--mouse-x', `-1000px`);
      card.style.setProperty('--mouse-y', `-1000px`);
    });
  });
}

/**
 * 2. MAGNETIC CTA BUTTON EFFECT
 * Dynamically pulls buttons slightly towards the cursor on hover.
 */
function initMagneticButtons() {
  const buttons = document.querySelectorAll('.btn, .social-link, .clc-icon, .footer-social');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - (rect.width / 2);
      const y = e.clientY - rect.top - (rect.height / 2);

      // Pull element by max 10px towards cursor
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/**
 * 3. SCROLL-LINKED TIMELINE PROGRESS & TRAVELING DOT
 * Tracks timeline scroll coordinates and updates vertical line progress and dot position.
 */
function initTimelineProgress() {
  const timeline = document.querySelector('.timeline');
  const progressBar = document.getElementById('timeline-progress-bar');
  const progressDot = document.querySelector('.timeline-progress-dot');
  
  if (!timeline || !progressBar) return;

  const updateTimelineProgress = () => {
    const rect = timeline.getBoundingClientRect();
    const viewHeight = window.innerHeight;

    // Start filling when timeline top is at 70% of screen height
    const startPoint = viewHeight * 0.7;
    // Complete filling when timeline bottom hits 30% of screen height
    const totalHeight = rect.height;
    const scrolled = startPoint - rect.top;

    let percent = (scrolled / totalHeight) * 100;
    percent = Math.max(0, Math.min(100, percent));

    progressBar.style.height = `${percent}%`;
    
    // Position dot at tip of progress bar
    if (progressDot) {
      progressDot.style.top = `calc(${percent}% - 4px)`;
    }
  };

  window.addEventListener('scroll', updateTimelineProgress, { passive: true });
  window.addEventListener('resize', updateTimelineProgress);
  
  // Initial check
  setTimeout(updateTimelineProgress, 100);
}
