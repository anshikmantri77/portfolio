"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cloud, Server, Cpu, Code, Shield } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Cloud & Security": Cloud,
  "AWS Services": Server,
  "AI & GenAI": Cpu,
  "Programming & Tools": Code,
  "Compliance": Shield,
};

const categoryStyles: Record<string, { iconBg: string; icon: string }> = {
  "Cloud & Security": { iconBg: "bg-blue-50 border border-blue-200", icon: "text-blue-600" },
  "AWS Services": { iconBg: "bg-indigo-50 border border-indigo-200", icon: "text-indigo-600" },
  "AI & GenAI": { iconBg: "bg-amber-50 border border-amber-200", icon: "text-amber-600" },
  "Programming & Tools": { iconBg: "bg-emerald-50 border border-emerald-200", icon: "text-emerald-600" },
  "Compliance": { iconBg: "bg-violet-50 border border-violet-200", icon: "text-violet-600" },
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const filteredSkills = categoryFilter
    ? skills.filter((s) => s.category === categoryFilter)
    : skills;

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-20 px-6 py-24 bg-gradient-to-b from-slate-50 via-white to-violet-50/20 relative overflow-hidden"
    >
      <div className="mx-auto max-w-6xl relative">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Technical Toolkit"
            prefix="~/skills$"
            subtitle="Skills by category"
          />
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 10 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          <button
            onClick={() => setCategoryFilter(null)}
            className={cn(
              "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 shadow-sm",
              !categoryFilter
                ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white"
                : "bg-white text-slate-600 border border-slate-200 hover:border-amber-300 hover:shadow"
            )}
          >
            All
          </button>
          {skills.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setCategoryFilter(cat.category)}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                categoryFilter === cat.category
                  ? "bg-amber-500 text-white border-amber-500 shadow-md"
                  : "bg-white/80 text-slate-600 border border-slate-200 hover:border-slate-300 hover:shadow"
              )}
            >
              {cat.category}
            </button>
          ))}
        </motion.div>

        {/* Skill cards - premium grid layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((cat, index) => {
            const Icon = categoryIcons[cat.category] ?? Code;
            const style = categoryStyles[cat.category] ?? categoryStyles["Cloud & Security"];
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group"
              >
                <div className="rounded-xl border border-slate-200 border-l-4 border-l-amber-400 bg-gradient-to-r from-amber-50/30 to-white p-6 hover:shadow-md hover:border-amber-300 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", style.iconBg)}>
                      <Icon className={cn("h-5 w-5", style.icon)} />
                    </div>
                    <h3 className="font-heading font-bold text-slate-900 text-lg">
                      {cat.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm py-1.5 px-3 bg-amber-50/60 text-slate-700 border border-amber-200/60 rounded-lg hover:bg-amber-100 hover:border-amber-300 hover:text-amber-800 hover:scale-105 transition-all duration-200 cursor-default inline-block"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
