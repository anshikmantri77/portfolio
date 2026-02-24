import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  prefix?: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  title,
  prefix,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", className)}>
      {prefix && (
        <div className="font-mono text-sm text-amber-600 font-semibold mb-2">{prefix}</div>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg text-slate-700">{subtitle}</p>
      )}
    </div>
  );
}
