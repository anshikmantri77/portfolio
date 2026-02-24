import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-medium transition-colors",
        variant === "default" &&
          "bg-amber-50 text-amber-800 border border-amber-200",
        variant === "primary" &&
          "bg-amber-100 text-amber-800 border border-amber-300",
        variant === "secondary" &&
          "bg-amber-50 text-amber-800 border border-amber-200",
        variant === "outline" &&
          "border border-amber-200 text-amber-800 bg-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
