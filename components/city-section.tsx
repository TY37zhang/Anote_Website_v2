"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"

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

export default function CitySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div
      ref={ref}
      className={`${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-1000 ease-out`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cities.map((city, index) => (
          <div key={index} className="transition-all duration-300" style={{ transitionDelay: `${index * 100}ms` }}>
            <h3 className="font-serif text-xl mb-2">{city.name}</h3>
            <p className="text-sm text-black/60 font-light mb-4">{city.members} members</p>
            <div className="inline-block border-b border-black pb-1 hover:pb-2 transition-all duration-300">
              <Link href="#" className="text-sm font-light">
                Join Community
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-block border-b border-black pb-1 hover:pb-2 transition-all duration-300">
          <Link href="#" className="font-light">
            View All 14 Cities
          </Link>
        </div>
      </div>
    </div>
  )
}
