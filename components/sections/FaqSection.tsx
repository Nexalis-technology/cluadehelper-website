import { FaqAccordion } from "@/components/FaqAccordion";
import { faqs } from "@/lib/faq";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 py-20 sm:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-muted">
            Can&apos;t find what you&apos;re looking for? Visit the{" "}
            <a href="/support" className="text-accent underline underline-offset-4">
              support page
            </a>
            .
          </p>
        </div>

        <div className="mt-12">
          <FaqAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
