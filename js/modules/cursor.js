/* =============================================================
   CUSTOM CURSOR — smooth follow + hover expand (desktop only)
   ============================================================= */

export function init() {
  const cursor = document.getElementById('custom-cursor');
  if (!cursor || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

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
