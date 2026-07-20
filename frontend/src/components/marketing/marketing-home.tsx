"use client";

import { useState } from "react";
import { SplitIntro } from "@/components/marketing/split-intro";
import { LandingPage } from "@/components/marketing/landing-page";
import { Navbar } from "./navbar";


export function MarketingHome() {
  const [showLanding, setShowLanding] = useState(false);

  return showLanding ? (
    <><Navbar /><LandingPage /></>
  ) : (
    <SplitIntro onComplete={() => setShowLanding(true)} />
  );
}
