/* =============================================================
   CONTACT FORM — Formspree submission with loading/success/error
   ============================================================= */

export function init() {
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
      submitBtn.classList.add('loading');
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
}
