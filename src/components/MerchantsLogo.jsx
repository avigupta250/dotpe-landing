import React from "react";
import { motion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MerchantsLogo = () => {
  const merchants = [
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-design-image-8-final-020622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-design-image-9-final-020622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-design-image-10-final-020622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-design-image-11-final-020622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-design-image-12-final-020622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-design-image-13-final-020622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-design-image-14-final-020622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-design-image-15-final-020622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-logo-design-image-1-150622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-logo-design-image-2-150622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-logo-design-image-3-150622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-logo-design-image-4-150622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-logo-design-image-4-150622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-logo-design-image-5-150622.jpg",
    },
    {
      brand: "",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/homepage-logo-design-image-6-150622.jpg",
    },
  ];
  return (
    <section className="w-full overflow-hidden md:h-screen    bg-white">
      <div className="flex w-full gap-10 flex-col  justify-center items-center">
        <motion.h1
        className="text-[30px] mt-[80px] md:mt-[150px] px-10 leading-[35px] md:text-[50px] md:px-[300px] md:leading-[65px] text-center font-bold"
        >
          Empowering lacs of businesses, Enabling millions of transactions
        </motion.h1>

<motion.div
 initial={{scale:0.4}}
 whileInView={{scale:1}}
 transition={{duration:0.4}}
className="w-full px-6 mt-[40px] md:p-0"
>
        <Swiper 
         slidesPerView={3}
         spaceBetween={50}
         breakpoints={{
            640: { 
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: { 
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: { 
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
         centeredSlides={true}
        initialSlide={5}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false, 
          }}
          speed={800}
          loop={true} 
          modules={[Autoplay]} 
       
         className="mySwiper w-full px-10   md:w-[1150px]   overflow-hidden   flex justify-center items-center text-white"
       >
        
          {merchants.map((merchant, index) => (
            <SwiperSlide
            key={index} 
            className="flex justify-center items-start"
            >
              <motion.img 
             
              src={merchant.image} className="h-[200p] w-[300px] object-contain" />
            </SwiperSlide>
          ))}
        </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default MerchantsLogo;
