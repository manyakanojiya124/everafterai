import { cn } from "@/lib/utils";

const STEP_LABELS = ["Basic", "About", "Relationship", "Review"];

export function WizardHeader({ step }: { step: number }) {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        {STEP_LABELS.map((label, index) => {
          const active = index <= step;
          return (
            <div key={label} className="flex flex-1 flex-col items-center">
              <div
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition-colors",
                  active
                    ? "border-primary bg-primary text-white"
                    : "border-line bg-surface text-ink-muted",
                )}
              >
                {index + 1}
              </div>
              <p
                className={cn(
                  "mt-2 hidden text-xs sm:block",
                  active ? "font-medium text-ink" : "text-ink-muted",
                )}
              >
                {label}
              </p>
            </div>
          );
        })}
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-sunken">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${((step + 1) / STEP_LABELS.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
