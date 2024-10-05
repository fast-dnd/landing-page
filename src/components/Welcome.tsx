"use client";

import Image from "next/image";
import Link from "next/link";

const Welcome = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Image src="/images/logo.png" width={745} height={388} alt="logo" />
      <div className="flex flex-col gap-4">
        <p className="text-center text-2xl md:text-2xl leading-normal md:tracking-[9.6px] max-w-screen-lg px-4">
          🎮 Gaming with AI has never been more fun!
        </p>
        <p className="text-center text-2xl md:text-2xl leading-normal md:tracking-[9.6px] max-w-screen-lg px-4">
          ✨ Create <span className="font-bold">stories</span>,{" "}
          <span className="font-bold">characters</span> &{" "}
          <span className="font-bold">adventures</span>
        </p>
        <p className="text-center text-2xl md:text-2xl leading-normal md:tracking-[9.6px] max-w-screen-lg px-4">
          🏆 Climb the <span className="font-bold">leaderboards</span> and earn{" "}
          <span className="font-bold">rewards</span> 🎁
        </p>
      </div>
      <Link
        className="mt-20 md:mt-40 bg-tomato hover:scale-105 tracking-widest text-xl font-extrabold hover:shadow-[0px_0px_60px_rgba(255,_90,_90,_0.4)] flex flex-row py-4 px-24 text-gray-200 transition-all duration-300 rounded-md"
        href="https://play.v3rpg.com/"
        target="_blank"
      >
        PLAY NOW
      </Link>
    </div>
  );
};

export default Welcome;
