"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "@/components/theme/ThemeProvider";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  colorIndex: number;
}

export const InteractiveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { resolvedTheme } = useTheme();
  const themeRef = useRef(resolvedTheme);

  useEffect(() => {
    themeRef.current = resolvedTheme;
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 14000), 75);
    const connectionDistance = 140;
    const mouseRadius = 180;

    const mouse = {
      x: -1000,
      y: -1000,
      isMoving: false,
    };

    const darkColors = ["rgba(99, 102, 241, 0.75)", "rgba(6, 182, 212, 0.75)", "rgba(129, 140, 248, 0.6)"];
    const lightColors = ["rgba(99, 102, 241, 0.55)", "rgba(6, 182, 212, 0.55)", "rgba(79, 70, 229, 0.45)"];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 1.2,
        baseX: x,
        baseY: y,
        density: Math.random() * 30 + 1,
        colorIndex: Math.floor(Math.random() * 3),
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isMoving = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.isMoving = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        mouse.isMoving = true;
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleMouseLeave);

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const isDark = themeRef.current === "dark";
      const activeColors = isDark ? darkColors : lightColors;

      // Draw subtle background grid vignette
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 3,
        50,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );
      if (isDark) {
        gradient.addColorStop(0, "rgba(99, 102, 241, 0.04)");
        gradient.addColorStop(0.5, "rgba(6, 182, 212, 0.02)");
        gradient.addColorStop(1, "rgba(11, 13, 19, 0)");
      } else {
        gradient.addColorStop(0, "rgba(99, 102, 241, 0.03)");
        gradient.addColorStop(0.5, "rgba(6, 182, 212, 0.015)");
        gradient.addColorStop(1, "rgba(248, 250, 252, 0)");
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particles naturally
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off canvas boundaries smoothly
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Interactive mouse physics
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = mouseRadius;
          const force = (maxDistance - distance) / maxDistance;
          const directionX = forceDirectionX * force * p.density * 0.8;
          const directionY = forceDirectionY * force * p.density * 0.8;

          p.x -= directionX;
          p.y -= directionY;
        }

        const particleColor = activeColors[p.colorIndex] || activeColors[0];

        // Render particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        if (isDark) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = particleColor;
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw connections between neighboring particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distBetween = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (distBetween < connectionDistance) {
            const alphaBase = 1 - distBetween / connectionDistance;
            const alpha = isDark ? alphaBase * 0.22 : alphaBase * 0.16;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
