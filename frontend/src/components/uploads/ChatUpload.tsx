"use client";

export default function ChatUpload() {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <h2 className="text-xl font-semibold">
        💬 Chat History
      </h2>

      <p className="mt-2 text-sm text-stone-500">
        WhatsApp
        <br />
        Telegram
        <br />
        Messenger
        <br />
        Instagram
      </p>

      <button className="mt-5 rounded-xl bg-black px-5 py-3 text-white">
        Upload Chat Export
      </button>
    </div>
  );
}