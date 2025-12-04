# Conversion Tracking Setup Guide

## Overview

This guide explains how to set up conversion tracking for your AI Strategy LLC website. The tracking system is already implemented in the code—you just need to:

1. **Get your pixel IDs** from Facebook, TikTok, and Google
2. **Add them as environment variables** in Vercel
3. **Verify everything is working**

Once set up, the system will automatically:
- Track page views on `/sidekick` (for retargeting audiences)
- Track purchases with correct values ($99/$149/$249) and product names
- Pass campaign attribution data (UTM parameters) to the ad platforms

---

## Part A: Getting Your Pixel IDs

**Conceptual Overview:** Ad platforms use "pixels" (small pieces of JavaScript code) to track what happens on your website. Each pixel has a unique ID that tells the platform "this is Julie's website." Think of it like a phone number—when someone visits your site, the pixel "calls home" to Facebook/TikTok/Google and reports what happened. This section walks you through creating these tracking accounts and finding your unique IDs.

### 1. Facebook Pixel

**What it does:** Tracks visitors and conversions for Facebook/Instagram ads.

**How to get your Pixel ID:**

1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager2)
2. Click **"Connect Data Sources"** → **"Web"** → **"Facebook Pixel"**
3. If you don't have a pixel yet:
   - Click **"Create a Pixel"**
   - Name it (e.g., "AI Strategy LLC Website")
   - Click **"Create"**
4. Your Pixel ID is a 15-16 digit number (e.g., `123456789012345`)
5. Copy this number—you'll need it for the environment variable

**Note:** Facebook will show you installation code, but you don't need it—we've already implemented it in the website.

---

### 2. TikTok Pixel

**What it does:** Tracks visitors and conversions for TikTok ads.

**How to get your Pixel ID:**

