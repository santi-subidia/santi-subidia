import gsap from 'gsap';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { scrollToElement } from '../lib/smoothScroll';
import { playClickSound } from '../lib/sound';

let floatingTweens: gsap.core.Tween[] = [];

export function renderHero() {
  const container = document.getElementById('hero-section');
  if (!container) return;

  const { developer } = PORTFOLIO_DATA;

  container.innerHTML = `
    <!-- Ambient Radial Glows -->
    <div class="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-primary/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
    <div class="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

    <div class="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start lg:items-center pt-0 lg:pt-2">
      
      <!-- Left Column: Content, Value Proposition & Actions -->
      <div class="lg:col-span-6 flex flex-col items-start text-left z-10">
        <!-- Main Kinetic Heading -->
        <h1 class="hero-headline text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
          Construyendo sistemas <br class="hidden sm:block" />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">backend robustos,</span>
          <br class="hidden sm:block" />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-cyan-400 to-secondary-light">móviles nativos & web.</span>
        </h1>

        <!-- Subtitle Description -->
        <p class="hero-fade max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed mb-8 font-normal">
          ${developer.shortBio}
        </p>

        <!-- Action Buttons -->
        <div class="hero-fade flex flex-wrap items-center gap-3.5">
          <button id="hero-cta-projects" class="px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-light text-white font-medium text-sm shadow-xl shadow-primary/25 transition-all flex items-center gap-2 hover:-translate-y-0.5" data-magnetic>
            <span>Ver Proyectos</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </button>

          <a href="${developer.socials.github}" target="_blank" rel="noreferrer" class="px-5 py-3.5 rounded-xl bg-surface-card hover:bg-surface-elevated border border-surface-border text-slate-300 hover:text-white font-medium text-sm transition-all flex items-center gap-2 hover:-translate-y-0.5" data-magnetic>
            <svg class="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            <span>GitHub</span>
          </a>

          <a href="${developer.socials.linkedin}" target="_blank" rel="noreferrer" class="px-5 py-3.5 rounded-xl bg-surface-card hover:bg-surface-elevated border border-surface-border text-slate-300 hover:text-white font-medium text-sm transition-all flex items-center gap-2 hover:-translate-y-0.5" data-magnetic>
            <svg class="w-4 h-4 text-primary-light" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <!-- Right Column: Interactive 2.5D Isometric Setup Scene -->
      <div class="lg:col-span-6 flex items-center justify-center relative select-none hero-scene-container lg:-mt-14 xl:-mt-20">
        
        <!-- Ambient Neon Glow -->
        <div class="hero-ambient-glow absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-indigo-500/20 via-cyan-500/20 to-purple-500/20 blur-3xl -z-10 pointer-events-none"></div>

        <!-- 3D Parallax Tilt Card -->
        <div id="hero-3d-card" class="relative w-full max-w-[500px] aspect-[4/5] sm:aspect-square flex items-center justify-center cursor-pointer transition-shadow" title="¡Haz clic en la escena para interactuar!">
          
          <!-- Floating Badge 1 (Clean Architecture) -->
          <div id="hero-badge-1" class="absolute -top-3 left-2 sm:left-6 z-20 px-3.5 py-2 rounded-xl bg-[#151a26]/90 border border-cyan-500/30 shadow-xl flex items-center gap-2.5 backdrop-blur-md hover:scale-105 transition-transform">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div class="flex flex-col">
              <span class="text-[11px] font-mono font-semibold text-white flex items-center gap-1">
                <svg class="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                Clean Architecture
              </span>
              <span class="text-[9px] font-mono text-slate-400">.NET &bull; MVVM Pattern</span>
            </div>
          </div>

          <!-- Floating Badge 2 (Live Metrics & SaaS) -->
          <div id="hero-badge-2" class="absolute top-6 -right-2 sm:right-2 z-20 px-3.5 py-2 rounded-xl bg-[#151a26]/90 border border-indigo-500/30 shadow-xl flex items-center gap-2 backdrop-blur-md hover:scale-105 transition-transform">
            <div class="p-1 rounded-lg bg-indigo-500/20 text-indigo-400">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <div class="flex flex-col">
              <span class="text-[11px] font-mono font-semibold text-white flex items-center gap-1">
                <span class="text-amber-400">⚡</span> API Status: 99.9%
              </span>
              <span class="text-[9px] font-mono text-emerald-400">Pipeline Operational</span>
            </div>
          </div>

          <!-- Floating Badge 3 (Android Mobile) -->
          <div id="hero-badge-3" class="absolute bottom-6 -left-2 sm:left-2 z-20 px-3.5 py-2 rounded-xl bg-[#151a26]/90 border border-purple-500/30 shadow-xl flex items-center gap-2 backdrop-blur-md hover:scale-105 transition-transform">
            <div class="p-1 rounded-lg bg-purple-500/20 text-purple-400">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            </div>
            <div class="flex flex-col">
              <span class="text-[11px] font-mono font-semibold text-white">Android Native (Java)</span>
              <span class="text-[9px] font-mono text-slate-400">Full Stack Solutions</span>
            </div>
          </div>

          <!-- Interactive Click Popup / Bubble -->
          <div id="hero-speech-bubble" class="hidden absolute top-1/3 left-1/2 -translate-x-1/2 z-30 px-4 py-2 rounded-xl bg-[#1c2333]/95 border border-cyan-400/50 shadow-2xl backdrop-blur-md text-xs font-mono text-cyan-300 text-center whitespace-nowrap"></div>

          <!-- The Central Isometric Character Setup Illustration -->
          <div id="hero-char-img-wrapper" class="relative w-full h-full flex items-center justify-center p-2 group">
            <img
              src="/hero-isometric.png"
              alt="Santiago Subidia - Desarrollador Full Stack & Mobile en setup isométrico"
              class="w-auto h-full max-h-[460px] object-contain drop-shadow-[0_20px_45px_rgba(99,102,241,0.25)] transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          <!-- Click Hint -->
          <div class="absolute -bottom-2 right-2 sm:right-6 z-20 px-2.5 py-1 rounded-full bg-[#121620]/80 border border-surface-border text-[10px] font-mono text-slate-400 flex items-center gap-1.5 backdrop-blur-sm hover:border-cyan-500/40 transition-colors">
            <span class="text-cyan-400 animate-pulse">✨</span>
            <span>Click para interactuar</span>
          </div>

        </div>
      </div>
    </div>
  `;

  // Attach button click handler
  const heroBtn = document.getElementById('hero-cta-projects');
  if (heroBtn) {
    heroBtn.addEventListener('click', () => {
      playClickSound();
      scrollToElement('#projects-section', -40);
    });
  }

  // Pre-set initial hidden animation state to eliminate flicker and FOUC
  gsap.set('.hero-headline', { y: 35, opacity: 0 });
  gsap.set('.hero-fade', { y: 20, opacity: 0 });
  gsap.set('#hero-3d-card', { scale: 0.9, opacity: 0, y: 25 });

  // Setup 3D Mouse Tilt & Interactivity
  initIsometricInteractivity();
}

