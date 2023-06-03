import Basics from "@/components/Basics";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Welcome from "@/components/Welcome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[1600px] mx-auto lingrad">
      <div className="w-full relative">
        <Image src="/images/bg-welcome.png" alt="hero" width={1920} height={1080} className="-z-10 w-full h-[1080px]" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col">
          <Header />
          <Welcome />
        </div>
      </div>
      <Intro />
      <Basics />
      <Footer />
    </main>
  );
}
