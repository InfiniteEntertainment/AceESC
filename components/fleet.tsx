import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const features = [
  "Late-model Cadillac Escalade",
  "Executive-ready interior",
  "Professionally maintained & detailed",
  "Complimentary bottled water",
  "Phone charging available",
  "Climate-controlled comfort"
]

export function Fleet({ onRequestRide }: { onRequestRide: () => void }) {
  return (
    <section id="fleet" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src="/videos/aceweb.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Our Fleet</p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
              The Cadillac Escalade
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We operate exclusively with late-model Cadillac Escalades—the gold standard 
              in luxury SUV transportation. Each vehicle is spotlessly maintained and 
              detailed to ensure an immaculate, executive-ready experience.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-foreground text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              onClick={onRequestRide}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Request a Ride
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
