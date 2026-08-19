"use client";

import React, { useState, useEffect } from "react";
import { 
  Command, 
  Menu, 
  X, 
  Terminal, 
  Layers, 
  Sparkles, 
  Code, 
  Briefcase, 
  Mail,
  ExternalLink
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { CommandPalette } from "./CommandPalette";

export const HeaderNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const navLinks = [
    { label: "Projects", href: "#projects", icon: Layers },
    { label: "Lab", href: "#lab", icon: Sparkles },
    { label: "Telemetry", href: "#skills", icon: Code },
    { label: "Experience", href: "#experience", icon: Briefcase },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-xl border-b border-surface-border shadow-lg shadow-black/20"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Identity Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Santi Subidia Home"
          >
            <div className="w-9 h-9 rounded-xl bg-surface-card border border-surface-border flex items-center justify-center font-mono font-bold text-sm text-brand-cyan-light group-hover:border-brand-indigo transition-all shadow-inner group-hover:shadow-glow-indigo">
              SS
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-tight text-sm text-white group-hover:text-brand-cyan-light transition-colors">
                {PORTFOLIO_DATA.developer.name}
              </span>
              <span className="text-[11px] font-mono text-zinc-400">
                Full-Stack &amp; Creative
              </span>
            </div>
          </a>

          {/* Desktop Navigation links */}
          <nav className="hidden md:flex items-center gap-1 glass-panel px-3 py-1.5 rounded-full border border-surface-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-300 hover:text-white hover:bg-surface-elevated transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Hub (Status, Cmd+K trigger, Socials) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Availability Badge */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card/90 border border-surface-border text-xs font-mono text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px]">Available</span>
            </div>

            {/* Command Palette Trigger */}
            <button
              onClick={() => setCommandPaletteOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-card hover:bg-surface-elevated border border-surface-border hover:border-brand-indigo/50 text-zinc-400 hover:text-white transition-all text-xs font-mono"
              aria-label="Open Command Palette"
            >
              <Command className="w-3.5 h-3.5 text-brand-indigo" />
              <span>Search</span>
              <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-surface-elevated border border-surface-border text-zinc-400">
                ⌘K
              </kbd>
            </button>

            {/* GitHub Quick Link */}
            <a
              href={PORTFOLIO_DATA.developer.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-surface-card hover:bg-surface-elevated border border-surface-border hover:border-brand-cyan/50 text-zinc-300 hover:text-white transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setCommandPaletteOpen(true)}
              className="p-2 rounded-xl bg-surface-card border border-surface-border text-zinc-400 hover:text-white"
              aria-label="Open Command Search"
            >
              <Command className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-xl bg-surface-card border border-surface-border text-zinc-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel border-t border-surface-border px-4 py-4 mt-3 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-mono text-zinc-300 hover:bg-surface-elevated hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4 text-brand-indigo" />
                  {link.label}
                </a>
              );
            })}

            <div className="pt-3 border-t border-surface-border/50 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Available for projects</span>
              </div>
              <div className="flex gap-2">
                <a
                  href={PORTFOLIO_DATA.developer.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface-card text-zinc-300"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.developer.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface-card text-zinc-300"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </>
  );
};
