"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { certifications } from "@/data/certifications";

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="certifications"
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
            title="Certifications"
            subtitle="Verified credentials — click to view on Credly"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
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
                <div className="h-full rounded-xl border-2 border-slate-200 bg-white p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-amber-400 hover:shadow-lg">
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
