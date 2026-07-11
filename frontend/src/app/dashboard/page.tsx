"use client";

import Link from "next/link";
import { ProtectedPage } from "@/components/protected-page";

export default function DashboardPage() {
  return <ProtectedPage>{(user) => <section><p className="text-sm text-stone-500">Your private space</p><h1 className="mt-1 text-4xl font-semibold tracking-tight text-stone-900">Welcome, {user.full_name.split(" ")[0]}.</h1><p className="mt-4 max-w-xl text-stone-600">EverAfter is being prepared as a thoughtful, private place to preserve memories. Memory companions are not available yet.</p><div className="mt-10 rounded-2xl border border-stone-200 bg-stone-50 p-6"><h2 className="font-semibold text-stone-900">Start with your profile</h2><p className="mt-2 text-sm text-stone-600">Your account is ready. Memory people and uploads will be added in the next foundation phases.</p><Link href="/profile" className="mt-4 inline-block text-sm font-medium underline">View profile</Link></div></section>}</ProtectedPage>;
}
