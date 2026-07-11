"use client";

import { ProtectedPage } from "@/components/protected-page";

export default function ProfilePage() {
  return <ProtectedPage>{(user) => <section><p className="text-sm text-stone-500">Account</p><h1 className="mt-1 text-4xl font-semibold tracking-tight text-stone-900">Your profile</h1><dl className="mt-10 divide-y divide-stone-200 rounded-2xl border border-stone-200"><div className="p-5"><dt className="text-sm text-stone-500">Name</dt><dd className="mt-1 font-medium text-stone-900">{user.full_name}</dd></div><div className="p-5"><dt className="text-sm text-stone-500">Email</dt><dd className="mt-1 font-medium text-stone-900">{user.email}</dd></div><div className="p-5"><dt className="text-sm text-stone-500">Account status</dt><dd className="mt-1 font-medium text-stone-900">{user.is_active ? "Active" : "Disabled"}</dd></div></dl></section>}</ProtectedPage>;
}
