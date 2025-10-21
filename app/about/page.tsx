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
      {/* The Discovery - Navy Background */}
      <section className="py-24 px-6 bg-navy text-white pt-32">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-center mb-12 leading-tight"
            variants={fadeInUp}
          >
            Two Silicon Valley veterans discovered that most people were using AI like a <span className="text-teal">Ferrari in first gear</span>—technically functional, but missing 95% of its power.
          </motion.h1>
          
          <motion.div className="space-y-6 text-xl text-gray-300 leading-relaxed" variants={staggerContainer}>
            <motion.p variants={fadeInUp}>
              Brilliant executives were getting mediocre results. Not because they weren't smart enough. Because they were approaching AI like just another software tool.
            </motion.p>
            <motion.p variants={fadeInUp}>
              The breakthrough came from an unexpected place: watching what happened when people stopped trying to master AI and started partnering with it.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* How We Got Here - White Background */}
      <section className="py-24 px-6 bg-white">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy text-center mb-16"
            variants={fadeInUp}
          >
            How We Got Here
          </motion.h2>

          <div className="prose prose-xl mx-auto text-gray-700">
            <motion.p className="text-xl mb-8 leading-relaxed" variants={fadeInUp}>
              We met at Mach49, a corporate venture-building firm where we spent years helping Fortune 500 companies launch new ventures at startup speed.
            </motion.p>

            <motion.p className="text-xl mb-8 leading-relaxed" variants={fadeInUp}>
              When ChatGPT launched, we started collaborating on creative AI applications neither of us had imagined possible. But we noticed something unexpected: talented, accomplished colleagues around us—people who'd built multi-million dollar ventures—were hesitant, even intimidated by AI.
            </motion.p>

            <motion.p className="text-xl mb-8 leading-relaxed" variants={fadeInUp}>
              That's when the breakthrough happened.
            </motion.p>

            <motion.p className="text-xl mb-8 leading-relaxed" variants={fadeInUp}>
              Julie pioneered "AI Unlock" sessions: one-on-one conversations focused on discovery-based learning. People who'd been stuck writing basic prompts suddenly experienced breakthrough moments—those "aha" realizations when AI shifts from tool to thought partner.
            </motion.p>

            <motion.p className="text-xl mb-8 leading-relaxed" variants={fadeInUp}>
              Michele took these insights into training programs and client masterclasses, bringing AI alive in real-time for executives. The patterns became clear: the right approach could unlock capabilities people didn't believe were possible.
            </motion.p>

            <motion.p className="text-xl mb-8 leading-relaxed" variants={fadeInUp}>
              Over time, we refined these methods—Julie pushing the boundaries of what non-technical professionals could achieve (ultimately contributing to a gold medal-winning Harvard Business Review podcast on AI), while Michele systematized the approaches, creating learning modules for colleagues and client teams.
            </motion.p>

            <motion.p className="text-xl mb-8 leading-relaxed" variants={fadeInUp}>
              We realized these methods could help executives everywhere move from AI-curious to AI-confident.
            </motion.p>

            <motion.p className="text-xl leading-relaxed" variants={fadeInUp}>
              So we launched AI Strategy LLC to bring this work to the leaders who need it most.
            </motion.p>
          </div>
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

          <motion.div className="space-y-24" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
            {/* Michele */}
            <motion.div className="grid md:grid-cols-3 gap-12 items-start" variants={fadeInUp}>
              <div className="md:col-span-1">
                <motion.div 
                  className="relative w-64 h-64 mx-auto mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/michele.png"
                    alt="Michele Chambliss"
                    fill
                    className="rounded-full object-cover shadow-xl"
                  />
                </motion.div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-navy mb-2">Michele Chambliss</h3>
                  <p className="text-xl text-gray-600 italic">From Enterprise Transformation to Personal AI Mastery</p>
                </div>
              </div>

              <div className="md:col-span-2 prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Michele is a Harvard Business School MBA with over 30 years of experience spanning strategy consulting (CapGemini and boutique firms), enterprise leadership (VP roles at Oracle and Symantec), and Silicon Valley venture-building.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  As an Entrepreneur-in-Residence at Mach49, Michele co-led venture-building engagements for Fortune 500 companies, helping transform ambitious ideas into viable businesses. When AI emerged as a game-changer, she spearheaded the operational rollout of AI capabilities across the firm—creating and delivering training programs that integrated custom AI tools into venture-building workflows and bringing AI alive in real-time through client masterclasses.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  For the past four years, Michele has coached Harvard Business School MBA students and alumni through career transitions, bringing deep insight into how leaders think about and adopt new capabilities. This unique combination of strategic consulting, operational leadership, venture-building, and executive coaching gives her unparalleled perspective on what it takes to help leaders transform.
                </p>

                <div className="bg-teal/10 rounded-xl p-6 mt-8">
                  <h4 className="text-2xl font-bold text-navy mb-4">What Michele brings to your journey:</h4>
                  <p className="text-gray-700">
                    Strategic clarity on where AI creates genuine advantage, plus the operational expertise to make transformation actually happen. She'll help you see beyond the hype to identify real opportunities for AI in your domain, then guide you to practical implementation that delivers results.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Julie */}
            <motion.div className="grid md:grid-cols-3 gap-12 items-start" variants={fadeInUp}>
              <div className="md:col-span-1">
                <motion.div 
                  className="relative w-64 h-64 mx-auto mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src="/julie.png"
                    alt="Julie Price"
                    fill
                    className="rounded-full object-cover shadow-xl"
                  />
                </motion.div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-navy mb-2">Julie Price</h3>
                  <p className="text-xl text-gray-600 italic">Pioneer in AI Fluency & Customer Discovery</p>
                </div>
              </div>

              <div className="md:col-span-2 prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Julie is a Wharton MBA who has spent her career making the complex simple and helping others discover breakthrough solutions. At Fidelity, she designed customer experiences for 8 million customers. At Mach49, she invented the customer discovery methodology that became foundational to the firm's success—wildly creative research approaches used across 100+ venture-building projects.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  When AI emerged, Julie dove in headfirst, integrating it into her daily work and personal life—not by automating existing tasks, but by treating AI as a creative catalyst that could reimagine everything. That's when she noticed something unexpected: brilliant colleagues around her were intimidated by the technology, and those who did use it were just replacing manual steps with AI steps. So she pioneered "AI Unlock" sessions that helped individuals move past fear to discover AI applications they never imagined possible.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Julie's own journey exemplifies what's possible for non-technical professionals. Starting as someone who was not an engineer, she fearlessly explored AI's creative potential, ultimately contributing to a gold medal-winning Harvard Business Review 'Women at Work' podcast on AI innovation.
                </p>

                <div className="bg-teal/10 rounded-xl p-6 mt-8">
                  <h4 className="text-2xl font-bold text-navy mb-4">What Julie brings to your journey:</h4>
                  <p className="text-gray-700">
                    Discovery-based learning methods that transform AI from intimidating technology into creative thought partner. She'll help you experience those breakthrough "aha" moments where you suddenly see possibilities everywhere, then develop the patterns and approaches to turn those possibilities into reality.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why We Do This Work - Navy Background */}
      <section className="py-24 px-6 bg-navy text-white">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12"
            variants={fadeInUp}
          >
            Why We Do This Work
          </motion.h2>

          <motion.div className="prose prose-xl mx-auto text-gray-300" variants={fadeInUp}>
            <p className="mb-6 leading-relaxed">
              We believe that AI fluency will define the next generation of leadership. But we also know that many accomplished executives are being left behind—not because they lack intelligence or ambition, but because they're approaching AI with outdated mental models.
            </p>

            <p className="mb-6 leading-relaxed">
              We've seen firsthand how the right guidance can transform skepticism into enthusiasm, confusion into clarity, and basic usage into breakthrough thinking. We've watched executives go from writing simple prompts to creating solutions that push the boundaries of what's possible.
            </p>

            <p className="mb-6 leading-relaxed">
              This transformation isn't just about technology—it's about unlocking human potential. When leaders learn to partner with AI effectively, they don't just become more productive. They become more creative, more strategic, and more capable of solving the complex challenges our world faces.
            </p>

            <p className="leading-relaxed">
              That's why we created AI Strategy LLC: to ensure that experienced leaders don't just adapt to the AI age, but lead it.
            </p>
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
                Explore Our Offerings →
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
