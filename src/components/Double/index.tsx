'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MouseEvent, useRef } from 'react'
import { cn } from '@/utils/cn'
import styles from './style.module.css'

type TDoubleProps = {
  projects: Array<any>
  reversed?: boolean
}
function Double({ projects, reversed }: TDoubleProps) {
  const firstImage = useRef<HTMLDivElement | null>(null)
  const secondImage = useRef<HTMLDivElement | null>(null)
  let requestAnimationFrameId: number | null
  let xPercent = reversed ? 100 : 0
  let currentXPercent = reversed ? 100 : 0
  const speed = 0.15

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX } = e
    xPercent = (clientX / window.innerWidth) * 100

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate)
    }
  }

  const animate = () => {
    const xPercentDelta = xPercent - currentXPercent
    currentXPercent = currentXPercent + xPercentDelta * speed
    const firstImagePercent = 66.66 - currentXPercent * 0.33
    const secondImagePercent = 33.33 + currentXPercent * 0.33
    if (firstImage.current) {
      firstImage.current.style.width = `${firstImagePercent}%`
    }
    if (secondImage.current) {
      secondImage.current.style.width = `${secondImagePercent}%`
    }
    if (Math.round(xPercent) == Math.round(currentXPercent)) {
      if (requestAnimationFrameId) {
        window.cancelAnimationFrame(requestAnimationFrameId)
      }
      requestAnimationFrameId = null
    } else {
      window.requestAnimationFrame(animate)
    }
  }

  return (
    <div
      onMouseMove={(e) => {
        manageMouseMove(e)
      }}
      className={cn(styles.double, 'flex sm:flex-row flex-col')}
    >
      <div ref={firstImage} className={cn(styles.imageContainer)}>
        <Link href={projects[0].url} target="_blank">
          <div className="relative pb-[66%]">
            <Image src={projects[0].src} fill={true} alt={'image'} className="object-cover" />
          </div>
        </Link>

        <div className="text-base p-2.5">
          <h3 className="text-lg text-white  mb-1 mt-0">{projects[0].name}</h3>
          <p className="break-words text-xs md:text-base">{projects[0].description}</p>
          <p className="text-primary">{projects[0].year}</p>
        </div>
      </div>
      {/*  */}
      <div ref={secondImage} className={styles.imageContainer}>
        <Link href={projects[1].url} target="_blank">
          <div className="relative pb-[66%]">
            <Image src={projects[1].src} fill={true} alt={'image'} className="object-cover" />
          </div>
        </Link>
        <div className="text-base p-2.5">
          <h3 className="text-lg text-white  mb-1 mt-0">{projects[1].name}</h3>
          <p className="break-words text-xs md:text-base">{projects[1].description}</p>
          <p className="text-primary">{projects[1].year}</p>
        </div>
      </div>
    </div>
  )
}
export default Double
