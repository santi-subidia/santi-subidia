import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PORTFOLIO_DATA, ExperienceItem } from '../data/portfolioData';
import { playClickSound, playHoverSound } from '../lib/sound';

gsap.registerPlugin(ScrollTrigger);

export function renderExperience() {
  const container = document.getElementById('experience-section');
  if (!container) return;

  const { experience } = PORTFOLIO_DATA;

  container.innerHTML = `
    <div>
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
          <span class="text-sm">🎓</span>
          <span>Educación Continua & Certificaciones</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
          Formación & Certificaciones
        </h2>
        <p class="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Formación académica universitaria y certificaciones profesionales oficiales en arquitecturas backend, Web APIs RESTful y automatización con Inteligencia Artificial.
        </p>
      </div>

      <!-- Timeline Container -->
      <div class="relative pl-6 sm:pl-10 border-l-2 border-surface-border space-y-12">
        ${experience.map((item, idx) => renderTimelineItem(item, idx)).join('')}
      </div>
    </div>

    <!-- Certificate Modal Lightbox -->
    <div id="certificate-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md opacity-0 transition-opacity duration-300">
      <div class="certificate-modal-content relative max-w-4xl w-full bg-[#121622] border border-cyan-500/30 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden transform scale-95 transition-transform duration-300">
        <!-- Modal Header -->
        <div class="flex items-center justify-between px-6 py-4 border-b border-surface-border bg-surface-card/80">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <h4 id="cert-modal-title" class="font-display font-bold text-sm sm:text-base text-white truncate max-w-md">
              Certificado Oficial
            </h4>
          </div>
          <button id="cert-modal-close" class="p-1.5 rounded-xl bg-surface-elevated text-slate-400 hover:text-white hover:bg-surface-border transition-colors cursor-pointer" aria-label="Cerrar modal">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <!-- Modal Image Body -->
        <div class="p-4 sm:p-6 flex flex-col items-center justify-center bg-black/40">
          <div class="relative w-full max-h-[70vh] flex items-center justify-center rounded-xl overflow-hidden border border-surface-border/50 bg-[#0b0d13]">
            <img id="cert-modal-img" src="" alt="Certificado" class="max-h-[65vh] w-auto object-contain rounded-lg shadow-2xl" />
          </div>
        </div>

        <!-- Modal Footer Actions -->
        <div class="px-6 py-4 border-t border-surface-border bg-surface-card/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div class="flex items-center gap-2 text-slate-400 font-mono">
            <span class="text-cyan-400">ID Credencial:</span>
            <span id="cert-modal-id" class="text-slate-200"></span>
          </div>
          <div class="flex items-center gap-3">
            <a id="cert-modal-link" href="#" target="_blank" rel="noreferrer" class="px-4 py-2 rounded-xl bg-primary hover:bg-primary-light text-white font-medium flex items-center gap-1.5 transition-colors shadow-lg shadow-primary/25">
              <span>Verificar en Udemy</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `;

  setupCertificateModalListeners();
}

