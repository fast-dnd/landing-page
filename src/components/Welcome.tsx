"use client";

import { jibril } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ScrollArrows from "./ScrollArrows";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Welcome = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Slide direction="right" triggerOnce>
        <Fade triggerOnce cascade damping={0.3} delay={500}>
          <Image src="/images/logo.png" width={745} height={388} alt="logo" />
        </Fade>
      </Slide>
      <div className="-mt-6 text-2xl md:text-5xl leading-normal md:tracking-[9.6px] uppercase flex flex-col">
        <Fade triggerOnce cascade damping={0.1} delay={1600} className="m-0 font-light">
          AUTHENTIC ADVENTURES
        </Fade>
        <Fade triggerOnce cascade damping={0.03} delay={3500} className="m-0 font-semibold text-center">
          FULLY CURATED BY AI
        </Fade>
      </div>
      <Fade triggerOnce delay={4500}>
        <Link
          className="mt-20 md:mt-40 bg-tomato hover:scale-105 hover:shadow-[0px_0px_60px_rgba(255,_90,_90,_0.4)] flex flex-row py-4 px-24 text-gray-200 transition-all duration-300 rounded-md"
          href="https://play.v3rpg.com/"
        >
          <p className="relative tracking-widest text-xl font-extrabold">PLAY NOW</p>
        </Link>
      </Fade>
      <Zoom triggerOnce delay={5000}>
        <ScrollArrows />
      </Zoom>
    </div>
  );
};

export default Welcome;
