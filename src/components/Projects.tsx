"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { projects } from "@/data/projects";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      className="scroll-mt-20 px-6 py-24"
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
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 1, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                hover
                className={project.featured ? "border-amber-400 shadow-lg" : ""}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1 space-y-5">
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

                    {project.outcomes && project.outcomes.length > 0 && (
                      <ul className="list-none space-y-1.5">
                        {project.outcomes.map((outcome, i) => (
                          <li key={i} className="flex gap-2 text-sm text-slate-700">
                            <span className="text-green-500 mt-0.5 shrink-0">●</span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
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
                          className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium bg-green-500 text-slate-900 hover:opacity-90 transition-opacity shadow-md"
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
                          className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 hover:opacity-80 transition-opacity"
                        >
                          <ExternalLink size={16} />
                          Read Article
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 hover:opacity-80 transition-opacity"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    </div>
                  </div>

                  <div className="lg:w-80 flex-shrink-0 space-y-3">
                    <div className="rounded-lg border border-dashed border-slate-200 bg-slate-100 aspect-video flex items-center justify-center min-h-[140px]">
                      <span className="text-xs text-slate-700 font-medium">Screenshot / GIF placeholder</span>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-slate-100 p-4 font-mono text-xs overflow-x-auto">
                      <code className="text-slate-700">
                        {`// ${project.name}\n`}
                        {`// ${project.techStack.slice(0, 3).join(" • ")}`}
                      </code>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
