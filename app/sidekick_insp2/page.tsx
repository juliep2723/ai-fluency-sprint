'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'

// Animation variants (reused from insp1)
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
}

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
}

export default function SidekickInsp2Page() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email || isSubmitting) return

        setIsSubmitting(true)
        try {
            // SOURCE TRACKING: sidekick_insp2
            const response = await fetch('/api/capture-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, source: 'sidekick_insp2' })
            })

            if (response.ok) {
                router.push('/sidekick_insp2/thank-you')
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
        <main className="min-h-screen bg-[#FDFCF8]">
            {/* Logo Header Bar */}
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

            {/* HERO SECTION */}
            <section id="hero-capture" className="relative min-h-[75vh] flex items-center justify-center py-20 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-messy-desk.png"
                        alt="Messy Desk Background"
                        fill
                        className="object-cover object-bottom"
                        priority
                    />
                    <div className="absolute inset-0 bg-navy/80 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <motion.div
                    className="relative z-10 max-w-4xl mx-auto text-center w-full mt-10"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.h1
                        className="text-4xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg tracking-tight"
                        variants={fadeInUp}
                    >
                        The <span className="text-teal">5-Minute Relief</span> Cheat Sheet
                    </motion.h1>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-100 mb-6 max-w-3xl mx-auto font-medium shadow-black drop-shadow-md leading-relaxed"
                        variants={fadeInUp}
                    >
                        (The AI-powered list that saved my rug, my job, and my marriage.)
                    </motion.p>

                    <motion.p
                        className="text-lg md:text-xl text-teal-300 mb-10 font-bold tracking-wide uppercase"
                        variants={fadeInUp}
                    >
                        Fix one annoying thing today—without having to &quot;learn AI.&quot;
                    </motion.p>

                    <motion.form
                        onSubmit={handleSubmit}
                        className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-6 bg-white/10 p-2 rounded-2xl backdrop-blur-sm border border-white/20 shadow-2xl"
                        variants={fadeInUp}
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="flex-1 px-6 py-5 rounded-xl text-navy text-lg font-medium placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-teal/50 shadow-inner bg-white"
                        />
                        <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="bg-teal hover:bg-teal/90 text-white px-8 py-5 text-xl font-bold rounded-xl shadow-[0_4px_0_rgb(15,23,42)] hover:shadow-[0_2px_0_rgb(15,23,42)] hover:translate-y-[2px] transition-all whitespace-nowrap"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Me The Cheat Sheet'}
                        </Button>
                    </motion.form>
                </motion.div>
            </section>

            {/* HOOK SECTION */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal/5 rounded-full blur-3xl -z-10"></div>
                <motion.div
                    className="max-w-3xl mx-auto relative content-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight text-center"
                        variants={fadeInUp}
                    >
                        You Haven&apos;t Missed the Boat. <br /><span className="bg-yellow-100 px-2 transform -rotate-1 inline-block mt-2">You Just Needed a Map.</span>
                    </motion.h2>

                    <motion.div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-10" variants={fadeInUp}>
                        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                            It&apos;s 9:04 PM on a Tuesday.
                        </p>
                        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                            You&apos;ve got red wine on your white carpet, 3 browser tabs open for meal planning, 2 overdue school forms, and a blinking cursor on an email you <em>really</em> don&apos;t want to write.
                        </p>
                        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                            Meanwhile, someone on Instagram just automated their whole life with AI. You&apos;re thinking:
                        </p>
                        <blockquote className="text-2xl font-bold text-navy border-l-4 border-teal pl-6 italic mb-6">
                            &quot;Wait... people are using ChatGPT for <em>real life stuff</em>?!&quot;
                        </blockquote>
                        <p className="text-xl font-bold text-navy">
                            They are. So can you. And it can feel <span className="text-teal">shockingly easy</span>.
                        </p>
                    </motion.div>

                    <motion.div
                        className="text-center"
                        variants={fadeInUp}
                    >
                        <Button
                            onClick={scrollToCapture}
                            size="lg"
                            className="bg-navy text-white hover:bg-navy/90 px-10 py-6 text-lg font-bold shadow-lg hover:translate-y-[-2px] transition-all rounded-xl"
                        >
                            Get The Cheat Sheet →
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* THE MENU SECTION */}
            <section className="py-24 px-6 bg-gray-50">
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
                        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                            The Cheat Sheet fixes one thing <em>right now</em>.
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
                            Copy. Paste. Breathe easier.
                        </p>
                    </motion.div>

                    <motion.div className="grid md:grid-cols-2 gap-8 relative" variants={staggerContainer}>
                        {/* 1 */}
                        <motion.div variants={scaleIn} className="md:transform md:-rotate-1">
                            <Card className="p-8 shadow-lg border-2 border-navy bg-white h-full rounded-tr-[30px] rounded-bl-[30px]">
                                <div className="text-3xl mb-4">💬</div>
                                <h3 className="text-2xl font-bold text-navy mb-3">The &quot;Polite but Firm&quot; Email Draft</h3>
                                <p className="text-lg text-gray-800">For neighbor drama. Tricky coworkers. Anyone you can&apos;t ghost but wish you could.</p>
                            </Card>
                        </motion.div>

                        {/* 2 */}
                        <motion.div variants={scaleIn} className="md:transform md:rotate-1 md:mt-12">
                            <Card className="p-8 shadow-lg border-2 border-navy bg-white h-full rounded-tl-[30px] rounded-br-[30px]">
                                <div className="text-3xl mb-4">📝</div>
                                <h3 className="text-2xl font-bold text-navy mb-3">The &quot;School Form → Calendar&quot; Fix</h3>
                                <p className="text-lg text-gray-800">Snap a photo of a flyer. Get a ready-to-use calendar event. <em>20 seconds. No app.</em></p>
                            </Card>
                        </motion.div>

                        {/* 3 */}
                        <motion.div variants={scaleIn} className="md:transform md:-rotate-1">
                            <Card className="p-8 shadow-lg border-2 border-navy bg-white h-full rounded-xl">
                                <div className="text-3xl mb-4">🍽️</div>
                                <h3 className="text-2xl font-bold text-navy mb-3">The &quot;What&apos;s for Dinner?&quot; Lifeline</h3>
                                <p className="text-lg text-gray-800">Paste your groceries → Get 3 meal plans. Plus leftovers ideas. Zero mental load.</p>
                            </Card>
                        </motion.div>

                        {/* 4 */}
                        <motion.div variants={scaleIn} className="md:transform md:rotate-2 md:mt-12">
                            <Card className="p-8 shadow-lg border-2 border-navy bg-white h-full rounded-tr-[30px]">
                                <div className="text-3xl mb-4">📊</div>
                                <h3 className="text-2xl font-bold text-navy mb-3">The &quot;Clean Up This Spreadsheet&quot; Button</h3>
                                <p className="text-lg text-gray-800">Messy data? Scattered notes? AI cleans it up like it&apos;s getting paid.</p>
                            </Card>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-20 px-6 bg-[url('/chaos-texture.png')]">
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
                                <div className="absolute top-0 left-[40%] w-16 h-4 bg-yellow-300/50"></div>
                                <blockquote className="text-xl leading-snug font-medium">
                                    &quot;I asked AI to help me get out of a group trip. It wrote an email so boring, they apologized to me. Cheat Sheet = worth it.&quot;
                                </blockquote>
                                <p className="font-bold text-right">— Danielle L.<br /><span className="text-sm font-normal text-gray-600">Parent &amp; Spreadsheet Avoider</span></p>
                            </div>
                        </motion.div>

                        <motion.div variants={scaleIn} className="transform rotate-3">
                            <div className="bg-[#E1F5FE] p-8 w-80 h-80 shadow-md flex flex-col justify-between font-handwriting text-navy relative" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 90%)' }}>
                                <div className="absolute top-0 right-[40%] w-16 h-4 bg-blue-200/50"></div>
                                <blockquote className="text-xl leading-snug font-medium">
                                    &quot;I used the ‘polite email’ prompt and my neighbor <em>thanked me</em>. Who even <em>am</em> I?&quot;
                                </blockquote>
                                <p className="font-bold text-right">— Malik R.<br /><span className="text-sm font-normal text-gray-600">Reluctant HOA Member</span></p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* CONTEXT SECTION */}
            <section className="py-24 px-6 bg-navy text-white">
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

                    <motion.div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-lg text-gray-200 mb-10 font-medium" variants={fadeInUp}>
                        <div className="flex items-center justify-center gap-2"><span className="text-2xl">🗓️</span> 7 Days</div>
                        <div className="flex items-center justify-center gap-2"><span className="text-2xl">💡</span> 1 Video/Day</div>
                        <div className="flex items-center justify-center gap-2"><span className="text-2xl">🧠</span> Zero Overwhelm</div>
                        <div className="flex items-center justify-center gap-2"><span className="text-2xl">☕</span> Use w/ Coffee</div>
                    </motion.div>

                    <motion.p
                        className="text-lg text-gray-300 mb-8"
                        variants={fadeInUp}
                    >
                        It&apos;s not about &quot;learning AI.&quot; It&apos;s about finally feeling like you aren&apos;t the only one handling everything.
                    </motion.p>

                    <motion.div
                        className="inline-block bg-teal/20 border border-teal/50 rounded-2xl p-8 mb-8 backdrop-blur-sm"
                        variants={fadeInUp}
                    >
                        <p className="text-xl">
                            <strong>Public Price:</strong> $149.<br />
                            Waitlist Rate: <span className="text-teal font-extrabold">$99</span>.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* CLOSER / FINAL CTA */}
            <section className="py-24 px-6 bg-[#FDFCF8]">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-navy mb-4 tracking-tight"
                        variants={fadeInUp}
                    >
                        You&apos;re not behind.
                    </motion.h2>
                    <motion.p
                        className="text-2xl md:text-3xl text-navy/80 font-medium mb-10"
                        variants={fadeInUp}
                    >
                        You&apos;re just solving a different level of life than everyone else.
                    </motion.p>

                    <motion.p
                        className="text-lg text-gray-600 mb-10"
                        variants={fadeInUp}
                    >
                        We aren&apos;t futurists. We&apos;re parents and professionals who were tired of doing everything ourselves. We taught AI to help. It worked. Now it&apos;s yours.
                    </motion.p>

                    <motion.form
                        onSubmit={handleSubmit}
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
