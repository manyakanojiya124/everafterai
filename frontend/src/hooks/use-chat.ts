"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { clearChat, getChatHistory, sendChatMessage } from "@/lib/api";
import type { ChatHistory, ChatReply } from "@/lib/types";

const chatKey = (companionId: number) => ["chat", companionId] as const;

export function useChatHistory(companionId: number) {
  return useQuery({
    queryKey: chatKey(companionId),
    queryFn: () => getChatHistory(companionId),
    enabled: Number.isFinite(companionId),
  });
}

export function useSendChatMessage(companionId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (message: string) => sendChatMessage(companionId, message),
    onSuccess: (reply: ChatReply) => {
      queryClient.setQueryData<ChatHistory>(chatKey(companionId), (prev) => ({
        memory_person_id: companionId,
        messages: [
          ...(prev?.messages ?? []),
          reply.user_message,
          reply.assistant_message,
        ],
      }));
    },
  });
}

export function useClearChat(companionId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => clearChat(companionId),
    onSuccess: () => {
      queryClient.setQueryData<ChatHistory>(chatKey(companionId), {
        memory_person_id: companionId,
        messages: [],
      });
    },
  });
}
