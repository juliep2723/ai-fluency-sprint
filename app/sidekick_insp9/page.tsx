'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, Suspense, useEffect, useRef } from 'react'
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

function Insp9Content() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [interactionSource, setInteractionSource] = useState<string | null>(null)
    const [sliderValue, setSliderValue] = useState(0)
    const [isRevealed, setIsRevealed] = useState(false)

    const hookRef = useRef<HTMLElement>(null)
    const hasFiredScroll = useRef(false)
    const secondSectionRef = useRef<HTMLElement>(null)
    const hasFiredSecondScroll = useRef(false)

    useEffect(() => {
        const observer1 = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasFiredScroll.current) {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'scroll_past_hero', { page_source: 'sidekick_insp7' });
                }
                hasFiredScroll.current = true;
            }
        }, { threshold: 0.1 });

        const observer2 = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasFiredSecondScroll.current) {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'scroll_past_second_section', { page_source: 'sidekick_insp7' });
                }
                hasFiredSecondScroll.current = true;
            }
        }, { threshold: 0.1 });

        if (hookRef.current) observer1.observe(hookRef.current);
        if (secondSectionRef.current) observer2.observe(secondSectionRef.current);

        return () => {
            observer1.disconnect();
            observer2.disconnect();
        };
    }, []);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value)
        setSliderValue(val)
        if (val > 85) {
            setIsRevealed(true)
            setSliderValue(100)
        }
    }

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
                    source: 'sidekick_insp9',
                    formLocation,
                    interactionSource,
                    utmSource,
                    utmMedium,
                    utmCampaign,
                    utmContent
                })
            })

            if (response.ok) {
                router.push('/sidekick_insp9/thank-you')
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

    const scrollToBottomCapture = (source: string) => {
        setInteractionSource(source)
        document.getElementById('bottom-capture')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <main className="min-h-screen bg-[#FDFCF8]"> {/* Off-white paper background */}
            {/* Logo Header Bar - No navigation */}
            <div className="absolute top-0 left-0 right-0 z-50 p-4 pointer-events-none">
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

            {/* HERO SECTION - Clean Background */}
            <section id="hero-capture" className="relative flex flex-col justify-center pt-32 pb-4 px-6 overflow-hidden">
                <motion.div
                    className="relative z-10 max-w-4xl mx-auto text-center w-full"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div className="w-full max-w-3xl mx-auto mb-2 bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden" variants={fadeInUp}>
                        <div className="p-8 text-left">
                            <h2 className="text-2xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">
                                You know AI could save you hours... but what do you actually ask it?
                            </h2>
                            {isRevealed ? (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-4">
                                    <div className="relative font-mono text-lg md:text-xl text-teal p-6 bg-navy rounded-xl border-2 border-teal shadow-2xl whitespace-pre-wrap leading-relaxed group">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-white font-bold uppercase tracking-widest text-sm block">PROMPT:</span>
                                        </div>
                                        I want to use AI to make my life easier, but I don't know where to start. Ask me questions, one at a time, about what drains my energy, what repetitive tasks I hate doing, or what mental load I'm carrying today. Stop asking questions as soon as you identify 3 specific, actionable ways AI can solve my problems right now. After that, I'll ask you to help me with 1 of those problems, step-by-step, after we clarify my all the important details to help me in the most meaningful way.
                                    </div>
                                    <p className="text-2xl md:text-3xl text-navy mt-6 font-bold self-center text-center">
                                        Get all 8 High Value Prompts:
                                    </p>

                                    {/* Embedded High-Visibility Email Capture Form */}
                                    <motion.form
                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                                        onSubmit={(e) => handleSubmit(e, 'hero_top_slider_revealed')}
                                        className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto w-full mt-4 bg-white/10 p-3 rounded-2xl backdrop-blur-sm border border-white/20 shadow-2xl"
                                    >
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email for all 8"
                                            required
                                            className="flex-1 px-6 py-5 rounded-xl text-navy text-lg font-medium placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-teal/50 shadow-inner bg-gray-50 border border-gray-200"
                                        />
                                        <Button
                                            type="submit"
                                            size="lg"
                                            disabled={isSubmitting}
                                            className="bg-teal hover:bg-teal/90 text-white px-8 py-5 text-xl font-bold rounded-xl shadow-[0_4px_0_rgb(15,23,42)] hover:shadow-[0_2px_0_rgb(15,23,42)] hover:translate-y-[2px] transition-all whitespace-nowrap"
                                        >
                                            {isSubmitting ? 'Sending...' : 'Download Now'}
                                        </Button>
                                    </motion.form>
                                    <p className="text-center text-lg md:text-xl text-gray-500 font-bold tracking-wide mt-2">
                                        📄 Free PDF
                                    </p>
                                </motion.div>
                            ) : (
                                <div className="mt-10 flex justify-center">
                                    <Button
                                        onClick={() => {
                                            setIsRevealed(true)
                                            if (typeof window !== 'undefined' && (window as any).gtag) {
                                                (window as any).gtag('event', 'hero_interaction', { page_source: 'sidekick_insp9', interaction_type: 'tap_to_unlock' });
                                            }
                                        }}
                                        size="lg"
                                        className="bg-[#0F172A] hover:bg-[#1E293B] text-white border-2 border-teal/50 hover:border-teal px-4 sm:px-8 py-6 sm:py-8 text-lg sm:text-xl md:text-2xl font-bold rounded-2xl shadow-xl transition-all group w-full flex items-center justify-between sm:justify-center gap-3 h-auto whitespace-normal text-left sm:text-center shrink-0"
                                    >
                                        <span className="flex-1">Tap to unlock the Prompt</span>
                                        <span className="bg-teal text-navy w-10 h-10 rounded-full flex items-center justify-center transform group-hover:translate-x-1 transition-transform shrink-0 shadow-md">
                                            &rarr;
                                        </span>
                                    </Button>
                                </div>
                            )}
                        </div>
                    </motion.div>

                </motion.div>
            </section>

            {/* THE MENU SECTION - Scattered Papers */}
            <section ref={hookRef} className="pt-8 pb-12 px-6 bg-gray-50">
                <motion.div
                    className="max-w-5xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div
                        className="text-center mb-12"
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 inline-block relative">
                            Fix one disaster <em>today</em> with AI.
                            <svg className="absolute w-full h-4 -bottom-2 left-0 text-yellow-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="12" fill="none" />
                            </svg>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
                            Copy. Paste. Breathe easier.
                        </p>
                    </motion.div>

                    <motion.div className="grid md:grid-cols-2 gap-8 relative" variants={staggerContainer}>
                        {/* 1 */}
                        <motion.div variants={scaleIn} className="md:transform md:-rotate-1 flex">
                            <Card className="p-8 shadow-lg border-2 border-navy bg-white w-full rounded-tr-[30px] rounded-bl-[30px]">
                                <div className="text-3xl mb-4">💬</div>
                                <h3 className="text-2xl font-bold text-navy mb-3">The &quot;Communication Relief&quot;</h3>
                                <p className="text-lg text-gray-800"><span className="font-bold">Prompt:</span> Vent about a difficult person. AI gives you the exact script to handle them. <button onClick={() => { if (typeof window !== 'undefined' && (window as any).gtag) { (window as any).gtag('event', 'anchor_click_menu_communication', { page_source: 'sidekick_insp9' }); } scrollToBottomCapture('menu_item_1'); }} className="text-teal hover:text-teal/80 hover:underline font-bold ml-1 transition-colors">Get the prompt</button></p>
                            </Card>
                        </motion.div>

                        {/* 2 */}
                        <motion.div variants={scaleIn} className="md:transform md:rotate-1 md:mt-12 flex">
                            <Card className="p-8 shadow-lg border-2 border-navy bg-white w-full rounded-tl-[30px] rounded-br-[30px]">
                                <div className="text-3xl mb-4">📝</div>
                                <h3 className="text-2xl font-bold text-navy mb-3">Identify Home/Life Hacks</h3>
                                <p className="text-lg text-gray-800"><span className="font-bold">Prompt:</span> Discover how AI can take over meal planning, scheduling, and family coordination specifically for your setup. <button onClick={() => { if (typeof window !== 'undefined' && (window as any).gtag) { (window as any).gtag('event', 'anchor_click_menu_home_hacks', { page_source: 'sidekick_insp9' }); } scrollToBottomCapture('menu_item_2'); }} className="text-teal hover:text-teal/80 hover:underline font-bold ml-1 transition-colors">Get the prompt</button></p>
                            </Card>
                        </motion.div>

                        {/* 3 */}
                        <motion.div variants={scaleIn} className="md:transform md:-rotate-1 flex">
                            <Card className="p-8 shadow-lg border-2 border-navy bg-white w-full rounded-xl">
                                <div className="text-3xl mb-4">💡</div>
                                <h3 className="text-2xl font-bold text-navy mb-3">The &quot;Problem-Solver&quot;</h3>
                                <p className="text-lg text-gray-800"><span className="font-bold">Prompt:</span> Stuck on a project or life problem? Feed AI half-baked thoughts and get brilliant options. <button onClick={() => { if (typeof window !== 'undefined' && (window as any).gtag) { (window as any).gtag('event', 'anchor_click_menu_problem_solver', { page_source: 'sidekick_insp9' }); } scrollToBottomCapture('menu_item_3'); }} className="text-teal hover:text-teal/80 hover:underline font-bold ml-1 transition-colors">Get the prompt</button></p>
                            </Card>
                        </motion.div>

                        {/* 4 */}
                        <motion.div variants={scaleIn} className="md:transform md:rotate-2 md:mt-12 flex">
                            <Card className="p-8 shadow-lg border-2 border-navy bg-white w-full rounded-tr-[30px]">
                                <div className="text-3xl mb-4">⏱️</div>
                                <h3 className="text-2xl font-bold text-navy mb-3">The &quot;Friction Finder&quot;</h3>
                                <p className="text-lg text-gray-800"><span className="font-bold">Prompt:</span> Tell AI your most annoying weekly chore. It gives you an automation or shortcut to eliminate it. <button onClick={() => { if (typeof window !== 'undefined' && (window as any).gtag) { (window as any).gtag('event', 'anchor_click_menu_friction_finder', { page_source: 'sidekick_insp9' }); } scrollToBottomCapture('menu_item_4'); }} className="text-teal hover:text-teal/80 hover:underline font-bold ml-1 transition-colors">Get the prompt</button></p>
                            </Card>
                        </motion.div>
                    </motion.div>

                    {/* CTA Button after menu */}
                    <motion.div
                        className="text-center mt-12"
                        variants={fadeInUp}
                    >
                        <Button
                            onClick={() => {
                                if (typeof window !== 'undefined' && (window as any).gtag) {
                                    (window as any).gtag('event', 'anchor_click', { page_source: 'sidekick_insp9' });
                                }
                                scrollToCapture('menu_button_bottom')
                            }}
                            size="lg"
                            className="bg-teal hover:bg-teal/90 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all"
                        >
                            Grab The Prompts →
                        </Button>
                    </motion.div>
                </motion.div>
            </section>

            {/* FINAL CTA SECTION */}
            <section ref={secondSectionRef} id="bottom-capture" className="py-12 px-6 bg-[#FDFCF8]">
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
                        Get all 8 High Value Prompts
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-600 mb-10"
                        variants={fadeInUp}
                    >
                        You don&apos;t need a &quot;productivity system.&quot; You need a Fixer. You need the specific words to say to make the problem go away so you can go back to eating cheese in peace.
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
                            placeholder="Enter email for the pdf"
                            required
                            className="flex-1 px-6 py-4 rounded-xl text-navy text-lg focus:outline-none focus:ring-2 focus:ring-teal"
                        />
                        <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="bg-navy hover:bg-navy/90 text-white px-10 py-4 text-xl font-bold rounded-xl transition-all whitespace-nowrap"
                        >
                            {isSubmitting ? 'Sending...' : 'Download Now'}
                        </Button>
                    </motion.form>

                    <motion.p
                        className="text-lg md:text-xl text-gray-500 font-bold"
                        variants={fadeInUp}
                    >
                        📄 Free PDF
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

export default function SidekickInsp9Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Insp9Content />
        </Suspense>
    )
}
