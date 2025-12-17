import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Starter Kit: AI Confidence in 7 Days",
  description: "For those who are brilliant at life, but baffled by AI. Gain AI confidence in just 7 days.",
};

export default function SidekickLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

