"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Leaf, Menu, X, Sparkles } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Categories" },
  { href: "/tips", label: "Eco Tips" },
  { href: "/submit", label: "Submit Product" },
  { href: "/contact", label: "Contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 animate-logo-pulse">
              <Leaf className="h-6 w-6 text-white transition-transform duration-500 group-hover:rotate-180" />
            </div>
            <div className="absolute -top-1 -right-1 animate-sparkle">
              <Sparkles className="h-4 w-4 text-yellow-400 animate-pulse group-hover:animate-spin" />
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>
          </div>
          <div className="transition-all duration-300 group-hover:translate-x-1">
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent group-hover:from-emerald-500 group-hover:to-teal-500 transition-all duration-300">
              EcoSwitch
            </span>
            <div className="h-0.5 w-0 bg-gradient-to-r from-emerald-500 to-green-500 transition-all duration-500 group-hover:w-full"></div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-emerald-600 relative group px-3 py-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950/50",
                pathname === item.href ? "text-emerald-600" : "text-muted-foreground",
              )}
            >
              <span className="relative z-10">{item.label}</span>
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-green-500 transition-all duration-300",
                  pathname === item.href ? "w-full" : "w-0 group-hover:w-full",
                )}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-95 group-hover:scale-100"></div>
            </Link>
          ))}
          <ModeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="relative hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-all duration-300 hover:scale-110"
          >
            <div className="relative">
              {isOpen ? (
                <X className="h-5 w-5 transition-transform duration-300 rotate-180" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-300 hover:rotate-180" />
              )}
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-xl animate-slide-down">
          <div className="container py-4 space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-4 py-3 text-sm font-medium transition-all duration-300 hover:text-emerald-600 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950 hover:translate-x-2 hover:shadow-md",
                  pathname === item.href
                    ? "text-emerald-600 bg-emerald-50 dark:bg-emerald-950"
                    : "text-muted-foreground",
                )}
                onClick={() => setIsOpen(false)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
