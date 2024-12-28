import React from 'react'
import { AnimatePresence, motion } from "motion/react";
import { FaBars, FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
const Dropdown = ({items,title,isOpen,onToggle}) => {
    // console.log(items[0].images)
  return (
    <div className='border-b-[1px] border-gray-500'>
    <button
      onClick={onToggle}
      className="flex mt-3 justify-between mb-3  items-center w-full"
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
        //   className=" bg-[#F8F8F8] b-1"
          className=" bg-black b-1 "
        >
          <ul className="space-y-4 py-4 ">
            {items.map((item, index) => (
              <li key={index} className="px-5">
              {item.title&&<h4 className="font-gilroy font-bold ">{item.title}</h4>}  
                {item.desc && (
                  <p className="font-gilroy text-gray-400 text-[14px]  ">{item.desc}</p>
                )}
              </li>
            ))}
          </ul>

        {!items[0].title&&  <button className='bg-blue-500 ml-5 text-white px-3 py-1 mt-3 rounded-md '>Know more</button>}
           {/* Image List */}
           <div>
            <div className="flex px-5 mt-12 flex-col bg-black space-y-4 mb-8 transition-opacity duration-300">
              <div className="overflow-hidden">
                <img
                  src={items[0].images["image1"]}
                  alt="Service Image 1"
                  className="w-full  object-cover  rounded-xl transition-transform duration-300 transform "
                />
              </div>
              <div className="grid grid-cols-2 space-x-4">
                <div className="overflow-hidden">
                  <img
                     src={items[0].images["image2"]}
                    alt="Service Image 2"
                    className="w-full object-cover h-full rounded-xl transition-transform duration-300 transform "
                  />
                </div>
                <div className="overflow-hidden">
                  <img
                    src={items[0].images["image3"]}
                    alt="Service Image 3"
                    className="w-full object-cover  rounded-xl transition-transform duration-300 transform "
                  />
                </div>
              </div>
            </div>

            </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
  )
}

export default Dropdown