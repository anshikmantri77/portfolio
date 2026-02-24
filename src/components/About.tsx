"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Zap, Code2 } from "lucide-react";
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
  { icon: Shield, title: "Audit → Automation", text: "I spent years in IT audit and tech advisory at Discover and FORVIS. Now I build the automation that would have made those audits faster and more consistent — IAM audits, compliance checks, and policy validation in code." },
  { icon: Zap, title: "AI-Powered Security", text: "I build agents that reason over CloudTrail, score risk in real time, and turn natural language into least-privilege IAM. Aegis IAM and Nova Sentinel came from wanting security tooling that thinks, not just runs rules." },
  { icon: Code2, title: "Full Stack Security", text: "From Terraform and EKS to Lambda and Bedrock, I design and implement secure systems end to end. DevSecOps pipelines, zero-credential CI, and container scanning are part of how I ship." },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="scroll-mt-20 px-6 py-24 relative overflow-hidden"
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
            <p className="text-lg text-slate-900 leading-relaxed font-medium">
              I&apos;m Bhavika — a <span className="text-amber-600">Cloud Security Engineer</span> who moved from auditing systems to building them.
            </p>
            <p className="text-slate-700 leading-relaxed">
              I started in India at Cognizant, then came to the US for my Master&apos;s at Washington University in St. Louis. After graduation I did technology advisory and IT audit at FORVIS and Discover: control testing, risk matrices, and compliance work that showed me how often security breaks when it&apos;s manual and siloed.
            </p>
            <p className="text-slate-700 leading-relaxed">
              When I hit a career pause (H-4), I turned it into a reset: 5 AWS certifications, 3 hackathon projects (Aegis IAM, Nova Sentinel, and more), and 8+ articles for AWS In Plain English and DevSecOps Community. I joined the AWS She Builds mentorship program and kept building. Now I&apos;m at SG Cloud Consulting building AI-powered security tools — the kind I wished we&apos;d had in audit.
            </p>

            <div className="space-y-4 pt-2">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 1, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: -10 }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex gap-4 items-start p-4 rounded-lg border border-slate-200 bg-white hover:border-amber-300 shadow-sm transition-colors"
                >
                  <item.icon className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-1">{item.title}</h4>
                    <span className="text-slate-700 text-sm leading-relaxed">{item.text}</span>
                  </div>
                </motion.div>
              ))}
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
