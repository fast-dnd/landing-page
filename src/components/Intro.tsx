import React from "react";
import Image from "next/image";

const Intro = () => {
  return <div className="flex flex-row relative justify-between bg-black w-full">
    <Image className="flex flex-shrink max-w-[40%]" src="/assets/helmet.png" width={576} height={729} alt="helmet" />
    <Image className="flex flex-shrink max-w-[40%]" src="/assets/dragon.png" width={576} height={729} alt="dragon" />
    <div className="absolute w-full h-full flex flex-col justify-center items-center gap-16">
      <p className="text-2 text-center"><span className="text-tomato">CHAMPIONS</span> ARE FORGED & <span className="text-tomato">LEGENDS</span> ARE WRITTEN</p>
      <hr/>
      <p className="max-w-[800px] text-center text-3 font-light"><span className="font-bold">WELCOME</span> TO AN <span className="font-bold">EXCITING EXPERIENCE</span> FILLED WITH UNEXPECTED, BIZARRE ADVENTURES THAT ARE FULLY CURATED BY <span className="font-bold">AI</span> AND PERFORMED BY <span className="font-bold">YOU AND YOUR FRIENDS</span>.</p>
    </div>
  </div>;
};

export default Intro;
