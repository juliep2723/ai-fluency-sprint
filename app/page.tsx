'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
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
            From AI Curious to<br />
            <span className="text-teal">AI Confident</span><br />
            in 3-5 Sessions
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            A personalized journey that transforms how you think about and partner with AI
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/story">
              <Button 
                size="lg" 
                className="bg-teal hover:bg-teal/90 text-white px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Begin Your Journey
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* The Transformation Journey - White Background */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
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
              <p className="text-xl text-gray-700 max-w-2xl mx-auto text-center leading-relaxed">
                "You've tried ChatGPT. It answered some questions. Generated some emails. But honestly? You expected more."
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
                "Through guided exploration, you discover AI isn't a better search engine—it's a thinking partner that amplifies your expertise in ways you never imagined"
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
                "You're now creating solutions others can't even conceive of. AI has become your cognitive co-pilot for invention, discovery, and breakthrough thinking"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why This Matters Now - Light Gray Background */}
      <section className="py-24 px-6 bg-light-gray">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy mb-16"
            variants={fadeInUp}
          >
            Why This Matters Now
          </motion.h2>
          <motion.div className="space-y-8" variants={staggerContainer}>
            <motion.p className="text-xl text-gray-700 font-medium" variants={fadeInUp}>
              AI isn't just another tool—it's a new form of collaboration
            </motion.p>
            <motion.p className="text-xl text-gray-700 font-medium" variants={fadeInUp}>
              Your years of experience become the foundation for breakthrough thinking
            </motion.p>
            <motion.p className="text-xl text-gray-700 font-medium" variants={fadeInUp}>
              The leaders who develop AI fluency now will shape what comes next
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* The Experience - White Background */}
      <section className="py-24 px-6 bg-white">
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
            {/* Beyond the Obvious */}
            <motion.div 
              className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              variants={scaleIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
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
            </motion.div>

            {/* From Underwhelmed to Amazed */}
            <motion.div 
              className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              variants={scaleIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
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
            </motion.div>

            {/* Your Expertise as Superpower */}
            <motion.div 
              className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              variants={scaleIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
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
            </motion.div>
          </motion.div>

          {/* CTA after Experience section */}
          <motion.div 
            className="text-center mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link href="/story">
              <Button 
                size="lg" 
                className="bg-teal hover:bg-teal/90 text-white px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Ready to Transform?
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What You'll Experience - Navy Background */}
      <section className="py-24 px-6 bg-navy text-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            What You'll Experience
          </motion.h2>
          
          <motion.div 
            className="space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="flex items-start" variants={fadeInUp}>
              <motion.div 
                className="bg-teal text-white rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 mr-6 text-xl font-bold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                1
              </motion.div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Session 1: Reframing AI</h3>
                <p className="text-gray-300 text-xl">From tool to thinking partner</p>
              </div>
            </motion.div>

            <motion.div className="flex items-start" variants={fadeInUp}>
              <motion.div 
                className="bg-teal text-white rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 mr-6 text-xl font-bold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                2
              </motion.div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Session 2: Discovery</h3>
                <p className="text-gray-300 text-xl">Finding YOUR breakthrough use cases</p>
              </div>
            </motion.div>

            <motion.div className="flex items-start" variants={fadeInUp}>
              <motion.div 
                className="bg-teal text-white rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 mr-6 text-xl font-bold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                3
              </motion.div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Session 3: Mastery</h3>
                <p className="text-gray-300 text-xl">Developing your unique AI collaboration style</p>
              </div>
            </motion.div>

            <motion.div className="flex items-start" variants={fadeInUp}>
              <motion.div 
                className="bg-teal text-white rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0 mr-6 text-lg font-bold"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                4-5
              </motion.div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Sessions 4-5: Application</h3>
                <p className="text-gray-300 text-xl">Creating solutions that amaze even you</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals - Light Gray Background */}
      <section className="py-24 px-6 bg-light-gray">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid md:grid-cols-2 gap-12 text-center">
            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-bold text-navy mb-3">Combined 30+ Years</h3>
              <p className="text-xl text-gray-700">Silicon Valley innovation experience</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-bold text-navy mb-3">Harvard Business School</h3>
              <p className="text-xl text-gray-700">Executive Coaches</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-bold text-navy mb-3">Former Mach49</h3>
              <p className="text-xl text-gray-700">Venture builders</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="text-3xl font-bold text-navy mb-3">Real Transformations</h3>
              <p className="text-xl text-gray-700">Real results</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Final CTA - White Background */}
      <section className="py-24 px-6 bg-white">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy mb-8"
            variants={fadeInUp}
          >
            Ready to discover what you've been missing?
          </motion.h2>
          <motion.div variants={fadeInUp}>
            <Link href="/story">
              <Button 
                size="lg" 
                className="bg-teal hover:bg-teal/90 text-white px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Meet Michele & Julie
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}