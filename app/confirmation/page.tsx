"use client"

import { Suspense, useEffect, useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, MessageSquare } from "lucide-react"

function ConfirmationInner() {
  const searchParams = useSearchParams()
  const requestId = searchParams.get("id") || "LB-UNKNOWN"

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Request Submitted Successfully
          </h1>
          <p className="text-muted-foreground text-lg mb-6">
            Thank you for choosing LuxBlack. We&apos;ve received your request and will contact you shortly.
          </p>
          <div className="bg-card border border-border rounded-lg p-6 inline-block">
            <p className="text-sm text-muted-foreground mb-2">Your Request ID</p>
            <p className="text-2xl font-mono font-bold text-primary">{requestId}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">What happens next?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <p className="font-medium">We review your request</p>
                  <p className="text-sm text-muted-foreground">
                    Our team will review your transportation needs and availability.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <p className="font-medium">We contact you within 1 hour</p>
                  <p className="text-sm text-muted-foreground">
                    We&apos;ll call or email to confirm details and provide pricing.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <p className="font-medium">Booking confirmed</p>
                  <p className="text-sm text-muted-foreground">
                    Once confirmed, you&apos;ll receive final details and driver information.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Need immediate assistance?</h2>
            <p className="text-muted-foreground mb-6">
              For urgent requests or changes, contact us directly:
            </p>

            <div className="space-y-3">
              <a href="tel:619-547-8695">
                <Button className="w-full justify-start gap-3" variant="outline">
                  <Phone className="h-4 w-4" />
                  Tap to Call
                </Button>
              </a>
              <a href="sms:619-547-8695">
                <Button className="w-full justify-start gap-3" variant="outline">
                  <MessageSquare className="h-4 w-4" />
                  Tap to Text
                </Button>
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Reference your Request ID when contacting us.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/">
            <Button variant="outline" size="lg">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={null}>
      <ConfirmationInner />
    </Suspense>
  )
}
