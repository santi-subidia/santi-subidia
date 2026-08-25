import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { playClickSound, playSuccessSound } from '../lib/sound';

gsap.registerPlugin(ScrollTrigger);

export function renderContact() {
  const container = document.getElementById('contact-section');
  if (!container) return;

  const { developer } = PORTFOLIO_DATA;

  container.innerHTML = `
    <div class="glass-card p-8 sm:p-12 rounded-3xl border border-surface-border relative overflow-hidden">
      <!-- Glow ambient -->
      <div class="absolute -top-32 -right-32 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div class="max-w-2xl">
        <h2 class="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
          ¿Listo para colaborar en el próximo gran proyecto?
        </h2>
        <p class="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
          Actualmente disponible para roles de desarrollo Backend, Mobile nativo o Full-Stack. Escríbeme directamente para coordinar una reunión o discutir ideas de proyectos.
        </p>

        <!-- Email Copy Terminal Box -->
        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2 rounded-2xl bg-surface-elevated border border-surface-border mb-8">
          <div class="flex items-center gap-3 px-4 py-2 flex-grow overflow-hidden">
            <span class="text-cyan-400 font-mono text-sm">✉</span>
            <span id="email-text" class="font-mono text-sm text-white truncate select-all">
              ${developer.socials.email}
            </span>
          </div>

          <button id="copy-email-btn" class="px-6 py-3 rounded-xl bg-primary hover:bg-primary-light text-white font-medium text-xs shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 flex-shrink-0" data-magnetic>
            <span id="copy-text">Copiar Correo</span>
          </button>
        </div>

        <!-- Social Reach-out Channels -->
        <div class="flex flex-wrap items-center gap-4">
          <a href="${developer.socials.linkedin}" target="_blank" rel="noreferrer" class="px-5 py-2.5 rounded-xl bg-surface-card hover:bg-surface-elevated border border-surface-border text-slate-300 hover:text-white font-mono text-xs transition-colors flex items-center gap-2" data-magnetic>
            <span class="text-primary-light">LinkedIn ↗</span>
          </a>

          <a href="${developer.socials.github}" target="_blank" rel="noreferrer" class="px-5 py-2.5 rounded-xl bg-surface-card hover:bg-surface-elevated border border-surface-border text-slate-300 hover:text-white font-mono text-xs transition-colors flex items-center gap-2" data-magnetic>
            <span class="text-cyan-400">GitHub ↗</span>
          </a>

          <a href="https://wa.me/542664172006" target="_blank" rel="noreferrer" class="px-5 py-2.5 rounded-xl bg-surface-card hover:bg-surface-elevated border border-surface-border text-slate-300 hover:text-white font-mono text-xs transition-colors flex items-center gap-2" data-magnetic>
            <span class="text-emerald-400">WhatsApp ↗</span>
          </a>
        </div>
      </div>
    </div>
  `;

  // Copy Email Logic
  const copyBtn = document.getElementById('copy-email-btn');
  const emailText = document.getElementById('email-text');
  const copyText = document.getElementById('copy-text');

  if (copyBtn && emailText && copyText) {
    copyBtn.addEventListener('click', async () => {
      playClickSound();
      try {
        await navigator.clipboard.writeText(developer.socials.email);
        playSuccessSound();
        copyText.textContent = '¡Copiado al portapapeles!';
        copyBtn.classList.add('bg-emerald-600');
        setTimeout(() => {
          copyText.textContent = 'Copiar Correo';
          copyBtn.classList.remove('bg-emerald-600');
        }, 2500);
      } catch {
        copyText.textContent = developer.socials.email;
      }
    });
  }
}

export function initContactAnimation() {
  gsap.from('#contact-section .glass-card', {
    scale: 0.95,
    opacity: 0,
    duration: 0.9,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#contact-section',
      start: 'top 80%',
    },
  });
}
