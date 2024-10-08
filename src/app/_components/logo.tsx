import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <a href='/'>
      <Image 
        src='/logos/logo.png' 
        alt='logo' 
        width={400} 
        height={400} 
        style={{ width: 'auto', height: 'auto' }} // Ensuring aspect ratio is maintained
      />
    </a>
  )
}

export default Logo
