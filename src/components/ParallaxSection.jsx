// import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
// import {motion} from "motion/react"
import { MotionConfig } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const ParallaxGallery = () => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(3); 
  const [scale2,setScale2]=useState(1)
  const [opacity,setOpacity]=useState(0)
  const {scrollYProgress}=useScroll();
//   const scroll=useScroll();
//   console.log(scroll)


  const textColor = useTransform(scrollYProgress, [0, 1], ["#000000", "#FF0000"]);
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
    //   console.log("rect",rect)
      const windowHeight = window.innerHeight;

      const progress = Math.min(Math.max((windowHeight - rect.top) / (rect.height + windowHeight), 0), 1);
    //   console.log(progress)
      
    
      const newScale = 3 - progress * 2;
      const newScale2 = 2 - progress * 2;
      const newOpacity=1.5-progress*2 
    setOpacity(newOpacity)
      setScale(newScale);
      setScale2(newScale2)

    //   console.log(opacity)

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-[200vh] bg-gray-200">
      <div className="sticky top-0  overflow-hidden">
        <div
          className="w-full hidden md:block  h-full transition-transform duration-75"
          style={{
            transform: `scale(${scale})`, 
            transition: "transform 0.1s linear",
          }}
        >
          <img
            src="https://cdn.dotpe.in/dotpe-website-live/images/Scroll-Images-01.webp"
            alt="Zoom Effect"
            className="w-full  relative hidden md:block h-screen object-contain"
          />
          <motion.div 
        
        style={{opacity:opacity}}
          className={` absolute  transition-transform duration-150 items-center text-center top-[340px] left-[660px] z-1 text-black text-[16px] leading-[19px] font-bold`}
          >DotPe works for all types,<br/>size and formats of<br/> businesses</motion.div>
         
        </div>
        <div  className="w-full md:hidden  h-full transition-transform duration-75"
          style={{
            transform: `scale(${scale2})`, 
            transition: "transform 0.1s linear",
          }}>
        <img src="https://cdn.dotpe.in/dotpe-website-live/images/work-all-types-mobile.png"
          className="w-full block md:hidden h-screen object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ParallaxGallery;






















// export const ParallaxGalary = () => {
//   const containerRef = useRef(null);

//   // Detect scroll progress
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Create smooth zoom effect
//   const springConfig = { damping: 20, stiffness: 80 };
//   const smoothProgress = useSpring(scrollYProgress, springConfig);

//   // Transform scale based on scroll
//   const scale = useTransform(smoothProgress, [0, 0.5 ,1], [1.2,0.8, 0.6]);

//   return (
//     <div ref={containerRef} className="min-h-[200vh] ">
//       <div className="sticky top-0 h-screen overflow-hidden">
//         <motion.div
//           className="w-full h-full"
//           style={{
//             scale,
//           }}
//         >
//           <img
//             src="https://cdn.dotpe.in/dotpe-website-live/images/Scroll-Images-01.webp"
//             alt="Zoom Effect"
//             className="w-full h-screen object-cover"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default ScrollZoomImage;
