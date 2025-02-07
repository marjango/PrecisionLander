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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((item, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="pt-6">
                <div className="text-[#FFD700] text-xl mb-2">{item.stars}</div>
                <p className="text-sm mb-4">{item.text}</p>
                <div className="text-sm font-semibold">{item.author}</div>
                <div className="text-xs text-muted-foreground">{item.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}