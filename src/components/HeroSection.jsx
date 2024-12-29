import React from "react";
import { motion } from "motion/react";
import { Logo, NavButton } from "../components/Header";

const HeroSection = ({setOpenModal}) => {
  return (
    <section className=" bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#533c7b] via-[#181a45] to-[#171A3F] overflow-hidden ">
      <div>
        <div className=" px-10 text-white  h-[74px]  flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex gap-3 text-[18px] ">
            <NavButton />
          </div>
          <button className="px-5 opacity-0 py-1 text-blue-600 border-2 rounded-full border-blue-600 text-[18px]">
            Request Demo
          </button>
        </div>


        {/* hero */}
        <motion.div className="flex mt-[30px] md:mt-[66px]  flex-col justify-center items-center">
          <h1 className="text-[45px] font-gilroy font-bold leading-[50px] md:text-[95px] mb-[16px] text-white text-center md:leading-[98px] flex justify-center md:font-bold">
            Power your
            <br/> business with DotPe
          </h1>
          <div className="px-[130p] md:px-[10px]  md:w-[600px] overflow-hidden py-3  mt-6 md: text-center">
          <ul className="flex gap-6  md:gap-3 font-gilroy font-bold flex-wrap text-[16px] justify-center leading-[1px]  md:leading-[12px] text-[#7e74b5] mb-[8px]">
            <li>Point of Sale</li>
            <li>Online Store</li>
            <li>QR Solution</li>
            <li>Inventory Management</li>
            <li>Payment Integration</li>
            <li>Delivery Integration</li>
          </ul>
          </div>

          <motion.button onClick={()=>setOpenModal(true)} className="w-[160px] h-[60px]  text-white font-semibold mt-8 text-[20px] rounded-full bg-blue-600">Get Started</motion.button>
        </motion.div>


        {/* mobile */}
        <div className="flex md:hidden h-[300px] items-center  gap-5 mt-10 overflow-hidden">
        <img  className="object-cover w-[30vw] h-[200px]   rounded-r-2xl" src="https://cdn.dotpe.in/dotpe-website-live/images/new-hero-section-image-1-240622.jpg"/>
        <img className="object-cover w-[30vw] -translate--[80px]   rounded-2xl" src="https://cdn.dotpe.in/dotpe-website-live/images/new-hero-section-image-2-240622.jpg"/>
        <img className="object-cover w-[40vw]  h-[200px] rounded-2xl " src="https://cdn.dotpe.in/dotpe-website-live/images/new-hero-section-image-3-240622.jpg"/>
        

          </div>

{/* image section */}
<div className="hidden md:block">
        <div className="mt-[100px]   md:h-[790px] items-center gap-4 md:gap-10 flex overflow-hidden">
            <div className="  md:w-[560px] md:h-[590px]">
                <img  className="object-cover  md:rounded-3xl" src="https://cdn.dotpe.in/dotpe-website-live/images/new-hero-section-image-1-240622.jpg"/>
            </div>
            <div className="       md:w-[300px] mt-[60px] md:h-[360px]">
                <img className="object-cover   md:rounded-3xl" src="https://cdn.dotpe.in/dotpe-website-live/images/new-hero-section-image-2-240622.jpg"/>
            </div>
            <div className="         md:w-[360px] -z-1   md:-translate-y-[180px] md:h-[410px]">
                <img className="object-cover md:rounded-3xl " src="https://cdn.dotpe.in/dotpe-website-live/images/new-hero-section-image-3-240622.jpg"/>
            </div>
            <div className="md:w-[490px] hidden lg:block md:h-[490px]">
                <img className="object-cover rounded-3xl" src="https://cdn.dotpe.in/dotpe-website-live/images/new-hero-section-image-4-240622.jpg"/>
            </div>
           
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
