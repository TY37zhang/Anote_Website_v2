"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send the email to your API
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div className="text-center">
        <h3 className="font-serif text-xl mb-4">Thank you for joining!</h3>
        <p className="text-black/70 font-light">
          We've sent a confirmation email to <span className="font-normal">{email}</span>. Please check your inbox to
          complete the signup process.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-light text-black/70">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 font-light border-black/20 focus:border-black focus:ring-0 rounded-none"
          />
        </div>
        <button
          type="submit"
          className="w-full border border-black bg-black py-3 text-white font-light hover:bg-black/90 transition-colors"
        >
          Join Our Community
        </button>
      </form>
      <p className="mt-6 text-xs text-black/50 font-light text-center">
        By subscribing, you agree to our Privacy Policy and Terms of Service.
      </p>
    </div>
  )
}
