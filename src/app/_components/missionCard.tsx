import React from 'react'
import { MdOutlineTaskAlt } from "react-icons/md";

import Image from 'next/image'

const MissionCard = ({label}:{label:string}) => {
  return (
      <div className='shadow-xl px-10 py-8 group rounded-lg cursor-pointer  '>

      <div className='flex items-center gap-12'>
        <MdOutlineTaskAlt className='text-4xl text-secondary group-hover:text-primary transition-colors duration-300' />
        <Image src='/assets/shape/shape-8.png' alt='1' width={80} height={80} />
        
      </div>

      <p className='text-muted text-xs'></p>
      <h2 className='text-secondary text-2xl '>{label}</h2>

      
    </div>
  )
}

export default MissionCard
