'use client'

import useMouse from '@react-hook/mouse-position'
import { motion } from 'framer-motion'
import { RefObject, useRef, useState } from 'react'

type CursorVariant = 'default' | string // Add other variants if you have more

export const useCustomCursor = () => {
  const [cursorText, setCursorText] = useState<string>('')
  const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default')

  const ref = useRef(null)
  const mouse = useMouse(ref, { enterDelay: 100, leaveDelay: 100 })
  let mouseXPosition = 0
  let mouseYPosition = 0

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX ?? 0
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY ?? 0
  }

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: '16px',
      backgroundColor: '#ffffff',
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
  } as const

  const cursor = (
    <motion.div
      variants={variants}
      className="pointer-events-none fixed left-0 top-0 z-[100] flex h-2.5 w-2.5 content-center justify-center rounded-[200px] text-center text-base mix-blend-difference"
      animate={cursorVariant}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
      }}
    >
      <span className="cursorText">{cursorText}</span>
    </motion.div>
  )

  return {
    ref,
    cursor,
    setCursorText,
    setCursorVariant,
  }
}
