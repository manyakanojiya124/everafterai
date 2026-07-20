import { ReactNode } from "react";

export function EmptyState({
  icon,
  title,
  description,
  action,
}: {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-8 py-16 text-center">
      {icon && (
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-sunken text-primary">
          {icon}
        </div>
      )}
      <h2 className="font-serif text-2xl font-medium text-ink">{title}</h2>
      {description && (
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
