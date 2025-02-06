import Basics from "@/components/Basics";
import Footer from "@/components/Footer";
import GameMods from "@/components/GameMods";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Partners from "@/components/Partners";
import VideoAndScreenshots from "@/components/VideoAndScreenshots";
import Welcome from "@/components/Welcome";
import FAQ from "@/components/FAQ";
import Head from 'next/head';

// import DungeonMasters from "@/components/DungeonMasters";

export default function Home() {
  return (
    <>
    <Head>
        <title>AI-Powered RPG Adventure | Create Your Own AI D&D Stories | v3RPG</title>
        <meta
          name="description"
          content="Experience next-gen AI text adventure gaming. Create custom D&D campaigns, generate AI characters, and produce cinematic stories. Join the ultimate AI role-playing experience with blockchain-validated adventures."
        />
        <meta property="og:title" content="v3RPG - AI Text Adventure & D&D Story Generator"/> 
        <meta property="og:description" content="Create immersive AI-powered RPG adventures. Generate unique stories, characters, and movie-like sequences in this revolutionary text-based game."/>
        <meta name="keywords" content="AI gaming, text adventure game, AI RPG, AI movie maker, AI role play, DnD, dungeons and dragons, multiplayer RPG, blockchain gaming, AI story generator"/>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "v3RPG",
            "description": "Next-generation AI text adventure platform featuring intelligent storytelling and custom D&D campaign creation",
            "keywords": [
              "AI RPG",
              "Text Adventure Game",
              "AI Story Generator",
              "D&D Campaign Creator",
              "AI Movie Maker",
              "Blockchain Gaming",
              "Multiplayer RPG",
              "AI Role Playing",
              "Custom D&D Adventures",
              "AI Character Creation"
            ],
            "operatingSystem": "Web",
            "applicationCategory": "Game",
            "genre": ["AI Role Playing", "Text Adventure", "Fantasy RPG"],
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "url": "https://your-game-url.com"
            }
          })}
        </script>
    </Head>
    <main className="mx-auto lingrad">
      <Header />
      <Welcome />
      <Intro />
      <VideoAndScreenshots />
      {/* <DungeonMasters /> */}
      <Partners />
      <GameMods />
      <Basics />
      <FAQ />
      <Footer />
    </main>
    </>
  );
}