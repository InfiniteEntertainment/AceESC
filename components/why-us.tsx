import { Shield, Clock, UserCheck, Star } from "lucide-react"

const pillars = [
  {
    icon: Clock,
    title: "Punctuality",
    description: "We arrive early so you never have to worry. Time is valuable—we respect yours."
  },
  {
    icon: Shield,
    title: "Discretion",
    description: "Your privacy is paramount. Professional confidentiality in every interaction."
  },
  {
    icon: UserCheck,
    title: "Professionalism",
    description: "Impeccably dressed chauffeurs with extensive hospitality experience."
  },
  {
    icon: Star,
    title: "White-Glove Service",
    description: "Attention to every detail, from door-to-door assistance to personalized preferences."
  }
]

export function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">The Difference</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
            Why clients choose us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-6">
                <pillar.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-foreground">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
