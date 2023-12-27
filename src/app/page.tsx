import { Montserrat } from 'next/font/google'
import Butterfly from '@/components/Butterfly'
import Header from '@/components/layout/Header'
import { cn } from '@/utils/cn'

const font = Montserrat({
  subsets: ['latin'],
})

export default function HomePage() {
  return (
    <div className="flex h-dvh flex-col">
      <Header />
      <main className="relative z-20 mt-20 flex flex-col-reverse  md:flex-row">
        <div className="relative top-16 mx-auto flex h-full flex-1 flex-col items-start pl-7">
          <Butterfly />
          <h1 className={cn('text-[9vh] font-bold', font.className)}>
            <span>DKHOA </span>
            <span className="text-stroke">{'<LE />'}</span>
          </h1>

          <div className="mt-4 max-w-md">
            <p>
              I used to identify as a software engineer, but in truth, my true passion lies in the
              joy of creating. If you'd like to connect, feel free to reach out to me via{' '}
              <a href="mailto:khoale9098@gmail.com" className="underline">
                email
              </a>
              .
            </p>
          </div>
        </div>
        <div className="flex-1"></div>
      </main>
      <div className="fixed inset-x-0 bottom-0 z-50">
        <img src="/images/sunflower.png" alt="" className="w-full" />
      </div>
    </div>
  )
}
