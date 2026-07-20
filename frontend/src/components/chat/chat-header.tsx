"use client";

import Link from "next/link";
import { ArrowLeft, Archive, MoreVertical, Pencil, Trash2 } from "lucide-react";

import { PresenceAvatar } from "@/components/ui/presence-avatar";
import { Badge } from "@/components/ui/badge";
import { DropdownItem, DropdownMenu } from "@/components/ui/dropdown";
import { resolveFileUrl } from "@/lib/api";
import type { MemoryPerson } from "@/lib/types";

export function ChatHeader({
  companion,
  onEdit,
  onOpenVault,
  onClearChat,
}: {
  companion: MemoryPerson;
  onEdit: () => void;
  onOpenVault: () => void;
  onClearChat: () => void;
}) {
  return (
    <header className="flex items-center justify-between gap-3 border-b border-line bg-surface px-5 py-4">
      <div className="flex min-w-0 items-center gap-3">
        <Link
          href="/companions"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-muted hover:bg-sunken lg:hidden"
        >
          <ArrowLeft size={18} />
        </Link>

        <PresenceAvatar
          name={companion.full_name}
          src={resolveFileUrl(companion.profile_picture)}
          size="sm"
        />

        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="truncate font-serif text-lg font-medium text-ink">
              {companion.nickname || companion.full_name}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-ink-muted">{companion.relationship}</span>
            <Badge tone="muted" className="text-[10px]">
              AI companion
            </Badge>
          </div>
        </div>
      </div>

      <DropdownMenu
        trigger={
          <span className="flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-sunken">
            <MoreVertical size={18} />
          </span>
        }
      >
        <DropdownItem icon={<Pencil size={16} />} onClick={onEdit}>
          Edit profile
        </DropdownItem>
        <DropdownItem icon={<Archive size={16} />} onClick={onOpenVault}>
          Memory Vault
        </DropdownItem>
        <DropdownItem danger icon={<Trash2 size={16} />} onClick={onClearChat}>
          Clear conversation
        </DropdownItem>
      </DropdownMenu>
    </header>
  );
}
