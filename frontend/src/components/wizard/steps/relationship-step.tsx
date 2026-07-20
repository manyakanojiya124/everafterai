"use client";

import { useFormContext } from "react-hook-form";

import { SelectField, TextAreaField, TextField } from "@/components/ui/field";
import {
  CompanionFormValues,
  EMOTIONAL_TONE_OPTIONS,
  HUMOR_LEVEL_OPTIONS,
} from "@/components/wizard/schema";

export function RelationshipStep() {
  const { register } = useFormContext<CompanionFormValues>();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-medium text-ink">Your relationship</h2>
        <p className="mt-1 text-sm text-ink-muted">
          Help EverAfter understand the bond between you two.
        </p>
      </div>

      <div className="space-y-5">
        <TextAreaField
          label="Your story together"
          rows={4}
          placeholder="Describe your relationship…"
          {...register("bond_story")}
        />

        <TextField
          label="What did they call you?"
          placeholder="e.g. Champ, Beta, Princess…"
          {...register("nickname_for_user")}
        />

        <TextAreaField
          label="Special memories"
          rows={4}
          placeholder="A few memorable moments…"
          {...register("special_memories")}
        />

        <TextAreaField
          label="Topics to avoid"
          rows={2}
          placeholder="Anything sensitive the companion should steer clear of…"
          {...register("topics_to_avoid")}
        />

        <TextAreaField
          label="Communication style"
          rows={3}
          placeholder="How did they usually communicate?"
          {...register("communication_style")}
        />

        <TextAreaField
          label="Speaking style"
          rows={3}
          placeholder="Calm, soft-spoken, humorous, energetic…"
          {...register("speaking_style")}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <SelectField
            label="Humor level"
            options={HUMOR_LEVEL_OPTIONS}
            {...register("humor_level")}
          />
          <SelectField
            label="Emotional tone"
            options={EMOTIONAL_TONE_OPTIONS}
            {...register("emotional_tone")}
          />
        </div>

        <label className="flex items-start gap-3 rounded-xl border border-line p-4">
          <input type="checkbox" className="mt-1 h-4 w-4" {...register("is_public")} />
          <span>
            <span className="block font-medium text-ink">Public companion</span>
            <span className="block text-sm text-ink-muted">
              Allow this companion to be shared publicly.
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
