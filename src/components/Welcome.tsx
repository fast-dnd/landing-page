"use client";

import { jibril } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollArrows from "./ScrollArrows";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Welcome = () => {
  return (
    <div className="mt-40 flex items-center justify-center flex-col gap-3">
      <Slide direction="right" triggerOnce>
        <Image src="/images/logo-up.png" width={266} height={15} alt="logo-up" />
        <div className="relative w-[475.22px] flex justify-center">
          <div className="absolute w-full h-full flex items-center justify-center">
            <Image className="" src="/images/logo-red-layer.png" width={475.22} height={81.86} alt="logo-red-layer" />
          </div>
          <div className="absolute w-full h-full flex items-center justify-center z-20">
            <Fade
              triggerOnce
              cascade
              damping={0.3}
              delay={500}
              style={jibril.style}
              className="text-6xl tracking-[0.415em] text-center indent-[0.415em] uppercase"
            >
              v3rpg
            </Fade>
          </div>
          <Image
            className="z-10"
            src="/images/logo-black-layer.png"
            alt="logo-black-layer"
            width={463.51}
            height={97.05}
          />
        </div>
        <Image className="mb-4" src="/images/logo-down.png" width={167} height={32} alt="logo-down" />
      </Slide>
      <div className="text-[24px] tracking-[0.2em] leading-[46px] uppercase flex flex-col">
        <Fade triggerOnce cascade damping={0.1} delay={1600} className="m-0 font-light">
          authentic ADVENTURES
        </Fade>
        <Fade triggerOnce cascade damping={0.03} delay={3500} className="m-0 font-extrabold">
          FULLY CURATED BY AI
        </Fade>
      </div>
      <Fade triggerOnce delay={4500}>
        <Link
          className="mt-40 bg-tomato hover:scale-105 hover:shadow-[0px_0px_60px_rgba(255,_90,_90,_0.4)] flex flex-row py-3.5 px-[30px] text-gray-200 transition-all duration-300"
          href="https://v3rpg.fastdnd.net/"
        >
          <p className="relative tracking-[0.07em] text-2xl font-extrabold">PLAY NOW</p>
        </Link>
      </Fade>
      <Zoom triggerOnce delay={5000}>
        <ScrollArrows />
      </Zoom>
    </div>
  );
};

export default Welcome;
