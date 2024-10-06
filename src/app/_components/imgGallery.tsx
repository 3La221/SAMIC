'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface Organisation {
  id: number;
  title: string;
  desc: string;
  img: string;
}

interface ImageGalleryProps {
  initalOrganisations  : Organisation[];

}

export default function ImgGallery({ initalOrganisations }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % initalOrganisations.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + initalOrganisations.length) % initalOrganisations.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000) // Auto-change every 5 seconds
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {initalOrganisations.map((organisation, index) => (
          <div key={index} className="w-full flex-shrink-0 relative group">
            <img 
              src={`/api/images/${organisation.img}`} 
              alt={organisation.title} 
              className="w-full h-48 sm:h-64 md:h-80 object-cover" 
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h6 className="text-sm">{organisation.title}</h6>
              <h3 className="text-lg font-semibold">{organisation.desc}</h3>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-1 rounded-full"
        onClick={prevSlide}
      >
        <FaChevronLeft className="h-4 w-4 text-gray-800" />
        <span className="sr-only">Previous slide</span>
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-1 rounded-full"
        onClick={nextSlide}
      >
        <FaChevronRight className="h-4 w-4 text-gray-800" />
        <span className="sr-only">Next slide</span>
      </button>
    </div>
  )
}