
'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQS } from '@/constants/data';

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-[#0B0B0B]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-white mb-4">Preguntas Frecuentes</h2>
          <p className="text-muted-foreground">Todo lo que necesitas saber sobre elohz.</p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border-border px-4 hover:bg-card/50 transition-colors rounded-xl mb-4">
              <AccordionTrigger className="text-left text-white font-medium hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
