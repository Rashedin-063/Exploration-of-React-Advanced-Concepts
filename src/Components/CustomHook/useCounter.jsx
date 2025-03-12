import { useState } from "react"

const useCounter = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }
  return {count, incrementCount}
}
export default useCounter