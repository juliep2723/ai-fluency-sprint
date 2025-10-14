import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Navy Background */}
      <section className="relative bg-navy text-white pt-32 pb-24 px-6 overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-slate-800 opacity-50"></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            From AI Curious to<br />
            <span className="text-teal">AI Confident</span><br />
            in 3-5 Sessions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            A personalized journey that transforms how you think about and partner with AI
          </p>
          <Link href="/story">
            <Button 
              size="lg" 
              className="bg-teal hover:bg-teal/90 text-white px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Begin Your Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* The Transformation Journey - White Background */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {/* Stage 1 */}
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-teal text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold shadow-lg">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-navy mb-3">Curious but Underwhelmed</h3>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto text-center leading-relaxed">
                "You've tried ChatGPT. It answered some questions. Generated some emails. But honestly? You expected more."
              </p>
            </div>

            {/* Simple connector */}
            <div className="flex justify-center">
              <div className="w-0.5 h-6 bg-teal/30"></div>
            </div>

            {/* Stage 2 */}
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-teal text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold shadow-lg">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-navy mb-3">The Awakening</h3>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
                "Through guided exploration, you discover AI isn't a better search engine—it's a thinking partner that amplifies your expertise in ways you never imagined"
              </p>
            </div>

            {/* Simple connector */}
            <div className="flex justify-center">
              <div className="w-0.5 h-6 bg-teal/30"></div>
            </div>

            {/* Stage 3 */}
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-teal text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold shadow-lg">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center text-navy mb-3">Empowered & Inspired</h3>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
                "You're now creating solutions others can't even conceive of. AI has become your cognitive co-pilot for invention, discovery, and breakthrough thinking"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Now - Light Gray Background */}
      <section className="py-24 px-6 bg-light-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-16">Why This Matters Now</h2>
          <div className="space-y-8">
            <p className="text-xl text-gray-700 font-medium">
              AI isn't just another tool—it's a new form of collaboration
            </p>
            <p className="text-xl text-gray-700 font-medium">
              Your years of experience become the foundation for breakthrough thinking
            </p>
            <p className="text-xl text-gray-700 font-medium">
              The leaders who develop AI fluency now will shape what comes next
            </p>
          </div>
        </div>
      </section>

      {/* The Experience - White Background */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy text-center mb-20">The Experience</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Beyond the Obvious */}
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-6">Beyond the Obvious</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-teal mr-3 text-xl">•</span>
                  <span>Discover AI applications you didn't know you needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-3 text-xl">•</span>
                  <span>Find "painkillers" for problems you've accepted as unsolvable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-3 text-xl">•</span>
                  <span>Create "vitamins" that enhance how you think and work</span>
                </li>
              </ul>
            </div>

            {/* From Underwhelmed to Amazed */}
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-6">From Underwhelmed to Amazed</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-teal mr-3 text-xl">•</span>
                  <span>Break through the "prompt engineering" trap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-3 text-xl">•</span>
                  <span>Experience genuine "holy shit" moments of capability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-3 text-xl">•</span>
                  <span>Develop patterns that unlock AI's hidden potential</span>
                </li>
              </ul>
            </div>

            {/* Your Expertise as Superpower */}
            <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-6">Your Expertise as Superpower</h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-teal mr-3 text-xl">•</span>
                  <span>Learn how your knowledge becomes AI's greatest amplifier</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-3 text-xl">•</span>
                  <span>Use your experience as guardrails for breakthrough thinking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-3 text-xl">•</span>
                  <span>Transform from AI user to AI thought partner</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA after Experience section */}
          <div className="text-center mt-20">
            <Link href="/story">
              <Button 
                size="lg" 
                className="bg-teal hover:bg-teal/90 text-white px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Ready to Transform?
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What You'll Experience - Navy Background */}
      <section className="py-24 px-6 bg-navy text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">What You'll Experience</h2>
          
          <div className="space-y-10">
            <div className="flex items-start">
              <div className="bg-teal text-white rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 mr-6 text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Session 1: Reframing AI</h3>
                <p className="text-gray-300 text-xl">From tool to thinking partner</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-teal text-white rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 mr-6 text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Session 2: Discovery</h3>
                <p className="text-gray-300 text-xl">Finding YOUR breakthrough use cases</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-teal text-white rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 mr-6 text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Session 3: Mastery</h3>
                <p className="text-gray-300 text-xl">Developing your unique AI collaboration style</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-teal text-white rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 mr-6 text-lg font-bold">
                4-5
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Sessions 4-5: Application</h3>
                <p className="text-gray-300 text-xl">Creating solutions that amaze even you</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals - Light Gray Background */}
      <section className="py-24 px-6 bg-light-gray">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 text-center">
            <div>
              <h3 className="text-3xl font-bold text-navy mb-3">Combined 30+ Years</h3>
              <p className="text-xl text-gray-700">Silicon Valley innovation experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-navy mb-3">Harvard Business School</h3>
              <p className="text-xl text-gray-700">Executive Coaches</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-navy mb-3">Former Mach49</h3>
              <p className="text-xl text-gray-700">Venture builders</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-navy mb-3">Real Transformations</h3>
              <p className="text-xl text-gray-700">Real results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - White Background */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8">
            Ready to discover what you've been missing?
          </h2>
          <Link href="/story">
            <Button 
              size="lg" 
              className="bg-teal hover:bg-teal/90 text-white px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Meet Michele & Julie
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}