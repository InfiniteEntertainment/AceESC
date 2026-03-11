import { Plane, Building2, Clock, Heart, Wine, Ship, Music, MapPin } from "lucide-react"

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Seamless pickup and drop-off at San Diego International and beyond."
  },
  {
    icon: Building2,
    title: "Corporate Transportation",
    description: "Executive-level service for meetings, conferences, and client entertainment."
  },
  {
    icon: Clock,
    title: "Hourly Chauffeur",
    description: "Your personal chauffeur for the day. 3-hour minimum."
  },
  {
    icon: Heart,
    title: "Weddings",
    description: "Make your special day unforgettable with elegant transportation."
  },
  {
    icon: Wine,
    title: "Wine Tours",
    description: "Explore Temecula Valley vineyards in comfort and style."
  },
  {
    icon: Ship,
    title: "Cruise Port Transfers",
    description: "Stress-free transportation to and from San Diego cruise terminals."
  },
  {
    icon: Music,
    title: "Concerts & Events",
    description: "VIP arrival for concerts, sporting events, and special occasions."
  },
  {
    icon: MapPin,
    title: "Long-Distance Transfers",
    description: "Comfortable transportation throughout Southern California."
  }
]

export function Services({ onRequestRide }: { onRequestRide: () => void }) {
  return (
    <section id="services" className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">What We Offer</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
            Tailored to your occasion
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From airport arrivals to milestone celebrations, we provide discreet, 
            professional service for every journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <button
              key={service.title}
              onClick={onRequestRide}
              className="group text-left p-6 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <service.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-lg mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
