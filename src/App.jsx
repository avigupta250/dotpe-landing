import { useState } from 'react'
import {motion,AnimatePresence} from "motion/react"
import './App.css'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Ecosystem from './components/Ecosystem'
import ParallaxGallery from './components/ParallaxSection'
import PartnerCount from './components/PartnerCount'
import Testimonial from './components/Testimonial'
import MerchantsLogo from './components/MerchantsLogo'
import RequestSection from './components/RequestSection'

function App() {
  const [openModal, setOpenModal] = useState(false);
  
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
    <div className='  '>
   {/* Modal */}
   <AnimatePresence>
      {openModal && (
        <motion.div
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          exit={{y:-1000}}
          transition={{ duration: 0.8, delay: 0 }}
         
          className="fixed inset-0 flex items-center overflow-hidden justify-center z-50 bg-gray-800 bg-opacity-50"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white w-[400px] rounded-xl p-6 shadow-lg text-center"
          >
            <h2 className="text-2xl font-bold text-black mb-4">
              Form Submitted
            </h2>
            <p className="text-gray-600 mb-6">
              Your form has been submitted successfully! 🎉
            </p>
            <button
              onClick={closeModal}
              className="bg-blue-600 px-4 py-2 rounded-lg text-white hover:bg-blue-700"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
</AnimatePresence>
  <div>
    <Header setOpenModal={setOpenModal}/>
    <HeroSection/>
    <Services/>
    <Ecosystem/>
    <ParallaxGallery/>
    <PartnerCount/>
    <Testimonial/>
    <MerchantsLogo/>
    <RequestSection setOpenModal={setOpenModal} />
    <Services/>
    </div>
    </div>
  )
}

export default App
