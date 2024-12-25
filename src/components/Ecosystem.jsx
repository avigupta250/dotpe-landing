import React, { useState } from "react";
import {motion} from "motion/react"
const Ecosystem = () => {
  const services = [
    {
      title: "Food & Beverage",
      desc: "Tools that connect the front of house with the back of house and integrate everything that you need to turn your restaurant into one dashboard",
      images: {
        image1:
          "https://cdn.dotpe.in/dotpe-website-live/images/latest-fnb-image-1-240622.jpg",
        image2:
          "https://cdn.dotpe.in/dotpe-website-live/images/latest-fnb-image-2-240622.jpg",
        image3:
          "https://cdn.dotpe.in/dotpe-website-live/images/latest-fnb-image-3-240622.jpg",
      },
    },
    {
      title: "Retail",
      desc: "Solutions to help you sell online and offline seamlessly.",
      images: {
        image1:
          "https://cdn.dotpe.in/dotpe-website-live/images/latest-retail-image-1-240622.jpg",
        image2:
          "https://cdn.dotpe.in/dotpe-website-live/images/latest-retail-image-2-240622.jpg",
        image3:
          "https://cdn.dotpe.in/dotpe-website-live/images/home/retail-img-3.jpg",
      },
    },
    {
      title: "Services",
      desc: "Efficient tools for health, repair, and other service professionals.",
      images: {
        image1:
          "https://cdn.dotpe.in/dotpe-website-live/images/home/services-img-1.jpg",
        image2:
          "https://cdn.dotpe.in/dotpe-website-live/images/latest-services-image-2-240622.jpg",
        image3:
          "https://cdn.dotpe.in/dotpe-website-live/images/latest-services-image-3-240622.jpg",
      },
    },
  ];

  const [serviceItem, setServiceItem] = useState(services[0]);

  return (
    <section className="w-full  bg-black text-white py-20">
      <div className="flex justify-center mx-auto items-center">
        <div className="flex   flex-col">
          <motion.h1
          initial={{y:-30,opacity:0.6}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:0.3,delay:0.9}}
           className="text-[50px] font-bold ml-[133px] max-w-[800px]">
            Ecosystem to sell everything through DotPe
          </motion.h1>

          <div className="grid grid-cols-2  mt-10 gap-8">
            {/* Services List */}
            <div className="space-y-6 px-[120px] ">
              {services.map((service, index) => (
                <motion.div
                initial={{x:-30,opacity:0}}
                whileInView={{x:0,opacity:1}}
                transition={{duration:0.3,delay:0}}
                  key={index}
                  onMouseEnter={() => {setServiceItem(service)
                    console.log(service)}

                  }
                  onMouseLeave={()=>{setServiceItem(services[0]) 
                    console.log(service)}}
                  className={`${serviceItem.title===service.title?`text-white`:`text-[#898787]`} text-black  cursor-pointer p-4 transition-all duration-300`}
              
                >
                  <h1 className="text-3xl font-semibold">{service.title}</h1>
                  <p className="text-md leading-5 mt-4">{service.desc}</p>
                  <button className={`${serviceItem.title===service.title?`bg-blue-600 text-white`:`bg-[#2B2B2B] text-gray-200`}  px-4 py-2 mt-3 rounded-md`}>
                    Know More
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Image List */}
            <div>
            <div className="flex flex-col  space-y-4 transition-opacity duration-300">
              <div className="overflow-hidden">
                <img
                  src={serviceItem.images["image1"]}
                  alt="Service Image 1"
                  className="w-full h-[370px] object-cover  rounded-3xl transition-transform duration-300 transform "
                />
              </div>
              <div className="grid grid-cols-2 space-x-4">
                <div className="overflow-hidden">
                  <img
                    src={serviceItem.images["image2"]}
                    alt="Service Image 2"
                    className="w-full object-cover rounded-3xl h-[250px] transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden">
                  <img
                    src={serviceItem.images["image3"]}
                    alt="Service Image 3"
                    className="w-full object-cover h-[250px] h-auo rounded-3xl transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
              </div>
            </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
