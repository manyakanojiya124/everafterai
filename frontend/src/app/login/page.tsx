"use client";
import { GoogleSignInButton } from "@/components/google-sign-in-button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { login } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setError("");
    setIsSubmitting(true);
    try {
      await login(String(form.get("email")), String(form.get("password")));
      router.replace("/dashboard");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to sign in.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center px-6">
      <form
        onSubmit={submit}
        className="w-full space-y-6 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm"
      >
        <div>
          <p className="text-sm text-stone-500">Welcome back</p>
          <h1 className="mt-1 text-3xl font-semibold text-stone-900">
            Sign in to EverAfter
          </h1>
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
        <label className="block text-sm font-medium">
          Password
          <input
            required
            name="password"
            type="password"
            minLength={8}
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
          {isSubmitting ? "Signing in…" : "Sign in"}
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
          New here?{" "}
          <Link className="underline" href="/register">
            Create an account
          </Link>
        </p>
      </form>
    </main>
  );
}
