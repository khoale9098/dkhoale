'use client'

import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useState } from 'react'
import { tuskerGrotesk } from '@/assets/fonts'
import Header from '@/components/layout/Header'
import { cn } from '@/utils'

export default function HomePage() {
  const bottom = (
    <div className="absolute inset-x-0 bottom-7 flex items-end justify-between px-7">
      <div
        className={cn(
          'whitespace-nowrap text-[30vh] uppercase leading-none',
          tuskerGrotesk.className
        )}
      >
        <div>Frontend</div>
        <div className="text-stroke">Engineer</div>
      </div>
      <div className="flex max-w-xl justify-end">
        <p>Im the frontend engineer</p>
      </div>
    </div>
  )

  return (
    <div>
      <Header />
      <main className="relative z-20 h-screen">{bottom}</main>
      <div className="absolute inset-y-0 right-0 z-0" >
        <div style={{ background: 'url(/images/background_1.jpeg)' }} className='h-full w-full'>

        </div>
        {/* <img src="" className="h-screen" alt="asd" /> */}
      </div>
    </div>
  )
}
