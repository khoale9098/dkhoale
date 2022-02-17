import { useEffect, useState } from 'react'

const useIsMount = () => {
  const [isMount, setIsMount] = useState(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setIsMount(true)
  })

  return [isMount]
}

export { useIsMount }
