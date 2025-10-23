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

      {/* Experience Option 1 - Enhanced Cards with Subtle Accents */}
      <section className="py-24 px-6 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Personalized AI Training Experience
            </h2>
            <p className="text-xl text-gray-600">Option 1: Enhanced Cards with Accent Elements</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Card 1 */}
            <motion.div 
              className="relative"
              variants={scaleIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="p-10 h-full shadow-xl hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="relative">
                  <div className="text-sm font-bold text-orange-500 mb-2">STEP ONE</div>
                  <h3 className="text-2xl font-bold text-navy mb-4">Discover Ways to Use AI You Didn't Know Existed</h3>
                  <p className="text-gray-700 text-lg">
                    Solve problems you've accepted as unsolvable. Enhance how you think and work in ways that seemed impossible before.
                  </p>
                  <div className="mt-6 flex items-center text-orange-500">
                    <div className="w-12 h-[2px] bg-orange-500"></div>
                    <span className="ml-3 text-2xl">→</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="relative"
              variants={scaleIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="p-10 h-full shadow-xl hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden bg-teal/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal/20 rounded-full translate-x-16 -translate-y-16"></div>
                <div className="relative">
                  <div className="text-sm font-bold text-teal mb-2">STEP TWO</div>
                  <h3 className="text-2xl font-bold text-navy mb-4">Experience Breakthrough Moments That Change Everything</h3>
                  <p className="text-gray-700 text-lg">
                    Break through the "prompt engineering" trap. Develop patterns that unlock AI's hidden potential and fundamentally shift what you believe is possible.
                  </p>
                  <div className="mt-6 flex items-center text-teal">
                    <div className="w-12 h-[2px] bg-teal"></div>
                    <span className="ml-3 text-2xl">→</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="relative"
              variants={scaleIn}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="p-10 h-full shadow-xl hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full -translate-x-16 translate-y-16"></div>
                <div className="relative">
                  <div className="text-sm font-bold text-purple-600 mb-2">STEP THREE</div>
                  <h3 className="text-2xl font-bold text-navy mb-4">Transform Your Expertise Into Competitive Advantage</h3>
                  <p className="text-gray-700 text-lg">
                    Your knowledge becomes AI's greatest amplifier. Your experience provides guardrails for breakthrough thinking. You move from AI user to AI thought partner.
                  </p>
                  <div className="mt-6 flex items-center text-purple-600">
                    <div className="w-12 h-[2px] bg-purple-600"></div>
                    <span className="ml-3 text-2xl">✓</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Option 2 - Timeline with Feature Cards */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Personalized AI Training Experience
            </h2>
            <p className="text-xl text-gray-600">Option 2: Progressive Timeline with Feature Cards</p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Progress Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gray-200">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-teal to-purple-600 h-full w-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Step 1 */}
              <motion.div variants={scaleIn} className="relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 hidden md:block">
                  <div className="w-16 h-16 bg-white border-4 border-orange-500 rounded-full flex items-center justify-center font-bold text-orange-500">
                    1
                  </div>
                </div>
                <Card className="p-8 mt-8 md:mt-12 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-orange-500">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Discover Ways to Use AI You Didn't Know Existed</h3>
                  <p className="text-gray-600">
                    Solve problems you've accepted as unsolvable. Enhance how you think and work in ways that seemed impossible before.
                  </p>
                  <div className="mt-4 text-sm font-semibold text-orange-500">
                    Unlock hidden potential →
                  </div>
                </Card>
              </motion.div>

              {/* Step 2 */}
              <motion.div variants={scaleIn} className="relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 hidden md:block">
                  <div className="w-16 h-16 bg-white border-4 border-teal rounded-full flex items-center justify-center font-bold text-teal">
                    2
                  </div>
                </div>
                <Card className="p-8 mt-8 md:mt-12 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-teal/5 to-transparent">
                  <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-teal">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Experience Breakthrough Moments That Change Everything</h3>
                  <p className="text-gray-600">
                    Break through the "prompt engineering" trap. Develop patterns that unlock AI's hidden potential and fundamentally shift what you believe is possible.
                  </p>
                  <div className="mt-4 text-sm font-semibold text-teal">
                    Transform your thinking →
                  </div>
                </Card>
              </motion.div>

              {/* Step 3 */}
              <motion.div variants={scaleIn} className="relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 hidden md:block">
                  <div className="w-16 h-16 bg-white border-4 border-purple-600 rounded-full flex items-center justify-center font-bold text-purple-600">
                    3
                  </div>
                </div>
                <Card className="p-8 mt-8 md:mt-12 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-purple-600/10 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">Transform Your Expertise Into Competitive Advantage</h3>
                  <p className="text-gray-600">
                    Your knowledge becomes AI's greatest amplifier. Your experience provides guardrails for breakthrough thinking. You move from AI user to AI thought partner.
                  </p>
                  <div className="mt-4 text-sm font-semibold text-purple-600">
                    Lead with confidence ✓
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Option 3 - Staggered Cards with Highlights */}
      <section className="py-24 px-6 bg-light-gray">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Personalized AI Training Experience
            </h2>
            <p className="text-xl text-gray-600">Option 3: Staggered Layout with Color Highlights</p>
          </motion.div>
          
          <motion.div 
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Card 1 - Left aligned */}
            <motion.div 
              className="md:w-4/5"
              variants={scaleIn}
            >
              <Card className="p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                      01
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy mb-3">
                      Discover Ways to Use AI <span className="text-orange-500">You Didn't Know Existed</span>
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Solve problems you've accepted as unsolvable. Enhance how you think and work in ways that seemed impossible before.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Card 2 - Right aligned */}
            <motion.div 
              className="md:w-4/5 md:ml-auto"
              variants={scaleIn}
            >
              <Card className="p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-r-4 border-teal bg-gradient-to-r from-transparent to-teal/5">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0 md:order-2">
                    <div className="w-20 h-20 bg-gradient-to-br from-teal to-blue-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                      02
                    </div>
                  </div>
                  <div className="flex-1 md:order-1 md:text-right">
                    <h3 className="text-2xl font-bold text-navy mb-3">
                      Experience <span className="text-teal">Breakthrough Moments</span> That Change Everything
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Break through the "prompt engineering" trap. Develop patterns that unlock AI's hidden potential and fundamentally shift what you believe is possible.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Card 3 - Left aligned */}
            <motion.div 
              className="md:w-4/5"
              variants={scaleIn}
            >
              <Card className="p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-600">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                      03
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy mb-3">
                      Transform Your Expertise Into <span className="text-purple-600">Competitive Advantage</span>
                    </h3>
                    <p className="text-gray-700 text-lg">
                      Your knowledge becomes AI's greatest amplifier. Your experience provides guardrails for breakthrough thinking. You move from AI user to AI thought partner.
                    </p>
                  </div>
                </div>
              </Card>
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