function initIsometricInteractivity() {
  const card = document.getElementById('hero-3d-card');
  const imgWrapper = document.getElementById('hero-char-img-wrapper');
  const badge1 = document.getElementById('hero-badge-1');
  const badge2 = document.getElementById('hero-badge-2');
  const badge3 = document.getElementById('hero-badge-3');
  const bubble = document.getElementById('hero-speech-bubble');

  if (!card) return;

  // Clear previous tweens if any
  floatingTweens.forEach(t => t.kill());
  floatingTweens = [];

  // Continuous subtle floating animations
  if (imgWrapper) {
    floatingTweens.push(
      gsap.to(imgWrapper, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    );
  }

  if (badge1) {
    floatingTweens.push(
      gsap.to(badge1, {
        y: -8,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.2,
      })
    );
  }

  if (badge2) {
    floatingTweens.push(
      gsap.to(badge2, {
        y: -12,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.6,
      })
    );
  }

  if (badge3) {
    floatingTweens.push(
      gsap.to(badge3, {
        y: -6,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.4,
      })
    );
  }

  // Mouse move 3D Tilt
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(card, {
      rotateY: x * 18,
      rotateX: -y * 18,
      transformPerspective: 1000,
      ease: 'power2.out',
      duration: 0.5,
    });

    if (badge1) gsap.to(badge1, { x: x * 35, y: y * 35 - 8, ease: 'power2.out', duration: 0.4 });
    if (badge2) gsap.to(badge2, { x: -x * 30, y: -y * 30 - 12, ease: 'power2.out', duration: 0.4 });
    if (badge3) gsap.to(badge3, { x: x * 25, y: y * 25 - 6, ease: 'power2.out', duration: 0.4 });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      rotateY: 0,
      rotateX: 0,
      ease: 'power3.out',
      duration: 0.8,
    });

    if (badge1) gsap.to(badge1, { x: 0, y: 0, ease: 'power3.out', duration: 0.8 });
    if (badge2) gsap.to(badge2, { x: 0, y: 0, ease: 'power3.out', duration: 0.8 });
    if (badge3) gsap.to(badge3, { x: 0, y: 0, ease: 'power3.out', duration: 0.8 });
  });

  // Interactive Click on character
  let clickIdx = 0;
  const messages = [
    "🚀 Compilando arquitectura Clean & MVVM...",
    "⚡ Non-Stop Mode: 100% Productivo",
    "✨ Backend .NET & Android Native sincronizados",
    "☕ Recargando café... ¡Todo listo para construir!",
  ];

  card.addEventListener('click', () => {
    playClickSound();
    clickIdx = (clickIdx + 1) % messages.length;

    if (bubble) {
      bubble.textContent = messages[clickIdx];
      bubble.classList.remove('hidden');
      gsap.fromTo(bubble, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });

      setTimeout(() => {
        gsap.to(bubble, {
          opacity: 0,
          scale: 0.9,
          duration: 0.3,
          onComplete: () => bubble.classList.add('hidden'),
        });
      }, 3200);
    }

    if (imgWrapper) {
      gsap.timeline()
        .to(imgWrapper, { scale: 0.96, duration: 0.1, ease: 'power1.in' })
        .to(imgWrapper, { scale: 1.04, duration: 0.2, ease: 'elastic.out(1, 0.4)' })
        .to(imgWrapper, { scale: 1, duration: 0.3, ease: 'power2.out' });
    }
  });
}

export function animateHero() {
  const tl = gsap.timeline();

  tl.to('.hero-headline', {
    y: 0,
    opacity: 1,
    duration: 1.0,
    ease: 'power4.out',
  })
  .to('.hero-fade', {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.1,
    ease: 'power3.out',
  }, '-=0.6')
  .to('#hero-3d-card', {
    scale: 1,
    opacity: 1,
    y: 0,
    duration: 1.0,
    ease: 'power4.out',
  }, '-=0.7');
}
