/* =============================================================
   REVEAL ON SCROLL + COUNTER ANIMATIONS
   ============================================================= */

export function init() {
  /* Scroll reveal via IntersectionObserver */
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

  /* Counter animation on metrics bar */
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
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

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

  /* Hero stat count-up (in the hero card) */
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

  setTimeout(animateHeroStats, 800);
}
