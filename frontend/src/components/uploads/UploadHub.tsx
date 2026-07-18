"use client";

import PhotoUpload from "./PhotoUpload";
import VoiceUpload from "./VoiceUpload";
import ChatUpload from "./ChatUpload";
import StoryUpload from "./StoryUpload";

export default function UploadHub() {
  return (
    <div className="space-y-8">

      <PhotoUpload />

      <VoiceUpload />

      <ChatUpload />

      <StoryUpload />

    </div>
  );
}