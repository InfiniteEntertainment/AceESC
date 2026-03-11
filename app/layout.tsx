import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0f0f0f',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Lux Black Transportation | Luxury Chauffeur Service San Diego',
  description: 'White-glove luxury chauffeur service in San Diego and Southern California. Late-model Cadillac Escalade, professional chauffeurs, airport transfers, corporate transportation, and special events.',
  keywords: 'luxury transportation San Diego, chauffeur service, Cadillac Escalade, airport transfers, corporate transportation, wedding transportation, VIP service',
  openGraph: {
    title: 'Lux Black Transportation | Luxury Chauffeur Service',
    description: 'White-glove luxury chauffeur service in San Diego. Cadillac Escalade fleet, professional chauffeurs.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
