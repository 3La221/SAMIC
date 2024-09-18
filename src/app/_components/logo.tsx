import React from 'react'
import Image from 'next/image'


const Logo = () => {
  return (
    <div>
      <Image 
        src='https://www.samic.dz/images/logo_full.png' 
        width={400} 
        height={400} 
        alt='logo' 
        priority
      />
    </div>
  )
}

export default Logo
