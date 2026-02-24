"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cloud, Server, Cpu, Code, Shield } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Badge } from "./ui/Badge";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Cloud & Security": Cloud,
  "AWS Services": Server,
  "AI & GenAI": Cpu,
  "Programming & Tools": Code,
  "Compliance": Shield,
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = skills[activeTab];

  return (
    <section
      id="skills"
      ref={ref}
      className="scroll-mt-20 px-6 py-24 bg-slate-50 relative overflow-hidden"
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

        {/* Mobile: Tabs + single content */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 1, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 10 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            {skills.map((cat, index) => {
              const Icon = categoryIcons[cat.category] ?? Code;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                    activeTab === index
                      ? "bg-amber-500 text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-amber-300"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {cat.category}
                </button>
              );
            })}
          </motion.div>
          <motion.div
            key={activeTab}
            initial={{ opacity: 1, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="rounded-xl border border-slate-200 bg-white p-5 min-h-[160px]"
          >
            <div className="flex items-center gap-3 mb-3">
              {(() => {
                const Icon = categoryIcons[activeCategory.category] ?? Code;
                return (
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-2">
                    <Icon className="h-5 w-5 text-amber-600" />
                  </div>
                );
              })()}
              <h3 className="font-heading text-lg font-semibold text-slate-900">
                {activeCategory.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {activeCategory.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-sm py-1.5 px-3 bg-slate-100 text-slate-800 border-slate-200">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Desktop: All categories expanded in grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((cat, index) => {
            const Icon = categoryIcons[cat.category] ?? Code;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 1, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 12 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-xl border border-slate-200 bg-white p-5 hover:border-amber-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-2">
                    <Icon className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-900">
                    {cat.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm py-1.5 px-3 bg-slate-100 text-slate-800 border-slate-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
