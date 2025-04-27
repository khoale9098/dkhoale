'use client'

import { motion } from 'framer-motion'
import { useMousePosition } from '@/hooks'

const CURSOR_SIZE = 12

const CursorMask = () => {
  const { x, y } = useMousePosition(false)

  return (
    <motion.div
      className="mask"
      animate={{
        WebkitMaskPosition: `${x - CURSOR_SIZE / 2}px ${y - CURSOR_SIZE / 2}px`,
        WebkitMaskSize: `${CURSOR_SIZE}px`,
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
    />
  )
}
export default CursorMask