1. Go to [TikTok Ads Manager](https://ads.tiktok.com/)
2. Navigate to **"Assets"** → **"Events"** (or **"Pixels"** in some accounts)
3. Click **"Create Pixel"** if you don't have one
4. Name it (e.g., "AI Strategy LLC")
5. Your Pixel ID is a long string (e.g., `C1234567890ABCDEF1234567890ABCDEF`)
6. Copy this ID—you'll need it for the environment variable

**Note:** TikTok may show you installation code, but you don't need it—we've already implemented it.

---

### 3. Google Analytics / Google Ads

**What it does:** Tracks visitors and conversions for Google Ads campaigns and general website analytics.

**How to get your Measurement ID:**

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property (or use an existing one) for your website
3. Go to **Admin** → **Data Streams** → **Web**
4. Create a new stream or select an existing one
5. Your Measurement ID looks like `G-XXXXXXXXXX` (starts with "G-")
6. Copy this ID—you'll need it for the environment variable

**For Google Ads specifically:**
- If you're running Google Ads campaigns, you can link your Google Analytics property to Google Ads
- The same Measurement ID works for both

---

## Part B: Setting Up Environment Variables in Vercel

**Conceptual Overview:** Environment variables are a secure way to store sensitive information (like your pixel IDs) without hardcoding them into your website's public code. They live on your hosting platform (Vercel) and get injected into your site when it builds. The `NEXT_PUBLIC_` prefix tells Next.js "it's okay to expose these to the browser" (necessary for pixels, which run in visitors' browsers). This section shows you where to paste those pixel IDs you just collected.

### Step-by-Step Instructions

1. **Go to your Vercel dashboard:**
   - Visit [vercel.com](https://vercel.com) and log in
   - Select your project: `ai-fluency-sprint` (or whatever you named it)

2. **Navigate to Settings:**
   - Click on your project
   - Go to **Settings** → **Environment Variables**

3. **Add each pixel ID as an environment variable:**

   Click **"Add New"** for each of these:

   | Variable Name | Value | Example |
   |--------------|-------|---------|
   | `NEXT_PUBLIC_FACEBOOK_PIXEL_ID` | Your Facebook Pixel ID | `123456789012345` |
   | `NEXT_PUBLIC_TIKTOK_PIXEL_ID` | Your TikTok Pixel ID | `C1234567890ABCDEF1234567890ABCDEF` |
   | `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` | Your Google Analytics Measurement ID | `G-XXXXXXXXXX` |

   **Important:**
   - Variable names must match exactly (case-sensitive)
   - Use the `NEXT_PUBLIC_` prefix (required for Next.js to expose these to the browser)
   - Don't add quotes around the values

4. **Set environment scope:**
   - For each variable, select **Production**, **Preview**, and **Development**
   - This ensures tracking works in all environments

5. **Redeploy your site:**
   - After adding the variables, go to **Deployments**
   - Click the **"..."** menu on your latest deployment
   - Select **"Redeploy"**
   - Or push a new commit to trigger a deployment

---

## Part C: How the Tracking Works

**Conceptual Overview:** Your tracking system monitors two key moments: (1) when someone **lands** on your product page (builds your retargeting audience), and (2) when someone **completes a purchase** (tells ad platforms which ads actually make money). The pixels automatically send event data—like "Purchase, $149, Sidekick Plus"—back to the ad platforms so they can measure performance and optimize who sees your ads. This happens invisibly to your customers; they just see your normal website.

### What Gets Tracked

#### 1. Page Views (Automatic)

When someone visits `/sidekick`, the system automatically fires:
- **Facebook Pixel:** `PageView` event
- **TikTok Pixel:** `page()` event
- **Google Analytics:** Automatic page view (handled by base script)

**Why this matters:** These page views build your retargeting audiences. You can create audiences like "People who visited /sidekick but didn't purchase" and show them ads later.

#### 2. Purchase Conversions (When Success Modal Appears)

When a customer completes a purchase and the success modal appears, the system fires:

**Facebook Pixel:**
```javascript
fbq('track', 'Purchase', {
  content_name: 'Sidekick Solo',  // or Plus/Family Pack
  value: 99,                       // or 149/249
  currency: 'USD',
  content_ids: ['solo'],           // or ['plus']/['family']
  content_type: 'product'
})
```

**TikTok Pixel:**
```javascript
ttq.track('CompletePayment', {
  content_name: 'Sidekick Solo',
  value: 99,
  currency: 'USD',
  content_id: 'solo',
  content_type: 'product'
})
```

**Google Analytics:**
```javascript
gtag('event', 'purchase', {
  event_category: 'ecommerce',
  event_label: 'Sidekick Solo',
  value: 99,
  currency: 'USD',
  items: [{
    item_id: 'solo',
    item_name: 'Sidekick Solo',
    price: 99,
    quantity: 1
  }]
})
```

**Product Mapping:**
- `solo` → Sidekick Solo ($99)
- `plus` → Sidekick Plus ($149)
- `family` → Family Pack ($249)

---

### Attribution & Campaign Tracking

The success URL structure supports UTM parameters for campaign tracking:

```
/sidekick?success=true&product=plus&utm_source=facebook&utm_campaign=holiday2024&utm_content=ad_v1
```

**How it works:**
- When someone clicks your ad, the ad platform automatically adds UTM parameters
- These parameters are preserved through the Stripe checkout flow
- When they return to your site, the success modal fires conversion events
- The ad platforms use their own cookies + UTM data to attribute the conversion

**Best practice:** In your ad campaigns, make sure your Stripe Checkout URLs include UTM parameters, or use the ad platform's built-in tracking (which handles this automatically).

---

## Part D: Verifying Everything Works

**Conceptual Overview:** Before spending money on ads, you need to confirm your tracking is actually working. This is like checking that your phone is plugged in before expecting calls. Browser extensions (Pixel Helpers) act like "tracking detectors"—they tell you if pixels are firing and what data they're sending. This section walks you through testing in a controlled way so you know everything works before real customers arrive.

### 1. Check Environment Variables Are Loaded

1. Deploy your site with the environment variables set
2. Visit your live site: `https://aistrategyllc.com/sidekick`
3. Open browser DevTools (F12 or right-click → Inspect)
4. Go to **Console** tab
5. Type: `window.fbq` (for Facebook) or `window.ttq` (for TikTok) or `window.gtag` (for Google)
6. If you see a function, the pixel is loaded ✅
7. If you see `undefined`, check:
   - Environment variables are set correctly in Vercel
   - You've redeployed after adding variables
   - Variable names match exactly (case-sensitive)

### 2. Test Page View Tracking

**Facebook:**
1. Install [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) Chrome extension
2. Visit `/sidekick` on your live site
3. The extension should show a green checkmark and "PageView" event

**TikTok:**
1. Install [TikTok Pixel Helper](https://chrome.google.com/webstore/detail/tiktok-pixel-helper/ckjapjfkhcahhjgkplfkaicpafjfebfe) Chrome extension
2. Visit `/sidekick` on your live site
3. The extension should show pixel events

**Google Analytics:**
1. Go to Google Analytics → **Reports** → **Realtime**
2. Visit `/sidekick` on your live site
3. You should see yourself appear in the realtime report within 30 seconds

### 3. Test Purchase Conversion Tracking

**Important:** Only test this with a real purchase or use test mode if available.

1. Make a test purchase (or use Stripe test mode)
2. When the success modal appears, check:

**Facebook:**
- Open Facebook Pixel Helper
- You should see a "Purchase" event with the correct value

**TikTok:**
- Open TikTok Pixel Helper
- You should see a "CompletePayment" event

**Google Analytics:**
- Go to **Reports** → **Realtime** → **Events**
- You should see a "purchase" event

**In the browser console:**
- You can also check by opening DevTools → Network tab
- Filter for "facebook.com/tr" or "analytics.tiktok.com" or "google-analytics.com"
- You should see requests being sent with the purchase data

---

## Part E: Understanding Landing Page Visits vs. Conversions

**Conceptual Overview:** Not everyone who clicks your ad will buy—some browse, some comparison shop, some get distracted. Tracking both "who visited" and "who purchased" tells you two different stories. **Page views** show you the top of your funnel (traffic volume, interest), while **conversions** show you the bottom (actual revenue). Ad platforms need both metrics: page views build retargeting audiences, and conversions teach the algorithm which audiences actually buy. This section clarifies the difference so you understand your ad reports.

### Landing Page Visits (Page Views)

**What it is:** Someone clicks your ad and lands on `/sidekick`

**What gets tracked:**
- Facebook: `PageView` event
- TikTok: `page()` event
- Google Analytics: Automatic page view

**Why it matters:**
- **Retargeting:** Build audiences of people who visited but didn't buy
- **Optimization:** See which ads drive the most traffic
- **Attribution:** Understand the full customer journey

### Conversions (Purchases)

**What it is:** Someone completes a purchase and the success modal appears

**What gets tracked:**
- Facebook: `Purchase` event with value and product info
- TikTok: `CompletePayment` event with value and product info
- Google Analytics: `purchase` event with ecommerce data

**Why it matters:**
- **ROAS (Return on Ad Spend):** Calculate how much revenue each ad generated
- **Optimization:** Tell the ad platforms which ads actually drive sales (not just clicks)
- **Budget allocation:** Invest more in campaigns that convert

### The Difference

- **Landing page visits** = "How many people clicked my ad?"
- **Conversions** = "How many people actually bought something?"

Ad platforms use both metrics:
- **Click-through rate (CTR)** = clicks / impressions (from landing page visits)
- **Conversion rate** = purchases / clicks (from conversion tracking)
- **ROAS** = revenue / ad spend (from conversion values)

---

## Part F: Campaign Setup Best Practices

**Conceptual Overview:** Once your pixels are installed, you need to tell each ad platform "use this conversion data to optimize my campaigns." This means selecting "Purchase" (or "CompletePayment" for TikTok) as your optimization goal when creating campaigns. The platforms will then use machine learning to show your ads to people who are most likely to buy, rather than just people who might click. This section guides you through connecting your tracking to your campaign settings so the platforms work smarter, not just harder.

### 1. Facebook/Instagram Ads

**In Facebook Ads Manager:**
1. When creating a campaign, select **"Conversions"** as the optimization goal
2. Select **"Purchase"** as the conversion event
3. Facebook will automatically optimize to show your ads to people most likely to purchase
4. Use the **"Purchase"** event for reporting and optimization

**Retargeting:**
- Create a custom audience: "People who visited /sidekick in the last 30 days"
- Create a lookalike audience based on purchasers
- Exclude purchasers from your prospecting campaigns

### 2. TikTok Ads

**In TikTok Ads Manager:**
1. When creating a campaign, select **"Complete Payment"** as the optimization event
2. TikTok will optimize to show ads to people likely to complete purchases
3. Use the **"CompletePayment"** event for reporting

**Retargeting:**
- Create a custom audience: "Website visitors" (people who triggered the pixel)
- Create a lookalike audience based on purchasers

### 3. Google Ads

**In Google Ads:**
1. Link your Google Analytics property to Google Ads
2. Import the **"purchase"** event as a conversion action
3. Set the conversion value to use the actual purchase amount
4. Use this conversion for campaign optimization

**Retargeting:**
- Create a remarketing audience in Google Analytics: "Users who visited /sidekick"
- Use this audience in Google Ads campaigns

---

## Part G: Troubleshooting

**Conceptual Overview:** Tracking can fail for many reasons: typos in environment variables, ad blockers, browser privacy settings, or simple timing delays in ad platform reporting. Most issues fall into three buckets: (1) pixels not loading at all (setup problem), (2) pixels loading but not firing events (code problem), or (3) events firing but not showing in reports (reporting delay or attribution issue). This section walks you through diagnosing where things break so you can fix them systematically.

### Pixels Not Loading

**Symptoms:** Pixel Helper shows no events, or `window.fbq` is undefined

**Solutions:**
1. Check environment variables in Vercel are set correctly
2. Verify variable names match exactly (case-sensitive)
3. Redeploy your site after adding variables
4. Check browser console for errors
5. Try incognito mode (to rule out ad blockers)

### Conversions Not Firing

**Symptoms:** Page views work, but purchases don't show up

**Solutions:**
1. Verify the success modal is appearing (check URL has `?success=true&product=...`)
2. Check browser console for JavaScript errors
3. Verify product type is one of: `solo`, `plus`, `family`
4. Check Pixel Helper during the success modal (not just on page load)
5. Wait 24-48 hours for data to appear in ad platform dashboards (there's often a delay)

### Wrong Purchase Values

**Symptoms:** Conversions show up but with wrong dollar amounts

**Solutions:**
1. Check the `PRODUCT_PRICES` mapping in `lib/tracking.ts`
2. Verify product types match: `solo` = $99, `plus` = $149, `family` = $249
3. Check that the URL parameter `product=solo` (not `product=Sidekick Solo`)

### Attribution Issues

**Symptoms:** Conversions show up but aren't attributed to the right campaigns

**Solutions:**
1. Ensure UTM parameters are being passed through Stripe checkout
2. Check that ad platforms are using their own tracking (Facebook/TikTok/Google handle this automatically)
3. Verify cookies aren't being blocked (Safari ITP, privacy settings)
4. Check the attribution window settings in your ad platform (default is usually 7 days)

---

## Part H: Code Reference

**Conceptual Overview:** This section documents the technical implementation for future reference. The tracking system is built in four layers: (1) utility functions that format data for each platform (`lib/tracking.ts`), (2) base pixel scripts that load on every page (`components/PixelScripts.tsx`), (3) the root layout that includes those scripts (`app/layout.tsx`), and (4) the product page that calls tracking functions at the right moments (`app/sidekick/page.tsx`). You don't need to understand this to use the tracking, but it's here if you need to customize or debug the code later.

### Files Modified

| File | Purpose |
|------|---------|
| `lib/tracking.ts` | Helper functions for all tracking pixels |
| `components/PixelScripts.tsx` | Base pixel scripts loaded on every page |
| `app/layout.tsx` | Includes PixelScripts component |
| `app/sidekick/page.tsx` | Fires page view and conversion events |

### Key Functions

**In `lib/tracking.ts`:**
- `trackAllConversions(productType)` - Fires purchase events to all pixels
- `trackAllPageViews()` - Fires page view events to all pixels
- Individual functions for each platform if you need granular control

**Usage in components:**
```typescript
import { trackAllConversions, trackAllPageViews } from '@/lib/tracking'

// Track page view on component mount
useEffect(() => {
  trackAllPageViews()
}, [])

// Track conversion when purchase completes
useEffect(() => {
  trackAllConversions(productType) // 'solo', 'plus', or 'family'
}, [productType])
```

---

## Part I: Next Steps

**Conceptual Overview:** This is your action checklist—the sequence of steps to go from "tracking code installed" to "ads running with full conversion tracking." Follow these in order: first get tracking working on your site, then verify it's collecting data correctly, then configure your ad campaigns to use that data for optimization. Each step builds on the previous one, so don't skip ahead (e.g., don't start running ads before verifying your pixels work).

1. ✅ Get your pixel IDs from Facebook, TikTok, and Google
2. ✅ Add them as environment variables in Vercel
3. ✅ Redeploy your site
4. ✅ Verify pixels are loading (use browser extensions)
5. ✅ Make a test purchase and verify conversions fire
6. ✅ Set up conversion tracking in your ad platforms
7. ✅ Create retargeting audiences
8. ✅ Start running ads and monitor conversion data

---

## Support & Questions

If you run into issues:
1. Check the troubleshooting section above
2. Verify environment variables are set correctly
3. Check browser console for errors
4. Use Pixel Helper extensions to debug
5. Wait 24-48 hours for data to appear in ad platform dashboards

The tracking system is designed to work automatically once the pixel IDs are set. Most issues are related to:
- Missing or incorrect environment variables
- Not redeploying after adding variables
- Ad blockers or privacy settings blocking pixels
- Timing delays in ad platform reporting

---

**Last Updated:** December 2024  
**Website:** aistrategyllc.com  
**Repo:** github.com/juliep2723/ai-fluency-sprint

