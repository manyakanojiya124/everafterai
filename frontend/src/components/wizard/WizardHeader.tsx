"use client";

interface Props {
  step: number;
}

const labels = [
  "Basic",
  "About",
  "Relationship",
  "Review",
];

export default function WizardHeader({
  step,
}: Props) {
  return (
    <div>

      <div className="mb-8 flex items-center justify-between">

        {labels.map((label, index) => {

          const active = index <= step;

          return (

            <div
              key={label}
              className="flex flex-1 flex-col items-center"
            >

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-semibold transition

                ${
                  active
                    ? "border-black bg-black text-white"
                    : "border-stone-300 bg-white text-stone-500"
                }`}
              >

                {index + 1}

              </div>

              <p
                className={`mt-3 text-sm

                ${
                  active
                    ? "font-semibold text-black"
                    : "text-stone-500"
                }`}
              >

                {label}

              </p>

            </div>

          );

        })}

      </div>

      <div className="h-2 overflow-hidden rounded-full bg-stone-200">

        <div
          className="h-full rounded-full bg-black transition-all duration-500"
          style={{
            width: `${((step + 1) / 4) * 100}%`,
          }}
        />

      </div>

    </div>
  );
}