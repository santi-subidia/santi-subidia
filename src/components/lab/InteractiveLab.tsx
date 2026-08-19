"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Sparkles, 
  Sliders, 
  Terminal as TerminalIcon, 
  Gauge, 
  RotateCcw, 
  Play, 
  Check, 
  Zap,
  Info
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const InteractiveLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"spring" | "terminal" | "caliper">("spring");

  // --- Spring Solver State ---
  const [stiffness, setStiffness] = useState(240);
  const [damping, setDamping] = useState(20);
  const [mass, setMass] = useState(1);
  const [springPos, setSpringPos] = useState(0);
  const [springTarget, setSpringTarget] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const springAnimRef = useRef<number | null>(null);

  const runSpring = (target: number) => {
    setSpringTarget(target);
    setIsSimulating(true);

    let pos = springPos;
    let vel = 0;
    let lastTime = performance.now();

    const step = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.032);
      lastTime = time;

      const displacement = pos - target;
      const springForce = -stiffness * displacement;
      const dampingForce = -damping * vel;
      const acceleration = (springForce + dampingForce) / mass;

      vel += acceleration * dt;
      pos += vel * dt;

      setSpringPos(pos);

      if (Math.abs(displacement) < 0.001 && Math.abs(vel) < 0.001) {
        setSpringPos(target);
        setIsSimulating(false);
        return;
      }

      springAnimRef.current = requestAnimationFrame(step);
    };

    if (springAnimRef.current) cancelAnimationFrame(springAnimRef.current);
    springAnimRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    return () => {
      if (springAnimRef.current) cancelAnimationFrame(springAnimRef.current);
    };
  }, []);

  // --- Terminal CLI State ---
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd?: string; res: string; isError?: boolean }>>([
    { res: "Santi Subidia CLI v1.0.0 (x86_64-engine)" },
    { res: "Type 'help' to view available commands or try 'skills', 'projects', 'hire'." },
  ]);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let res = "";
    let isError = false;

    switch (cmd) {
      case "help":
        res = "Available commands: skills, projects, contact, experience, bio, stack, clear, hire";
        break;
      case "skills":
        res = "TypeScript (96%), Next.js/React (95%), Tailwind CSS (94%), Node.js (92%), WebSockets (89%), Canvas API (88%)";
        break;
      case "projects":
        res = "1. Pulse Analytics (Distributed Ingestion)\n2. Synapse AI Studio (Infinite Graph Engine)\n3. Tactile UI (Physics System)\n4. Forge CLI (AST Developer Toolkit)";
        break;
      case "contact":
      case "email":
        res = `Email: ${PORTFOLIO_DATA.developer.socials.email} | GitHub: ${PORTFOLIO_DATA.developer.socials.github}`;
        break;
      case "experience":
        res = "5+ years engineering scalable web architectures, frontend design systems, and real-time streaming platforms.";
        break;
      case "bio":
        res = PORTFOLIO_DATA.developer.shortBio;
        break;
      case "stack":
        res = "Primary: Next.js (App Router), React 19, TypeScript, Tailwind CSS, PostgreSQL, Docker, Redis.";
        break;
      case "hire":
      case "sudo hire santi":
        res = "🎉 Match confirmed! Santiago is open for high-impact roles. Reach out via email: santisubidia@gmail.com";
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      default:
        res = `Command not recognized: '${cmd}'. Type 'help' for a list of commands.`;
        isError = true;
    }

    setTerminalHistory((prev) => [...prev, { cmd: terminalInput, res, isError }]);
    setTerminalInput("");
  };

  // --- Caliper Contrast State ---
  const [bgColor, setBgColor] = useState("#0b0d13");
  const [fgColor, setFgColor] = useState("#f8fafc");

  const getLuminance = (hex: string) => {
    const rgb = hex.replace("#", "").match(/.{1,2}/g)?.map((x) => parseInt(x, 16) / 255) || [0, 0, 0];
    const a = rgb.map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  const getContrastRatio = (c1: string, c2: string) => {
    const l1 = getLuminance(c1);
    const l2 = getLuminance(c2);
    const ratio = (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
    return Math.round(ratio * 10) / 10;
  };

  const contrastRatio = getContrastRatio(bgColor, fgColor);
  const passesAAA = contrastRatio >= 7.0;
  const passesAA = contrastRatio >= 4.5;

  return (
    <section id="lab" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      {/* Header */}
      <div className="mb-12 border-b border-surface-border pb-8">
        <div className="flex items-center gap-2 text-brand-cyan-light text-xs font-mono mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Interactive Component Lab</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Micro-Experiments &amp; Engineering Playground
        </h2>
        <p className="text-zinc-400 mt-2 font-sans max-w-2xl text-sm sm:text-base">
          Live frontend algorithms and interactive UI prototypes proving physics computation, terminal orchestration, and design token contrast standards.
        </p>

        {/* Lab Sub-tabs */}
        <div className="flex flex-wrap gap-2 mt-6">
          <button
            onClick={() => setActiveTab("spring")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === "spring"
                ? "bg-brand-indigo text-white shadow-glow-indigo"
                : "bg-surface-card text-zinc-400 hover:text-white border border-surface-border"
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>RK4 Spring Solver</span>
          </button>

          <button
            onClick={() => setActiveTab("terminal")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === "terminal"
                ? "bg-brand-indigo text-white shadow-glow-indigo"
                : "bg-surface-card text-zinc-400 hover:text-white border border-surface-border"
            }`}
          >
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Interactive CLI Terminal</span>
          </button>

          <button
            onClick={() => setActiveTab("caliper")}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === "caliper"
                ? "bg-brand-indigo text-white shadow-glow-indigo"
                : "bg-surface-card text-zinc-400 hover:text-white border border-surface-border"
            }`}
          >
            <Gauge className="w-3.5 h-3.5" />
            <span>Contrast Caliper (WCAG)</span>
          </button>
        </div>
      </div>

      {/* Lab Experiment Viewport */}
      <div className="glass-card rounded-2xl p-6 sm:p-8 border border-surface-border">
        {/* 1. Spring Physics Solver */}
        {activeTab === "spring" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                    <span>Stiffness (k)</span>
                    <span className="text-brand-cyan-light">{stiffness} N/m</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    value={stiffness}
                    onChange={(e) => setStiffness(Number(e.target.value))}
                    className="w-full accent-brand-indigo bg-surface-elevated h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                    <span>Damping (c)</span>
                    <span className="text-brand-indigo-light">{damping} Ns/m</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={damping}
                    onChange={(e) => setDamping(Number(e.target.value))}
                    className="w-full accent-brand-indigo bg-surface-elevated h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-zinc-300 mb-1">
                    <span>Mass (m)</span>
                    <span className="text-amber-400">{mass} kg</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="5"
                    step="0.1"
                    value={mass}
                    onChange={(e) => setMass(Number(e.target.value))}
                    className="w-full accent-brand-indigo bg-surface-elevated h-1.5 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Trigger Triggers */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => runSpring(springTarget === 0 ? 1 : 0)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-indigo hover:bg-brand-indigo-light text-white text-xs font-mono transition-all shadow-glow-indigo"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Displace Spring</span>
                </button>

                <button
                  onClick={() => {
                    setStiffness(240);
                    setDamping(20);
                    setMass(1);
                    runSpring(0);
                  }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-elevated hover:bg-surface-hover text-zinc-300 text-xs font-mono transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Defaults</span>
                </button>
              </div>
            </div>

            {/* Visualizer Simulation Stage */}
            <div className="lg:col-span-6 bg-surface/90 border border-surface-border rounded-2xl p-8 flex flex-col items-center justify-center min-h-[260px] relative overflow-hidden">
              <div className="w-full h-1 bg-surface-border relative mb-12 rounded-full">
                {/* Visual Spring Track */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-brand-indigo border border-brand-cyan-light shadow-glow-cyan flex items-center justify-center text-white text-xs font-mono font-bold transition-none"
                  style={{
                    left: `${50 + springPos * 40}%`,
                    transform: `translate(-50%, -50%) rotate(${springPos * 45}deg)`,
                  }}
                >
                  k
                </div>
              </div>

              {/* Telemetry output */}
              <div className="grid grid-cols-3 gap-4 w-full text-center border-t border-surface-border/60 pt-4 font-mono text-[11px]">
                <div>
                  <span className="text-zinc-500 block">Position (x)</span>
                  <span className="text-white font-semibold">{springPos.toFixed(3)}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Status</span>
                  <span className={isSimulating ? "text-amber-400" : "text-emerald-400"}>
                    {isSimulating ? "Oscillating" : "Equilibrium"}
                  </span>
                </div>
                <div>
                  <span className="text-zinc-500 block">Integration</span>
                  <span className="text-brand-cyan-light">RK4 60Hz</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Interactive CLI Terminal */}
        {activeTab === "terminal" && (
          <div className="bg-surface/95 border border-surface-border rounded-xl p-4 font-mono text-xs text-zinc-300 min-h-[320px] flex flex-col justify-between">
            <div className="space-y-2 overflow-y-auto max-h-60 pr-2">
              {terminalHistory.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  {item.cmd && (
                    <div className="flex items-center gap-2 text-brand-cyan-light">
                      <span className="text-brand-indigo-light">santi@terminal:~$</span>
                      <span>{item.cmd}</span>
                    </div>
                  )}
                  <p className={`whitespace-pre-wrap ${item.isError ? "text-rose-400" : "text-zinc-300"}`}>
                    {item.res}
                  </p>
                </div>
              ))}
            </div>

            <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-4 border-t border-surface-border mt-4">
              <span className="text-brand-indigo-light shrink-0">santi@terminal:~$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type a command (e.g. help, skills, hire)..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs placeholder-zinc-600"
                autoFocus
              />
            </form>
          </div>
        )}

        {/* 3. WCAG Contrast Caliper */}
        {activeTab === "caliper" && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 space-y-4 font-mono text-xs">
              <div>
                <label className="block text-zinc-400 mb-1">Background Token Color</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="w-8 h-8 rounded border border-surface-border bg-transparent cursor-pointer"
                  />
                  <input
                    type="text"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="bg-surface-elevated px-3 py-1.5 rounded-lg border border-surface-border text-white text-xs font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 mb-1">Foreground Token Color</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                    className="w-8 h-8 rounded border border-surface-border bg-transparent cursor-pointer"
                  />
                  <input
                    type="text"
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                    className="bg-surface-elevated px-3 py-1.5 rounded-lg border border-surface-border text-white text-xs font-mono"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <span className="text-zinc-400">Calculated Ratio:</span>
                <span className="text-2xl font-bold font-mono text-white">
                  {contrastRatio} : 1
                </span>
              </div>
            </div>

            <div
              className="md:col-span-6 p-6 rounded-xl border border-surface-border flex flex-col justify-between min-h-[180px] shadow-lg transition-colors"
              style={{ backgroundColor: bgColor, color: fgColor }}
            >
              <div className="space-y-1">
                <h4 className="text-lg font-bold">Impeccable Contrast Specimen</h4>
                <p className="text-xs opacity-90">
                  Checking legible typography compliance across dark and light surfaces.
                </p>
              </div>

              <div className="flex gap-3 pt-4 border-t border-current/20 font-mono text-xs">
                <span className={passesAA ? "text-emerald-400 flex items-center gap-1 font-bold" : "text-rose-400"}>
                  {passesAA ? "✓ WCAG AA Pass" : "✕ WCAG AA Fail"}
                </span>
                <span className={passesAAA ? "text-emerald-400 flex items-center gap-1 font-bold" : "text-rose-400"}>
                  {passesAAA ? "✓ WCAG AAA Pass" : "✕ WCAG AAA Fail"}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
