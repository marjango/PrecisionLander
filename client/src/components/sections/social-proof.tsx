export default function SocialProof() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Placeholder for social proof elements */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground mt-2">Happy Customers</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
