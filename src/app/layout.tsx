import React from "react"; // Explicitly import React for JSX handling
import { Metadata } from "next";
import "./globals.css";
import { lexend } from "@/utils/fonts";
import HotjarAnalytics from "@/components/HotjarAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://landing.v3rpg.com/"),
  title: "v3RPG - AI-Powered RPG Adventure | Compete, Earn, & Explore",
  description:
    "v3RPG is an AI-driven RPG that gamifies storytelling. Create unique characters, explore thrilling adventures, and compete in community battles using cutting-edge AI like GPT, Mistral, and LLaMA, while earning rewards on the blockchain.",
  keywords: [
    "AI-powered RPG",
    "adventure game",
    "storytelling game",
    "community battles",
    "V3RPG",
    "multiplayer RPG",
    "fantasy adventure",
    "Ora Protocol",
    "AI Dungeon Master",
    "LLaMA",
    "GPT",
    "Mixtral",
    "Mistral",
    "Stability AI",
    "image generation",
    "Web3 RPG",
    "compete and earn",
    "Arbitrum",
    "blockchain rewards",
    "decentralized gaming",
    "NFT rewards",
  ],
  icons: {
    icon: "/v3dnd-logo.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://landing.v3rpg.com",
    title: "v3RPG - AI-Powered RPG Adventure | Compete, Earn, & Explore",
    description:
      "Join v3RPG to create and explore thrilling AI-powered RPG adventures. Powered by leading AI technologies like GPT, Mistral, and LLaMA, you can compete in community battles, climb leaderboards, and earn rewards using blockchain technology.",
    images: [
      {
        url: "/images/og-logo.png",
        width: 1200,
        height: 630,
        alt: "v3RPG - Bringing Gamification to Storytelling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "v3RPG - AI-Powered RPG Adventure Game | Compete and Earn",
    description:
      "Discover v3RPG, the AI-driven RPG adventure game powered by GPT, Mistral, and LLaMA. Create unique characters, compete in community battles, and earn rewards using Web3 and blockchain technology.",
    images: ["/images/og-logo.png"],
    site: "@v3rpg", // Your official Twitter handle
    creator: "@v3rpg",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://landing.v3rpg.com",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ff6347",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <HotjarAnalytics />
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
