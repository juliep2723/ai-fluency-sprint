/**
 * Conversion Tracking Utilities
 * 
 * This file provides helper functions for tracking conversions across
 * Facebook Pixel, TikTok Pixel, and Google Analytics.
 * 
 * All pixel IDs should be set as environment variables in Vercel:
 * - NEXT_PUBLIC_FACEBOOK_PIXEL_ID
 * - NEXT_PUBLIC_TIKTOK_PIXEL_ID
 * - NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
 */

// Product pricing mapping
export const PRODUCT_PRICES: { [key: string]: number } = {
  solo: 99,
  plus: 149,
  family: 249,
}

// Product name mapping
export const PRODUCT_NAMES: { [key: string]: string } = {
  solo: 'Sidekick Solo',
  plus: 'Sidekick Plus',
  family: 'Family Pack',
}

/**
 * Facebook Pixel Tracking
 */
declare global {
  interface Window {
    fbq?: (
      action: string,
      event: string,
      params?: {
        content_name?: string
        value?: number
        currency?: string
        content_ids?: string[]
        content_type?: string
      }
    ) => void
  }
}

/**
 * Track a Facebook Pixel event
 */
export function trackFacebookEvent(
  eventName: string,
  params?: {
    content_name?: string
    value?: number
    currency?: string
    content_ids?: string[]
    content_type?: string
  }
) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, params)
  }
}

/**
 * Track a Facebook Pixel page view
 */
export function trackFacebookPageView() {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView')
  }
}

/**
 * Track a Facebook Pixel purchase conversion
 */
export function trackFacebookPurchase(productType: string) {
  const productName = PRODUCT_NAMES[productType] || 'AI Sidekick Starter Kit'
  const value = PRODUCT_PRICES[productType] || 0

  trackFacebookEvent('Purchase', {
    content_name: productName,
    value: value,
    currency: 'USD',
    content_ids: [productType],
    content_type: 'product',
  })
}

/**
 * TikTok Pixel Tracking
 */
declare global {
  interface Window {
    ttq?: {
      track: (
        event: string,
        params?: {
          content_name?: string
          value?: number
          currency?: string
          content_id?: string
          content_type?: string
        }
      ) => void
      page: () => void
    }
  }
}

/**
 * Track a TikTok Pixel event
 */
export function trackTikTokEvent(
  eventName: string,
  params?: {
    content_name?: string
    value?: number
    currency?: string
    content_id?: string
    content_type?: string
  }
) {
  if (typeof window !== 'undefined' && window.ttq) {
    window.ttq.track(eventName, params)
  }
}

/**
 * Track a TikTok Pixel page view
 */
export function trackTikTokPageView() {
  if (typeof window !== 'undefined' && window.ttq) {
    window.ttq.page()
  }
}

/**
 * Track a TikTok Pixel purchase conversion
 */
export function trackTikTokPurchase(productType: string) {
  const productName = PRODUCT_NAMES[productType] || 'AI Sidekick Starter Kit'
  const value = PRODUCT_PRICES[productType] || 0

  trackTikTokEvent('CompletePayment', {
    content_name: productName,
    value: value,
    currency: 'USD',
    content_id: productType,
    content_type: 'product',
  })
}

/**
 * Google Analytics / Google Ads Tracking
 */
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: {
        event_category?: string
        event_label?: string
        value?: number
        currency?: string
        items?: Array<{
          item_id?: string
          item_name?: string
          price?: number
          quantity?: number
        }>
      }
    ) => void
  }
}

/**
 * Track a Google Analytics event
 */
export function trackGoogleEvent(
  eventName: string,
  params?: {
    event_category?: string
    event_label?: string
    value?: number
    currency?: string
    items?: Array<{
      item_id?: string
      item_name?: string
      price?: number
      quantity?: number
    }>
  }
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params)
  }
}

/**
 * Track a Google Analytics purchase conversion
 */
export function trackGooglePurchase(productType: string) {
  const productName = PRODUCT_NAMES[productType] || 'AI Sidekick Starter Kit'
  const value = PRODUCT_PRICES[productType] || 0

  trackGoogleEvent('purchase', {
    event_category: 'ecommerce',
    event_label: productName,
    value: value,
    currency: 'USD',
    items: [
      {
        item_id: productType,
        item_name: productName,
        price: value,
        quantity: 1,
      },
    ],
  })
}

/**
 * Track all conversion pixels at once (convenience function)
 */
export function trackAllConversions(productType: string) {
  trackFacebookPurchase(productType)
  trackTikTokPurchase(productType)
  trackGooglePurchase(productType)
}

/**
 * Track all page view pixels at once (convenience function)
 */
export function trackAllPageViews() {
  trackFacebookPageView()
  trackTikTokPageView()
  // Google Analytics page views are handled automatically by the base script
}

