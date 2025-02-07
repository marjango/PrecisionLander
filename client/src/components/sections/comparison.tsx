import { Card, CardContent } from "@/components/ui/card";

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
              <h3 className="text-xl font-semibold mb-4">The Old Way</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-muted-foreground">
                  <span className="mr-2">•</span>
                  Manual price updates
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="mr-2">•</span>
                  Time-consuming process
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="mr-2">•</span>
                  Missed opportunities
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* New Way */}
          <Card className="border-primary">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">The New Way</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-muted-foreground">
                  <span className="mr-2">•</span>
                  Automated price optimization
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="mr-2">•</span>
                  Real-time updates
                </li>
                <li className="flex items-center text-muted-foreground">
                  <span className="mr-2">•</span>
                  Increased profits
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
