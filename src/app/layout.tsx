import { Metadata } from "next";
import "./globals.css";
import { lexend } from "@/utils/fonts";
import HotjarAnalytics from "@/components/HotjarAnalytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://landing.v3rpg.com/"),
  title: "v3RPG",
  description: "Bringing gamification to storytelling.",
  icons: {
    icon: "/v3dnd-logo.svg",
  },
  openGraph: {
    images: ["/images/og-logo.png"],
    title: "v3RPG",
    description: "Bringing gamification to storytelling.",
  },
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
