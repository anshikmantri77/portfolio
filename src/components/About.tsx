"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Zap, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { TerminalBlock, type TerminalLine } from "./TerminalBlock";

const journeyLines: TerminalLine[] = [
  { text: "// Career Journey", type: "info" },
  { text: "2014  NIT Jalandhar → Engineering", type: "default" },
  { text: "2018  Cognizant → Project Associate", type: "default" },
  { text: "2019  WashU → M.Eng. + Cyber TA", type: "success" },
  { text: "2021  FORVIS → Tech Advisory", type: "default" },
  { text: "2022  Discover → IT Auditor", type: "default" },
  { text: "2024  H-4 → Upskilling (5 certs, 3 projects)", type: "warning" },
  { text: "2025  SG Cloud → AI Security Builder", type: "success" },
];

const highlights = [
  { icon: Shield, title: "Audit-Informed Engineering", text: "3 years of IT audit at Discover and FORVIS means I build security tooling that maps to real compliance frameworks — PCI DSS, SOX, HIPAA, NIST 800-53 — not theoretical ones." },
  { icon: Zap, title: "AI Security Automation", text: "Multi-agent systems that audit IAM, analyze CloudTrail, score risk in real time, and auto-remediate. I don't just use AI for security — I'm building agents that think about security." },
  { icon: Code2, title: "AWS-Native Infrastructure", text: "Terraform IaC, EKS with RBAC, DevSecOps pipelines with triple-threat scanning, OIDC-only CI/CD. Production-grade cloud security from infrastructure to application layer." },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="scroll-mt-20 px-6 py-24 relative overflow-hidden bg-gradient-to-b from-indigo-50/30 via-slate-50 to-white"
    >
      <div className="mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="About Me"
            subtitle="Cloud Security Engineer & Architect"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-900 leading-relaxed font-bold">
              I&apos;m Bhavika — a Cloud Security Engineer who spent 3 years auditing enterprise security controls, then started building the tools that would have made those audits obsolete.
            </p>
            <p className="text-slate-700 leading-relaxed">
              At Discover Financial Services, I evaluated 40+ security controls across Business Continuity, InfoSec Governance, and Data Center Operations. At FORVIS, I designed risk/control matrices for $5M+ SOX engagements. That audit experience gave me something most security engineers lack: I know exactly what compliance teams need because I've been one.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Now I build AI-powered security automation on AWS. Aegis IAM uses multi-agent orchestration to turn natural language into least-privilege IAM policies and audit entire AWS accounts autonomously. Nova Sentinel coordinates 5 Amazon Nova models to resolve security incidents in under a minute. I write about cloud security and AI agents for publications reaching 3M+ monthly readers.
            </p>

            <div className="space-y-4 pt-2">
              {highlights.map((item, i) => {
                const accents = [
                  "border-l-4 border-blue-500 bg-gradient-to-r from-blue-50/80 to-white hover:border-blue-400",
                  "border-l-4 border-amber-500 bg-gradient-to-r from-amber-50/80 to-white hover:border-amber-400",
                  "border-l-4 border-emerald-500 bg-gradient-to-r from-emerald-50/80 to-white hover:border-emerald-400",
                ];
                return (
                <motion.div
                  key={i}
                  initial={{ opacity: 1, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: -10 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className={cn("flex gap-4 items-start p-4 rounded-lg border border-slate-200 shadow-sm transition-colors", accents[i])}
                >
                  <item.icon className={cn("h-6 w-6 flex-shrink-0 mt-0.5", i === 0 && "text-blue-600", i === 1 && "text-amber-600", i === 2 && "text-emerald-600")} />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-1">{item.title}</h4>
                    <span className="text-slate-700 text-sm leading-relaxed">{item.text}</span>
                  </div>
                </motion.div>
              );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TerminalBlock
              title="~/journey$"
              lines={journeyLines}
              typingSpeed={50}
              startDelay={400}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
