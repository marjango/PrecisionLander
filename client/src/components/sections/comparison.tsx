import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContactFormDialog } from "@/components/ui/contact-form-dialog";

const comparisons = {
  old: [
    "Updating prices manually – constant monitoring, slow reactions",
    "Scattered analytics – checking Noon, Carrefour, suppliers, WhatsApp groups",
    "Guesswork & lost profits – competitors adjust prices faster, missed sales"
  ],
  new: [
    "Auto price updates – real-time adjustments, no manual work",
    "All data in one place – instant competitor insights, no need to search",
    "Higher profits, less effort – AI-driven pricing, better margins, more sales"
  ]
};

export default function Comparison() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Old Way vs New Way
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See how our solution transforms your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Old Way */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Manual & Time-Consuming</h3>
              <ul className="space-y-4">
                {comparisons.old.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-red-500 mt-1">●</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* New Way */}
          <Card className="border-primary">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">With SaleScout: Smart & Automated</h3>
              <ul className="space-y-4">
                {comparisons.new.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-green-500 mt-1">●</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <ContactFormDialog>
            <Button size="lg">Connect my store</Button>
          </ContactFormDialog>
        </div>
      </div>
    </section>
  );
}