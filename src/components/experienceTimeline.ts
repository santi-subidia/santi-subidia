import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PORTFOLIO_DATA } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export function renderExperience() {
  const container = document.getElementById('experience-section');
  if (!container) return;

  const { experience } = PORTFOLIO_DATA;

  container.innerHTML = `
    <div>
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
          Educación & Experiencia
        </h2>
        <p class="text-sm text-slate-400">
          Formación académica universitaria rigurosa y proyectos de desarrollo de software integral.
        </p>
      </div>

      <!-- Timeline Container -->
      <div class="relative pl-6 sm:pl-10 border-l-2 border-surface-border space-y-12">
        ${experience.map((item) => `
          <div class="timeline-item relative group">
            <!-- Timeline Beacon -->
            <div class="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0b0d13] border-2 border-primary group-hover:border-cyan-400 transition-colors flex items-center justify-center">
              <div class="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-cyan-400 transition-colors"></div>
            </div>

            <!-- Content Card -->
            <div class="glass-card p-6 sm:p-8 rounded-2xl border border-surface-border">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <span class="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/30 text-primary-light font-mono text-xs inline-block mb-2">
                    ${item.badge || 'Formación'}
                  </span>
                  <h3 class="text-xl sm:text-2xl font-display font-bold text-white">
                    ${item.role}
                  </h3>
                  <div class="flex items-center gap-2 mt-1">
                    <a href="${item.linkUrl}" target="_blank" rel="noreferrer" class="text-sm font-medium text-cyan-400 hover:underline flex items-center gap-1">
                      <span>${item.company}</span>
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                    <span class="text-slate-500">•</span>
                    <span class="text-xs text-slate-400 font-mono">${item.location}</span>
                  </div>
                </div>
                <span class="font-mono text-xs text-slate-400 px-3 py-1 rounded-full bg-surface-elevated self-start sm:self-auto">
                  ${item.period}
                </span>
              </div>

              <p class="text-sm text-slate-300 mb-6 leading-relaxed">
                ${item.description}
              </p>

              <!-- Achievements -->
              <div class="space-y-2 mb-6">
                <span class="text-xs font-mono text-slate-400 uppercase tracking-wider block">Hitos & Aprendizajes:</span>
                <ul class="space-y-2 text-xs sm:text-sm text-slate-300">
                  ${item.achievements.map((ach) => `
                    <li class="flex items-start gap-2.5">
                      <span class="text-cyan-400 font-bold">✓</span>
                      <span>${ach}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <!-- Tech tags -->
              <div class="flex flex-wrap gap-2 pt-4 border-t border-surface-border/60">
                ${item.technologies.map((t) => `
                  <span class="px-2.5 py-0.5 rounded bg-surface-elevated text-[11px] font-mono text-slate-300">
                    ${t}
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
