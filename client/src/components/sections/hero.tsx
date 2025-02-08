import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { WistiaEmbed } from "@/components/ui/wistia-embed";
import { useUtmTitle } from "@/hooks/use-utm";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ContactFormDialog } from "@/components/ui/contact-form-dialog";

export default function Hero() {
  const title = useUtmTitle();

  return (
    <div className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Logo and Buttons */}
        <div className="pt-8 flex justify-between items-center">
          <img src="/logo1.png" alt="Sale Scout Logo" className="h-8 sm:h-12" />
          <div className="flex gap-4">
            <Button variant="outline" className="hidden sm:flex">
              Log In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Register
            </Button>
          </div>
        </div>

        <div className="relative z-10 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-extrabold text-black sm:text-5xl md:text-6xl">
              {title}
            </h1>

            {/* Marketplace Logos */}
            <div className="mt-8 flex items-center justify-center md:justify-start space-x-12">
              <div className="w-32">
                <img 
                  src="/noon-logo.png" 
                  alt="noon Marketplace" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="w-32">
                <img 
                  src="/carrefour-seeklogo.png" 
                  alt="Carrefour Marketplace" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            <p className="mt-8 text-lg text-muted-foreground sm:text-xl">
              Automate price changes. Take the Buy Box. Increase your sales!
            </p>

            <div className="mt-10 flex flex-col items-center md:items-start gap-4">
              <ContactFormDialog>
                <Button size="lg" className="gap-2 w-full md:w-auto bg-blue-600 hover:bg-blue-700">
                  Try for free <ArrowRight className="h-4 w-4" />
                </Button>
              </ContactFormDialog>
              <p className="text-sm text-muted-foreground">
                No credit card required | Cancel anytime | 3-day trial
              </p>

              {/* Mobile-only video button */}
              <Collapsible className="w-full md:hidden">
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full mt-4 gap-2">
                    Watch video of how it works <ChevronDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <div className="w-full">
                    <WistiaEmbed />
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          {/* Desktop Video */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="md:w-[280px] lg:w-[360px]">
              <WistiaEmbed />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.100),transparent)]" />
    </div>
  );
}