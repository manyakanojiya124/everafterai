"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { AuthCard } from "@/components/auth/auth-card";
import { OtpInput, type OtpStatus } from "@/components/ui/otp-input";
import { TextField } from "@/components/ui/field";
import { toast } from "@/components/ui/toaster";
import { useAuth } from "@/providers/auth-provider";
import { resendVerification, verifyEmail } from "@/lib/api";

const RESEND_COOLDOWN_SECONDS = 30;
// How long the green "Verification complete" state stays on screen
// before handing off to the chat UI — long enough to actually register,
// short enough not to feel like a stall.
const SUCCESS_HANDOFF_MS = 900;
const ERROR_RESET_MS = 900;

export default function VerifyEmailPage() {
  const router = useRouter();
  const { setUser } = useAuth();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [status, setStatus] = useState<OtpStatus>("idle");
  const [isResending, setIsResending] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    const stored = sessionStorage.getItem("everafter_verification_email");
    if (stored) setEmail(stored);
  }, []);

  useEffect(() => {
    if (cooldown <= 0) return;
    const id = setInterval(() => setCooldown((current) => current - 1), 1000);
    return () => clearInterval(id);
  }, [cooldown]);

  // Fired by OtpInput automatically the instant all 6 digits are in —
  // there is no manual "Verify" button in this flow.
  const handleComplete = useCallback(
    async (code: string) => {
      if (!email) {
        toast.error("Enter your email address first.");
        return;
      }
      setStatus("verifying");
      try {
        const user = await verifyEmail(email, code);
        setStatus("success");
        window.setTimeout(() => {
          setUser(user);
          router.replace("/companions");
        }, SUCCESS_HANDOFF_MS);
      } catch (error) {
        setStatus("error");
        toast.error(error instanceof Error ? error.message : "Unable to verify the code.");
        window.setTimeout(() => {
          setOtp("");
          setStatus("idle");
        }, ERROR_RESET_MS);
      }
    },
    [email, router, setUser],
  );

  async function resend() {
    if (!email) {
      toast.error("Enter your email address first.");
      return;
    }
    setIsResending(true);
    try {
      const result = await resendVerification(email);
      toast.success(result.message);
      setCooldown(RESEND_COOLDOWN_SECONDS);
      setOtp("");
      setStatus("idle");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to resend the code.");
    } finally {
      setIsResending(false);
    }
  }

  const locked = status === "verifying" || status === "success";

  return (
    <AuthCard eyebrow="One last step" title="Verify your email">
      <div className="space-y-6">
        <p className="text-sm leading-relaxed text-ink-muted">
          Enter the six-digit code we sent to your email address. It verifies itself the moment
          the last digit lands.
        </p>

        <TextField
          label="Email"
          type="email"
          value={email}
          disabled={locked}
          onChange={(event) => setEmail(event.target.value)}
        />

        <div className="space-y-1.5">
          <span className="text-sm font-medium text-ink">Verification code</span>
          <OtpInput
            value={otp}
            onChange={(next) => {
              setOtp(next);
              if (status === "error") setStatus("idle");
            }}
            onComplete={handleComplete}
            status={status}
          />
        </div>

        <button
          type="button"
          onClick={resend}
          disabled={isResending || cooldown > 0 || locked}
          className="w-full text-center text-sm text-ink-muted underline underline-offset-2 transition-opacity disabled:opacity-50"
        >
          {cooldown > 0 ? `Resend code in ${cooldown}s` : "Resend code"}
        </button>

        <p className="text-center text-sm text-ink-muted">
          <Link href="/login" className="font-medium text-primary hover:underline">
            Back to sign in
          </Link>
        </p>
      </div>
    </AuthCard>
  );
}