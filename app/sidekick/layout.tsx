import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gift Your Parents AI Confidence in 7 Days",
  description: "Give parents who are brilliant at life and baffled by AI a week to turn 'Can you look at this for me?' into 'Don't worry, I already handled it.'",
};

export default function SidekickLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

