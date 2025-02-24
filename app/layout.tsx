import type { Metadata } from "next"
import { Inter } from "next/font/google"
import LocalFont from "next/font/local"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const calSans = LocalFont({
  src: "./CalSans-SemiBold.ttf",
  variable: "--font-calsans",
})

export const metadata: Metadata = {
  title: "Invisaas ComingSoon",
  description: "Invisaas is a new way to manage your digital invitation.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${calSans.variable} bg-black font-sans`}>{children}</body>
    </html>
  )
}
