'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const pathname = usePathname()
  
  // Hide navigation on giftprompt page
  if (pathname === '/sidekick/giftprompt') {
    return null
  }
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-navy">
          AI Strategy
        </Link>
        
        <div className="flex items-center gap-8">
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-700 hover:text-navy font-medium transition-colors">
              Home
            </Link>
            <Link href="/offerings" className="text-gray-700 hover:text-navy font-medium transition-colors">
              Offerings
            </Link>
            <Link href="/sidekick" className="text-gray-700 hover:text-navy font-medium transition-colors">
              Starter Kit
            </Link>
            <a href="mailto:michele@aistrategyllc.com" className="text-gray-700 hover:text-navy font-medium transition-colors">
              Contact
            </a>
          </div>
          
          {/* CTA Button */}
          <Link href="/offerings">
            <Button className="bg-teal hover:bg-teal/90 text-white px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300">
              Explore Offerings
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
