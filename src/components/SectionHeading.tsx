import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  prefix?: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  title,
  prefix,
  subtitle,
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", className)}>
      {prefix && (
        <div className={cn("font-mono text-sm font-semibold mb-2", dark ? "text-amber-400" : "text-amber-600")}>{prefix}</div>
      )}
      <h2 className={cn("font-heading text-3xl font-bold tracking-tight md:text-4xl", dark ? "text-white" : "text-slate-900")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-2 text-lg", dark ? "text-slate-400" : "text-slate-700")}>{subtitle}</p>
      )}
    </div>
  );
}
