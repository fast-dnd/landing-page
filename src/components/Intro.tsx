"use client";

import React from "react";
import Image from "next/image";
import { jibril } from "@/utils/fonts";

const Intro = () => {
  return (
    <section
      className="mt-16 md:mt-40 flex flex-col md:flex-row items-center md:items-stretch relative justify-center bg-black w-full px-4"
      id="intro"
      aria-labelledby="intro-heading"
    >
      {/* Left Image */}
      <div className="hidden md:flex flex-shrink max-w-[40%] justify-center items-center">
        <Image
          src="/images/helmet.png"
          width={576}
          height={729}
          alt="Knight's Helmet Representing Adventure and Battle in v3RPG"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center justify-center gap-8 text-center md:w-1/2 md:px-8">
        <div>
          <h2
            id="intro-heading"
            style={jibril.style}
            className="text-lg md:text-[28px] leading-[32px] md:leading-[48px] tracking-[1.6px] md:tracking-[0.08em] text-center uppercase opacity-80"
          >
            <span className="text-tomato">AI</span> Gaming &{" "}
            <span className="text-tomato">FUN</span> Adventures
          </h2>
          <p
            style={jibril.style}
            className="text-lg md:text-[28px] leading-[32px] md:leading-[48px] tracking-[1.6px] md:tracking-[0.08em] text-center uppercase opacity-80 mt-4"
          >
            IS ALL YOU NEED
          </p>
        </div>
        <div
          className="flex flex-row gap-5 justify-center items-center mt-4"
          aria-hidden="true"
        >
          <div className="w-[100px] md:w-[134px] h-0 border border-tomato" />
          <div className="w-[10px] h-[10px] rotate-45 bg-white flex-shrink-0" />
          <div className="w-[100px] md:w-[134px] h-0 border border-tomato" />
        </div>
        <p className="text-sm px-4 md:px-0 max-w-full md:max-w-[800px] text-center md:text-xl leading-[21.5px] md:leading-[46px] tracking-[2.24px] md:tracking-[0.2em] uppercase font-light mt-4">
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

      {/* Right Image */}
      <div className="hidden md:flex flex-shrink max-w-[40%] justify-center items-center">
        <Image
          src="/images/dragon.png"
          width={576}
          height={729}
          alt="Dragon Symbolizing Thrilling Challenges in v3RPG"
        />
      </div>
    </section>
  );
};

export default Intro;
