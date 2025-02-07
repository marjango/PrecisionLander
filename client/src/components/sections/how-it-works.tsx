import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    title: "Step One",
    description: "Description of step one",
  },
  {
    number: "2",
    title: "Step Two",
    description: "Description of step two",
  },
  {
    number: "3",
    title: "Step Three",
    description: "Description of step three",
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
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
