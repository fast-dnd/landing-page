import { Metadata } from "next";
import "./globals.css";
import { jost } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "V3RPG",
  description: "AI powered RPG",
  icons: {
    icon: "/v3dnd-logo.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
