'use client'

import Image from 'next/image'
import Link from 'next/link'
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

export default function ThankYouPage() {
    return (
        <main className="min-h-screen flex flex-col">
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

            {/* Main Content */}
            <section className="flex-1 flex items-center justify-center py-24 px-6 bg-navy text-white pt-28">
                <motion.div
                    className="max-w-2xl mx-auto text-center"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {/* Success checkmark */}
                    <motion.div
                        className="flex justify-center mb-8"
                        variants={fadeInUp}
                    >
                        <div className="w-20 h-20 bg-teal rounded-full flex items-center justify-center">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </motion.div>

                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-6"
                        variants={fadeInUp}
                    >
                        You&apos;re In! 🎉
                    </motion.h1>

                    <motion.p
                        className="text-xl text-gray-300 mb-8 leading-relaxed"
                        variants={fadeInUp}
                    >
                        Your <span className="text-teal font-semibold">&quot;Cheat Codes For Real Life&quot;</span> PDF is ready to download. Go ahead—your passive-aggressive genius era starts now.
                    </motion.p>

                    {/* Download Button */}
                    <motion.div variants={fadeInUp}>
                        <a href="/downloads/cheat-codes-for-real-life.pdf" download>
                            <Button
                                size="lg"
                                className="bg-teal hover:bg-teal/90 hover:scale-105 text-white px-12 py-6 text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                Download Your Cheat Sheet (PDF)
                            </Button>
                        </a>
                    </motion.div>



                    {/* What's Next Section */}
                    <motion.div
                        className="mt-16 p-8 bg-white/10 rounded-xl"
                        variants={fadeInUp}
                    >
                        <h2 className="text-2xl font-bold mb-4">What&apos;s Next?</h2>
                        <p className="text-lg text-gray-300 mb-4">
                            Want more than just one cheat sheet? The full <strong>&quot;Real Life&quot; AI Rescue System</strong> has 50+ prompts covering everything from doctor visit prep to neighbor drama scripts.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 text-base text-gray-200 mb-6 font-medium">
                            <div className="flex items-center justify-center gap-2"><span className="text-xl">🗓️</span> 7 Days</div>
                            <div className="flex items-center justify-center gap-2"><span className="text-xl">💡</span> 1 Video/Day</div>
                            <div className="flex items-center justify-center gap-2"><span className="text-xl">🧠</span> Zero Overwhelm</div>
                            <div className="flex items-center justify-center gap-2"><span className="text-xl">☕</span> Watch w/ Coffee</div>
                        </div>

                        <p className="text-teal font-semibold">
                            You&apos;re on the waitlist. We&apos;ll notify you when it&apos;s ready.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Minimal Footer */}
            <footer className="bg-navy text-white py-8 px-6 border-t border-white/10">
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
