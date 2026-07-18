"use client";

import { useFormContext } from "react-hook-form";

import { CreateCompanionInput } from "@/features/memory-companion/components/schemas/create-companion";

export default function Relationship() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateCompanionInput>();

  return (
    <div className="space-y-10">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-bold text-stone-900">
          Relationship
        </h2>

        <p className="mt-2 text-stone-500">
          Help EverAfter AI understand the relationship between you and this
          person.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Bond Story */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Bond Story
          </label>

          <textarea
            {...register("bond_story")}
            rows={5}
            className="w-full rounded-xl border border-stone-300 px-4 py-3"
            placeholder="Describe your relationship..."
          />

          {errors.bond_story && (
            <p className="text-sm text-red-500">
              {errors.bond_story.message}
            </p>
          )}
        </div>

        {/* Nickname For User */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            What did they call you?
          </label>

          <input
            {...register("nickname_for_user")}
            className="w-full rounded-xl border border-stone-300 px-4 py-3"
            placeholder="e.g. Champ, Beta, Princess..."
          />
        </div>

        {/* Special Memories */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Special Memories
          </label>

          <textarea
            {...register("special_memories")}
            rows={5}
            className="w-full rounded-xl border border-stone-300 px-4 py-3"
            placeholder="Describe memorable moments..."
          />
        </div>

        {/* Topics To Avoid */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Topics To Avoid
          </label>

          <textarea
            {...register("topics_to_avoid")}
            rows={3}
            className="w-full rounded-xl border border-stone-300 px-4 py-3"
            placeholder="Sensitive topics the AI should avoid..."
          />
        </div>

        {/* Communication Style */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Communication Style
          </label>

          <textarea
            {...register("communication_style")}
            rows={4}
            className="w-full rounded-xl border border-stone-300 px-4 py-3"
            placeholder="How did they usually communicate?"
          />
        </div>

        {/* Speaking Style */}
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Speaking Style
          </label>

          <textarea
            {...register("speaking_style")}
            rows={4}
            className="w-full rounded-xl border border-stone-300 px-4 py-3"
            placeholder="Calm, soft-spoken, humorous, energetic..."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Humor Level */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Humor Level
            </label>

            <select
              {...register("humor_level")}
              className="w-full rounded-xl border border-stone-300 px-4 py-3"
            >
              <option value="">Select</option>
              <option value="Very Low">Very Low</option>
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
              <option value="Very High">Very High</option>
            </select>
          </div>

          {/* Emotional Tone */}
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Emotional Tone
            </label>

            <select
              {...register("emotional_tone")}
              className="w-full rounded-xl border border-stone-300 px-4 py-3"
            >
              <option value="">Select</option>
              <option value="Warm">Warm</option>
              <option value="Calm">Calm</option>
              <option value="Friendly">Friendly</option>
              <option value="Cheerful">Cheerful</option>
              <option value="Serious">Serious</option>
              <option value="Supportive">Supportive</option>
            </select>
          </div>
        </div>

        {/* Privacy */}
        <div className="flex items-center gap-3 rounded-xl border border-stone-200 p-4">
          <input
            type="checkbox"
            {...register("is_public")}
            className="h-5 w-5"
          />

          <div>
            <h3 className="font-medium">
              Public Companion
            </h3>

            <p className="text-sm text-stone-500">
              Allow this companion to be shared publicly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}