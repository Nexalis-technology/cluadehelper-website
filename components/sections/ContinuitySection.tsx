import { MockContinuityModal } from "@/components/mocks/MockContinuityModal";
import { MockContinuityForm } from "@/components/mocks/MockContinuityForm";

const steps = [
  {
    title: "Getting close to a limit",
    body: "The Continuity pill sits next to your message box, alongside your live session and weekly usage.",
  },
  {
    title: "Refine or Continue",
    body: "Refine polishes the draft you're currently writing. Continue captures context so you can pick up the work somewhere else.",
  },
  {
    title: "Four short fields, not a re-explanation",
    body: "Goal, key decisions so far, current state, and next step — enough for another AI to pick up exactly where Claude left off.",
  },
  {
    title: "Copy & open",
    body: "Choose ChatGPT, Gemini, or another tool from the dropdown. cluadehelper copies a structured prompt and opens it for you.",
  },
];

export function ContinuitySection() {
  return (
    <section
      id="continuity"
      className="scroll-mt-20 border-y border-border bg-surface/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            Continuity
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            When Claude cuts you off, your context doesn&apos;t have to stop
          </h2>
          <p className="mt-4 text-muted">
            Continuity turns a hit-the-limit moment into a two-click handoff —
            to ChatGPT, Gemini, or whichever AI tool you reach for next.
          </p>
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <ol className="space-y-8">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-center">
            <MockContinuityModal />
            <MockContinuityForm />
          </div>
        </div>
      </div>
    </section>
  );
}
