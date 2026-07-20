"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, LogOut } from "lucide-react";

import { PresenceAvatar } from "@/components/ui/presence-avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/providers/auth-provider";

export default function ProfilePage() {
  const router = useRouter();
  const { user, signOut } = useAuth();

  if (!user) return null;

  async function handleSignOut() {
    await signOut();
    router.replace("/login");
  }

  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 py-10">
      <div className="mb-10 flex items-center gap-3">
        <Link
          href="/companions"
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink-muted hover:bg-sunken"
        >
          <ArrowLeft size={18} />
        </Link>
        <h1 className="font-serif text-2xl font-medium text-ink">Your profile</h1>
      </div>

      <div className="flex items-center gap-5 rounded-2xl border border-line bg-surface p-6">
        <PresenceAvatar name={user.full_name} src={user.profile_picture} size="lg" ring={false} />
        <div>
          <h2 className="font-serif text-xl font-medium text-ink">{user.full_name}</h2>
          <p className="text-sm text-ink-muted">{user.email}</p>
          <div className="mt-2 flex gap-2">
            <Badge tone={user.is_verified ? "success" : "muted"}>
              {user.is_verified ? "Verified" : "Unverified"}
            </Badge>
            <Badge tone="muted" className="capitalize">
              {user.provider}
            </Badge>
          </div>
        </div>
      </div>

      <dl className="mt-6 divide-y divide-line rounded-2xl border border-line bg-surface">
        <div className="flex items-center justify-between p-5">
          <dt className="text-sm text-ink-muted">Account status</dt>
          <dd className="text-sm font-medium text-ink">
            {user.is_active ? "Active" : "Disabled"}
          </dd>
        </div>
        <div className="flex items-center justify-between p-5">
          <dt className="text-sm text-ink-muted">Member since</dt>
          <dd className="text-sm font-medium text-ink">
            {new Date(user.created_at).toLocaleDateString(undefined, {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </dd>
        </div>
      </dl>

      <Button variant="outlineDanger" className="mt-8" onClick={handleSignOut}>
        <LogOut size={16} />
        Sign out
      </Button>
    </main>
  );
}
