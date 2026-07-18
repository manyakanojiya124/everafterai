"use client";

export default function StoryUpload() {
  return (
    <div className="rounded-2xl border bg-white p-6">

      <h2 className="text-xl font-semibold">

        ❤️ Personal Story

      </h2>

      <textarea
        rows={8}
        className="mt-5 w-full rounded-xl border p-4"
        placeholder="Write memories..."
      />

    </div>
  );
}