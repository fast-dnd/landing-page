import Image from "next/image";
import Link from "next/link";
import React from "react";

const Welcome = () => {
  return (
    <div className="mt-40 flex items-center justify-center flex-col gap-3">
      <Image src="/assets/logo-up.png" width={266} height={15} alt="logo-up" />
      <div className="relative w-[475px] h-[80px]">
        <p className="absolute">awd</p>
        <Image className="absolute left-10" src="/assets/logo-red-layer.png" fill alt="logo-red-layer" />
        <Image
          className="absolute left-1 -top-1"
          src="/assets/logo-black-layer.png"
          alt="logo-black-layer"
          width={463.5}
          height={97}
        />
      </div>
      <Image className="mt-4" src="/assets/logo-down.png" width={167} height={32} alt="logo-down" />
      <div className="text-[24px] tracking-[0.2em] leading-[46px] uppercase">
        <p className="m-0 font-light">authentic ADVENTURES</p>
        <p className="m-0 font-extrabold">FULLY CURATED BY AI</p>
      </div>
      <Link
        className="mt-40 bg-tomato hover:shadow-[0px_0px_60px_rgba(255,_90,_90,_0.4)] flex flex-row py-3.5 px-[30px] text-gray-200"
        href="#"
      >
        <p className="relative tracking-[0.07em] text-2xl font-extrabold">PLAY NOW</p>
      </Link>
      <Image className="mt-20" src="/assets/welcome-arrows-down.png" width={64} height={75} alt="welcome-arrows-down" />
    </div>
  );
};

export default Welcome;
