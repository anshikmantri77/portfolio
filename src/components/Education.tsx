"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { education } from "@/data/education";

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="education"
      ref={ref}
      className="scroll-mt-20 px-6 py-24 relative"
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

        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 1, x: index % 2 === 0 ? -24 : 24 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: index % 2 === 0 ? -24 : 24 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative"
            >
              <div className="rounded-xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm transition-all duration-300 hover:shadow-md hover:border-amber-300">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <GraduationCap className="h-8 w-8 text-amber-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-slate-900 mb-1">
                      {item.institution}
                    </h3>
                    <p className="text-amber-600 font-semibold text-lg mb-3">
                      {item.degree} in {item.field}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-700 mb-4">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-amber-600" />
                        {item.dates}
                      </span>
                      {item.gpa && (
                        <span className="inline-flex items-center gap-1.5">
                          <Award className="h-4 w-4 text-amber-600" />
                          GPA: {item.gpa}
                        </span>
                      )}
                    </div>
                    {item.highlights && item.highlights.length > 0 && (
                      <ul className="space-y-2">
                        {item.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-slate-700"
                          >
                            <span className="text-amber-700 mt-1.5">▸</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
