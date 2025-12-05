import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PixelScripts from "@/components/PixelScripts";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Executive AI Fluency Sprint | From AI Curious to AI Confident",
  description: "Transform how you think about and partner with AI in 3-5 personalized sessions. Guided by Silicon Valley veterans Michele Chambliss and Julie Price.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <PixelScripts />
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
