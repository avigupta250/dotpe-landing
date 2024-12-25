import { useState } from 'react'

import './App.css'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Ecosystem from './components/Ecosystem'

function App() {
  

  return (
    <div className='  '>
  
    <Header/>
    <HeroSection/>
    <Services/>
    <Ecosystem/>
    </div>
  )
}

export default App
