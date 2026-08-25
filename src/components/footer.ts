import { PORTFOLIO_DATA } from '../data/portfolioData';
import { scrollToElement } from '../lib/smoothScroll';
import { playClickSound } from '../lib/sound';

export function renderFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  const { developer } = PORTFOLIO_DATA;
  const currentYear = new Date().getFullYear();

  container.innerHTML = `
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 py-2">
      <!-- Copyright & Title -->
      <div class="flex flex-col sm:flex-row items-center gap-2 text-xs text-slate-400">
        <span class="font-display font-semibold text-white">
          ${developer.name}
        </span>
        <span class="hidden sm:inline text-slate-600">•</span>
        <span>${developer.subRole}</span>
        <span class="hidden sm:inline text-slate-600">•</span>
        <span>© ${currentYear}</span>
      </div>

      <!-- Clean Links & Back to Top -->
      <div class="flex items-center gap-6 text-xs font-mono">
        <a href="${developer.socials.github}" target="_blank" rel="noreferrer" class="text-slate-400 hover:text-cyan-400 transition-colors" data-magnetic>
          GitHub
        </a>
        <a href="${developer.socials.linkedin}" target="_blank" rel="noreferrer" class="text-slate-400 hover:text-primary-light transition-colors" data-magnetic>
          LinkedIn
        </a>
        <a href="mailto:${developer.socials.email}" class="text-slate-400 hover:text-white transition-colors" data-magnetic>
          Email
        </a>

        <button id="back-to-top-btn" class="p-2 rounded-lg bg-surface-card hover:bg-surface-elevated border border-surface-border text-slate-400 hover:text-white transition-colors ml-2" title="Volver arriba" data-magnetic>
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
        </button>
      </div>
    </div>
  `;

  // Back to top listener
  const topBtn = document.getElementById('back-to-top-btn');
  if (topBtn) {
    topBtn.addEventListener('click', () => {
      playClickSound();
      scrollToElement(document.body, 0);
    });
  }
}
