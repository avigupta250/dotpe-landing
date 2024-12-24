import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimation } from "motion/react";
import { FaBars, FaMinus } from "react-icons/fa6";

import { FaPlus } from "react-icons/fa";

function Header() {
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
          detail:
            "Solutions for health, repair & other service professionals.",
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
          className="w-full hidden md:block fixed h-[74px] px-10 bg-white  justify-between items-center shadow-md"
        >
            <div className=" px-10 bg-white h-[74px]  flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex gap-3 text-[18px] text-black">
            <button>Business Types</button>
            <button>Company</button>
          </div>
          <button className="px-5 py-1 text-blue-600 border-2 rounded-full border-blue-600 text-[18px]">
            Request Demo
          </button>
          </div>
        </motion.nav>
  
        {/* Mobile Navigation */}
        <motion.nav className="w-full fixed top-0 md:hidden flex flex-col bg-white ">
          <div className="flex w-full px-6 py-4 justify-between items-center">
            <Logo />
            <button onClick={() => setToggle((prev) => !prev)} className="text-[30px]">
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
                className="overflow-hidden mb-4  "
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





  function Logo() {
    return (
      <div className="flex items-center gap-2">
        <div className="w-7 relative h-7 rounded-[6px] justify-center bg-black">
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
        <button onClick={onToggle} className="flex mt-3 justify-between items-center w-full">
          <span className="px-6 font-gilroy font-bold text-lg ">{title}</span>
          <span className="px-3">{!isOpen ? <FaPlus/> : <FaMinus/>}</span>
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
                    {item.detail && <p className="font-gilroy text-[14px] ">{item.detail}</p>}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
  

  export default Header