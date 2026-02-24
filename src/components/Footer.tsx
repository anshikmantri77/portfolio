"use client";

import { Github, Linkedin, FileText, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-20 px-6 py-24 bg-slate-900"
    >
      <div className="mx-auto max-w-4xl text-center space-y-8">
        <h2 className="font-heading text-2xl font-bold text-white">
          Let&apos;s Connect
        </h2>

        <a
          href="mailto:bhavi.28.mantri@gmail.com"
          className="block text-xl md:text-2xl font-medium text-amber-400 hover:text-amber-300 transition-colors"
        >
          bhavi.28.mantri@gmail.com
        </a>

        <div className="flex items-center justify-center gap-8">
          <a
            href="https://github.com/bhavikam28"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-amber-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/bhavikamantri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-amber-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://medium.com/@bhavi.28.mantri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-amber-400 transition-colors"
            aria-label="Medium"
          >
            <FileText size={24} />
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 text-slate-400">
          <MapPin size={18} />
          <span>Chicago, IL</span>
        </div>

        <p className="text-sm text-slate-500 italic max-w-xl mx-auto">
          This website is a live cloud security project: Hosted on S3/CloudFront,
          deployed via Terraform, and protected by AWS WAF. CI/CD via GitHub
          Actions.
        </p>

        <p className="text-sm text-slate-600">
          © 2026 Bhavika Mantri. Built with Next.js & deployed on AWS.
        </p>
      </div>
    </footer>
  );
}
