import Link from 'next/link';
import React from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";

interface ArchiveCardProps {
      title: string;
      description: string;
      icon: React.ReactNode;
      to: string;
      }


const ArchiveCard : React.FC<ArchiveCardProps> = ({title,description,icon,to}) => {
  return (
    <div className='shadow-xl flex flex-col p-6 mb-2 items-center'>
            {icon}
            <p className='font-bold text-secondary m-2' > {title} </p>
            <p className='text-[16px] text-center'> {description} </p>

            <span className='text-secondary flex items-center justify-center gap-1 self-end mt-2'>
             <Link href={`/archive/${to}`} className='text-xs'> Voir Plus </Link>     <IoIosArrowDroprightCircle className='inline text-secondary'/> 
            </span>
                  
    </div>
  )
}

export default ArchiveCard
