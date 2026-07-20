import { Button } from "@/components/ui/button";

export function WizardNavigation({
  step,
  total,
  isSubmitting,
  onPrevious,
  onNext,
  onSubmit,
}: {
  step: number;
  total: number;
  isSubmitting: boolean;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
}) {
  const isLast = step === total - 1;

  return (
    <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
      <Button type="button" variant="secondary" disabled={step === 0} onClick={onPrevious}>
        Previous
      </Button>

      {isLast ? (
        <Button type="button" isLoading={isSubmitting} onClick={onSubmit}>
          Create companion
        </Button>
      ) : (
        <Button type="button" onClick={onNext}>
          Continue
        </Button>
      )}
    </div>
  );
}
