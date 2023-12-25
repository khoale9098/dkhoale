import Butterfly from '@/components/Butterfly'
import Header from '@/components/layout/Header'

export default function HomePage() {
  return (
    <div className="flex h-dvh flex-col">
      <Header />
      <main className="relative z-20 mt-20 flex flex-col-reverse  md:flex-row">
        <div className="relative top-16 mx-auto flex h-full  flex-1 flex-col items-start pl-7">
          <Butterfly />

          <h1 className="text-[8vh] font-bold">
            <span>KHOA </span>
            <span className="text-stroke">{'<LE />'}</span>
          </h1>
          <div className="mt-4">
            <p>Software Engineer/ Web Developer</p>
          </div>
          <div className="mt-4">
            <p>
              Currently working full-time as a Senior Software Engineer at{' '}
              <a href="" className="underline">
                Agecode
              </a>
            </p>
          </div>
        </div>
        <div className="flex-1">{/* <div>1</div> */}</div>
      </main>

      <div className="fixed inset-x-0 bottom-0">
        <img src="/images/sunflower.png" alt="" className="w-full" />
      </div>
    </div>
  )
}
