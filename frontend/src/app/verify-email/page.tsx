"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { resendVerification, verifyEmail } from "@/lib/api";

export default function VerifyEmailPage() {
  const router = useRouter();
  const [email, setEmail] = useState(() =>
    typeof window === "undefined" ? "" : sessionStorage.getItem("everafter_verification_email") ?? "",
  );
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const otp = String(new FormData(event.currentTarget).get("otp"));
    setError(""); setIsSubmitting(true);
    try { await verifyEmail(email, otp); router.replace("/dashboard"); }
    catch (reason) { setError(reason instanceof Error ? reason.message : "Unable to verify the code."); }
    finally { setIsSubmitting(false); }
  }

  async function resend() {
    setError(""); setMessage("");
    try { setMessage((await resendVerification(email)).message); }
    catch (reason) { setError(reason instanceof Error ? reason.message : "Unable to resend the code."); }
  }

  return <main className="mx-auto flex min-h-screen max-w-md items-center px-6"><form onSubmit={submit} className="w-full space-y-6 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm"><div><p className="text-sm text-stone-500">One last step</p><h1 className="mt-1 text-3xl font-semibold text-stone-900">Verify your email</h1><p className="mt-3 text-sm text-stone-600">We sent a six-digit code to your email address.</p></div><label className="block text-sm font-medium">Email<input required value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2" /></label><label className="block text-sm font-medium">Verification code<input required name="otp" inputMode="numeric" pattern="[0-9]{6}" maxLength={6} className="mt-1 w-full rounded-lg border border-stone-300 px-3 py-2 tracking-[0.4em]" /></label>{error && <p role="alert" className="text-sm text-red-700">{error}</p>}{message && <p className="text-sm text-green-700">{message}</p>}<button disabled={isSubmitting} className="w-full rounded-lg bg-stone-900 px-4 py-2.5 font-medium text-white disabled:opacity-60">{isSubmitting ? "Verifying…" : "Verify email"}</button><button type="button" onClick={resend} className="w-full text-sm text-stone-700 underline">Resend code</button><p className="text-center text-sm text-stone-600"><Link className="underline" href="/login">Back to sign in</Link></p></form></main>;
}
