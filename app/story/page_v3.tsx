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
              Julie created the customer discovery methodology that became foundational to how Mach49 worked—she never met a customer discovery hurdle she couldn't overcome, helping teams get to the truth of what customers actually needed.
            </motion.p>
            
            <motion.p className="text-xl mb-8 leading-relaxed" variants={fadeInUp}>
              Michele brought decades of strategy consulting and enterprise leadership, co-leading successful venture-building projects that transformed ambitious ideas into viable businesses.
            </motion.p>

            <motion.h3 className="text-3xl font-bold text-navy mt-12 mb-6" variants={fadeInUp}>
              When AI Emerged
            </motion.h3>

            <motion.p className="text-xl mb-8 leading-relaxed" variants={fadeInUp}>
              When ChatGPT launched, we started collaborating on AI applications—experimenting with synthetic interviews, new research approaches, creative applications neither of us had imagined possible.
            </motion.p>

            <motion.p className="text-xl mb-8 leading-relaxed" variants={fadeInUp}>
              But we noticed something unexpected: talented, accomplished colleagues around us—people who'd built multi-million dollar ventures—were hesitant, even intimidated by AI.
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

      {/* Today - Light Gray Background */}
      <section className="py-24 px-6 bg-light-gray">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy mb-12"
            variants={fadeInUp}
          >
            Today
          </motion.h2>

          <motion.div className="prose prose-xl mx-auto text-gray-700" variants={fadeInUp}>
            <p className="text-xl mb-8 leading-relaxed">
              We bring complementary strengths forged through years of collaboration:
            </p>
          </motion.div>

          <motion.div className="grid md:grid-cols-2 gap-8 mb-12" variants={staggerContainer}>
            <motion.div className="text-left" variants={fadeInUp}>
              <p className="text-xl text-gray-700">
                <span className="font-bold text-navy">Michele</span> provides strategic clarity on where AI creates genuine advantage, plus the operational expertise to make transformation happen across individuals, teams, and organizations.
              </p>
            </motion.div>
            
            <motion.div className="text-left" variants={fadeInUp}>
              <p className="text-xl text-gray-700">
                <span className="font-bold text-navy">Julie</span> brings discovery-based learning methods that help you experience breakthrough moments—transforming AI from tool to thought partner.
              </p>
            </motion.div>
          </motion.div>

          <motion.p className="text-xl text-gray-700 mb-12" variants={fadeInUp}>
            Together, we guide executives through personalized journeys that unlock capabilities they didn't know were possible.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <Link href="/about">
              <Button 
                size="lg" 
                className="bg-teal hover:bg-teal/90 text-white px-10 py-7 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Learn more about us →
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* What We Offer - Navy Background */}
      <section className="py-24 px-6 bg-navy text-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            What We Offer
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
              <Card className="h-full p-8 bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">For Individual Leaders</h3>
                <p className="text-3xl font-bold text-teal mb-4">Executive AI Fluency Sprint</p>
                <p className="text-gray-300 mb-6">
                  Your personal breakthrough in 3 to 5 sessions
                </p>
                <Link href="/story">
                  <Button className="w-full bg-teal hover:bg-teal/90 text-white">
                    Begin Your Sprint →
                  </Button>
                </Link>
              </Card>
            </motion.div>

            {/* Teams */}
            <motion.div variants={scaleIn}>
              <Card className="h-full p-8 bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">For Teams</h3>
                <p className="text-3xl font-bold text-teal mb-4">AI Curious to AI Confident</p>
                <p className="text-gray-300 mb-6">
                  Build collective capability across your team
                </p>
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/40">
                  Explore Team Program →
                </Button>
              </Card>
            </motion.div>

            {/* Organizations */}
            <motion.div variants={scaleIn}>
              <Card className="h-full p-8 bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">For Organizations</h3>
                <p className="text-3xl font-bold text-teal mb-4">AI Readiness Assessment</p>
                <p className="text-gray-300 mb-6">
                  Strategic roadmap for AI transformation
                </p>
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/40">
                  Schedule Assessment →
                </Button>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ready to Begin - White Background */}
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
            Ready to Begin?
          </motion.h2>
          
          <motion.p className="text-xl text-gray-700 mb-12" variants={fadeInUp}>
            The gap between AI-fluent leaders and everyone else widens every day. Which side will you be on?
          </motion.p>

          <motion.div className="space-y-8 mb-12" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-navy mb-4">Start your transformation:</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-teal hover:bg-teal/90 text-white px-8 py-6 text-lg"
                  onClick={handleStripeCheckout}
                >
                  Individual breakthrough → Book Your Sprint
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-6 text-lg"
                >
                  Team capability → Schedule Consultation
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-6 text-lg"
                >
                  Organizational readiness → Schedule Assessment
                </Button>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <p className="text-xl text-gray-700 mb-2">
              <span className="font-semibold">Questions?</span> We'd love to hear from you.
            </p>
            <a href="mailto:michele@aistrategyllc.com" className="text-teal hover:text-teal/80 text-xl font-semibold">
              📧 michele@aistrategyllc.com
            </a>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
