const featureFlags = [
  "Usage tracker",
  "Chat export",
  "Conversation forking",
  'Prompt library (type "/" in the message box)',
  "Continuity (refine draft, capture context, continue elsewhere)",
  "Live token counter (above the message box)",
];

export function MockSettingsPanel() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white p-6 text-zinc-900 shadow-2xl">
      <h3 className="text-lg font-bold">Features</h3>
      <ul className="mt-3 space-y-2.5">
        {featureFlags.map((flag) => (
          <li key={flag} className="flex items-start gap-2.5 text-sm">
            <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-blue-600 text-[10px] text-white">
              ✓
            </span>
            {flag}
          </li>
        ))}
      </ul>

      <h3 className="mt-6 text-lg font-bold">Prompt library</h3>
      <div className="mt-3 rounded-xl border border-zinc-200 p-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold">codereview</p>
          <div className="flex gap-2 text-xs">
            <span className="rounded border border-zinc-300 px-2 py-1">
              Edit
            </span>
            <span className="rounded border border-zinc-300 px-2 py-1">
              Delete
            </span>
          </div>
        </div>
        <p className="mt-1 text-xs text-zinc-500">
          Review this code for bugs, readability, and edge cases…
        </p>
      </div>
    </div>
  );
}
