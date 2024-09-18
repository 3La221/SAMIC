import React, { ReactNode } from 'react'

const SectionTitle = ({title, icon}:{title:string, icon:ReactNode} , ) => {
  return (
      <div className='flex'>
        {icon}
      
        <h1 className='text-secondary border-b-2 pb-2' >
        {title}
        </h1>
      </div>
  )
}

export default SectionTitle
