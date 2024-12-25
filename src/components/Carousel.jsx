import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
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

  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <></>, 
    nextArrow: <></>,
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="w-full mt-[100px] mx-auto p-4">
      {/* Slider */}
      <Slider {...settings} ref={sliderRef}>
        {sliderItems.map((item, index) => (
          <div
            key={index}
            className="bg-white flex justify-center items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-[280px] h-[200px] object-fit  mx-auto"
            />
          </div>
        ))}
      </Slider>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={handlePrev}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
