"use client";

import { useRef } from "react";
import { Mic, Trash2, UploadCloud } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toaster";
import {
  useDeleteVoiceReference,
  useUploadVoiceReference,
  useVoiceReference,
} from "@/hooks/use-voice";
import { isNotFound } from "@/hooks/use-voice";

function statusTone(status: string): "success" | "muted" | "danger" {
  const s = status.toLowerCase();
  if (s.includes("fail") || s.includes("error")) return "danger";
  if (s.includes("ready") || s.includes("complet") || s.includes("done")) return "success";
  return "muted";
}

function formatDuration(seconds: number | null): string {
  if (!seconds && seconds !== 0) return "";
  const mins = Math.floor(seconds / 60);
  const secs = Math.round(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${mins}:${secs}`;
}

export function VoiceReferenceCard({ companionId }: { companionId: number }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { data: reference, isLoading, isError, error } = useVoiceReference(companionId);
  const upload = useUploadVoiceReference(companionId);
  const remove = useDeleteVoiceReference(companionId);

  const hasReference = Boolean(reference) && !(isError && isNotFound(error));

  async function handleSelect(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    try {
      await upload.mutateAsync(file);
      toast.success("Voice reference uploaded.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Unable to upload voice sample.");
    }
  }

  async function handleRemove() {
    try {
      await remove.mutateAsync();
      toast.success("Voice reference removed.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Unable to remove voice reference.");
    }
  }

  const isBusy = upload.isPending || remove.isPending;

  return (
    <div className="rounded-xl border border-line p-4">
      <div className="flex items-center gap-2">
        <Mic size={16} className="text-primary" />
        <h3 className="text-sm font-semibold text-ink">Voice reference</h3>
      </div>
      <p className="mt-1 text-xs text-ink-muted">
        A clear sample of their voice lets replies be spoken back in it.
      </p>

      <div className="mt-3">
        {isLoading ? (
          <div className="h-14 animate-pulse rounded-lg bg-sunken/70" />
        ) : hasReference && reference ? (
          <div className="flex items-center justify-between gap-3 rounded-lg bg-sunken/60 p-3">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-ink">{reference.original_name}</p>
              <div className="mt-1 flex items-center gap-2">
                <Badge tone={statusTone(reference.status)} className="capitalize">
                  {reference.status}
                </Badge>
                {reference.duration_seconds !== null && (
                  <span className="text-xs text-ink-muted">
                    {formatDuration(reference.duration_seconds)}
                  </span>
                )}
              </div>
              {reference.validation_note && (
                <p className="mt-1 text-xs text-ink-muted">{reference.validation_note}</p>
              )}
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <Button
                type="button"
                variant="secondary"
                size="sm"
                isLoading={upload.isPending}
                onClick={() => inputRef.current?.click()}
              >
                Replace
              </Button>
              <button
                type="button"
                onClick={handleRemove}
                disabled={isBusy}
                title="Remove"
                className="flex h-9 w-9 items-center justify-center rounded-full text-danger hover:bg-danger/10 disabled:opacity-50"
              >
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ) : (
          <Button
            type="button"
            variant="secondary"
            size="sm"
            isLoading={upload.isPending}
            onClick={() => inputRef.current?.click()}
          >
            <UploadCloud size={14} />
            Upload voice sample
          </Button>
        )}
        <input ref={inputRef} type="file" accept="audio/*" hidden onChange={handleSelect} />
      </div>
    </div>
  );
}
