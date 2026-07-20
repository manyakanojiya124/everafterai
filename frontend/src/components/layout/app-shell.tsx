"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import { Sidebar } from "./sidebar";
import { cn } from "@/lib/utils";

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isIndex = pathname === "/companions";

  return (
    <div className="flex h-screen w-full overflow-hidden bg-blush">
      <div className={cn("h-full lg:block", isIndex ? "block w-full lg:w-auto" : "hidden")}>
        <Sidebar />
      </div>
      <div
        className={cn(
          "flex h-full flex-1 flex-col overflow-hidden",
          isIndex ? "hidden lg:flex" : "flex",
        )}
      >
        {children}
      </div>
    </div>
  );
}
