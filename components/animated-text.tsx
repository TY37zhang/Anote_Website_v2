"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AnimatedTextProps {
  phrases: string[]
  baseText?: string
  interval?: number
}

export default function AnimatedText({ phrases, baseText = "", interval = 5000 }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length)
        setIsVisible(true)
      }, 500) // Wait for exit animation to complete
    }, interval)

    return () => clearInterval(intervalId)
  }, [phrases, interval])

  return (
    <div className="relative">
      <span>{baseText} </span>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            {phrases[currentIndex]}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}
