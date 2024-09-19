"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/legacy/image';
import * as motion from "framer-motion/client"

const Hero = () => {
  const images = [
    "/assets/hero_img.jpg",
    // "/assets/hero_img2.jpg",
    // "/assets/hero_img3.jpg",
    // "/assets/hero_img4.jpg",
  ]


  const [currentImage , setCurrentImage ] = useState(0)

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentImage((prevImage) => (prevImage + 1) % images.length )
    },5000)
    return () => clearInterval(interval)
  },[images.length])

  return (
    <div className="relative h-screen md:h-dvh overflow-hidden"> {/* Prevent overflow */}
      <motion.div
         key={currentImage}
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }} // Slow zoom-in effect
        transition={{
          duration: 5, 
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Image
          src={images[currentImage]}
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="absolute inset-0" // Ensure full coverage
        />
      </motion.div>

      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-6xl lg:text-8xl font-bold"
          >
            SAMiC
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 75 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl "
          >
            La société algérienne de microbiologie clinique
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
