import { Metadata } from "next";
import "./globals.css";
import { lexend } from "@/utils/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://landing.v3rpg.com/"),
  title: "v3RPG",
  description: "Bringing gamification to storytelling. Powered by AI.",
  icons: {
    icon: "/v3dnd-logo.svg",
  },
  openGraph: {
    images: ["/v3dnd-logo.png"],
    title: "v3RPG",
    description: "Bringing gamification to storytelling. Powered by AI.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>{children}</body>
    </html>
  );
}
