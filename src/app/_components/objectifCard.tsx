import React from 'react'
import { GoGoal } from "react-icons/go";

import Image from 'next/image'

const ObjectifCard = ({label}:{label:string}) => {
  return (
    <div className='shadow-xl w-fit px-10 py-8 group rounded-lg cursor-pointer '>

      <div className='flex items-center gap-12'>
        <GoGoal className='text-4xl text-secondary group-hover:text-primary transition-colors duration-300' />
        <Image   src='/assets/shape/shape-21.png' alt='1' width={100} height={100} />
        
      </div>

      <p className='text-muted text-xs'></p>
      <h2 className='text-secondary text-2xl '>{label}</h2>

      
    </div>
  )
}

export default ObjectifCard
