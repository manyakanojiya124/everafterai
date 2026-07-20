"use client";

import { useFormContext } from "react-hook-form";

import { TextAreaField, TextField } from "@/components/ui/field";
import { CompanionFormValues } from "@/components/wizard/schema";

export function AboutStep() {
  const { register } = useFormContext<CompanionFormValues>();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-medium text-ink">About them</h2>
        <p className="mt-1 text-sm text-ink-muted">
          Small details help EverAfter sound more like them.
        </p>
      </div>

      <div className="space-y-5">
        <TextAreaField
          label="Biography"
          rows={5}
          placeholder="A short life story…"
          {...register("biography")}
        />

        <TextAreaField
          label="Favorite quote or saying"
          rows={2}
          placeholder="Something they always used to say…"
          {...register("favorite_quote")}
        />

        <div className="grid gap-5 sm:grid-cols-3">
          <TextField label="Favorite food" {...register("favorite_food")} />
          <TextField label="Favorite song" {...register("favorite_song")} />
          <TextField label="Favorite color" {...register("favorite_color")} />
        </div>

        <TextAreaField
          label="Hobbies & interests"
          rows={3}
          placeholder="Reading, gardening, travelling…"
          {...register("hobbies")}
        />

        <TextAreaField
          label="Personality traits"
          rows={2}
          placeholder="Kind, funny, caring, honest (comma separated)"
          hint="Separate multiple traits with commas."
          {...register("personality_traits")}
        />
      </div>
    </div>
  );
}
