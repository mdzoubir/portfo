/* =============================================================
   TYPEWRITER EFFECT
   ============================================================= */

import { getTypewriterWords, setOnLangChange } from './i18n.js';

const typewriterEl = document.getElementById('typewriter-text');
let tw_wordIdx = 0;
let tw_charIdx = 0;
let tw_deleting = false;
let tw_timer = null;

function typeStep() {
  const words = getTypewriterWords();
  if (!typewriterEl || !words || words.length === 0) return;
  const word = words[tw_wordIdx % words.length];
  if (!tw_deleting) {
    tw_charIdx++;
    typewriterEl.textContent = word.slice(0, tw_charIdx);
    if (tw_charIdx === word.length) {
      tw_deleting = true;
      tw_timer = setTimeout(typeStep, 1800);
      return;
    }
  } else {
    tw_charIdx--;
    typewriterEl.textContent = word.slice(0, tw_charIdx);
    if (tw_charIdx === 0) { tw_deleting = false; tw_wordIdx++; }
  }
  tw_timer = setTimeout(typeStep, tw_deleting ? 55 : 90);
}

function resetTypewriter() {
  clearTimeout(tw_timer);
  tw_charIdx = 0; tw_deleting = false; tw_wordIdx = 0;
  if (typewriterEl) typewriterEl.textContent = '';
  tw_timer = setTimeout(typeStep, 400);
}

export function init() {
  // Reset typewriter when language changes
  setOnLangChange(resetTypewriter);
  // Start initial typewriter
  resetTypewriter();
}
