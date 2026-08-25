import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { getTechLogoSVG } from './techLogos';

gsap.registerPlugin(ScrollTrigger);

export function renderProjects() {
  const container = document.getElementById('projects-section');
  if (!container) return;

  const { projects } = PORTFOLIO_DATA;

  container.innerHTML = `
    <div class="projects-wrapper w-full relative overflow-hidden">
      <!-- Ambient Floor Glow / Light Beam underneath project cards -->
      <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl h-44 bg-gradient-to-t from-cyan-500/30 via-primary/20 to-transparent rounded-full blur-[90px] pointer-events-none z-0"></div>
      <div class="absolute bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none z-0"></div>

      <!-- Compact Section Header -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col md:flex-row md:items-end justify-between gap-3 relative z-10">
        <div>
          <h2 class="text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Proyectos & Arquitecturas
          </h2>
        </div>
        <p class="text-xs sm:text-sm text-slate-400 max-w-md">
          Sistemas completos a medida, aplicaciones móviles nativas y plataformas web de alto rendimiento.
        </p>
      </div>

      <!-- Horizontal Scroll Track (Desktop) / Vertical Stack (Mobile) -->
      <div class="projects-track flex flex-col lg:flex-row gap-6 lg:gap-8 px-4 sm:px-6 lg:px-10 w-full lg:w-max items-stretch py-8 relative z-10">
        ${projects.map((project, idx) => `
          <div class="project-card flex-shrink-0 w-full lg:w-[560px] xl:w-[600px] rounded-2xl glass-card p-6 sm:p-7 flex flex-col justify-between relative group/card border border-surface-border overflow-hidden transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.025] hover:z-30 z-10 hover:border-cyan-400/60 hover:shadow-[0_25px_65px_-10px_rgba(34,211,238,0.3)] hover:ring-1 hover:ring-cyan-400/40" data-index="${idx}">
            
            <!-- Under-card Floor Glow / Light projection -->
            <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-16 bg-gradient-to-t from-cyan-400/25 to-primary/15 rounded-full blur-[24px] pointer-events-none group-hover/card:bg-cyan-400/45 group-hover/card:h-24 group-hover/card:w-full transition-all duration-500"></div>

            <!-- Internal bottom ambient glow illuminating footer -->
            <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyan-500/15 via-primary/5 to-transparent pointer-events-none rounded-b-2xl"></div>

            <!-- Internal ambient focus glow overlay -->
            <div class="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-cyan-400/15 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>

            <!-- Ambient Card Corner Glow -->
            <div class="absolute -right-20 -bottom-20 w-56 h-56 bg-primary/15 rounded-full blur-[70px] pointer-events-none group-hover/card:bg-cyan-400/25 transition-all duration-500"></div>

            <div class="relative z-10">
              <!-- Header Badges -->
              <div class="flex items-center justify-between mb-3 flex-wrap gap-2">
                <span class="px-2.5 py-0.5 rounded-full bg-surface-elevated border border-surface-border text-cyan-400 font-mono text-xs shadow-sm">
                  ${project.category}
                </span>
                <div class="flex items-center gap-2">
                  ${project.liveUrl ? `
                    <a href="${project.liveUrl}" target="_blank" rel="noreferrer" class="p-1.5 rounded-lg bg-surface-elevated border border-surface-border text-slate-300 hover:text-white hover:border-cyan-400 transition-colors flex items-center gap-1 text-xs font-mono" title="Ver Demo en Vivo" data-magnetic>
                      <span>Demo</span>
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                  ` : ''}
                  ${project.githubUrl ? `
                    <a href="${project.githubUrl}" target="_blank" rel="noreferrer" class="p-1.5 rounded-lg bg-surface-elevated border border-surface-border text-slate-300 hover:text-white hover:border-primary-light transition-colors flex items-center gap-1 text-xs font-mono" title="Ver Repositorio" data-magnetic>
                      <span>Repo</span>
                      <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    </a>
                  ` : ''}
                </div>
              </div>

              <!-- Project Title & Tagline -->
              <h3 class="text-xl sm:text-2xl font-display font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors">
                ${project.title}
              </h3>
              <p class="text-xs sm:text-sm font-medium text-slate-300 mb-3">
                ${project.tagline}
              </p>

              <!-- Description -->
              <p class="text-xs text-slate-400 leading-relaxed mb-4">
                ${project.description}
              </p>

              <!-- Architecture Highlights -->
              <div class="mb-4 space-y-1.5">
                <span class="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block font-semibold">Aspectos Técnicos:</span>
                <ul class="space-y-1 text-xs text-slate-300">
                  ${project.architecture.map((arch) => `
                    <li class="flex items-start gap-2">
                      <span class="text-primary mt-0.5">▹</span>
                      <span>${arch}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>

            <!-- Footer Tech Tags & Metrics with Enhanced Bottom Lighting -->
            <div class="pt-3 border-t border-cyan-500/20 group-hover/card:border-cyan-400/40 transition-colors relative z-10">
              <div class="flex flex-wrap gap-1.5 mb-2">
                ${project.technologies.map((t) => `
                  <span class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-elevated/95 border border-cyan-500/20 text-[10px] font-mono text-slate-200 shadow-sm">
                    <span class="w-3 h-3 flex items-center justify-center flex-shrink-0">${getTechLogoSVG(t, 'w-3 h-3')}</span>
                    <span>${t}</span>
                  </span>
                `).join('')}
              </div>

              <div class="flex flex-wrap items-center gap-2.5">
                ${project.metrics.map((m) => `
                  <span class="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-medium">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                    <span>${m}</span>
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

export function initProjectsAnimation() {
  const track = document.querySelector('.projects-track');
  if (!track || window.innerWidth < 1024) return;

  // Calculate horizontal distance to scroll
  const getScrollAmount = () => {
    return -(track.scrollWidth - window.innerWidth + 80);
  };

  gsap.to(track, {
    x: getScrollAmount,
    ease: 'none',
    scrollTrigger: {
      trigger: '#projects-section',
      pin: true,
      scrub: 1,
      start: 'top top+=65',
      end: () => `+=${track.scrollWidth - window.innerWidth + 200}`,
      invalidateOnRefresh: true,
    },
  });
}
