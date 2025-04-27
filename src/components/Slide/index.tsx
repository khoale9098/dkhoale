import { motion, MotionValue, useTransform } from 'framer-motion'

type TSlideProps = {
  direction: 'left' | 'right'
  progress: MotionValue<number>
  left: string
}
const Slide = ({ left, direction, progress }: TSlideProps) => {
  const localDirection = direction == 'left' ? -1 : 1
  const translateX = useTransform(progress, [0, 1], [150 * localDirection, -150 * localDirection])
  return (
    <motion.div style={{ x: translateX, left }} className="relative flex font-dancing whitespace-nowrap">
      <div className={'px-5 flex gap-5 items-center'}>
        <p className="text-[7.5vw]">Senior Frontend Engineer</p>
        <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
          <img
            src="https://media.newyorker.com/photos/647a15fec91efd6c449e2964/master/w_2240,c_limit/Arn-Van-Gogh-Secondary-1.jpg"
            alt=""
          />
        </span>
      </div>
      <div className={'px-5 flex gap-5 items-center'}>
        <p className="text-[7.5vw]">Freelancer</p>
        <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/66/VanGogh-starry_night_ballance1.jpg"
            alt=""
          />
        </span>
      </div>
      <div className={'px-5 flex gap-5 items-center'}>
        <p className="text-[7.5vw]">Senior Frontend Engineer</p>
        <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
          <img src="https://deviet.vn/wp-content/uploads/2018/12/bao-tang-vangogh2.jpg" alt="" />
        </span>
      </div>
    </motion.div>
  )
}
export default Slide
