"use client";

import { useEffect, useRef } from "react";

import { AssistantBubble, CrisisCard, UserBubble } from "@/components/chat/chat-bubbles";
import { TypingIndicator } from "@/components/ui/loading";
import type { ChatMessage, RetrievedSource } from "@/lib/types";

export function ChatMessageList({
  messages,
  resourcesByMessageId,
  sourcesByMessageId,
  isSending,
}: {
  messages: ChatMessage[];
  resourcesByMessageId: Record<number, string[]>;
  sourcesByMessageId: Record<number, RetrievedSource[]>;
  isSending: boolean;
}) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages.length, isSending]);

  return (
    <div className="flex-1 space-y-4 overflow-y-auto px-5 py-6">
      {messages.map((message) => {
        if (message.role === "user") {
          return <UserBubble key={message.id} message={message} />;
        }

        if (message.is_safety_response) {
          return (
            <CrisisCard
              key={message.id}
              message={message}
              resources={resourcesByMessageId[message.id] ?? null}
            />
          );
        }

        return (
          <AssistantBubble
            key={message.id}
            message={message}
            sources={sourcesByMessageId[message.id]}
          />
        );
      })}

      {isSending && (
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary text-xs font-medium text-white">
            EA
          </div>
          <div className="rounded-[20px] rounded-bl-md bg-sunken px-4 py-3">
            <TypingIndicator />
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
