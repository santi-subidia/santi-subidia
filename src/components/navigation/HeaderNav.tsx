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
import { HSSLogo } from "@/components/icons/HSSLogo";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { CommandPalette } from "./CommandPalette";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

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
    { label: "Proyectos", href: "#projects", icon: Layers },
    { label: "Tecnologías", href: "#skills", icon: Code },
    { label: "Formación", href: "#experience", icon: Briefcase },
    { label: "Contacto", href: "#contact", icon: Mail },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-background/85 backdrop-blur-xl border-b border-surface-border shadow-md"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Identity Monogram */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Santi Subidia Inicio"
          >
            <div className="relative flex items-center justify-center">
              <HSSLogo className="w-9 h-9 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(6,182,212,0.35)] group-hover:drop-shadow-[0_0_18px_rgba(99,102,241,0.6)]" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-tight text-sm text-foreground group-hover:text-brand-indigo dark:group-hover:text-brand-cyan-light transition-colors">
                {PORTFOLIO_DATA.developer.name}
              </span>
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                Full-Stack &amp; Mobile
              </span>
            </div>
          </a>

          {/* Desktop Navigation links */}
          <nav className="hidden md:flex items-center gap-1 glass-panel px-3 py-1.5 rounded-full border border-surface-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-600 dark:text-zinc-300 hover:text-foreground hover:bg-surface-elevated transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Hub (Status, Cmd+K trigger, Theme Toggle, Socials) */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Live Availability Badge */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-card/90 border border-surface-border text-xs font-mono text-zinc-700 dark:text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px]">Available</span>
            </div>

            {/* Command Palette Trigger */}
            <button
              onClick={() => setCommandPaletteOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-card hover:bg-surface-elevated border border-surface-border hover:border-brand-indigo/50 text-zinc-500 dark:text-zinc-400 hover:text-foreground transition-all text-xs font-mono"
              aria-label="Open Command Palette"
            >
              <Command className="w-3.5 h-3.5 text-brand-indigo" />
              <span>Search</span>
              <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-surface-elevated border border-surface-border text-zinc-500 dark:text-zinc-400">
                ⌘K
              </kbd>
            </button>

            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* GitHub Quick Link */}
            <a
              href={PORTFOLIO_DATA.developer.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-surface-card hover:bg-surface-elevated border border-surface-border hover:border-brand-cyan/50 text-zinc-600 dark:text-zinc-300 hover:text-foreground transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setCommandPaletteOpen(true)}
              className="p-2 rounded-xl bg-surface-card border border-surface-border text-zinc-500 dark:text-zinc-400 hover:text-foreground"
              aria-label="Open Command Search"
            >
              <Command className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="p-2 rounded-xl bg-surface-card border border-surface-border text-zinc-600 dark:text-zinc-300 hover:text-foreground"
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
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-mono text-zinc-700 dark:text-zinc-300 hover:bg-surface-elevated hover:text-foreground transition-colors"
                >
                  <Icon className="w-4 h-4 text-brand-indigo" />
                  {link.label}
                </a>
              );
            })}

            <div className="pt-3 border-t border-surface-border/50 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Available for projects</span>
              </div>
              <div className="flex gap-2">
                <a
                  href={PORTFOLIO_DATA.developer.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface-card text-zinc-600 dark:text-zinc-300 hover:text-foreground"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PORTFOLIO_DATA.developer.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-surface-card text-zinc-600 dark:text-zinc-300 hover:text-foreground"
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
