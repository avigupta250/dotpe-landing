import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TiArrowSortedDown } from "react-icons/ti";

const Footer = () => {
  const types = {
    Business: ["Food & Beverages", "Retail", "Services"],
    DotPe: ["Home", "Press & Media"],
  };
  const commonVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (title) => {
    setOpenSection(openSection === title ? null : title);
  };
  return (
    <section className="w-full bg-black mt-[100px] ">
      <div className=" text-white  ">
        
        {/* desktop view */}
        <div className="hidden md:block">
          <div className="  grid grid-cols-2 w-3/4 mx-auto py-14  gap-24">
            {/* left */}
            <motion.div
              variants={commonVariants}
              initial="hidden"
              whileInView="visible"
              className="flex  justify-end"
            >
              <div className=" flex flex-col gap-3">
                <div className="text-[20px]  text-gray-400">Business</div>
                <motion.div className="flex flex-col items-start justify-start gap-3">
                  <motion.button>Food & Beverages</motion.button>
                  <motion.button>Retail</motion.button>
                  <motion.button>Services</motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* right */}
            <motion.div
              variants={commonVariants}
              initial="hidden"
              whileInView="visible"
              className="flex flex-col gap-3"
            >
              <div className="text-[20px] text-gray-400">DotPe</div>
              <h1>Home</h1>
              <h1>Press and Media</h1>
            </motion.div>
          </div>
        </div>

        {/* mobile view */}
        <motion.div
          variants={commonVariants}
          initial="hidden"
          whileInView="visible"
          className="md:hidden w-3/4 mx-auto py-16"
        >
          {Object.entries(types).map(([title, items]) => (
            
              <Dropdown
                key={title}
                title={title}
                items={items}
                isOpen={openSection === title}
                onToggle={() => handleToggle(title)}
              />
            
          ))}
        </motion.div>

        {/* desktop view */}
        <div className="hidden md:flex border-t-[1px] border-t-gray-600 w-full justify-between ">
          <div className="w-3/4 mx-auto flex py-10 justify-between ">
            <motion.div
              variants={commonVariants}
              initial="hidden"
              whileInView="visible"
              className="flex  flex-col"
            >
              {/* logo */}
             <img className="w-[120px] mb-2" src="https://cdn.dotpe.in/dotpe-website-live/images/dotpe-white-logo-svg.svg" alt="logo"/>

              <span className="text-[#999696ea]">
                @ DotPe, All rights reserved
              </span>
            </motion.div>

            <motion.div
              variants={commonVariants}
              initial="hidden"
              whileInView="visible"
              className="flex gap-3 items-center text-[18px] mb-6 "
            >
              <a href="/">
                <motion.button>Terms & Conditions</motion.button>
              </a>
              <a href="/">
                <motion.button>Privacy Policy</motion.button>
              </a>

              <div className="flex items-center gap-8 ml-10 text-[25px]">
                <motion.button>
                  <a href="https://google.com" target="_blank">
                    <FaTwitter />
                  </a>
                </motion.button>
                <motion.button>
                  <a
                    href="https://www.instagram.com/avi_gupta250/profilecard/?igsh=MWsyNzFwaWZwaWEzcA=="
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </motion.button>
                <motion.button>
                  <a
                    href="https://www.linkedin.com/in/avinash-kumar-982355213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </a>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile view */}
        <div className="w-full md:hidden px-4">
          <div className="flex border-t-[1px] border-t-gray-600 py-6 items-center justify-center gap-8 text-[25px]">
            <motion.button
              variants={commonVariants}
              initial="hidden"
              whileInView="visible"
            >
              <a href="https://google.com" target="_blank">
                <FaTwitter />
              </a>
            </motion.button>
            <motion.button
              variants={commonVariants}
              initial="hidden"
              whileInView="visible"
            >
              <a
                href="https://www.instagram.com/avi_gupta250/profilecard/?igsh=MWsyNzFwaWZwaWEzcA=="
                target="_blank"
              >
                <FaInstagram />
              </a>
            </motion.button>
            <motion.button
              variants={commonVariants}
              initial="hidden"
              whileInView="visible"
            >
              <a
                href="https://www.linkedin.com/in/avinash-kumar-982355213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </motion.button>
          </div>

          <div className="flex justify-center gap-6  border-t-[1px] border-t-gray-600 py-6">
            <a href="/">
              <motion.button
                variants={commonVariants}
                initial="hidden"
                whileInView="visible"
              >
                Terms & Conditions
              </motion.button>
            </a>
            <a href="/">
              <motion.button
                variants={commonVariants}
                initial="hidden"
                whileInView="visible"
              >
                Privacy Policy
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Dropdown = ({ title, items, isOpen, onToggle }) => {
  return (
    <div className="mb-3 ">
      <div className="w-full flex  justify-center">
        <motion.div
          //  initial={{ opacity: 0, y: 20 }}
          //  whileInView={{ opacity: 1, y: 0 }}
          //  transition={{ duration: 0.5, delay: 0.1 }}
          onClick={onToggle}
          className=" flex items-center gap-2  cursor-pointer"
        >
          <span className="font-extrabold font-gilroy text-gray-300">{title}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <TiArrowSortedDown className="h-5 w-5 text-gray-00 mt-1" />
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mx-auto flex justify-center "
          >
            <div className="bg-whit mt-1 p-4 rounded-lg shadow-sm">
              <ul className="space-y-2 flex flex-col items-center">
                {items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="text- font-gilroy font-bold "
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Footer;
