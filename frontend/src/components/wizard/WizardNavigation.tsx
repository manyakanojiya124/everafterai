interface Props {
  step: number;
  total: number;
  next: () => void;
  previous: () => void;
  submit: () => void;
}

export default function WizardNavigation({
  step,
  total,
  next,
  previous,
  submit,
}: Props) {
  return (
    <div className="mt-10 flex justify-between">

      <button
        disabled={step === 0}
        onClick={previous}
        className="rounded-xl border px-6 py-3 disabled:opacity-40"
      >
        Previous
      </button>

      {step === total - 1 ? (
        <button
          onClick={submit}
          className="rounded-xl bg-black px-8 py-3 text-white"
        >
          Create Companion
        </button>
      ) : (
        <button
          onClick={next}
          className="rounded-xl bg-black px-8 py-3 text-white"
        >
          Continue
        </button>
      )}

    </div>
  );
}