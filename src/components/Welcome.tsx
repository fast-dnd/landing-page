"use client";

import Image from "next/image";
import Link from "next/link";

const Welcome = () => {
  return (
    <section className="flex items-center justify-center flex-col text-center mt-16 px-4">
      <Image
        src="/images/logo.png"
        width={400}
        height={200}
        alt="v3RPG Logo - AI-Powered Adventure Game"
        className="w-4/5 md:w-auto"
      />
      <div className="flex flex-col gap-4 mt-8">
        <h1 className="text-2xl md:text-4xl leading-normal tracking-wide max-w-md md:max-w-screen-lg px-4 font-bold">
          🎮 Gaming with AI has never been more fun!
        </h1>
        <h2 className="text-lg md:text-3xl leading-normal tracking-wide max-w-md md:max-w-screen-lg px-4">
          ✨ Create <span className="font-bold">stories</span>,{" "}
          <span className="font-bold">characters</span> &{" "}
          <span className="font-bold">adventures</span>
        </h2>
        <h2 className="text-lg md:text-3xl leading-normal tracking-wide max-w-md md:max-w-screen-lg px-4">
          🏆 Climb the <span className="font-bold">leaderboards</span> and earn{" "}
          <span className="font-bold">rewards</span> 🎁
        </h2>
      </div>
      <Link
        className="mt-10 md:mt-20 bg-tomato hover:scale-105 tracking-widest text-lg md:text-xl font-extrabold hover:shadow-[0px_0px_60px_rgba(255,_90,_90,_0.4)] flex items-center justify-center py-3 px-16 md:py-4 md:px-24 text-gray-200 transition-all duration-300 rounded-md"
        href="https://play.v3rpg.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Play v3RPG now and start your AI-powered adventure"
      >
        PLAY NOW
      </Link>
    </section>
  );
};

export default Welcome;
