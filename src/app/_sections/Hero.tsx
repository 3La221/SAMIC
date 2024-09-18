import React from 'react'
import Image from 'next/legacy/image';
import * as motion from "framer-motion/client"

const Hero = () => {
  return (
    <div className="relative h-dvh">
      <Image
        src="/assets/hero_img.jpg" 
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-8xl font-bold"
            >
              Welcome to SAMiC
            </motion.h1>
          <p className="text-4xl ">La société algérienne de microbiologie clinique</p>
        </div>
      </div>
    </div>
  )
}

export default Hero