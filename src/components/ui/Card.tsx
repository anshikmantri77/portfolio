"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
  hover?: boolean;
}

export function Card({
  children,
  className,
  hover = true,
}: CardProps) {
  const baseClasses =
    "rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300";
  const hoverClasses = hover
    ? "hover:shadow-md hover:border-amber-300"
    : "";

  return (
    <motion.div
      className={cn(baseClasses, hoverClasses, className)}
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
