"use client";

import TimelinePanel from "./TimelinePanel";
import ChatPanel from "./ChatPanel";
import RightPanel from "./RightPanel";

export default function CompanionWorkspace() {
  return (
    <div className="flex h-screen">

      <TimelinePanel />

      <ChatPanel />

      <RightPanel />

    </div>
  );
}