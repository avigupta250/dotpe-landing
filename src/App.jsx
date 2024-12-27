import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Ecosystem from "./components/Ecosystem";
import ParallaxGallery from "./components/ParallaxSection";
import PartnerCount from "./components/PartnerCount";
import Testimonial from "./components/Testimonial";
import MerchantsLogo from "./components/MerchantsLogo";
import RequestSection from "./components/RequestSection";

import { FormModal } from "./components/FormModal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
     
      <FormModal open={openModal} setOpenModal={setOpenModal} />
      <div>
        <Header setOpenModal={setOpenModal} />
        <HeroSection />
        <Services />
        <Ecosystem />
        <ParallaxGallery />
        <PartnerCount />
        <Testimonial />
        <MerchantsLogo />
        <RequestSection setOpenModal={setOpenModal} />
        <Services />
      </div>
    </div>
  );
}

export default App;
