# Stripe Integration Setup

## To Complete Stripe Integration:

### 1. Get Your Stripe Keys
- Log into your Stripe Dashboard
- Get your publishable key and secret key
- Add to `.env.local`:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
```

### 2. Create Product in Stripe
- Go to Products in Stripe Dashboard
- Create new product: "Executive AI Fluency Sprint"
- Set price: $1,499
- Copy the price ID

### 3. Update the Story Page
Replace the `handleStripeCheckout` function in `/app/story/page.tsx` with:

```typescript
const handleStripeCheckout = async () => {
  const response = await fetch('/api/checkout', {
    method: 'POST',
  })
  const { url } = await response.json()
  window.location.href = url
}
```

### 4. Create API Route
Create `/app/api/checkout/route.ts`:

```typescript
import Stripe from 'stripe'
import { NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_YOUR_PRICE_ID', // Replace with your price ID
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/story`,
  })

  return NextResponse.json({ url: session.url })
}
```

### 5. Create Success Page
Create `/app/success/page.tsx` for post-payment confirmation.

### 6. Test with Stripe Test Card
- Card number: 4242 4242 4242 4242
- Any future expiry date
- Any 3-digit CVC
