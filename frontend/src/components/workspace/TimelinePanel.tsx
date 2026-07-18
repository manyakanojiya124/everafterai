export default function TimelinePanel() {
  return (
    <aside className="w-[340px] border-r border-stone-200 bg-white">

      <div className="border-b p-6">

        <h2 className="text-xl font-semibold">

          Memory Timeline

        </h2>

      </div>

      <div className="space-y-5 p-5">

        <div className="rounded-xl border p-4">

          📸

          Birthday Photos

        </div>

        <div className="rounded-xl border p-4">

          🎤

          Voice Notes

        </div>

        <div className="rounded-xl border p-4">

          💬

          WhatsApp Chats

        </div>

        <div className="rounded-xl border p-4">

          ❤️

          Stories

        </div>

      </div>

    </aside>
  );
}