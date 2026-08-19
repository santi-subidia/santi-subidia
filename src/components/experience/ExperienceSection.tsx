"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      <div className="mb-12 border-b border-surface-border pb-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Career Trajectory &amp; Impact
        </h2>
        <p className="text-zinc-400 mt-2 font-sans max-w-xl text-sm sm:text-base">
          Proven history of architecting production web platforms, establishing component systems, and leading high-velocity engineering initiatives.
        </p>
      </div>

      {/* Timeline List */}
      <div className="relative border-l border-surface-border/80 ml-4 md:ml-6 space-y-12">
        {PORTFOLIO_DATA.experience.map((exp, idx) => (
          <div key={idx} className="relative pl-8 md:pl-10 group">
            {/* Timeline Node Icon */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-xl bg-surface-card border border-surface-border group-hover:border-brand-indigo flex items-center justify-center text-zinc-400 group-hover:text-brand-cyan-light transition-all shadow-md">
              <Briefcase className="w-3.5 h-3.5" />
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-surface-border space-y-4">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-surface-border/50 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan-light transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-brand-indigo-light mt-0.5">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span className="text-zinc-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-surface-elevated px-3 py-1.5 rounded-lg border border-surface-border shrink-0 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                  Quantifiable Achievements:
                </span>
                <ul className="space-y-1.5 text-xs text-zinc-300 font-sans">
                  {exp.achievements.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-4 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono text-zinc-400 bg-surface px-2.5 py-0.5 rounded border border-surface-border/60"
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
