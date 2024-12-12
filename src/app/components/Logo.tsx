import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <Image src='/logo.png' alt='logo da netflix' width={120} height={120}/>
  )
}
    