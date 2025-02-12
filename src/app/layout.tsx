import React from "react";
import { Metadata } from "next";
import "./globals.css";
import { lexend } from "@/utils/fonts";
import HotjarAnalytics from "@/components/HotjarAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://landing.v3rpg.com/"),
  title: {
    default: "v3RPG - AI-Powered RPG Adventure | Compete, Earn, & Explore",
    template: "%s | v3RPG",
  },
  description:
    "Create unique characters, battle others, and earn blockchain rewards in an immersive fantasy world powered by advanced AI like GPT, Mistral, and LLaMA.",
  applicationName: "v3RPG",
  authors: [{ name: "v3RPG Team" }],
  generator: "Next.js",
  keywords: [
    "AI RPG",
    "fantasy adventure",
    "blockchain gaming",
    "Web3 RPG",
    "AI Dungeon Master",
    "multiplayer RPG",
    "GPT gaming",
    "LLaMA",
    "Mistral AI",
    "Mixtral",
    "DeepSeek",
    "Claude",
    "TogetherAI",
    "Stability AI",
    "NFT rewards",
    "Arbitrum",
  ],
  creator: "v3RPG",
  publisher: "v3RPG",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  icons: {
    icon: [
      { url: "/v3dnd-logo.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    url: "https://landing.v3rpg.com",
    title: "v3RPG - AI-Powered RPG Adventure | Compete, Earn, & Explore",
    description:
      "Create and explore AI-powered RPG adventures. Battle others, climb leaderboards, and earn blockchain rewards in an immersive fantasy world.",
    siteName: "v3RPG",
    images: [
      {
        url: "/images/og-logo.png",
        width: 1200,
        height: 630,
        alt: "v3RPG - AI-Powered Fantasy Adventure",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@v3rpg",
    creator: "@v3rpg",
    images: ["/images/og-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://landing.v3rpg.com",
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ff6347" },
    { media: "(prefers-color-scheme: dark)", color: "#ff6347" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <HotjarAnalytics />
      <body className={`${lexend.className} antialiased`}>{children}</body>
    </html>
  );
}
