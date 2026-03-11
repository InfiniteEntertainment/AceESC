import { Button } from "@/components/ui/button"

export function CTASection({ onRequestRide }: { onRequestRide: () => void }) {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">Ready to Ride?</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-balance">
          Experience the difference
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Submit a request and we will confirm your booking within the hour. 
          No online payment required—just tell us where and when.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={onRequestRide}
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base"
          >
            Request a Ride
          </Button>
          <a href="tel:619-332-1203">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-foreground/20 text-foreground hover:bg-foreground/5 px-8 py-6 text-base"
            >
              Call 619-332-1203
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
