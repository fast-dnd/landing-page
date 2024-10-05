import Basics from "@/components/Basics";
import Footer from "@/components/Footer";
import GameMods from "@/components/GameMods";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Partners from "@/components/Partners";
import VideoAndScreenshots from "@/components/VideoAndScreenshots";
import Welcome from "@/components/Welcome";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="mx-auto lingrad">
      <Header />
      <Welcome />
      <Intro />
      <VideoAndScreenshots />
      <Partners />
      <GameMods />
      <Basics />
      <FAQ />
      <Footer />
    </main>
  );
}
