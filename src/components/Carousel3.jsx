
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination,Navigation } from 'swiper/modules';

export default function Carousel3() {
const swiperRef=useRef()
    const handlePrev = () => {
        if (swiperRef.current) {
          swiperRef.current.swiper.slidePrev(); 
        }
      };
    
      const handleNext = () => {
        if (swiperRef.current) {
          swiperRef.current.swiper.slideNext(); 
        }
      };
    
  return (
    <div className='w-full h-screen'>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
       ref={swiperRef}
        // pagination={false}
        centeredSlides={true}
       initialSlide={2}
       navigation={{
        nextEl:'.next-button',
        prevEl:'.prev-button'
       }} 
      
    //    loopedSlides={3}
        pagination={{
          clickable: true,
          type:"custom"
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper w-full overflow-hidden h-[400px]  flex justify-center items-center text-white"
      >
        <SwiperSlide className="bg-white  md:min-w-[720px] text-black">slide1</SwiperSlide>
        <SwiperSlide  className='bg-white md:min-w-[720px]  text-black'>Slide 2</SwiperSlide>
        <SwiperSlide  className='bg-white md:min-w-[720px]  text-black'>Slide 3</SwiperSlide>
        <SwiperSlide  className='bg-white md:min-w-[720px]  text-black'>Slide 4</SwiperSlide>
        <SwiperSlide  className='bg-white md:min-w-[720px]  text-black'>Slide 5</SwiperSlide>
        <SwiperSlide  className='bg-white md:min-w-[720px]  text-black'>Slide 6</SwiperSlide>
        <SwiperSlide  className='bg-white md:min-w-[720px]  text-black'>Slide 7</SwiperSlide>
        <SwiperSlide  className='bg-white md:min-w-[720px]  text-black'>Slide 8</SwiperSlide>
        <SwiperSlide  className='bg-white md:min-w-[720px]  text-black'>Slide 9</SwiperSlide>
      </Swiper>
      <div className="flex justify-center mt-4">
        <button 
          className= "prev-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
         
        >
          Prev
        </button>
        <button 
          className="next-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
        
        >
          Next
        </button>
      </div>
    </div>
  );
}
