"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { LoadingRipple } from "@/components/ui/loading";
import { useAuth } from "@/providers/auth-provider";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login");
    }
  }, [isLoading, user, router]);

  if (isLoading || !user) {
    return <LoadingRipple />;
  }

  return <>{children}</>;
}
