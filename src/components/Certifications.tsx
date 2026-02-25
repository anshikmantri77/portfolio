"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { certifications } from "@/data/certifications";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", label: "All Certifications" },
  { id: "security", label: "Security" },
  { id: "aws", label: "AWS" },
  { id: "ai", label: "AI" },
  { id: "infrastructure", label: "Infrastructure" },
] as const;

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered = activeFilter === "all"
    ? certifications
    : certifications.filter((c) => c.categories?.includes(activeFilter));

  return (
    <section
      id="certifications"
      ref={ref}
      className="scroll-mt-20 px-6 py-24 relative overflow-hidden bg-gradient-to-b from-white via-cyan-50/20 to-slate-50/30"
    >
      <div className="mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Certifications"
            subtitle="Verified credentials — click to view on Credly"
          />
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 10 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={cn(
                "px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                activeFilter === cat.id
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              )}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 1, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <a
                href={cert.credlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group"
              >
                <div className="h-full rounded-xl border-2 border-slate-200 bg-gradient-to-b from-white to-amber-50/30 p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl flex items-center justify-center mb-4 overflow-hidden bg-white border border-slate-200">
                    {cert.badgeImageUrl ? (
                      <img
                        src={cert.badgeImageUrl}
                        alt={cert.name}
                        className="w-full h-full object-contain"
                        loading="eager"
                        decoding="async"
                      />
                    ) : (
                      <Shield className="h-12 w-12 text-amber-700" />
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-base mb-1 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-slate-500 mb-2">
                    {cert.issuer}
                  </p>
                  {cert.abbreviation && (
                    <span className="font-mono text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                      {cert.abbreviation}
                    </span>
                  )}
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-amber-600">
                    View on Credly <ExternalLink size={12} />
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
