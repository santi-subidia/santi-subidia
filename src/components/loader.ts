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
  const loaderStatus = document.getElementById('loader-status');

  if (!preloader || !app) {
    if (onExitStart) onExitStart();
    if (onComplete) onComplete();
    return;
  }

  // Ensure main container is ready without visual jump
  gsap.set(app, { opacity: 1 });

  // Floating idle loop for the avatar while loading
  const floatTween = gsap.to('.loader-img', {
    y: -6,
    duration: 1.8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });

  const tl = gsap.timeline({
    onComplete: () => {
      floatTween.kill();
      preloader.style.display = 'none';
      if (onComplete) onComplete();
    },
  });

  // 1. Entrance of ambient glow and avatar illustration
  tl.to('.loader-glow', {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
  })
  .to('.loader-avatar-wrap', {
    opacity: 1,
    scale: 1,
    duration: 0.7,
    ease: 'back.out(1.4)',
  }, '-=0.6')

  // 2. Entrance text reveal
  .to('.loader-title', {
    y: '0%',
    duration: 0.6,
    ease: 'power3.out',
  }, '-=0.4')
  .to('.loader-subtitle', {
    y: '0%',
    duration: 0.5,
    ease: 'power3.out',
  }, '-=0.3');

  // 3. Simulated progress loading counter with dynamic status telemetry
  const progressObj = { value: 0 };
  tl.to(progressObj, {
    value: 100,
    duration: 1.2,
    ease: 'power2.inOut',
    onUpdate: () => {
      const val = Math.round(progressObj.value);
      if (loaderCounter) loaderCounter.textContent = `${val}%`;
      if (loaderProgress) loaderProgress.style.width = `${val}%`;

      if (loaderStatus) {
        if (val < 35) {
          loaderStatus.textContent = 'Iniciando entorno...';
        } else if (val < 75) {
          loaderStatus.textContent = 'Cargando módulos y estilos...';
        } else if (val < 100) {
          loaderStatus.textContent = 'Sincronizando telemetría...';
        } else {
          loaderStatus.textContent = 'Sistema listo ✨';
          loaderStatus.classList.add('text-emerald-400');
        }
      }
    },
  });

  // 4. Brief hold at 100% before cinematic curtain lift
  tl.to({}, { duration: 0.2 });

  // 5. Curtain exit transition
  tl.to('.loader-avatar-wrap', {
    scale: 0.95,
    opacity: 0,
    duration: 0.4,
    ease: 'power2.in',
  })
  .to(preloader, {
    yPercent: -100,
    duration: 0.8,
    ease: 'expo.inOut',
    onStart: () => {
      playSuccessSound();
      if (onExitStart) {
        onExitStart();
      }
    },
  }, '-=0.2');
}
