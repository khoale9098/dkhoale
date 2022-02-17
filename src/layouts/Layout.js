import Header from '@/components/common/Header'

const Layout = ({ children }) => {
  return (
    <div className="relative mx-auto flex h-full max-w-screen-xl flex-col">
      <div className="w-full">
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Layout
