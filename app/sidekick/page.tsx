'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { motion, AnimatePresence } from 'framer-motion'
import { trackAllConversions, trackAllPageViews } from '@/lib/tracking'

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

// Product name mapping
const productNames: { [key: string]: string } = {
  solo: 'Sidekick Solo',
  plus: 'Sidekick Plus',
  family: 'Family Pack'
}

// Success Modal Component
function SuccessModal({ productType, onClose }: { productType: string; onClose: () => void }) {
  const productName = productNames[productType] || 'AI Sidekick Starter Kit'
  
  // Track conversion when success modal appears
  // This fires purchase events to Facebook Pixel, TikTok Pixel, and Google Analytics
  useEffect(() => {
    trackAllConversions(productType)
  }, [productType])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      {/* Dark overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 md:p-10"
      >
        {/* Success checkmark */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        
        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-4">
          Payment received!
        </h2>
        
        <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
          We'll email you shortly with everything you need to get started with your AI Sidekick Starter Kit ({productName}). If it's not in your inbox, please check your Spam/Promotions folder.
        </p>
        
        {/* Close button */}
        <Button
          size="lg"
          className="w-full bg-teal hover:bg-teal/90 text-white py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={onClose}
        >
          Close
        </Button>
      </motion.div>
    </motion.div>
  )
}

