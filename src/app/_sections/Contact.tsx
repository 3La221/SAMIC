'use client'

import React from 'react'
import { Facebook, Mail, MapPin, Phone, Globe } from "lucide-react"
import SectionTitle from '../_components/sectionTitle'
import { LuDna } from "react-icons/lu"

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full px-4 md:px-6 lg:px-8'>
      <SectionTitle title="Contact" icon={<LuDna className='text-primary rotate-90' />} />
      <div className='flex flex-col lg:flex-row mt-8 gap-8 lg:gap-16 w-full max-w-6xl'>
        <div className="flex flex-col justify-center gap-6 lg:gap-12 w-full lg:w-1/2">
          <div className="flex items-start">
            <MapPin className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-1" />
            <span className="text-sm md:text-base">1 Place du 1er Mai .Alger , Algiers, Algeria, 16000</span>
          </div>
          <div className="flex items-center">
            <Phone className="w-6 h-6 text-primary mr-2 flex-shrink-0" />
            <a href="#" className="hover:text-primary text-sm md:text-base">+213 558 885 522</a>
          </div>
          <div className="flex items-center">
            <Mail className="w-6 h-6 text-primary mr-2 flex-shrink-0" />
            <a href="mailto:contact@samic.dz" className="hover:text-primary text-sm md:text-base">contact@samic.dz</a>
          </div>
          <div className="flex items-center">
            <Globe className="w-6 h-6 text-primary mr-2 flex-shrink-0" />
            <a href="https://www.samic.dz" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-sm md:text-base">www.samic.dz</a>
          </div>
          <div className="flex items-center">
            <Facebook className="w-6 h-6 text-primary mr-2 flex-shrink-0" />
            <a href="https://www.facebook.com/SAMIC" target="_blank" rel="noopener noreferrer" className="hover:text-primary text-sm md:text-base">SAMIC Facebook</a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[450px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6392.73127855702!2d3.057044!3d36.761795!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb261cd16a411%3A0x60e3ce889bc21f0d!2sPlace%20du%201er%20Mai%2C%20Sidi%20M&#39;Hamed%2016000!5e0!3m2!1sen!2sdz!4v1728393521713!5m2!1sen!2sdz" 
            width="100%" 
            height="100%" 
            style={{border:0}}
            loading="lazy"
            title="Google Maps"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Contact