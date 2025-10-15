import Stripe from 'stripe'
import { headers } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: NextRequest) {
  const body = await req.text()
  const headersList = await headers()
  const signature = headersList.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session
      
      // Send welcome email
      await sendWelcomeEmail(session)
      
      break
    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  return NextResponse.json({ received: true })
}

async function sendWelcomeEmail(session: Stripe.Checkout.Session) {
  // Get customer details
  const customerEmail = session.customer_email || session.customer_details?.email
  const customerName = session.customer_details?.name || 'there'
  
  if (!customerEmail) {
    console.error('No customer email found')
    return
  }

  // Option A: Use a service like SendGrid, Postmark, or Resend
  // Example with Resend (recommended for Next.js):
  /*
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  await resend.emails.send({
    from: 'AI Strategy <michele@aistrategyllc.com>',
    to: customerEmail,
    subject: 'Welcome to Your AI Fluency Journey!',
    html: `
      <h1>Welcome ${customerName}!</h1>
      <p>Thank you for joining the Executive AI Fluency Sprint.</p>
      <p>Here's what happens next:</p>
      <ul>
        <li>Within 24 hours, we'll reach out to schedule your first session</li>
        <li>You'll receive a brief questionnaire to help us tailor your experience</li>
        <li>We'll send calendar invitations for all your sessions</li>
      </ul>
      <p>If you have any immediate questions, reply to this email or reach out to michele@aistrategyllc.com</p>
      <p>Looking forward to partnering with you!</p>
      <p>Michele & Julie</p>
    `
  })
  */
  
  // Option B: Log for now and handle manually
  console.log('New purchase:', {
    email: customerEmail,
    name: customerName,
    sessionId: session.id,
    timestamp: new Date().toISOString()
  })
}
