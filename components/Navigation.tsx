import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-navy">
          AI Strategy
        </Link>
        <Link href="/story">
          <Button className="bg-teal hover:bg-teal/90 text-white px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300">
            Begin Your Journey
          </Button>
        </Link>
      </div>
    </nav>
  )
}
