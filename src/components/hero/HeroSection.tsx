"use client";

import React, { useState, useEffect } from "react";
import { 
  ArrowDown, 
  Terminal, 
  Sparkles, 
  Layers, 
  Mail, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  Cpu, 
  Play,
  CheckCircle2
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { copyToClipboard } from "@/utils/clipboard";

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [timeString, setTimeString] = useState("");
  const [codeOutput, setCodeOutput] = useState<string | null>(null);
  const [isRunningCode, setIsRunningCode] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Argentina/Buenos_Aires",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTimeString(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    await copyToClipboard(PORTFOLIO_DATA.developer.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunCode = () => {
    setIsRunningCode(true);
    setCodeOutput(null);
    setTimeout(() => {
      setCodeOutput("✓ Architecture compiled: 0 errors, Clean Architecture + MVVM verified, 10+ projects active.");
      setIsRunningCode(false);
    }, 600);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Telemetry Status Bar */}
      <div className="flex flex-wrap items-center gap-3 mb-8 text-xs font-mono">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-card border border-surface-border text-zinc-700 dark:text-zinc-300 shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-brand-cyan" />
          <span>Argentina</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-card border border-surface-border text-zinc-700 dark:text-zinc-300 shadow-sm">
          <Clock className="w-3.5 h-3.5 text-brand-indigo dark:text-brand-indigo-light" />
          <span>{timeString || "12:00:00"} (UTC-3)</span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{PORTFOLIO_DATA.developer.status.text}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading & Value Proposition */}
        <div className="lg:col-span-7 space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
            Desarrollo de Software, Arquitectura Backend &amp; Mobile.
          </h1>

          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 font-sans leading-relaxed max-w-2xl">
            Hola, soy <span className="text-foreground font-semibold">{PORTFOLIO_DATA.developer.name}</span>. Construyo sistemas robustos en Backend (.NET, Node.js), aplicaciones móviles nativas (Android) y soluciones web modernas con enfoque en Clean Architecture y código escalable.
          </p>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-brand-indigo hover:bg-brand-indigo-light text-white font-mono text-sm font-medium transition-all shadow-glow-indigo hover:translate-y-[-1px]"
            >
              <Layers className="w-4 h-4" />
              <span>Explorar Proyectos</span>
            </a>

            <a
              href="#skills"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-surface-card hover:bg-surface-elevated border border-surface-border hover:border-brand-cyan/50 text-zinc-700 dark:text-zinc-200 hover:text-foreground font-mono text-sm transition-all shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span>Tecnologías</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-surface-card hover:bg-surface-elevated border border-surface-border text-zinc-700 dark:text-zinc-300 hover:text-foreground font-mono text-xs transition-all shadow-sm"
              aria-label="Copiar correo"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium">Email Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                  <span>{PORTFOLIO_DATA.developer.socials.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-surface-border/60">
            {PORTFOLIO_DATA.developer.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl font-bold font-mono text-foreground">
                  {stat.value}
                </span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 font-sans mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Live Executable Code Specimen */}
        <div className="lg:col-span-5">
          <div className="glass-card rounded-2xl p-5 border border-surface-border shadow-2xl relative overflow-hidden">
            {/* Window Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-surface-border/60">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                <span className="ml-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  developer.config.ts
                </span>
              </div>

              <button
                onClick={handleRunCode}
                disabled={isRunningCode}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-indigo/10 dark:bg-brand-indigo/20 hover:bg-brand-indigo/20 dark:hover:bg-brand-indigo/30 border border-brand-indigo/30 text-brand-indigo dark:text-brand-cyan-light text-xs font-mono transition-colors disabled:opacity-50"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{isRunningCode ? "Running..." : "Run"}</span>
              </button>
            </div>

            {/* Code Body */}
            <div className="font-mono text-xs leading-relaxed space-y-1 text-zinc-700 dark:text-zinc-300 select-all">
              <p className="text-zinc-400 dark:text-zinc-500">// Santiago Subidia — Profile Config</p>
              <p>
                <span className="text-brand-indigo dark:text-brand-indigo-light">export const</span>{" "}
                <span className="text-brand-indigo dark:text-brand-cyan-light">developer</span> = &#123;
              </p>
              <p className="pl-4">
                <span className="text-zinc-500 dark:text-zinc-400">education:</span>{" "}
                <span className="text-emerald-600 dark:text-emerald-400">&quot;Tecnicatura en Desarrollo de Software (ULP)&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-zinc-500 dark:text-zinc-400">stack:</span> [
                <span className="text-emerald-600 dark:text-emerald-400">&quot;C# / .NET&quot;</span>,{" "}
                <span className="text-emerald-600 dark:text-emerald-400">&quot;Android (Java)&quot;</span>,{" "}
                <span className="text-emerald-600 dark:text-emerald-400">&quot;Node.js&quot;</span>],
              </p>
              <p className="pl-4">
                <span className="text-zinc-500 dark:text-zinc-400">architecture:</span>{" "}
                <span className="text-emerald-600 dark:text-emerald-400">&quot;Clean Architecture &amp; MVVM&quot;</span>,
              </p>
              <p className="pl-4">
                <span className="text-zinc-500 dark:text-zinc-400">databases:</span> [
                <span className="text-emerald-600 dark:text-emerald-400">&quot;PostgreSQL&quot;</span>,{" "}
                <span className="text-emerald-600 dark:text-emerald-400">&quot;MySQL&quot;</span>],
              </p>
              <p className="pl-4">
                <span className="text-zinc-500 dark:text-zinc-400">status:</span>{" "}
                <span className="text-amber-600 dark:text-amber-400">&quot;Materias 100% Aprobadas - Práctica Laboral&quot;</span>
              </p>
              <p>&#125;;</p>
            </div>

            {/* Code Execution Output Console */}
            {codeOutput && (
              <div className="mt-4 p-3 rounded-lg bg-surface-elevated/90 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-[11px] flex items-start gap-2 animate-in fade-in duration-200">
                <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-500" />
                <span>{codeOutput}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <div className="flex justify-center mt-12">
        <a
          href="#projects"
          className="p-2 rounded-full text-zinc-400 dark:text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-200 transition-transform duration-300 hover:translate-y-1"
          aria-label="Scroll to projects"
        >
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};
