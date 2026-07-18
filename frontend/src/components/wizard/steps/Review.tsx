"use client";

import { useFormContext } from "react-hook-form";

import { CreateCompanionInput } from "@/features/memory-companion/components/schemas/create-companion";

export default function Review() {
  const { watch } = useFormContext<CreateCompanionInput>();

  const values = watch();

  const personalityTraits = Array.isArray(values.personality_traits)
    ? values.personality_traits.join(", ")
    : values.personality_traits;

  return (
    <div className="space-y-10">
      {/* Heading */}
      <div>
        <h2 className="text-3xl font-bold text-stone-900">
          Review Companion
        </h2>

        <p className="mt-2 text-stone-500">
          Please review the information before creating your companion.
        </p>
      </div>

      {/* Basic Information */}
      <section className="rounded-2xl border border-stone-200 bg-white p-6">
        <h3 className="mb-6 text-xl font-semibold text-stone-900">
          Basic Information
        </h3>

        <div className="grid gap-4 md:grid-cols-2">
          <ReviewItem label="Full Name" value={values.full_name} />
          <ReviewItem label="Nickname" value={values.nickname} />
          <ReviewItem label="Relationship" value={values.relationship} />
          <ReviewItem label="Gender" value={values.gender} />
          <ReviewItem label="Birth Date" value={values.birth_date} />
          <ReviewItem label="Passing Date" value={values.passing_date} />
          <ReviewItem label="Occupation" value={values.occupation} />
          <ReviewItem label="Country" value={values.country} />
          <ReviewItem label="City" value={values.city} />
          <ReviewItem label="Languages" value={values.languages} />
        </div>
      </section>

      {/* About */}
      <section className="rounded-2xl border border-stone-200 bg-white p-6">
        <h3 className="mb-6 text-xl font-semibold text-stone-900">
          About
        </h3>

        <div className="space-y-5">
          <ReviewBlock
            label="Biography"
            value={values.biography}
          />

          <ReviewItem
            label="Favorite Quote"
            value={values.favorite_quote}
          />

          <ReviewItem
            label="Favorite Food"
            value={values.favorite_food}
          />

          <ReviewItem
            label="Favorite Song"
            value={values.favorite_song}
          />

          <ReviewItem
            label="Favorite Color"
            value={values.favorite_color}
          />

          <ReviewBlock
            label="Hobbies"
            value={values.hobbies}
          />

          <ReviewBlock
            label="Personality Traits"
            value={personalityTraits}
          />
        </div>
      </section>

      {/* Relationship */}
      <section className="rounded-2xl border border-stone-200 bg-white p-6">
        <h3 className="mb-6 text-xl font-semibold text-stone-900">
          Relationship
        </h3>

        <div className="space-y-5">
          <ReviewBlock
            label="Bond Story"
            value={values.bond_story}
          />

          <ReviewItem
            label="Nickname For User"
            value={values.nickname_for_user}
          />

          <ReviewBlock
            label="Special Memories"
            value={values.special_memories}
          />

          <ReviewBlock
            label="Topics To Avoid"
            value={values.topics_to_avoid}
          />

          <ReviewBlock
            label="Communication Style"
            value={values.communication_style}
          />

          <ReviewBlock
            label="Speaking Style"
            value={values.speaking_style}
          />

          <ReviewItem
            label="Humor Level"
            value={values.humor_level}
          />

          <ReviewItem
            label="Emotional Tone"
            value={values.emotional_tone}
          />

          <ReviewItem
            label="Visibility"
            value={values.is_public ? "Public" : "Private"}
          />
        </div>
      </section>

      {/* Footer */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
        <p className="text-sm text-emerald-800">
          Click <strong>Create Companion</strong> to save this companion and
          continue to the next step of EverAfter AI.
        </p>
      </div>
    </div>
  );
}

type ReviewItemProps = {
  label: string;
  value?: string | boolean | null;
};

function ReviewItem({ label, value }: ReviewItemProps) {
  return (
    <div>
      <p className="text-sm text-stone-500">{label}</p>

      <p className="mt-1 font-medium text-stone-900">
        {value || "-"}
      </p>
    </div>
  );
}

type ReviewBlockProps = {
  label: string;
  value?: string | null;
};

function ReviewBlock({ label, value }: ReviewBlockProps) {
  return (
    <div>
      <p className="text-sm text-stone-500">{label}</p>

      <div className="mt-2 rounded-xl border border-stone-200 bg-stone-50 p-4 whitespace-pre-wrap text-stone-900">
        {value || "-"}
      </div>
    </div>
  );
}