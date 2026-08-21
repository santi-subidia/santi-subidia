"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = "", 
  showLabel = false 
}) => {
  const { resolvedTheme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div 
        className={`w-9 h-9 rounded-xl bg-surface-card border border-surface-border opacity-50 ${className}`} 
        aria-hidden="true" 
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative group flex items-center gap-2 p-2 rounded-xl bg-surface-card hover:bg-surface-elevated border border-surface-border hover:border-brand-indigo/50 text-zinc-300 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-all shadow-sm active:scale-95 ${className}`}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-brand-indigo transition-transform duration-300 -rotate-12 hover:rotate-0" />
        )}
      </div>

      {showLabel && (
        <span className="text-xs font-mono">
          {isDark ? "Modo Claro" : "Modo Oscuro"}
        </span>
      )}
    </button>
  );
};
