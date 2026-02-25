"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { education } from "@/data/education";
import { cn } from "@/lib/utils";

const cardAccents = [
  { border: "border-l-4 border-blue-500", bg: "from-blue-50/70", iconBg: "bg-blue-100 border-blue-200", icon: "text-blue-700" },
  { border: "border-l-4 border-violet-500", bg: "from-violet-50/70", iconBg: "bg-violet-100 border-violet-200", icon: "text-violet-700" },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="education"
      ref={ref}
      className="scroll-mt-20 px-6 py-24 relative overflow-hidden bg-gradient-to-b from-emerald-50/30 via-white to-slate-50/30"
    >
      <div className="mx-auto max-w-5xl relative">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Education"
            prefix="~/education$"
            subtitle="Academic background"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, index) => {
            const accent = cardAccents[index % 2];
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 1, x: index % 2 === 0 ? -24 : 24 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: index % 2 === 0 ? -24 : 24 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative"
              >
                <div
                  className={cn(
                    "rounded-2xl border border-slate-200 p-8 md:p-10 min-h-[280px] flex flex-col shadow-sm transition-all duration-300 hover:shadow-lg bg-gradient-to-br",
                    accent.bg,
                    "to-white",
                    accent.border
                  )}
                >
                  <div className="flex gap-5 flex-1">
                    <div
                      className={cn(
                        "flex-shrink-0 w-14 h-14 rounded-xl border flex items-center justify-center transition-transform group-hover:scale-105",
                        accent.iconBg
                      )}
                    >
                      <GraduationCap className={cn("h-7 w-7", accent.icon)} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-slate-900 mb-2">
                        {item.institution}
                      </h3>
                      <p className="font-semibold text-slate-800 mb-2">
                        <span className={cn(index === 0 ? "text-blue-600" : "text-violet-600")}>
                          {item.degree} in {item.field}
                        </span>
                      </p>
                      <div className="flex items-center gap-2 text-sm text-slate-600 mb-4">
                        <Calendar className={cn("h-4 w-4", index === 0 ? "text-blue-500" : "text-violet-500")} />
                        <span>{item.dates}</span>
                        {item.gpa && (
                          <>
                            <span className="text-slate-400">·</span>
                            <span>{item.gpa}</span>
                          </>
                        )}
                      </div>
                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="space-y-2.5">
                          {item.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2.5 text-slate-700 text-sm"
                            >
                              <Award className={cn("h-4 w-4 flex-shrink-0 mt-0.5", index === 0 ? "text-blue-500" : "text-violet-500")} />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
