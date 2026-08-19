"use client";

import React, { useState } from "react";
import { 
  Code2, 
  Server, 
  Cpu, 
  Check, 
  Terminal, 
  Zap, 
  ShieldCheck, 
  Layers 
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const SkillsTelemetry: React.FC = () => {
  const [onlyHighlighted, setOnlyHighlighted] = useState(false);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layers className="w-4 h-4 text-brand-cyan" />;
      case "Server":
        return <Server className="w-4 h-4 text-brand-indigo-light" />;
      case "Cpu":
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      default:
        return <Code2 className="w-4 h-4 text-brand-cyan" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-surface-border pb-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical Stack &amp; Telemetry
          </h2>
          <p className="text-zinc-400 mt-2 font-sans max-w-xl text-sm sm:text-base">
            Quantified proficiency matrix across modern full-stack development, distributed backend architectures, and developer tooling.
          </p>
        </div>

        <button
          onClick={() => setOnlyHighlighted((prev) => !prev)}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all border ${
            onlyHighlighted
              ? "bg-brand-indigo text-white border-brand-indigo shadow-glow-indigo"
              : "bg-surface-card text-zinc-400 hover:text-white border-surface-border"
          }`}
        >
          <Zap className="w-3.5 h-3.5" />
          <span>{onlyHighlighted ? "Showing Core Highlights" : "Filter Core Highlights"}</span>
        </button>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PORTFOLIO_DATA.skills.map((category, idx) => {
          const filteredSkills = onlyHighlighted
            ? category.skills.filter((s) => s.highlight)
            : category.skills;

          return (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-surface-border flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-6 border-b border-surface-border/60 pb-4">
                  <div className="p-2 rounded-xl bg-surface-elevated border border-surface-border">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <h3 className="font-bold text-white text-base">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {filteredSkills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5 group">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-zinc-200 group-hover:text-brand-cyan-light transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-zinc-500 group-hover:text-zinc-300">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Level Bar */}
                      <div className="w-full h-1.5 bg-surface-elevated rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-brand-indigo to-brand-cyan rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag note */}
              <div className="pt-6 mt-6 border-t border-surface-border/40 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>Verified in production</span>
                <span className="text-emerald-400">● 100% active</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
