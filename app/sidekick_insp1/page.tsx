'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
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

function Insp1Content() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [interactionSource, setInteractionSource] = useState<string | null>(null)

    const handleSubmit = async (e: React.FormEvent, formLocation: string) => {
        e.preventDefault()
        if (!email || isSubmitting) return

        setIsSubmitting(true)
        try {
            // SOURCE TRACKING: sidekick_insp1 + UTMs
            const utmSource = searchParams.get('utm_source')
            const utmMedium = searchParams.get('utm_medium')
            const utmCampaign = searchParams.get('utm_campaign')
            const utmContent = searchParams.get('utm_content')

            const response = await fetch('/api/capture-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    source: 'sidekick_insp1',
                    formLocation,
                    interactionSource,
                    utmSource,
                    utmMedium,
                    utmCampaign,
                    utmContent
                })
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

    const scrollToCapture = (source: string) => {
        setInteractionSource(source)
        document.getElementById('hero-capture')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <main className="min-h-screen bg-[#FDFCF8]"> {/* Off-white paper background */}
            {/* Logo Header Bar - No navigation */}
            <div className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none">
                <div className="max-w-6xl mx-auto flex justify-end">
                    <div className="bg-white/90 backdrop-blur-md shadow-sm rounded-full px-6 py-2 pointer-events-auto">
                        <Image
                            src="/Logo_transparent_backround.png"
                            alt="AI Strategy"
                            width={180}
                            height={50}
                            className="h-10 w-auto object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* HERO SECTION - Vault Background */}
            <section id="hero-capture" className="relative min-h-[60vh] md:min-h-[55vh] flex flex-col justify-start pt-32 pb-8 px-6 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero_bg_vault.png"
                        alt="Vault Background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-navy/60 mix-blend-multiply" /> {/* Darken for text readability */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <motion.div
                    className="relative z-10 max-w-4xl mx-auto text-center w-full"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg tracking-tight"
                        variants={fadeInUp}
                    >
                        <span className="text-teal">&quot;Cheat Codes&quot;</span> for Real Life
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto font-medium shadow-black drop-shadow-md leading-relaxed"
                        variants={fadeInUp}
                    >
                        Copy these into any chatbot to get relief from your landlord, your boss, and your toddler.
                    </motion.p>

                    {/* High-Visibility Email Capture Form */}
                    <motion.form
                        onSubmit={(e) => handleSubmit(e, 'hero_top')}
                        className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-6 bg-white/10 p-2 rounded-2xl backdrop-blur-sm border border-white/20 shadow-2xl"
                        variants={fadeInUp}
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email to get the PDF"
                            required
                            className="flex-1 px-6 py-5 rounded-xl text-navy text-lg font-medium placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-teal/50 shadow-inner bg-white"
                        />
                        <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="bg-teal hover:bg-teal/90 text-white px-8 py-5 text-xl font-bold rounded-xl shadow-[0_4px_0_rgb(15,23,42)] hover:shadow-[0_2px_0_rgb(15,23,42)] hover:translate-y-[2px] transition-all whitespace-nowrap"
                        >
                            {isSubmitting ? 'Sending...' : 'Send It'}
                        </Button>
                    </motion.form>

                    <motion.p
                        className="text-lg md:text-xl text-gray-200 font-bold tracking-wide"
                        variants={fadeInUp}
                    >
                        📄 Free PDF • Arrives faster than a toddler meltdown
                    </motion.p>
                </motion.div>
            </section>

            {/* THE HOOK SECTION - Paper Texture */}
            <section className="pt-12 pb-0 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl -z-10"></div>

                <motion.div
                    className="max-w-3xl mx-auto relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight"
                        variants={fadeInUp}
                    >
                        Rookie Mistake: <span className="bg-yellow-100 px-2 py-1 transform -rotate-1 inline-block">Trying to handle it all</span> with your own tired brain.
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-700 mb-8 leading-relaxed"
                        variants={fadeInUp}
                    >
                        You just watched the video. You know the vibe. You&apos;re staring at a parking ticket, a crying child, or a passive-aggressive email from &quot;Karen in HR,&quot; and you&apos;re wondering:
                    </motion.p>

                    <motion.blockquote
                        className="text-2xl font-bold text-teal mb-10 pl-6 border-l-4 border-teal italic"
                        variants={fadeInUp}
                    >
                        &quot;Is it possible to fake my own death just to get out of this?&quot;
                    </motion.blockquote>

                    <motion.div
                        className="bg-navy text-white p-8 rounded-2xl shadow-xl transform rotate-1 mb-12"
                        variants={fadeInUp}
                    >
                        <h3 className="text-2xl font-bold mb-4 text-center">Don&apos;t spiral. Outsource the spiral.</h3>
                        <p className="text-lg text-gray-300 text-center">
                            You don&apos;t need a &quot;productivity system.&quot; You need a <strong>Fixer</strong>. You need the specific words to say to make the problem go away so you can go back to eating cheese in peace.
                        </p>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        variants={fadeInUp}
                    >
                        <Button
                            onClick={() => scrollToCapture('hook_button_middle')}
                            size="lg"
                            className="bg-white text-navy border-2 border-navy hover:bg-[#0F172A] hover:text-white px-10 py-6 text-lg font-bold shadow-[4px_4px_0px_rgba(15,23,42,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all rounded-xl"
                        >
                            Get The Cheat Sheet →
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* THE MENU SECTION - Scattered Papers */}
            <section className="py-12 px-6 bg-gray-50">
                <motion.div
                    className="max-w-5xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div
                        className="text-center mb-16"
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 inline-block relative">
                            Fix one disaster <em>today</em>.
                            <svg className="absolute w-full h-4 -bottom-2 left-0 text-yellow-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="12" fill="none" />
                            </svg>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
                            This isn&apos;t a tech manual. It&apos;s a &quot;Get Out of Jail Free&quot; card for adulthood.
                        </p>
                    </motion.div>

                    <motion.div className="grid md:grid-cols-2 gap-8 relative" variants={staggerContainer}>
                        {/* Cheat 1 - Rotated Left */}
                        <motion.div variants={scaleIn} className="md:transform md:-rotate-1">
                            <Card className="p-8 shadow-lg border-2 border-navy bg-white hover:shadow-xl transition-all h-full rounded-tr-[30px] rounded-bl-[30px]">
                                <h3 className="text-2xl font-bold text-navy mb-3">The &quot;Legal Nuke&quot; Email</h3>
                                <div className="bg-red-50 p-4 rounded-lg mb-4 border-l-4 border-red-400">
                                    <p className="text-sm font-bold text-red-800 uppercase tracking-wide mb-1">The Problem</p>
                                    <p className="text-gray-700">Landlord won&apos;t fix the AC? Cable bill went up?</p>
                                </div>
                                <p className="text-lg text-gray-800">The Cheat: A copy-paste email using legal terms so terrifying they&apos;ll apologize and offer a refund.</p>
                            </Card>
                        </motion.div>

                        {/* Cheat 2 - Rotated Right */}
                        <motion.div variants={scaleIn} className="md:transform md:rotate-2 md:mt-12">
                            <Card className="p-8 shadow-lg border-2 border-navy bg-white hover:shadow-xl transition-all h-full rounded-tl-[30px] rounded-br-[30px]">
                                <h3 className="text-2xl font-bold text-navy mb-3">The Passive-Aggressive Translator</h3>
                                <div className="bg-yellow-50 p-4 rounded-lg mb-4 border-l-4 border-yellow-400">
                                    <p className="text-sm font-bold text-yellow-800 uppercase tracking-wide mb-1">The Problem</p>
                                    <p className="text-gray-700">Boss said &quot;Let&apos;s circle back.&quot;</p>
                                </div>
                                <p className="text-lg text-gray-800">The Cheat: A reply that makes you look professional, competent, and un-fireable.</p>
                            </Card>
                        </motion.div>

                        {/* Cheat 3 - Rotated Left */}
                        <motion.div variants={scaleIn} className="md:transform md:-rotate-2">
                            <Card className="p-8 shadow-lg border-2 border-navy bg-white hover:shadow-xl transition-all h-full rounded-xl">
                                <h3 className="text-2xl font-bold text-navy mb-3">The Dinner Panic Protocol</h3>
                                <div className="bg-orange-50 p-4 rounded-lg mb-4 border-l-4 border-orange-400">
                                    <p className="text-sm font-bold text-orange-800 uppercase tracking-wide mb-1">The Problem</p>
                                    <p className="text-gray-700">It&apos;s 5:00 PM. You have ingredients but zero will to live.</p>
                                </div>
                                <p className="text-lg text-gray-800">The Cheat: Paste a photo of your fridge; get a recipe that doesn&apos;t require chopping onions while crying.</p>
                            </Card>
                        </motion.div>

                        {/* Cheat 4 - Rotated Right */}
                        <motion.div variants={scaleIn} className="md:transform md:rotate-1 md:mt-12">
                            <Card className="p-8 shadow-lg border-2 border-navy bg-white hover:shadow-xl transition-all h-full rounded-tr-[30px]">
                                <h3 className="text-2xl font-bold text-navy mb-3">The &quot;Polite but Firm&quot; Draft</h3>
                                <div className="bg-purple-50 p-4 rounded-lg mb-4 border-l-4 border-purple-400">
                                    <p className="text-sm font-bold text-purple-800 uppercase tracking-wide mb-1">The Problem</p>
                                    <p className="text-gray-700">Neighbor drama? Tricky coworkers? Someone you can&apos;t ghost.</p>
                                </div>
                                <p className="text-lg text-gray-800">The Cheat: A script that sets a hard boundary without starting a feud.</p>
                            </Card>
                        </motion.div>
                    </motion.div>

                    {/* CTA Button after menu */}
                    <motion.div
                        className="text-center mt-20"
                        variants={fadeInUp}
                    >
                        <Button
                            onClick={() => scrollToCapture('menu_button_bottom')}
                            size="lg"
                            className="bg-teal hover:bg-teal/90 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all"
                        >
                            Grab The Codes →
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* TESTIMONIALS - Sticky Notes */}
            <section className="py-12 px-6 bg-[url('/chaos-texture.png')]">
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        <motion.div variants={scaleIn} className="transform -rotate-2">
                            <div className="bg-[#FFF9C4] p-8 w-80 h-80 shadow-md flex flex-col justify-between font-handwriting text-navy relative" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)' }}>
                                <div className="absolute top-0 left-[40%] w-16 h-4 bg-yellow-300/50"></div> {/* Tape look */}
                                <blockquote className="text-2xl leading-snug font-medium">
                                    &quot;I didn&apos;t even have to argue. The agent found a $50 discount and thanked <em>me</em>.&quot;
                                </blockquote>
                                <p className="font-bold text-right">— Mark D.<br /><span className="text-sm font-normal text-gray-600">Former Payer of Full Price</span></p>
                            </div>
                        </motion.div>

                        <motion.div variants={scaleIn} className="transform rotate-3">
                            <div className="bg-[#E1F5FE] p-8 w-80 h-80 shadow-md flex flex-col justify-between font-handwriting text-navy relative" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 90%)' }}>
                                <div className="absolute top-0 right-[40%] w-16 h-4 bg-blue-200/50"></div> {/* Tape look */}
                                <blockquote className="text-2xl leading-snug font-medium">
                                    &quot;The congregation laughed. I didn&apos;t have to move towns. 10/10.&quot;
                                </blockquote>
                                <p className="font-bold text-right">— Sarah J.<br /><span className="text-sm font-normal text-gray-600">Mom &amp; Survivor</span></p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* CONTEXT SECTION */}
            <section className="py-12 px-6 bg-navy text-white">
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
                        What Happens When the Cheat Sheet Isn&apos;t Enough?
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-300 mb-8"
                        variants={fadeInUp}
                    >
                        You&apos;ll want the <strong className="text-white text-xl">Real Life AI Reset</strong>.
                    </motion.p>

                    <motion.p
                        className="text-lg text-gray-300 mb-8"
                        variants={fadeInUp}
                    >
                        We aren&apos;t futurists. We&apos;re normal people who were tired of drowning in admin. We created this system to clear your plate—so you can stop reacting to life and start managing it.
                    </motion.p>

                    <motion.div
                        className="inline-block bg-teal/20 border border-teal/50 rounded-2xl p-8 mb-8 backdrop-blur-sm"
                        variants={fadeInUp}
                    >
                        <p className="text-xl">
                            <strong>Public enrollment is $149.</strong><br />
                            Download the pdf to lock in the <span className="text-teal font-extrabold">$99 &quot;Early Adopter&quot; rate</span>.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* FINAL CTA SECTION */}
            <section className="py-12 px-6 bg-[#FDFCF8]">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-navy mb-6 tracking-tight"
                        variants={fadeInUp}
                    >
                        Stop reacting. Start &quot;Lawyering Up.&quot;
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-600 mb-10"
                        variants={fadeInUp}
                    >
                        (Metaphorically. Please don&apos;t actually sue anyone.)
                    </motion.p>

                    {/* Second Email Capture Form */}
                    <motion.form
                        onSubmit={(e) => handleSubmit(e, 'footer_bottom')}
                        className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-6 bg-white p-2 rounded-2xl border-2 border-navy shadow-[8px_8px_0px_rgba(15,23,42,0.1)]"
                        variants={fadeInUp}
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="flex-1 px-6 py-4 rounded-xl text-navy text-lg focus:outline-none focus:ring-2 focus:ring-teal"
                        />
                        <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="bg-navy hover:bg-navy/90 text-white px-10 py-4 text-xl font-bold rounded-xl transition-all whitespace-nowrap"
                        >
                            {isSubmitting ? 'Sending...' : 'Send It'}
                        </Button>
                    </motion.form>

                    <motion.p
                        className="text-lg md:text-xl text-gray-500 font-bold"
                        variants={fadeInUp}
                    >
                        No credit card. No spam. Just relief.
                    </motion.p>
                </motion.div>
            </section>

            {/* MINIMAL FOOTER */}
            <footer className="bg-navy text-white py-12 px-6 border-t border-white/10">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-xl font-bold mb-4 tracking-wider">AI STRATEGY LLC</p>
                    <div className="flex justify-center gap-8 text-sm opacity-60 font-medium tracking-wide uppercase mb-8">
                        <Link href="/privacy" className="hover:opacity-100 transition-opacity hover:text-teal">Privacy</Link>
                        <Link href="/terms" className="hover:opacity-100 transition-opacity hover:text-teal">Terms</Link>
                    </div>
                    <p className="text-sm opacity-50">
                        Contact: <a href="mailto:michele@aistrategyllc.com" className="hover:text-teal transition-colors">michele@aistrategyllc.com</a>
                    </p>
                </div>
            </footer>
        </main>
    )
}

export default function SidekickInsp1Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Insp1Content />
        </Suspense>
    )
}
