import { MockSettingsPanel } from "@/components/mocks/MockSettingsPanel";

export function PromptLibrarySection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              Prompt library
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Your best prompts, one slash away
            </h2>
            <p className="mt-4 text-muted">
              Stop hunting through old chats for that one prompt you wrote
              last month. Save it once in Settings, then insert it anywhere
              on claude.ai.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-surface p-5">
              <p className="text-xs uppercase tracking-wide text-muted">
                In the claude.ai message box
              </p>
              <p className="mt-3 font-mono text-sm text-accent">
                /codereview
              </p>
              <div className="mt-3 rounded-lg bg-code-block p-3 font-mono text-xs leading-relaxed text-muted">
                Review this code for correctness, edge cases, and readability.
                Call out any bugs, security issues, or simplification
                opportunities before suggesting a fix…
              </div>
              <p className="mt-3 text-xs text-muted">
                Hit enter and the full prompt drops straight into the chat.
              </p>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-muted">
              <li>• Give each prompt a short name and the full text to insert.</li>
              <li>• Edit or delete saved prompts any time from Settings.</li>
              <li>• Everything is stored locally in your browser.</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <MockSettingsPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
