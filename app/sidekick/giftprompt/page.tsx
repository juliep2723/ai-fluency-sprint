'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

const promptText = `You are my personal gift-shopping sidekick.

I'll describe the person I'm shopping for and any constraints, and I want you to help me brainstorm truly thoughtful gift ideas that will show my recipient how much I appreciate them.

Here is what I know so far:
– Relationship to me: [e.g., my dad, my sister-in-law, my 16-year-old nephew]
– Their age: [age or range]
– What they're into / how they spend their time: [hobbies, routines, personality]
– Things they already have a lot of: [e.g., gadgets, books, clothes]
– Things they *don't* want: [no clutter, no diet stuff, no scented things, etc.]
– My budget: [range]
– Timing / constraints: [need it in 5 days, can be digital, experience is okay, etc.]
– Past gifts that went well or flopped: [brief examples]

I prefer to buy gifts: [in person, online, on Amazon, or anywhere else specific I should share]

First, based on this info, do a few things:

1. Ask me **5–7 smart follow-up questions** that will really help you understand this person, avoid generic ideas, and be the type of gift I'd like to give. Ask questions one at a time and wait for the answer before continuing (so you don't overwhelm the person answering). No multiple choice as you want to learn through as much as I can share.

2. Remember, what I want to gift may be different from what he thinks of as a good gift, so ask me nuances about what I'd like to gift as you go.

3. Share **3–4 early "theories" or directions** you're considering (e.g., experiences, subscriptions, personalized items, or combination-ideas that go across categories), so I can react to them. Before you generate these theories, do some deep research on trendy or new or non-obvious gifts that might surprise and delight this recipient. Test your theories and directions before going too deep as I might not agree and need the chance to say no.

4. Ask me throughout your questions, starting with your 3rd question and on, if you want more questions or want me to give you ideas now.

Don't make any assumptions: questions are your magical power into finding the right gift that the person wants to receive, that I want to gift, and that will make the receiver feel seen, loved, and happy.

After I answer your questions, come back with a **shortlist of 10 gift ideas** that are:
- are diverse
- concrete (with examples of what I might actually buy),
- clearly tied to their personality or life situation, and
- labeled by type (experience, physical item, subscription, donation, DIY, etc.), and
- where I might buy them.

Also: flag any ideas that would require advance booking or shipping time.`

