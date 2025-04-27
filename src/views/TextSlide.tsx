import { useScroll } from 'framer-motion'
import { useRef } from 'react'
import Slide from '@/components/Slide'

const TextSlide = () => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  })

  return (
    <>
      <div className="h-[30vh]"></div>
      <div ref={container}>
        <Slide direction={'left'} left={'-120%'} progress={scrollYProgress} />
        <Slide direction={'right'} left={'-45%'} progress={scrollYProgress} />
        <Slide direction={'left'} left={'-75%'} progress={scrollYProgress} />
      </div>
      <div className="h-[10vh]"></div>{' '}
    </>
  )
}
export default TextSlide
