import gsap from 'gsap';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { scrollToElement } from '../lib/smoothScroll';
import { isSoundEnabled, toggleSound, playClickSound } from '../lib/sound';
import { getHSSLogoSVG } from './logo';

export function renderNavbar() {
  const container = document.getElementById('navbar-container');
  if (!container) return;

  const { developer } = PORTFOLIO_DATA;

  container.innerHTML = `
    <nav class="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 rounded-full glass-pill border border-surface-border/80 shadow-2xl backdrop-blur-xl">
      <!-- Brand & HSS Logo -->
      <a href="#" id="nav-brand-link" class="nav-brand flex items-center gap-3 group" data-magnetic>
        <div class="flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
          ${getHSSLogoSVG("w-9 h-9", true)}
        </div>
        <div class="flex flex-col">
          <span class="font-display font-bold text-sm tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            ${developer.name}
          </span>
          <span class="font-mono text-[10px] text-slate-400 hidden sm:inline">
            Full-Stack & Mobile
          </span>
        </div>
      </a>

      <!-- Center Links (Desktop) -->
      <div class="hidden md:flex items-center gap-1 bg-surface-card/60 p-1 rounded-full border border-surface-border/50">
        <button data-scroll="#projects-section" class="nav-link px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-surface-elevated transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 active:scale-95" data-magnetic>
          Proyectos
        </button>
        <button data-scroll="#skills-section" class="nav-link px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-surface-elevated transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 active:scale-95" data-magnetic>
          Habilidades
        </button>
        <button data-scroll="#experience-section" class="nav-link px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-surface-elevated transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 active:scale-95" data-magnetic>
          Trayectoria
        </button>
        <button data-scroll="#contact-section" class="nav-link px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-surface-elevated transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 active:scale-95" data-magnetic>
          Contacto
        </button>
      </div>

      <!-- Right Actions: Sound Toggle & Contact CTA -->
      <div class="flex items-center gap-3">
        <!-- Audio Toggle Button -->
        <button id="sound-toggle-btn" class="px-3 py-1.5 rounded-full bg-surface-card border border-surface-border text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors flex items-center gap-1.5" title="Activar/Desactivar efectos de sonido" data-magnetic>
          <span id="sound-icon" class="font-mono text-xs">${isSoundEnabled() ? '🔊 FX ON' : '🔇 FX OFF'}</span>
        </button>

        <!-- Direct Contact CTA -->
        <button data-scroll="#contact-section" class="px-4 py-1.5 rounded-full bg-primary hover:bg-primary-light text-white text-xs font-semibold shadow-lg shadow-primary/20 transition-all" data-magnetic>
          Hablemos
        </button>
      </div>
    </nav>
  `;

  // Attach brand link scroll to top
  const brandLink = document.getElementById('nav-brand-link');
  if (brandLink) {
    brandLink.addEventListener('click', (e) => {
      e.preventDefault();
      playClickSound();
      scrollToElement(document.body, 0);
    });
  }

  // Attach nav link click handlers
  const navLinks = container.querySelectorAll('[data-scroll]');
  navLinks.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      playClickSound();
      const targetId = (btn as HTMLElement).getAttribute('data-scroll');
      if (targetId) {
        scrollToElement(targetId, -80);
      }
    });
  });

  // Pre-set initial hidden animation state to eliminate flicker
  gsap.set('#navbar-container', { y: -20, opacity: 0 });

  // Sound toggle button listener
  const soundBtn = document.getElementById('sound-toggle-btn');
  const soundIcon = document.getElementById('sound-icon');
  if (soundBtn && soundIcon) {
    soundBtn.addEventListener('click', () => {
      const enabled = toggleSound();
      soundIcon.textContent = enabled ? '🔊 FX ON' : '🔇 FX OFF';
      soundBtn.classList.toggle('text-cyan-400', enabled);
      soundBtn.classList.toggle('border-cyan-400/50', enabled);
    });
  }
}

export function animateNavbar() {
  gsap.to('#navbar-container', {
    y: 0,
    opacity: 1,
    duration: 0.9,
    ease: 'power3.out',
  });
}
