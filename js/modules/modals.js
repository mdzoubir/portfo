/* =============================================================
   MODALS — open/close with keyboard + backdrop support
   ============================================================= */

export function init() {
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
}
