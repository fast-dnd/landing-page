"use client";

import React from "react";
import Image from "next/image";
import { jibril } from "@/utils/fonts";

const Intro = () => {
  return (
    <section
      className="mt-40 flex flex-row relative justify-between bg-black w-full"
      id="intro"
      aria-labelledby="intro-heading"
    >
      <Image
        className="hidden md:block flex-shrink max-w-[40%]"
        src="/images/helmet.png"
        width={576}
        height={729}
        alt="Knight's Helmet Representing Adventure and Battle in v3RPG"
      />
      <Image
        className="hidden md:block flex-shrink max-w-[40%]"
        src="/images/dragon.png"
        width={576}
        height={729}
        alt="Dragon Symbolizing Thrilling Challenges in v3RPG"
      />
      <div className="absolute w-full h-full flex flex-col justify-center items-center gap-16">
        <div>
          <h2
            id="intro-heading"
            style={jibril.style}
            className="px-8 text-xl md:text-[28px] leading-[32px] md:leading-[48px] tracking-[1.6px] md:tracking-[0.08em] text-center uppercase opacity-80"
          >
            <span className="text-tomato">AI</span> Gaming &{" "}
            <span className="text-tomato">FUN</span> Adventures
          </h2>
          <p
            style={jibril.style}
            className="px-8 text-xl md:text-[28px] leading-[32px] md:leading-[48px] tracking-[1.6px] md:tracking-[0.08em] text-center uppercase opacity-80"
          >
            IS ALL YOU NEED
          </p>
        </div>

        <div
          className="flex flex-row gap-5 justify-center items-center"
          aria-hidden="true"
        >
          <div className="w-[134px] h-0 border border-tomato" />
          <div className="w-[10px] h-[10px] rotate-45 bg-white flex-shrink-0" />
          <div className="w-[134px] h-0 border border-tomato" />
        </div>

        <p className="text-sm px-8 md:px-0 max-w-[800px] text-center md:text-xl leading-[21.5px] md:leading-[46px] tracking-[2.24px] md:tracking-[0.2em] uppercase font-light">
          <span className="font-bold">👋 WELCOME</span> to an{" "}
          <span className="font-bold">exciting RPG experience</span> where you
          and your friends create unique{" "}
          <span className="font-bold">🎭 characters</span>, embark on thrilling{" "}
          <span className="font-bold">🗺️ adventures</span>, and climb the{" "}
          <span className="font-bold">🏆 community leaderboards</span>.
          <br />
          <br />
          Unlock <span className="font-bold">🎁 reward boxes</span> and enjoy
          gaming like never before with our decentralized AI judge powered by
          the <span className="font-bold">⚡ Ora Protocol</span>.
        </p>
      </div>
    </section>
  );
};

export default Intro;
