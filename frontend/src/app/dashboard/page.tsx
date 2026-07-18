"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ProtectedPage } from "@/components/protected-page";
import {
  MemoryPerson,
  getMemoryPeople,
  User,
} from "@/lib/api";

function DashboardContent({ user }: { user: User }) {
  const [people, setPeople] = useState<MemoryPerson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMemoryPeople()
      .then(setPeople)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section>
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-stone-500">
            Welcome Back
          </p>

          <h1 className="text-4xl font-bold">
            {user.full_name}
          </h1>
        </div>

        <Link
          href="/companions/new"
          className="rounded-xl bg-black px-5 py-3 text-white"
        >
          Create Companion
        </Link>

      </div>

      {loading && (
        <p className="mt-10">
          Loading...
        </p>
      )}

      {!loading && people.length === 0 && (

        <div className="mt-10 rounded-2xl border border-dashed p-10 text-center">

          <h2 className="text-2xl font-semibold">
            No Memory Companions Yet
          </h2>

          <p className="mt-3 text-stone-600">
            Create your first companion.
          </p>

        </div>

      )}

      {!loading && people.length > 0 && (

        <div className="mt-10 grid gap-5">

          {people.map((person) => (

            <Link
              key={person.id}
              href={`/companions/${person.id}`}
              className="rounded-2xl border p-6"
            >
              <h2 className="text-xl font-semibold">
                {person.full_name}
              </h2>

              <p className="text-stone-500">
                {person.relationship}
              </p>

            </Link>

          ))}

        </div>

      )}

    </section>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedPage>
      {(user) => <DashboardContent user={user} />}
    </ProtectedPage>
  );
}