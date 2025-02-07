import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    stars: "★★★★★",
    text: "SaleScout helped me to increase revenue up to 33%",
    author: "Ahmed",
    role: "noon seller"
  },
  {
    stars: "★★★★★",
    text: "Now I have more time to do business, SaleScout automated all processes that I did by myself before",
    author: "Fatima",
    role: "noon seller"
  },
  {
    stars: "★★★★★",
    text: "Whenever noon does something, I receive notifications to my phone, and can react immediately",
    author: "Aziz",
    role: "noon seller"
  },
  {
    stars: "★★★★★",
    text: "Now 95% of my SKUs on the first place, and system works 24/7, I can sleep tight",
    author: "Hassan",
    role: "Carrefour seller"
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
                  <p className="text-sm sm:text-base mb-3">{item.text}</p>
                  <div className="text-sm font-semibold">{item.author}</div>
                  <div className="text-xs text-muted-foreground">{item.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}