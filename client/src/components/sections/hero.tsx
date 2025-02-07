import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { IPhoneFrame } from "@/components/ui/iphone-frame";
import { useUtmTitle } from "@/hooks/use-utm";

export default function Hero() {
  const title = useUtmTitle();

  return (
    <div className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="pt-8 flex justify-center">
          <img src="/logo1.png" alt="Sale Scout Logo" className="h-12" />
        </div>

        <div className="relative z-10 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl">
              Maximize your sales and profits with the world's №1 repricer on noon and carrefour
            </h1>
            <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
              Automate price changes. Take the Buy Box. Increase your sales!
            </p>
            <div className="mt-10 flex flex-col items-center md:items-start gap-4">
              <Button size="lg" className="gap-2 w-full md:w-auto">
                Try for free <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="text-sm text-muted-foreground">
                No credit card required | Cancel anytime | 3-day trial
              </p>
            </div>
          </div>

          {/* iPhone with Video */}
          <div className="flex-1 flex justify-center items-center">
            <IPhoneFrame videoSrc="/VIDEO_Phone.mp4" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.100),transparent)]" />
    </div>
  );
}