import {
  Gauge,
  Type,
  Route,
  Download,
  GitFork,
  SlashSquare,
} from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Usage tracker",
    description:
      "See your session and weekly usage as a percentage, with reset countdowns, right above the chat box — always know how much room you have left.",
  },
  {
    icon: Type,
    title: "Live token counter",
    description:
      "As you type, cluadehelper shows a live word count and token estimate above the message box, so you're never guessing whether a message will fit.",
  },
  {
    icon: Route,
    title: "Continuity",
    description:
      "Hit a limit? Capture your goal, key decisions, current state, and next step, then copy a ready-made prompt straight into ChatGPT, Gemini, or another AI tool.",
  },
  {
    icon: Download,
    title: "Chat export",
    description:
      "Export any conversation to Markdown, JSON, or plain text in one click — for backups, documentation, or sharing with a teammate.",
  },
  {
    icon: GitFork,
    title: "Conversation forking",
    description:
      "Pick any message in the thread and fork the conversation from that exact point, without losing the rest of your history.",
  },
  {
    icon: SlashSquare,
    title: "Prompt library",
    description:
      'Save your best prompts once. Type "/" in the message box — like /codereview — and hit enter to insert the full prompt instantly.',
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you wish claude.ai did natively
          </h2>
          <p className="mt-4 text-muted">
            Six focused tools that live directly inside your Claude chat —
            no tab switching, no copy-pasting into a separate app.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <feature.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
