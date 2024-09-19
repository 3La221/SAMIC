"use client"
import React from 'react'
import SectionTitle from '../_components/sectionTitle'
import { FaRegNewspaper } from "react-icons/fa";
import ActualiteCard from '../_components/actualiteCard';
import { Appearing } from '../_components/appearing';

const Actualite = () => {
  const news = [
    {
      label:"News 1",
    },
    {
      label:"News 2",
    }
   
  ]

  return (
    <div className='flex flex-col items-center gap-4'>
      <SectionTitle title="Actualités" icon= {<FaRegNewspaper className='text-primary rotate-45 mt-2' />} />
      <div className='flex gap-4 flex-wrap justify-center items-center'>
        <Appearing.Sequential>

        {news.map((news, index) => (
          <Appearing.FromBottom>
                        <ActualiteCard key={index} />
          </Appearing.FromBottom>
        ))}

        </Appearing.Sequential>
        
      
      </div>
      
    </div>
  )
}

export default Actualite
