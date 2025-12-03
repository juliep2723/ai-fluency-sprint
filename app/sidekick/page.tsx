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

export default function Sidekick() {
  const handleStripeCheckout = (productType: string) => {
    // Placeholder - will be replaced with actual Stripe URLs
    const stripeUrls: { [key: string]: string } = {
      solo: '#', // TODO: Replace with actual Stripe checkout URL
      plus: '#', // TODO: Replace with actual Stripe checkout URL
      family: '#' // TODO: Replace with actual Stripe checkout URL
    }
    
    const url = stripeUrls[productType]
    if (url && url !== '#') {
      window.location.href = url
    } else {
      alert('Checkout link coming soon! Please contact us at michele@aistrategyllc.com')
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
          <div className="inline-block bg-teal/20 px-4 py-2 rounded-full mb-6">
            <p className="text-sm font-semibold text-teal">🎁 Limited Time Holiday Offering</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Sidekick Starter Kit</h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
            For parents who are brilliant at life and baffled by AI.
          </p>
          <p className="text-xl text-gray-400 italic max-w-2xl mx-auto">
            Give them a week to turn "Can you look at this for me?" into "Don't worry, I already handled it."
          </p>
        </motion.div>
      </section>

      {/* What They'll Get - White Background */}
      <section className="py-24 px-6 bg-white">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy text-center mb-12"
            variants={fadeInUp}
          >
            What They'll Actually Get Out of This
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-700 text-center mb-8"
            variants={fadeInUp}
          >
            By the end of 7 days, your parents will be able to use AI to:
          </motion.p>

          <motion.div className="grid md:grid-cols-2 gap-6 mb-12" variants={staggerContainer}>
            <motion.div variants={scaleIn}>
              <Card className="p-6 h-full shadow-lg border-l-4 border-teal">
                <h3 className="text-xl font-bold text-navy mb-3">Spot scams before they click</h3>
                <p className="text-lg text-gray-700">
                  Forward weird texts, emails, and "urgent" notices to their sidekick for a safety check.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="p-6 h-full shadow-lg border-l-4 border-teal">
                <h3 className="text-xl font-bold text-navy mb-3">Translate gobbledygook</h3>
                <p className="text-lg text-gray-700">
                  Turn medical, legal, and financial jargon into plain English they can actually act on.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="p-6 h-full shadow-lg border-l-4 border-teal">
                <h3 className="text-xl font-bold text-navy mb-3">Write tough emails</h3>
                <p className="text-lg text-gray-700">
                  To HOAs, contractors, customer service, even family – firm, clear, and kind.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="p-6 h-full shadow-lg border-l-4 border-teal">
                <h3 className="text-xl font-bold text-navy mb-3">Fix real-world stuff</h3>
                <p className="text-lg text-gray-700">
                  Snap a photo of a leaky faucet, mystery plant, or confusing bill and ask, "What do I do about this?"
                </p>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-teal/10 p-8 rounded-lg border-l-4 border-teal"
            variants={fadeInUp}
          >
            <p className="text-xl text-gray-800 text-center font-semibold">
              They're not "learning AI."<br />
              They're learning <span className="text-teal">how to get help with the life stuff that usually ends up on your plate.</span>
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works - Off-White Background */}
      <section className="py-24 px-6 bg-off-white">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy text-center mb-12"
            variants={fadeInUp}
          >
            How the 7-Day Sprint Works
          </motion.h2>

          <motion.div className="grid md:grid-cols-2 gap-8 mb-12" variants={staggerContainer}>
            <motion.div variants={scaleIn}>
              <Card className="p-8 h-full shadow-lg border-0 bg-white">
                <h3 className="text-2xl font-bold text-navy mb-6">Each Day, They Get:</h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span><strong>One 3–5 minute video:</strong> no jargon, no fluff, one real-life "magic trick" to try immediately.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span><strong>A tiny challenge:</strong> something they already need to do—decode a bill, draft an email, plan a small trip.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span><strong>"If this goes weird…" safety notes</strong> so they don't panic if something looks off.</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="p-8 h-full shadow-lg border-0 bg-white">
                <h3 className="text-2xl font-bold text-navy mb-6">Plus:</h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span><strong>Wallet Card (physical)</strong> – a cheat sheet of "when X happens, ask AI this" they can keep in a wallet or by the computer.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span><strong>"50 Ways Your AI Sidekick Can Help" guide</strong> – the menu of problems they can hand off to AI, from Medicare comparison to gift ideas for grandkids.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span><strong>Done-for-you gift message templates</strong> – so this feels like a love letter, not a "you're bad at computers" intervention.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span><strong>Gentle troubleshooting support</strong> – if they get stuck, they email us, not you.</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-navy text-white p-8 rounded-lg text-center"
            variants={fadeInUp}
          >
            <p className="text-xl italic">
              Format: more advent calendar than online course. One small door to open per day, not a library they'll never log into.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing - White Background */}
      <section className="py-24 px-6 bg-white">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy text-center mb-12"
            variants={fadeInUp}
          >
            Pricing
          </motion.h2>

          <motion.div className="grid md:grid-cols-3 gap-8 mb-12" variants={staggerContainer}>
            {/* Solo Sidekick */}
            <motion.div variants={scaleIn}>
              <Card className="p-8 h-full shadow-xl border-2 border-gray-200 hover:border-teal transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-navy mb-2">Solo Sidekick</h3>
                  <div className="text-4xl font-bold text-teal mb-1">$99</div>
                  <p className="text-gray-600">One-week transformation</p>
                </div>
                
                <ul className="space-y-3 text-lg text-gray-700 mb-8">
                  <li className="flex items-start">
                    <span className="text-teal mr-2">✓</span>
                    <span>7 daily email + video lessons</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">✓</span>
                    <span>Wallet Card</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">✓</span>
                    <span>"50 Ways Your AI Sidekick Can Help" guide</span>
                  </li>
                </ul>

                <p className="text-sm text-gray-600 text-center mb-6 italic">
                  Perfect when you're buying for one parent or caregiver.
                </p>

                <Button 
                  size="lg" 
                  className="w-full bg-teal hover:bg-teal/90 text-white py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => handleStripeCheckout('solo')}
                >
                  Purchase Solo Sidekick
                </Button>
              </Card>
            </motion.div>

            {/* Sidekick Plus */}
            <motion.div variants={scaleIn}>
              <Card className="p-8 h-full shadow-xl border-2 border-teal relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-navy mb-2">Sidekick Plus</h3>
                  <div className="text-4xl font-bold text-teal mb-1">$149</div>
                  <p className="text-gray-600">Extra hand-holding & staying power</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Everything in Solo, plus:</p>
                  <ul className="space-y-3 text-lg text-gray-700">
                    <li className="flex items-start">
                      <span className="text-teal mr-2">✓</span>
                      <span>Email support during the week</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal mr-2">✓</span>
                      <span>Day 8 "AI Toolkit" bonus</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal mr-2">✓</span>
                      <span>3 months of Sidekick Tips</span>
                    </li>
                  </ul>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-navy hover:bg-navy/90 text-white py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => handleStripeCheckout('plus')}
                >
                  Purchase Sidekick Plus
                </Button>
              </Card>
            </motion.div>

            {/* Family Pack */}
            <motion.div variants={scaleIn}>
              <Card className="p-8 h-full shadow-xl border-2 border-gray-200 hover:border-teal transition-all">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-navy mb-2">Family Pack</h3>
                  <div className="text-4xl font-bold text-teal mb-1">$249</div>
                  <p className="text-gray-600">2 Sidekick Plus seats</p>
                </div>
                
                <ul className="space-y-3 text-lg text-gray-700 mb-8">
                  <li className="flex items-start">
                    <span className="text-teal mr-2">✓</span>
                    <span>Everything in Sidekick Plus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">✓</span>
                    <span>For 2 people</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">✓</span>
                    <span>Perfect for parents & in-laws</span>
                  </li>
                </ul>

                <p className="text-sm text-gray-600 text-center mb-6 italic">
                  Gift to parents and in-laws and save on both.
                </p>

                <Button 
                  size="lg" 
                  className="w-full bg-teal hover:bg-teal/90 text-white py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => handleStripeCheckout('family')}
                >
                  Purchase Family Pack
                </Button>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center text-gray-600 text-lg"
            variants={fadeInUp}
          >
            <p className="mb-2">🎁 Choose delivery date between Dec 15 - Dec 26</p>
            <p className="text-sm">(Selection made during checkout)</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Parents Like This - Light Gray Background */}
      <section className="py-24 px-6 bg-light-gray">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy text-center mb-12"
            variants={fadeInUp}
          >
            Why Parents Actually Like This
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-700 text-center mb-8 italic"
            variants={fadeInUp}
          >
            This isn't "back to school." It's:
          </motion.p>

          <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer}>
            <motion.div variants={scaleIn}>
              <Card className="p-6 h-full shadow-lg border-0 bg-white">
                <h3 className="text-xl font-bold text-navy mb-3">Respectful</h3>
                <p className="text-lg text-gray-700">
                  Assumes they're smart and experienced, because they are. We're just updating the tools.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="p-6 h-full shadow-lg border-0 bg-white">
                <h3 className="text-xl font-bold text-navy mb-3">Outcome-first</h3>
                <p className="text-lg text-gray-700">
                  We talk about their life (bills, trips, doctor visits), not "learning a new platform."
                </p>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="p-6 h-full shadow-lg border-0 bg-white">
                <h3 className="text-xl font-bold text-navy mb-3">Superpower-framed</h3>
                <p className="text-lg text-gray-700">
                  More "magic wand for real life" than "remedial tech course."
                </p>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="p-6 h-full shadow-lg border-0 bg-white">
                <h3 className="text-xl font-bold text-navy mb-3">Confidence-building</h3>
                <p className="text-lg text-gray-700">
                  They rediscover how capable they already are, with a 24/7 sidekick on call.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Guarantee - White Background */}
      <section className="py-24 px-6 bg-white">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Card className="p-10 bg-teal/10 border-l-8 border-teal shadow-xl">
            <h2 className="text-3xl font-bold text-navy text-center mb-6">
              100% "I Can Do This" Guarantee
            </h2>
            <p className="text-xl text-gray-800 text-center mb-4 leading-relaxed">
              If they don't have at least one "Oh wow, I can handle this myself" moment in the first 3 days, we'll refund you in full. No forms, no awkward questions.
            </p>
            <p className="text-xl text-gray-800 text-center font-semibold">
              You get your money back.
            </p>
            <p className="text-xl text-gray-800 text-center mt-4 italic">
              They still get the message: <span className="text-teal font-bold">"I believe in you."</span>
            </p>
          </Card>
        </motion.div>
      </section>
    </main>
  )
}
