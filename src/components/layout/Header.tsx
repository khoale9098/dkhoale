import { memo } from 'react'

export default memo(() => (
  <header className="fixed inset-x-6 top-0 flex items-center border-b border-solid  border-red-100 pb-6 pt-7">
    <div className="flex items-center">
      <h1>Khoa Le</h1>
      <div className="ml-5 uppercase">Frontend Developer</div>
    </div>
    <div className="ml-auto flex items-center space-x-6">
      <nav>about, works, contact</nav>
      <div>EN</div>
    </div>
  </header>
))
