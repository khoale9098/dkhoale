import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/utils/cn'

const animation = {
  initial: { y: '100%' },
  enter: (i: number) => ({
    y: '0',
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i },
  }),
}

const About = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  return (
    <section className="min-h-[100dvh] container mx-auto px-5 xl:pt-32" id="about">
      <div className="relative z-20 flex flex-col-reverse overflow-hidden lg:flex-row">
        <div
          className="relative flex w-full flex-col flex-nowrap items-start justify-center  pt-14 md:flex-[5_0_0]"
          ref={ref}
        >
          <motion.div
            variants={animation}
            initial="initial"
            animate={inView ? 'enter' : ''}
            className="flex flex-col gap-12"
          >
            <h3 className={cn('text-3xl font-semibold font-dancing text-primary md:text-6xl')}>
              Hello there
              <br />
              I'm Khoa Le
            </h3>
            <p className="uppercase text-white/60">
              Hey Khoa here! I'm a Front-end Web Developer and Designer based from the Vietnam with
              5+yoe. <br /> Experienced in designing and developing intuitive, high-performance, and
              secure web applications for ERP and SAAS platforms. Skilled in building scalable
              solutions with a focus on reliability and cross-device user experiences.
            </p>
          </motion.div>
          <div className="mt-[10vh] flex gap-5">
            <div className="pr-5 w-1/2 md:w-auto md:pr-16">
              <p className="text-white/60">SERVICES</p>
              <p className="">
                <span>WEB DESIGN</span>
                <br />
                <span>WEB DEVELOPMENT</span>
                <br />
                <span>APP DEVELOPMENT</span>
                <br />
                <span>PHOTOGRAPHY</span>
                <br />
                <span>PHOTOSHOP</span>
                <br />
              </p>
            </div>
            <div className="mt-5">
              <p className="text-white/60 uppercase">What i use for project</p>
              <p className="">
                <span>Proficient in React, NextJS, GraphQL</span>
                <br />
                <span>Typescript</span>
                <br />
                <span>HTML/CSS</span>
                <br />
                <span>React Native</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-[1_0_0] flex-col gap-12"></div>
        <motion.div
          className="relative flex h-[60dvh] md:h-[80svh] md:flex-[6_0_0]"
          initial={{ scale: 0.8 }}
          animate={{
            scale: inView ? 1 : 0.8,
          }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: 0,
            repeatType: 'reverse',
          }}
        >
          <motion.img src="/images/IMG_0875.jpeg" alt="" className="h-full object-contain" />
          <div className="absolute top-2 right-0 size-20">
            <img src="/images/moon.png" alt="" className="h-full object-contain" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
export default About
