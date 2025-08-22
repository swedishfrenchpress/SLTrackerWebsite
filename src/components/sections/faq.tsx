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
      title="FAQ"
      subtitle="Common Questions"
      align="center"
      className="container px-4 mx-auto max-w-[var(--max-container-width)]"
    >
      <div className="flex justify-center">
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-4xl py-10 space-y-6"
        >
          {siteConfig.faqs.map((faq, index) => (
            <AccordionItem 
              key={index}
              value={`item-${index}`}
              className="border border-border/30 rounded-3xl bg-gradient-to-br from-muted/20 to-muted/10 backdrop-blur-sm overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:no-underline px-8 py-6 font-bold text-xl text-foreground hover:text-primary transition-colors duration-200">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6 text-muted-foreground/90 leading-relaxed text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
