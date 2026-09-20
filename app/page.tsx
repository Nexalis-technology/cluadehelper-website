import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { ContinuitySection } from "@/components/sections/ContinuitySection";
import { PromptLibrarySection } from "@/components/sections/PromptLibrarySection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <ContinuitySection />
        <PromptLibrarySection />
        <HowItWorks />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
