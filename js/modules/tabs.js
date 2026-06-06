/* =============================================================
   TABS — switching + language bar animation
   ============================================================= */

function animateLangBars() {
  document.querySelectorAll('.lang-bar').forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => { bar.style.width = width; }, 50);
  });
}

export function init() {
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

  // Trigger lang bar animation if lang tab is active on load
  if (document.querySelector('.tab-panel.active')?.id === 'tab-content-languages') {
    animateLangBars();
  }

  // Also trigger on explicit languages tab click
  const langTabBtn = document.getElementById('tab-btn-languages');
  if (langTabBtn) {
    langTabBtn.addEventListener('click', () => {
      setTimeout(animateLangBars, 50);
    });
  }
}
