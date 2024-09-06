"use client"

import React from 'react'
import Hero from '@/components/Hero'

import { ReactLenis } from 'lenis/dist/lenis-react'
import Brands from '@/components/Brands'
import Features from '@/components/Features'

const Home = () => {
  return (
    <>
      <ReactLenis root>
        <Hero />
        <Brands />
        <Features />
        <div className='h-[8000px]'></div>
      </ReactLenis>
    </>
  )
}

export default Home
