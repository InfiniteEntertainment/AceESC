"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"

const serviceTypes = [
  "Airport Transfer",
  "Corporate Transportation",
  "Hourly Chauffeur (3-hour minimum)",
  "Wedding Transportation",
  "Wine Tour",
  "Cruise Port Transfer",
  "Concert / Sporting Event",
  "Nightlife / VIP Event",
  "Long-Distance Transfer",
  "Other",
]

function generateRequestId() {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `LB-${timestamp}-${random}`
}

function encodeForm(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key] ?? ""))
    .join("&")
}

export function RequestForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    date: "",
    time: "",
    pickupLocation: "",
    dropoffLocation: "",
    passengers: "",
    referralCode: "",
    notes: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const requestId = generateRequestId()
    const submittedAt = new Date().toISOString()

    // Netlify needs real form fields + form-name
    const payload: Record<string, string> = {
      "form-name": "request-ride",
      "bot-field": "",
      requestId,
      submittedAt,
      ...formData,
    }

    try {
      // POST to Netlify (form capture)
      await fetch("/netlify-forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm(payload),
      })

      // keep your existing confirmation behavior
      sessionStorage.setItem(
        "luxblack_request",
        JSON.stringify({
          ...formData,
          requestId,
          submittedAt,
        })
      )

      router.push(`/confirmation?id=${requestId}`)
    } catch (err) {
      console.error("Netlify form submission error:", err)
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <form
      name="request-ride"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Required for Netlify to detect the form */}
      <input type="hidden" name="form-name" value="request-ride" />
      <p className="hidden">
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>

      {/* Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full Name <span className="text-primary">*</span>
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="John Smith"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="bg-input border-border"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email <span className="text-primary">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="bg-input border-border"
          />
        </div>
      </div>

      {/* Phone & Service Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone <span className="text-primary">*</span>
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(619) 555-1234"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="bg-input border-border"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="serviceType" className="text-sm font-medium text-foreground">
            Service Type <span className="text-primary">*</span>
          </label>

          {/* Radix Select is not a native field; mirror to hidden input for Netlify */}
          <Select
            value={formData.serviceType}
            onValueChange={(value) => handleChange("serviceType", value)}
          >
            <SelectTrigger className="w-full bg-input border-border">
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              {serviceTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" name="serviceType" value={formData.serviceType} required />
        </div>
      </div>

      {/* Date & Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="date" className="text-sm font-medium text-foreground">
            Date <span className="text-primary">*</span>
          </label>
          <Input
            id="date"
            name="date"
            type="date"
            required
            value={formData.date}
            onChange={(e) => handleChange("date", e.target.value)}
            className="bg-input border-border"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="time" className="text-sm font-medium text-foreground">
            Pickup Time <span className="text-primary">*</span>
          </label>
          <Input
            id="time"
            name="time"
            type="time"
            required
            value={formData.time}
            onChange={(e) => handleChange("time", e.target.value)}
            className="bg-input border-border"
          />
        </div>
      </div>

      {/* Pickup & Dropoff */}
      <div className="space-y-2">
        <label htmlFor="pickup" className="text-sm font-medium text-foreground">
          Pickup Location <span className="text-primary">*</span>
        </label>
        <Input
          id="pickup"
          name="pickupLocation"
          required
          placeholder="Address, hotel name, or airport terminal"
          value={formData.pickupLocation}
          onChange={(e) => handleChange("pickupLocation", e.target.value)}
          className="bg-input border-border"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="dropoff" className="text-sm font-medium text-foreground">
          Drop-off Location <span className="text-primary">*</span>
        </label>
        <Input
          id="dropoff"
          name="dropoffLocation"
          required
          placeholder="Address, venue name, or airport"
          value={formData.dropoffLocation}
          onChange={(e) => handleChange("dropoffLocation", e.target.value)}
          className="bg-input border-border"
        />
      </div>

      {/* Passengers */}
      <div className="space-y-2">
        <label htmlFor="passengers" className="text-sm font-medium text-foreground">
          Number of Passengers <span className="text-primary">*</span>
        </label>

        {/* Radix Select mirror to hidden input for Netlify */}
        <Select
          value={formData.passengers}
          onValueChange={(value) => handleChange("passengers", value)}
        >
          <SelectTrigger className="w-full bg-input border-border">
            <SelectValue placeholder="Select passengers" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} {num === 1 ? "passenger" : "passengers"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <input type="hidden" name="passengers" value={formData.passengers} required />
      </div>

      {/* Referral Code */}
      <div className="space-y-2">
        <label htmlFor="referralCode" className="text-sm font-medium text-white">
          Referral Code
        </label>
        <Input
          id="referralCode"
          name="referralCode"
          value={formData.referralCode}
          onChange={(e) => handleChange("referralCode", e.target.value)}
          placeholder="Enter code (optional)"
          inputMode="text"
          autoComplete="off"
          className="bg-input border-border"
        />
      </div>

      {/* Notes */}
      <div className="space-y-2">
        <label htmlFor="notes" className="text-sm font-medium text-foreground">
          Special Requests or Notes
        </label>
        <Textarea
          id="notes"
          name="notes"
          placeholder="Flight number, special requirements, additional stops, etc."
          value={formData.notes}
          onChange={(e) => handleChange("notes", e.target.value)}
          className="bg-input border-border min-h-24"
        />
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base"
      >
        {isSubmitting ? (
          <>
            <Spinner className="mr-2 h-4 w-4" />
            Submitting...
          </>
        ) : (
          "Submit Request"
        )}
      </Button>

      <p className="text-center text-muted-foreground text-sm">
        We will get back to you within the hour to confirm your booking.
      </p>
    </form>
  )
}
