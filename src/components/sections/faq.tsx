import { Section } from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/config";

export function FAQ() {
  return (
    <Section
      id="faq"
      subtitle="Questions, answered"
      align="center"
      className="container px-4 mx-auto max-w-[var(--max-container-width)]"
    >
      <div className="flex justify-center">
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-3xl space-y-4"
        >
          {siteConfig.faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-2xl bg-muted overflow-hidden transition-colors hover:border-border/80"
            >
              <AccordionTrigger className="text-left hover:no-underline px-6 py-5 font-semibold text-lg text-foreground hover:text-primary transition-colors duration-200">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-muted-foreground leading-relaxed text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
