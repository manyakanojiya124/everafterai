"use client";

import { useEffect, useState } from "react";

const DEFAULT_LINES = ["Gathering memories…", "Almost there…", "Settling in…"];

export function LoadingRipple({
  lines = DEFAULT_LINES,
  fullScreen = true,
}: {
  lines?: string[];
  fullScreen?: boolean;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % lines.length);
    }, 3000);
    return () => clearInterval(id);
  }, [lines.length]);

  return (
    <div
      className={
        fullScreen
          ? "flex min-h-screen w-full flex-col items-center justify-center bg-blush"
          : "flex w-full flex-col items-center justify-center py-16"
      }
    >
      <div className="relative flex h-20 w-20 items-center justify-center">
        <span className="ripple-ring absolute h-16 w-16 rounded-full border border-primary" />
        <span
          className="ripple-ring absolute h-16 w-16 rounded-full border border-primary"
          style={{ animationDelay: "0.8s" }}
        />
        <span
          className="ripple-ring absolute h-16 w-16 rounded-full border border-primary"
          style={{ animationDelay: "1.6s" }}
        />
        <span className="h-3 w-3 rounded-full bg-primary" />
      </div>
      <p className="mt-6 text-sm text-ink-muted transition-opacity duration-500">
        {lines[index]}
      </p>
    </div>
  );
}

export function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-1 py-1">
      <span className="typing-dot h-1.5 w-1.5 rounded-full bg-primary" />
      <span
        className="typing-dot h-1.5 w-1.5 rounded-full bg-primary"
        style={{ animationDelay: "0.15s" }}
      />
      <span
        className="typing-dot h-1.5 w-1.5 rounded-full bg-primary"
        style={{ animationDelay: "0.3s" }}
      />
    </div>
  );
}
