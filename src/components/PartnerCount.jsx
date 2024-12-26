import React from "react";
import { motion, useScroll, useTransform } from "motion/react";

const PartnerCount = () => {
  const { scrollYProgress } = useScroll();
  const scroll = useScroll();
  console.log(scroll);

  console.log("scrollY", scrollYProgress);
  // Transform the color based on the scroll progress
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.6, 0.7, 0.8, 0.9],
    [
      "#000000",
      "#FF0000",
      "#FF0000",
      "#FF0000",
      "#FF0000",
      "#FF0000",
      "#FF0000",
    ]
  ); // Black to Red
  return (
    <div className=" h-[330px] md:h-screen flex justify-center items-center text-center bg-blac  w-full">
      <div className="flex justify-center itms-center  flex-col ">
        <motion.span
          style={{ color: textColor }}
          className=" text-[90px] md:text-[230px] leading-[80px] md:leading-[230px]  font-bold "
        >
          75lacs+
        </motion.span>
        <h1 className="text-black font-bold text-[25px] md:text-[68px]">Forward-thinking partner</h1>
      </div>
    </div>
  );
};

export default PartnerCount;
