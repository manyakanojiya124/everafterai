"use client";

export default function VoiceUpload() {
  return (
    <div className="rounded-2xl border bg-white p-6">

      <h2 className="text-xl font-semibold">
        🎤 Voice Memories
      </h2>

      <p className="mt-2 text-sm text-stone-500">
        Upload voice notes and recordings.
      </p>

      <div className="mt-5 flex gap-4">

        <button className="rounded-xl bg-black px-5 py-3 text-white">
          Upload Audio
        </button>

        <button className="rounded-xl border px-5 py-3">
          Record Voice
        </button>

      </div>

    </div>
  );
}