import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaBars, FaMinus } from "react-icons/fa6";
import { MdFastfood } from "react-icons/md";
import { BiSolidShoppingBags } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { SiOpenmediavault } from "react-icons/si";

function Header({setOpenModal}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [toggle, setToggle] = useState(false);

  const courseData = {
    "Business Types": [
      {
        title: "Food & Beverage Industry",
        detail:
          "Tools for front of house, back of house, and everything in between.",
      },
      {
        title: "Retail",
        detail:
          "All the retail tools you need from offline to online, in-store & online.",
      },
      {
        title: "Services & Others",
        detail: "Solutions for health, repair & other service professionals.",
      },
    ],
    Company: [
      {
        title: "Press & Media",
        detail: "Updates, news, and press resources.",
      },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [openSection, setOpenSection] = useState(null);
  const handleToggle = (title) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <header className="flex">
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: isScrolled ? 0 : -80 }}
        transition={{ duration: 0.3 }}
        className="w-full hidden z-10 md:block fixed h-[74px] px-2 bg-white  justify-between items-center shadow-md"
      >
        <div className=" px-10 bg-white h-[74px]  flex justify-between items-center">
          {/* <Logo /> */}
          <img src="https://cdn.dotpe.in/dotpe-website-live/images/dotpe-black-logo-svg.svg" alt="logo"/>
          <div className="hidden md:flex gap-3 text-[18px] text-black">
            <NavButton />
          </div>
          <button 
          onClick={()=>setOpenModal(true)}
           className="px-5 py-1 text-blue-600 border-2 rounded-full border-blue-600 text-[18px]">
            Request Demo
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav className="w-full z-10 fixed top-0 md:hidden flex flex-col bg-white ">
        <div className="flex w-full px-6 py-4 justify-between items-center">
          {/* <Logo /> */}
          <img src="https://cdn.dotpe.in/dotpe-website-live/images/dotpe-black-logo-svg.svg" alt="logo"/>
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="text-[30px]"
          >
            <FaBars />
          </button>
        </div>

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-  "
            >
              <motion.ul>
                {Object.entries(courseData).map(([title, items]) => (
                  <Dropdown
                    key={title}
                    title={title}
                    items={items}
                    isOpen={openSection === title}
                    onToggle={() => handleToggle(title)}
                  />
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}


export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-7 relative h-7  rounded-[6px] justify-center bg-black">
        <div className="flex gap-2">
          <span className="top-2 left-1 absolute h-[6px] w-[6px] rounded-full bg-white"></span>
          <span className="top-2 left-[17px] absolute h-[6px] w-[6px] rounded-full bg-white"></span>
        </div>
      </div>
      <div className="text-[25px] text-black font-extrabold">DotPe</div>
    </div>
  );
}

function Dropdown({ title, items, isOpen, onToggle }) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="flex mt-3 justify-between mb-3 items-center w-full"
      >
        <span className="px-6 font-gilroy font-bold text-lg ">{title}</span>
        <span className="px-3">{!isOpen ? <FaPlus /> : <FaMinus />}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className=" bg-[#F8F8F8] b-1"
          >
            <ul className="space-y-4 p-4 ">
              {items.map((item, index) => (
                <li key={index} className="px-5">
                  <h4 className="font-gilroy font-bold ">{item.title}</h4>
                  {item.detail && (
                    <p className="font-gilroy text-[14px] ">{item.detail}</p>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const NavButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
  
    return (
      <motion.div className="flex gap-3">
      
        <div
          className="relative inline-block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button>Business Types</button>
  
         
          <AnimatePresence>
            {isHovered && (
                <div>
                     
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute  left-0 mt-2 w-80 text-black  bg-white shadow-lg rounded-lg border border-gray-200 "
              >
                {/* <span className="bg-black h-5 w-5  absolute translate-x-6   rotate-45"></span> */}
              
                <div className="flex p-4   hover:bg-slate-100  rounded-lg flex-col">
                  <div className="flex gap-4 group justify-start items-center">
                    <span>
                      <MdFastfood />
                    </span>
                    <h1>Food & Beverage Industry</h1>
                 
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 8 }} 
                      transition={{ type: "spring", stiffness: 300 }}
                      className=" group-hover:translate-x-6"
                    >
                      <FaArrowRight />
                    </motion.span>
                  </div>
                  <p className="ml-9 text-[10px] text-gray-400">
                    Tools for front of house, back of house, and everything in
                    between.
                  </p>
                </div>
                <div className="flex p-4  hover:bg-slate-100  rounded-lg flex-col">
                  <div className="flex gap-4 group justify-start items-center">
                    <span>
                    <BiSolidShoppingBags/>
                    </span>
                    <h1>Retail</h1>
                 
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 8 }} 
                      transition={{ type: "spring", stiffness: 300 }}
                      className=" group-hover:translate-x-6"
                    >
                          <FaArrowRight />
                      
                    </motion.span>
                  </div>
                  <p className="ml-9 text-[10px] text-gray-400">
                    All the retail tools you need from offline to online, in-store & online
                  </p>
                </div>
                <div className="flex p-4  hover:bg-slate-100  rounded-lg flex-col">
                  <div className="flex gap-4 group justify-start items-center">
                    <span>
                    <FaPeopleGroup/>
                    </span>
                    <h1>Services & Others</h1>
                 
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 8 }} 
                      transition={{ type: "spring", stiffness: 300 }}
                      className=" group-hover:translate-x-6"
                    >
                      <FaArrowRight />
                    </motion.span>
                  </div>
                  <p className="ml-9 text-[10px] text-gray-400">
                    Solutions for health, repair & other service professioanls
                  </p>
                </div>
              </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
  
        {/* Placeholder for Other Button */}
        <div
          className="relative inline-block"
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          <button>Company</button>
  
         
          <AnimatePresence>
            {isHovered1 && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 mt-2 w-80 text-black  bg-white shadow-lg rounded-lg border border-gray-200"
              >
               
                <div className="flex p-4  hover:bg-slate-100  rounded-lg flex-col">
                  <div className="flex gap-4 group justify-start items-center">
                    <span>
                   <SiOpenmediavault/>
                    </span>
                    <h1>Press & Media</h1>
                 
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 8 }} 
                      transition={{ type: "spring", stiffness: 300 }}
                      className=" group-hover:translate-x-6"
                    >
                      <FaArrowRight />
                    </motion.span>
                  </div>
                  {/* <p className="ml-9 text-[10px] text-gray-400">
                    Tools for front of house, back of house, and everything in
                    between.
                  </p> */}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  };

export default Header;
