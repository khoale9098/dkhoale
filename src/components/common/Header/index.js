import { useFlag } from '@/hooks/useFlag'

import DarkModeToggle from '../DarkModeToggle'
import NavItem from './NavItem'
import s from './Header.module.css'

const Header = () => {
  const [isOpenNav, doOpenNav, doClose] = useFlag(false)

  const menu = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About Me',
      href: '/',
    },
    {
      name: 'Blog',
      href: '/',
    },
  ]

  return (
    <header className="box-border block w-full">
      <div className="relative mt-7 mb-14 flex items-center">
        <div className={s.logo}>
          <h1>
            <a href="/">
              <img
                style={{ maxHeight: '60px' }}
                width="100%"
                height="100%"
                src="https://renge.fueko.net/content/images/2020/07/renge.svg"
                alt="Renge"
              />
            </a>
          </h1>
        </div>
        <div className="flex- pointer-events-none relative font-bold" style={{ flex: '0 1 100%' }}>
          <div className="flex w-full justify-between">
            <ul className="flex space-x-8 text-sm leading-normal">
              {menu.map(({ href, name }) => (
                <NavItem name={name} href={href} key={name} />
              ))}
            </ul>
            <div>
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
