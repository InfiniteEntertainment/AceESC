"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, MessageSquare, Clock, FileCheck, PhoneCall } from "lucide-react"

const steps = [
  {
    icon: FileCheck,
    title: "Request Received",
    description: "Your request has been submitted successfully."
  },
  {
    icon: Clock,
    title: "Review & Confirmation",
    description: "Our team will review and confirm within 1 hour."
  },
  {
    icon: PhoneCall,
    title: "Ready to Ride",
    description: "You'll receive final details via call, text, or email."
  }
]

export default function ConfirmationPage() {
  const searchParams = useSearchParams()
  const requestId = searchParams.get("id") || "LB-UNKNOWN"
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center py-12 px-4">
      <div className="max-w-lg w-full text-center">
        {/* Success Icon */}
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 mb-8">
          <CheckCircle className="h-10 w-10 text-primary" />
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-3xl md:text-4xl font-medium mb-4 text-foreground">
          Request received.
        </h1>
        <p className="text-muted-foreground text-lg mb-6">
          We will get back to you within the hour to confirm your booking.
        </p>

        {/* Request ID */}
        <div className="bg-card border border-border rounded-lg p-4 mb-10 inline-block">
          <p className="text-sm text-muted-foreground mb-1">Request ID</p>
          <p className="font-mono text-lg text-foreground font-semibold tracking-wide">{requestId}</p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="tel:619-332-1203" className="w-full sm:w-auto">
            <Button 
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
            >
              <Phone className="h-4 w-4" />
              Tap to Call
            </Button>
          </a>
          <a href="sms:619-332-1203" className="w-full sm:w-auto">
            <Button 
              size="lg"
              variant="outline"
              className="w-full border-foreground/20 text-foreground hover:bg-foreground/5 gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              Tap to Text
            </Button>
          </a>
        </div>

        {/* What Happens Next */}
        <div className="bg-card border border-border rounded-lg p-6 md:p-8 text-left mb-10">
          <h2 className="font-semibold text-foreground mb-6 text-center">What happens next</h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={step.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-primary font-medium">Step {index + 1}</span>
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Home */}
        <Link href="/">
          <Button 
            variant="ghost" 
            className="text-muted-foreground hover:text-foreground"
          >
            Return to Home
          </Button>
        </Link>

        {/* Logo */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/" className="inline-block">
            <span className="font-serif text-xl font-semibold tracking-tight">
              <span className="text-primary">Lux</span>
              <span className="text-foreground">Black</span>
            </span>
          </Link>
          <p className="text-muted-foreground text-sm mt-2">
            San Diego & Southern California
          </p>
        </div>
      </div>
    </main>
  )
}
