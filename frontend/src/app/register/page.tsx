"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { z } from "zod";

import { AuthCard } from "@/components/auth/auth-card";
import { GoogleSignInButton } from "@/components/auth/google-button";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/field";
import { toast } from "@/components/ui/toaster";
import { useAuth } from "@/providers/auth-provider";
import { register as registerAccount } from "@/lib/api";

const schema = z
  .object({
    first_name: z.string().trim().min(1, "First name is required").max(75),
    last_name: z.string().trim().min(1, "Last name is required").max(75),
    email: z.string().email("Enter a valid email address"),
    password: z.string().min(8, "At least 8 characters").max(72),
    confirm_password: z.string().min(8, "At least 8 characters").max(72),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });

type FormValues = z.infer<typeof schema>;

/**
 * Lightweight, dependency-free password strength estimate. This is a UX
 * nudge, not a security control — real strength enforcement stays in the
 * zod schema and on the server.
 */
function estimateStrength(password: string): { score: 0 | 1 | 2 | 3 | 4; label: string } {
  if (!password) return { score: 0, label: "" };
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
  if (/\d/.test(password) && /[^A-Za-z0-9]/.test(password)) score++;

  const labels = ["Too short", "Weak", "Fair", "Good", "Strong"];
  return { score: score as 0 | 1 | 2 | 3 | 4, label: labels[score] };
}

const STRENGTH_COLORS = ["bg-line", "bg-rose-400", "bg-amber-400", "bg-primary", "bg-emerald-500"];

export default function RegisterPage() {
  const router = useRouter();
  const { user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    if (user) router.replace("/companions");
  }, [user, router]);

  const {
    register: registerField,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const passwordValue = watch("password") ?? "";
  const strength = useMemo(() => estimateStrength(passwordValue), [passwordValue]);

  async function onSubmit(values: FormValues) {
    try {
      const result = await registerAccount(values);
      sessionStorage.setItem("everafter_verification_email", result.email);
      toast.success(result.message);
      router.replace("/verify-email");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to create your account.");
    }
  }

  return (
    <AuthCard eyebrow="A private place for memories" title="Create your account">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div className="grid grid-cols-2 gap-4">
          <TextField
            label="First name"
            autoComplete="given-name"
            autoFocus
            error={errors.first_name?.message}
            {...registerField("first_name")}
          />
          <TextField
            label="Last name"
            autoComplete="family-name"
            error={errors.last_name?.message}
            {...registerField("last_name")}
          />
        </div>

        <TextField
          label="Email"
          type="email"
          autoComplete="email"
          hint="Gmail, Outlook, Hotmail, Live, and Yahoo addresses are supported."
          error={errors.email?.message}
          {...registerField("email")}
        />

        <div>
          <div className="relative">
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              error={errors.password?.message}
              {...registerField("password")}
            />
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setShowPassword((current) => !current)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="absolute right-3 top-[38px] text-ink-muted transition-colors hover:text-ink"
            >
              {showPassword ? (
                <EyeOff size={18} strokeWidth={1.5} />
              ) : (
                <Eye size={18} strokeWidth={1.5} />
              )}
            </button>
          </div>

          {passwordValue && (
            <div className="mt-2 flex items-center gap-2">
              <div className="flex flex-1 gap-1">
                {[0, 1, 2, 3].map((segment) => (
                  <span
                    key={segment}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      segment < strength.score ? STRENGTH_COLORS[strength.score] : "bg-line"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-ink-muted">{strength.label}</span>
            </div>
          )}
        </div>

        <div className="relative">
          <TextField
            label="Confirm password"
            type={showConfirm ? "text" : "password"}
            autoComplete="new-password"
            error={errors.confirm_password?.message}
            {...registerField("confirm_password")}
          />
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShowConfirm((current) => !current)}
            aria-label={showConfirm ? "Hide password" : "Show password"}
            className="absolute right-3 top-[38px] text-ink-muted transition-colors hover:text-ink"
          >
            {showConfirm ? (
              <EyeOff size={18} strokeWidth={1.5} />
            ) : (
              <Eye size={18} strokeWidth={1.5} />
            )}
          </button>
        </div>

        <Button type="submit" className="w-full" isLoading={isSubmitting}>
          Create account
        </Button>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-line" />
          <span className="text-xs uppercase tracking-wide text-ink-muted">or</span>
          <div className="h-px flex-1 bg-line" />
        </div>

        <GoogleSignInButton mode="register" />

        <p className="text-center text-sm text-ink-muted">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </form>
    </AuthCard>
  );
}