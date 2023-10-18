"use client";
import { jibril } from "@/utils/fonts";
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";

const VideoAndScreenshots = () => {
  return (
    <div className="max-md:mt-32 flex items-center flex-col gap-4 md:gap-16 relative">
      <Image
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

      <div
        className="mt-64"
        style={{ width: 1280, height: 1320, position: "relative" }}
      >
        <img
          style={{
            width: 768,
            height: 432,
            left: 0,
            top: 0,
            position: "absolute",
            borderRadius: 32,
          }}
          src="/images/sc1.png"
        />
        <img
          style={{
            width: 768,
            height: 432,
            left: 512,
            top: 296,
            position: "absolute",
            borderRadius: 32,
          }}
          src="/images/sc2.png"
        />
        <img
          style={{
            width: 768,
            height: 432,
            left: 0,
            top: 592,
            position: "absolute",
            borderRadius: 32,
          }}
          src="/images/sc3.png"
        />
        <img
          style={{
            width: 768,
            height: 432,
            left: 512,
            top: 888,
            position: "absolute",
            borderRadius: 32,
          }}
          src="/images/sc4.png"
        />
      </div>
    </div>
  );
};

export default VideoAndScreenshots;
