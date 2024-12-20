'use client'

import UserProfile from './UserProfile'
import Logo from './Logo'
import { useScroll } from '../hooks/useScrool'
import { NavLinks } from './NavLinks'

export default function Header() {
  const isScrolled = useScroll()

  return(
    <header className={`${isScrolled && 'bg-black'} fixed top-0 z-50 flex w-full items-center justify-between transition-all lg:px-10 lg:py-6`}>
      <div className='flex items-center space-x-2 md:space-x-8'>
        <Logo />
        <NavLinks />
      </div>
      <UserProfile />
    </header>
  )
}