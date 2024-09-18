import React from 'react'
import SectionTitle from '../_components/sectionTitle'
import { FaRegNewspaper } from "react-icons/fa";
import ActualiteCard from '../_components/actualiteCard';

const Actualite = () => {
  return (
    <div className='flex flex-col items-center'>
      <SectionTitle title="Actualités" icon= {<FaRegNewspaper className='text-primary rotate-45 mt-2' />} />
      <div className='flex gap-4'>
      <ActualiteCard/>
      <ActualiteCard/>
      
      </div>
      
    </div>
  )
}

export default Actualite
