'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './style.module.css'

const words = ['Hello', 'Bonjour', 'Ciao', 'Olà', 'やあ', 'Hallå', 'Guten tag', 'Hallo']
export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
}

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: '-100vh',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
}
export default function Preloader() {
  const [index, setIndex] = useState(0)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  useEffect(() => {
    if (index == words.length - 1) return
    setTimeout(
      () => {
        setIndex(index + 1)
      },
      index == 0 ? 1000 : 150
    )
  }, [index])

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${
    dimension.width / 2
  } ${dimension.height + 300} 0 ${dimension.height}  L0 0`
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${
    dimension.width / 2
  } ${dimension.height} 0 ${dimension.height}  L0 0`

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  }

  return (
    <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>
      {dimension.width > 0 && (
        <>
          <motion.p variants={opacity} initial="initial" animate="enter">
            {words[index]}
          </motion.p>
          <svg>
            <motion.path variants={curve} initial="initial" exit="exit" />
          </svg>
        </>
      )}
    </motion.div>
  )
}
