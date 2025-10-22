import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <p className="text-xl font-semibold mb-2">AI Strategy LLC</p>
            <p className="text-base opacity-80">From AI-Curious to AI-Confident</p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-3">Navigation</h4>
            <div className="flex flex-col gap-2 text-base opacity-80">
              <Link href="/" className="hover:opacity-100">Home</Link>
              <Link href="/offerings" className="hover:opacity-100">Offerings</Link>
            </div>
          </div>
          
          {/* Offerings */}
          <div>
            <h4 className="font-semibold mb-3">Ready to begin?</h4>
            <div className="flex flex-col gap-2 text-base opacity-80">
              <Link href="/offerings" className="hover:opacity-100">Individual Sprint</Link>
              <Link href="/offerings" className="hover:opacity-100">Team Program</Link>
              <Link href="/offerings" className="hover:opacity-100">Readiness Assessment</Link>
            </div>
          </div>
          
          {/* Legal & Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contact & Legal</h4>
            <div className="flex flex-col gap-2 text-base opacity-80">
              <a href="mailto:michele@aistrategyllc.com" className="hover:opacity-100">
                michele@aistrategyllc.com
              </a>
              <Link href="/privacy" className="hover:opacity-100">Privacy Policy</Link>
              <Link href="/terms" className="hover:opacity-100">Terms of Service</Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center text-base opacity-60">
          © 2025 AI Strategy LLC. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
