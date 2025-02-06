"use client";

import { jibril } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import YouTube from "react-youtube";

const VideoAndScreenshots = () => {
  const screenshots = [
    {
      src: "/images/sc1.png",
      alt: "AI Character Creation System - Create Custom D&D Heroes in v3RPG",
      title: "Character Creation Interface"
    },
    {
      src: "/images/sc3.png",
      alt: "AI-Driven Story Generation and Interactive Dialogue System in v3RPG",
      title: "Dynamic Storytelling Interface"
    },
    {
      src: "/images/sc2.png",
      alt: "Multiplayer Battle System with AI-Powered Combat Resolution",
      title: "Battle System Interface"
    },
    {
      src: "/images/sc4.png",
      alt: "Blockchain-Validated Leaderboards and Reward System in v3RPG",
      title: "Leaderboard Interface"
    }
  ];

  return (
    <section
      className="mt-20 md:mt-40 flex items-center flex-col relative"
      aria-labelledby="video-screenshots-heading"
      itemScope
      itemType="https://schema.org/VideoGame"
    >
      <div className="flex items-center flex-col gap-4 md:gap-16">
        <Image
          className="hidden md:block absolute w-full h-auto -z-10"
          src="/images/bg-video-sc.png"
          alt="AI RPG Game Interface Background"
          width={1920}
          height={1944}
          priority={false}
        />
        <Image
          className="absolute md:hidden w-full h-auto -z-10"
          src="/images/bg-video-sc-mobile.png"
          alt="Mobile AI RPG Interface Background"
          width={390}
          height={687}
          priority={false}
        />
        <h2
          id="video-screenshots-heading"
          style={jibril.style}
          className="text-center text-3xl md:text-5xl leading-[130%] mt-16"
          itemProp="name"
        >
          EXPERIENCE <span className="text-tomato">AI-POWERED GAMING</span>
        </h2>
        <div 
          className="w-full flex justify-center mt-8"
          itemProp="trailer"
        >
          <YouTube
            iframeClassName="max-md:w-80 max-md:h-[183px]"
            videoId="4EmRFbdliY4"
            title="v3RPG Gameplay: AI Text Adventure and D&D-Style Gaming"
            aria-label="Watch v3RPG gameplay - AI-powered text adventure with D&D elements"
          />
        </div>
      </div>

      {/* Screenshots Section */}
      <div 
        className="flex flex-wrap justify-center gap-10 md:gap-14 lg:gap-24 xl:gap-40 px-8 w-full mt-20"
        itemProp="screenshot"
      >
        {/* Mobile Layout */}
        <div className="w-full md:hidden flex flex-col gap-8">
          {screenshots.map((screenshot, index) => (
            <Image
              key={`mobile-${index}`}
              draggable={false}
              quality={100}
              alt={screenshot.alt}
              src={screenshot.src}
              width={768}
              height={432}
              className="w-full h-auto rounded-lg"
              loading={index === 0 ? "eager" : "lazy"}
              title={screenshot.title}
              itemProp="image"
            />
          ))}
        </div>

        {/* Desktop Layout */}
        <div 
          className="hidden md:block w-full aspect-[1.225] xl:w-[1280px] xl:h-[1320px] relative"
          role="region"
          aria-label="Game Screenshots Gallery"
        >
          <div className="absolute w-3/5 left-0 top-0 flex flex-col gap-10 md:gap-14 lg:gap-24 xl:gap-40">
            {screenshots.slice(0, 2).map((screenshot, index) => (
              <Image
                key={`desktop-left-${index}`}
                draggable={false}
                quality={100}
                alt={screenshot.alt}
                src={screenshot.src}
                width={768}
                height={432}
                className="w-48 h-[108px] xl:w-[768px] xl:h-[432px] rounded-lg xl:rounded-[32px]"
                loading={index === 0 ? "eager" : "lazy"}
                title={screenshot.title}
                itemProp="image"
              />
            ))}
          </div>
          <div className="absolute w-3/5 right-0 top-[15%] xl:top-[296px] flex flex-col gap-10 md:gap-14 lg:gap-24 xl:gap-40">
            {screenshots.slice(2).map((screenshot, index) => (
              <Image
                key={`desktop-right-${index}`}
                draggable={false}
                quality={100}
                alt={screenshot.alt}
                src={screenshot.src}
                width={768}
                height={432}
                className="w-48 h-[108px] xl:w-[768px] xl:h-[432px] rounded-lg xl:rounded-[32px]"
                loading="lazy"
                title={screenshot.title}
                itemProp="image"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hidden SEO metadata */}
      <meta itemProp="gamePlatform" content="Web Browser" />
      <meta itemProp="gameCategory" content="AI RPG, Text Adventure, D&D Style Game" />
      <meta itemProp="applicationCategory" content="Game" />
      <meta itemProp="feature" content="AI Storytelling, Character Creation, Multiplayer Battles, Blockchain Rewards" />
      <meta itemProp="description" content="Experience next-generation AI gaming with v3RPG's text adventure system featuring D&D-style gameplay, AI-powered storytelling, and blockchain rewards." />
    </section>
  );
};

export default VideoAndScreenshots;
