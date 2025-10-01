"use client"
import dynamic from 'next/dynamic'

// Load the client-only CookieConsent component dynamically to avoid SSR issues
const CookieConsent = dynamic(() => import('@/components/CookieConsent'), { ssr: false })

export default function CookieConsentClient() {
  return <CookieConsent />
}


