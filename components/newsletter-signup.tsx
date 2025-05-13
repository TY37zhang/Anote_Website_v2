"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSignup() {
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
      <div className="bg-white rounded-lg border border-slate-100 p-8 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-xl font-light mb-2">Thank you for joining!</h3>
        <p className="text-slate-600 font-light">
          We've sent a confirmation email to <span className="font-medium">{email}</span>. Please check your inbox to
          complete the signup process.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-slate-100 p-8">
      <h3 className="text-xl font-light mb-4">Join our newsletter</h3>
      <p className="text-slate-600 font-light mb-6">
        Stay updated with the latest AI community news, events, and opportunities.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 font-light"
          />
        </div>
        <Button type="submit" className="w-full h-12 rounded-md font-light">
          Subscribe <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
      <p className="mt-4 text-xs text-slate-500 font-light text-center">
        By subscribing, you agree to our Privacy Policy and Terms of Service.
      </p>
    </div>
  )
}
