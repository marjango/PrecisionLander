import { Card } from "@/components/ui/card";
import ContactForm from "./contact-form";

export default function CTA() {
  return (
    <section className="py-24 bg-muted/50" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Ready to transform your business? Send us a message and we'll get back to you shortly.
          </p>
        </div>
        <div className="mx-auto max-w-lg">
          <Card className="p-6">
            <ContactForm />
          </Card>
        </div>
      </div>
    </section>
  );
}