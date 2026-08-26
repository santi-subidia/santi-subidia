import gsap from 'gsap';
import { playHoverSound } from './sound';

export function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  if (!cursor || window.innerWidth < 768 || !window.matchMedia('(pointer: fine)').matches) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth render loop with GSAP quickSetter
  const setX = gsap.quickSetter(cursor, 'x', 'px');
  const setY = gsap.quickSetter(cursor, 'y', 'px');
  const setScale = gsap.quickSetter(cursor, 'scale');

  gsap.ticker.add(() => {
    const dt = 1.0 - Math.pow(1.0 - 0.2, gsap.ticker.deltaRatio());
    cursorX += (mouseX - cursorX) * dt;
    cursorY += (mouseY - cursorY) * dt;
    setX(cursorX);
    setY(cursorY);
  });

  // Magnetic and interactive elements listener
  const interactiveElements = document.querySelectorAll('a, button, [data-magnetic], .glass-card');
  
  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      setScale(1.8);
      cursor.classList.add('border-cyan-400', 'bg-cyan-500/10');
      cursor.classList.remove('border-primary/60');
      playHoverSound();
    });

    el.addEventListener('mouseleave', () => {
      setScale(1);
      cursor.classList.remove('border-cyan-400', 'bg-cyan-500/10');
      cursor.classList.add('border-primary/60');
      
      // Reset magnetic transform if applied
      if (el.hasAttribute('data-magnetic')) {
        gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' });
      }
    });

    if (el.hasAttribute('data-magnetic')) {
      el.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = (el as HTMLElement).getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (mouseEvent.clientX - centerX) * 0.25;
        const deltaY = (mouseEvent.clientY - centerY) * 0.25;

        gsap.to(el, {
          x: deltaX,
          y: deltaY,
          duration: 0.2,
          ease: 'power2.out',
        });
      });
    }
  });
}
