"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Layers, Bot, Activity, Shield, Lock, Wrench, GitBranch, Database } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./ui/Button";
import { articles } from "@/data/articles";

const publicationVariants: Record<string, "primary" | "secondary" | "default"> = {
  "AWS In Plain English": "primary",
  "Towards AWS": "secondary",
  "DevSecOps Community": "default",
};

const topicGradients: Record<string, string> = {
  architecture: "from-blue-100 via-indigo-50 to-purple-100",
  ai: "from-amber-100 via-orange-50 to-red-100",
  devops: "from-green-100 via-emerald-50 to-teal-100",
  security: "from-slate-100 via-blue-50 to-cyan-100",
  migration: "from-violet-100 via-purple-50 to-pink-100",
};

const articleIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "1": Layers,
  "2": Bot,
  "3": Activity,
  "4": Shield,
  "5": Lock,
  "6": Wrench,
  "7": GitBranch,
  "8": Database,
  "9": Shield,
};

export function Articles() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="articles"
      ref={ref}
      className="scroll-mt-20 px-6 py-24 bg-gradient-to-b from-slate-50 via-purple-50/20 to-slate-50"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading
            title="Latest Articles"
            prefix="~/articles$"
            subtitle="AWS In Plain English, Towards AWS & DevSecOps Community — 3M+ monthly readers"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 1, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full group"
              >
                <div className="h-full flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:border-amber-300 hover:-translate-y-1">
                  <div className="aspect-video w-full relative overflow-hidden">
                    {article.coverImageUrl ? (
                      <img
                        src={article.coverImageUrl}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${topicGradients[article.topic ?? "devops"]}`}>
                        {(() => {
                          const Icon = articleIcons[article.id] ?? Database;
                          return (
                            <div className="w-24 h-24 rounded-full bg-white/60 flex items-center justify-center">
                              <Icon className="h-14 w-14 text-amber-600" />
                            </div>
                          );
                        })()}
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="bg-amber-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {article.publication}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-heading font-bold text-slate-900 text-lg mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-slate-600 mb-3 flex-1 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="flex items-center gap-3 text-sm text-slate-500">
                        <span>{article.date}</span>
                        {article.readTimeMin != null && (
                          <span>{article.readTimeMin} min read</span>
                        )}
                      </div>
                      <span className="text-sm text-amber-600 font-medium flex items-center gap-1 group-hover:text-amber-700">
                        Read on Medium
                        <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="https://medium.com/@bhavi.28.mantri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary">View All on Medium</Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
