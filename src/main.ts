import './styles/index.css';
import { initSmoothScroll } from './lib/smoothScroll';
import { initCustomCursor } from './lib/cursor';
import { runPreloader } from './components/loader';
import { renderNavbar, animateNavbar } from './components/navbar';
import { renderHero, animateHero } from './components/hero';
import { renderProjects, initProjectsAnimation } from './components/projectsPinned';
import { renderSkills, initSkillsAnimation } from './components/skillsLab';
import { renderExperience, initExperienceAnimation } from './components/experienceTimeline';
import { renderContact, initContactAnimation } from './components/contactSection';
import { renderFooter } from './components/footer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function initApp() {
  // 1. Initialize Smooth Scroll Engine
  initSmoothScroll();

  // 2. Render all DOM structures
  renderNavbar();
  renderHero();
  renderProjects();
  renderSkills();
  renderExperience();
  renderContact();
  renderFooter();

  // 3. Initialize custom magnetic cursor
  initCustomCursor();

  // 4. Initialize scroll triggers immediately so dimensions and pin targets are calculated
  initProjectsAnimation();
  initSkillsAnimation();
  initExperienceAnimation();
  initContactAnimation();

  // 5. Run preloader sequence with smooth synchronized exit
  runPreloader({
    onExitStart: () => {
      animateNavbar();
      animateHero();
    },
    onComplete: () => {
      ScrollTrigger.refresh();
    },
  });

  // Handle window resize for dynamic pinned scroll recalculation
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });
}

// Boot application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
