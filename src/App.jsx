import { useState } from 'react'

import './App.css'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Ecosystem from './components/Ecosystem'
import ParallaxGallery from './components/ParallaxSection'
import PartnerCount from './components/PartnerCount'
import Testimonial from './components/Testimonial'

function App() {
  

  return (
    <div className='  '>
  
    <Header/>
    <HeroSection/>
    <Services/>
    <Ecosystem/>
    <ParallaxGallery/>
    <PartnerCount/>
    <Testimonial/>
    <Services/>
    </div>
  )
}

export default App
