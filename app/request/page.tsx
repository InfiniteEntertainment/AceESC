import Link from "next/link"
import { RequestForm } from "@/components/request-form"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request a Ride | Lux Black Transportation",
  description: "Request luxury chauffeur service in San Diego. Cadillac Escalade, professional chauffeurs, airport transfers, corporate transportation.",
}

export default function RequestPage() {
  return (
    <main className="min-h-screen bg-background py-12 md:py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        {/* Header */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block mb-6">
            <span className="font-serif text-2xl font-semibold tracking-tight">
              <span className="text-primary">Lux</span>
              <span className="text-foreground">Black</span>
            </span>
          </Link>
          <h1 className="font-serif text-3xl md:text-4xl font-medium mb-3">
            Request a Ride
          </h1>
          <p className="text-muted-foreground">
            Tell us your plans and we will confirm within the hour.
          </p>
        </div>

        {/* Form */}
        <div className="bg-card border border-border rounded-lg p-6 md:p-8">
          <RequestForm />
        </div>

        {/* Contact Alternative */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm mb-2">
            Prefer to speak with us directly?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:619-332-1203" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Call 619-332-1203
            </a>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <a 
              href="mailto:luxacestudio@gmail.com" 
              className="text-primary hover:text-primary/80 font-medium transition-colors"
            >
              luxacestudio@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
