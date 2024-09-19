"use client"
import React from 'react'
import SectionTitle from '../_components/sectionTitle'
import { FaCalendarDay } from "react-icons/fa";
import SubSectionTitle from '../_components/subSectionTitle';
import DateCard from '../_components/dateCard';
import { Appearing } from '../_components/appearing';

const Calendrier = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <SectionTitle title={"Calendrier"} icon={<FaCalendarDay className='text-primary -rotate-45'/>}/>

    <Appearing.FromBottom className='flex items-center justify-center'>
      <p className='font-light text-center text-secondary w-1/2  text-[14px] md:text-[20px] lg:text-[24px]  '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Totam quo debitis voluptas. Ratione porro quod sunt,
            expedita ut voluptatum consequuntur enim,
            quia cupiditate optio,
              blanditiis repudiandae in numquam accusamus perferendis!
        </p>

    </Appearing.FromBottom>

      
      <SubSectionTitle title={'Prochains événements'}/>
      <Appearing.FromLeft>

      <div className='flex items-center justify-center'  >
        <DateCard date={'12/12/2021'} eventTitle={'Event 1'}/>
      </div>

      </Appearing.FromLeft>
      

      <hr className='border-t mt-6 border-muted w-3/4' />

      <SubSectionTitle title={'Formations'}/>

      <Appearing.FromRight>

      <div className='flex items-center justify-center'  >
        <DateCard date={'12/12/2021'} eventTitle={'Event 1'}/>
      </div>
      
      </Appearing.FromRight>

      <hr className='border-t mt-6 border-muted w-3/4' />
    </div>
  )
}

export default Calendrier
