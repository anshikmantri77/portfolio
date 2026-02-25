"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const featuredProjects = projects.filter(
  (p) => p.id === "aegis-iam" || p.id === "nova-sentinel" || p.id === "aws-security-lab"
);

const moreProjects = projects.filter(
  (p) => !["aegis-iam", "nova-sentinel", "aws-security-lab"].includes(p.id)
);

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      className="scroll-mt-20 px-6 py-24 bg-gradient-to-b from-amber-50/50 via-orange-50/20 to-white"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading title="Projects" prefix="~/projects$" />
        </motion.div>

        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 1, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                hover
                className={cn(
                  project.featured ? "border-l-4 shadow-md" : "",
                  project.id === "aegis-iam" && "border-l-4 border-amber-500",
                  project.id === "nova-sentinel" && "border-l-4 border-blue-500",
                  project.id === "aws-security-lab" && "border-l-4 border-emerald-600"
                )}
              >
                <div className="space-y-5">
                  {project.metricHeadline && (
                    <p className="font-heading text-xl font-bold text-amber-600 leading-tight">
                      {project.metricHeadline}
                    </p>
                  )}
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-heading text-2xl font-bold text-slate-900">
                      {project.name}
                    </h3>
                    {project.featured && (
                      <Badge variant="primary">Featured</Badge>
                    )}
                    {project.label && (
                      <span className="text-xs text-slate-700 font-mono">
                        {project.label}
                      </span>
                    )}
                  </div>

                  {project.overview && (
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {project.overview}
                    </p>
                  )}

                  {project.features && project.features.length > 0 && (
                    <>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-3">
                        Highlights
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex gap-2 text-sm text-slate-700">
                            <span className="text-green-600 mt-0.5 shrink-0">✓</span>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-200">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-colors shadow-sm"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.articleUrl && (
                      <a
                        href={project.articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Read Article
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Compact project cards for article-based projects */}
        <div className="mt-16">
          <h3 className="font-heading text-xl font-bold text-slate-900 mb-6">
            More Projects & Technical Writeups
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {moreProjects.map((project, index) => (
              <a
                key={project.id}
                href={project.articleUrl || project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group block rounded-xl border border-slate-200 p-5 hover:shadow-md transition-all duration-300 border-l-4",
                  ["border-l-blue-500 bg-gradient-to-r from-blue-50/60 to-white hover:border-blue-400",
                   "border-l-violet-500 bg-gradient-to-r from-violet-50/60 to-white hover:border-violet-400",
                   "border-l-emerald-500 bg-gradient-to-r from-emerald-50/60 to-white hover:border-emerald-400",
                   "border-l-amber-500 bg-gradient-to-r from-amber-50/60 to-white hover:border-amber-400",
                   "border-l-cyan-500 bg-gradient-to-r from-cyan-50/60 to-white hover:border-cyan-400",
                   "border-l-rose-500 bg-gradient-to-r from-rose-50/60 to-white hover:border-rose-400"][index % 6]
                )}
              >
                <h4 className="font-heading font-bold text-slate-900 text-base mb-2 group-hover:text-amber-600 transition-colors">
                  {project.name}
                </h4>
                <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                  {project.overview || project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-amber-600 font-medium">
                  {project.articleUrl ? "Read Article →" : "View on GitHub →"}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
