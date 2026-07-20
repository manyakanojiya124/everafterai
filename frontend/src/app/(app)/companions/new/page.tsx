"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { CreateCompanionWizard } from "@/components/wizard/create-companion-wizard";

export default function NewCompanionPage() {
  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <div className="flex items-center gap-3 border-b border-line bg-surface px-6 py-4 lg:hidden">
        <Link
          href="/companions"
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink-muted hover:bg-sunken"
        >
          <ArrowLeft size={18} />
        </Link>
        <span className="font-medium text-ink">New companion</span>
      </div>

      <div className="flex-1 px-4 py-8 sm:px-8">
        <CreateCompanionWizard />
      </div>
    </div>
  );
}
