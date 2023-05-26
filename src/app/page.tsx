import Basics from "@/components/Basics";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Welcome from "@/components/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen">
      <div>
        <Image src="/assets/bg-welcome.png" alt="hero" fill className="-z-10" />
        <Header />
        <Welcome />
      </div>
      <Intro />
      <Basics />
      <Footer />
    </main>
  );
}
