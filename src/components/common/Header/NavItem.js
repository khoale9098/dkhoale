import Link from 'next/link'

const NavItem = ({ name, href }) => {
  return (
    <li className="pointer-events-auto cursor-pointer hover:text-blue-900 hover:underline">
      <Link href="/">
        <a>{name}</a>
      </Link>
    </li>
  )
}

export default NavItem
