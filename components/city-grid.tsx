"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"

const cities = [
  { name: "New York", members: 120 },
  { name: "San Francisco", members: 150 },
  { name: "Austin", members: 95 },
  { name: "Seattle", members: 85 },
  { name: "Boston", members: 75 },
  { name: "Chicago", members: 80 },
  { name: "Los Angeles", members: 110 },
  { name: "Denver", members: 65 },
]

export default function CityGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } transition-all duration-1000 ease-out`}
    >
      {cities.map((city, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border border-slate-100 p-6 transition-all duration-300 hover:shadow-md"
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <h3 className="font-light text-xl mb-2">{city.name}</h3>
          <p className="text-sm text-slate-500 font-light mb-4">{city.members} members</p>
          <Button variant="outline" size="sm" className="w-full font-light">
            Join Community
          </Button>
        </div>
      ))}
    </div>
  )
}
