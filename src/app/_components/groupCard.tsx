import Image from 'next/image';
import React from 'react'

interface EventCardProps {
  name: string;
  image: string;
  icon : React.ReactNode;

}

const GroupCard: React.FC<EventCardProps> = ({ name, image , icon }) => {
  return (
      <div className="service-block-one w-[350px]   mb-6 shadow-xl cursor-pointer">
             
            <div className="inner-box h-full">
                  <div className="image-box ">
                  <figure className="image">
                        <Image
                        src={image}
                        alt={name}
                        width={350}
                        height={200}
                        />
                 </figure>
                  <div className="icon-box">{icon}</div>
                  </div>
                  <div className='bg-white h-full'>
                     <p className='text-secondary text-xl p-4 text-center  '>{name}</p>   
                  </div>
            </div>
      </div>
  )
}

export default GroupCard
