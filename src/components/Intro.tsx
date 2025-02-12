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
          alt="Medieval Knight's Helmet"
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
            className="text-lg md:text-[28px] leading-[32px] md:leading-[48px] tracking-[1.6px] md:tracking-[0.08em] text-center"
          >
            <span className="text-tomato">Dynamic</span> Storytelling &{" "}
            <span className="text-tomato">Strategic</span> Combat
          </h2>
          <p
            style={jibril.style}
            className="text-lg md:text-[28px] leading-[32px] md:leading-[48px] tracking-[1.6px] md:tracking-[0.08em] text-center mt-4"
          >
            Where Technology Meets Fantasy
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
          className="text-sm px-4 md:px-0 max-w-full md:max-w-[800px] text-center md:text-xl leading-[21.5px] md:leading-[46px] tracking-[2.24px] md:tracking-[0.2em] font-light mt-4"
          itemProp="about"
        >
          <p>
            Shape your hero journey through richly detailed worlds where your
            choices influence the narrative. Master tactical combat and forge
            alliances in dynamic multiplayer encounters.
          </p>
          <p className="mt-4">
            Participate in community-driven events and earn rewards through our
            innovative validation system, ensuring fair play and authentic
            achievements.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden md:flex flex-shrink max-w-[40%] justify-center items-center">
        <Image
          src="/images/dragon.png"
          width={576}
          height={729}
          alt="Mythical Dragon"
          className="game-asset"
          loading="eager"
        />
      </div>

      {/* Hidden SEO-boosting metadata */}
      <meta
        itemProp="gameCategory"
        content="Interactive Fiction, Strategy RPG"
      />
      <meta itemProp="characterAttribute" content="Customizable Heroes" />
      <meta itemProp="gamePlatform" content="Web Platform" />
      <meta
        itemProp="feature"
        content="Dynamic Storytelling, Strategic Combat, Community Events"
      />
    </section>
  );
};

export default Intro;
