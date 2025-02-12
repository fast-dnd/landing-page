"use client";

import Image from "next/image";
import Link from "next/link";

const Welcome = () => {
  return (
    <section
      className="flex items-center justify-center flex-col text-center mt-16 px-4"
      aria-label="Welcome section"
    >
      <Image
        src="/images/logo.png"
        width={400}
        height={200}
        alt="v3RPG Logo"
        className="w-4/5 md:w-auto"
        priority
      />
      <div
        className="flex flex-col gap-4 mt-8"
        itemScope
        itemType="https://schema.org/Game"
      >
        <h1 className="text-2xl md:text-4xl leading-normal tracking-wide max-w-md md:max-w-screen-lg px-4 font-bold">
          Experience Next-Generation AI Gaming
        </h1>
        <div className="text-lg md:text-3xl leading-normal tracking-wide max-w-md md:max-w-screen-lg px-4">
          <h2>
            Create Custom <span className="font-bold">Adventures</span> and{" "}
            <span className="font-bold">Interactive Stories</span>
          </h2>
          <h2 className="mt-4">
            Join <span className="font-bold">Multiplayer Battles</span> and Earn{" "}
            <span className="font-bold">Web3 Rewards</span>
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Link
          className="mt-10 md:mt-20 bg-tomato hover:scale-105 tracking-widest text-lg md:text-xl font-extrabold hover:shadow-[0px_0px_60px_rgba(255,_90,_90,_0.4)] flex items-center justify-center py-3 px-16 md:py-4 md:px-24 text-gray-200 transition-all duration-300 rounded-md"
          href="https://play.v3rpg.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Start playing v3RPG"
        >
          Play Now
        </Link>
        <p className="text-sm text-gray-300 mt-2">
          AI-Powered Fantasy Adventure | Multiplayer RPG
        </p>
      </div>
      <meta itemProp="genre" content="AI RPG, Fantasy Adventure" />
      <meta itemProp="gamePlatform" content="Web Browser" />
    </section>
  );
};

export default Welcome;
