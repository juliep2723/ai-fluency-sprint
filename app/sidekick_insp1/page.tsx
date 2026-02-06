'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
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

export default function SidekickInsp1Page() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email || isSubmitting) return

        setIsSubmitting(true)
        try {
            const response = await fetch('/api/capture-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source: 'sidekick_insp1' })
            })

            if (response.ok) {
                router.push('/sidekick_insp1/thank-you')
            }
        } catch (error) {
            console.error('Error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const scrollToCapture = () => {
        document.getElementById('hero-capture')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <main className="min-h-screen">
            {/* Logo Header Bar - No navigation */}
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

            {/* HERO SECTION - Email Capture Above the Fold */}
            <section id="hero-capture" className="py-24 px-6 bg-navy text-white pt-28">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-4"
                        variants={fadeInUp}
                    >
                        The <span className="text-teal">&quot;Cheat Codes For Real Life&quot;</span> PDF.
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-300 mb-8"
                        variants={fadeInUp}
                    >
                        Stop fighting your life. Start managing it like a passive-aggressive genius.
                    </motion.p>

                    {/* Email Capture Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-4"
                        variants={fadeInUp}
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="flex-1 px-6 py-4 rounded-lg text-navy text-lg focus:outline-none focus:ring-2 focus:ring-teal"
                        />
                        <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="bg-teal hover:bg-teal/90 hover:scale-105 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 whitespace-nowrap"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Me The Cheat Codes'}
                        </Button>
                    </motion.form>

                    <motion.p
                        className="text-sm text-gray-400"
                        variants={fadeInUp}
                    >
                        Free PDF • Arrives faster than a toddler meltdown
                    </motion.p>
                </motion.div>
            </section>

            {/* THE HOOK SECTION */}
            <section className="py-20 px-6 bg-white">
                <motion.div
                    className="max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-navy mb-6"
                        variants={fadeInUp}
                    >
                        Rookie Mistake: Trying to handle it all with your own tired brain.
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-700 mb-6 leading-relaxed"
                        variants={fadeInUp}
                    >
                        You just watched the video. You know the vibe. You&apos;re staring at a parking ticket, a crying child, or a passive-aggressive email from &quot;Karen in HR,&quot; and you&apos;re wondering: <em>&quot;Is it possible to fake my own death just to get out of this?&quot;</em>
                    </motion.p>

                    <motion.p
                        className="text-2xl font-bold text-navy mb-6"
                        variants={fadeInUp}
                    >
                        Don&apos;t spiral. Outsource the spiral.
                    </motion.p>

                    <motion.p
                        className="text-lg text-gray-700 leading-relaxed"
                        variants={fadeInUp}
                    >
                        You don&apos;t need a &quot;productivity system.&quot; You need a <strong>Fixer</strong>. You need the specific words to say to make the problem go away so you can go back to eating cheese in peace.
                    </motion.p>

                    {/* Mid-page CTA Button */}
                    <motion.div
                        className="text-center mt-10"
                        variants={fadeInUp}
                    >
                        <Button
                            onClick={scrollToCapture}
                            size="lg"
                            className="bg-teal hover:bg-teal/90 hover:scale-105 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            Get The Cheat Sheet →
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* THE MENU SECTION */}
            <section className="py-20 px-6 bg-light-gray">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-navy mb-4"
                        variants={fadeInUp}
                    >
                        Fix one disaster <em>today</em>.
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-700 mb-8"
                        variants={fadeInUp}
                    >
                        This isn&apos;t a tech manual. It&apos;s a &quot;Get Out of Jail Free&quot; card for adulthood.<br />
                        Grab the <strong>5-Minute Relief Cheat Sheet</strong> to handle:
                    </motion.p>

                    <motion.div className="space-y-6" variants={staggerContainer}>
                        {/* Cheat 1 */}
                        <motion.div variants={scaleIn}>
                            <Card className="p-6 shadow-lg border-l-4 border-teal bg-white">
                                <h3 className="text-xl font-bold text-navy mb-2">The &quot;Legal Nuke&quot; Email:</h3>
                                <p className="text-gray-600 mb-2"><em>The Problem:</em> Landlord won&apos;t fix the AC? Cable bill went up?</p>
                                <p className="text-gray-700"><em>The Cheat:</em> A copy-paste email using legal terms so terrifying they&apos;ll apologize and offer a refund.</p>
                            </Card>
                        </motion.div>

                        {/* Cheat 2 */}
                        <motion.div variants={scaleIn}>
                            <Card className="p-6 shadow-lg border-l-4 border-teal bg-white">
                                <h3 className="text-xl font-bold text-navy mb-2">The &quot;Passive-Aggressive&quot; Translator:</h3>
                                <p className="text-gray-600 mb-2"><em>The Problem:</em> Boss said &quot;Let&apos;s circle back.&quot;</p>
                                <p className="text-gray-700"><em>The Cheat:</em> A reply that makes you look professional, competent, and un-fireable.</p>
                            </Card>
                        </motion.div>

                        {/* Cheat 3 */}
                        <motion.div variants={scaleIn}>
                            <Card className="p-6 shadow-lg border-l-4 border-teal bg-white">
                                <h3 className="text-xl font-bold text-navy mb-2">The &quot;Dinner Panic&quot; Protocol:</h3>
                                <p className="text-gray-600 mb-2"><em>The Problem:</em> It&apos;s 5:00 PM. You have ingredients but zero will to live.</p>
                                <p className="text-gray-700"><em>The Cheat:</em> Paste a photo of your fridge; get a recipe that doesn&apos;t require chopping onions while crying.</p>
                            </Card>
                        </motion.div>

                        {/* Cheat 4 */}
                        <motion.div variants={scaleIn}>
                            <Card className="p-6 shadow-lg border-l-4 border-teal bg-white">
                                <h3 className="text-xl font-bold text-navy mb-2">The &quot;Polite but Firm&quot; Draft:</h3>
                                <p className="text-gray-600 mb-2"><em>The Problem:</em> Neighbor drama? Tricky coworkers? Someone you can&apos;t ghost but really wish you could.</p>
                                <p className="text-gray-700"><em>The Cheat:</em> A script that sets a hard boundary without starting a feud.</p>
                            </Card>
                        </motion.div>

                        {/* Cheat 5 */}
                        <motion.div variants={scaleIn}>
                            <Card className="p-6 shadow-lg border-l-4 border-teal bg-white">
                                <h3 className="text-xl font-bold text-navy mb-2">The &quot;Paper to Calendar&quot; Magic Trick:</h3>
                                <p className="text-gray-600 mb-2"><em>The Problem:</em> A crumpled flyer with dates, times, and locations.</p>
                                <p className="text-gray-700"><em>The Cheat:</em> Snap a photo. Get a ready-to-use calendar event. 20 seconds. No app.</p>
                            </Card>
                        </motion.div>
                    </motion.div>

                    {/* CTA Button after menu */}
                    <motion.div
                        className="text-center mt-12"
                        variants={fadeInUp}
                    >
                        <Button
                            onClick={scrollToCapture}
                            size="lg"
                            className="bg-teal hover:bg-teal/90 hover:scale-105 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            Send Me The Cheat Codes →
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section className="py-20 px-6 bg-white">
                <motion.div
                    className="max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div className="space-y-8" variants={staggerContainer}>
                        <motion.div variants={scaleIn}>
                            <Card className="p-8 shadow-lg bg-teal/5 border-0">
                                <blockquote className="text-lg text-gray-800 italic mb-4">
                                    &quot;I used the &apos;Cable Bill&apos; script. I didn&apos;t even have to argue. The agent found a $50 discount and thanked <em>me</em>. I felt like Liam Neeson.&quot;
                                </blockquote>
                                <p className="text-navy font-semibold">— Mark D., Dad &amp; Former Payer of Full Price</p>
                            </Card>
                        </motion.div>

                        <motion.div variants={scaleIn}>
                            <Card className="p-8 shadow-lg bg-teal/5 border-0">
                                <blockquote className="text-lg text-gray-800 italic mb-4">
                                    &quot;My toddler was screaming in church. I used the &apos;PR Crisis&apos; prompt. The congregation laughed. I didn&apos;t have to move towns. 10/10.&quot;
                                </blockquote>
                                <p className="text-navy font-semibold">— Sarah J., Mom &amp; Survivor</p>
                            </Card>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* CONTEXT SECTION */}
            <section className="py-20 px-6 bg-navy text-white">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2
                        className="text-2xl md:text-3xl font-bold mb-6"
                        variants={fadeInUp}
                    >
                        This is part of the &quot;Real Life&quot; AI Rescue System.
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-300 mb-4 italic"
                        variants={fadeInUp}
                    >
                        (A 7-Day Email Course for people who hate &quot;Tech Bro&quot; jargon)
                    </motion.p>

                    <motion.p
                        className="text-lg text-gray-300 mb-6"
                        variants={fadeInUp}
                    >
                        Most AI courses want to teach you how to &quot;code the future.&quot;<br />
                        <strong className="text-white">We just want to help you unsubscribe from a gym membership.</strong>
                    </motion.p>

                    <motion.p
                        className="text-lg text-gray-300 mb-8"
                        variants={fadeInUp}
                    >
                        We aren&apos;t futurists. We&apos;re normal people who were tired of drowning in admin. We created this system to clear your plate—so you can stop reacting to life and start managing it.
                    </motion.p>

                    <motion.div
                        className="bg-white/10 rounded-lg p-6 mb-8"
                        variants={fadeInUp}
                    >
                        <p className="text-lg">
                            <strong>The Investment:</strong> Public enrollment is $149. Join the waitlist today to lock in the <span className="text-teal font-bold">$99 &quot;Early Adopter&quot; rate</span>.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* FINAL CTA SECTION */}
            <section className="py-20 px-6 bg-light-gray">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-navy mb-4"
                        variants={fadeInUp}
                    >
                        Stop reacting. Start &quot;Lawyering Up.&quot;
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-600 mb-8"
                        variants={fadeInUp}
                    >
                        (Metaphorically. Please don&apos;t actually sue anyone.)
                    </motion.p>

                    {/* Second Email Capture Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-4"
                        variants={fadeInUp}
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="flex-1 px-6 py-4 rounded-lg text-navy text-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal"
                        />
                        <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="bg-teal hover:bg-teal/90 hover:scale-105 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 whitespace-nowrap"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Me The Cheat Sheet'}
                        </Button>
                    </motion.form>

                    <motion.p
                        className="text-sm text-gray-500"
                        variants={fadeInUp}
                    >
                        No credit card. No spam. Just relief.
                    </motion.p>
                </motion.div>
            </section>

            {/* MINIMAL FOOTER */}
            <footer className="bg-navy text-white py-8 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-lg font-semibold mb-2">AI Strategy LLC</p>
                    <div className="flex justify-center gap-6 text-sm opacity-80">
                        <Link href="/privacy" className="hover:opacity-100 transition-opacity">Privacy Policy</Link>
                        <Link href="/terms" className="hover:opacity-100 transition-opacity">Terms of Service</Link>
                    </div>
                    <p className="text-sm opacity-60 mt-4">© 2025 AI Strategy LLC. All rights reserved.</p>
                </div>
            </footer>
        </main>
    )
}
