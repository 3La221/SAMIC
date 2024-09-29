"use client"

import React, { ReactNode } from 'react'
import { Appearing } from '../_components/appearing';
import { LuDna } from "react-icons/lu";


const SectionTitle = ({title, icon}:{title:string, icon:ReactNode} , ) => {
  return (

    <Appearing.FromBottom>
      <div className='flex mt-6'>
      <LuDna className='text-primary rotate-90'/>
      
        <h1 className='text-secondary border-b-2 pb-2' >
        {title}
        </h1>
      </div>

    </Appearing.FromBottom>
    
      
  
      
  )
}

export default SectionTitle
