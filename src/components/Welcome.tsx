"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollArrows from "./ScrollArrows";

const Welcome = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Image src="/images/logo.png" width={745} height={388} alt="logo" />
      <div className="-mt-6 text-2xl md:text-5xl leading-normal md:tracking-[9.6px] uppercase flex flex-col">
        <div className="m-0 font-light">AUTHENTIC ADVENTURES</div>
        <div className="m-0 font-semibold text-center">FULLY CURATED BY AI</div>
      </div>
      <Link
        className="mt-20 md:mt-40 bg-tomato hover:scale-105 tracking-widest text-xl font-extrabold hover:shadow-[0px_0px_60px_rgba(255,_90,_90,_0.4)] flex flex-row py-4 px-24 text-gray-200 transition-all duration-300 rounded-md"
        href="https://play.v3rpg.com/"
        target="_blank"
      >
        PLAY NOW
      </Link>
    </div>
  );
};

export default Welcome;
