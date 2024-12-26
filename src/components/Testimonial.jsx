import React, { useRef, useState } from "react";
// Import Swiper React components
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
    <div className="bg-black min-h-screen">
      <div>
        {/* heading */}
        <div className="text-white mb-20  text-[30px] text-center pt-20 md:text-[60px] font-bold">
          Moments with our Merchant
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
            className="mySwiper w-full overflow-hidden h-[570px] md:h-[400px]    flex justify-center items-center text-white"
          >
            {sliderItems.map((item, index) => (
              <SwiperSlide className="bg-white rounded-3xl md:min-w-[720px] text-black">
                <div className="w-full px-5  pt-10 md:px-12 md:pt-12 justify-between flex flex-col md:flex-row h-full">
                  <div className="md:w-1/2">
                      <h1 className=" md:text-[40px] leading-4 text-[18px] md:leading-10 font-bold">{item.name}</h1>
                      <h1 className="mt-[18px]  text-[15px] leading-4 md:leading-5 italic md:mt-[25px] font-bold md:text-[20px]">{item.about}</h1>
                      <p className=" mt-[15px] leading-5 md:mt-[20px] md:leading-6 text-gray-900 italic text-[15px] ">{'"'}{item.desc}{'"'}</p>
                  </div>

                  <div className="">

                    <img
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
        <div className="flex gap-4 justify-center mt-10  pb-10">
          <button className="prev-button  text-center flex justify-center items-center text-3xl bg-black border  border-gray-500 hover:border-gray-100 hover:text-gray-100 transition-all duration-300 text-gray-500 font-bold w-10 h-10  rounded-full">
           <IoIosArrowBack/>
          </button>
          <button className="next-button  text-center flex justify-center items-center text-3xl bg-black border  border-gray-500 hover:border-gray-100 hover:text-gray-100 transition-all duration-300 text-gray-500 font-bold w-10 h-10  rounded-full">
            <IoIosArrowForward/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
