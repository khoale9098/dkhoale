import Link from 'next/link'
import MotionSignature from '../Signature/MotionSignature'

const Header = () => (
  <header className="fixed inset-x-6 top-0 z-50 flex items-center pb-6 pt-7">
    <div className="flex items-center">
      <h1 className="font-dancing sr-only  text-primary">Khoa Le</h1>
      <div className="text-primary">
        <MotionSignature />
      </div>
      <div className="ml-5 uppercase">Senior Frontend Engineer</div>
    </div>
    <div className="ml-auto hidden items-center space-x-6 md:flex">
      <nav>
        <Link href="#about">about</Link>, <Link href="#work">work</Link>,{' '}
        <Link href="#contact">contact</Link>,{' '}
        <a target="_blank" href="https://cvdesignr.com/p/65157fd5c93ff">
          CV
        </a>
      </nav>
    </div>
  </header>
)
export default Header
