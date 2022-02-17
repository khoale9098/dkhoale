import { useTheme } from 'next-themes'
import { useIsMount } from '@/hooks'
import s from './DarkMode.module.css'

const DarkModeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted] = useIsMount()

  if (!mounted) return null
  return (
    <div className="pointer-events-auto">
      <input
        checked={theme === 'light'}
        id="toggle"
        className={s.toggle}
        type="checkbox"
        onChange={(e) => {
          if (e.target.checked) {
            setTheme('light')
          } else {
            setTheme('dark')
          }
        }}
      />
    </div>
  )
}
export default DarkModeToggle
