"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, PenTool, Award, Mic, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";

const activities = [
  {
    icon: Award,
    title: "AWS She Builds Mentorship Program",
    description: "Selected for AWS mentorship program with 1:1 guidance from AWS practitioners. Applied learnings to capstone (Aegis IAM) and hackathon projects (Nova Sentinel).",
    date: "2025",
    tag: "Mentorship",
  },
  {
    icon: PenTool,
    title: "Technical Writer — 3M+ Monthly Readers",
    description: "Published 8+ articles in AWS In Plain English, Towards AWS, and DevSecOps Community covering cloud architecture, AI agents, Terraform, and DevSecOps best practices.",
    date: "2025–Present",
    tag: "Writing",
  },
  {
    icon: Mic,
    title: "AWS Hackathon Competitor",
    description: "Competed in AWS AI Agent Global Hackathon (Nov 2025). Selected for Amazon Nova AI Hackathon (Mar 2026), building production-grade security platforms.",
    date: "2025–2026",
    tag: "Hackathons",
  },
  {
    icon: Users,
    title: "Cybersecurity Teaching Assistant",
    description: "Graduate Teaching Assistant for cybersecurity courses at Washington University in St. Louis. Mentored students on security concepts and hands-on labs.",
    date: "2019–2021",
    tag: "Teaching",
  },
];

export function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="community"
      ref={ref}
      className="scroll-mt-20 px-6 py-24 bg-gradient-to-b from-white via-indigo-50/20 to-slate-50 relative overflow-hidden"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Community & Leadership"
            prefix="~/community$"
            subtitle="Teaching, writing, and building in public"
          />
        </motion.div>

        {/* AWS Community Builder — bigger banner + text box below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="rounded-t-2xl overflow-hidden border-2 border-b-0 border-orange-200">
            <img
              src="/images/certifications/aws-community-builder-marquee.png"
              alt="AWS Community Builder"
              className="w-full h-auto object-contain"
            />
          </div>
          <a
            href="https://aws.amazon.com/developer/community/community-builders/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-b-2xl border-2 border-t-0 border-orange-200 bg-gradient-to-r from-orange-50 via-amber-50/80 to-orange-50 px-6 py-5 hover:border-orange-400 hover:shadow-lg transition-all duration-300 group"
          >
            <span className="inline-block text-xs font-mono font-semibold text-orange-600 mb-1">
              AWS Community Builder — Security
            </span>
            <p className="font-heading font-bold text-slate-900 text-lg mb-1">
              Selected for the AWS Community Builder program
            </p>
            <p className="text-slate-600 text-sm mb-3">
              Recognized for cloud security content, community engagement, and technical leadership.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-600">
              Learn about the program <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {activities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={cn(
              "group rounded-xl border border-slate-200 p-6 hover:shadow-md transition-all duration-300 border-l-4",
              index === 0 && "border-l-blue-500 bg-gradient-to-r from-blue-50/50 to-white hover:border-blue-400",
              index === 1 && "border-l-amber-500 bg-gradient-to-r from-amber-50/50 to-white hover:border-amber-400",
              index === 2 && "border-l-emerald-500 bg-gradient-to-r from-emerald-50/50 to-white hover:border-emerald-400",
              index === 3 && "border-l-violet-500 bg-gradient-to-r from-violet-50/50 to-white hover:border-violet-400"
            )}
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                "rounded-lg border p-2.5 transition-colors",
                index === 0 && "bg-blue-50 border-blue-200 group-hover:bg-blue-100",
                index === 1 && "bg-amber-50 border-amber-200 group-hover:bg-amber-100",
                index === 2 && "bg-emerald-50 border-emerald-200 group-hover:bg-emerald-100",
                index === 3 && "bg-violet-50 border-violet-200 group-hover:bg-violet-100"
              )}>
                  <item.icon className={cn("h-5 w-5", index === 0 && "text-blue-600", index === 1 && "text-amber-600", index === 2 && "text-emerald-600", index === 3 && "text-violet-600")} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-heading font-bold text-slate-900 text-base">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                      {item.tag}
                    </span>
                    <span className="text-xs text-slate-500">{item.date}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
