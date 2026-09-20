export function MockContinuityModal() {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-zinc-100 p-6 text-zinc-900 shadow-2xl">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-bold">Continuity</h3>
        <span className="text-zinc-400">✕</span>
      </div>
      <p className="mt-3 text-sm text-zinc-500">0% used · Weekly 12%</p>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-zinc-300">
        <div className="h-full w-[12%] rounded-full bg-zinc-500" />
      </div>

      <div className="mt-5 grid grid-cols-2 overflow-hidden rounded-xl bg-zinc-200 p-1 text-sm font-semibold">
        <button className="rounded-lg bg-white py-2 shadow-sm">Refine</button>
        <button className="rounded-lg py-2 text-zinc-500">Continue</button>
      </div>

      <p className="mt-4 text-sm text-zinc-500">Type a draft in the message box first.</p>
    </div>
  );
}
