import { InstallButton } from "@/components/InstallButton";
import { Sunburst } from "@/components/Logo";

export function CtaSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-16 text-center">
          <Sunburst className="mx-auto h-10 w-10" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Get more out of every Claude session
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Install cluadehelper and keep your usage, tokens, prompts, and
            context in view — no matter where your work continues.
          </p>
          <div className="mt-8 flex justify-center">
            <InstallButton />
          </div>
        </div>
      </div>
    </section>
  );
}
