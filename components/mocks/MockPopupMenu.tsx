import { Sunburst } from "@/components/Logo";
import { siteConfig } from "@/lib/site";

export function MockPopupMenu() {
  return (
    <div className="w-full max-w-xs rounded-2xl bg-white p-6 text-zinc-900 shadow-2xl">
      <div className="flex items-center gap-2">
        <Sunburst className="h-5 w-5" />
        <div>
          <p className="text-base font-bold leading-tight">{siteConfig.name}</p>
          <p className="text-xs text-zinc-500">{siteConfig.tagline}</p>
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-zinc-100 px-3 py-2 text-sm text-zinc-600">
        Session: 0% · Weekly: 12%
      </div>

      <p className="mt-4 text-sm font-semibold">Export conversation</p>
      <div className="mt-2 grid grid-cols-3 gap-2 text-xs font-medium">
        {["Markdown", "JSON", "Plaintext"].map((label) => (
          <span
            key={label}
            className="rounded-lg border border-zinc-300 px-2 py-2 text-center"
          >
            {label}
          </span>
        ))}
      </div>

      <p className="mt-4 text-sm font-semibold">Fork conversation</p>
      <div className="mt-2 rounded-lg border border-zinc-300 px-3 py-2 text-center text-xs text-zinc-500">
        Pick a message to fork from
      </div>

      <p className="mt-4 text-sm font-semibold">Continuity</p>
      <div className="mt-2 rounded-lg bg-accent py-2.5 text-center text-sm font-semibold text-accent-foreground">
        Open Continuity
      </div>

      <p className="mt-4 border-t border-zinc-200 pt-3 text-sm font-semibold text-zinc-700">
        Settings →
      </p>
    </div>
  );
}
