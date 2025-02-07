import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$100/m",
    features: [
      "Repricer for up to 100 SKUs",
      "Notifications",
    ],
  },
  {
    name: "Pro",
    price: "$1 per SKU/m",
    features: [
      "Repricer for unlimited SKUs",
      "Notifications system",
      "Analytics on all sales on noon",
      "Personal manager 24/7",
    ],
    popular: true,
  },
  {
    name: "Platinum",
    price: "$3000/m",
    features: [
      "Everything from Pro tariff",
      "Adding new features by your ask",
      "Personal assistance in the UAE",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the perfect plan for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative h-[480px] ${plan.popular ? 'border-primary' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-primary-foreground px-6 py-1 rounded-full text-sm whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="flex flex-col h-full">
                <CardHeader className="space-y-2">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="text-3xl font-bold">{plan.price}</div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button className="w-full">Connect</Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}