import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gift Shopping Prompt | AI Strategy',
  description: 'Use this AI prompt to brainstorm thoughtful, personalized gift ideas.',
}

export default function GiftPromptLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}

