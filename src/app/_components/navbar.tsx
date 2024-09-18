"use client"

import React from 'react' 
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebook , FaLinkedin , FaTwitter , FaInstagram     } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Socials = () => {
const socialmedias = [
{ icon : <FaFacebook/> , href : 'https://www.facebook.com'},
{ icon : <FaLinkedin/> , href : 'https://www.linkedin.com'},
{ icon : <FaTwitter/> , href : 'https://www.twitter.com'},
{ icon : <FaInstagram/> , href : 'https://www.instagram.com'},
]

return (
<div className='flex gap-4 items-center border-r-2 pr-4'>
      {socialmedias.map(
            (item,index) => (
                  <Link href={item.href} key={index} 
                  className='text-muted 
                  text-xl hover:text-primary
                  transition-color duration-500 ease-in-out' >
                  {item.icon}      
                  </Link>
            )
      )}

</div>
)


}



const Navbar = () => {
      const navBarItems = [
            { label : 'Accueil', href : '/'},
            { label : 'La SAMiC', href : '#SAMiC'},
            { label : 'Calendrier', href : '#Calendrier'},
            { label : 'Actualités', href : '#Actualités'},
            { label : 'Groupes de travail', href : '#Groupes de travail'},
            { label : 'Archives', href : '#Archives'},
      ]

      const pathname = usePathname()
      console.log(pathname)


  return (
    <div className='flex items-center  justify-evenly p-3  '>
      <div className='flex  '>
        {navBarItems.map(
              (item, index) => (

                    <a key={index} href={item.href} 
                    className='text-secondary text-[14px] font-semibold uppercase p-2 m-1 
                    hover:text-primary transition-colors
                        duration-300 ease-in-out leading-9'>
                          {item.label}
                    </a>
              )
        )}
        
      </div>

      <div className='flex gap-2'>
            
            <Socials/>
              <BiSolidPhoneCall className='text-primary text-2xl' />
          {/* <Image src='/assets/icons/dial-pad.png' alt='logo' width={20} height={20} className='text-secondary' /> */}
          <span className='font-bold text-secondary hover:text-primary cursor-pointer transition-colors duration-300 ease-in-out'>[800] 45 6789 01</span>
      </div> 
    </div>
  )
}

export default Navbar
