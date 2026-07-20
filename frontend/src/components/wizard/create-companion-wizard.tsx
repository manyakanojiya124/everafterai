"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { WizardHeader } from "@/components/wizard/wizard-header";
import { WizardNavigation } from "@/components/wizard/wizard-nav";
import { BasicInfoStep } from "@/components/wizard/steps/basic-info";
import { AboutStep } from "@/components/wizard/steps/about";
import { RelationshipStep } from "@/components/wizard/steps/relationship-step";
import { ReviewStep } from "@/components/wizard/steps/review";
import {
  CompanionFormValues,
  companionFormDefaults,
  companionFormSchema,
  traitsToArray,
} from "@/components/wizard/schema";
import { useCreateCompanion } from "@/hooks/use-companions";
import { toast } from "@/components/ui/toaster";

const TOTAL_STEPS = 4;

const STEP_FIELDS: (keyof CompanionFormValues)[][] = [
  ["full_name", "relationship"],
  [],
  [],
  [],
];

export function CreateCompanionWizard() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const mutation = useCreateCompanion();

  const methods = useForm<CompanionFormValues>({
    resolver: zodResolver(companionFormSchema),
    mode: "onChange",
    defaultValues: companionFormDefaults,
  });

  async function next() {
    const valid = await methods.trigger(STEP_FIELDS[step]);
    if (valid) setStep((current) => Math.min(current + 1, TOTAL_STEPS - 1));
  }

  function previous() {
    setStep((current) => Math.max(current - 1, 0));
  }

  const onSubmit = methods.handleSubmit(async (values) => {
    try {
      const created = await mutation.mutateAsync({
        ...values,
        personality_traits: traitsToArray(values.personality_traits),
      });
      toast.success(`${created.full_name}'s memory space is ready.`);
      router.push(`/companions/${created.id}`);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Unable to create this companion.",
      );
    }
  });

  return (
    <FormProvider {...methods}>
      <div className="mx-auto w-full max-w-3xl rounded-2xl border border-line bg-surface p-6 shadow-[0_8px_24px_rgba(43,35,37,0.06)] sm:p-10">
        <WizardHeader step={step} />

        <div className="mt-10">
          {step === 0 && <BasicInfoStep />}
          {step === 1 && <AboutStep />}
          {step === 2 && <RelationshipStep />}
          {step === 3 && <ReviewStep />}
        </div>

        <WizardNavigation
          step={step}
          total={TOTAL_STEPS}
          isSubmitting={mutation.isPending}
          onPrevious={previous}
          onNext={next}
          onSubmit={onSubmit}
        />
      </div>
    </FormProvider>
  );
}
