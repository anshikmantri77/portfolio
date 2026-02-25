"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Github, Linkedin, ChevronDown } from "lucide-react";
import { MediumIcon } from "./icons/MediumIcon";
import { TerminalBlock, type TerminalLine } from "./TerminalBlock";
import { motion } from "framer-motion";

const typingPhrases = [
  "Securing AI agents on AWS",
  "Automating IAM policy auditing",
  "From audit findings to auto-remediation",
  "Building autonomous security platforms",
];

const heroTerminalLines: TerminalLine[] = [
  { text: "$ aws iam audit --account all", type: "command" },
  { text: "→ Scanning 847 IAM policies...", type: "info" },
  { text: "→ 23 unused permissions detected", type: "warning" },
  { text: "→ 5 overly permissive roles found", type: "warning" },
  { text: "→ Auto-remediation: ENABLED ✓", type: "success" },
  { text: "→ Compliance score: 98/100", type: "success" },
  { text: "", type: "default" },
  { text: "$ aegis-iam analyze --policy s3-readonly", type: "command" },
  { text: "→ Risk level: LOW", type: "success" },
  { text: "→ 8 compliance frameworks checked ✓", type: "success" },
  { text: "→ PCI DSS: PASS | HIPAA: PASS | SOX: PASS", type: "success" },
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
      {/* Dark gradient background — security/tech feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />

      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: "60px 60px"
      }} />

      {/* Ambient glow spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Identity (first on mobile, left on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 order-1"
          >
            <div className="flex items-center gap-6">
              <div className="relative flex-shrink-0">
                <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden ring-2 ring-amber-400/60 ring-offset-4 ring-offset-slate-900">
                  <Image
                    src="/images/bhavika.png"
                    alt="Bhavika Mantri"
                    fill
                    className="object-cover"
                    sizes="128px"
                    priority
                  />
                </div>
                {/* Status dot */}
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900" />
              </div>
              <div>
                <span className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400 tracking-wider mb-2">
                  CLOUD SECURITY ENGINEER • AI SECURITY
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading tracking-tight">
                  Bhavika Mantri
                </h1>
              </div>
            </div>

            {/* Typing effect */}
            <div className="h-8 font-mono text-xl md:text-2xl text-amber-400">
              <span>{displayText}</span>
              <span className="animate-pulse text-amber-400">|</span>
            </div>

            {/* Credential chips */}
            <div className="flex flex-wrap gap-3">
              {["4x AWS Certified", "CISA", "Terraform Associate"].map((cred, i) => (
                <span key={cred} className={`text-sm font-mono px-3 py-1.5 rounded-lg border ${
                  i === 0
                    ? "bg-amber-500/15 border-amber-500/30 text-amber-300 font-semibold"
                    : "bg-white/5 border-white/10 text-slate-300"
                }`}>
                  {cred}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold bg-amber-500 text-white hover:bg-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 hover:-translate-y-0.5"
              >
                View Projects
                <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#articles"
                className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Read Articles
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5 pt-2">
              {[
                { href: "https://github.com/bhavikam28", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/bhavikamantri", icon: Linkedin, label: "LinkedIn" },
                { href: "https://medium.com/@bhavi.28.mantri", icon: MediumIcon, label: "Medium" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-amber-400 transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Terminal (second on mobile, right on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="order-2"
          >
            <TerminalBlock lines={heroTerminalLines} typingSpeed={35} />
          </motion.div>
        </div>

        {/* Scroll indicator */}
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
