"use client";

import { jibril } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Basics = () => {
  const cards = [
    {
      title: "Listen up!",
      description:
        "Our smart AI buddy will start things off by setting the scene. You might be in a spooky castle, a busy city, or even outer space! The AI will tell you everything you need to know. Who's in the room with you? What's that thing in the corner? Is that a treasure chest? So listen up, adventurers!",
    },
    {
      title: "YOUR MOVE!",
      description:
        "Now, it's your turn to step up! Think about what your character should do based on what the AI just told you. Want to chat with that friendly-looking NPC over there? Go for it! Feel like inspecting that mysterious object? Why not! But remember, you can only do what's possible in the game world and what your character can actually do. So choose wisely!",
    },
    {
      title: "Roll 'Em!",
      description:
        "So you've made your move. But how did it turn out? That's where our dice come in. The AI will use them to decide if your action was a big success or an epic fail. The fun part is, you never know how it'll turn out - every roll is a new adventure!",
    },
    {
      title: "Rinse and Repeat!",
      description:
        "And there you have it. You'll keep listening, deciding, and rolling as you make your way through the game. But the most important thing of all? Have a blast with your friends, let your imagination run wild, and enjoy your epic adventure. Happy gaming!",
    },
  ];

  return (
    <Slide direction="right" triggerOnce>
      <div className="w-full relative mt-20">
        <Image
          className="w-full absolute -z-20 max-h-[100%]"
          src="/images/bg-basics.png"
          alt="basics"
          width={1920}
          height={1840}
        />
        <div className="w-full flex flex-col items-center">
          <div className="mt-12 flex flex-col items-center gap-6 cursor-default">
            <div style={jibril.style} className="text-center leading-[60px] mb-2 flex flex-col">
              <Fade
                triggerOnce
                cascade
                damping={0.1}
                delay={500}
                className="uppercase text-tomato text-3xl md:text-[72px] tracking-[0.4em] indent-[0.4em]"
              >
                Master
              </Fade>
              <Fade
                triggerOnce
                cascade
                damping={0.03}
                delay={1000}
                className="uppercase text-base md:text-[32px] tracking-[0.18em] indent-[0.18em] mt-2"
              >
                the basics
              </Fade>
            </div>
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex w-[90%] md:w-3/5 mx-auto p-6 md:pl-16 md:pr-8 md:py-8 bg-gray-200 hover:shadow-basic transition-all duration-30 gap-16"
              >
                <div className="hidden md:flex min-h-full items-center justify-center">
                  <p style={jibril.style} className="text-7xl text-tomato [text-shadow:_0_0_18px_rgba(0,0,0,0.9)]">
                    {index + 1}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row items-center gap-4">
                    <div className="h-2 w-2 bg-tomato rotate-45" />
                    <p
                      style={jibril.style}
                      className="uppercase text-xl whitespace-nowrap md:text-3xl leading-normal tracking-[2.8px]"
                    >
                      {card.title}
                    </p>
                    <div className="h-2 w-2 bg-tomato rotate-45" />
                  </div>
                  <p className="text-sm md:text-xl leading-normal tracking-[1.5px]">{card.description}</p>
                </div>
              </div>
            ))}

            <Zoom triggerOnce>
              <div className="mt-12 md:mt-40 flex flex-col gap-4 items-center">
                <p className="text-3xl text-center uppercase tracking-[2.8px]">Are you ready?</p>
                <Link
                  className="mt-4 md:mt-10 bg-tomato hover:scale-105 hover:shadow-[0px_0px_60px_rgba(255,_90,_90,_0.4)] flex flex-row py-4 px-24 text-gray-200 transition-all duration-300 rounded-md"
                  href="https://v3rpg.fastdnd.net/"
                >
                  <p className="relative tracking-widest text-xl font-extrabold">PLAY NOW</p>
                </Link>
              </div>
            </Zoom>
            <div className="h-4"></div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Basics;
