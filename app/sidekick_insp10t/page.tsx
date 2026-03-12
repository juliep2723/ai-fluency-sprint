'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, Suspense, useEffect, useRef } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'

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

const PROMPT_TEXT = "My toddler just learned the F-word and we're going into church. Give me an adorable, believable cover story I can deploy instantly if he says it, acting as a Child Psychologist and a PR Crisis Manager."
const PAGE_SOURCE = 'sidekick_insp10t'

function Insp10tContent() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [email, setEmail] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [interactionSource, setInteractionSource] = useState<string | null>(null)
    const [isRevealed, setIsRevealed] = useState(false)

    const hookRef = useRef<HTMLElement>(null)
    const hasFiredScroll = useRef(false)
    const secondSectionRef = useRef<HTMLElement>(null)
    const hasFiredSecondScroll = useRef(false)

    useEffect(() => {
        const observer1 = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasFiredScroll.current) {
                (window as any).gtag?.('event', 'scroll_past_hero', { page_source: PAGE_SOURCE });
                hasFiredScroll.current = true;
            }
        }, { threshold: 0.1 });

        const observer2 = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasFiredSecondScroll.current) {
                (window as any).gtag?.('event', 'scroll_past_second_section', { page_source: PAGE_SOURCE });
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

    useEffect(() => {
        const thresholds = [2, 4, 6, 8, 10, 12, 15, 20, 30];
        const fired = new Set<number>();
        let seconds = 0;
        let isVisible = !document.hidden;

        const handleVisibility = () => { isVisible = !document.hidden; };
        document.addEventListener('visibilitychange', handleVisibility);

        const timer = setInterval(() => {
            if (!isVisible) return;
            seconds++;
            for (const t of thresholds) {
                if (seconds >= t && !fired.has(t)) {
                    fired.add(t);
                    (window as any).gtag?.('event', 'engagement_milestone', {
                        seconds_engaged: t,
                        page_source: PAGE_SOURCE
                    });
                }
            }
            if (fired.size === thresholds.length) clearInterval(timer);
        }, 1000);

        return () => {
            clearInterval(timer);
            document.removeEventListener('visibilitychange', handleVisibility);
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent, formLocation: string) => {
        e.preventDefault()
        if (!email || isSubmitting) return

        setIsSubmitting(true)
        try {
            const response = await fetch('/api/capture-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    source: PAGE_SOURCE,
                    formLocation,
                    interactionSource,
                    utmSource: searchParams.get('utm_source'),
                    utmMedium: searchParams.get('utm_medium'),
                    utmCampaign: searchParams.get('utm_campaign'),
                    utmContent: searchParams.get('utm_content')
                })
            })

            if (response.ok) {
                router.push(`/${PAGE_SOURCE}/thank-you`)
            }
        } catch (error) {
            console.error('Error:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <main className="min-h-screen bg-[#FDFCF8]">
            {/* Logo Header */}
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

            {/* HERO */}
            <section className="relative flex flex-col justify-center pt-32 pb-4 px-6 overflow-hidden">
                <motion.div
                    className="relative z-10 max-w-4xl mx-auto text-center w-full"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div className="w-full max-w-3xl mx-auto mb-2 bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden" variants={fadeInUp}>
                        <div className="p-8 text-left">
                            <h2 className="text-2xl md:text-4xl font-extrabold text-navy mb-6 leading-tight">
                                Your 4-year-old just learned the F-word. Church is in 30 seconds...
                            </h2>
                            {isRevealed ? (
                                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-4">
                                    <div className="relative font-mono text-base md:text-lg text-teal p-6 bg-navy rounded-xl border-2 border-teal shadow-2xl whitespace-pre-wrap leading-relaxed">
                                        <span className="text-white font-bold uppercase tracking-widest text-sm block mb-3">Copy and Paste into ChatGPT:</span>
                                        My toddler just learned the F-word and we&apos;re going into church. Give me an adorable, believable cover story I can deploy instantly if he says it, acting as a Child Psychologist and a PR Crisis Manager.
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="mt-10 flex justify-center">
                                    <Button
                                        onClick={() => {
                                            setIsRevealed(true);
                                            (window as any).gtag?.('event', 'hero_interaction', { page_source: PAGE_SOURCE, interaction_type: 'tap_to_unlock' });
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

            {/* SECTION 2 — Conversation Cards */}
            <section ref={hookRef} className="pt-8 pb-12 px-6 bg-gray-50">
                <motion.div
                    className="max-w-5xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.div className="text-center mb-12" variants={fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2 inline-block relative">
                            Meanwhile, in other crises...
                            <svg className="absolute w-full h-4 -bottom-2 left-0 text-yellow-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="12" fill="none" />
                            </svg>
                        </h2>
                    </motion.div>

                    <motion.div className="grid md:grid-cols-2 gap-8 relative" variants={staggerContainer}>
                        {/* Card 1: The Topic Changer */}
                        <motion.div variants={scaleIn} className="md:transform md:-rotate-1 flex">
                            <Card className="p-6 shadow-lg border-2 border-navy bg-white w-full rounded-tr-[30px] rounded-bl-[30px]">
                                <h3 className="text-xl font-bold text-navy mb-4">🍽️ The Topic Changer</h3>
                                <div className="space-y-3">
                                    <div className="bg-teal/10 rounded-xl p-4 border border-teal/20">
                                        <p className="text-sm font-bold text-teal mb-2 uppercase tracking-wider">You, panicking:</p>
                                        <p className="text-gray-800 text-base leading-relaxed">
                                            My brother is three eggnogs deep at dinner and just started a sentence with &quot;You know what the real problem is?&quot; <strong>I need an emergency topic change he won&apos;t notice.</strong>
                                        </p>
                                    </div>
                                    <div className="bg-slate-100 rounded-xl p-4 border-l-4 border-navy">
                                        <p className="text-sm font-bold text-teal mb-2 uppercase tracking-wider">AI, unbothered:</p>
                                        <p className="text-gray-800 text-base leading-relaxed">
                                            Try saying, <strong>&quot;Wait—stop. Does this gravy taste like soap to you?&quot;</strong> Nothing kills a political rant faster than the fear of poisoned food.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Card 2: Midnight Dating Help */}
                        <motion.div variants={scaleIn} className="md:transform md:rotate-1 md:mt-12 flex">
                            <Card className="p-6 shadow-lg border-2 border-navy bg-white w-full rounded-tl-[30px] rounded-br-[30px]">
                                <h3 className="text-xl font-bold text-navy mb-4">📱 Midnight Dating Help</h3>
                                <div className="space-y-3">
                                    <div className="bg-teal/10 rounded-xl p-4 border border-teal/20">
                                        <p className="text-sm font-bold text-teal mb-2 uppercase tracking-wider">You, at 2am:</p>
                                        <p className="text-gray-800 text-base leading-relaxed">
                                            My ex just texted &quot;hey&quot; at midnight. I&apos;m wondering if it&apos;s a meaningful hey, a bored hey, or a drunk hey. You are a Dating Coach and a Statistician. <strong>What are the odds this is destiny vs. Wi-Fi and whiskey?</strong>
                                        </p>
                                    </div>
                                    <div className="bg-slate-100 rounded-xl p-4 border-l-4 border-navy">
                                        <p className="text-sm font-bold text-teal mb-2 uppercase tracking-wider">AI, not judging:</p>
                                        <p className="text-gray-800 text-base leading-relaxed">
                                            98% chance: Boredom. 1%: Mild regret. 1%: Fat fingers. <strong>Keep your dignity — don&apos;t respond at all.</strong>
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* BOTTOM — Email Capture */}
            <section ref={secondSectionRef} id="bottom-capture" className="py-12 px-6 bg-[#FDFCF8]">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-navy mb-4 tracking-tight"
                        variants={fadeInUp}
                    >
                        7 more. At least one will hit close to home...
                    </motion.h2>

                    <motion.p
                        className="text-lg text-gray-600 mb-8"
                        variants={fadeInUp}
                    >
                        Enter your email and return to your regularly scheduled chaos.
                    </motion.p>

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
                            {isSubmitting ? 'Sending...' : 'Send Me the PDF'}
                        </Button>
                    </motion.form>

                    <motion.p
                        className="text-lg md:text-xl text-gray-500 font-bold"
                        variants={fadeInUp}
                    >
                        📄 Free. No spam. You already have enough problems.
                    </motion.p>
                </motion.div>
            </section>

            {/* Footer */}
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

export default function SidekickInsp10tPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Insp10tContent />
        </Suspense>
    )
}
