import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, HeadphonesIcon, BarChart3 } from "lucide-react";
import { IPhoneFrame } from "@/components/ui/iphone-frame";
import { ContactFormDialog } from "@/components/ui/contact-form-dialog";

const benefits = [
  {
    title: "Personal notifications",
    description: "Receive critical notifications right to your phone",
    icon: Bell,
  },
  {
    title: "24/7 support",
    description: "Personal manager, that always online, can help you with everything",
    icon: HeadphonesIcon,
  },
  {
    title: "Analytics",
    description: "Explore one and only analytics on all sales on noon",
    icon: BarChart3,
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
            Everything you need to succeed on noon and carrefour
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="pt-6">
                <benefit.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ContactFormDialog>
            <Button size="lg">Connect my store</Button>
          </ContactFormDialog>
        </div>

        <div className="mt-16">
          <div className="max-w-sm mx-auto">
            <IPhoneFrame videoSrc="/VIDEO_Phone_optimized.mp4" />
          </div>
        </div>
      </div>
    </section>
  );
}