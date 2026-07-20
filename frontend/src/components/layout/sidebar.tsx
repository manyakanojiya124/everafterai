"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Plus, Search, User } from "lucide-react";

import { PresenceAvatar } from "@/components/ui/presence-avatar";
import { Badge } from "@/components/ui/badge";
import { EmptyState } from "@/components/ui/empty-state";
import { Wordmark } from "@/components/marketing/wordmark";
import { useCompanions } from "@/hooks/use-companions";
import { useAuth } from "@/providers/auth-provider";
import { cn } from "@/lib/utils";
import { resolveFileUrl } from "@/lib/api";

export function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuth();
  const { data: companions, isLoading } = useCompanions();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!companions) return [];
    const q = query.trim().toLowerCase();
    if (!q) return companions;
    return companions.filter(
      (person) =>
        person.full_name.toLowerCase().includes(q) ||
        person.relationship.toLowerCase().includes(q) ||
        person.nickname?.toLowerCase().includes(q),
    );
  }, [companions, query]);

  return (
    <aside className="flex h-full w-full flex-col border-r border-line bg-surface lg:w-[380px]">
      <div className="flex items-center justify-between border-b border-line px-6 py-5">
        <Link href="/companions" aria-label="EverAfter home" className="min-w-0">
          {/* Real brand type (Amoresa "ever" fused to Codec Pro "after")
              instead of a generic h1 — same lockup used on the auth
              screens and the marketing navbar, so the wordmark reads
              identically everywhere in the product. */}
          <Wordmark className="text-lg text-ink" />
          <p className="mt-0.5 text-xs text-ink-muted">Memory Companions</p>
        </Link>
        <div className="flex items-center gap-1">
          <Link
            href="/profile"
            title={user?.full_name ?? "Profile"}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-sunken hover:text-ink"
          >
            <User size={18} />
          </Link>
          <Link
            href="/companions/new"
            title="Add a memory"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover"
          >
            <Plus size={18} />
          </Link>
        </div>
      </div>

      <div className="px-4 pt-4">
        <div className="flex items-center gap-2 rounded-xl bg-sunken px-4 py-2.5">
          <Search size={16} className="text-ink-muted" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search companions"
            className="w-full bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-2 py-3">
        {isLoading && (
          <div className="space-y-2 px-2">
            {[0, 1, 2].map((key) => (
              <div key={key} className="h-16 animate-pulse rounded-xl bg-sunken/70" />
            ))}
          </div>
        )}

        {!isLoading && filtered.length === 0 && (
          <EmptyState
            title={companions?.length ? "No matches" : "No companions yet"}
            description={
              companions?.length
                ? "Try a different search."
                : "Create your first memory companion to begin."
            }
          />
        )}

        {filtered.map((person) => {
          const href = `/companions/${person.id}`;
          const active = pathname === href;

          return (
            <Link
              key={person.id}
              href={href}
              className={cn(
                "mb-1 flex items-center gap-3 rounded-xl p-3 transition-colors",
                active ? "bg-sunken" : "hover:bg-sunken/60",
              )}
            >
              <PresenceAvatar
                name={person.full_name}
                src={resolveFileUrl(person.profile_picture)}
                size="sm"
                ring={false}
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate font-medium text-ink">{person.full_name}</p>
                </div>
                <Badge tone="muted" className="mt-1">
                  {person.relationship}
                </Badge>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}