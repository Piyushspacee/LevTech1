"use client"

import { useEffect, useState } from "react"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

export function Counter({ end, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / duration
      const value = Math.min(Math.floor(end * progress), end)
      setCount(value)

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [end, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}
