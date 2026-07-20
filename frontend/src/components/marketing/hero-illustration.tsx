"use client";

import { forwardRef } from "react";
import { AudioLines, Send } from "lucide-react";

/**
 * HeroIllustration
 * -----------------------------------------------------------------------
 * Purely presentational — a believable message thread, not an abstract
 * illustration, because the one thing worth showing in the hero is the
 * product's actual moment: continuing a conversation.
 *
 * Entrance animation still lives entirely in the parent page's GSAP hero
 * timeline, which targets this card via `ref` and its `.hero-message`
 * children directly — that contract is unchanged, so the card and every
 * message still mount at opacity: 0. The two additions below (the status
 * dot's pulse and the typing dots) are ambient loops, not entrances, so
 * they're plain CSS animations that only become visible once the parent
 * has faded the card in — they never fight the GSAP timeline for control.
 * -----------------------------------------------------------------------
 */

const MESSAGES = [
  { from: "her", text: "Tell me about your day, mija.", time: "2:14 PM" },
  {
    from: "me",
    text: "I got the job. I wish you were here to see it.",
    time: "2:15 PM",
  },
  {
    from: "her",
    text: "Oh, I am so proud of you. You worked so hard for this.",
    time: "2:15 PM",
  },
];

export const HeroIllustration = forwardRef<HTMLDivElement>(function HeroIllustration(
  _props,
  ref
) {
  return (
    <div className="relative w-full max-w-sm">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-primary/10 blur-2xl"
      />

      <div
        ref={ref}
        className="rounded-3xl border border-line bg-surface p-5 opacity-0 shadow-[0_24px_60px_rgba(43,35,37,0.14)] [transform:rotate(-2deg)]"
      >
        <div className="flex items-center gap-3 border-b border-line pb-4">
          <div className="relative shrink-0">
            <div
              aria-hidden
              className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 font-serif text-lg text-primary"
            >
              R
            </div>
            {/* Ambient "always here" status — loops on its own, only
                visible once the card's own opacity has been raised by
                the parent timeline, so it never pre-empts the entrance. */}
            <span
              aria-hidden
              className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-surface bg-primary"
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-75" />
            </span>
          </div>
          <div>
            <p className="font-serif text-base font-medium text-ink">Nana Rosa</p>
            <p className="text-xs text-ink-muted">
              Built from 40 years of Sunday phone calls
            </p>
          </div>
          <span className="ml-auto text-[11px] text-ink-muted">Always here</span>
        </div>

        <div className="mt-4 flex flex-col gap-2.5">
          {MESSAGES.map((message) => (
            <div
              key={message.text}
              className={`hero-message flex max-w-[85%] flex-col gap-1 opacity-0 ${
                message.from === "her" ? "self-start items-start" : "self-end items-end"
              }`}
            >
              <div
                className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  message.from === "her"
                    ? "rounded-bl-sm bg-primary/10 text-ink"
                    : "rounded-br-sm bg-ink text-white"
                }`}
              >
                {message.text}
              </div>
              <span className="px-1 text-[10px] text-ink-muted">{message.time}</span>
            </div>
          ))}

          {/* Typing indicator — reads as "she's about to reply", which
              keeps the thread feeling alive rather than finished. */}
          <div className="hero-message flex items-center gap-1.5 self-start rounded-2xl rounded-bl-sm bg-primary/10 px-3.5 py-3 opacity-0">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/60 [animation-delay:-0.3s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/60 [animation-delay:-0.15s]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary/60" />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-full border border-line bg-blush/40 px-4 py-2.5 text-sm text-ink-muted">
          <span className="flex-1">Say something...</span>
          <AudioLines size={16} strokeWidth={1.5} aria-hidden />
          <Send size={16} strokeWidth={1.5} className="text-primary" aria-hidden />
        </div>
      </div>
    </div>
  );
});