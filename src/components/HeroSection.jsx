import React from "react";
import { motion } from "motion/react";
import { Logo, NavButton } from "../components/Header";

const HeroSection = () => {
  return (
    <section className="bg-[#101544] md:h-[1300px] min-h-screen">
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
        <motion.div className="flex mt-[96px]  flex-col justify-center items-center">
          <h1 className="text-[95px] leading- md:text-[95px] mb-[16px] text-white text-center leading-[98px] flex justify-center md:font-bold">
            Power your
            <br/> business with DotPe
          </h1>
          <div className="px-10 md: text-center">
          <ul className="flex gap-3 flex-wrap text-[16px] justify-center  text-[#AD9AF0] mb-[8px]">
            <li>Point of Sale</li>
            <li>Online Store</li>
            <li>QR Solution</li>
            <li>Inventory Management</li>
            <li>Payment Integration</li>
            <li>Delivery Integration</li>
          </ul>
          </div>

          <motion.button className="w-[160px] h-[60px]  text-white font-semibold mt-8 text-[20px] rounded-full bg-blue-600">Get Started</motion.button>
        </motion.div>

{/* image section */}
        <div className="mt-[100px] h-[790px] items-center gap-10 flex overflow-hidden">
            <div className="w-[560px]   h-[590px]">
                <img  className="object-cover rounded-3xl" src="https://cdn.dotpe.in/dotpe-website-live/images/new-hero-section-image-1-240622.jpg"/>
            </div>
            <div className="w-[260px] mt-[60px] h-[360px]">
                <img className="object-cover rounded-3xl" src="https://cdn.dotpe.in/dotpe-website-live/images/new-hero-section-image-2-240622.jpg"/>
            </div>
            <div className="w-[360px] -z-1  -translate-y-[180px] h-[410px]">
                <img className="object-cover rounded-3xl " src="https://cdn.dotpe.in/dotpe-website-live/images/new-hero-section-image-3-240622.jpg"/>
            </div>
            <div className="w-[490px] hidden lg:block h-[490px]">
                <img className="object-cover rounded-3xl" src="https://cdn.dotpe.in/dotpe-website-live/images/new-hero-section-image-4-240622.jpg"/>
            </div>
           
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
