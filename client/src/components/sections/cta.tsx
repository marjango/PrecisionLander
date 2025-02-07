import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="relative z-10 px-8 py-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-4 text-lg opacity-90">
                Join thousands of businesses already using our platform to grow and
                succeed.
              </p>
              <div className="mt-8">
                <Button
                  size="lg"
                  variant="secondary"
                  className="font-semibold"
                >
                  Start Your Free Trial
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-90" />
          </div>
        </Card>
      </div>
    </section>
  );
}
