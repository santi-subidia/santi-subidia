"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  Send, 
  MessageSquare,
  Sparkles,
  CheckCircle2
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.developer.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.developer.socials.email}?subject=${encodeURIComponent(
      subject || "Collaboration with Santi Subidia"
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 relative">
      <div className="mb-12 border-b border-surface-border pb-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Initiate Contact &amp; Collaborate
        </h2>
        <p className="text-zinc-400 mt-2 font-sans max-w-xl text-sm sm:text-base">
          Whether you have a groundbreaking product to build, an engineering leadership opportunity, or want to discuss technical architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Channels */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Card */}
          <div className="glass-card rounded-2xl p-6 border border-surface-border space-y-4">
            <div className="flex items-center justify-between">
              <div className="p-2.5 rounded-xl bg-brand-indigo/20 text-brand-indigo-light border border-brand-indigo/30">
                <Mail className="w-5 h-5" />
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-elevated hover:bg-surface-hover border border-surface-border text-xs font-mono text-zinc-300 transition-colors"
                aria-label="Copy Email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                Direct Email
              </span>
              <a
                href={`mailto:${PORTFOLIO_DATA.developer.socials.email}`}
                className="block text-base sm:text-lg font-bold text-white hover:text-brand-cyan-light transition-colors mt-0.5 font-mono"
              >
                {PORTFOLIO_DATA.developer.socials.email}
              </a>
            </div>

            <p className="text-xs text-zinc-400 font-sans">
              Typical response time within 12-24 business hours.
            </p>
          </div>

          {/* Social Links Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={PORTFOLIO_DATA.developer.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 border border-surface-border flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-surface-elevated text-zinc-300 group-hover:text-white">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-400 block">GitHub</span>
                  <span className="text-sm font-semibold text-white group-hover:text-brand-cyan-light transition-colors">
                    santi-subidia
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>

            <a
              href={PORTFOLIO_DATA.developer.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-5 border border-surface-border flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-surface-elevated text-zinc-300 group-hover:text-white">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-400 block">LinkedIn</span>
                  <span className="text-sm font-semibold text-white group-hover:text-brand-cyan-light transition-colors">
                    Santi Subidia
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Right Column: Quick Dispatch Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSendMessage}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-surface-border space-y-4"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 pb-2 border-b border-surface-border/60">
              <MessageSquare className="w-4 h-4 text-brand-cyan" />
              <span>Quick Dispatch Message</span>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="subject" className="block text-xs font-mono text-zinc-300">
                Subject / Opportunity
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Lead Frontend Role / Full-Stack Project"
                className="w-full bg-surface px-4 py-2.5 rounded-xl border border-surface-border focus:border-brand-indigo outline-none text-white text-xs font-mono transition-colors"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-xs font-mono text-zinc-300">
                Message Body
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share project scope, timeline, requirements, or say hello..."
                className="w-full bg-surface px-4 py-2.5 rounded-xl border border-surface-border focus:border-brand-indigo outline-none text-white text-xs font-sans transition-colors resize-none"
                required
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] font-mono text-zinc-500">
                Dispatches directly via your email client
              </span>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-indigo hover:bg-brand-indigo-light text-white font-mono text-xs transition-all shadow-glow-indigo"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </div>

            {isSent && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Email client opened! Thank you for reaching out.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
