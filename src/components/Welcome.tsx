"use client";

import Image from "next/image";
import Link from "next/link";

const Welcome = () => {
  return (
    <section 
      className="flex items-center justify-center flex-col text-center mt-16 px-4"
      aria-label="Welcome to AI Text Adventure RPG"
    >
      <Image
        src="/images/logo.png"
        width={400}
        height={200}
        alt="v3RPG - AI-Powered Text Adventure & D&D Style RPG Game"
        className="w-4/5 md:w-auto"
        priority
      />
      <div 
        className="flex flex-col gap-4 mt-8"
        itemScope 
        itemType="https://schema.org/Game"
      >
        <h1 className="text-2xl md:text-4xl leading-normal tracking-wide max-w-md md:max-w-screen-lg px-4 font-bold">
          🎮 Experience Next-Gen AI Text Adventure Gaming
        </h1>
        <h2 className="text-lg md:text-3xl leading-normal tracking-wide max-w-md md:max-w-screen-lg px-4">
          ✨ Create Custom <span className="font-bold">D&D Adventures</span>,{" "}
          <span className="font-bold">AI Characters</span> &{" "}
          <span className="font-bold">Interactive Stories</span>
        </h2>
        <h2 className="text-lg md:text-3xl leading-normal tracking-wide max-w-md md:max-w-screen-lg px-4">
          🏆 Join <span className="font-bold">Multiplayer Battles</span> and Earn{" "}
          <span className="font-bold">Blockchain Rewards</span> 🎁
        </h2>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Link
          className="mt-10 md:mt-20 bg-tomato hover:scale-105 tracking-widest text-lg md:text-xl font-extrabold hover:shadow-[0px_0px_60px_rgba(255,_90,_90,_0.4)] flex items-center justify-center py-3 px-16 md:py-4 md:px-24 text-gray-200 transition-all duration-300 rounded-md"
          href="https://play.v3rpg.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Start your AI RPG adventure - Play v3RPG now"
          data-game-type="ai-rpg"
          title="Play AI-Powered D&D Style Text Adventure"
        >
          PLAY AI RPG NOW
        </Link>
        <p className="text-sm text-gray-300 mt-2">
          Free AI Text Adventure Game | D&D-Style Storytelling | Multiplayer RPG
        </p>
      </div>
      <meta itemProp="genre" content="AI RPG, Text Adventure, D&D Style Game" />
      <meta itemProp="gamePlatform" content="Web Browser" />
    </section>
  );
};

export default Welcome;
