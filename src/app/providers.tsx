'use client'

import { domAnimation, LazyMotion } from 'framer-motion'
import { ReactLenis } from 'lenis/react'
import type { LenisRef } from 'lenis/react'
import { ReactNode, useEffect, useRef } from 'react'

interface ProviderLayoutProps {
  children: ReactNode
}

export default function AppProviders({ children }: ProviderLayoutProps) {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(time: any) {
      lenisRef.current?.lenis?.raf(time)
    }
    const rafId = requestAnimationFrame(update)

    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      <ReactLenis root ref={lenisRef}>
        {children}
      </ReactLenis>
    </LazyMotion>
  )
}
