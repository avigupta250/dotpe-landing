import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from "./Carousel";

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
  ];

  const settings = {
    // dots: true,
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    // autoplay: true, 
    autoplaySpeed: 2000, 
  };
  return (
    <div className="bg-black h-screen">
      <div>
        {/* heading */}
        <div className="text-white text-center pt-12 text-[80px] font-bold">
          Testimonial with our merchant
        </div>

        {/* corousel */}
        <div className="flex gap-6 w-full h-[500px]  web overflow-y-hidden">
  <Carousel/>

            {/* <Slider {...settings}>
          {sliderItems.map((items, index) => (
            <div className="flex bg-white justify-between max-w-full    max-h-[400px]  rounded-lg px-10 pt-10 gap-6 ">
              <div className="flex flex-col ">
                <h1>{items.name}</h1>
                <h1>{items.about}</h1>
                <p>{items.desc}</p>
              </div>

              <div className="flex justify-end w-[350px] h-full  ">
                <img src={items.image}
                className="  h-[300px]  object-cover"
                />
              </div>
            </div>
          ))}
          </Slider> */}
        </div>

        {/* button */}
        <div></div>
      </div>
    </div>
  );
};

export default Testimonial;
