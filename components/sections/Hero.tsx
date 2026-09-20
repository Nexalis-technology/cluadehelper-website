import { InstallButton } from "@/components/InstallButton";
import { MockChatInput } from "@/components/mocks/MockChatInput";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-brand/10 via-transparent to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-20 pt-16 text-center sm:pt-24">
        <p className="rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted">
          A free Chrome extension for claude.ai
        </p>

        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Never lose a Claude conversation to a{" "}
          <span className="text-brand">usage limit</span> again.
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg text-muted">
          cluadehelper adds usage tracking, a live token counter, chat export
          &amp; forking, and a slash-command prompt library right inside
          claude.ai — plus Continuity, one click to carry your context into
          ChatGPT or Gemini the moment Claude cuts you off.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <InstallButton />
          <a
            href="#continuity"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-surface"
          >
            See how Continuity works
          </a>
        </div>

        <p className="mt-4 text-xs text-muted">
          No account. No servers. Your prompts and settings stay in your
          browser.
        </p>

        <div className="mt-16 w-full max-w-2xl">
          <MockChatInput />
        </div>
      </div>
    </section>
  );
}
