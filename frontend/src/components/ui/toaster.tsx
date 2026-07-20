"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="bottom-center"
      toastOptions={{
        duration: 4000,
        style: {
          background: "var(--color-surface)",
          color: "var(--color-ink)",
          border: "1px solid var(--color-line)",
          borderRadius: "999px",
          padding: "10px 18px",
          fontSize: "14px",
          boxShadow: "0 8px 24px rgba(43,35,37,0.08)",
        },
      }}
    />
  );
}

export { toast } from "sonner";
