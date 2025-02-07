import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    rating: "★★★★★",
    text: "SaleScout is an essential tool for dynamic pricing! Our sales on Noon have increased significantly thanks to their algorithms.",
    author: "Ahmed Al-Farsi",
    role: "E-commerce Specialist, Dubai",
  },
  {
    id: 2,
    rating: "★★★★★",
    text: "The service provided by SaleScout makes price management effortless. Our business in the UAE grew by 30% after integrating their solutions.",
    author: "Fatima Khalid",
    role: "Founder, Abu Dhabi Traders",
  },
  {
    id: 3,
    rating: "★★★★★",
    text: "Ease of use and powerful features make SaleScout the top choice for sellers in the MENA region.",
    author: "Omar Hassan",
    role: "Sales Director, Emirates Retail",
  },
  {
    id: 4,
    rating: "★★★★★",
    text: "I've been using SaleScout for over a year, and I can't imagine working without it. Their customer support is top-notch!",
    author: "Hassan Al-Maktoum",
    role: "Amazon & Noon Seller, Sharjah",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Trusted by Leading Businesses
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our customers are saying about SaleScout
          </p>
        </div>

        <div className="max-w-5xl mx-auto py-8">
          <div className="relative px-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="py-4">
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-2">
                    <Card className="border-none shadow-md mx-2">
                      <CardContent className="pt-6">
                        <div className="text-[#FFD700] text-xl mb-4">
                          {testimonial.rating}
                        </div>
                        <blockquote className="text-lg mb-6">
                          {testimonial.text}
                        </blockquote>
                        <footer>
                          <div className="font-semibold">{testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </div>
                        </footer>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute -left-4 top-1/2 -translate-y-1/2">
                <CarouselPrevious className="relative -left-1" />
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                <CarouselNext className="relative -right-1" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}