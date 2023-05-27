import "./globals.css";
import { Jost } from "next/font/google";
import localFont from "next/font/local";

export const jost = Jost({ subsets: ["latin"] });

export const jibril = localFont({
  src: "../../public/fonts/JibrilRegular.woff",
});

export const metadata = {
  title: "FastDnd",
  description: "DnD App description...",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
