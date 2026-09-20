const fields = [
  { label: "Goal", placeholder: "What are you trying to accomplish overall?" },
  {
    label: "Key decisions so far",
    placeholder: "What choices have you already made/settled on?",
  },
  { label: "Current state", placeholder: "Where things stand right now." },
  {
    label: "Next step",
    placeholder: "What you'd do next if this session cut out.",
  },
];

export function MockContinuityForm() {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-zinc-100 p-6 text-zinc-900 shadow-2xl">
      <div className="grid grid-cols-2 overflow-hidden rounded-xl bg-zinc-200 p-1 text-sm font-semibold">
        <button className="rounded-lg py-2 text-zinc-500">Refine</button>
        <button className="rounded-lg bg-white py-2 shadow-sm">Continue</button>
      </div>

      <div className="mt-4 space-y-3">
        {fields.map((field) => (
          <div key={field.label}>
            <p className="text-sm font-semibold">{field.label}</p>
            <div className="mt-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-xs text-zinc-400">
              {field.placeholder}
            </div>
          </div>
        ))}

        <div>
          <p className="text-sm font-semibold">Continue in</p>
          <div className="mt-1 flex items-center justify-between rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm">
            ChatGPT
            <span className="text-zinc-400">⌄</span>
          </div>
        </div>
      </div>

      <button className="mt-5 w-full rounded-xl bg-accent py-3 text-sm font-semibold text-accent-foreground">
        Copy &amp; open
      </button>
    </div>
  );
}
