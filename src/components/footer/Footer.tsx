"use client";

import React from "react";
import { ArrowUp, Heart, Code2, Sparkles } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-surface-border bg-background/80 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white text-sm">
              {PORTFOLIO_DATA.developer.name}
            </span>
            <span className="text-xs font-mono text-zinc-500">•</span>
            <span className="text-xs font-mono text-brand-cyan-light">
              Interactive Creative Studio
            </span>
          </div>
          <p className="text-xs font-mono text-zinc-500">
            © {new Date().getFullYear()} All rights reserved. Architected with Next.js, React 19 &amp; Tailwind.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline-block">
            Designed with Impeccable Craft
          </span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-card hover:bg-surface-elevated border border-surface-border text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
