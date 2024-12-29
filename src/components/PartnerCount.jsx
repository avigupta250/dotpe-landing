import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const PartnerCount = () => {
  const { scrollYProgress } = useScroll();
  const [roundedScroll, setRoundedScroll] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
    
      setRoundedScroll(Math.round(value * 100) / 100);
    });
console.log(roundedScroll)
    return () => unsubscribe(); 
  }, [scrollYProgress]);

  const range1= [0.70, 0.71,0.72,0.74,0.75,0.76,0.77,0.78,0.79,0.80]
  const range2= [0.65,0.68,0.70,0.73,0.76,0.79,0.82]

  const colors1=[
    "#00008B",
    "#190077",
    "#4E155A",
    "#4E155A",
    "#5E0E4D",
    "#5E0E4D",
    "#96082D",
    "#96082D",
    "#CD151F",
    "#CD151F",   
  ]

  const colors2=[
    // "#00008B",
    "#190077",
    // "#190077",
    "#4E155A",
    "#4E155A",
   
    // "#CD151F",
    "#CD151F",
    "#CD151F",
    "#CD151F",
    "#CD151F",

  ]

  const text1=useTransform(scrollYProgress,range1,colors1)
  const text2=useTransform(scrollYProgress,range2,colors2)

  return (
    <div className="  overflow-hidden  flex justify-center items-center text-center py-[100px] md:py-[200px]   w-full">
      <div className="flex justify-center itms-center  flex-col ">
        <motion.span
          style={{ color: text1 }}
          className=" text-[90px] md:hidden md:text-[230px] leading-[80px] md:leading-[230px]  font-bold "
        >
          75lacs+
        </motion.span>
        <motion.span
          style={{ color: text2 }}
          className=" text-[90px] hidden md:block md:text-[230px] leading-[80px] md:leading-[230px]  font-bold "
        >
          75lacs+
        </motion.span>
        <h1 className="text-black font-bold text-[25px] md:text-[68px]">Forward-thinking partner</h1>
      </div>
    </div>
  );
};

export default PartnerCount;
