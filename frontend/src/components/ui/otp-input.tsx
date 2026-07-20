"use client";

import { Check } from "lucide-react";
import { useEffect, useRef } from "react";

export type OtpStatus = "idle" | "verifying" | "success" | "error";

interface OtpInputProps {
  value: string;
  onChange: (value: string) => void;
  /** Fires exactly once per completed code, as soon as all boxes are filled. */
  onComplete?: (value: string) => void;
  length?: number;
  status?: OtpStatus;
}

/**
 * OtpInput
 * -----------------------------------------------------------------------
 * Six boxed digits. Typing auto-advances to the next box, backspace
 * auto-retreats, and pasting a full code fills every box at once. The
 * moment the last digit lands, `onComplete` fires automatically — there
 * is no separate "verify" button anywhere in this flow. `status` (driven
 * by the parent's API call) controls the visual state:
 *   - "verifying": boxes lock, a small spinner + "Verifying…" shows below
 *   - "success":   boxes turn green, a checkmark pops in with
 *                  "Verification complete"
 *   - "error":     boxes flash red and shake, then the parent clears them
 * -----------------------------------------------------------------------
 */
export function OtpInput({ value, onChange, onComplete, length = 6, status = "idle" }: OtpInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const firedRef = useRef(false);

  const digits = Array.from({ length }, (_, i) => value[i] ?? "");
  const isVerifying = status === "verifying";
  const isSuccess = status === "success";
  const isError = status === "error";
  const locked = isVerifying || isSuccess;

  useEffect(() => {
    if (value.length === length && !firedRef.current) {
      firedRef.current = true;
      onComplete?.(value);
    }
    if (value.length < length) {
      firedRef.current = false;
    }
  }, [value, length, onComplete]);

  useEffect(() => {
    // Autofocus the first empty box whenever the code is cleared out
    // from under us (e.g. after a failed attempt or a resend).
    if (value.length === 0 && !locked) {
      inputRefs.current[0]?.focus();
    }
  }, [value, locked]);

  function setDigit(index: number, digit: string) {
    const chars = value.split("");
    chars[index] = digit;
    onChange(chars.join("").slice(0, length));
  }

  function handleChange(index: number, raw: string) {
    const clean = raw.replace(/\D/g, "");

    if (!clean) {
      setDigit(index, "");
      return;
    }

    if (clean.length > 1) {
      // Fast typing or an autofill can deliver more than one character
      // to a single box — spread it across the remaining boxes.
      const chars = value.split("");
      for (let i = 0; i < clean.length && index + i < length; i++) {
        chars[index + i] = clean[i];
      }
      const next = chars.join("").slice(0, length);
      onChange(next);
      inputRefs.current[Math.min(index + clean.length, length - 1)]?.focus();
      return;
    }

    setDigit(index, clean);
    if (index < length - 1) inputRefs.current[index + 1]?.focus();
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace") {
      if (digits[index]) {
        setDigit(index, "");
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        setDigit(index - 1, "");
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handlePaste(e: React.ClipboardEvent<HTMLInputElement>) {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    if (!pasted) return;
    onChange(pasted);
    inputRefs.current[Math.min(pasted.length, length - 1)]?.focus();
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-2.5" onPaste={handlePaste}>
        {digits.map((digit, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            autoComplete={index === 0 ? "one-time-code" : "off"}
            maxLength={1}
            value={digit}
            disabled={locked}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            aria-label={`Digit ${index + 1} of ${length}`}
            className={[
              "h-14 w-12 rounded-xl border text-center font-serif text-xl font-medium outline-none",
              "transition-all duration-200",
              isSuccess
                ? "border-emerald-400 bg-emerald-50 text-emerald-600"
                : isError
                  ? "otp-shake border-rose-400 bg-rose-50 text-rose-600"
                  : digit
                    ? "border-primary/60 bg-surface text-ink"
                    : "border-line bg-surface text-ink focus:border-primary focus:ring-2 focus:ring-primary/20",
            ].join(" ")}
          />
        ))}
      </div>

      <div className="flex h-6 items-center gap-2 text-sm" role="status" aria-live="polite">
        {isVerifying && (
          <>
            <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
            <span className="text-ink-muted">Verifying…</span>
          </>
        )}
        {isSuccess && (
          <>
            <span className="otp-pop flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check size={11} strokeWidth={3} />
            </span>
            <span className="font-medium text-emerald-600">Verification complete</span>
          </>
        )}
        {isError && <span className="text-rose-600">That code didn&apos;t match. Try again.</span>}
      </div>

      <style jsx>{`
        @keyframes otp-shake {
          0%,
          100% {
            transform: translateX(0);
          }
          20%,
          60% {
            transform: translateX(-5px);
          }
          40%,
          80% {
            transform: translateX(5px);
          }
        }
        .otp-shake {
          animation: otp-shake 0.4s ease-in-out;
        }
        @keyframes otp-pop {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .otp-pop {
          animation: otp-pop 0.25s ease-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .otp-shake,
          .otp-pop {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}