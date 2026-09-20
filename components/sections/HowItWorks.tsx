import { MockPopupMenu } from "@/components/mocks/MockPopupMenu";

const steps = [
  {
    title: "Add to Chrome",
    body: "Install cluadehelper from the Chrome Web Store in a few seconds. No account or sign-up required.",
  },
  {
    title: "Open claude.ai",
    body: "The usage tracker and token counter appear automatically above the message box on your next chat.",
  },
  {
    title: "Click the icon for more",
    body: "Open the toolbar popup any time to export or fork a conversation, or jump straight into Continuity.",
  },
  {
    title: "Customize in Settings",
    body: "Turn features on or off, set your default export format, and build out your slash-command prompt library.",
  },
];

export function HowItWorks() {
  return (
    <section className="border-y border-border bg-surface/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 flex justify-center lg:order-1">
            <MockPopupMenu />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Set up in under a minute
            </h2>

            <ol className="mt-8 space-y-6">
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
          </div>
        </div>
      </div>
    </section>
  );
}
