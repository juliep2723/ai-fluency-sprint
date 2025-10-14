import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xl font-semibold">AI Strategy LLC</p>
            <p className="text-base opacity-80">From Curious to Confident</p>
          </div>
          
          <div className="flex gap-6 text-base">
            <Link href="/privacy" className="hover:opacity-80">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:opacity-80">
              Terms of Service
            </Link>
            <a href="mailto:hello@aistrategyllc.com" className="hover:opacity-80">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/20 text-center text-base opacity-60">
          © 2024 AI Strategy LLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
