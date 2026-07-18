"use client";

import { useState } from "react";
import { FormProvider } from "react-hook-form";
import { useRouter } from "next/navigation";

import { useCreateCompanion } from "@/features/memory-companion/components/hooks/useCreateCompanion";
import { useCreateCompanionMutation } from "@/features/memory-companion/hooks/useCreateCompanionMutation";

import WizardHeader from "@/components/wizard/WizardHeader";
import WizardNavigation from "@/components/wizard/WizardNavigation";

import BasicInfo from "@/components/wizard/steps/BasicInfo";

const TOTAL_STEPS = 4;

export default function CreateCompanionWizard() {
  const methods = useCreateCompanion();

  const router = useRouter();

  const mutation = useCreateCompanionMutation();

  const [step, setStep] = useState(0);

  function next() {
    if (step < TOTAL_STEPS - 1) {
      setStep((current) => current + 1);
    }
  }

  function previous() {
    if (step > 0) {
      setStep((current) => current - 1);
    }
  }

  const submit = methods.handleSubmit(async (values) => {
    try {
      console.log(values);

      await mutation.mutateAsync(values);

      router.push("/companions");
    } catch (error) {
      console.error(error);
      alert("Unable to create companion.");
    }
  });

  return (
    <FormProvider {...methods}>
      <div className="mx-auto w-full max-w-4xl rounded-3xl bg-white p-10 shadow-xl">

        <WizardHeader step={step} />

        <div className="mt-12">

          {step === 0 && <BasicInfo />}

          {step === 1 && (
            <div className="text-center text-2xl font-semibold">
              About Step
            </div>
          )}

          {step === 2 && (
            <div className="text-center text-2xl font-semibold">
              Relationship Step
            </div>
          )}

          {step === 3 && (
            <div className="text-center text-2xl font-semibold">
              Review Step
            </div>
          )}

        </div>

        <WizardNavigation
          step={step}
          total={TOTAL_STEPS}
          previous={previous}
          next={next}
          submit={submit}
        />

      </div>
    </FormProvider>
  );
}