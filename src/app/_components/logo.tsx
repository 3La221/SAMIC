import React from 'react'
import Image from 'next/image'


const Logo = () => {
  return (
    <a href='/'>
      <Image 
        src='/logos/logo.png' 
        width={400} 
        height={400} 
        alt='logo' 
        priority
      />
    </a>
  )
}

export default Logo
