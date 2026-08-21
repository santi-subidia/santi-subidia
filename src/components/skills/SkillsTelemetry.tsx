"use client";

import React, { useState } from "react";
import { 
  Sparkles,
  Layers,
  Server,
  Smartphone,
  Layout,
  Database
} from "lucide-react";
import { 
  CsharpIcon, 
  DotNetIcon, 
  AndroidIcon, 
  JavaIcon, 
  ReactIcon, 
  NextjsIcon, 
  NodejsIcon, 
  ExpressIcon,
  TypescriptIcon, 
  JavascriptIcon, 
  Html5Icon,
  CssIcon,
  TailwindIcon, 
  PostgresqlIcon,
  MysqlIcon, 
  SqliteIcon,
  DockerIcon, 
  GitIcon, 
  GithubIcon,
  GithubActionsIcon
} from "@/components/icons/BrandIcons";
import { PORTFOLIO_DATA, TechItem } from "@/data/portfolioData";

export const SkillsTelemetry: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Todas");

  const categories = [
    { label: "Todas", icon: Layers },
    { label: "Backend & APIs", icon: Server },
    { label: "Mobile Android", icon: Smartphone },
    { label: "Frontend & Web", icon: Layout },
    { label: "Bases de Datos & Herramientas", icon: Database },
  ];

  const filteredTechnologies = activeCategory === "Todas"
    ? PORTFOLIO_DATA.technologies
    : PORTFOLIO_DATA.technologies.filter((tech) => tech.category === activeCategory);

  const renderTechIcon = (key: TechItem["iconKey"]) => {
    switch (key) {
      case "csharp":
        return <CsharpIcon className="w-8 h-8" />;
      case "dotnet":
        return <DotNetIcon className="w-8 h-8" />;
      case "android":
        return <AndroidIcon className="w-8 h-8" />;
      case "java":
        return <JavaIcon className="w-8 h-8" />;
      case "react":
        return <ReactIcon className="w-8 h-8" />;
      case "nextjs":
        return <NextjsIcon className="w-8 h-8" />;
      case "nodejs":
        return <NodejsIcon className="w-8 h-8" />;
      case "express":
        return <ExpressIcon className="w-8 h-8" />;
      case "typescript":
        return <TypescriptIcon className="w-8 h-8" />;
      case "javascript":
        return <JavascriptIcon className="w-8 h-8" />;
      case "html5":
        return <Html5Icon className="w-8 h-8" />;
      case "css":
        return <CssIcon className="w-8 h-8" />;
      case "tailwind":
        return <TailwindIcon className="w-8 h-8" />;
      case "postgresql":
        return <PostgresqlIcon className="w-8 h-8" />;
      case "mysql":
        return <MysqlIcon className="w-8 h-8" />;
      case "sqlite":
        return <SqliteIcon className="w-8 h-8" />;
      case "docker":
        return <DockerIcon className="w-8 h-8" />;
      case "git":
        return <GitIcon className="w-8 h-8" />;
      case "github":
        return <GithubIcon className="w-8 h-8" />;
      case "githubactions":
        return <GithubActionsIcon className="w-8 h-8" />;
      default:
        return <Sparkles className="w-8 h-8 text-brand-cyan" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-surface-border pb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-brand-indigo dark:text-brand-cyan-light mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Stack Técnico &amp; Herramientas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Tecnologías Aprendidas
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2 font-sans max-w-xl text-sm sm:text-base">
            Galería visual de los lenguajes, frameworks, librerías, bases de datos y entornos con los que construyo soluciones de software.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 glass-panel p-1.5 rounded-2xl border border-surface-border">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveCategory(cat.label)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  isSelected
                    ? "bg-brand-indigo text-white shadow-glow-indigo font-medium"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-foreground hover:bg-surface-elevated"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Technology Logo Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
        {filteredTechnologies.map((tech, idx) => (
          <div
            key={idx}
            className="glass-card rounded-2xl p-5 border border-surface-border flex flex-col items-center justify-center text-center group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand-indigo/60 hover:shadow-glow-indigo"
          >
            {/* Background Hover Accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Logo Wrapper */}
            <div className="w-14 h-14 rounded-2xl bg-surface-elevated border border-surface-border/80 flex items-center justify-center mb-3 group-hover:border-brand-indigo/50 group-hover:scale-110 transition-transform duration-300 shadow-inner">
              {renderTechIcon(tech.iconKey)}
            </div>

            {/* Tech Name */}
            <h3 className="font-bold text-foreground text-sm group-hover:text-brand-indigo dark:group-hover:text-brand-cyan-light transition-colors">
              {tech.name}
            </h3>

            {/* Tech Role Tag */}
            <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-1">
              {tech.role}
            </span>

            {/* Category Subtitle */}
            <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mt-2 px-2 py-0.5 rounded-full bg-surface-elevated border border-surface-border/50">
              {tech.category}
            </span>
          </div>
        ))}
      </div>

      {/* Summary Banner */}
      <div className="mt-12 glass-panel rounded-2xl p-5 border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-zinc-700 dark:text-zinc-300">
            {PORTFOLIO_DATA.technologies.length} tecnologías aplicadas en proyectos reales y formación académica
          </span>
        </div>
        <span className="text-brand-indigo dark:text-brand-cyan-light">
          En constante aprendizaje &amp; evolución técnica
        </span>
      </div>
    </section>
  );
};

