// @ts-nocheck
import { motion } from 'framer-motion'
import { JSX, useState } from 'react'
import { disperse } from '@/utils/anim'
import s from '../layout/style.module.css'

function TextDipserse({ children, ...props }) {
  const [isAnimated, setIsAnimated] = useState(false)

  const getChars = (element: { props: { children: string } }) => {
    let chars = []
    if (children.length) {
      children.forEach((el: { props: { children: string } }, i: number) => {
        chars.push(splitWord(el.props.children, i))
      })
    } else {
      chars.push(splitWord(element.props.children, 1))
    }
    return chars
  }
  const splitWord = (word: string, indexOfWord: number) => {
    let chars: JSX.Element[] = []
    word.split('').forEach((char, i) => {
      chars.push(
        <motion.span
          custom={indexOfWord * i}
          variants={disperse}
          animate={isAnimated ? 'open' : 'closed'}
          key={char + i}
        >
          {char}
        </motion.span>
      )
    })
    return chars
  }

  const manageMouseEnter = () => {
    setIsAnimated(true)
  }
  const manageMouseLeave = () => {
    setIsAnimated(false)
  }

  return (
    <div
      style={{ cursor: 'pointer' }}
      onMouseEnter={() => {
        manageMouseEnter()
      }}
      onMouseLeave={() => {
        manageMouseLeave()
      }}
      className={s.introLine}
      {...props}
    >
      {getChars(children)}
    </div>
  )
}
export default TextDipserse
