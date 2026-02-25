"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { MediumIcon } from "./icons/MediumIcon";
import { TerminalBlock, type TerminalLine } from "./TerminalBlock";

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
      className="relative min-h-[85vh] flex flex-col justify-center px-6 pt-20 pb-12 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-violet-50/40"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-200/40 via-amber-100/30 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-pattern pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
              <div className="relative flex-shrink-0">
                <div className="relative h-40 w-40 sm:h-48 sm:w-48 rounded-full overflow-hidden ring-4 ring-amber-400 ring-offset-4">
                  <Image
                    src="/images/bhavika.png"
                    alt="Bhavika Mantri"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 160px, 192px"
                    priority
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0 text-center sm:text-left space-y-2 flex flex-col items-center sm:items-start">
                <span className="inline-block rounded-full border border-amber-300 bg-gradient-to-r from-amber-100 to-orange-50 px-4 py-1.5 text-xs font-semibold text-amber-800 tracking-wider">
                  CLOUD SECURITY ENGINEER • AI SECURITY
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
            <p className="font-mono text-sm tracking-wide">
              <span className="text-amber-600 font-semibold">4x AWS Certified</span>
              <span className="text-slate-400 mx-2">|</span>
              <span className="text-slate-700">CISA</span>
              <span className="text-slate-400 mx-2">|</span>
              <span className="text-slate-700">Terraform Associate</span>
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-colors shadow-sm"
              >
                View Projects
              </a>
              <a
                href="#articles"
                className="inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold border-2 border-blue-300 text-blue-700 hover:border-violet-500 hover:text-violet-600 hover:bg-violet-50/50 transition-colors"
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
                <MediumIcon size={22} />
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
