import React from "react";
import Image from "next/image";
import { jibril } from "@/utils/fonts";

const Intro = () => {
  return (
    <div className="flex flex-row relative justify-between bg-black w-full">
      <Image className="flex flex-shrink max-w-[40%]" src="/images/helmet.png" width={576} height={729} alt="helmet" />
      <Image className="flex flex-shrink max-w-[40%]" src="/images/dragon.png" width={576} height={729} alt="dragon" />
      <div className="absolute w-full h-full flex flex-col justify-center items-center gap-16" id="intro">
        <p style={jibril.style} className="text-[28px] leading-[48px] tracking-[0.08em] text-center uppercase">
          <span className="text-tomato">CHAMPIONS</span> ARE FORGED & <span className="text-tomato">LEGENDS</span> ARE
          WRITTEN
        </p>
        <div className="flex flex-row gap-5 justify-center items-center">
          <div className="w-[134px] h-0 border border-tomato" />
          <div className="w-[10px] h-[10px] rotate-45 bg-white flex-shrink-0" />
          <div className="w-[134px] h-0 border border-tomato" />
        </div>
        <p className="max-w-[800px] text-center text-xl leading-[46px] tracking-[0.2em] uppercase font-light">
          <span className="font-bold">WELCOME</span> to An <span className="font-bold">exciting experience</span> filled
          with unexpected, bizarre adventures that are fully curated by <span className="font-bold">AI</span> and
          performed by <span className="font-bold">you and your friends</span>.
        </p>
      </div>
    </div>
  );
};

export default Intro;
