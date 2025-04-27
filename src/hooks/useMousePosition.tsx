import { useEffect, useState } from 'react'

type MousePosition = {
  x: number
  y: number
}

const useMousePosition = (includeTouch: boolean) => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent | TouchEvent) => {
      let x, y
      if ('touches' in ev) {
        const touch = ev.touches[0]
        x = touch.clientX
        y = touch.clientY
      } else {
        x = ev.clientX
        y = ev.clientY
      }
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', updateMousePosition)

    if (includeTouch) {
      window.addEventListener('touchmove', updateMousePosition)
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)

      if (includeTouch) {
        window.removeEventListener('touchmove', updateMousePosition)
      }
    }
  }, [includeTouch])

  return mousePosition
}

export { useMousePosition }
