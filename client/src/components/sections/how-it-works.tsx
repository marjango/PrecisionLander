import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Link as LinkIcon, Settings } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Register",
    description: "Just follow registration process",
    icon: UserPlus,
  },
  {
    number: "2",
    title: "Connect",
    description: "Connect your store on noon/carrefour to SaleScout",
    icon: LinkIcon,
  },
  {
    number: "3",
    title: "Give min max prices",
    description: "Provide min and max prices for each SKU, in order to keep your margin",
    icon: Settings,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get started in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted hidden md:block" />

          {steps.map((step, index) => (
            <Card key={index} className="border-none shadow-md relative bg-background">
              <CardContent className="pt-6">
                {/* Step Number */}
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                  {step.number}
                </div>
                {/* Icon and Title */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                {/* Description */}
                <p className="text-muted-foreground text-center">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}