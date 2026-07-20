"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { LoadingRipple } from "@/components/ui/loading";
import { MarketingHome } from "@/components/marketing/marketing-home";
import { SplitIntro } from "@/components/marketing/split-intro";
import { useAuth } from "@/providers/auth-provider";

export default function Home() {
  const router = useRouter();
  const { user, isLoading } = useAuth();
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    if (!isLoading && user) {
      router.replace("/companions");
    }
  }, [isLoading, user, router]);

  if (isLoading) return <LoadingRipple />;
  if (user) return <LoadingRipple />;

  return (
    <>
      <MarketingHome />
      {!introDone && <SplitIntro onComplete={() => setIntroDone(true)} />}
    </>
  );
}