import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "motion/react";

const RequestSection = ({setOpenModal}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [openModal, setOpenModal] = useState(false);

  const onSubmit = (data) => {
    setOpenModal(true);
    console.log(data);
  };

  const closeModal = () => {
    setOpenModal(false);
  };
  const modalVariants = {
    hidden: { y: -1000, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -1000, opacity: 0 },
  };
  return (
    <section className="relative w-full">
      
      {/* Form Section */}
      <div className="w-full flex items-center justify-center">
        <div className="flex w-full md:mb-[100px] mt-[80px] md:mt-0 max-w-[1080px] px-3 flex-col items-center justify-center">
          <motion.h1
            initial={{ y: -30 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-black text-[32px] md:px-[200px] leading-[30px] md:text-[56px] font-bold md:leading-[60px] text-center"
          >
            Build and grow your business with DotPe.
          </motion.h1>

          <motion.p
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[18px] md:leading-[40px] md:text-black text-gray-600 leading-[25px] md:text-[30px] mt-8 md:mt-8 text-center md:px-[120px]"
          >
            Get all the tools you need to take your business to the next level &
            join the millions of merchants using DotPe.
          </motion.p>

          <motion.div
            initial={{ y: 30 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full mt-12"
          >
            <div className="border w-full md:w-[500px] mx-auto md:py-3 rounded-2xl">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex w-full flex-col  h-[50px] items-center"
              >
                <div className="flex w-full px-3 items-center justify-between">
                  <div className="flex py-3 flex-col items-center">
                    <input
                      id="number"
                      type="number"
                      {...register("number", {
                        required: "Number is required",
                        minLength: {
                          value: 3,
                          message: "Number must be at least 3 digits",
                        },
                      })}
                      className={`md:w-[250px] focus:outline-none md:px-3 rounded ${
                        errors.number ? "border border-red-500" : ""
                      }`}
                      placeholder="Enter your mobile number"
                    />
                    {errors.number && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.number.message}
                      </p>
                    )}
                  </div>
                  <motion.button
                    type="submit"
                    className="bg-blue-500 hidden md:block px-5 py-2 rounded-3xl text-white text-[20px]"
                  >
                    Request Rollback
                  </motion.button>
                </div>


                <motion.button
                  type="submit"
                  className="bg-blue-600 mt-6 w-full md:hidden py-2 rounded-3xl text-white text-[20px]"
                >
                  Request Rollback
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RequestSection;
