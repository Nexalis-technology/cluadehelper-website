import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FaqAccordion } from "@/components/FaqAccordion";
import { InstallButton } from "@/components/InstallButton";
import { siteConfig } from "@/lib/site";
import { faqs } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Support",
  description: `Get help with ${siteConfig.name}: installation, troubleshooting, and how to reach us.`,
  alternates: { canonical: "/support" },
};

const troubleshooting = [
  {
    title: "The usage bar or token counter isn't showing up",
    body: "Refresh your claude.ai tab after installing or updating the extension. If it's still missing, check that Usage tracker and Live token counter are turned on under the extension's Settings.",
  },
  {
    title: "Export says \"Export failed. Is a conversation open?\"",
    body: "Open a Claude conversation with at least one message before exporting or forking — the extension reads the currently open chat.",
  },
  {
    title: "Continuity didn't open the other AI tool",
    body: "Check whether your browser blocked a pop-up. Allow pop-ups for claude.ai, then try Copy & open again — your context is already copied to the clipboard either way.",
  },
  {
    title: "A slash-command prompt isn't inserting",
    body: 'Make sure the prompt name in Settings matches exactly what you type after "/" in the message box, then press enter to insert it.',
  },
];

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Support
          </h1>
          <p className="mt-4 text-muted">
            Installation help, common issues, and how to reach us if
            something&apos;s not working.
          </p>

          <div className="mt-8">
            <InstallButton size="sm" />
          </div>

          <h2 className="mt-14 text-xl font-semibold">Troubleshooting</h2>
          <div className="mt-6 space-y-6">
            {troubleshooting.map((item) => (
              <div key={item.title}>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-14 text-xl font-semibold">
            Frequently asked questions
          </h2>
          <div className="mt-6">
            <FaqAccordion items={faqs} />
          </div>

          <h2 className="mt-14 text-xl font-semibold">Still stuck?</h2>
          <p className="mt-3 text-sm text-muted">
            Email{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="text-accent underline underline-offset-4"
            >
              {siteConfig.supportEmail}
            </a>{" "}
            with a description of the issue and, if you can, a screenshot —
            we read every message.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
