import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-2xl font-semibold tracking-tight">
                <span className="text-primary">Lux</span>
                <span className="text-foreground">Black</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Luxury chauffeur service in San Diego and Southern California. 
              White-glove transportation in a Cadillac Escalade.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#fleet" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/request" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                  Request a Ride
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:619-332-1203" className="flex items-center gap-3 text-muted-foreground hover:text-foreground text-sm transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>619-332-1203</span>
                </a>
              </li>
              <li>
                <a href="mailto:luxacestudio@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground text-sm transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>luxacestudio@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>San Diego & Southern California</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Lux Black Transportation. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Serving San Diego, La Jolla, Del Mar, Rancho Santa Fe, and all of Southern California.
          </p>
        </div>
      </div>
    </footer>
  )
}
