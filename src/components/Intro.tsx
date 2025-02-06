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
      itemScope
      itemType="https://schema.org/Game"
    >
      {/* Left Image */}
      <div className="hidden md:flex flex-shrink max-w-[40%] justify-center items-center">
        <Image
          src="/images/helmet.png"
          width={576}
          height={729}
          alt="Medieval Knight's Helmet - Embark on AI-Powered D&D Adventures"
          className="game-asset"
          loading="eager"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center justify-center gap-8 text-center md:w-1/2 md:px-8">
        <div itemProp="description">
          <h2
            id="intro-heading"
            style={jibril.style}
            className="text-lg md:text-[28px] leading-[32px] md:leading-[48px] tracking-[1.6px] md:tracking-[0.08em] text-center uppercase opacity-80"
          >
            <span className="text-tomato">AI-Powered</span> RPG &{" "}
            <span className="text-tomato">D&D-Style</span> Adventures
          </h2>
          <p
            style={jibril.style}
            className="text-lg md:text-[28px] leading-[32px] md:leading-[48px] tracking-[1.6px] md:tracking-[0.08em] text-center uppercase opacity-80 mt-4"
          >
            NEXT-GEN TEXT ADVENTURE GAMING
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
        <div 
          className="text-sm px-4 md:px-0 max-w-full md:max-w-[800px] text-center md:text-xl leading-[21.5px] md:leading-[46px] tracking-[2.24px] md:tracking-[0.2em] uppercase font-light mt-4"
          itemProp="about"
        >
          <p>
            <span className="font-bold">👋 DISCOVER</span> the ultimate{" "}
            <span className="font-bold">AI text adventure experience</span> where you
            create custom{" "}
            <span className="font-bold">🎭 D&D characters</span>, generate unique{" "}
            <span className="font-bold">🗺️ AI-driven storylines</span>, and compete in{" "}
            <span className="font-bold">🏆 multiplayer battles</span>.
          </p>
          <p className="mt-4">
            Earn <span className="font-bold">🎁 blockchain rewards</span> and experience
            fair gameplay with our innovative{" "}
            <span className="font-bold">⚡ AI validation system</span> powered by the{" "}
            <span className="font-bold">Ora Protocol</span>.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:flex flex-shrink max-w-[40%] justify-center items-center">
        <Image
          src="/images/dragon.png"
          width={576}
          height={729}
          alt="Fantasy Dragon - AI-Generated Quests and Epic Battles in Text RPG"
          className="game-asset"
          loading="eager"
        />
      </div>

      {/* Hidden SEO-boosting metadata */}
      <meta itemProp="gameCategory" content="AI Text Adventure, D&D RPG, Interactive Fiction" />
      <meta itemProp="characterAttribute" content="Custom AI Characters, D&D Style Heroes" />
      <meta itemProp="gamePlatform" content="Web-based RPG, Blockchain Gaming" />
      <meta itemProp="feature" content="AI Storytelling, Multiplayer Battles, Blockchain Rewards" />
    </section>
  );
};

export default Intro;
