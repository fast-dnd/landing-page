"use client";
import { jibril } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import YouTube from "react-youtube";

const VideoAndScreenshots = () => {
  return (
    <section
      className="mt-40 flex items-center flex-col relative"
      aria-labelledby="video-screenshots-heading"
    >
      <div className="flex items-center flex-col gap-4 md:gap-16">
        <Image
          className="hidden md:block absolute w-full h-auto -z-10"
          src="/images/bg-video-sc.png"
          alt="Background decoration - large screen version"
          width={1920}
          height={1944}
        />
        <Image
          className="absolute md:hidden w-full h-auto -z-10"
          src="/images/bg-video-sc-mobile.png"
          alt="Background decoration - mobile version"
          width={390}
          height={687}
        />
        <h2
          id="video-screenshots-heading"
          style={jibril.style}
          className="text-center md:text-5xl leading-[130%] mt-16"
        >
          SEE V3RPG <span className="text-tomato">IN ACTION</span>
        </h2>
        <div className="w-full flex justify-center mt-8">
          <YouTube
            iframeClassName="max-md:w-80 max-md:h-[183px]"
            videoId="4EmRFbdliY4"
            aria-label="Gameplay video of v3RPG - see how the adventure unfolds!"
          />
        </div>
      </div>
      <div className="flex justify-center px-8 w-full mt-20">
        <div className="w-full aspect-[1.225] xl:w-[1280px] xl:h-[1320px] relative">
          <div className="absolute w-3/5 left-0 top-0 flex flex-col gap-10 md:gap-14 lg:gap-24 xl:gap-40">
            <Image
              draggable={false}
              quality={100}
              alt="Screenshot of character selection in v3RPG"
              src="/images/sc1.png"
              width={768}
              height={432}
              className="w-48 h-[108px] xl:w-[768px] xl:h-[432px] rounded-lg xl:rounded-[32px]"
            />
            <Image
              draggable={false}
              quality={100}
              alt="Screenshot showing in-game AI interactions"
              src="/images/sc3.png"
              width={768}
              height={432}
              className="w-48 h-[108px] xl:w-[768px] xl:h-[432px] rounded-lg xl:rounded-[32px]"
            />
          </div>
          <div className="absolute w-3/5 right-0 top-[15%] xl:top-[296px] flex flex-col gap-10 md:gap-14 lg:gap-24 xl:gap-40">
            <Image
              draggable={false}
              quality={100}
              alt="Screenshot of a thrilling battle in v3RPG"
              src="/images/sc2.png"
              width={768}
              height={432}
              className="w-48 h-[108px] xl:w-[768px] xl:h-[432px] rounded-lg xl:rounded-[32px]"
            />
            <Image
              draggable={false}
              quality={100}
              alt="Screenshot of the leaderboard in v3RPG"
              src="/images/sc4.png"
              width={768}
              height={432}
              className="w-48 h-[108px] xl:w-[768px] xl:h-[432px] rounded-lg xl:rounded-[32px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoAndScreenshots;
