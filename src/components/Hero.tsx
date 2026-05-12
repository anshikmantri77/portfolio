"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, ChevronDown, Mail, Phone } from "lucide-react";
import { TerminalBlock, type TerminalLine } from "./TerminalBlock";
import { motion } from "framer-motion";

const typingPhrases = [
  "Backend Engineer",
  "AI/ML Engineer",
  "Software Development Engineer",
  "Full-Stack Builder",
];

const heroTerminalLines: TerminalLine[] = [
  { text: "$ fastapi run server.py --port 8000", type: "command" },
  { text: "→ RAG pipeline initialized ✓", type: "success" },
  { text: "→ ChromaDB vector store ready", type: "info" },
  { text: "→ Ollama LLM (llama3) connected ✓", type: "success" },
  { text: "", type: "default" },
  { text: "$ python rag_pipeline.py --query 'stock analysis'", type: "command" },
  { text: "→ Retrieving NIFTY/BSE 500 context...", type: "info" },
  { text: "→ Risk score: LOW | Sharpe: 1.82 ✓", type: "success" },
  { text: "→ Portfolio rebalancing: RECOMMENDED", type: "warning" },
  { text: "→ Redis rate-limit: 60 req/min enforced ✓", type: "success" },
];

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = typingPhrases[phraseIndex];
    const delay = isDeleting ? 30 : 60;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < phrase.length) {
          setDisplayText(phrase.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(phrase.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [phraseIndex, displayText, isDeleting]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

      {/* Animated grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Ambient glow spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Identity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 order-1"
          >
            <div className="flex items-center gap-6">
              <div className="relative flex-shrink-0">
                {/* Avatar initials placeholder */}
                <div className="relative h-[146px] w-[146px] sm:h-[166px] sm:w-[166px] rounded-full overflow-hidden ring-2 ring-violet-400/60 ring-offset-4 ring-offset-slate-900 bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
                  <span className="text-white text-5xl font-bold font-heading select-none">AM</span>
                </div>
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900" />
              </div>
              <div>
                <span className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400 tracking-wider mb-2">
                  BACKEND ENGINEER • AI/ML ENGINEER
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading tracking-tight whitespace-nowrap">
                  Anshik Mantri
                </h1>
              </div>
            </div>

            <div className="h-8 font-mono text-xl md:text-2xl text-violet-400">
              <span>{displayText}</span>
              <span className="animate-pulse text-violet-400">|</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {["AWS CCP Certified", "VIT Chennai '25", "PharmEasy Intern", "Bengaluru"].map((cred, i) => (
                <span
                  key={cred}
                  className={`text-sm font-mono px-3 py-1.5 rounded-lg border ${
                    i === 0
                      ? "bg-violet-500/15 border-violet-500/30 text-violet-300 font-semibold"
                      : "bg-white/5 border-white/10 text-slate-300"
                  }`}
                >
                  {cred}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold bg-violet-600 text-white hover:bg-violet-500 transition-all duration-300 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:-translate-y-0.5"
              >
                View Projects
                <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Experience
              </a>
            </div>

            <div className="flex items-center gap-5 pt-2">
              {[
                { href: "https://github.com/anshikmantri77", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/anshikmantri", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:anshikmantri@gmail.com", icon: Mail, label: "Email" },
                { href: "tel:7023805961", icon: Phone, label: "+91-7023805961" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-violet-400 transition-colors duration-300 text-base"
                  aria-label={label}
                >
                  <Icon size={22} />
                  <span className="hidden sm:inline">{label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="order-2 w-full max-w-md"
          >
            <TerminalBlock lines={heroTerminalLines} typingSpeed={35} startDelay={400} />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-slate-500" />
        </motion.div>
      </div>
    </section>
  );
}
