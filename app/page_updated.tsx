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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Navy Background */}
      <section className="relative bg-navy text-white pt-32 pb-24 px-6 overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-slate-800 opacity-50"></div>
        
        <motion.div 
          className="relative max-w-5xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            variants={fadeInUp}
          >
            From AI-Curious to<br />
            <span className="text-teal">AI-Confident</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Transform how you think about and partner with AI through personalized guidance from two Silicon Valley veterans who pioneered these methods in corporate venture-building
          </motion.p>
          
          {/* Clear offering description */}
          <motion.div 
            className="bg-white/10 backdrop-blur rounded-xl p-6 mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            <p className="text-lg text-gray-200">
              We offer <span className="font-semibold text-teal">personalized AI training and coaching</span> in focused, 
              high-impact sessions for individuals, teams, and organizations. 
              Not courses, but transformation through guided discovery.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Link href="/offerings">
              <Button 
                size="lg" 
                className="bg-teal hover:bg-teal/90 text-white px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Explore Our Offerings →
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* The Transformation Journey - White Background */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy text-center mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Your Transformation Journey With Us
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Through our personalized sessions, we'll guide you through three distinct stages of AI mastery:
          </motion.p>
          
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Stage 1 */}
            <motion.div className="relative" variants={fadeInUp}>
              <div className="flex items-center justify-center mb-4">
                <motion.div 
                  className="bg-teal text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  1
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-center text-navy mb-3">Curious but Underwhelmed</h3>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
                You've tried AI tools like ChatGPT. They answered some questions. Generated some emails. But you expected more—and you were right to.
              </p>
            </motion.div>

            {/* Simple connector */}
            <motion.div 
              className="flex justify-center"
              variants={fadeIn}
            >
              <div className="w-0.5 h-6 bg-teal/30"></div>
            </motion.div>

            {/* Stage 2 */}
            <motion.div className="relative" variants={fadeInUp}>
              <div className="flex items-center justify-center mb-4">
                <motion.div 
                  className="bg-teal text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  2
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-center text-navy mb-3">The Awakening</h3>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
                Through guided exploration, you discover AI isn't a better search engine—it's a thought partner that amplifies your expertise in ways that seemed impossible weeks ago.
              </p>
            </motion.div>

            {/* Simple connector */}
            <motion.div 
              className="flex justify-center"
              variants={fadeIn}
            >
              <div className="w-0.5 h-6 bg-teal/30"></div>
            </motion.div>

            {/* Stage 3 */}
            <motion.div className="relative" variants={fadeInUp}>
              <div className="flex items-center justify-center mb-4">
                <motion.div 
                  className="bg-teal text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  3
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-center text-navy mb-3">Empowered & Inspired</h3>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
                You're creating solutions others can't conceive of. AI is your cognitive co-pilot for invention, discovery, and breakthrough thought.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Experience - Light Gray Background (changed from white) */}
      <section className="py-24 px-6 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            The Experience
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Discover Ways */}
            <motion.div 
              className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={scaleIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-2xl font-bold text-navy mb-4">Discover Ways to Use AI You Didn't Know Existed</h3>
              <p className="text-gray-700 text-lg">
                Solve problems you've accepted as unsolvable. Enhance how you think and work in ways that seemed impossible before.
              </p>
            </motion.div>

            {/* Breakthrough Moments */}
            <motion.div 
              className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={scaleIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-2xl font-bold text-navy mb-4">Experience Breakthrough Moments That Change Everything</h3>
              <p className="text-gray-700 text-lg">
                Break through the "prompt engineering" trap. Develop patterns that unlock AI's hidden potential and fundamentally shift what you believe is possible.
              </p>
            </motion.div>

            {/* Transform Expertise */}
            <motion.div 
              className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={scaleIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-2xl font-bold text-navy mb-4">Transform Your Expertise Into Competitive Advantage</h3>
              <p className="text-gray-700 text-lg">
                Your knowledge becomes AI's greatest amplifier. Your experience provides guardrails for breakthrough thinking. You move from AI user to AI thought partner.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQs - White Background (changed from light-gray) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-navy mb-3">What if I'm not technical?</h3>
              <p className="text-lg text-gray-700">
                Perfect. This isn't about coding or engineering—it's about thought partnership. Your domain expertise is the foundation.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-navy mb-3">How is this different from other AI training?</h3>
              <p className="text-lg text-gray-700">
                We don't deliver pre-packaged courses or teach generic "prompt engineering." Instead, we provide personalized coaching and guided discovery sessions that create breakthroughs specific to your expertise and goals.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-navy mb-3">What kind of results can I expect?</h3>
              <p className="text-lg text-gray-700">
                Breakthrough moments where you discover AI use cases you never imagined. Repeatable patterns you'll use for years. Confidence that makes you AI-fluent, not just AI-literate.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-navy mb-3">Is this a good fit for my team?</h3>
              <p className="text-lg text-gray-700">
                Yes—we offer a custom Team Program designed for groups building collective AI capability together.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-navy mb-3">What happens after the sprint?</h3>
              <p className="text-lg text-gray-700">
                You'll have the fluency and patterns to continue discovering new use cases independently. Many clients return for advanced sessions or bring their teams.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-navy mb-3">Can you help assess our organizational readiness?</h3>
              <p className="text-lg text-gray-700">
                Absolutely. Our AI Readiness Assessment provides a comprehensive diagnostic and transformation roadmap.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action - Light Gray Background */}
      <section className="py-24 px-6 bg-light-gray">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy mb-8"
            variants={fadeInUp}
          >
            Ready to Transform Your AI Journey?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Choose your next step and begin your transformation today.
          </motion.p>

          <motion.div 
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn}>
              <Card className="p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <h3 className="text-2xl font-bold text-navy mb-4">Learn About Us</h3>
                <p className="text-gray-700 mb-6">
                  Discover our story, methodology, and why we're passionate about AI transformation.
                </p>
                <Link href="/about">
                  <Button className="w-full bg-navy hover:bg-navy/90 text-white">
                    Our Story →
                  </Button>
                </Link>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-teal/5">
                <h3 className="text-2xl font-bold text-navy mb-4">Explore Offerings</h3>
                <p className="text-gray-700 mb-6">
                  View our individual sprint, team programs, and organizational assessments.
                </p>
                <Link href="/offerings">
                  <Button className="w-full bg-teal hover:bg-teal/90 text-white">
                    View Offerings →
                  </Button>
                </Link>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <h3 className="text-2xl font-bold text-navy mb-4">Get in Touch</h3>
                <p className="text-gray-700 mb-6">
                  Have questions? Ready to start? We'd love to hear from you.
                </p>
                <a href="mailto:michele@aistrategyllc.com">
                  <Button className="w-full bg-navy hover:bg-navy/90 text-white">
                    Contact Us →
                  </Button>
                </a>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
