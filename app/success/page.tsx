import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Success() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-teal rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white text-3xl">✓</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">Welcome to Your AI Journey!</h1>
          <p className="text-xl text-gray-700">
            Your Executive AI Fluency Sprint registration is complete.
          </p>
        </div>

        <div className="bg-light-gray rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-navy mb-4">What Happens Next?</h2>
          <ol className="text-left space-y-3 text-gray-700 text-lg">
            <li className="flex items-start">
              <span className="text-teal font-bold mr-3">1.</span>
              <span>Check your email for a welcome message with scheduling instructions</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal font-bold mr-3">2.</span>
              <span>We'll reach out within 24 hours to schedule your first session</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal font-bold mr-3">3.</span>
              <span>You'll receive a brief questionnaire to help us tailor your experience</span>
            </li>
          </ol>
        </div>

        <p className="text-gray-700 mb-8 text-lg">
          Questions? Email us at{' '}
          <a href="mailto:hello@aistrategyllc.com" className="text-teal hover:underline">
            hello@aistrategyllc.com
          </a>
        </p>

        <Link href="/">
          <Button className="bg-navy hover:bg-navy/90 text-white">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </main>
  )
}
