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

const categoryStyles: Record<string, { gradient: string; border: string; icon: string; badge: string }> = {
  "Cloud & Security": { gradient: "from-blue-500 to-cyan-500", border: "border-blue-200", icon: "text-blue-600", badge: "bg-blue-50 text-blue-700 border-blue-200" },
  "AWS Services": { gradient: "from-indigo-500 to-purple-500", border: "border-indigo-200", icon: "text-indigo-600", badge: "bg-indigo-50 text-indigo-700 border-indigo-200" },
  "AI & GenAI": { gradient: "from-amber-500 to-orange-500", border: "border-amber-200", icon: "text-amber-600", badge: "bg-amber-50 text-amber-700 border-amber-200" },
  "Programming & Tools": { gradient: "from-emerald-500 to-teal-500", border: "border-emerald-200", icon: "text-emerald-600", badge: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  "Compliance": { gradient: "from-violet-500 to-purple-500", border: "border-violet-200", icon: "text-violet-600", badge: "bg-violet-50 text-violet-700 border-violet-200" },
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
                <div className={cn(
                  "h-full rounded-2xl overflow-hidden border bg-white shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-300/40 transition-all duration-300",
                  style.border
                )}>
                  {/* Gradient header strip */}
                  <div className={cn(
                    "px-6 py-4 flex items-center gap-3 bg-gradient-to-r",
                    style.gradient
                  )}>
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-white text-lg">
                      {cat.category}
                    </h3>
                  </div>
                  {/* Skills - clean pill layout */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className={cn(
                            "text-xs font-medium py-2 px-3 rounded-lg border transition-all duration-200 hover:scale-105 cursor-default",
                            style.badge
                          )}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
