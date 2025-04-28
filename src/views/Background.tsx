'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Butterfly from '@/components/Butterfly'
import { montserratFont } from '@/configs/font'
import { cn } from '@/utils/cn'

const animation = {
  initial: { y: '120%' },
  enter: (i: number) => ({
    y: '0',
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i },
  }),
}

const Background = ({ isVisible }: { isVisible: boolean }) => {
  const ref = useRef(null)
  const inView = useInView(ref)
  const isInView = isVisible && inView

  const element = (
    <div className="relative z-50" ref={ref}>
      <motion.div
        variants={animation}
        initial="initial"
        animate={inView ? 'enter' : ''}
        className={cn('text-[10vh] font-bold ', montserratFont.className)}
      >
        <span>DKHOA </span>
        <span className="text-stroke">{'<LE />'}</span>
      </motion.div>
      <div className="mt-4 max-w-md pr-4">
        <motion.p variants={animation} initial="initial" animate={isInView ? 'enter' : ''}>
          I used to identify as a software engineer, but in truth, my true passion lies in the joy
          of creating. If you'd like to connect, feel free to reach out to me via{' '}
          <a href="mailto:khoale9098@gmail.com" className="underline">
            email
          </a>
          .
        </motion.p>
      </div>
    </div>
  )

  return (
    <main className="h-dvh relative z-20 flex flex-col-reverse overflow-hidden  md:flex-row">
      <div className="relative top-16 mx-auto mt-20 flex h-full flex-1 flex-col items-start pl-4 md:pl-7">
        <Butterfly />
        <h1 className="sr-only">Khoa Le</h1>
        {element}
      </div>
      <div className="absolute inset-x-0 bottom-0 z-50">
        <img src="/images/sunflower.png" alt="" className="w-full" />
      </div>
      <div className="flex-1 hidden 2xl:block" />
    </main>
  )
}
export default Background
