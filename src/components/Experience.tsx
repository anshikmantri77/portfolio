"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { experience } from "@/data/experience";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-20 px-6 py-24 relative overflow-hidden bg-gradient-to-b from-emerald-50/20 via-white to-amber-50/20"
    >
      <div className="mx-auto max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Experience"
            prefix="~/experience$"
            subtitle="From audit to automation"
          />
        </motion.div>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0 border-l-2 border-amber-300 md:left-8" />

          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-12 md:pl-16"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-1 top-6 w-3 h-3 rounded-full ring-4 ring-amber-100 md:left-6 ${
                  item.isTransition
                    ? "bg-slate-400"
                    : "bg-amber-500"
                }`}
              />

              <Card
                hover={!item.isTransition}
                className={cn(
                  item.isTransition ? "bg-slate-50 border border-dashed border-slate-300 rounded-lg" : "border-l-4",
                  !item.isTransition && index % 3 === 0 && "border-l-blue-500",
                  !item.isTransition && index % 3 === 1 && "border-l-amber-500",
                  !item.isTransition && index % 3 === 2 && "border-l-emerald-500"
                )}
              >
                {!item.isTransition && item.company && (
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="font-heading text-xl font-bold text-slate-900">
                      {item.company}
                    </h3>
                    <span className="text-sm text-slate-500">
                      {item.location}
                    </span>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <span
                    className={`font-medium ${
                      item.isTransition
                        ? "text-slate-600 italic"
                        : "text-amber-600"
                    }`}
                  >
                    {item.role}
                  </span>
                  {item.dates && (
                    <span className="text-sm text-slate-500">
                      {item.dates}
                    </span>
                  )}
                </div>
                {item.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="bg-amber-50 text-amber-800 border-amber-200 text-xs font-medium px-3 py-1 rounded-full">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
                {item.bullets.length > 0 && (
                  <>
                    {!item.isTransition && (
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-2">
                        Key contributions
                      </h4>
                    )}
                    <ul className="space-y-2.5 list-none">
                      {item.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-700 leading-relaxed flex gap-2.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0 inline-block" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