// Main page content component (needs to read search params)
function SidekickContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [purchasedProduct, setPurchasedProduct] = useState('')
  
  // Track page view when component mounts (for retargeting audiences)
  useEffect(() => {
    trackAllPageViews()
  }, [])

  useEffect(() => {
    const success = searchParams.get('success')
    const product = searchParams.get('product')
    
    if (success === 'true' && product) {
      setShowSuccessModal(true)
      setPurchasedProduct(product)
      // Scroll to top when showing success modal
      window.scrollTo(0, 0)
    }
  }, [searchParams])
  
  const handleCloseModal = () => {
    setShowSuccessModal(false)
    // Navigate to clean URL and scroll to top
    router.push('/sidekick')
    window.scrollTo(0, 0)
  }

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
      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <SuccessModal productType={purchasedProduct} onClose={handleCloseModal} />
        )}
      </AnimatePresence>

      {/* Logo Header Bar */}
      <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-end">
          <Image 
            src="/Logo_transparent_backround.png" 
            alt="AI Strategy" 
            width={280} 
            height={80} 
            className="h-14 md:h-16 w-auto object-contain"
          />
        </div>
      </div>

      {/* Hero Section - Navy Background */}
      <section className="py-24 px-6 bg-navy text-white pt-28">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="inline-block bg-teal/20 px-4 py-2 rounded-full mb-6">
            <p className="text-base md:text-lg font-semibold text-teal">🎁 Course available starting Jan 12</p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Sidekick Starter Kit</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
            Finally feel confident using AI in 7 days (5–7 minutes/day).
          </p>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            A short, self-paced video + email course for people who are brilliant at life, but baffled by AI.
          </p>
          <a href="#how-it-works">
            <Button 
              size="lg" 
              className="bg-teal hover:bg-teal/90 hover:scale-105 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              See How the 7 Days Work
            </Button>
          </a>
        </motion.div>
      </section>

      {/* What You'll Get - White Background */}
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
            Starter Kit Benefits
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-700 text-center mb-8"
            variants={fadeInUp}
          >
            By the end of 7 days, you'll be able to use AI to:
          </motion.p>

          <motion.div className="grid md:grid-cols-2 gap-6 mb-12" variants={staggerContainer}>
            <motion.div variants={scaleIn}>
              <Card className="p-6 h-full shadow-lg border-l-4 border-teal">
                <h3 className="text-xl font-bold text-navy mb-3">Spot scams before you click</h3>
                <p className="text-lg text-gray-700">
                  Forward weird texts, emails, and "urgent" notices to your sidekick for a safety check.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="p-6 h-full shadow-lg border-l-4 border-teal">
                <h3 className="text-xl font-bold text-navy mb-3">Translate gobbledygook</h3>
                <p className="text-lg text-gray-700">
                  Turn medical, legal, and financial jargon into plain English you can actually act on.
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

          {/* Dozens More Ideas */}
          <motion.div 
            className="bg-teal/10 p-6 rounded-lg border-l-4 border-teal mb-8"
            variants={fadeInUp}
          >
            <p className="text-lg font-semibold text-navy mb-4 text-center">+ dozens more ideas in the full course, including:</p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 max-w-2xl mx-auto text-lg text-gray-700">
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span>Doctor visit question prep</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span>Firm-but-kind letter</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span>Shopping assistant</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span>Video help with my broken appliance</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span>Advice about my tricky relative</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal mr-2">•</span>
                <span>Recipe recommender</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div className="text-center" variants={fadeInUp}>
            <a href="#gift-options">
              <Button 
                size="lg" 
                className="bg-teal hover:bg-teal/90 hover:scale-105 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Pick Your Starter Kit
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works - Off-White Background */}
      <section id="how-it-works" className="py-24 px-6 bg-off-white">
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
            How the 7-Day Course Works
          </motion.h2>

          <motion.div className="grid md:grid-cols-2 gap-8 mb-12" variants={staggerContainer}>
            <motion.div variants={scaleIn}>
              <Card className="p-8 h-full shadow-lg border-0 bg-white">
                <h3 className="text-2xl font-bold text-navy mb-6">Each Day, You Get:</h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span><strong>One 5–7 minute video:</strong> no jargon, no fluff, one real-life "magic trick" to try immediately.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span><strong>A tiny challenge:</strong> something you already need to do—decode a bill, draft an email, plan a small trip.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span><strong>"If this goes weird…" safety notes</strong> so you don't panic if something looks off.</span>
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
                    <span><strong>Quick-Start Cheat Sheet</strong> – "when X happens, ask AI this" you can keep by the computer.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-3 text-xl font-bold">✓</span>
                    <span><strong>"50 Ways Your AI Sidekick Can Help" guide</strong> – the menu of problems you can hand off to AI, from comparison shopping to event planning.</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-navy text-white p-8 rounded-lg text-center"
            variants={fadeInUp}
          >
            <p className="text-xl">
              Format: A snack-sized series, not a full-course meal. Just enough each day to feel smarter and more capable, never stuffed or overwhelmed.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Taught By Section - Navy Background */}
      <section className="py-24 px-6 bg-navy">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white text-center mb-8"
            variants={fadeInUp}
          >
            Taught by Tech Veteran Moms, Not "Tech Bros"
          </motion.h2>
          
          {/* Photos */}
          <motion.div 
            className="flex justify-center gap-8 mb-8"
            variants={fadeInUp}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-teal">
              <Image
                src="/michele.png"
                alt="Michele Chambliss"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-teal">
              <Image
                src="/julie.png"
                alt="Julie Price"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="text-xl text-gray-300 text-center max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            <p className="mb-4">Julie made complicated tech feel easy (and even fun) for millions.</p>
            <p className="mb-4">Michele's been decoding AI for smart, skeptical humans since it hit the scene.</p>
            <p>We don't do jargon. We do "finally makes sense."</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Bonus: See an Advanced Prompt - Off-White Background */}
      <section className="py-16 px-6 bg-off-white">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-navy text-center mb-4"
            variants={fadeInUp}
          >
            Bonus: See an Advanced Prompt in Action
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-700 text-center mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            This is one of our longer, fancier prompts. Daily lessons are gentler 5-7 minutes of plain-English basics.
          </motion.p>

          {/* Video - Responsive vertical video */}
          <motion.div 
            className="mb-8 flex justify-center px-4"
            variants={scaleIn}
          >
            <div 
              className="rounded-xl overflow-hidden shadow-xl w-full"
              style={{ maxWidth: '350px', aspectRatio: '9/16' }}
            >
              <iframe
                src="https://www.youtube.com/embed/NwkaYIPR87A?rel=0&modestbranding=1"
                title="Gift Shopping Prompt Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full block"
              ></iframe>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div className="text-center" variants={fadeInUp}>
            <Link href="/sidekick/giftprompt">
              <Button 
                size="lg" 
                className="bg-teal hover:bg-teal/90 hover:scale-105 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Try This Prompt Free →
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Options - White Background */}
      <section id="gift-options" className="py-24 px-6 bg-white">
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
            Options
          </motion.h2>

          <motion.div className="grid md:grid-cols-3 gap-8 mb-12" variants={staggerContainer}>
            {/* Sidekick Solo */}
            <motion.div 
              variants={scaleIn}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="p-8 h-full shadow-xl hover:shadow-2xl border-2 border-teal transition-all flex flex-col">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-navy mb-2">Sidekick Solo</h3>
                  <div className="text-4xl font-bold text-teal mb-1">
                    <span className="line-through text-gray-400 text-2xl mr-2">$149</span>$99
                  </div>
                  <p className="text-base font-semibold text-teal">Holiday Price • Ends Jan 1</p>
                </div>
                
                <ul className="space-y-3 text-lg text-black mb-6 flex-grow">
                  <li className="flex items-start">
                    <span className="text-teal mr-2">✓</span>
                    <span>7 daily email + video lessons</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal mr-2">✓</span>
                    <span>Quick-Start Cheat Sheet</span>
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
              <Card className="p-8 h-full shadow-xl hover:shadow-2xl border-2 border-teal relative transition-all flex flex-col">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-navy mb-2">Sidekick Plus</h3>
                  <div className="text-4xl font-bold text-teal mb-1">
                    <span className="line-through text-gray-400 text-2xl mr-2">$199</span>$149
                  </div>
                  <p className="text-base font-semibold text-teal">Holiday Price • Ends Jan 1</p>
                </div>
                
                <div className="mb-6 flex-grow">
                  <p className="text-base font-semibold text-black mb-2">Everything in Solo, plus:</p>
                  <ul className="space-y-3 text-lg text-black">
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
                  className="w-full bg-teal hover:bg-teal/90 hover:scale-105 text-white py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-auto"
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
              <Card className="p-8 h-full shadow-xl hover:shadow-2xl border-2 border-teal transition-all flex flex-col">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-navy mb-2">Family Pack</h3>
                  <div className="text-4xl font-bold text-teal mb-1">
                    <span className="line-through text-gray-400 text-2xl mr-2">$349</span>$249
                  </div>
                  <p className="text-base font-semibold text-teal">Holiday Price • Ends Jan 1</p>
                </div>
                
                <ul className="space-y-3 text-lg text-black mb-6 flex-grow">
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

          {/* Delivery Date Note */}
          <motion.div 
            className="text-center text-black text-lg mt-8 mb-4"
            variants={fadeInUp}
          >
            Custom start date – anytime after Jan 12th.
          </motion.div>

          {/* Share Links */}
          <motion.div 
            variants={fadeInUp}
          >
            <div className="flex justify-center items-center gap-6 flex-wrap bg-white rounded-xl border border-teal/30 shadow-md px-8 py-5 mx-auto w-fit">
              <span className="text-black text-base font-bold">Share:</span>
              {/* Email */}
              <a 
                href="mailto:?subject=Check out this AI Sidekick Starter Kit&body=I found this AI starter kit for people who are brilliant at life and baffled by AI: https://www.aistrategyllc.com/sidekick"
                className="flex flex-col items-center gap-1 text-black hover:text-teal transition-colors"
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
                className="flex flex-col items-center gap-1 text-black hover:text-teal transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">Copy Link</span>
              </button>

              {/* Text/SMS */}
              <a 
                href="sms:?body=I found this AI starter kit for people who are brilliant at life and baffled by AI: https://www.aistrategyllc.com/sidekick"
                className="flex flex-col items-center gap-1 text-black hover:text-teal transition-colors"
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
                className="flex flex-col items-center gap-1 text-black hover:text-teal transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-sm">Facebook</span>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/?text=I found this AI starter kit for people who are brilliant at life and baffled by AI: https://www.aistrategyllc.com/sidekick"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 text-black hover:text-teal transition-colors"
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

      {/* What Makes This Different - Light Gray Background */}
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
            What Makes This Different
          </motion.h2>

          <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer}>
            <motion.div variants={scaleIn}>
              <Card className="p-6 h-full shadow-lg border-0 bg-white">
                <h3 className="text-xl font-bold text-navy mb-3">Snack-sized, not stuffed</h3>
                <p className="text-lg text-gray-700">
                  5-7 minutes a day, not hours of homework.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="p-6 h-full shadow-lg border-0 bg-white">
                <h3 className="text-xl font-bold text-navy mb-3">Real life assignments</h3>
                <p className="text-lg text-gray-700">
                  Your actual bills, emails, and confusing documents—not fake exercises.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="p-6 h-full shadow-lg border-0 bg-white">
                <h3 className="text-xl font-bold text-navy mb-3">Plain English, always</h3>
                <p className="text-lg text-gray-700">
                  Zero jargon, zero condescension.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="p-6 h-full shadow-lg border-0 bg-white">
                <h3 className="text-xl font-bold text-navy mb-3">Magic wand, not textbook</h3>
                <p className="text-lg text-gray-700">
                  You'll feel like you gained a superpower, not sat through a lecture.
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
          <Card className="p-10 bg-teal/10 border-l-8 border-teal shadow-xl mb-8">
            <h2 className="text-3xl font-bold text-navy text-center mb-6">
              100% "Wow, I Can Do That?" Guarantee
            </h2>
            <p className="text-xl text-gray-800 text-center leading-relaxed">
              If you don't have at least one "Wow, who knew AI could do that?" moment in the first 3 days, we'll refund you in full. No forms, no awkward questions.
            </p>
          </Card>
          
          <div className="text-center">
            <a href="#gift-options">
              <Button 
                size="lg" 
                className="bg-teal hover:bg-teal/90 hover:scale-105 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Pick Your Starter Kit
              </Button>
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

// Default export with Suspense wrapper (required for useSearchParams)
export default function Sidekick() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-navy" />}>
      <SidekickContent />
    </Suspense>
  )
}
