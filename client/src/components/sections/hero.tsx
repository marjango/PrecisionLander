import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl">
              Transform Your Business with Modern Solutions
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Empower your organization with cutting-edge tools and technology.
              Build, deploy, and scale with confidence.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.100),transparent)]" />
    </div>
  );
}
