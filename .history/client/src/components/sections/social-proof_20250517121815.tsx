import { Card, CardContent } from "@/components/ui/card";
import { WistiaEmbed1 } from "@/components/ui/wistia-embed-1";
import { WistiaEmbed2 } from "@/components/ui/wistia-embed-2";
import { WistiaEmbed3 } from "@/components/ui/wistia-embed-3";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { useRef } from 'react';

const slideClassName = `
  transition-opacity transition-filter duration-[600ms] ease-in-out
  blur-sm opacity-70
  hover:opacity-80 
  [&.swiper-slide-active]:blur-none
  [&.swiper-slide-active]:opacity-100
  [&.swiper-slide-active]:scale-100 
`;

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
  const swiperRef = useRef(null)

  const handleSlideClick = (index) => {
    if (swiperRef.current && swiperRef.current.slideTo) {
      swiperRef.current.slideTo(index);
    }
  };

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

        <div className="max-w-4xl mx-auto">
          <div className="relative ">
            <Swiper
              modules={[Navigation, EffectCoverflow]}
              effect="coverflow"
              loop={true}
              watchOverflow={true}
              slidesPerView={3}
              slidesPerGroup={1}
              spaceBetween={30}
              centeredSlides={true}
              freeMode={true}
              initialSlide={0}
              speed={600}
              navigation={{
                nextEl: '.custom-next',
                prevEl: '.custom-prev',
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: false,
                scale: 0.9,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
               <SwiperSlide onClick={() => handleSlideClick(0)}><WistiaEmbed1 /></SwiperSlide>
               <SwiperSlide onClick={() => handleSlideClick(0)}><WistiaEmbed2 /></SwiperSlide>
               <SwiperSlide onClick={() => handleSlideClick(0)}><WistiaEmbed3 /></SwiperSlide>
            </Swiper>

            <div className="custom-prev absolute top-1/2 left-4 z-10 flex items-center justify-center w-10 h-10 bg-white text-gray-800 rounded-full shadow-md transform -translate-y-1/2 hover:bg-gray-100 transition duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </div>

            <div className="custom-next absolute top-1/2 right-4 z-10 flex items-center justify-center w-10 h-10 bg-white text-gray-800 rounded-full shadow-md transform -translate-y-1/2 hover:bg-gray-100 transition duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </div>
          </div>

          

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-20">
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
        </div>
      </div>
    </section>
  );
}