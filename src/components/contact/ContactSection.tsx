"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  Send,
  MessageSquare,
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { copyToClipboard } from "@/utils/clipboard";

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(PORTFOLIO_DATA.developer.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      {/* Section Header */}
      <div className="mb-12 border-b border-surface-border pb-8 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-indigo dark:text-brand-cyan-light mb-2 px-3 py-1 rounded-full bg-brand-indigo/10 dark:bg-brand-cyan/10 border border-brand-indigo/20 dark:border-brand-cyan/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Contacto Directo</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mt-2">
          Hablemos de Software &amp; Proyectos
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mt-3 font-sans text-sm sm:text-base leading-relaxed">
          ¿Tienes una oportunidad laboral, propuesta técnica o proyecto de desarrollo? Puedes contactarme directamente a través de cualquiera de mis canales oficiales.
        </p>
      </div>

      {/* 3 Direct Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* 1. Email Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-7 border border-surface-border flex flex-col justify-between space-y-6 group hover:border-brand-indigo/60">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-brand-indigo/20 text-brand-indigo dark:text-brand-cyan-light border border-brand-indigo/30 group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-surface-border text-xs font-mono text-zinc-700 dark:text-zinc-300 transition-colors shadow-sm"
                aria-label="Copiar correo electrónico"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium">¡Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>

            <div>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block">
                Correo Electrónico
              </span>
              <a
                href={`mailto:${PORTFOLIO_DATA.developer.socials.email}`}
                className="text-base font-bold text-foreground group-hover:text-brand-indigo dark:group-hover:text-brand-cyan-light transition-colors mt-1 block font-mono break-all"
              >
                {PORTFOLIO_DATA.developer.socials.email}
              </a>
            </div>

            <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
              Canal principal para consultas profesionales, propuestas laborales y proyectos.
            </p>
          </div>

          <a
            href={`mailto:${PORTFOLIO_DATA.developer.socials.email}`}
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-brand-indigo hover:bg-brand-indigo-light text-white text-xs font-mono transition-all shadow-glow-indigo"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Enviar Correo</span>
          </a>
        </div>

        {/* 2. GitHub Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-7 border border-surface-border flex flex-col justify-between space-y-6 group hover:border-brand-indigo/60">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-surface-elevated text-zinc-700 dark:text-zinc-200 border border-surface-border group-hover:text-foreground group-hover:scale-105 transition-transform">
                <GithubIcon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-surface-elevated text-emerald-600 dark:text-emerald-400 border border-surface-border font-medium">
                Código Activo
              </span>
            </div>

            <div>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block">
                GitHub
              </span>
              <a
                href={PORTFOLIO_DATA.developer.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold text-foreground group-hover:text-brand-indigo dark:group-hover:text-brand-cyan-light transition-colors mt-1 block font-mono"
              >
                santi-subidia
              </a>
            </div>

            <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
              Explora mis repositorios, commits, arquitecturas en C#, .NET, Android y Node.js.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.developer.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-surface-border hover:border-brand-cyan/40 text-zinc-700 dark:text-zinc-200 hover:text-foreground text-xs font-mono transition-all"
          >
            <span>Ver Perfil en GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 group-hover:text-foreground" />
          </a>
        </div>

        {/* 3. LinkedIn Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-7 border border-surface-border flex flex-col justify-between space-y-6 group hover:border-brand-indigo/60">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-[#0077B5]/15 text-[#0077B5] border border-[#0077B5]/30 group-hover:scale-105 transition-transform">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-surface-elevated text-brand-indigo dark:text-brand-cyan-light border border-surface-border font-medium">
                Networking
              </span>
            </div>

            <div>
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block">
                LinkedIn
              </span>
              <a
                href={PORTFOLIO_DATA.developer.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold text-foreground group-hover:text-brand-indigo dark:group-hover:text-brand-cyan-light transition-colors mt-1 block font-sans"
              >
                {PORTFOLIO_DATA.developer.name}
              </a>
            </div>

            <p className="text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
              Conectemos profesionalmente y conversemos sobre oportunidades y proyectos.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.developer.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-surface-elevated hover:bg-surface-hover border border-surface-border hover:border-brand-cyan/40 text-zinc-700 dark:text-zinc-200 hover:text-foreground text-xs font-mono transition-all"
          >
            <span>Conectar en LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 group-hover:text-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

