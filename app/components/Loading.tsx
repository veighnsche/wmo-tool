import { useEffect, useState } from "react"

export const Loading = () => {
  const [delay1, setDelay1] = useState(false)
  const [delay2, setDelay2] = useState(false)

  useEffect(() => {
    const timeout1 = setTimeout(() => setDelay1(true), 1000)
    const timeout2 = setTimeout(() => setDelay2(true), 2000)
    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
    }
  }, [])

  return (
    <div className="flex space-x-3">
      <span className="relative flex h-3 w-3">
        <span
          className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d57251] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e4a38d]"></span>
      </span>

      <span className="relative flex h-3 w-3">
        <span
          className={`${delay1 ? "animate-ping" : ""} absolute inline-flex h-full w-full rounded-full bg-[#d57251] opacity-75`}></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e4a38d]"></span>
      </span>

      <span className="relative flex h-3 w-3">
        <span
          className={`${delay2 ? "animate-ping" : ""} absolute inline-flex h-full w-full rounded-full bg-[#d57251] opacity-75`}></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#e4a38d]"></span>
      </span>
    </div>
  )
}