"use client";

import { useFormContext } from "react-hook-form";

import { TextField, SelectField } from "@/components/ui/field";
import {
  CompanionFormValues,
  GENDER_OPTIONS,
  RELATIONSHIP_OPTIONS,
} from "@/components/wizard/schema";

export function BasicInfoStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CompanionFormValues>();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-medium text-ink">Basic information</h2>
        <p className="mt-1 text-sm text-ink-muted">
          Tell us about the person whose memory you'd like to preserve.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Full name"
          error={errors.full_name?.message}
          {...register("full_name")}
        />
        <TextField label="Nickname" {...register("nickname")} />

        <SelectField
          label="Relationship"
          options={RELATIONSHIP_OPTIONS}
          error={errors.relationship?.message}
          {...register("relationship")}
        />
        <SelectField label="Gender" options={GENDER_OPTIONS} {...register("gender")} />

        <TextField label="Birth date" type="date" {...register("birth_date")} />
        <TextField label="Date of passing" type="date" {...register("passing_date")} />

        <TextField label="Occupation" {...register("occupation")} />
        <TextField label="Languages" placeholder="English, Hindi…" {...register("languages")} />

        <TextField label="Country" {...register("country")} />
        <TextField label="City" {...register("city")} />
      </div>
    </div>
  );
}
