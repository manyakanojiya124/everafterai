"use client";

import { useFormContext } from "react-hook-form";

import FormInput from "@/features/memory-companion/components/FromInput";
import { CreateCompanionInput } from "@/features/memory-companion/components/schemas/create-companion";

export default function About() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateCompanionInput>();

  return (
    <div className="space-y-10">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-bold text-stone-900">
          About
        </h2>

        <p className="mt-2 text-stone-500">
          Tell EverAfter AI about this person's personality, interests and life.
        </p>
      </div>

      {/* Form */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Biography */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm font-medium">
            Biography
          </label>

          <textarea
            {...register("biography")}
            rows={5}
            className="w-full rounded-xl border border-stone-300 px-4 py-3"
            placeholder="Write a short biography..."
          />

          {errors.biography && (
            <p className="text-sm text-red-500">
              {errors.biography.message}
            </p>
          )}
        </div>

        {/* Favorite Quote */}
        <div className="md:col-span-2">
          <FormInput
            label="Favorite Quote"
            name="favorite_quote"
            register={register}
          />
        </div>

        {/* Favorite Food */}
        <FormInput
          label="Favorite Food"
          name="favorite_food"
          register={register}
        />

        {/* Favorite Song */}
        <FormInput
          label="Favorite Song"
          name="favorite_song"
          register={register}
        />

        {/* Favorite Color */}
        <FormInput
          label="Favorite Color"
          name="favorite_color"
          register={register}
        />

        {/* Hobbies */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm font-medium">
            Hobbies
          </label>

          <textarea
            {...register("hobbies")}
            rows={4}
            className="w-full rounded-xl border border-stone-300 px-4 py-3"
            placeholder="Reading, travelling, gardening..."
          />
        </div>

        {/* Personality Traits */}
        <div className="md:col-span-2 space-y-2">
          <label className="text-sm font-medium">
            Personality Traits
          </label>

          <textarea
            {...register("personality_traits")}
            rows={3}
            className="w-full rounded-xl border border-stone-300 px-4 py-3"
            placeholder="Kind, Funny, Caring, Honest (comma separated)"
          />

          <p className="text-xs text-stone-500">
            Separate multiple traits using commas.
          </p>
        </div>
      </div>
    </div>
  );
}