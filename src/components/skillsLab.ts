import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { getTechLogoSVG } from './techLogos';
import { playClickSound, playHoverSound, playSuccessSound } from '../lib/sound';

gsap.registerPlugin(ScrollTrigger, Draggable);

interface ParticleBody {
  el: HTMLElement;
  iconBox: HTMLElement;
  textContainer: HTMLElement;
  draggable: Draggable;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isDragging: boolean;
  lastX: number;
  lastY: number;
  lastTime: number;
}

let bodies: ParticleBody[] = [];
let physicsActive = false;
let currentMode: 'grid' | 'chaos' = 'grid';
let tickerFn: (() => void) | null = null;

export function renderSkills() {
  const container = document.getElementById('skills-section');
  if (!container) return;

  const { technologies } = PORTFOLIO_DATA;
  const categories = ["Todos", "Backend & APIs", "Mobile Android", "Frontend & Web", "Bases de Datos & Herramientas"];

  container.innerHTML = `
    <div class="relative">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-8">
        <h2 class="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-3">
          Habilidades & Tecnologías
        </h2>
        <p class="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          Cambia entre la vista organizada con descripciones de arquitectura o el modo de flotación libre con físicas de colisión en tiempo real.
        </p>
      </div>

      <!-- Action Toolbar -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 p-3 rounded-2xl glass-card border border-surface-border">
        <!-- Layout Mode Switchers -->
        <div class="flex items-center gap-2">
          <button id="btn-layout-grid" class="px-4 py-1.5 rounded-xl text-xs font-mono bg-primary text-white shadow-lg shadow-primary/20 transition-all flex items-center gap-1.5" data-magnetic>
            <span>⊞ Organizar</span>
          </button>
          <button id="btn-layout-chaos" class="px-4 py-1.5 rounded-xl text-xs font-mono bg-surface-elevated hover:bg-surface-border text-slate-300 hover:text-white transition-all flex items-center gap-1.5" data-magnetic>
            <span>🎲 Flotación & Colisiones</span>
          </button>
        </div>

        <!-- Filter Categories -->
        <div class="flex flex-wrap items-center justify-center gap-1.5">
          ${categories.map((cat, i) => `
            <button class="skill-filter-chip px-3 py-1 rounded-lg text-[11px] font-mono transition-all ${i === 0 ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-surface-elevated/60 text-slate-400 border border-surface-border hover:text-white'}" data-category="${cat}">
              ${cat === 'Todos' ? 'Todos' : cat.split(' ')[0]}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Playground Canvas Arena -->
      <div id="tech-playground" class="relative w-full min-h-[560px] sm:min-h-[620px] rounded-3xl glass-panel border border-surface-border/80 overflow-hidden select-none p-4 sm:p-6 bg-gradient-to-b from-[#0e121a]/95 to-[#090b10]/95">
        <!-- Interactive Grid Background Pattern -->
        <div class="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

        <!-- Draggable Tech Badges Container -->
        <div id="badges-container" class="relative w-full h-full min-h-[500px] sm:min-h-[560px]">
          ${technologies.map((tech, i) => `
            <div class="tech-draggable-pill absolute cursor-grab active:cursor-grabbing rounded-2xl glass-card border border-surface-border flex items-center justify-start gap-3 shadow-2xl backdrop-blur-xl hover:border-cyan-400 hover:shadow-cyan-500/25 transition-[border-color,box-shadow]" data-index="${i}" data-name="${tech.name}" data-category="${tech.category}" data-role="${tech.role}" style="z-index: 10;">
              <!-- Official Brand Logo Box -->
              <div class="tech-icon-box w-11 h-11 rounded-xl bg-surface-elevated/95 border border-surface-border flex items-center justify-center flex-shrink-0 shadow-inner p-1.5 transition-all">
                ${getTechLogoSVG(tech.name, 'w-7 h-7')}
              </div>
              <!-- Text info (Leyenda) -->
              <div class="tech-info-text flex flex-col pr-3 overflow-hidden">
                <span class="font-display font-bold text-xs sm:text-sm text-white tracking-tight whitespace-nowrap">
                  ${tech.name}
                </span>
                <span class="font-mono text-[11px] text-slate-400 whitespace-nowrap">
                  ${tech.role}
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Attach controls listeners
  setupPlaygroundControls();
}

function setupPlaygroundControls() {
  const btnGrid = document.getElementById('btn-layout-grid');
  const btnChaos = document.getElementById('btn-layout-chaos');
  const filterChips = document.querySelectorAll('.skill-filter-chip');

  if (btnGrid) {
    btnGrid.addEventListener('click', () => {
      playClickSound();
      currentMode = 'grid';
      stopContinuousPhysics();
      btnGrid.className = 'px-4 py-1.5 rounded-xl text-xs font-mono bg-primary text-white shadow-lg shadow-primary/20 transition-all flex items-center gap-1.5';
      if (btnChaos) btnChaos.className = 'px-4 py-1.5 rounded-xl text-xs font-mono bg-surface-elevated hover:bg-surface-border text-slate-300 hover:text-white transition-all flex items-center gap-1.5';
      arrangeGrid();
    });
  }

  if (btnChaos) {
    btnChaos.addEventListener('click', () => {
      playClickSound();
      currentMode = 'chaos';
      btnChaos.className = 'px-4 py-1.5 rounded-xl text-xs font-mono bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-1.5';
      if (btnGrid) btnGrid.className = 'px-4 py-1.5 rounded-xl text-xs font-mono bg-surface-elevated hover:bg-surface-border text-slate-300 hover:text-white transition-all flex items-center gap-1.5';
      morphToLargeBubblesAndFloat();
    });
  }

  filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      playClickSound();
      const cat = chip.getAttribute('data-category');

      filterChips.forEach((c) => {
        c.className = 'skill-filter-chip px-3 py-1 rounded-lg text-[11px] font-mono transition-all bg-surface-elevated/60 text-slate-400 border border-surface-border hover:text-white';
      });
      chip.className = 'skill-filter-chip px-3 py-1 rounded-lg text-[11px] font-mono transition-all bg-cyan-500/20 text-cyan-300 border border-cyan-500/40';

      bodies.forEach((b) => {
        const pillCat = b.el.getAttribute('data-category');
        const match = cat === 'Todos' || pillCat === cat;

        if (match) {
          gsap.to(b.el, { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' });
        } else {
          gsap.to(b.el, { opacity: 0.2, scale: 0.85, duration: 0.3, ease: 'power2.out' });
        }
      });
    });
  });

  // Attach hover sound
  bodies.forEach((b) => {
    b.el.addEventListener('mouseenter', () => {
      playHoverSound();
    });
  });
}

export function initSkillsAnimation() {
  const arena = document.getElementById('tech-playground');
  const pills = document.querySelectorAll<HTMLElement>('.tech-draggable-pill');
  if (!arena || pills.length === 0) return;

  // Clean old bodies
  bodies.forEach((b) => b.draggable.kill());
  bodies = [];

  pills.forEach((pill) => {
    const textContainer = pill.querySelector<HTMLElement>('.tech-info-text')!;
    const iconBox = pill.querySelector<HTMLElement>('.tech-icon-box')!;
    
    const body: ParticleBody = {
      el: pill,
      iconBox,
      textContainer,
      draggable: null as unknown as Draggable,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      radius: 38, // Large 76px orb radius
      isDragging: false,
      lastX: 0,
      lastY: 0,
      lastTime: performance.now(),
    };

    body.draggable = Draggable.create(pill, {
      bounds: arena,
      edgeResistance: 0.85,
      type: 'x,y',
      cursor: 'grab',
      activeCursor: 'grabbing',
      onPress() {
        body.isDragging = true;
        body.vx = 0;
        body.vy = 0;
        body.lastX = this.x;
        body.lastY = this.y;
        body.lastTime = performance.now();

        gsap.to(pill, { scale: 1.15, zIndex: 100, duration: 0.15 });
        playClickSound();
      },
      onDrag() {
        const now = performance.now();
        const dt = (now - body.lastTime) || 16;
        body.vx = ((this.x - body.lastX) / dt) * 12;
        body.vy = ((this.y - body.lastY) / dt) * 12;
        body.lastX = this.x;
        body.lastY = this.y;
        body.lastTime = now;

        body.x = this.x;
        body.y = this.y;
      },
      onDragEnd() {
        body.isDragging = false;
        body.x = this.x;
        body.y = this.y;
        
        // Cap throw velocity
        const maxV = 6.0;
        body.vx = Math.max(-maxV, Math.min(maxV, body.vx));
        body.vy = Math.max(-maxV, Math.min(maxV, body.vy));

        gsap.to(pill, { scale: 1, zIndex: 15, duration: 0.2 });
        playSuccessSound();
      }
    })[0];

    bodies.push(body);
  });

  // Initial arrangement in organized grid mode
  currentMode = 'grid';
  arrangeGrid();
}

function arrangeGrid() {
  const arena = document.getElementById('tech-playground');
  if (!arena || bodies.length === 0) return;

  const arenaWidth = arena.clientWidth - 40;
  const isMobile = window.innerWidth < 640;
  const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;

  const cols = isMobile ? 1 : isTablet ? 2 : 3;
  const colWidth = arenaWidth / cols;
  const rowHeight = isMobile ? 70 : 80;

  bodies.forEach((b, idx) => {
    const col = idx % cols;
    const row = Math.floor(idx / cols);

    const targetX = 15 + col * colWidth;
    const targetY = 15 + row * rowHeight;

    b.x = targetX;
    b.y = targetY;
    b.vx = 0;
    b.vy = 0;

    // Reset to rectangular card format with text legend
    gsap.to(b.el, {
      width: isMobile ? colWidth - 10 : colWidth - 16,
      height: 'auto',
      borderRadius: '16px',
      padding: '12px 16px',
      justifyContent: 'flex-start',
      x: targetX,
      y: targetY,
      rotation: 0,
      opacity: 1,
      scale: 1,
      duration: 0.6,
      delay: idx * 0.015,
      ease: 'power3.out',
      onUpdate() {
        if (b.draggable) b.draggable.update();
      }
    });

    gsap.to(b.iconBox, {
      width: '44px',
      height: '44px',
      borderRadius: '12px',
      duration: 0.4,
      ease: 'power2.out',
    });

    gsap.to(b.textContainer, {
      opacity: 1,
      width: 'auto',
      display: 'flex',
      duration: 0.4,
      ease: 'power2.out',
    });
  });
}

function morphToLargeBubblesAndFloat() {
  const arena = document.getElementById('tech-playground');
  if (!arena || bodies.length === 0) return;

  const maxX = arena.clientWidth - 90;
  const maxY = arena.clientHeight - 90;

  bodies.forEach((b, idx) => {
    // Hide text info cleanly
    gsap.to(b.textContainer, {
      opacity: 0,
      width: 0,
      display: 'none',
      duration: 0.25,
      ease: 'power2.in',
    });

    const angle = (idx / bodies.length) * Math.PI * 2 + Math.random() * 0.5;
    const speed = 0.9 + Math.random() * 0.7;

    b.vx = Math.cos(angle) * speed;
    b.vy = Math.sin(angle) * speed;

    const randomX = Math.max(15, Math.random() * maxX);
    const randomY = Math.max(15, Math.random() * maxY);

    b.x = randomX;
    b.y = randomY;

    // Morph into large 76px x 76px circular bubble with centered huge logo
    gsap.to(b.el, {
      width: '76px',
      height: '76px',
      borderRadius: '9999px',
      padding: '0px',
      justifyContent: 'center',
      x: randomX,
      y: randomY,
      rotation: 0,
      duration: 0.7,
      delay: idx * 0.015,
      ease: 'back.out(1.4)',
      onComplete() {
        if (idx === bodies.length - 1) {
          startContinuousPhysics();
        }
      },
      onUpdate() {
        if (b.draggable) b.draggable.update();
      }
    });

    gsap.to(b.iconBox, {
      width: '64px',
      height: '64px',
      borderRadius: '9999px',
      duration: 0.5,
      ease: 'power2.out',
    });
  });
}

function startContinuousPhysics() {
  if (physicsActive) return;
  physicsActive = true;

  if (tickerFn) {
    gsap.ticker.remove(tickerFn);
  }

  tickerFn = () => {
    if (!physicsActive || currentMode !== 'chaos') return;
    stepPhysics();
  };

  gsap.ticker.add(tickerFn);
}

function stopContinuousPhysics() {
  physicsActive = false;
  if (tickerFn) {
    gsap.ticker.remove(tickerFn);
  }
}

function stepPhysics() {
  const arena = document.getElementById('tech-playground');
  if (!arena) return;

  const arenaWidth = arena.clientWidth;
  const arenaHeight = arena.clientHeight;
  const diameter = 76;
  const radius = 38;
  const elasticity = 0.96;

  const len = bodies.length;

  // 1. Move & Wall Bounces
  for (let i = 0; i < len; i++) {
    const b = bodies[i];
    if (b.isDragging) continue;

    b.x += b.vx;
    b.y += b.vy;

    // Air damping
    b.vx *= 0.999;
    b.vy *= 0.999;

    // Maintain minimal lively drift
    const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
    if (speed < 0.5) {
      b.vx += (Math.random() - 0.5) * 0.25;
      b.vy += (Math.random() - 0.5) * 0.25;
    }

    // Left wall
    if (b.x < 10) {
      b.x = 10;
      b.vx = Math.abs(b.vx) * elasticity;
    } 
    // Right wall
    else if (b.x > arenaWidth - diameter - 10) {
      b.x = arenaWidth - diameter - 10;
      b.vx = -Math.abs(b.vx) * elasticity;
    }

    // Top wall
    if (b.y < 10) {
      b.y = 10;
      b.vy = Math.abs(b.vy) * elasticity;
    } 
    // Bottom wall
    else if (b.y > arenaHeight - diameter - 10) {
      b.y = arenaHeight - diameter - 10;
      b.vy = -Math.abs(b.vy) * elasticity;
    }
  }

  // 2. High-precision 2D Circular Collision Resolution (Zero Overlap)
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const b1 = bodies[i];
      const b2 = bodies[j];

      // Centers
      const c1x = b1.x + radius;
      const c1y = b1.y + radius;
      const c2x = b2.x + radius;
      const c2y = b2.y + radius;

      const dx = c2x - c1x;
      const dy = c2y - c1y;
      const distSq = dx * dx + dy * dy;
      const minDist = diameter + 4; // 80px minimum distance between centers

      if (distSq < minDist * minDist && distSq > 0.0001) {
        const dist = Math.sqrt(distSq);
        const nx = dx / dist;
        const ny = dy / dist;

        // Hard Positional Separation: resolve overlap immediately
        const overlap = (minDist - dist) * 0.5;
        if (!b1.isDragging) {
          b1.x -= nx * overlap;
          b1.y -= ny * overlap;
        }
        if (!b2.isDragging) {
          b2.x += nx * overlap;
          b2.y += ny * overlap;
        }

        // Relative velocity along collision normal
        const kx = b1.vx - b2.vx;
        const ky = b1.vy - b2.vy;
        const p = (nx * kx + ny * ky);

        // Only bounce if bodies are moving towards each other
        if (p > 0) {
          const impulse = p * elasticity;
          if (!b1.isDragging) {
            b1.vx -= nx * impulse;
            b1.vy -= ny * impulse;
          }
          if (!b2.isDragging) {
            b2.vx += nx * impulse;
            b2.vy += ny * impulse;
          }
        }
      }
    }
  }

  // 3. Render Positions
  for (let i = 0; i < len; i++) {
    const b = bodies[i];
    if (!b.isDragging) {
      gsap.set(b.el, { x: b.x, y: b.y });
      if (b.draggable) b.draggable.update();
    }
  }
}
