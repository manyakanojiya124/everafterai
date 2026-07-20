"use client";

import { useFormContext } from "react-hook-form";

import { CompanionFormValues } from "@/components/wizard/schema";

function ReviewRow({ label, value }: { label: string; value?: string | boolean }) {
  const display =
    typeof value === "boolean" ? (value ? "Public" : "Private") : value?.trim();

  return (
    <div>
      <p className="text-xs text-ink-muted">{label}</p>
      <p className="mt-0.5 text-sm font-medium text-ink">{display || "—"}</p>
    </div>
  );
}

function ReviewBlock({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <p className="text-xs text-ink-muted">{label}</p>
      <p className="mt-1 whitespace-pre-wrap rounded-xl border border-line bg-sunken/60 p-3 text-sm text-ink">
        {value?.trim() || "—"}
      </p>
    </div>
  );
}

export function ReviewStep() {
  const { watch } = useFormContext<CompanionFormValues>();
  const values = watch();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-2xl font-medium text-ink">Review</h2>
        <p className="mt-1 text-sm text-ink-muted">
          Take one more look before creating this companion.
        </p>
      </div>

      <section className="rounded-2xl border border-line p-5">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-ink-muted">
          Basic information
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <ReviewRow label="Full name" value={values.full_name} />
          <ReviewRow label="Nickname" value={values.nickname} />
          <ReviewRow label="Relationship" value={values.relationship} />
          <ReviewRow label="Gender" value={values.gender} />
          <ReviewRow label="Birth date" value={values.birth_date} />
          <ReviewRow label="Date of passing" value={values.passing_date} />
          <ReviewRow label="Occupation" value={values.occupation} />
          <ReviewRow label="Country / City" value={[values.country, values.city].filter(Boolean).join(", ")} />
        </div>
      </section>

      <section className="rounded-2xl border border-line p-5">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-ink-muted">
          About
        </h3>
        <div className="space-y-4">
          <ReviewBlock label="Biography" value={values.biography} />
          <ReviewRow label="Favorite quote" value={values.favorite_quote} />
          <ReviewBlock label="Hobbies" value={values.hobbies} />
          <ReviewBlock label="Personality traits" value={values.personality_traits} />
        </div>
      </section>

      <section className="rounded-2xl border border-line p-5">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-ink-muted">
          Relationship
        </h3>
        <div className="space-y-4">
          <ReviewBlock label="Your story together" value={values.bond_story} />
          <ReviewBlock label="Special memories" value={values.special_memories} />
          <ReviewRow label="Humor level" value={values.humor_level} />
          <ReviewRow label="Emotional tone" value={values.emotional_tone} />
          <ReviewRow label="Visibility" value={values.is_public} />
        </div>
      </section>

      <div className="rounded-xl border border-success/30 bg-success/10 p-4">
        <p className="text-sm text-ink">
          Click <strong>Create companion</strong> below to save this and start your first
          conversation.
        </p>
      </div>
    </div>
  );
}
