"use client"
import React from 'react'
import ObjectifCard from '../_components/objectifCard'
import MissionCard from '../_components/missionCard'
import SectionTitle from '../_components/sectionTitle';
import SubSectionTitle from '../_components/subSectionTitle';
import ImageGallery from '../_components/imgGallery';
import { LuDna } from "react-icons/lu";
import { motion, useScroll } from "framer-motion"


const LaSamic = () => {

  const { scrollYProgress } = useScroll();
  


  return (
    <motion.div 


    className='flex flex-col justify-center items-center gap-4 mt-8 mb-8 '>
      
      

      <SectionTitle title={"La SAMiC"} icon={<LuDna className='text-primary rotate-90'/>} />



      <p  className='font-light text-center text-secondary w-1/2   '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Totam quo debitis voluptas. Ratione porro quod sunt,
          expedita ut voluptatum consequuntur enim,
           quia cupiditate optio,
            blanditiis repudiandae in numquam accusamus perferendis!
      </p>

    
      
      <SubSectionTitle title={"Objectifs"} />

      
      <div className='flex gap-6'>
      <ObjectifCard/>
      <ObjectifCard/>
      <ObjectifCard/>
      <ObjectifCard/>
      </div>

      <hr className='border-t mt-6 border-muted w-3/4' />

      

      <SubSectionTitle title={"Missions"} />

      <div className='flex gap-6'>
        
        <MissionCard/>
        <MissionCard/>
        <MissionCard/>
        <MissionCard/>
        
      </div>
        <hr className='border-t mt-6 border-muted w-3/4' />


      <SubSectionTitle title={'Organisation'} />

      <ImageGallery/>


    </motion.div >
  )
}

export default LaSamic
