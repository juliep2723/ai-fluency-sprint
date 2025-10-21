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
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Transform how you think about and partner with AI through personalized guidance from two Silicon Valley veterans who pioneered these methods in corporate venture-building
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeInUp}>
            <Link href="/story">
              <Button 
                size="lg" 
                className="bg-teal hover:bg-teal/90 text-white px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Start Your Individual Transformation
              </Button>
            </Link>
            <a href="mailto:michele@aistrategyllc.com?subject=Team%20Program%20Consultation">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy px-10 py-7 text-lg"
              >
                Build Team Capability
              </Button>
            </a>
            <a href="mailto:michele@aistrategyllc.com?subject=AI%20Readiness%20Assessment">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy px-10 py-7 text-lg"
              >
                Map Your Organization's Readiness
              </Button>
            </a>
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
              <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center leading-relaxed">
                "You've tried AI tools like ChatGPT. They answered some questions. Generated some emails. But you expected more—and you were right to."
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
                "Through guided exploration, you discover AI isn't a better search engine—it's a thought partner that amplifies your expertise in ways that seemed impossible weeks ago."
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
                "You're creating solutions others can't conceive of. AI is your cognitive co-pilot for invention, discovery, and breakthrough thought."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Three Ways to Transform - Light Gray Background */}
      <section className="py-24 px-6 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Three Ways to Transform
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Individual Leaders */}
            <motion.div variants={scaleIn}>
              <Card className="h-full p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-navy mb-2">For Individual Leaders</h3>
                  <p className="text-3xl font-bold text-teal">Executive AI Fluency Sprint</p>
                  <p className="text-lg text-gray-600 italic mt-2">Your personal breakthrough in 3 to 5 sessions</p>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Move from underwhelmed to amazed through personalized discovery sessions that unlock AI use cases you didn't know existed. Develop the fluency that makes you smarter than most—with patterns and approaches you'll use for years.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-navy mb-3">What's included:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• 3 to 5 personalized sessions (choose 60-min or 100-min format)</li>
                    <li>• Between-session challenges that accelerate learning</li>
                    <li>• Ongoing support throughout your sprint</li>
                    <li>• Resource library of patterns and frameworks</li>
                  </ul>
                </div>

                <div className="text-center">
                  <p className="text-3xl font-bold text-navy mb-4">$1,499</p>
                  <Link href="/story">
                    <Button className="bg-teal hover:bg-teal/90 text-white w-full">
                      Begin Your Sprint →
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>

            {/* Teams */}
            <motion.div variants={scaleIn}>
              <Card className="h-full p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-navy mb-2">For Teams</h3>
                  <p className="text-3xl font-bold text-teal">AI Curious to AI Confident</p>
                  <p className="text-lg text-gray-600 italic mt-2">Build collective capability across your team</p>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Move your team from tentative exploration to confident, practical application. This custom 4-part series develops shared language, repeatable patterns, and team-wide AI fluency that compounds over time.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-navy mb-3">Perfect for:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Leadership teams building new capabilities together</li>
                    <li>• Functional teams seeking competitive advantage</li>
                    <li>• Cross-functional groups driving transformation</li>
                  </ul>
                </div>

                <div className="text-center mt-auto">
                  <a href="mailto:michele@aistrategyllc.com?subject=Team%20Program%20Consultation" className="block">
                    <Button className="bg-navy hover:bg-navy/90 text-white w-full">
                      Schedule a Consultation →
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>

            {/* Organizations */}
            <motion.div variants={scaleIn}>
              <Card className="h-full p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-navy mb-2">For Organizations</h3>
                  <p className="text-3xl font-bold text-teal">AI Readiness Assessment</p>
                  <p className="text-lg text-gray-600 italic mt-2">Strategic roadmap for AI transformation</p>
                </div>
                
                <p className="text-gray-700 mb-6">
                  A comprehensive 3 to 4 week diagnostic that identifies where AI can drive transformation in your business. We'll uncover high-impact opportunities, assess readiness across your organization, and establish a prioritized roadmap together.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-navy mb-3">What you'll receive:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Current-state capability assessment</li>
                    <li>• Opportunity identification and prioritization</li>
                    <li>• Implementation roadmap with quick wins</li>
                    <li>• Organizational readiness recommendations</li>
                  </ul>
                </div>

                <div className="text-center mt-auto">
                  <a href="mailto:michele@aistrategyllc.com?subject=AI%20Readiness%20Assessment" className="block">
                    <Button className="bg-navy hover:bg-navy/90 text-white w-full">
                      Explore Your Readiness →
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why This Matters Now - White Background */}
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
            Why This Matters Now
          </motion.h2>
          
          <motion.div className="prose prose-xl mx-auto text-center" variants={fadeInUp}>
            <p className="text-xl text-gray-700 mb-8">
              AI isn't just another tool—it's a new form of collaboration that transforms what's possible when you combine decades of expertise with breakthrough technology.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-navy mb-4">The opportunity:</h3>
              <p className="text-lg text-gray-700">
                Your experience isn't a liability—it's the unlock. Leaders developing AI fluency now are shaping what comes next. Those who wait will spend years catching up.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-navy mb-4">What makes this different:</h3>
              <p className="text-lg text-gray-700">
                We don't teach prompt engineering or generic AI literacy. We guide you to discovery-based breakthroughs that fundamentally change how you approach problem-solving in your domain.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* The Experience - Light Gray Background */}
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
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-6">You'll Discover Ways to Use AI You Didn't Know Existed</h3>
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
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-6">You'll Experience Breakthrough Moments That Change Everything</h3>
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
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-6">You'll Transform Your Expertise Into Competitive Advantage</h3>
              <p className="text-gray-700 text-lg">
                Your knowledge becomes AI's greatest amplifier. Your experience provides guardrails for breakthrough thinking. You move from AI user to AI thought partner.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For - White Background */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Who This Is For
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-teal mb-4">Individual Sprint for:</h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  Senior leaders who've tried AI tools and know there's more
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  Executives who sense AI's potential and are ready to unlock it
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  Leaders with deep domain expertise ready to amplify their impact
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  Professionals determined to stay ahead
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-teal mb-4">Team Program for:</h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  Leadership teams building new capabilities together
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  Functional teams seeking competitive advantage
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  Cross-functional groups driving transformation
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-teal mb-4">Readiness Assessment for:</h3>
              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  C-suite mapping organizational AI strategy
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  Innovation leaders identifying transformation opportunities
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">•</span>
                  Business units planning AI integration
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Your Guides - Light Gray Background */}
      <section className="py-24 px-6 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Your Guides
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
              <Card className="p-10 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <h3 className="text-3xl font-bold text-navy mb-2">Michele Chambliss</h3>
                <p className="text-xl text-gray-600 italic mb-6">From Enterprise Transformation to Personal AI Mastery</p>
                
                <p className="text-gray-700 text-lg leading-relaxed">
                  Harvard Business School MBA with 30+ years spanning strategy consulting, enterprise leadership, and Silicon Valley ventures. At Mach49, Michele spearheaded the operational rollout of AI capabilities—creating training programs that integrated custom AI tools into venture-building workflows and delivering client masterclasses that brought AI alive in real-time. For the past four years, she's coached Harvard Business School MBA students and alumni through career transitions, bringing deep insight into how leaders think about and adopt new capabilities.
                </p>

                <div className="mt-6">
                  <Link href="/about" className="text-teal hover:text-teal/80 font-semibold">
                    Learn more about Michele →
                  </Link>
                </div>
              </Card>
            </motion.div>

            {/* Julie */}
            <motion.div variants={scaleIn}>
              <Card className="p-10 shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <h3 className="text-3xl font-bold text-navy mb-2">Julie Price</h3>
                <p className="text-xl text-gray-600 italic mb-6">Pioneer in AI Fluency & Customer Discovery</p>
                
                <p className="text-gray-700 text-lg leading-relaxed">
                  Wharton MBA who invented the customer discovery methodology used across 100+ venture-building projects at Mach49. When AI emerged and talented teammates were hesitant, Julie pioneered "AI Unlock" sessions that helped individuals move from fear to confident, valuable AI use. Her discovery-based approach to AI fluency was featured on the gold medal-winning Harvard Business Review 'Women at Work' podcast on AI innovation.
                </p>

                <div className="mt-6">
                  <Link href="/about" className="text-teal hover:text-teal/80 font-semibold">
                    Learn more about Julie →
                  </Link>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Your Investment - Navy Background */}
      <section className="py-24 px-6 bg-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Your Investment in Individual Transformation
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-6xl font-bold mb-4">$1,499</p>
            <p className="text-2xl mb-12">for your complete sprint journey</p>

            <div className="bg-white/10 rounded-xl p-8 mb-12 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-6">Choose your format:</h3>
              <div className="space-y-4 text-lg">
                <p>• 5 one-hour sessions for focused, iterative learning</p>
                <p>• 3 sessions of 100 minutes for intensive transformation</p>
              </div>
              <p className="mt-6 text-gray-300">
                Both formats deliver the complete journey—we'll tailor the pace and intensity to match your preferred learning style and schedule.
              </p>
            </div>

            <div className="bg-teal/20 rounded-xl p-6 max-w-2xl mx-auto">
              <p className="text-xl font-semibold mb-2">100% Satisfaction Guarantee</p>
              <p className="text-lg">
                Experience your first session risk-free. If you don't have at least one breakthrough moment, we'll refund 100%.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - White Background */}
      <section className="py-24 px-6 bg-white">
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
            Your AI Transformation Starts with One Decision
          </motion.h2>
          
          <motion.div className="prose prose-xl mx-auto mb-12" variants={fadeInUp}>
            <p className="text-xl text-gray-700 mb-6">
              The gap between AI-fluent leaders and everyone else widens every day. Which side will you be on?
            </p>
            <p className="text-xl text-gray-700 mb-8">
              While others write basic prompts, you'll create solutions that push the boundaries of what's possible. While they use AI as a search engine, you'll have it as a thought partner.
            </p>
            <p className="text-xl text-gray-700 font-semibold">
              The question isn't whether to develop AI fluency. It's whether you'll lead the transformation or follow it.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Link href="/story">
              <Button 
                size="lg" 
                className="bg-teal hover:bg-teal/90 text-white px-12 py-8 text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Begin Your Sprint Today →
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQs - Light Gray Background */}
      <section className="py-24 px-6 bg-light-gray">
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
              <h3 className="text-2xl font-bold text-navy mb-3">How is this different from other AI courses?</h3>
              <p className="text-lg text-gray-700">
                We don't teach generic "prompt engineering." We guide you to discovery-based breakthroughs specific to your expertise and goals.
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
    </main>
  )
}
