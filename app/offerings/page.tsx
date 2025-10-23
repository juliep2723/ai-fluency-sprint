'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
}

export default function Offerings() {
  const handleStripeCheckout = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        console.error('Checkout error details:', data)
        throw new Error(data.details || data.error || 'Checkout failed')
      }
      
      const { url } = data
      
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Checkout error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      alert(`Unable to start checkout: ${errorMessage}\n\nPlease check the browser console for details or email us at michele@aistrategyllc.com`)
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section - Navy Background */}
      <section className="py-24 px-6 bg-navy text-white pt-32">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Ready to Shift Gears?</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether you're an individual leader, building team capability, or transforming your organization, we have a path designed for your success.
          </p>
        </motion.div>
      </section>

      {/* Overview Table - Off-White Background */}
      <section className="py-16 px-6 bg-off-white">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl font-bold text-navy text-center mb-10"
            variants={fadeInUp}
          >
            Find Your Starting Point
          </motion.h2>
          
          <motion.div className="grid md:grid-cols-3 gap-6" variants={staggerContainer}>
            {/* Executive Sprint */}
            <motion.a 
              href="#executive-sprint"
              className="block"
              variants={scaleIn}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-shadow cursor-pointer bg-white">
                <div className="text-center mb-4">
                  <h4 className="text-sm font-semibold text-teal uppercase tracking-wider mb-2">For You</h4>
                  <h3 className="text-xl font-bold text-navy">AI Fluency Sprint</h3>
                </div>
                <p className="text-gray-600 text-center">
                  Start with yourself. Our 1-on-1 sprint transforms you from a casual user to an AI-confident strategist.
                </p>
                <p className="text-teal font-semibold mt-6 text-sm text-center">Learn more →</p>
              </Card>
            </motion.a>

            {/* Team Program */}
            <motion.a 
              href="#team-program"
              className="block"
              variants={scaleIn}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-shadow cursor-pointer bg-white">
                <div className="text-center mb-4">
                  <h4 className="text-sm font-semibold text-teal uppercase tracking-wider mb-2">For Your Team</h4>
                  <h3 className="text-xl font-bold text-navy">AI-Confident Team Sprint</h3>
                </div>
                <p className="text-gray-600 text-center">
                  Empower your unit. We get your entire team fluent and aligned for immediate impact.
                </p>
                <p className="text-teal font-semibold mt-6 text-sm text-center">Learn more →</p>
              </Card>
            </motion.a>

            {/* Assessment */}
            <motion.a 
              href="#assessment"
              className="block"
              variants={scaleIn}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-shadow cursor-pointer bg-white">
                <div className="text-center mb-4">
                  <h4 className="text-sm font-semibold text-teal uppercase tracking-wider mb-2">For Your Company</h4>
                  <h3 className="text-xl font-bold text-navy">AI Readiness Assessment</h3>
                </div>
                <p className="text-gray-600 text-center">
                  Transform your enterprise. We build a strategic roadmap for company-wide AI adoption.
                </p>
                <p className="text-teal font-semibold mt-6 text-sm text-center">Learn more →</p>
              </Card>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Executive AI Fluency Sprint - White Background */}
      <section id="executive-sprint" className="py-24 px-6 bg-white">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-navy text-center mb-4">
              Executive AI Fluency Sprint
            </h2>
            <p className="text-2xl text-gray-600 italic text-center mb-12">
              Your personal breakthrough in 3 to 5 sessions
            </p>
          </motion.div>

          <motion.div className="prose prose-xl mx-auto mb-12" variants={fadeInUp}>
            <p className="text-gray-700 leading-relaxed">
              Move from underwhelmed to amazed through personalized discovery sessions that unlock AI use cases you didn't know existed. This isn't about learning to write better prompts—it's about fundamentally transforming how you think with AI as your thought partner.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8 mb-12" variants={staggerContainer}>
            <motion.div variants={scaleIn}>
              <Card className="p-8 h-full shadow-lg border-0">
                <h3 className="text-2xl font-bold text-navy mb-6">What's Included</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span>3 to 5 personalized sessions tailored to your goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span>Hands-on exploration with real use cases from your work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span>Between-session challenges to accelerate learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span>Ongoing support via email throughout your sprint</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span>Resource library of patterns and frameworks</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="p-8 h-full shadow-lg border-0">
                <h3 className="text-2xl font-bold text-navy mb-6">Format Options</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg text-navy mb-2">Choose your pace:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 5 one-hour sessions for focused, iterative learning</li>
                      <li>• 3 sessions of 100 minutes for intensive transformation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-navy mb-2">Delivery options:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Virtual sessions via Zoom</li>
                      <li>• In-person available in San Francisco Bay Area and Greater Boston</li>
                      <li>• Flexible scheduling including evenings and weekends</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Investment Section */}
          <motion.div variants={scaleIn} className="max-w-md mx-auto">
            <Card className="p-6 bg-navy text-white shadow-2xl border-0">
              <h3 className="text-2xl font-bold mb-3 text-center">Your Investment</h3>
              <div className="text-center mb-4">
                <p className="text-4xl font-bold mb-1">$1,499</p>
                <p className="text-lg opacity-90">Complete Sprint Journey</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3 mb-4">
                <p className="text-center font-semibold mb-1">100% Satisfaction Guarantee</p>
                <p className="text-center opacity-90 text-sm">
                  Experience your first session risk-free. If you don't have at least one breakthrough moment, we'll refund 100%
                </p>
              </div>

              <Button 
                size="lg" 
                className="w-full bg-teal hover:bg-teal/90 text-white py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleStripeCheckout}
              >
                Begin Your Sprint Today
              </Button>

              <p className="text-center text-sm mt-3 opacity-75">
                Secure checkout powered by Stripe
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Team Program - Light Gray Background */}
      <section id="team-program" className="py-24 px-6 bg-light-gray">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-navy text-center mb-4">
              AI-Confident Team Sprint
            </h2>
            <p className="text-2xl text-gray-600 italic text-center mb-12">
              Build collective capability across your team
            </p>
          </motion.div>

          <motion.div className="prose prose-xl mx-auto mb-12" variants={fadeInUp}>
            <p className="text-gray-700 leading-relaxed">
              Move your team from tentative exploration to confident, practical application. This custom 4-part series develops shared language, repeatable patterns, and team-wide AI fluency that compounds over time. Your team will discover how to leverage AI for competitive advantage in your specific domain.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8 mb-12" variants={staggerContainer}>
            <motion.div variants={scaleIn}>
              <Card className="p-8 h-full shadow-lg border-0 bg-white">
                <h3 className="text-2xl font-bold text-navy mb-6">Perfect For</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal mr-3">•</span>
                    <span>Leadership teams building new capabilities together</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3">•</span>
                    <span>Functional teams seeking competitive advantage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3">•</span>
                    <span>Cross-functional groups driving transformation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3">•</span>
                    <span>Teams of 5-15 participants</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="p-8 h-full shadow-lg border-0 bg-white">
                <h3 className="text-2xl font-bold text-navy mb-6">What's Included</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span>4 customized sessions tailored to your team's objectives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span>Pre-session assessment to understand current capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span>Team challenges that build collective fluency</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span>Shared resource library and best practices</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div className="text-center" variants={fadeInUp}>
            <a href="mailto:michele@aistrategyllc.com?subject=Team%20Program%20Consultation">
              <Button 
                size="lg" 
                className="bg-navy hover:bg-navy/90 text-white px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Schedule a Consultation
              </Button>
            </a>
            <p className="text-gray-600 mt-4">We'll discuss your team's needs and design a custom program</p>
          </motion.div>
        </motion.div>
      </section>

      {/* AI Readiness Assessment - White Background */}
      <section id="assessment" className="py-24 px-6 bg-white">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-navy text-center mb-4">
              AI Readiness Assessment
            </h2>
            <p className="text-2xl text-gray-600 italic text-center mb-12">
              Strategic roadmap for AI transformation
            </p>
          </motion.div>

          <motion.div className="prose prose-xl mx-auto mb-12" variants={fadeInUp}>
            <p className="text-gray-700 leading-relaxed">
              A comprehensive 3 to 4 week diagnostic that identifies where AI can drive transformation in your business. We'll work with your leadership team to uncover high-impact opportunities, assess organizational readiness, and establish a prioritized roadmap that balances quick wins with strategic initiatives.
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8 mb-12" variants={staggerContainer}>
            <motion.div variants={scaleIn}>
              <Card className="p-8 h-full shadow-lg border-0">
                <h3 className="text-2xl font-bold text-navy mb-6">What You'll Receive</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span>Current-state capability assessment across your organization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span>Opportunity identification and prioritization matrix</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span>Implementation roadmap with quick wins and long-term initiatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span>Organizational readiness recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span>Executive presentation and workshop</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="p-8 h-full shadow-lg border-0">
                <h3 className="text-2xl font-bold text-navy mb-6">Our Process</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-1">Week 1: Discovery</h4>
                    <p className="text-sm">Leadership interviews and current-state analysis</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Week 2: Assessment</h4>
                    <p className="text-sm">Deep dive into opportunities and capabilities</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Week 3: Synthesis</h4>
                    <p className="text-sm">Develop roadmap and recommendations</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Week 4: Delivery</h4>
                    <p className="text-sm">Present findings and facilitate planning workshop</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div className="text-center" variants={fadeInUp}>
            <a href="mailto:michele@aistrategyllc.com?subject=AI%20Readiness%20Assessment">
              <Button 
                size="lg" 
                className="bg-navy hover:bg-navy/90 text-white px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Schedule Assessment Discussion
              </Button>
            </a>
            <p className="text-gray-600 mt-4">Let's explore how AI can transform your organization</p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
