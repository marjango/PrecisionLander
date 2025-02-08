import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Smartphone, BarChart } from "lucide-react";

const features = [
  {
    title: "Lightning Fast",
    description: "Built for speed and performance from the ground up",
    icon: Zap,
  },
  {
    title: "Secure by Default",
    description: "Enterprise-grade security out of the box",
    icon: Shield,
  },
  {
    title: "Mobile First",
    description: "Responsive design that works on any device",
    icon: Smartphone,
  },
  {
    title: "Analytics Built-in",
    description: "Comprehensive insights into your business",
    icon: BarChart,
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Everything you need to succeed
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our platform provides all the tools you need to build and grow
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardHeader>
                <feature.icon className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg">Connect my store</Button>
        </div>
      </div>
    </section>
  );
}