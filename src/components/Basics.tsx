import { jibril } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Basics = () => {
  const shared = "flex flex-col z-10 relative w-[1030px] px-12 py-6 bg-gray-200 shadow-basic border-tomato";
  return (
    <div className="w-full relative mt-20">
      <Image
        className="w-full absolute -z-20 max-h-[100%]"
        src="/assets/bg-basics.png"
        alt="basics"
        width={1920}
        height={1840}
      />
      <div className="w-full flex flex-col items-center">
        <div className="mt-8 flex flex-col items-center gap-24">
          <div style={jibril.style} className="text-center leading-[60px] mb-2">
            <p className="uppercase text-tomato text-[72px] tracking-[0.4em]">Master</p>
            <p className="uppercase text-[32px] tracking-[0.18em] mt-2">the basics</p>
          </div>
          <div className={`${shared} border-l-4`}>
            <div className="flex flex-row items-center gap-1">
              <div className="h-2 w-2 bg-tomato rotate-45" />
              <p style={jibril.style} className="uppercase text-[28px] leading-[48px] tracking-[0.5em] indent-[0.5em]">
                READ
              </p>
              <div className="h-2 w-2 bg-tomato rotate-45" />
            </div>
            <p className="text-xl leading-10 tracking-[0.075em]">
              The AI describes the situation and environment in which the players find themselves. This includes details
              such as how many doors are in a room, what is on a table, who is in the tavern, etc. The AI can also
              describe the actions of non-player characters (NPCs) and how they interact with the players.
            </p>
            <div className="absolute right-0 top-0 h-full flex flex-row gap-8 items-center justify-end -z-10">
              <p style={jibril.style} className="text-9xl text-tomato [text-shadow:_0_0_18px_rgba(0,0,0,0.9)]">
                1
              </p>
              <div className="w-[1030px]" />
            </div>
          </div>
          <div className={`${shared} border-r-4 items-end`}>
            <div className="flex flex-row items-center gap-1">
              <div className="h-2 w-2 bg-tomato rotate-45" />
              <p style={jibril.style} className="uppercase text-[28px] leading-[48px] tracking-[0.5em] indent-[0.5em]">
                DECIDE
              </p>
              <div className="h-2 w-2 bg-tomato rotate-45" />
            </div>
            <p className="text-xl leading-10 tracking-[0.075em] text-right">
              You must decide what your character does. You can do anything you can think of, as long as it is within
              the rules of the game and possible within the environment described by the AI. For example, you can decide
              to talk to an NPC, search for an object or attack an enemy.
            </p>
            <div className="absolute left-0 top-0 h-full flex flex-row gap-8 items-center -z-10">
              <div className="w-[1030px]" />
              <p style={jibril.style} className="text-9xl text-tomato [text-shadow:_0_0_18px_rgba(0,0,0,0.9)]">
                2
              </p>
            </div>
          </div>
          <div className={`${shared} border-l-4`}>
            <div className="flex flex-row items-center gap-1">
              <div className="h-2 w-2 bg-tomato rotate-45" />
              <p style={jibril.style} className="uppercase text-[28px] leading-[48px] tracking-[0.5em] indent-[0.5em]">
                ROLL
              </p>
              <div className="h-2 w-2 bg-tomato rotate-45" />
            </div>
            <p className="text-xl leading-10 tracking-[0.075em]">
              The AI describes the result of your character&apos;s actions. To determine whether an action is successful
              or not, 2 dice are used. The number determined by the sum of both dice decides your luck.
            </p>
            <div className="absolute right-0 top-0 h-full flex flex-row gap-8 items-center justify-end -z-10">
              <p style={jibril.style} className="text-9xl text-tomato [text-shadow:_0_0_18px_rgba(0,0,0,0.9)]">
                3
              </p>
              <div className="w-[1030px]" />
            </div>
          </div>
          <div className={`${shared} border-r-4 items-end`}>
            <div className="absolute left-0 top-0 h-full flex flex-row gap-8 items-center -z-10">
              <div className="w-[1030px]" />
              <p style={jibril.style} className="text-9xl text-tomato [text-shadow:_0_0_18px_rgba(0,0,0,0.9)]">
                4
              </p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <div className="h-2 w-2 bg-tomato rotate-45" />
              <p style={jibril.style} className="uppercase text-[28px] leading-[48px] tracking-[0.5em] indent-[0.5em]">
                REPEAT
              </p>
              <div className="h-2 w-2 bg-tomato rotate-45" />
            </div>
            <p className="text-xl leading-10 tracking-[0.075em] text-right">
              And most importantly... Have fun with your friends immersing yourself in fantastic stories!
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <p className="text-xl text-center uppercase tracking-[0.07em]">Are you ready?</p>
            <Link
              className="bg-tomato hover:shadow-[0px_0px_60px_rgba(255,_90,_90,_0.4)] flex flex-row py-3.5 px-[30px] text-gray-200"
              href="#"
            >
              <p className="relative tracking-[0.07em] text-2xl font-extrabold">GET STARTED</p>
            </Link>
          </div>
          <div className="h-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Basics;
