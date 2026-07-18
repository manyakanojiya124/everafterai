export default function RightPanel() {
  return (
    <aside className="w-[360px] border-l border-stone-200 bg-white">

      <div className="p-8">

        <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-stone-200 text-5xl">

          M

        </div>

        <h2 className="mt-6 text-center text-2xl font-bold">

          Mom

        </h2>

        <p className="mt-2 text-center text-stone-500">

          Mother

        </p>

      </div>

      <div className="space-y-6 px-8">

        <div>

          <h3 className="font-semibold">

            About

          </h3>

          <p className="mt-2 text-sm text-stone-600">

            This person's memories will appear here.

          </p>

        </div>

        <div>

          <h3 className="font-semibold">

            Statistics

          </h3>

          <div className="mt-3 space-y-2 text-sm">

            <p>📸 Photos : 0</p>

            <p>🎤 Voice : 0</p>

            <p>💬 Chats : 0</p>

            <p>📄 Letters : 0</p>

          </div>

        </div>

      </div>

    </aside>
  );
}