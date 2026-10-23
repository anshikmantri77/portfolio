"use client";

import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

const featuredProjects = projects.filter(
  (p) => p.id === "aegis-iam" || p.id === "nova-sentinel" || p.id === "aws-security-lab"
);

const moreProjects = projects.filter(
  (p) => !["aegis-iam", "nova-sentinel", "aws-security-lab"].includes(p.id)
);

function FeaturedProjectCard({
  project,
  index,
  sectionInView,
}: {
  project: Project;
  index: number;
  sectionInView: boolean;
}) {
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { amount: 0.25 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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

          {/* Screenshot — visible only when this project is in view; collapses when scrolling away */}
          {project.screenshotUrl && (
            <AnimatePresence mode="wait">
              {isCardInView && (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative group rounded-lg overflow-hidden border border-slate-200 w-full h-[420px] sm:h-[500px] md:h-[580px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.screenshotUrl}
                      alt={`${project.name} interface`}
                      className={cn(
                        "absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-[1.02]",
                        project.id === "aws-security-lab"
                          ? "object-contain object-top"
                          : "object-cover object-top"
                      )}
                      loading="lazy"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="projects"
      ref={ref}
      className="scroll-mt-20 px-6 py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading title="Projects" prefix="~/projects$" />
        </motion.div>

        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={index}
              sectionInView={isInView}
            />
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
                href={project.articleUrl || project.liveUrl || project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group block rounded-xl border border-slate-200 p-5 hover:shadow-md transition-all duration-300 border-l-4 bg-white",
                  ["border-l-blue-500 hover:border-blue-400",
                   "border-l-violet-500 hover:border-violet-400",
                   "border-l-emerald-500 hover:border-emerald-400",
                   "border-l-amber-500 hover:border-amber-400",
                   "border-l-cyan-500 hover:border-cyan-400",
                   "border-l-rose-500 hover:border-rose-400"][index % 6]
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
                  {project.articleUrl
                    ? "Read Article →"
                    : project.liveUrl
                      ? "View Live →"
                      : "View on GitHub →"}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
