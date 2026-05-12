"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Server, Brain, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { TerminalBlock, type TerminalLine } from "./TerminalBlock";

const journeyLines: TerminalLine[] = [
  { text: "// Career Journey", type: "info" },
  { text: "2021  VIT Chennai → B.Tech CSE", type: "default" },
  { text: "2024  HexaWealth → Data Analyst Intern", type: "default" },
  { text: "2025  Rofolin → AI/ML Engineer", type: "success" },
  { text: "2025  PharmEasy → Backend Dev Intern", type: "success" },
  { text: "", type: "default" },
  { text: "// Projects", type: "info" },
  { text: "→  Local-Vault: Privacy-first RAG chatbot", type: "success" },
  { text: "→  StockSense AI: Real-time stock platform", type: "success" },
  { text: "", type: "default" },
  { text: "// Now: Building scalable APIs @ PharmEasy", type: "warning" },
];

const highlights = [
  {
    icon: Server,
    title: "Backend Engineering",
    text: "Experienced in building distributed microservices with FastAPI, Node.js, and Spring Boot. Shipped production-grade B2B APIs at PharmEasy with Redis rate limiting, JWT security, and OWASP-aligned IDOR fixes.",
  },
  {
    icon: Brain,
    title: "AI/ML Systems",
    text: "Built multi-agent LLM platforms and production RAG pipelines at Rofolin using FAISS, Sentence Transformers, LangChain, and Ollama. From prompt engineering to ChromaDB vector search at scale.",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    text: "Constructed ETL pipelines ingesting multi-source financial data, performed EDA on 500+ NIFTY/BSE equities, and trained risk classification models (Random Forest, XGBoost) with SQL window functions.",
  },
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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="About Me"
            subtitle="Backend Engineer & AI/ML Builder"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-900 leading-relaxed font-bold">
              I&apos;m Anshik — a Backend & AI/ML engineer from Bengaluru, passionate about building production-grade systems that sit at the intersection of scalable APIs and intelligent automation.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Currently interning at PharmEasy as a Backend Developer, I design B2B microservice APIs, implement Redis-based rate limiting, and enforce OWASP-aligned security. Previously at Rofolin, I built a multi-agent LLM automation platform and a production RAG pipeline — FAISS vector search + Sentence Transformers backed by a FastAPI service with real-time analytics.
            </p>
            <p className="text-slate-700 leading-relaxed">
              My projects reflect a full-stack AI mindset: Local-Vault is a privacy-first on-device RAG chatbot with ChromaDB and Ollama; StockSense AI is a real-time stock analysis platform powered by Gemini LLM, LangChain, and ML pipelines covering 500+ NIFTY/BSE equities. I graduated from VIT Chennai with a B.Tech in CS (GPA 8.1) and am AWS Cloud Practitioner certified.
            </p>

            <div className="space-y-4 pt-2">
              {highlights.map((item, i) => {
                const accents = [
                  "border-l-4 border-violet-500 bg-gradient-to-r from-violet-50/80 to-white hover:border-violet-400",
                  "border-l-4 border-cyan-500 bg-gradient-to-r from-cyan-50/80 to-white hover:border-cyan-400",
                  "border-l-4 border-emerald-500 bg-gradient-to-r from-emerald-50/80 to-white hover:border-emerald-400",
                ];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className={cn("flex gap-4 items-start p-4 rounded-lg border border-slate-200 shadow-sm transition-colors", accents[i])}
                  >
                    <item.icon className={cn("h-6 w-6 flex-shrink-0 mt-0.5", i === 0 && "text-violet-600", i === 1 && "text-cyan-600", i === 2 && "text-emerald-600")} />
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
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
