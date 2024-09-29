"use client"

import React, { useState } from 'react'
import { BiDownArrow, BiSolidPhoneCall } from "react-icons/bi"
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import Link from 'next/link'
import { HiOutlineMenu, HiX } from "react-icons/hi"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Socials = () => {
  const socialmedias = [
    { icon: <FaFacebook />, href: 'https://web.facebook.com/profile.php?id=100057176661295&locale=fr_FR' },
    
  ]

  return (
    <div className='flex gap-4 items-center border-r-2 pr-4'>
      {socialmedias.map((item, index) => (
        <Link href={item.href} key={index} 
          className='text-muted text-xl hover:text-primary transition-colors duration-500 ease-in-out'>
          {item.icon}      
        </Link>
      ))}
    </div>
  )
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navBarItems = [
    { label: 'Accueil', href: '/' },
    { label: 'La SAMiC', href: '#SAMiC' },
    { label: 'Calendrier', href: '#Calendrier' },
    { label: 'Actualités', href: '#Actualités' },
    { label: 'Groupes de travail', href: '#Groupes de travail' },
  ]

  const archiveItems = [
    { label: 'Editions', href: '/archive/editions' },
    { label: 'Publications', href: '/archive/publications' },
    { label: 'COM-POSTER', href: '/archive/composters' },
    { label: 'Photos', href: '/archive/images' },
    { label: 'Vidéos', href: '/archive/videos' },
  ]

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='flex items-center justify-evenly p-3'>
      {/* Mobile Hamburger Menu */}
      <div className='lg:hidden'>
        <button onClick={toggleMenu} className='text-3xl text-primary mr-2'>
          {menuOpen ? <HiX className='mt-1'/> : <HiOutlineMenu className='mt-1' />}
        </button>
      </div>

      {/* Navbar items for larger screens */}
      <div className='hidden lg:flex'>
        {navBarItems.map((item, index) => (
          <a key={index} href={item.href} 
            className='text-secondary text-[14px] font-semibold uppercase p-2 m-1 
            hover:text-primary transition-colors duration-300 ease-in-out leading-9'>
            {item.label}
          </a>
        ))}
        <DropdownMenu>
          <DropdownMenuTrigger className='text-secondary text-[14px] font-semibold uppercase p-2 m-1 
            hover:text-primary transition-colors duration-300 ease-in-out leading-9 flex items-center justify-center gap-1'>
            Archives <BiDownArrow className='inline-block ' />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {archiveItems.map((item, index) => (
              <DropdownMenuItem key={index}>
                <Link href={item.href} className='w-full'>
                  {item.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className='flex gap-2'>
        <Socials />
        <BiSolidPhoneCall className='text-primary text-2xl' />
        <span className='font-bold text-secondary hover:text-primary cursor-pointer transition-colors duration-300 ease-in-out'>
          +213 558 885 522
        </span>
      </div> 

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden transition-all ease-in-out duration-200'>
          {navBarItems.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              className='block px-4 py-2 text-secondary text-[14px] font-semibold uppercase'
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className='block w-full text-left px-4 py-2 text-secondary text-[14px] font-semibold uppercase'>
              Archives
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {archiveItems.map((item, index) => (
                <DropdownMenuItem key={index}>
                  <Link href={item.href} className='w-full' onClick={() => setMenuOpen(false)}>
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  )
}

export default Navbar