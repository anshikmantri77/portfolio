"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Github, Linkedin, FileText } from "lucide-react";
import { TerminalBlock, type TerminalLine } from "./TerminalBlock";
import { AnimatedCounter } from "./ui/AnimatedCounter";

const typingPhrases = [
  "Building AI security agents",
  "Automating IAM policy auditing",
  "Securing cloud infrastructure at scale",
  "From audit findings to auto-remediation",
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

const stats = [
  { value: 5, suffix: "+ Years", label: "Experience" },
  { value: 5, suffix: " AWS Certs", label: "Certifications" },
  { value: 8, suffix: "+ Articles", label: "Published" },
  { value: 3, suffix: " AI Projects", label: "Hackathon builds" },
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
      className="relative min-h-[85vh] flex flex-col justify-center px-6 pt-20 pb-12 overflow-hidden"
    >
      <div className="absolute inset-0 bg-pattern pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div
                className="relative h-28 w-28 sm:h-36 sm:w-36 flex-shrink-0 rounded-full overflow-hidden ring-4 ring-amber-400 ring-offset-4"
              >
                <Image
                  src="/images/bhavika.png"
                  alt="Bhavika Mantri"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 112px, 144px"
                  priority
                />
              </div>
              <div className="flex-1 space-y-1.5">
                <span className="inline-block rounded-full border border-amber-300 bg-amber-100 px-4 py-1.5 text-xs font-semibold text-amber-800 tracking-wider">
                  CLOUD SECURITY ENGINEER • AI BUILDER
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-heading tracking-tight">
                  Bhavika Mantri
                </h1>
              </div>
            </div>
            <div className="h-7 font-mono text-xl text-amber-600">
              <span>{displayText}</span>
              <span className="animate-pulse">|</span>
            </div>
            <p className="max-w-xl text-slate-600 text-lg leading-relaxed">
              From auditing cloud infrastructure to building the security tools I wished existed.
            </p>

            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-6">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-heading font-bold text-slate-900 text-3xl">
                    <AnimatedCounter value={s.value} suffix={s.suffix} duration={1.5} />
                  </span>
                  <span className="text-sm text-slate-500">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-colors shadow-sm"
              >
                View Projects
              </a>
              <a
                href="#articles"
                className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold border-2 border-slate-300 text-slate-700 hover:border-amber-500 hover:text-amber-600 transition-colors"
              >
                Read Articles
              </a>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <a
                href="https://github.com/bhavikam28"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-amber-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com/in/bhavikamantri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-amber-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://medium.com/@bhavi.28.mantri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-amber-600 transition-colors"
                aria-label="Medium"
              >
                <FileText size={22} />
              </a>
            </div>
          </div>

          {/* Right - Terminal */}
          <div className="order-first lg:order-last">
            <TerminalBlock lines={heroTerminalLines} typingSpeed={35} />
          </div>
        </div>

      </div>
    </section>
  );
}
