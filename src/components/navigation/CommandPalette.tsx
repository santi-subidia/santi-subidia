"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Search, 
  Terminal, 
  Code, 
  Layers, 
  Briefcase, 
  Mail, 
  Sparkles, 
  Check, 
  X,
  ArrowRight
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedAction, setCopiedAction] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const actions = [
    {
      id: "projects",
      label: "Navigate: Featured Projects",
      category: "Navigation",
      icon: Layers,
      perform: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "lab",
      label: "Navigate: Component Lab & Physics",
      category: "Navigation",
      icon: Sparkles,
      perform: () => {
        document.getElementById("lab")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "skills",
      label: "Navigate: Skills & Telemetry",
      category: "Navigation",
      icon: Code,
      perform: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "experience",
      label: "Navigate: Career Experience",
      category: "Navigation",
      icon: Briefcase,
      perform: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "contact",
      label: "Navigate: Contact & Connect",
      category: "Navigation",
      icon: Mail,
      perform: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        onClose();
      },
    },
    {
      id: "copy-email",
      label: `Copy Email (${PORTFOLIO_DATA.developer.socials.email})`,
      category: "Actions",
      icon: Mail,
      perform: () => {
        navigator.clipboard.writeText(PORTFOLIO_DATA.developer.socials.email);
        setCopiedAction("Email copied to clipboard!");
        setTimeout(() => {
          setCopiedAction(null);
          onClose();
        }, 1200);
      },
    },
    {
      id: "github",
      label: "Open GitHub Profile",
      category: "Links",
      icon: GithubIcon,
      perform: () => {
        window.open(PORTFOLIO_DATA.developer.socials.github, "_blank", "noopener,noreferrer");
        onClose();
      },
    },
    {
      id: "linkedin",
      label: "Open LinkedIn Profile",
      category: "Links",
      icon: LinkedinIcon,
      perform: () => {
        window.open(PORTFOLIO_DATA.developer.socials.linkedin, "_blank", "noopener,noreferrer");
        onClose();
      },
    },
  ];

  const filteredActions = actions.filter((action) =>
    action.label.toLowerCase().includes(query.toLowerCase()) ||
    action.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredActions.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % (filteredActions.length || 1));
      } else if (e.key === "Enter" && filteredActions[selectedIndex]) {
        e.preventDefault();
        filteredActions[selectedIndex].perform();
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-md transition-opacity"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-surface-card border border-surface-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Command Palette"
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-surface-border gap-3">
          <Search className="w-5 h-5 text-zinc-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="flex-1 bg-transparent border-none outline-none text-foreground placeholder-zinc-500 text-sm font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-surface-elevated transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Feedback alert if action executed */}
        {copiedAction && (
          <div className="px-4 py-2.5 bg-emerald-500/10 border-b border-emerald-500/20 text-emerald-400 text-xs font-mono flex items-center gap-2">
            <Check className="w-3.5 h-3.5" />
            {copiedAction}
          </div>
        )}

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-surface-border/30">
          {filteredActions.length === 0 ? (
            <div className="py-8 text-center text-zinc-500 text-sm font-mono">
              No matching commands found
            </div>
          ) : (
            filteredActions.map((action, idx) => {
              const Icon = action.icon;
              const isSelected = idx === selectedIndex;

              return (
                <button
                  key={action.id}
                  onClick={action.perform}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-colors font-mono text-xs ${
                    isSelected
                      ? "bg-brand-indigo/15 text-white border border-brand-indigo/30"
                      : "text-zinc-300 hover:bg-surface-hover border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-1.5 rounded-lg ${
                        isSelected
                          ? "bg-brand-indigo/30 text-brand-cyan-light"
                          : "bg-surface-elevated text-zinc-400"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-sans font-medium">{action.label}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-wider px-1.5 py-0.5 rounded bg-surface-elevated">
                      {action.category}
                    </span>
                    {isSelected && <ArrowRight className="w-3.5 h-3.5 text-brand-cyan" />}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-surface-elevated/40 border-t border-surface-border flex items-center justify-between text-[11px] text-zinc-500 font-mono">
          <div className="flex items-center gap-2">
            <span>Navigate <kbd className="px-1 py-0.5 rounded bg-surface-border text-zinc-300">↑</kbd><kbd className="px-1 py-0.5 rounded bg-surface-border text-zinc-300">↓</kbd></span>
            <span>Select <kbd className="px-1 py-0.5 rounded bg-surface-border text-zinc-300">↵</kbd></span>
          </div>
          <span>Close <kbd className="px-1 py-0.5 rounded bg-surface-border text-zinc-300">ESC</kbd></span>
        </div>
      </div>
    </div>
  );
};
