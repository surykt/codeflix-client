'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0) {
        setIsScrolled(true)
      }else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  return(
    <header className={`${isScrolled && 'bg-black'} fixed top-0 z-50 flex w-full items-center justify-between transition-all lg:px-10 lg:py-6`}>
      <div className='flex space-x-2 md:space-x-8'>
        <Image src='/logo.png' alt='logo da netflix' width={120} height={120}/>
        <ul className='hidden md:flex items-center md:space-x-4 font-bold'>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Latest</li>
        </ul>
      </div>
      <div className='flex items-center space-x-4'>
        <p className='font-bold cursor-not-allowed lg:inline'>Kids</p>
        <Image className='rounded cursor-pointer' src='/avatar-kids-profile.png' alt='logo perfil infantil' width={40} height={40}/>
      </div>
    </header>
  )
}