import { useState } from "react";
import { motion, AnimatePresence } from "motion/react"; // Corrected import
import { useForm } from "react-hook-form";
import { Logo } from "./Header";
import { RxCross2 } from "react-icons/rx";

export const FormModal = ({ open, setOpenModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    window.alert("Form Submitted ")
    setOpenModal(false)
    // Perform further actions like API calls here
  };

  return (
    <div className="">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            exit={{ y: -1000, duration: -0.4, opacity: 0 }}
            transition={{ duration: 0.8 }}
            onClick={()=>setOpenModal(false)}
            className="fixed inset-0 flex items-center cursor-pointer  justify-center z-50 bg-gray-800 bg-opacity-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e)=>e.stopPropagation()}
              className="bg-white relative   mx-8 md:mx-[200px]   md:max-h-[95vh]  w-full flex flex-cols-1 md:flex-cols-2 rounded-2xl shadow-lg"
            >
              <button
                onClick={() => setOpenModal(false)}
                className="absolute md:hidden text-[25px] text-gray-600 top-0 right-0 mr-4 mt-3"
              >
                <RxCross2 />
              </button>
              <button
                onClick={() => setOpenModal(false)}
                className="absolute hidden rounded-full p-2  md:block text-[25px] bg-[#565656]  text-white top-0 right-0 -mr-12 mt-"
              >
                <RxCross2 />
              </button>
              {/* Left Section - Hidden on Small Screens */}
              <div className="hidden bg-[#112b50] rounded-l-2xl md:flex md:w-[45%] flex-col items-start  justify-between p-6 space-y- px-14">
                <div></div>
                <div className="flex flex-col items-start">
                  <motion.h1 className="text-[35px] font-bold text-white leading-tight">
                    You are taking a right <br /> step for your business
                  </motion.h1>
                  <motion.h2 className="text-2xl text-gray-500">
                    Trusted by 75 lakh+ businesses in India
                  </motion.h2>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-9 relative h-9  rounded-[6px] justify-center bg-white">
                    <div className="flex gap-2">
                      <span className="top-[13px] left-[5px] absolute h-[7px] w-[7px] rounded-full bg-black"></span>
                      <span className="top-[13px] left-[23px] absolute h-[7px] w-[7.5px] rounded-full bg-black"></span>
                    </div>
                  </div>
                  <div className="text-[35px] text-white font-extrabold">
                    DotPe
                  </div>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex flex-col w-full  md:w-[55%] items-start bottom-0 py-12 px-6  md:px-14">
                <h1 className="text-3xl md:text-4xl font-bold text-black">
                  Setup Free Demo
                </h1>
                <p className=" text-[18px] text-gray-800 mt-4 md:text-2xl leading-[20px] md:mt-8 md:font-semibold md:text-black mb-4">
                  Fill in the details & Our product specialist will reach out to
                  you.
                </p>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col space-y-4 w-full"
                >
                  {/* Name Input */}
                  <div className="flex flex-col w-full">
                    
                    <input
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      placeholder="Your Name *"
                      className="w-full px-3 py-3 md:py-4 focus:ring-0 focus:outline-none border border-gray-300 rounded-xl"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Mobile Number Input */}
                  <div className="flex flex-col w-full">
                   
                    <div className="flex items-center ">
                      <span className="text-gray-700 px-3 py-3 md:py-4 border border-gray-300 rounded-l-xl">
                        +91
                      </span>
                      <input
                        type="tel"
                        {...register("mobile", {
                          required: "Mobile number is required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Enter a valid 10-digit mobile number",
                          },
                        })}
                        placeholder="Mobile Number *"
                        className="w-full px-3 py-3 md:py-4 border border-gray-300 rounded-r-xl  focus:ring-0 focus:outline-none"
                      />
                    </div>
                    {errors.mobile && (
                      <span className="text-red-500 text-xs">
                        {errors.mobile.message}
                      </span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col w-full">
                    
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Enter a valid email address",
                        },
                      })}
                      placeholder="Email Address"
                      className="w-full px-3 py-3 md:py-4 border border-gray-300 rounded-xl  focus:ring-0 focus:outline-none"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Consent */}
                  <div className="text-[15px] text-gray-900 ">
                    By clicking On Continue I hereby provide my consent to
                    receive emails, phone calls, messages and other
                    communications from Dotpe to understand about Dotpe's
                    services, offerings, promotions, and other related
                    information.
                  </div>

                </form>

                <motion.div className="flex justify-center  mt-24 md:mt-16  md:justify-end w-full">
                  <button
                  onClick={handleSubmit(onSubmit)}
                    type="submit"
                    className="w-full md:w-[120px] rounded-3xl bg-blue-500 text-white py-3 hover:bg-blue-700 transition"
                  >
                    Continue
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
