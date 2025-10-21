'use client'

import Image from 'next/image'
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
}

export default function Story() {
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
      {/* Opening Hook - Navy Background */}
      <section className="py-24 px-6 bg-navy text-white pt-32">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 leading-tight">
            Two Silicon Valley veterans discovered that most people were using AI like a <span className="text-teal">Ferrari in first gear...</span>
          </h1>
        </motion.div>
      </section>

      {/* The Origin Story - White Background */}
      <section className="py-24 px-6 bg-white">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="prose prose-xl mx-auto text-gray-700">
            <motion.p className="text-xl mb-8 leading-relaxed" variants={fadeInUp}>
              After years of helping Fortune 500 companies transform, Michele noticed a pattern: brilliant executives were getting mediocre AI results. Not because they weren't smart enough, but because they were approaching AI like just another software tool.
            </motion.p>
            <motion.p className="text-xl mb-8 leading-relaxed" variants={fadeInUp}>
              Meanwhile, Julie was discovering something magical. Through her work creating AI-powered meditations for her daughter, she found that conversational, playful exploration unlocked capabilities she never imagined possible.
            </motion.p>
            <motion.p className="text-xl mb-8 leading-relaxed" variants={fadeInUp}>
              When their paths converged, they realized something profound: the gap wasn't in the technology—it was in the approach. Executives needed a new way to develop AI fluency, one that merged their deep expertise with genuine discovery.
            </motion.p>
            <motion.p className="text-lg leading-relaxed" variants={fadeInUp}>
              And so the Executive AI Fluency Sprint was born—a personalized journey that transforms skeptical exploration into confident mastery.
            </motion.p>
          </div>

          {/* CTA after story */}
          <motion.div 
            className="text-center mt-16"
            variants={fadeInUp}
          >
            <Button 
              size="lg" 
              className="bg-teal hover:bg-teal/90 text-white px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={handleStripeCheckout}
            >
              Reserve Your Sprint
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Meet Your Guides - Light Gray Background */}
      <section className="py-24 px-6 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Meet Your Guides
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Michele */}
            <motion.div variants={scaleIn}>
              <Card className="p-12 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
                <div className="mb-8">
                  <motion.div 
                    className="relative w-36 h-36 mx-auto mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src="/michele.png"
                      alt="Michele Chambliss"
                      fill
                      className="rounded-full object-cover"
                    />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-navy text-center">Michele Chambliss</h3>
                  <p className="text-center text-gray-600 italic mt-3 text-lg">
                    "From enterprise transformation to personal AI mastery"
                  </p>
                </div>
                
                <div className="space-y-6 text-gray-700">
                  <div>
                    <p className="font-semibold mb-3 text-navy">Key Credentials:</p>
                    <ul className="space-y-2 text-lg">
                      <li className="flex items-start">
                        <span className="text-teal mr-2">•</span>
                        Harvard Business School Executive Coach
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2">•</span>
                        Mach49 Operating Partner
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2">•</span>
                        30+ years Silicon Valley experience
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-3 text-navy">Her Approach:</p>
                    <p className="text-lg">Strategic thinking meets practical application. Michele helps you see how AI transforms not just tasks, but entire approaches to problem-solving.</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Julie */}
            <motion.div variants={scaleIn}>
              <Card className="p-12 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
                <div className="mb-8">
                  <motion.div 
                    className="relative w-36 h-36 mx-auto mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src="/julie.png"
                      alt="Julie Price"
                      fill
                      className="rounded-full object-cover"
                    />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-navy text-center">Julie Price</h3>
                  <p className="text-center text-gray-600 italic mt-3 text-lg">
                    "Unlocking the magic of AI through curiosity and play"
                  </p>
                </div>
                
                <div className="space-y-6 text-gray-700">
                  <div>
                    <p className="font-semibold mb-3 text-navy">Key Credentials:</p>
                    <ul className="space-y-2 text-lg">
                      <li className="flex items-start">
                        <span className="text-teal mr-2">•</span>
                        Co-founder Soft Landing Meditations
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2">•</span>
                        Innovation strategist
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2">•</span>
                        AI educator and coach
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-3 text-navy">Her Approach:</p>
                    <p className="text-lg">Conversational discovery and creative exploration. Julie shows you how to build a relationship with AI that feels natural and unlocks unexpected possibilities.</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Executive AI Fluency Sprint - White Background */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            The Executive AI Fluency Sprint
          </motion.h2>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn}>
              <Card className="p-12 mb-16 shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-3xl font-bold text-navy mb-10">What's Included</h3>
                <ul className="space-y-5 text-gray-700 text-xl">
                  <li className="flex items-start">
                    <span className="text-teal mr-4 text-2xl font-bold">✓</span>
                    <span>3-5 personalized 60-minute sessions tailored to your goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-4 text-2xl font-bold">✓</span>
                    <span>Hands-on exploration and experimentation with real use cases</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-4 text-2xl font-bold">✓</span>
                    <span>Between-session challenges to accelerate your learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-4 text-2xl font-bold">✓</span>
                    <span>Ongoing support via email throughout your sprint</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-4 text-2xl font-bold">✓</span>
                    <span>Resource library of prompts, patterns, and frameworks</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div variants={scaleIn}>
                <Card className="p-8 shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-2xl font-semibold text-navy mb-6">Format Options</h4>
                  <ul className="space-y-3 text-gray-700 text-lg">
                    <li className="flex items-start">
                      <span className="text-teal mr-2">•</span>
                      Virtual sessions via Zoom
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal mr-2">•</span>
                      In-person available (Bay Area)
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal mr-2">•</span>
                      Weekly or bi-weekly cadence
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal mr-2">•</span>
                      Morning or evening availability
                    </li>
                  </ul>
                </Card>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Card className="p-8 shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-2xl font-semibold text-navy mb-6">Perfect For</h4>
                  <ul className="space-y-3 text-gray-700 text-lg">
                    <li className="flex items-start">
                      <span className="text-teal mr-2">•</span>
                      Executives ready to lead with AI
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal mr-2">•</span>
                      Leaders who've tried AI but want more
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal mr-2">•</span>
                      Professionals seeking competitive edge
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal mr-2">•</span>
                      Anyone curious about AI's true potential
                    </li>
                  </ul>
                </Card>
              </motion.div>
            </div>

            {/* Investment Section */}
            <motion.div variants={scaleIn}>
              <Card className="p-12 bg-navy text-white shadow-2xl border-0">
                <h3 className="text-3xl font-bold mb-8 text-center">Your Investment</h3>
                <div className="text-center mb-10">
                  <p className="text-6xl font-bold mb-3">$1,499</p>
                  <p className="text-2xl opacity-90">Complete 3-5 Session Sprint</p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-6 mb-10">
                  <p className="text-center font-semibold mb-3 text-xl">100% Satisfaction Guarantee</p>
                  <p className="text-center opacity-90 text-lg">
                    Experience your first session risk-free. If you don't have at least one breakthrough moment, we'll refund 100%
                  </p>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-teal hover:bg-teal/90 text-white py-8 text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={handleStripeCheckout}
                >
                  Start Today
                </Button>

                <p className="text-center text-sm mt-6 opacity-75">
                  Secure checkout powered by Stripe
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Light Gray Background */}
      <section className="py-24 px-6 bg-light-gray">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.div 
            className="space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="bg-white p-8 rounded-xl shadow-md" variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-navy mb-4">Who is this for?</h3>
              <p className="text-gray-700 text-xl">
                Executives and leaders who know AI matters but haven't found their breakthrough yet. If you've tried ChatGPT and thought "there must be more to this," you're exactly who we designed this for.
              </p>
            </motion.div>

            <motion.div className="bg-white p-8 rounded-xl shadow-md" variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-navy mb-4">What if I'm not technical?</h3>
              <p className="text-gray-700 text-xl">
                Perfect. This is about thinking, not coding. In fact, non-technical leaders often have the biggest breakthroughs because they approach AI without preconceptions.
              </p>
            </motion.div>

            <motion.div className="bg-white p-8 rounded-xl shadow-md" variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-navy mb-4">How is this different from AI courses?</h3>
              <p className="text-gray-700 text-xl">
                Courses teach features. We develop fluency. This is personalized to your specific context, challenges, and goals—not generic tutorials.
              </p>
            </motion.div>

            <motion.div className="bg-white p-8 rounded-xl shadow-md" variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-navy mb-4">What happens after the sprint?</h3>
              <p className="text-gray-700 text-xl">
                Many executives continue with quarterly check-ins or advanced explorations. Some bring us in to work with their teams. The journey often continues in unexpected ways.
              </p>
            </motion.div>

            <motion.div className="bg-white p-8 rounded-xl shadow-md" variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-navy mb-4">Can I expense this?</h3>
              <p className="text-gray-700 text-xl">
                Yes. We provide invoices marked as "Executive Coaching and Professional Development" that most companies accept for reimbursement.
              </p>
            </motion.div>

            <motion.div className="bg-white p-8 rounded-xl shadow-md" variants={fadeInUp}>
              <h3 className="text-2xl font-semibold text-navy mb-4">How do I schedule?</h3>
              <p className="text-gray-700 text-xl">
                After purchase, email us at michele@aistrategyllc.com with your preferred start date and we'll send you calendar options within 24 hours.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Navy Background */}
      <section className="py-24 px-6 bg-navy text-white">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8"
            variants={fadeInUp}
          >
            Your AI transformation starts with one decision
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-12"
            variants={fadeInUp}
          >
            Limited availability - we work with only 12 executives per quarter
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Button 
              size="lg" 
              className="bg-teal hover:bg-teal/90 text-white px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={handleStripeCheckout}
            >
              Secure Your Spot
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
