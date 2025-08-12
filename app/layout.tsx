import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { CursorEffects } from "@/components/cursor-effects"
import { ScrollEffects } from "@/components/scroll-effects"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EcoSwitch - Sustainable Living Made Easy",
  description: "Find eco-friendly products that help reduce pollution and create a better future for our planet.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CursorEffects />
          <ScrollEffects />
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