export default function GiftPrompt() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promptText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = promptText
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-8 px-6 bg-navy text-white">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">🎁 Gift Shopping Prompt</h1>
          <p className="text-lg text-gray-300">
            Your AI-powered gift brainstorming sidekick
          </p>
        </motion.div>
      </section>

      {/* Video Demo */}
      <section className="py-8 px-6 bg-white">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="flex justify-center mb-6 px-4">
            <div 
              className="rounded-xl overflow-hidden shadow-lg w-full"
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
          </div>
          <p className="text-center text-gray-600 mb-8 text-sm">
            Watch Julie use this prompt to find the perfect gift for someone "impossible" to shop for.
          </p>
        </motion.div>
      </section>

      {/* Instructions */}
      <section className="py-6 px-6 bg-white">
        <motion.div 
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="bg-teal/10 p-5 rounded-lg mb-6">
            <h2 className="text-lg font-bold text-navy mb-3">How to Use This Prompt</h2>
            <ol className="space-y-2 text-base text-gray-800">
              <li className="flex items-start">
                <span className="font-bold text-teal mr-2">1.</span>
                <span><strong>Copy</strong> the prompt below using the button</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-teal mr-2">2.</span>
                <span><strong>Paste</strong> it into your Notes app or text editor</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-teal mr-2">3.</span>
                <span><strong>Personalize</strong> the <span className="bg-yellow-200 px-1">highlighted sections</span> for your recipient</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-teal mr-2">4.</span>
                <span><strong>Paste</strong> the completed prompt into ChatGPT (or your favorite AI)</span>
              </li>
            </ol>
          </div>

          {/* Copy Button - Top */}
          <div className="flex justify-end mb-3">
            <Button
              onClick={handleCopy}
              className={`${copied ? 'bg-green-600' : 'bg-teal'} hover:bg-teal/90 text-white px-6 py-3 text-lg shadow-lg transition-all duration-300`}
            >
              {copied ? '✓ Copied!' : '📋 Copy Prompt'}
            </Button>
          </div>

          {/* Prompt Box */}
          <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 md:p-8 shadow-lg">
            <div className="prose prose-lg max-w-none text-gray-800 whitespace-pre-wrap font-mono text-sm md:text-base leading-relaxed">
              <p className="mb-4">You are my personal gift-shopping sidekick.</p>
              
              <p className="mb-4">I'll describe the person I'm shopping for and any constraints, and I want you to help me brainstorm truly thoughtful gift ideas that will show my recipient how much I appreciate them.</p>
              
              <p className="mb-2">Here is what I know so far:</p>
              <div className="bg-yellow-200 p-4 rounded-lg mb-4 border-2 border-yellow-400">
                <p className="mb-1">– Relationship to me: [e.g., my dad, my sister-in-law, my 16-year-old nephew]</p>
                <p className="mb-1">– Their age: [age or range]</p>
                <p className="mb-1">– What they're into / how they spend their time: [hobbies, routines, personality]</p>
                <p className="mb-1">– Things they already have a lot of: [e.g., gadgets, books, clothes]</p>
                <p className="mb-1">– Things they *don't* want: [no clutter, no diet stuff, no scented things, etc.]</p>
                <p className="mb-1">– My budget: [range]</p>
                <p className="mb-1">– Timing / constraints: [need it in 5 days, can be digital, experience is okay, etc.]</p>
                <p className="mb-4">– Past gifts that went well or flopped: [brief examples]</p>
                <p>I prefer to buy gifts: [in person, online, on Amazon, or anywhere else specific I should share]</p>
              </div>
              
              <p className="mb-4">First, based on this info, do a few things:</p>
              
              <p className="mb-4">1. Ask me <strong>5–7 smart follow-up questions</strong> that will really help you understand this person, avoid generic ideas, and be the type of gift I'd like to give. Ask questions one at a time and wait for the answer before continuing (so you don't overwhelm the person answering). No multiple choice as you want to learn through as much as I can share.</p>
              
              <p className="mb-4">2. Remember, what I want to gift may be different from what he thinks of as a good gift, so ask me nuances about what I'd like to gift as you go.</p>
              
              <p className="mb-4">3. Share <strong>3–4 early "theories" or directions</strong> you're considering (e.g., experiences, subscriptions, personalized items, or combination-ideas that go across categories), so I can react to them. Before you generate these theories, do some deep research on trendy or new or non-obvious gifts that might surprise and delight this recipient. Test your theories and directions before going too deep as I might not agree and need the chance to say no.</p>
              
              <p className="mb-4">4. Ask me throughout your questions, starting with your 3rd question and on, if you want more questions or want me to give you ideas now.</p>
              
              <p className="mb-4">Don't make any assumptions: questions are your magical power into finding the right gift that the person wants to receive, that I want to gift, and that will make the receiver feel seen, loved, and happy.</p>
              
              <p className="mb-4">After I answer your questions, come back with a <strong>shortlist of 10 gift ideas</strong> that are:</p>
              <p className="mb-1">- are diverse</p>
              <p className="mb-1">- concrete (with examples of what I might actually buy),</p>
              <p className="mb-1">- clearly tied to their personality or life situation, and</p>
              <p className="mb-1">- labeled by type (experience, physical item, subscription, donation, DIY, etc.), and</p>
              <p className="mb-4">- where I might buy them.</p>
              
              <p>Also: flag any ideas that would require advance booking or shipping time.</p>
            </div>
          </div>

          {/* Copy Button - Bottom */}
          <div className="flex justify-center mt-6">
            <Button
              onClick={handleCopy}
              className={`${copied ? 'bg-green-600' : 'bg-teal'} hover:bg-teal/90 text-white px-8 py-4 text-lg shadow-lg transition-all duration-300`}
            >
              {copied ? '✓ Copied!' : '📋 Copy Prompt'}
            </Button>
          </div>
        </motion.div>
      </section>

      {/* CTA to Sidekick */}
      <section className="py-10 px-6 bg-light-gray">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Want More Prompts Like This?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our 7-day course teaches you to use AI for everyday life—starting way simpler than this.
          </p>
          <Link href="/sidekick">
            <Button 
              size="lg" 
              className="bg-teal hover:bg-teal/90 hover:scale-105 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              ← Back to AI Sidekick Starter Kit
            </Button>
          </Link>
        </motion.div>
      </section>
    </main>
  )
}

