"use client";
import { jibril } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import YouTube from "react-youtube";

const VideoAndScreenshots = () => {
  return (
    <div className="max-md:mt-32 mt-4 flex items-center flex-col relative">
      <div className="flex items-center flex-col gap-4 md:gap-16">
        <Image
          className="max-md:hidden absolute w-full h-auto -z-10"
          src="/images/bg-video-sc.png"
          alt="basics"
          width={1920}
          height={1944}
        />
        <Image
          className="absolute md:hidden w-full h-auto -z-10"
          src="/images/bg-video-sc-mobile.png"
          alt="basics"
          width={390}
          height={687}
        />
        <p
          className="text-center md:text-5xl leading-[130%]"
          style={jibril.style}
        >
          SEE V3RPG <span className="text-tomato"> IN ACTION</span>
        </p>
        <YouTube
          iframeClassName="max-md:w-80 max-md:h-[183px]"
          videoId="eNGYglAsoc0"
        />
      </div>

      <div className="flex justify-center px-8 w-full">
        <div className="mt-64 w-full aspect-[1.225] xl:w-[1280px] xl:h-[1320px] relative">
          <div className="absolute w-3/5 left-0 top-0 flex flex-col gap-10 md:gap-14 lg:gap-24 xl:gap-40">
            <Image
              draggable={false}
              quality={100}
              alt="screnshot 1"
              src="/images/sc1.png"
              width={768}
              height={432}
              className="w-48 h-[108px] xl:w-[768px] xl:h-[432px] rounded-lg xl:rounded-[32px]"
            />
            <Image
              draggable={false}
              quality={100}
              alt="screnshot 2"
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
              alt="screnshot 3"
              src="/images/sc2.png"
              width={768}
              height={432}
              className="w-48 h-[108px] xl:w-[768px] xl:h-[432px] rounded-lg xl:rounded-[32px]"
            />
            <Image
              draggable={false}
              quality={100}
              alt="screnshot 4"
              src="/images/sc4.png"
              width={768}
              height={432}
              className="w-48 h-[108px] xl:w-[768px] xl:h-[432px] rounded-lg xl:rounded-[32px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAndScreenshots;
