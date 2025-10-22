'use client'

import Image from 'next/image'
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

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Our Story - Navy Background */}
      <section className="py-24 px-6 bg-navy text-white pt-32">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
            variants={fadeInUp}
          >
            Our Story
          </motion.h2>

          <div className="prose prose-xl mx-auto text-gray-300">
            <motion.p className="text-xl mb-8 leading-relaxed" variants={fadeInUp}>
              We met at Mach49, a corporate venture-building firm where we spent years helping Fortune 500 companies launch new ventures. When ChatGPT launched, we started collaborating on creative AI applications neither of us had imagined possible. But talented colleagues—people who'd built multi-million dollar ventures—were hesitant, even intimidated by AI.
            </motion.p>

            <motion.p className="text-xl mb-8 leading-relaxed" variants={fadeInUp}>
              Julie pioneered "AI Unlock" sessions that helped people experience breakthrough moments. Michele brought these insights into training programs and client masterclasses. We realized these methods could help executives everywhere move from AI-curious to AI-confident.
            </motion.p>

            <motion.p className="text-xl leading-relaxed" variants={fadeInUp}>
              So we launched AI Strategy LLC to bring this work to the leaders who need it most.
            </motion.p>
          </div>
        </motion.div>
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

          <motion.div 
            className="text-center mt-16"
            variants={fadeInUp}
          >
            <Link href="/offerings">
              <Button 
                size="lg" 
                className="bg-teal hover:bg-teal/90 text-white px-12 py-8 text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Your Transformation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
