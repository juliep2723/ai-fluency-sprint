import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "The 5-Minute Relief Cheat Sheet | Free PDF Download",
    description: "Fix one annoying thing today—without having to 'learn AI'. The AI-powered list that saved my rug, my job, and my marriage.",
};

export default function SidekickInsp2Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
