'use client'

import Link from 'next/link'
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
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Two Silicon Valley veterans discovered most leaders are using AI like a <span className="font-bold text-orange-600 inline-block align-baseline">Ferrari in first gear</span>. We'll help you unlock its full power through personalized guidance.
          </motion.p>
          
          <motion.div variants={fadeInUp}>
            <Link href="/offerings">
              <Button 
                size="lg" 
                className="bg-teal hover:bg-teal/90 text-white px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Start Your Transformation →
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
            Through personalized sessions, we'll guide you through distinct stages of AI mastery:
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

      {/* Experience Option 1 - Magazine Style Overlapping */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black text-navy text-center mb-4">
              Personalized AI Training Experience
            </h2>
            <p className="text-xl text-gray-600 text-center">Option 1: Magazine Style with Bold Typography</p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* First Block - Discover */}
            <motion.div 
              className="relative mb-8 md:mb-0"
              variants={scaleIn}
            >
              <div className="md:w-2/3 bg-orange-500 p-12 rounded-3xl text-white">
                <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Discover Ways to Use AI<br />
                  <span className="text-orange-200">You Didn't Know Existed</span>
                </h3>
                <p className="text-xl opacity-90">
                  Solve problems you've accepted as unsolvable. Enhance how you think and work in ways that seemed impossible before.
                </p>
              </div>
              <div className="hidden md:block absolute -bottom-8 right-0 text-[200px] font-black text-orange-500/10 select-none">01</div>
            </motion.div>

            {/* Second Block - Experience */}
            <motion.div 
              className="relative mb-8 md:mb-0 md:-mt-16 md:ml-auto"
              variants={scaleIn}
            >
              <div className="md:w-2/3 bg-teal p-12 rounded-3xl text-white">
                <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Experience Breakthrough<br />
                  <span className="text-teal-200">Moments That Change Everything</span>
                </h3>
                <p className="text-xl opacity-90">
                  Break through the "prompt engineering" trap. Develop patterns that unlock AI's hidden potential.
                </p>
              </div>
              <div className="hidden md:block absolute -top-8 left-0 text-[200px] font-black text-teal/10 select-none">02</div>
            </motion.div>

            {/* Third Block - Transform */}
            <motion.div 
              className="relative md:-mt-16"
              variants={scaleIn}
            >
              <div className="md:w-2/3 bg-navy p-12 rounded-3xl text-white">
                <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Transform Your Expertise<br />
                  <span className="text-blue-300">Into Competitive Advantage</span>
                </h3>
                <p className="text-xl opacity-90">
                  Your knowledge becomes AI's greatest amplifier. You move from AI user to AI thought partner.
                </p>
              </div>
              <div className="hidden md:block absolute -bottom-8 right-0 text-[200px] font-black text-navy/10 select-none">03</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Option 2 - Split Screen Dramatic */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20 px-6"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-navy mb-4">
              Personalized AI Training Experience
            </h2>
            <p className="text-xl text-gray-600">Option 2: Split Screen Dramatic Layout</p>
          </motion.div>
          
          <motion.div 
            className="space-y-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* First Split */}
            <motion.div 
              className="flex flex-col md:flex-row"
              variants={fadeInUp}
            >
              <div className="md:w-1/2 bg-gradient-to-br from-orange-500 to-red-500 p-16 flex items-center">
                <div className="text-white">
                  <div className="text-8xl md:text-9xl font-black opacity-30 mb-4">🔥</div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Discover Hidden AI Powers</h3>
                </div>
              </div>
              <div className="md:w-1/2 bg-gray-100 p-16 flex items-center">
                <p className="text-xl text-gray-800 leading-relaxed">
                  <span className="text-5xl font-black text-orange-500 float-left mr-4 leading-none">"</span>
                  Solve problems you've accepted as unsolvable. Enhance how you think and work in ways that seemed impossible before.
                </p>
              </div>
            </motion.div>

            {/* Second Split */}
            <motion.div 
              className="flex flex-col md:flex-row-reverse"
              variants={fadeInUp}
            >
              <div className="md:w-1/2 bg-gradient-to-br from-teal to-blue-600 p-16 flex items-center">
                <div className="text-white text-right md:ml-auto">
                  <div className="text-8xl md:text-9xl font-black opacity-30 mb-4">⚡</div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Experience Breakthrough Moments</h3>
                </div>
              </div>
              <div className="md:w-1/2 bg-gray-900 p-16 flex items-center">
                <p className="text-xl text-gray-100 leading-relaxed">
                  <span className="text-5xl font-black text-teal float-left mr-4 leading-none">"</span>
                  Break through the "prompt engineering" trap. Develop patterns that unlock AI's hidden potential and shift what you believe is possible.
                </p>
              </div>
            </motion.div>

            {/* Third Split */}
            <motion.div 
              className="flex flex-col md:flex-row"
              variants={fadeInUp}
            >
              <div className="md:w-1/2 bg-gradient-to-br from-purple-600 to-indigo-700 p-16 flex items-center">
                <div className="text-white">
                  <div className="text-8xl md:text-9xl font-black opacity-30 mb-4">🚀</div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Transform Into AI Leader</h3>
                </div>
              </div>
              <div className="md:w-1/2 bg-gray-100 p-16 flex items-center">
                <p className="text-xl text-gray-800 leading-relaxed">
                  <span className="text-5xl font-black text-purple-600 float-left mr-4 leading-none">"</span>
                  Your knowledge becomes AI's greatest amplifier. Your experience provides guardrails for breakthrough thinking.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Option 3 - Dynamic Diagonal */}
      <section className="py-24 px-6 bg-light-gray relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-navy mb-4">
              Personalized AI Training <span className="text-orange-500">Experience</span>
            </h2>
            <p className="text-xl text-gray-600">Option 3: Dynamic Diagonal Flow</p>
          </motion.div>
          
          <motion.div 
            className="space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Card 1 */}
            <motion.div 
              className="relative"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 transform md:-rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">🎯</div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-black text-navy mb-4">
                      Discover <span className="text-orange-500">Hidden Powers</span>
                    </h3>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      Solve problems you've accepted as unsolvable. Enhance how you think and work in ways that seemed impossible before.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="relative"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gradient-to-r from-teal to-blue-600 rounded-3xl shadow-2xl p-12 md:p-16 text-white transform md:rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">💥</div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-black mb-4">
                      Experience <span className="text-yellow-300">Breakthrough Moments</span>
                    </h3>
                    <p className="text-xl opacity-90 leading-relaxed">
                      Break through the "prompt engineering" trap. Develop patterns that unlock AI's hidden potential and fundamentally shift what you believe is possible.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="relative"
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 transform md:-rotate-2 hover:rotate-0 transition-transform duration-300 border-4 border-purple-500">
                <div className="flex items-start gap-6">
                  <div className="text-6xl">⚡</div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-black text-navy mb-4">
                      Transform into <span className="text-purple-600">AI Leader</span>
                    </h3>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      Your knowledge becomes AI's greatest amplifier. Your experience provides guardrails for breakthrough thinking. You move from AI user to AI thought partner.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Meet Your Guides - White Background */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Meet Your Guides
          </motion.h2>

          <motion.div className="space-y-16" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            {/* Michele */}
            <motion.div variants={fadeInUp}>
              <Card className="p-8 shadow-lg">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
          <Image
                      src="/michele.png"
                      alt="Michele Chambliss"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy mb-2">Michele Chambliss</h3>
                    <p className="text-lg text-teal font-semibold mb-4">From Enterprise Transformation to Personal AI Mastery</p>
                    
                    <ul className="space-y-3 text-charcoal">
                      <li className="flex items-start">
                        <span className="text-teal mr-2 mt-1">•</span>
                        <span>Harvard MBA with 30+ years in strategy consulting, enterprise leadership, and Silicon Valley ventures</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2 mt-1">•</span>
                        <span>Spearheaded AI capabilities rollout at Mach49, creating training programs and leading client masterclasses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2 mt-1">•</span>
                        <span>HBS executive coach for 4+ years, bringing deep insight into how leaders adopt new capabilities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2 mt-1">•</span>
                        <span>Brings strategic clarity on where AI creates genuine advantage, plus operational expertise to make transformation actually happen</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Julie */}
            <motion.div variants={fadeInUp}>
              <Card className="p-8 shadow-lg">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
          <Image
                      src="/julie.png"
                      alt="Julie Price"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy mb-2">Julie Price</h3>
                    <p className="text-lg text-teal font-semibold mb-4">Pioneer in AI Fluency & Customer Discovery</p>
                    
                    <ul className="space-y-3 text-charcoal">
                      <li className="flex items-start">
                        <span className="text-teal mr-2 mt-1">•</span>
                        <span>Wharton MBA who invented customer discovery methodology used across 100+ venture projects at Mach49</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2 mt-1">•</span>
                        <span>Pioneered "AI Unlock" sessions that helped individuals move past fear to discover unexpected AI value</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2 mt-1">•</span>
                        <span>Contributor to gold medal-winning Harvard Business Review podcast on AI innovation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal mr-2 mt-1">•</span>
                        <span>Uses discovery-based learning methods to transform AI from intimidating technology into creative thought partner</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
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
          variants={fadeInUp}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy mb-8"
            variants={fadeInUp}
          >
            Ready to Transform Your AI Journey?
          </motion.h2>
          
          <motion.div variants={fadeInUp}>
            <Link href="/offerings">
              <Button 
                size="lg" 
                className="bg-teal hover:bg-teal/90 text-white px-12 py-8 text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Explore Our Offerings →
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
