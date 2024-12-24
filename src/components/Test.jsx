

import React from 'react'
import{ motion} from "motion/react"
const test = () => {
  return (
    <motion.h1 
     initial={{ opacity: 0, x: 20 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.5, delay: 0.3 }}
    className='text-black '>Hii there</motion.h1>
  )
}

export default test