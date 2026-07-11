"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCurrentUser, logout, type User } from "@/lib/api";

export function ProtectedPage({ children }: { children: (user: User) => React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getCurrentUser().then(setUser).catch(() => router.replace("/login"));
  }, [router]);

  if (!user) return <main className="mx-auto flex min-h-screen max-w-4xl items-center px-6 text-stone-600">Loading your private space…</main>;

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-10">
      <header className="mb-12 flex items-center justify-between border-b border-stone-200 pb-5">
        <Link href="/dashboard" className="text-lg font-semibold tracking-tight text-stone-900">EverAfter AI</Link>
        <nav className="flex items-center gap-4 text-sm text-stone-600">
          <Link href="/profile">Profile</Link>
          <button className="cursor-pointer" onClick={() => logout().finally(() => router.replace("/login"))}>Log out</button>
        </nav>
      </header>
      {children(user)}
    </main>
  );
}
