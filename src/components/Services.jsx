import React from "react";
import { motion } from "motion/react";

const Services = () => {
  const cardData = [
    {
      title: "POS",
      desc: "Sync your in-store and online business with the industry's leading Point of Sale.",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/pos-image-business-solution-240622.jpg",
    },
    {
      title: "POS",
      desc: "Sync your in-store and online business with the industry's leading Point of Sale.",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/home/online-store-image-business-solution.jpg",
    },
    {
      title: "POS",
      desc: "Sync your in-store and online business with the industry's leading Point of Sale.",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/qr-solutions-image-business-solution-240622.jpg",
    },
    {
      title: "POS",
      desc: "Sync your in-store and online business with the industry's leading Point of Sale.",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/home/marketplace-integration.webp",
    },
    {
      title: "POS",
      desc: "Sync your in-store and online business with the industry's leading Point of Sale.",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/pos-image-business-solution-240622.jpg",
    },
    {
      title: "POS",
      desc: "Sync your in-store and online business with the industry's leading Point of Sale.",
      image:
        "https://cdn.dotpe.in/dotpe-website-live/images/delivery-image-business-solution-240622.jpg",
    },
  ];
  return (
    <section className="mt-[100px]">
      <motion.div className="flex max-w-[1080px] mx-auto flex-col items-center justify-center">
        <h1 className="text-black text-[30px] leading-[30px]  md:text-[56px] font-bold md:leading-[55px] text-center">
          Flexible <br />
         <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#704DA2] via-[#4A2D85] to-[#341A74]"> business solutions for</span>
          <br />
          omni-channel selling
        </h1>

        <div className="grid px-7 grid-cols-1 mt-10 gap-16 md:grid-cols-2">
          {cardData.map((item, index) => (
            <motion.div 
            initial={{opacity:0,y: 80}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5,delay:0.6}}
             className=" border rounded-3xl ">
              <motion.div className="p-10 flex flex-col gap-8">
                <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="text-[30px] font-bold"
                >
                  {item.title}
                </motion.h1>
                <motion.p
                initial={{opacity:0,y: -40}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.5,delay:0.8}}
                 className="text-gray-800 text-lg">{item.desc}</motion.p>
                <motion.button
                initial={{opacity:0,x: -30}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:0.5,delay:0.8}}
                 className="text-start font-semibold text-blue-600 text-lg">
                  Know More
                </motion.button>
              </motion.div>
              <img className="rounded-b-3xl object-cover" src={item.image} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
