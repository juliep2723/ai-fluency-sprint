import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Sidekick Starter Kit | AI Strategy LLC",
  description: "Give parents who are brilliant at life and baffled by AI a week to turn 'Can you look at this for me?' into 'Don't worry, I already handled it.'",
};

export default function SidekickLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

