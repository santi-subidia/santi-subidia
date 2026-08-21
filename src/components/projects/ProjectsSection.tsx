"use client";

import React, { useState } from "react";
import { 
  ExternalLink, 
  Terminal, 
  Layers, 
  Cpu, 
  Sparkles, 
  CheckCircle2,
  ChevronRight,
  Code2,
  Maximize2,
  X
} from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Full-Stack", "Backend & APIs", "Mobile Android", "Sistemas & Desktop"];

  const filteredProjects = selectedCategory === "All"
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-surface-border pb-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Featured Engineering Projects
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2 font-sans max-w-xl text-sm sm:text-base">
            Selected systems, reactive full-stack web applications, and developer tools built with scalable architectures and obsessive craft.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 glass-panel p-1.5 rounded-2xl border border-surface-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? "bg-brand-indigo text-white shadow-glow-indigo font-medium"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-foreground hover:bg-surface-elevated"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top metadata */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-wider text-brand-indigo dark:text-brand-cyan-light bg-brand-indigo/10 dark:bg-brand-cyan/10 border border-brand-indigo/20 dark:border-brand-cyan/20 px-2.5 py-1 rounded-md">
                  {project.category}
                </span>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-surface-elevated text-zinc-600 dark:text-zinc-400 hover:text-foreground hover:bg-surface-hover border border-surface-border transition-colors"
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-surface-elevated text-zinc-600 dark:text-zinc-400 hover:text-foreground hover:bg-surface-hover border border-surface-border transition-colors"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-brand-indigo dark:group-hover:text-brand-cyan-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                  {project.tagline}
                </p>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                {project.description}
              </p>

              {/* Architecture Highlights */}
              <div className="space-y-1.5 pt-2">
                <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Key Architecture:
                </span>
                <ul className="space-y-1 text-xs text-zinc-700 dark:text-zinc-300 font-sans">
                  {project.architecture.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-indigo dark:text-brand-indigo-light shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.metrics.map((metric, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono bg-surface-elevated text-emerald-600 dark:text-emerald-400 px-2.5 py-1 rounded-md border border-surface-border"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Footer & Tech Stack */}
            <div className="pt-6 mt-6 border-t border-surface-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 bg-surface-elevated px-2 py-0.5 rounded border border-surface-border/60"
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
