import React, { useState } from "react";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      desc: "Clarity of thought behind building the modules and having an answer to the problems/use cases we brought up earned the brownie points in choosing DotPr POS",
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

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? sliderItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === sliderItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-black h-screen">
      <div>
        {/* heading */}
        <div className="text-white text-center pt-12 text-[80px] font-bold">
          Testimonial with our merchant
        </div>

        {/* carousel */}
        <div className="relative max-w-[900px] mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {sliderItems.map((items, index) => (
              <div
                key={index}
                className="flex bg-white justify-between w-full min-w-full max-h-[400px] rounded-lg px-10 pt-10 gap-6"
              >
                <div className="flex flex-col">
                  <h1>{items.name}</h1>
                  <h1>{items.about}</h1>
                  <p>{items.desc}</p>
                </div>

                <div className="flex justify-end w-[350px] h-full">
                  <img
                    src={items.image}
                    className="h-[300px] object-cover"
                    alt={`${items.name}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* buttons */}
        <div className="flex justify-center gap-6 mt-6">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-white rounded-lg"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-white rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
