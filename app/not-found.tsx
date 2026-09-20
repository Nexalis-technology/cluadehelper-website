import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Sunburst } from "@/components/Logo";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <Sunburst className="h-10 w-10" />
        <h1 className="mt-6 text-3xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
