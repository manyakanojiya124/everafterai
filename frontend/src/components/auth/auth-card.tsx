import Link from "next/link";
import { ReactNode } from "react";

import { Wordmark } from "@/components/marketing/wordmark";


export function AuthCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-blush px-6 py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-32 h-80 w-80 rounded-full bg-gradient-to-br from-accent/25 to-primary/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-primary/20 to-accent/10 blur-3xl"
      />

      <div className="auth-card-rise relative w-full max-w-md">
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex justify-center" aria-label="EverAfter home">
            <Wordmark className="text-4xl text-primary" />
          </Link>
          <p className="mt-5 text-sm text-ink-muted">{eyebrow}</p>
          <h1 className="mt-1 font-serif text-3xl font-medium text-ink">{title}</h1>
        </div>

        <div className="rounded-2xl border border-line bg-surface p-8 shadow-[0_8px_24px_rgba(43,35,37,0.06)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(43,35,37,0.09)]">
          {children}
        </div>
      </div>

      <style jsx global>{`
        @keyframes auth-card-rise {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .auth-card-rise {
          animation: auth-card-rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .auth-card-rise {
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}