import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cheat Codes For Real Life | Free PDF Download",
    description: "Stop fighting your life. Start managing it like a passive-aggressive genius. Get the 5-Minute Relief Cheat Sheet for free.",
};

export default function SidekickInsp1Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
