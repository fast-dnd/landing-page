"use client";
import { jibril } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";

const VideoAndScreenshots = () => {
  return (
    <div className="max-md:mt-32 mt-4 flex items-center flex-col relative">
      <div className="flex items-center flex-col gap-4 md:gap-16"><Image
        className="absolute w-full h-auto -z-10"
        src="/images/bg-video-sc.png"
        alt="basics"
        width={1920}
        height={1944}
      />
      <p
        className="text-center md:text-5xl leading-[130%]"
        style={jibril.style}
      >
        SEE V3RPG <span className="text-tomato"> IN ACTION</span>
      </p>
      <ReactPlayer url="https://www.youtube.com/watch?v=fnC5INxQS1M" />
      </div>
      
      <div className="flex justify-center px-8 w-full"><div
        className="mt-64 w-full aspect-[1.225] xl:w-[1280px] xl:h-[1320px] relative"
      >
        <div className="absolute w-3/5 left-0 top-0 flex flex-col gap-10 md:gap-14 lg:gap-24 xl:gap-40">
        <Image unoptimized draggable={false} quality={100} alt="" src="/images/sc1.png" width={768} height={432} className="w-full xl:w-[768px] xl:h-[432px] rounded-lg xl:rounded-[32px]" />
        <Image unoptimized draggable={false} quality={100} alt="" src="/images/sc3.png" width={768} height={432} className="w-full xl:w-[768px] xl:h-[432px] rounded-lg xl:rounded-[32px]" />

        </div>
        <div className="absolute w-3/5 right-0 top-[15%] xl:top-[296px] flex flex-col gap-10 md:gap-14 lg:gap-24 xl:gap-40">
        <Image unoptimized draggable={false} quality={100} alt="" src="/images/sc2.png" width={768} height={432} className="w-full xl:w-[768px] xl:h-[432px] rounded-lg xl:rounded-[32px]" />
        <Image unoptimized draggable={false} quality={100} alt="" src="/images/sc4.png" width={768} height={432} className="w-full xl:w-[768px] xl:h-[432px] rounded-lg xl:rounded-[32px]" />

        </div>

      </div></div>
      
    </div>
  );
};

export default VideoAndScreenshots;
