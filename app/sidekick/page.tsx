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
    const stripeUrls: { [key: string]: string } = {
      solo: 'https://buy.stripe.com/bJe28le3c134ga3aEC9k402',
      plus: 'https://buy.stripe.com/dRm9ANbV48vw5vph309k403',
      family: 'https://buy.stripe.com/aFa4gt8IS7rs0b52869k404'
    }
    
    const url = stripeUrls[productType]
    if (url) {
      window.location.href = url
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section - Navy Background */}
      <section className="py-16 px-6 bg-navy text-white pt-32">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <p className="text-xl text-teal font-bold mb-4">Limited Time Holiday Offering</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Sidekick Starter Kit</h1>
          <p className="text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            For parents who are brilliant at life and baffled by AI.
          </p>
          <a href="#gift-options">
            <Button 
              size="lg" 
              className="bg-teal hover:bg-teal/90 hover:scale-105 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Pick Your Gift
            </Button>
          </a>
        </motion.div>
      </section>

      {/* What They'll Get - White Background */}
      <section className="py-16 px-6 bg-white">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy text-center mb-8"
            variants={fadeInUp}
          >
            What They'll Actually Get Out of This
          </motion.h2>
          
          <motion.p 
            className="text-xl text-black text-center mb-2"
            variants={fadeInUp}
          >
            Give them a week to turn "Can you look at this for me?" into "Don't worry, I already handled it."
          </motion.p>
          <motion.p 
            className="text-lg text-black text-center mb-6"
            variants={fadeInUp}
          >
            By the end of 7 days, your parents will be able to use AI to:
          </motion.p>

          <motion.div className="grid md:grid-cols-2 gap-4 mb-8" variants={staggerContainer}>
            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 h-full shadow-lg hover:shadow-xl border-l-4 border-teal text-center transition-shadow">
                <h3 className="text-xl font-bold text-navy leading-tight">Spot scams before they click</h3>
                <p className="text-lg text-black mt-1">
                  Forward weird texts, emails, and "urgent" notices to their sidekick for a safety check.
                </p>
              </Card>
            </motion.div>

            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 h-full shadow-lg hover:shadow-xl border-l-4 border-teal text-center transition-shadow">
                <h3 className="text-xl font-bold text-navy leading-tight">Translate gobbledygook</h3>
                <p className="text-lg text-black mt-1">
                  Turn medical, legal, and financial jargon into plain English they can actually act on.
                </p>
              </Card>
            </motion.div>

            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 h-full shadow-lg hover:shadow-xl border-l-4 border-teal text-center transition-shadow">
                <h3 className="text-xl font-bold text-navy leading-tight">Write tough emails</h3>
                <p className="text-lg text-black mt-1">
                  To HOAs, contractors, customer service, even family – firm, clear, and kind.
                </p>
              </Card>
            </motion.div>

            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 h-full shadow-lg hover:shadow-xl border-l-4 border-teal text-center transition-shadow">
                <h3 className="text-xl font-bold text-navy leading-tight">Fix real-world stuff</h3>
                <p className="text-lg text-black mt-1">
                  Snap a photo of a leaky faucet, mystery plant, or confusing bill and ask, "What do I do about this?"
                </p>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-teal/10 p-6 rounded-lg border-l-4 border-teal mb-8"
            variants={fadeInUp}
          >
            <p className="text-2xl text-black text-center font-semibold">
              They're not "learning AI."<br />
              They're learning <span className="text-teal">to get help with life stuff that usually ends up on your plate.</span>
            </p>
          </motion.div>
          
          <motion.div className="text-center" variants={fadeInUp}>
            <a href="#gift-options">
              <Button 
                size="lg" 
                className="bg-teal hover:bg-teal/90 hover:scale-105 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Pick Your Gift
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works - Off-White Background */}
      <section className="py-16 px-6 bg-off-white">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy text-center mb-8"
            variants={fadeInUp}
          >
            How the 7-Day Sprint Works
          </motion.h2>

          <motion.div className="grid md:grid-cols-2 gap-6 mb-8" variants={staggerContainer}>
            <motion.div variants={scaleIn}>
              <Card className="p-8 h-full shadow-lg border-0 bg-white">
                <h3 className="text-2xl font-bold text-navy mb-6">Each Day, They Get:</h3>
                <ul className="space-y-4 text-lg text-black">
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
                <ul className="space-y-4 text-lg text-black">
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span><strong>Printable Wallet Card</strong> – a cheat sheet of "when X happens, ask AI this" they can keep in a wallet or by the computer.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span><strong>"50 Ways Your AI Sidekick Can Help" guide</strong> – the menu of problems they can hand off to AI, from Medicare comparison to gift ideas for grandkids.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span><strong>Done-for-you gift message templates</strong> – so this feels like a love letter, not a "you're bad at computers" intervention.</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-navy text-white p-6 rounded-lg text-center"
            variants={fadeInUp}
          >
            <p className="text-xl">
              Format: A snack-sized series, not a full-course meal. Just enough each day to feel smarter and more capable, never stuffed or overwhelmed.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Gift Options - White Background */}
      <section id="gift-options" className="py-16 px-6 bg-white">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy text-center mb-8"
            variants={fadeInUp}
          >
            Gift Options
          </motion.h2>

          <motion.div className="grid md:grid-cols-3 gap-6 mb-8" variants={staggerContainer}>
            {/* Sidekick Solo */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 h-full shadow-xl hover:shadow-2xl border-2 border-teal transition-all flex flex-col">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-navy mb-2">Sidekick Solo</h3>
                  <div className="text-4xl font-bold text-teal mb-1">$99</div>
                  <p className="text-lg text-black">One-week transformation</p>
                </div>
                
                <ul className="space-y-2 text-lg text-black mb-6 flex-grow">
                  <li className="flex items-start">
                    <span className="text-teal mr-2">✓</span>
                    <span>7 daily email + video lessons</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">✓</span>
                    <span>Printable Wallet Card</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">✓</span>
                    <span>"50 Ways Your AI Sidekick Can Help" guide</span>
                  </li>
                </ul>

                <Button 
                  size="lg" 
                  className="w-full bg-teal hover:bg-teal/90 hover:scale-105 text-white py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-auto"
                  onClick={() => handleStripeCheckout('solo')}
                >
                  Purchase Sidekick Solo
                </Button>
              </Card>
            </motion.div>

            {/* Sidekick Plus */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 h-full shadow-xl hover:shadow-2xl border-2 border-teal relative transition-all flex flex-col">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-navy mb-2">Sidekick Plus</h3>
                  <div className="text-4xl font-bold text-teal mb-1">$149</div>
                  <p className="text-lg text-black">Extra hand-holding</p>
                </div>
                
                <div className="mb-6 flex-grow">
                  <p className="text-lg font-semibold text-black mb-2">Everything in Sidekick Solo, plus:</p>
                  <ul className="space-y-2 text-lg text-black">
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
                  className="w-full bg-navy hover:bg-navy/90 hover:scale-105 text-white py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-auto"
                  onClick={() => handleStripeCheckout('plus')}
                >
                  Purchase Sidekick Plus
                </Button>
              </Card>
            </motion.div>

            {/* Family Pack */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-6 h-full shadow-xl hover:shadow-2xl border-2 border-teal transition-all flex flex-col">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-navy mb-2">Family Pack</h3>
                  <div className="text-4xl font-bold text-teal mb-1">$249</div>
                  <p className="text-lg text-black">2 Sidekick Plus seats</p>
                </div>
                
                <ul className="space-y-2 text-lg text-black mb-6 flex-grow">
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
                    <span>Save vs. buying separately</span>
                  </li>
                </ul>

                <Button 
                  size="lg" 
                  className="w-full bg-teal hover:bg-teal/90 hover:scale-105 text-white py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-auto"
                  onClick={() => handleStripeCheckout('family')}
                >
                  Purchase Family Pack
                </Button>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center text-black text-xl"
            variants={fadeInUp}
          >
            <p>Choose delivery date between Dec 15 - Dec 26</p>
          </motion.div>

          {/* Share Links */}
          <motion.div 
            className="mt-10 pt-8 border-t border-gray-200"
            variants={fadeInUp}
          >
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <span className="text-gray-600 text-base">Share:</span>
              {/* Email */}
              <a 
                href="mailto:?subject=Gift Idea: AI Sidekick Starter Kit&body=I found this perfect gift for parents who are brilliant at life and baffled by AI: https://www.aistrategyllc.com/sidekick"
                className="flex flex-col items-center gap-1 text-gray-600 hover:text-teal transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">Email</span>
              </a>

              {/* Copy Link */}
              <button 
                onClick={() => {
                  navigator.clipboard.writeText('https://www.aistrategyllc.com/sidekick')
                  alert('Link copied!')
                }}
                className="flex flex-col items-center gap-1 text-gray-600 hover:text-teal transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">Copy Link</span>
              </button>

              {/* Text/SMS */}
              <a 
                href="sms:?body=I found this perfect gift for parents who are brilliant at life and baffled by AI: https://www.aistrategyllc.com/sidekick"
                className="flex flex-col items-center gap-1 text-gray-600 hover:text-teal transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="text-sm">Text</span>
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.aistrategyllc.com/sidekick"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 text-gray-600 hover:text-teal transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-sm">Facebook</span>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/?text=I found this perfect gift for parents who are brilliant at life and baffled by AI: https://www.aistrategyllc.com/sidekick"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 text-gray-600 hover:text-teal transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-sm">WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Parents Like This - Light Gray Background */}
      <section className="py-16 px-6 bg-light-gray">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-navy text-center mb-8"
            variants={fadeInUp}
          >
            Why Parents Actually Like This
          </motion.h2>

          <motion.p 
            className="text-xl text-black text-center mb-6"
            variants={fadeInUp}
          >
            This isn't "back to school." It's:
          </motion.p>

          <motion.div className="grid md:grid-cols-2 gap-4" variants={staggerContainer}>
            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-5 h-full shadow-lg hover:shadow-xl border-0 bg-white text-center transition-shadow">
                <h3 className="text-xl font-bold text-navy leading-tight">Respectful</h3>
                <p className="text-lg text-black mt-1">
                  Assumes they're smart and experienced, because they are. We're just updating the tools.
                </p>
              </Card>
            </motion.div>

            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-5 h-full shadow-lg hover:shadow-xl border-0 bg-white text-center transition-shadow">
                <h3 className="text-xl font-bold text-navy leading-tight">Outcome-first</h3>
                <p className="text-lg text-black mt-1">
                  We talk about their life (bills, trips, doctor visits), not "learning a new platform."
                </p>
              </Card>
            </motion.div>

            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-5 h-full shadow-lg hover:shadow-xl border-0 bg-white text-center transition-shadow">
                <h3 className="text-xl font-bold text-navy leading-tight">Superpower-framed</h3>
                <p className="text-lg text-black mt-1">
                  More "magic wand for real life" than "boring computer class."
                </p>
              </Card>
            </motion.div>

            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-5 h-full shadow-lg hover:shadow-xl border-0 bg-white text-center transition-shadow">
                <h3 className="text-xl font-bold text-navy leading-tight">Confidence-building</h3>
                <p className="text-lg text-black mt-1">
                  They rediscover how capable they already are, with a 24/7 sidekick on call.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Guarantee - White Background */}
      <section className="py-16 px-6 bg-white">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Card className="p-8 bg-teal/10 border-l-8 border-teal shadow-xl mb-8">
            <h2 className="text-3xl font-bold text-navy text-center mb-4">
              100% "I Can Do This" Guarantee
            </h2>
            <p className="text-xl text-black text-center mb-3 leading-relaxed">
              If they don't have at least one "Oh wow, I can handle this myself" moment in the first 3 days, we'll refund you in full. No forms, no awkward questions.
            </p>
            <p className="text-xl text-black text-center font-semibold">
              You get your money back.
            </p>
            <p className="text-xl text-black text-center mt-3">
              They still get the message: <span className="text-teal font-bold">"I believe in you."</span>
            </p>
          </Card>
          
          <div className="text-center">
            <a href="#gift-options">
              <Button 
                size="lg" 
                className="bg-teal hover:bg-teal/90 hover:scale-105 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Pick Your Gift
              </Button>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
