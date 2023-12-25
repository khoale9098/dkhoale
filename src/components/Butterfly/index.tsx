import { memo } from 'react'

const ButterflyMini = () => (
  <div className="mariposa">
    <div className="mariposa-turn">
      <div className="mariposa-flutter" />
    </div>
  </div>
)

export default memo(() => (
  <>
    <ButterflyMini />
    <ButterflyMini />
    <ButterflyMini />
  </>
))
