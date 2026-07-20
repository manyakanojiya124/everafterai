import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "primary" | "muted" | "success" | "danger";
  className?: string;
}) {
  const tones: Record<string, string> = {
    neutral: "bg-sunken text-ink",
    primary: "bg-primary/12 text-primary-hover",
    muted: "bg-transparent text-ink-muted border border-line",
    success: "bg-success/12 text-success",
    danger: "bg-danger/10 text-danger",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
