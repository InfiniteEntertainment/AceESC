"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Fleet } from "@/components/fleet"
import { WhyUs } from "@/components/why-us"
import { FAQ } from "@/components/faq"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { RequestModal } from "@/components/request-modal"

export default function Home() {
  const [requestModalOpen, setRequestModalOpen] = useState(false)

  const openRequestModal = () => setRequestModalOpen(true)

  return (
    <main className="min-h-screen bg-background">
      <Header onRequestRide={openRequestModal} />
      <Hero onRequestRide={openRequestModal} />
      <Services onRequestRide={openRequestModal} />
      <Fleet onRequestRide={openRequestModal} />
      <WhyUs />
      <FAQ />
      <CTASection onRequestRide={openRequestModal} />
      <Footer />
      
      <RequestModal 
        open={requestModalOpen} 
        onOpenChange={setRequestModalOpen} 
      />
    </main>
  )
}