function renderTimelineItem(item: ExperienceItem, idx: number): string {
  const isCert = item.type === 'certification';

  return `
    <div class="timeline-item relative group" data-idx="${idx}">
      <!-- Timeline Beacon -->
      <div class="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0b0d13] border-2 ${isCert ? 'border-cyan-400 group-hover:border-primary' : 'border-primary group-hover:border-cyan-400'} transition-colors flex items-center justify-center">
        <div class="w-1.5 h-1.5 rounded-full ${isCert ? 'bg-cyan-400 group-hover:bg-primary' : 'bg-primary group-hover:bg-cyan-400'} transition-colors"></div>
      </div>

      <!-- Content Card -->
      <div class="glass-card p-6 sm:p-8 rounded-2xl border border-surface-border transition-all duration-300">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
          <div class="flex-grow">
            <!-- Badge & Type -->
            <div class="flex flex-wrap items-center gap-2 mb-2.5">
              <span class="px-2.5 py-1 rounded-md ${isCert ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-300' : 'bg-primary/10 border border-primary/30 text-primary-light'} font-mono text-xs inline-flex items-center gap-1.5">
                <span>${isCert ? '🏆' : '🏛️'}</span>
                <span>${item.badge || 'Formación'}</span>
              </span>
              ${item.hours ? `
                <span class="px-2 py-0.5 rounded-md bg-surface-elevated text-[11px] font-mono text-slate-300 border border-surface-border">
                  ⏱️ ${item.hours}
                </span>
              ` : ''}
            </div>

            <!-- Role / Title -->
            <h3 class="text-xl sm:text-2xl font-display font-bold text-white leading-tight">
              ${item.role}
            </h3>

            <!-- Issuer / Company / Instructor -->
            <div class="flex flex-wrap items-center gap-2 mt-2 text-sm">
              <span class="font-medium ${isCert ? 'text-cyan-400' : 'text-primary-light'} flex items-center gap-1">
                ${isCert ? `
                  <span class="font-bold text-white">Udemy</span>
                  ${item.instructor ? `<span class="text-slate-500">•</span> <span class="text-slate-300">Instructor: ${item.instructor}</span>` : ''}
                ` : `
                  <a href="${item.linkUrl}" target="_blank" rel="noreferrer" class="hover:underline flex items-center gap-1">
                    <span>${item.company}</span>
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                `}
              </span>
              <span class="text-slate-500 hidden sm:inline">•</span>
              <span class="text-xs text-slate-400 font-mono">${item.location}</span>
            </div>
          </div>

          <!-- Period Chip -->
          <span class="font-mono text-xs text-slate-300 px-3 py-1.5 rounded-xl bg-surface-elevated border border-surface-border self-start sm:self-auto flex-shrink-0">
            📅 ${item.period}
          </span>
        </div>

        <!-- Certificate Visual Preview (If image exists) -->
        ${item.certificateImage ? `
          <div class="mb-6 grid grid-cols-1 md:grid-cols-12 gap-5 items-center p-4 rounded-xl bg-[#0e121a]/90 border border-surface-border/70">
            <!-- Thumbnail with Hover Overlay -->
            <div class="md:col-span-4 relative group/thumb cursor-pointer overflow-hidden rounded-lg border border-cyan-500/20 shadow-lg bg-black/50 aspect-[4/3] flex items-center justify-center btn-open-cert" data-img="${item.certificateImage}" data-title="${item.role}" data-id="${item.credentialId || ''}" data-url="${item.linkUrl || ''}">
              <img src="${item.certificateImage}" alt="${item.role}" class="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300" />
              <div class="absolute inset-0 bg-black/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1 text-cyan-300 font-mono text-xs">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
                <span>Ampliar Certificado</span>
              </div>
            </div>

            <!-- Certificate Quick Specs & Actions -->
            <div class="md:col-span-8 flex flex-col justify-between h-full space-y-3">
              <div class="space-y-1.5">
                <div class="text-xs font-mono text-slate-400">
                  <span class="text-cyan-400 font-semibold">Credencial Verificada:</span>
                  <span class="text-slate-300 ml-1 select-all font-mono">${item.credentialId}</span>
                </div>
                <p class="text-xs text-slate-400 leading-relaxed">
                  Emitido por Udemy tras culminar 100% de la carga horaria técnica y prácticas de código evaluadas.
                </p>
              </div>

              <!-- Quick Buttons -->
              <div class="flex flex-wrap items-center gap-2 pt-1">
                <button class="btn-open-cert px-3.5 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-xs font-mono transition-colors flex items-center gap-1.5 cursor-pointer" data-img="${item.certificateImage}" data-title="${item.role}" data-id="${item.credentialId || ''}" data-url="${item.linkUrl || ''}">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  <span>Ver Certificado</span>
                </button>

                ${item.linkUrl ? `
                  <a href="${item.linkUrl}" target="_blank" rel="noreferrer" class="px-3.5 py-1.5 rounded-lg bg-surface-elevated hover:bg-surface-border text-slate-300 hover:text-white border border-surface-border text-xs font-mono transition-colors flex items-center gap-1.5">
                    <span>Verificar en Udemy</span>
                    <svg class="w-3 h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </a>
                ` : ''}
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Description -->
        <p class="text-sm text-slate-300 mb-6 leading-relaxed">
          ${item.description}
        </p>

        <!-- Achievements -->
        <div class="space-y-2 mb-6">
          <span class="text-xs font-mono text-slate-400 uppercase tracking-wider block">
            ${isCert ? 'Habilidades & Competencias Adquiridas:' : 'Hitos & Aprendizajes Académicos:'}
          </span>
          <ul class="space-y-2 text-xs sm:text-sm text-slate-300">
            ${item.achievements.map((ach) => `
              <li class="flex items-start gap-2.5">
                <span class="text-cyan-400 font-bold mt-0.5">✓</span>
                <span class="leading-snug">${ach}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Tech tags -->
        <div class="flex flex-wrap gap-2 pt-4 border-t border-surface-border/60">
          ${item.technologies.map((t) => `
            <span class="px-2.5 py-0.5 rounded bg-surface-elevated text-[11px] font-mono text-slate-300 border border-surface-border/40">
              ${t}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function setupCertificateModalListeners() {
  const modal = document.getElementById('certificate-modal');
  const modalImg = document.getElementById('cert-modal-img') as HTMLImageElement;
  const modalTitle = document.getElementById('cert-modal-title');
  const modalId = document.getElementById('cert-modal-id');
  const modalLink = document.getElementById('cert-modal-link') as HTMLAnchorElement;
  const closeBtn = document.getElementById('cert-modal-close');

  if (!modal) return;

  const openButtons = document.querySelectorAll('.btn-open-cert');

  const openModal = (imgSrc: string, title: string, id: string, url: string) => {
    playClickSound();
    if (modalImg) modalImg.src = imgSrc;
    if (modalTitle) modalTitle.textContent = title;
    if (modalId) modalId.textContent = id;
    if (modalLink) modalLink.href = url;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    // Animation in
    gsap.to(modal, { opacity: 1, duration: 0.25, ease: 'power2.out' });
    const content = modal.querySelector('.certificate-modal-content');
    if (content) {
      gsap.fromTo(content, { scale: 0.95, y: 10 }, { scale: 1, y: 0, duration: 0.3, ease: 'back.out(1.5)' });
    }
  };

  const closeModal = () => {
    playClickSound();
    gsap.to(modal, {
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
      }
    });
  };

  openButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const el = btn as HTMLElement;
      const imgSrc = el.getAttribute('data-img') || '';
      const title = el.getAttribute('data-title') || 'Certificado Oficial';
      const id = el.getAttribute('data-id') || '';
      const url = el.getAttribute('data-url') || '#';
      openModal(imgSrc, title, id, url);
    });

    btn.addEventListener('mouseenter', () => {
      playHoverSound();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}

export function initExperienceAnimation() {
  gsap.from('.timeline-item', {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#experience-section',
      start: 'top 75%',
    },
  });
}

