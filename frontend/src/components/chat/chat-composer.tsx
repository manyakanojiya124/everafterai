"use client";

import { FormEvent, useState } from "react";
import { Paperclip, SendHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

export function ChatComposer({
  onSend,
  onOpenVault,
  disabled,
}: {
  onSend: (message: string) => void;
  onOpenVault: () => void;
  disabled?: boolean;
}) {
  const [value, setValue] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 border-t border-line bg-surface px-5 py-4"
    >
      <button
        type="button"
        onClick={onOpenVault}
        title="Memory Vault"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-ink-muted transition-colors hover:bg-sunken"
      >
        <Paperclip size={18} />
      </button>

      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Ask about a memory…"
        disabled={disabled}
        className="h-11 flex-1 rounded-full border border-line bg-sunken/60 px-5 text-[15px] text-ink placeholder:text-ink-muted focus:border-primary focus:bg-surface focus:outline-none disabled:opacity-60"
      />

      <button
        type="submit"
        disabled={disabled || !value.trim()}
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover disabled:opacity-40",
        )}
      >
        <SendHorizontal size={18} />
      </button>
    </form>
  );
}
