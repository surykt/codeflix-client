 import Image from 'next/image'
import React from 'react'

export default function UserProfile() {
  return(
    <div className='flex items-center space-x-4'>
      <p className='cursor-not-allowed font-bold lg:inline'>Kids</p>
      <Image
        className='cursor-pointer rounded'
        src='/avatar-kids-profile.png'
        alt='logo perfil infantil'
        width={40}
        height={40}
      />
    </div>
  )
}
    