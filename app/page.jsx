"use client"

import React from 'react'
import Hero from '@/components/Hero'

import { ReactLenis } from 'lenis/dist/lenis-react'

const Home = () => {
  return (
    <>
      <ReactLenis root>
        <Hero />
        <div className='h-[8000px]'></div>
      </ReactLenis>
    </>
  )
}

export default Home
