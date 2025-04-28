import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const MotionSignature = ({ isVisible }: { isVisible: boolean }) => {
  const ref = useRef(null)
  const inView = useInView(ref)
  const isInView = isVisible && inView
  const draw = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        pathLength: {
          delay: 0.2,
          type: 'spring',
          duration: 2.5,
          bounce: 0.2,
          ease: 'easeInOut',
        },
        opacity: { duration: 2 },
      },
    },
  }
  return (
    <motion.div ref={ref}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="38 1 312 210"
        width={132}
        initial="hidden"
        animate={isInView ? 'visible' : 'initial'}
        height={60}
      >
        <motion.path
          d="M 77.500,177.500 C 76.477,172.795 77.500,173.000 77.500,168.500"
          strokeWidth="4.746"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 77.500,168.500 C 80.154,162.560 78.977,162.295 82.500,156.500"
          strokeWidth="3.536"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 82.500,156.500 C 86.510,147.160 86.154,147.060 89.500,137.500"
          strokeWidth="2.797"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 89.500,137.500 C 92.924,126.094 93.010,126.160 95.500,114.500"
          strokeWidth="2.465"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 95.500,114.500 C 97.757,103.539 97.924,103.594 99.500,92.500"
          strokeWidth="2.440"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 99.500,92.500 C 100.036,77.964 100.757,84.539 101.500,76.500"
          strokeWidth="2.736"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 101.500,76.500 C 103.669,81.889 102.536,75.464 104.500,87.500"
          strokeWidth="3.985"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 104.500,87.500 C 104.901,95.507 105.669,95.389 105.500,103.500"
          strokeWidth="3.154"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 105.500,103.500 C 106.194,115.532 106.401,115.507 107.500,127.500"
          strokeWidth="2.526"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 107.500,127.500 C 109.333,143.024 109.194,143.032 111.500,158.500"
          strokeWidth="2.177"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 111.500,158.500 C 112.750,168.051 112.833,168.024 114.500,177.500"
          strokeWidth="2.481"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 53.500,125.500 C 57.535,121.189 58.000,122.000 62.500,118.500"
          strokeWidth="4.727"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 62.500,118.500 C 69.922,115.292 69.535,114.689 77.500,112.500"
          strokeWidth="3.266"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 77.500,112.500 C 88.865,108.062 88.922,108.292 100.500,104.500"
          strokeWidth="2.534"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 100.500,104.500 C 113.595,101.324 113.365,100.562 126.500,97.500"
          strokeWidth="2.273"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 126.500,97.500 C 140.724,93.602 140.595,93.324 154.500,88.500"
          strokeWidth="2.120"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 154.500,88.500 C 167.183,82.033 167.724,83.602 180.500,77.500"
          strokeWidth="2.116"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 180.500,77.500 C 190.936,74.675 190.683,74.033 201.500,72.500"
          strokeWidth="2.357"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 201.500,72.500 C 207.976,71.187 207.936,71.175 214.500,70.500"
          strokeWidth="2.874"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 214.500,70.500 C 221.117,69.112 217.476,70.187 220.500,70.500"
          strokeWidth="3.666"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 220.500,70.500 C 215.620,75.139 219.117,73.612 210.500,79.500"
          strokeWidth="3.914"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 210.500,79.500 C 202.098,86.622 202.120,86.639 193.500,93.500"
          strokeWidth="2.760"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 193.500,93.500 C 182.239,102.823 182.098,102.622 170.500,111.500"
          strokeWidth="2.237"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 170.500,111.500 C 159.153,119.732 159.239,119.823 147.500,127.500"
          strokeWidth="2.157"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 147.500,127.500 C 139.089,131.954 139.653,132.732 131.500,137.500"
          strokeWidth="2.490"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 131.500,137.500 C 126.406,141.901 126.089,141.454 121.500,146.500"
          strokeWidth="2.861"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 121.500,146.500 C 115.785,149.650 118.406,149.401 115.500,152.500"
          strokeWidth="3.431"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 115.500,152.500 C 117.607,156.114 115.285,154.650 120.500,156.500"
          strokeWidth="4.237"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 120.500,156.500 C 125.523,155.606 125.107,157.114 130.500,154.500"
          strokeWidth="3.705"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 130.500,154.500 C 139.141,152.985 139.023,152.606 147.500,150.500"
          strokeWidth="2.930"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 147.500,150.500 C 157.450,146.850 157.641,147.485 167.500,143.500"
          strokeWidth="2.618"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 167.500,143.500 C 178.492,139.976 178.450,139.850 189.500,136.500"
          strokeWidth="2.451"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 189.500,136.500 C 207.293,131.724 206.992,130.976 224.500,125.500"
          strokeWidth="1.940"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 218.500,80.500 C 219.145,83.481 219.000,83.500 219.500,86.500"
          strokeWidth="5.384"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 219.500,86.500 C 220.107,91.992 220.145,91.981 220.500,97.500"
          strokeWidth="3.831"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 220.500,97.500 C 220.706,106.028 221.107,105.992 221.500,114.500"
          strokeWidth="2.983"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 221.500,114.500 C 222.025,122.125 222.206,122.028 223.500,129.500"
          strokeWidth="2.978"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 223.500,129.500 C 224.941,135.246 224.025,132.125 225.500,134.500"
          strokeWidth="3.779"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 225.500,134.500 C 226.199,130.011 226.441,133.246 226.500,125.500"
          strokeWidth="4.220"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 226.500,125.500 C 226.500,122.500 226.699,122.511 226.500,119.500"
          strokeWidth="4.129"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 226.500,119.500 C 226.211,115.971 226.500,116.000 226.500,112.500"
          strokeWidth="4.474"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 226.500,112.500 C 227.113,106.919 226.711,109.971 227.500,107.500"
          strokeWidth="4.758"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 227.500,107.500 C 227.967,111.504 228.113,108.419 228.500,115.500"
          strokeWidth="4.808"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 228.500,115.500 C 228.646,122.927 228.967,119.004 229.500,122.500"
          strokeWidth="4.701"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 229.500,122.500 C 231.085,118.026 230.646,121.927 232.500,113.500"
          strokeWidth="4.857"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 232.500,113.500 C 233.618,106.059 233.585,110.026 234.500,106.500"
          strokeWidth="4.698"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 234.500,106.500 C 235.651,110.972 235.618,107.059 236.500,115.500"
          strokeWidth="4.734"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 236.500,115.500 C 237.062,122.938 237.151,118.972 237.500,122.500"
          strokeWidth="4.662"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 237.500,122.500 C 237.971,117.997 238.062,121.938 238.500,113.500"
          strokeWidth="4.864"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 238.500,113.500 C 238.581,105.270 238.971,109.497 239.500,105.500"
          strokeWidth="4.618"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 239.500,105.500 C 240.836,110.062 240.581,105.770 242.500,114.500"
          strokeWidth="4.907"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 242.500,114.500 C 244.388,121.222 243.836,118.062 245.500,121.500"
          strokeWidth="4.685"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 245.500,121.500 C 245.904,118.481 246.388,121.722 246.500,115.500"
          strokeWidth="4.911"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 246.500,115.500 C 247.500,111.000 247.404,110.981 248.500,106.500"
          strokeWidth="3.887"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 248.500,106.500 C 249.237,101.919 249.500,102.000 250.500,97.500"
          strokeWidth="3.716"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 250.500,97.500 C 251.899,91.899 251.237,94.919 252.500,92.500"
          strokeWidth="4.088"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 252.500,92.500 C 253.232,96.486 253.399,93.399 253.500,100.500"
          strokeWidth="4.589"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 253.500,100.500 C 253.749,104.018 253.732,103.986 253.500,107.500"
          strokeWidth="4.094"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 253.500,107.500 C 252.500,111.014 253.249,111.018 252.500,114.500"
          strokeWidth="4.008"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 252.500,114.500 C 252.464,119.707 252.500,117.014 253.500,119.500"
          strokeWidth="4.790"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 253.500,119.500 C 255.550,116.533 254.964,119.207 257.500,113.500"
          strokeWidth="4.667"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 257.500,113.500 C 260.040,109.525 260.050,109.533 262.500,105.500"
          strokeWidth="3.879"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 262.500,105.500 C 266.316,100.838 265.540,100.525 268.500,95.500"
          strokeWidth="3.419"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 268.500,95.500 C 270.671,89.583 270.816,89.838 271.500,83.500"
          strokeWidth="3.303"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 271.500,83.500 C 271.500,78.500 272.171,78.583 271.500,73.500"
          strokeWidth="3.467"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 271.500,73.500 C 272.318,67.046 271.500,70.000 271.500,66.500"
          strokeWidth="4.213"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 271.500,66.500 C 269.461,68.777 270.818,66.046 268.500,71.500"
          strokeWidth="4.196"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 268.500,71.500 C 266.666,77.435 266.461,77.277 265.500,83.500"
          strokeWidth="3.423"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 265.500,83.500 C 264.280,90.476 264.166,90.435 263.500,97.500"
          strokeWidth="3.168"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 263.500,97.500 C 262.500,104.016 262.780,103.976 262.500,110.500"
          strokeWidth="3.120"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 262.500,110.500 C 261.767,114.777 262.500,114.016 263.500,117.500"
          strokeWidth="3.672"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 263.500,117.500 C 267.198,123.125 265.267,120.277 269.500,121.500"
          strokeWidth="4.300"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 269.500,121.500 C 275.337,113.713 275.698,117.125 280.500,105.500"
          strokeWidth="2.973"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 280.500,105.500 C 285.390,95.612 286.337,96.213 291.500,86.500"
          strokeWidth="2.525"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
        <motion.path
          d="M 291.500,86.500 C 312.518,51.811 313.890,53.112 337.500,20.500"
          strokeWidth="1.860"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          variants={draw}
        />
      </motion.svg>
    </motion.div>
  )
}

export default MotionSignature
