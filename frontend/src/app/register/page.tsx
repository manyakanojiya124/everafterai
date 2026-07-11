"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { register } from "@/lib/api";
import { GoogleSignInButton } from "@/components/google-sign-in-button";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setError("");
    setIsSubmitting(true);
    try {
      await register(
        String(form.get("firstName")),
        String(form.get("lastName")),
        String(form.get("email")),
        String(form.get("password")),
        String(form.get("confirmPassword")),
      );
      router.replace("/verify-email");
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : "Unable to create your account.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center px-6">
      <form
        onSubmit={submit}
        className="w-full space-y-5 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm"
      >
        <div>
          <p className="text-sm text-stone-500">A private place for memories</p>
          <h1 className="mt-1 text-3xl font-semibold text-stone-900">
            Create your account
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <label className="block text-sm font-medium">
            First name
            <input
              required
              name="firstName"
              minLength={1}
              maxLength={75}
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
            />
          </label>
          <label className="block text-sm font-medium">
            Last name
            <input
              required
              name="lastName"
              minLength={1}
              maxLength={75}
              className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
            />
          </label>
        </div>
        <label className="block text-sm font-medium">
          Email
          <input
            required
            name="email"
            type="email"
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
          />
        </label>
        <p className="-mt-3 text-xs text-stone-500">
          Gmail, Outlook, Hotmail, Live, and Yahoo addresses are supported.
        </p>
        <label className="block text-sm font-medium">
          Password
          <input
            required
            name="password"
            type="password"
            minLength={8}
            maxLength={72}
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
          />
        </label>
        <label className="block text-sm font-medium">
          Confirm password
          <input
            required
            name="confirmPassword"
            type="password"
            minLength={8}
            maxLength={72}
            className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2"
          />
        </label>

        {error && (
          <p role="alert" className="text-sm text-red-700">
            {error}
          </p>
        )}
        <button
          disabled={isSubmitting}
          className="w-full rounded-lg bg-stone-900 px-4 py-2.5 font-medium text-white disabled:opacity-60"
        >
          {isSubmitting ? "Creating account…" : "Create account"}
        </button>
        <div className="flex items-center gap-3">
  <div className="h-px flex-1 bg-stone-200" />
  <span className="text-xs uppercase tracking-wide text-stone-400">
    or
  </span>
  <div className="h-px flex-1 bg-stone-200" />
</div>

<GoogleSignInButton mode="login" />
        <p className="text-center text-sm text-stone-600">
          Already have an account?{" "}
          <Link className="underline" href="/login">
            Sign in
          </Link>
        </p>
      </form>
    </main>
  );
}
