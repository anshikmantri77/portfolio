"use client";

import { Github, Linkedin, MapPin, Mail, Send, Shield, Cpu, Layers } from "lucide-react";
import { MediumIcon } from "./icons/MediumIcon";

const focusAreas = [
  { label: "IT Audit", icon: Shield },
  { label: "AI Security", icon: Cpu },
  { label: "Cloud Architecture", icon: Layers },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-20 bg-slate-900 relative overflow-hidden"
    >
      {/* Gradient accent strip */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500" />

      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
            Let&apos;s Connect
          </h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto mb-6">
            Open to cloud security roles and collaboration. Reach out — I&apos;d love to hear from you.
          </p>
          {/* Focus areas - IT Audit, AI Security, Cloud Architecture */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {focusAreas.map((area) => (
              <span
                key={area.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-sm font-medium"
              >
                <area.icon size={16} className="text-amber-400" />
                {area.label}
              </span>
            ))}
          </div>
        </div>

        {/* Contact grid - professional card layout */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:bhavi.28.mantri@gmail.com"
            className="group flex flex-col items-center md:items-start p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 hover:border-amber-500/40 hover:bg-slate-800 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors">
              <Mail size={24} className="text-amber-400" />
            </div>
            <span className="text-slate-400 text-sm font-medium mb-1">Email</span>
            <span className="text-white font-semibold text-base group-hover:text-amber-400 transition-colors break-all">
              bhavi.28.mantri@gmail.com
            </span>
          </a>

          <div className="flex flex-col items-center md:items-start p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
              <MapPin size={24} className="text-emerald-400" />
            </div>
            <span className="text-slate-400 text-sm font-medium mb-1">Location</span>
            <span className="text-white font-semibold text-base">Chicago, IL</span>
          </div>

          <div className="flex flex-col p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Send size={24} className="text-blue-400" />
            </div>
            <span className="text-slate-400 text-sm font-medium mb-3 text-center md:text-left">Connect</span>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="https://github.com/bhavikam28"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium"
              >
                <Github size={20} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/bhavikamantri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a
                href="https://medium.com/@bhavi.28.mantri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium"
              >
                <MediumIcon size={20} /> Medium
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-700/80">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-slate-500 text-sm italic text-center md:text-left">
              Built with Next.js &amp; TypeScript. Deployed on Vercel.
            </p>
            <p className="text-slate-600 text-sm text-center md:text-right">
              © 2026 Bhavika Mantri.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
