import type { Metadata } from "next";
import Script from 'next/script'

export const metadata: Metadata = {
    title: "Test Page",
    description: "Internal test page — no analytics tracking",
};

export default function TestLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
    return (
        <>
            <Script
                id="disable-all-tracking"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        ${gaId ? `window['ga-disable-${gaId}'] = true;` : ''}
                        window.gtag = function() {};
                        window.dataLayer = [];
                        window.fbq = function() {};
                        window.ttq = { page: function(){}, track: function(){}, load: function(){} };
                    `
                }}
            />
            {children}
        </>
    )
}
