import type React from "react"
import type { Metadata } from "next"
import { Lora, Source_Sans_3 } from "next/font/google"
import "./globals.css"

// Load Source Sans 3 font for body text
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-source-sans",
})

// Load Lora font for headings
const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title: "Anote AI Community",
  description:
    "Join Anote's innovative AI ecosystem connecting professionals, learners, and opportunities across 14 cities.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${lora.variable}`}>
      <body className={sourceSans.className}>{children}</body>
    </html>
  )
}
