"use client";

import React from "react";
import { GraduationCap, Calendar, MapPin, CheckCircle2, ExternalLink, Award } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      <div className="mb-12 border-b border-surface-border pb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-brand-indigo dark:text-brand-cyan-light mb-2">
          <GraduationCap className="w-4 h-4" />
          <span>Educación Superior</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Formación Universitaria
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mt-2 font-sans max-w-xl text-sm sm:text-base">
          Estudios superiores en la Universidad de La Punta (ULP), con enfoque práctico en desarrollo de software, algoritmos, bases de datos y arquitectura de sistemas.
        </p>
      </div>

      {/* University Formation Card */}
      <div className="space-y-6">
        {PORTFOLIO_DATA.experience.map((exp, idx) => (
          <div
            key={idx}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-surface-border space-y-6 hover:border-brand-indigo/60 transition-all"
          >
            {/* Header Info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-border/50 pb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-brand-indigo/20 text-brand-indigo dark:text-brand-cyan-light border border-brand-indigo/30 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    {exp.badge && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-indigo/15 border border-brand-indigo/30 text-brand-indigo dark:text-brand-cyan-light font-medium">
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-brand-indigo dark:text-brand-indigo-light mt-1.5 flex-wrap">
                    {exp.linkUrl ? (
                      <a
                        href={exp.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline flex items-center gap-1 text-brand-indigo dark:text-brand-cyan-light"
                      >
                        <span className="font-semibold">{exp.company}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="font-semibold">{exp.company}</span>
                    )}
                    <span>•</span>
                    <span className="text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-surface-elevated px-3.5 py-2 rounded-xl border border-surface-border shrink-0 self-start sm:self-auto shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-600 dark:text-zinc-300 font-sans leading-relaxed">
              {exp.description}
            </p>

            {/* Academic Highlights */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-brand-indigo dark:text-brand-cyan-light" />
                Logros &amp; Aspectos Destacados:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {exp.achievements.map((item, aIdx) => (
                  <div
                    key={aIdx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-surface-elevated/60 border border-surface-border/50 text-xs text-zinc-700 dark:text-zinc-300 font-sans"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Subjects / Tech */}
            <div className="pt-4 border-t border-surface-border/40">
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider block mb-2">
                Ejes Temáticos &amp; Competencias:
              </span>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-surface-elevated px-3 py-1 rounded-lg border border-surface-border/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

