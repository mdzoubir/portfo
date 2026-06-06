/* =============================================================
   UI UTILITIES — loader, back-to-top, scroll progress,
   scroll indicator, page title, button ripple
   ============================================================= */

export function init() {

  /* Page loader — dismiss after load */
  const loader = document.getElementById('page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 300);
      setTimeout(() => loader.remove(), 800);
    });
  }

  /* Scroll progress bar */
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

  /* Scroll indicator — fade on scroll */
  const scrollInd = document.querySelector('.scroll-indicator');
  if (scrollInd) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) scrollInd.style.opacity = '0';
      else scrollInd.style.opacity = '1';
    }, { passive: true });
  }

  /* Back to top button */
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* Button ripple effect */
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

  /* Animated page title — cycles when tab is hidden */
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
}
