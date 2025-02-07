import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "Benefit 1",
    description: "Description of benefit 1",
  },
  {
    title: "Benefit 2",
    description: "Description of benefit 2",
  },
  {
    title: "Benefit 3",
    description: "Description of benefit 3",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Key Benefits
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Why businesses choose our solution
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
