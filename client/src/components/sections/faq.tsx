import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What is SaleScout?",
    answer: "SaleScout is an automated repricer that helps sellers on noon and carrefour optimize their prices to increase sales and profits. It monitors competitor prices 24/7 and automatically adjusts your prices within your set limits.",
  },
  {
    question: "How does SaleScout work?",
    answer: "SaleScout connects to your noon/carrefour store, monitors competitor prices, and automatically adjusts your prices based on your settings. You set min/max prices to protect your margins, and our system ensures you stay competitive.",
  },
  {
    question: "Is it safe to use SaleScout?",
    answer: "Yes, SaleScout is completely safe. We use secure API connections, protect your data, and never exceed your set price limits. Our system is trusted by hundreds of sellers across UAE.",
  },
  {
    question: "How much can I increase my sales?",
    answer: "Our sellers typically see a 20-30% increase in sales within the first month. Results vary based on your market and competition, but automated pricing helps you capture more sales opportunities.",
  },
  {
    question: "Do you offer support?",
    answer: "Yes, we provide 24/7 support through WhatsApp. Each client gets a personal manager who can help with setup, optimization, and any questions you have.",
  }
];

export default function FAQ() {
  return (
    <section className="py-24" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know about our service
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-lg font-medium mb-4">Want to speak to the manager?</p>
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2"
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=971585661204', '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              Contact on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}