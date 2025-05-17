import { Card, CardContent } from "@/components/ui/card";
import { WistiaEmbed1 } from "@/components/ui/wistia-embed-1";
import { WistiaEmbed2 } from "@/components/ui/wistia-embed-2";
import { WistiaEmbed3 } from "@/components/ui/wistia-embed-3";

const testimonials = [
  {
    stars: "★★★★★",
    text: "SaleScout did all the work I used to do by myself. Now I have more time to grow my business.",
    author: "Ahmed",
    role: "Noon Seller"
  },
  {
    stars: "★★★★★",
    text: "Thanks to SaleScout, my store works by itself. Now I can spend more time with my family.",
    author: "Fatima",
    role: "Noon Seller"
  },
  {
    stars: "★★★★★",
    text: "With SaleScout, my sales went up, and I finally bought my dream car!",
    author: "Aziz",
    role: "Noon Seller"
  },
  {
    stars: "★★★★★",
    text: "After I started using SaleScout, I sleep much better. My smartwatch shows my sleep has improved. I don't worry about BuyBox, it is always mine now",
    author: "Hassan",
    role: "Carrefour Seller"
  }
];

export default function SocialProof() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Trusted by Sellers Across UAE
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Join hundreds of successful sellers who have transformed their business with SaleScout
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {testimonials.map((item, index) => (
              <Card key={index} className="border-none shadow-md h-full">
                <CardContent className="pt-4 px-4 sm:pt-6 sm:px-6">
                  <div className="text-[#FFD700] text-lg sm:text-xl mb-2">{item.stars}</div>
                  <p className="text-sm sm:text-base mb-3 italic">{item.text}</p>
                  <div className="text-sm font-semibold">{item.author}</div>
                  <div className="text-xs text-muted-foreground">{item.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div classNameName="flex gap-20">
            
      
            <WistiaEmbed3 />
          </div>
          <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide"><WistiaEmbed1 /></div>
              <div className="swiper-slide"><WistiaEmbed2 /></div>
              <div className="swiper-slide">Slide 3</div>
            </div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
        </div>
      </div>
    </section>
  );
}