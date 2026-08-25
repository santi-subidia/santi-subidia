import gsap from 'gsap';
import { playSuccessSound } from '../lib/sound';

export interface PreloaderOptions {
  onExitStart?: () => void;
  onComplete?: () => void;
}

export function runPreloader(options?: PreloaderOptions | (() => void)) {
  const onExitStart = typeof options === 'function' ? undefined : options?.onExitStart;
  const onComplete = typeof options === 'function' ? options : options?.onComplete;

  const preloader = document.getElementById('preloader');
  const app = document.getElementById('app');
  const loaderProgress = document.getElementById('loader-progress');
  const loaderCounter = document.getElementById('loader-counter');

  if (!preloader || !app) {
    if (onExitStart) onExitStart();
    if (onComplete) onComplete();
    return;
  }

  // Ensure main container is visible without jump
  gsap.set(app, { opacity: 1 });

  const tl = gsap.timeline({
    onComplete: () => {
      preloader.style.display = 'none';
      if (onComplete) onComplete();
    },
  });

  // Entrance text reveal
  tl.to('.loader-title', {
    y: '0%',
    duration: 0.7,
    ease: 'power3.out',
  })
  .to('.loader-subtitle', {
    y: '0%',
    duration: 0.5,
    ease: 'power3.out',
  }, '-=0.3');

  // Simulated progress loading counter
  const progressObj = { value: 0 };
  tl.to(progressObj, {
    value: 100,
    duration: 1.1,
    ease: 'power2.inOut',
    onUpdate: () => {
      const val = Math.round(progressObj.value);
      if (loaderCounter) loaderCounter.textContent = `${val}%`;
      if (loaderProgress) loaderProgress.style.width = `${val}%`;
    },
  });

  // Curtain exit
  tl.to(preloader, {
    yPercent: -100,
    duration: 0.85,
    ease: 'expo.inOut',
    onStart: () => {
      playSuccessSound();
      if (onExitStart) {
        onExitStart();
      }
    },
  });
}
