"use client";

import UploadHub from "@/components/uploads/UploadHub";

export default function ChatPanel() {
  return (
    <main className="flex flex-1 flex-col">

      <header className="border-b bg-white p-6">

        <h1 className="text-2xl font-bold">
          Mom
        </h1>

        <p className="text-sm text-stone-500">
          AI Memory Companion
        </p>

      </header>

      <section className="flex-1 overflow-y-auto p-8">
        <UploadHub />
      </section>

      <footer className="border-t bg-white p-5">

        <div className="flex items-center gap-4">

          <button className="rounded-xl border px-4 py-3">
            📎
          </button>

          <input
            placeholder="Ask about a memory..."
            className="flex-1 rounded-xl border px-5 py-3"
          />

          <button className="rounded-xl bg-black px-6 py-3 text-white">
            Send
          </button>

        </div>

      </footer>

    </main>
  );
}