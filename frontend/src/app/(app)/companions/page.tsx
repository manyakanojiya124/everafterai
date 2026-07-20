"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { EmptyState } from "@/components/ui/empty-state";
import { Button } from "@/components/ui/button";

export default function CompanionsIndexPage() {
  return (
    <EmptyState
      icon={<MessageCircle size={32} />}
      title="EverAfter"
      description="Select a memory companion from the list, or create a new one to start preserving what matters."
      action={
        <Link href="/companions/new">
          <Button>Create a memory companion</Button>
        </Link>
      }
    />
  );
}
