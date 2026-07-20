"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";

import { ChatHeader } from "@/components/chat/chat-header";
import { ChatMessageList } from "@/components/chat/chat-message-list";
import { ChatComposer } from "@/components/chat/chat-composer";
import { EditCompanionSheet } from "@/components/companions/edit-companion-sheet";
import { MemoryVaultSheet } from "@/components/vault/memory-vault-sheet";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";
import { LoadingRipple } from "@/components/ui/loading";
import { EmptyState } from "@/components/ui/empty-state";
import { toast } from "@/components/ui/toaster";
import { useCompanion } from "@/hooks/use-companions";
import { useChatHistory, useClearChat, useSendChatMessage } from "@/hooks/use-chat";

export default function CompanionChatPage() {
  const params = useParams<{ id: string }>();
  const companionId = Number(params.id);

  const { data: companion, isLoading: isCompanionLoading } = useCompanion(companionId);
  const { data: history, isLoading: isHistoryLoading } = useChatHistory(companionId);
  const sendMessage = useSendChatMessage(companionId);
  const clearChatMutation = useClearChat(companionId);

  const [editOpen, setEditOpen] = useState(false);
  const [vaultOpen, setVaultOpen] = useState(false);
  const [clearOpen, setClearOpen] = useState(false);
  const [resourcesByMessageId, setResourcesByMessageId] = useState<Record<number, string[]>>({});

  const messages = useMemo(() => history?.messages ?? [], [history]);

  async function handleSend(message: string) {
    try {
      const reply = await sendMessage.mutateAsync(message);
      if (reply.is_crisis_response && reply.resources) {
        setResourcesByMessageId((prev) => ({
          ...prev,
          [reply.assistant_message.id]: reply.resources as string[],
        }));
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Message couldn't be sent.");
    }
  }

  async function handleClearChat() {
    try {
      await clearChatMutation.mutateAsync();
      toast.success("Conversation cleared.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to clear this conversation.");
    } finally {
      setClearOpen(false);
    }
  }

  if (isCompanionLoading) return <LoadingRipple fullScreen={false} />;

  if (!companion) {
    return (
      <EmptyState
        title="Companion not found"
        description="This memory companion may have been removed."
      />
    );
  }

  return (
    <div className="flex h-full flex-col">
      <ChatHeader
        companion={companion}
        onEdit={() => setEditOpen(true)}
        onOpenVault={() => setVaultOpen(true)}
        onClearChat={() => setClearOpen(true)}
      />

      <p className="border-b border-line bg-blush/60 px-5 py-2 text-center text-xs italic text-ink-muted">
        EverAfter is an AI companion — not a replacement for {companion.full_name} or for
        professional support.
      </p>

      {isHistoryLoading ? (
        <LoadingRipple fullScreen={false} />
      ) : messages.length === 0 ? (
        <EmptyState
          title={`Say hello to ${companion.nickname || companion.full_name}`}
          description="Start the conversation below whenever you're ready."
        />
      ) : (
        <ChatMessageList
          messages={messages}
          resourcesByMessageId={resourcesByMessageId}
          isSending={sendMessage.isPending}
        />
      )}

      <ChatComposer
        onSend={handleSend}
        onOpenVault={() => setVaultOpen(true)}
        disabled={sendMessage.isPending}
      />

      <EditCompanionSheet
        companion={companion}
        open={editOpen}
        onClose={() => setEditOpen(false)}
      />

      <MemoryVaultSheet
        companionId={companion.id}
        open={vaultOpen}
        onClose={() => setVaultOpen(false)}
      />

      <ConfirmDialog
        open={clearOpen}
        title="Clear this conversation?"
        description="All messages with this companion will be permanently deleted."
        confirmLabel="Clear"
        danger
        isLoading={clearChatMutation.isPending}
        onConfirm={handleClearChat}
        onCancel={() => setClearOpen(false)}
      />
    </div>
  );
}
