import { tuskerGrotesk } from '@/assets/fonts'
import Header from '@/components/layout/Header'
import { cn } from '@/utils'

export default function IndexPage() {
  return (
    <div>
      <Header />
      <main className="relative h-screen pt-[77px]">
        <div className="absolute inset-x-0 bottom-7 flex items-end justify-between px-7">
          <div
            className={cn(
              'whitespace-nowrap text-[30vh] uppercase leading-none',
              tuskerGrotesk.className
            )}
          >
            <div className="glitch">Frontend</div>
            <div className="text-stroke">Developer</div>
          </div>
        </div>
      </main>
    </div>
  )
}
