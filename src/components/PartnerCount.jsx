import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const PartnerCount = () => {
  const { scrollYProgress } = useScroll();
  const [roundedScroll, setRoundedScroll] = useState(0);

  // Subscribe to changes in scrollYProgress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      // Round the value to two decimal places
      setRoundedScroll(Math.round(value * 100) / 100);
    });
console.log(roundedScroll)
    return () => unsubscribe(); // Clean up the subscription
  }, [scrollYProgress]);

  // Transform the color based on the scroll progress
  const textColor = useTransform(
    scrollYProgress,
    // [0.65, 0.66, 0.67, 0.68, 0.69, 0.70, 0.71,0.72,0.74,0.75],
    [0.70, 0.71,0.72,0.74,0.75,0.76,0.77,0.78,0.79,0.80],
    [
      "#00008B",
      "#190077",
      "#4E155A",
      "#4E155A",
      "#5E0E4D",
      "#5E0E4D",
      "#96082D",
      "#96082D",
      // "#B2061E",
      "#CD151F",
      "#CD151F",
      // "#CD151F",
      // "#CD151F",
      // "#E10000",
      // "#FF0000"
    ]
    // 322072
  );// Black to Red
  return (
    <div className=" h-[330px]   overflow-hidden md:h-screen flex justify-center items-center text-center   w-full">
      <div className="flex justify-center   itms-center  flex-col ">
        <motion.span
          style={{ color: textColor }}
          className=" text-[80px] md:text-[230px] leading-[80px] md:leading-[230px]  font-bold "
        >
          75lacs+
        </motion.span>
        <h1 className="text-black font-bold text-[20px] md:text-[68px]">Forward-thinking partner</h1>
      </div>
    </div>
  );
};

export default PartnerCount;
