export function MockChatInput() {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#141416] p-6 shadow-2xl shadow-black/40 sm:p-10">
      <p className="text-center font-display text-2xl italic text-zinc-200 sm:text-4xl">
        Ready when you are.
      </p>

      <div className="mx-auto mt-6 flex max-w-md items-center justify-between gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs text-zinc-400 sm:text-sm">
        <span>
          Session <span className="text-success font-medium">0%</span> · Reset
          in 4h 47m
        </span>
        <span className="hidden text-zinc-600 sm:inline">|</span>
        <span className="hidden sm:inline">
          Weekly <span className="text-success font-medium">12%</span> · Reset
          in 4d 3h
        </span>
      </div>

      <div className="relative mt-6 rounded-2xl border border-white/10 bg-black/30 p-5">
        <span className="absolute -top-3 right-4 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground shadow-lg shadow-accent/30">
          Continuity
        </span>
        <p className="text-sm text-zinc-500">Type / for skills</p>
        <div className="mt-8 flex items-center justify-between text-zinc-500">
          <div className="flex items-center gap-3 text-xs">
            <span className="rounded-full border border-white/10 px-2 py-1">
              +
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 text-zinc-200">
              Chat
            </span>
            <span className="px-1">Cowork</span>
          </div>
          <span className="text-xs">124 words · ~168 tokens</span>
        </div>
      </div>
    </div>
  );
}
