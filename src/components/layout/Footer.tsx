import Image from 'next/image'
import TextDipserse from '../TextDipserse'
import s from './style.module.css'

const Footer = () => (
  <footer
    id="contact"
    className="relative h-dvh"
    style={{ clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)' }}
  >
    <div
      className="fixed bottom-0 inset-x-0 h-[80vh] container mx-auto bg-contain bg-left-top bg-no-repeat"
      style={{ backgroundImage: 'url(/images/bg_startnight.png)' }}
    >
      <h2>Let's talk</h2>

      <div className="flex flex-col xl:flex-row items-start">
        <div className="w-full md:w-1/2 max-md:pb-5 md:px-20">
          <div className={s.introLine}>
            <p>Khoa</p>
            <p>Le</p>
          </div>

          <div className={s.introLine}>
            <p>Freelancer</p>
            <p>&</p>
          </div>
          <div className={s.introLine}>
            <p>Frontend</p>
            <p>Engineer</p>
          </div>
          <TextDipserse>
            <p>0337011110</p>
          </TextDipserse>

          <TextDipserse
            onClick={() => {
              window.open('https://www.linkedin.com/in/khoale9098/', '_blank')
            }}
          >
            <p>→Github</p>
          </TextDipserse>

          <TextDipserse
            onClick={() => {
              window.open('https://www.linkedin.com/in/khoale9098/', '_blank')
            }}
          >
            <p>→Linkedin</p>
          </TextDipserse>
        </div>
        <div className="w-full md:w-1/2 ">
          <div className="aspect-[3/4] relative">
            <Image src="/images/Shark2.jpg" fill={true} alt={'image'} className="object-cover" />
          </div>
        </div>
      </div>
      <p className="absolute py-4 bottom-0">
        <span>2024 ® KHOALE</span> {' - '}
        <span>khoale9098@gmail.com</span>
      </p>
    </div>
  </footer>
)
export default Footer
