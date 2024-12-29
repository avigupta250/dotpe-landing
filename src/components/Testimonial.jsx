import React, { useRef, useState } from "react";
// Import Swiper React components
import {motion} from "motion/react"
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack ,IoIosArrowForward} from "react-icons/io";

// Import Swiper styles
import "swiper/css";



import { Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {
  const sliderItems = [
    {
      name: "Aparna Andrews",
      about: "co-Founder, Biryani Blues",
      desc: "By far the best inventory management system in the entire market. We love the flow and thought put into developing the product",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/biryani-blues-founder-image-160622.png",
    },
    {
      name: "Karthik Ranganathan",
      about: "Assistant VP, eCommerce, The ThickShake Factory",
      desc: " Clarity of thought behind building the modules and having an answer to thr problems/use cases we brought up earned the brownie points in choosing DotPr POS",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/thick-shake-founder-image-160622.png",
    },
    {
      name: "Rajat Jaiswal",
      about: "Co-founder, Wat-a-burger",
      desc: "With DotPe's QR solutions, we've been able to reduce out 3rd party commission by a whopping 98%. Growing in this challenging fast food industry is not so difficult anymore, with DotPe as our partner",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/wat-a-burger-founder-image-160622.png",
    },
    {
      name: "Aparna Andrews",
      about: "co-Founder, Biryani Blues",
      desc: "By far the best inventory management system in the entire market. We love the flow and thought put into developing the product",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/biryani-blues-founder-image-160622.png",
    },
    {
      name: "Karthik Ranganathan",
      about: "Assistant VP, eCommerce, The ThickShake Factory",
      desc: " Clarity of thought behind building the modules and having an answer to thr problems/use cases we brought up earned the brownie points in choosing DotPr POS",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/thick-shake-founder-image-160622.png",
    },
    {
      name: "Rajat Jaiswal",
      about: "Co-founder, Wat-a-burger",
      desc: "With DotPe's QR solutions, we've been able to reduce out 3rd party commission by a whopping 98%. Growing in this challenging fast food industry is not so difficult anymore, with DotPe as our partner",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/wat-a-burger-founder-image-160622.png",
    },
    {
      name: "Aparna Andrews",
      about: "co-Founder, Biryani Blues",
      desc: "By far the best inventory management system in the entire market. We love the flow and thought put into developing the product",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/biryani-blues-founder-image-160622.png",
    },
    {
      name: "Karthik Ranganathan",
      about: "Assistant VP, eCommerce, The ThickShake Factory",
      desc: "Clarity of thought behind building the modules and having an answer to thr problems/use cases we brought up earned the brownie points in choosing DotPr POS",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/thick-shake-founder-image-160622.png",
    },
    {
      name: "Rajat Jaiswal",
      about: "Co-founder, Wat-a-burger",
      desc: "With DotPe's QR solutions, we've been able to reduce out 3rd party commission by a whopping 98%. Growing in this challenging fast food industry is not so difficult anymore, with DotPe as our partner",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/wat-a-burger-founder-image-160622.png",
    },
  ];

  return (
    <div className="bg-black ">
      <div>
        {/* heading */}
        <div className="text-white md:mb-20 mb-[50px]  text-[30px] text-center pt-10 md:pt-20 md:text-[60px] font-bold">
          <motion.h1
           initial={{opacity:0,y:-50}}
           whileInView={{opacity:1,y:0}}
           transition={{duration:0.5,delay:0.5}}
          >Moments with our Merchant</motion.h1>
        </div>

        {/* corousel */}
        <div className="flex gap-6 w-full">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            // pagination={false}
            centeredSlides={true}
            initialSlide={2}
            navigation={{
              nextEl: ".next-button",
              prevEl: ".prev-button",
            }}
            //    loopedSlides={3}
            pagination={{
              clickable: true,
              type: "custom",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper w-full overflow-hidden h-[470px] md:h-[400px]    flex justify-center items-center text-white"
          >
            {sliderItems.map((item, index) => (
              <SwiperSlide key={index} className="bg-white rounded-3xl md:min-w-[720px] text-black">
                <div className="w-full px-5  pt-10 md:px-12 md:pt-12 justify-between flex flex-col md:flex-row h-full">
                  <div className="md:w-1/2">
                      <motion.h1
                       initial={{opacity:0,x:-50}}
                       whileInView={{opacity:1,x:0}}
                       transition={{duration:0.5,delay:0.5}}
                       className=" md:text-[40px] leading-4 text-[18px] md:leading-10 font-bold">{item.name}</motion.h1>

                      <motion.h1 
                       initial={{opacity:0,x:-30}}
                       whileInView={{opacity:1,x:0}}
                       transition={{duration:0.5,delay:0.6}}
                      className="mt-[18px]  text-[15px] leading-4 md:leading-5 italic md:mt-[25px] font-bold md:text-[20px]">{item.about}</motion.h1>
                      <motion.p
                      initial={{opacity:0,x:-30}}
                      whileInView={{opacity:1,x:0}}
                      transition={{duration:0.5,delay:0.8}}
                       className=" mt-[15px] leading-5 md:mt-[20px] md:leading-6 text-gray-900 italic text-[15px] ">{'"'}{item.desc}{'"'}</motion.p>
                  </div>

                  <div className="">

                    <motion.img
                    initial={{opacity:0,y:60}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:0.5,delay:0.9}}
                    src={item.image}
                    className="object-cover  w-full h-full"
                    />

                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* button */}
        <motion.div className="flex  w gap-4 justify-center mt-10  pb-10">
          <motion.button
          initial={{opacity:0,x: -30}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.5,delay:0.5}}
           className="prev-button  text-center flex justify-center items-center text-3xl bg-black border  border-gray-500 hover:border-gray-100 hover:text-gray-100 transition-all duration-300 text-gray-500 font-bold w-10 h-10  rounded-full">
           <IoIosArrowBack/>
          </motion.button>
          <motion.button
           initial={{opacity:0,x: 30}}
           whileInView={{opacity:1,x:0}}
           transition={{duration:0.6,delay:0.4}}
           className="next-button  text-center flex justify-center items-center text-3xl bg-black border  border-gray-500 hover:border-gray-100 hover:text-gray-100 transition-all duration-300 text-gray-500 font-bold w-10 h-10  rounded-full">
            <IoIosArrowForward/>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
