"use client";

import { useCompanions } from "@/features/memory-companion/hooks/useCompanions";

export default function CompanionsPage() {
  const { data, isLoading } = useCompanions();

  if (isLoading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl p-10">

      <h1 className="text-4xl font-bold">
        Memory Companions
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-3">

        {data?.map((person) => (

          <div
            key={person.id}
            className="rounded-3xl border bg-white p-6 shadow-sm"
          >

            <div className="h-24 w-24 rounded-full bg-stone-200" />

            <h2 className="mt-5 text-2xl font-semibold">
              {person.full_name}
            </h2>

            <p className="text-stone-500">
              {person.relationship}
            </p>

            <button
              className="mt-6 rounded-xl bg-black px-5 py-3 text-white"
            >
              Open Memory
            </button>

          </div>

        ))}

      </div>

    </main>
  );
}