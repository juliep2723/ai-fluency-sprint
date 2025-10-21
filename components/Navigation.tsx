import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navigation() {
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
            <Link href="/story" className="text-gray-700 hover:text-navy font-medium transition-colors">
              Our Story
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-navy font-medium transition-colors">
              About Us
            </Link>
            <a href="mailto:michele@aistrategyllc.com" className="text-gray-700 hover:text-navy font-medium transition-colors">
              Contact
            </a>
          </div>
          
          {/* CTA Button */}
          <Link href="/story">
            <Button className="bg-teal hover:bg-teal/90 text-white px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300">
              Begin Your Journey
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
