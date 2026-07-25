"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, Play, Square } from "lucide-react";

import { toast } from "@/components/ui/toaster";
import {
  fetchMessageVoiceAudio,
  generateMessageVoice,
  getMessageVoice,
  isVoiceFailed,
  isVoiceTerminal,
} from "@/lib/api";
import { cn } from "@/lib/utils";

type PlayerStatus = "idle" | "generating" | "playing" | "error";

const POLL_INTERVAL_MS = 1500;
const MAX_POLLS = 40; // ~1 minute ceiling

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function VoicePlayButton({
  companionId,
  messageId,
}: {
  companionId: number;
  messageId: number;
}) {
  const [status, setStatus] = useState<PlayerStatus>("idle");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const objectUrlRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    };
  }, []);

  function playFromUrl(url: string) {
    const audio = new Audio(url);
    audio.onended = () => setStatus("idle");
    audio.onerror = () => setStatus("error");
    audioRef.current = audio;
    audio.play();
    setStatus("playing");
  }

  async function handleClick() {
    if (status === "playing") {
      audioRef.current?.pause();
      setStatus("idle");
      return;
    }

    if (objectUrlRef.current) {
      playFromUrl(objectUrlRef.current);
      return;
    }

    setStatus("generating");
    try {
      let voice = await generateMessageVoice(companionId, messageId);

      let attempts = 0;
      while (!isVoiceTerminal(voice.status) && attempts < MAX_POLLS) {
        await sleep(POLL_INTERVAL_MS);
        voice = await getMessageVoice(companionId, messageId);
        attempts += 1;
      }

      if (isVoiceFailed(voice.status)) {
        setStatus("error");
        toast.error(voice.error ?? "Couldn't generate voice for this message.");
        return;
      }
      if (!isVoiceTerminal(voice.status)) {
        setStatus("error");
        toast.error("Voice generation is taking longer than expected.");
        return;
      }

      const blob = await fetchMessageVoiceAudio(companionId, messageId);
      const url = URL.createObjectURL(blob);
      objectUrlRef.current = url;
      playFromUrl(url);
    } catch (error) {
      setStatus("error");
      toast.error(error instanceof Error ? error.message : "Couldn't play this message.");
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      title={status === "playing" ? "Stop" : "Play in their voice"}
      className={cn(
        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors",
        status === "error"
          ? "text-danger hover:bg-danger/10"
          : "text-ink-muted hover:bg-sunken hover:text-primary",
      )}
    >
      {status === "generating" ? (
        <Loader2 size={13} className="animate-spin" />
      ) : status === "playing" ? (
        <Square size={11} fill="currentColor" />
      ) : (
        <Play size={13} fill="currentColor" />
      )}
    </button>
  );
}
