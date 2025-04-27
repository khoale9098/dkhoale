'use client'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import About from './About'
import Background from './Background'
import TextSlide from './TextSlide'
import Work from './Work'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Background />
      <TextSlide />
      <About />
      <Work />
      <Footer />
    </div>
  )
}
export default Home
