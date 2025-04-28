'use client'

import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Preloader from '@/components/Preloader'
import About from './About'
import Background from './Background'
import TextSlide from './TextSlide'
import Work from './Work'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
      document.body.style.cursor = 'default'
      window.scrollTo(0, 0)
    }, 2000)
  }, [])

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">{isLoading && <Preloader />}</AnimatePresence>
      {!isLoading && (
        <>
          <Header />
          <Background />
          <TextSlide />
          <About />
          <Work />
          <Footer />
        </>
      )}
    </div>
  )
}
export default Home
