"use client"

import { useEffect, useState } from "react"

interface StatsCounterProps {
  value: number
  label: string
}

export default function StatsCounter({ value, label }: StatsCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // ms
    const steps = 20
    const stepValue = value / steps
    const stepTime = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += stepValue
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className="text-center">
      <div className="text-2xl font-bold">{count.toLocaleString()}+</div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  )
}
