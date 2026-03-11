"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header({ onRequestRide }: { onRequestRide: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-tight">
              <span className="text-primary">Lux</span>
              <span className="text-foreground">Black</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="#fleet" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Fleet
            </Link>
            <Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:619-332-1203" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
              <span>619-332-1203</span>
            </a>
            <Button onClick={onRequestRide} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Request a Ride
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link 
              href="#services" 
              className="text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#fleet" 
              className="text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fleet
            </Link>
            <Link 
              href="#faq" 
              className="text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href="#contact" 
              className="text-foreground py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <a href="tel:619-332-1203" className="flex items-center gap-2 text-foreground py-2">
              <Phone className="h-4 w-4" />
              <span>619-332-1203</span>
            </a>
            <Button 
              onClick={() => {
                setMobileMenuOpen(false)
                onRequestRide()
              }} 
              className="w-full bg-primary text-primary-foreground"
            >
              Request a Ride
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
