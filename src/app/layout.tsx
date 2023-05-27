import { Metadata } from "next";
import "./globals.css";
import { jost } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "V3RPG",
  description: "DnD App description...",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
