import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h1>
          {updated && (
            <p className="mt-2 text-sm text-muted">Last updated: {updated}</p>
          )}
          <div className="prose-legal mt-10 space-y-6 text-sm leading-relaxed text-foreground/80 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:first:mt-0 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
