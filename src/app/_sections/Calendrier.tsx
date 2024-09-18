import React from 'react'
import SectionTitle from '../_components/sectionTitle'
import { FaCalendarDay } from "react-icons/fa";
import SubSectionTitle from '../_components/subSectionTitle';
import DateCard from '../_components/dateCard';

const Calendrier = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <SectionTitle title={"Calendrier"} icon={<FaCalendarDay className='text-primary -rotate-45'/>}/>
      <p className='font-light text-center text-secondary w-1/2   '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Totam quo debitis voluptas. Ratione porro quod sunt,
          expedita ut voluptatum consequuntur enim,
           quia cupiditate optio,
            blanditiis repudiandae in numquam accusamus perferendis!
      </p>
      <SubSectionTitle title={'Prochains événements'}/>
      <div className='flex items-center justify-center'  >
        <DateCard date={'12/12/2021'} eventTitle={'Event 1'}/>
      </div>

      <hr className='border-t mt-6 border-muted w-3/4' />

      <SubSectionTitle title={'Formations'}/>

      <div className='flex items-center justify-center'  >
        <DateCard date={'12/12/2021'} eventTitle={'Event 1'}/>
      </div>

      <hr className='border-t mt-6 border-muted w-3/4' />
    </div>
  )
}

export default Calendrier
