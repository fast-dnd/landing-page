"use client";

import { jibril } from "@/utils/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Basics = () => {
  const cards = [
    {
      title: "MEET OUR DM",
      description:
        "The adventures you will play are created by the players and further developed by our AI dungeon master, Bob. All the scenes, playable and NPC characters, and plots are preset by the player, while Bob pushes the story further and makes it exciting until the very end. Choose one of the adventures from the list and dive into the unknown.",
    },
    {
      title: "CHOOSE THE CHARACTER",
      description:
        "Once inside the adventure, you will have the opportunity to select one of the playable characters whose role you will assume within the story. Choose wisely, as the character's traits and background will influence the outcome of your actions and decisions. Invite your friends and have them choose one of the other characters so you can all enjoy a unique multiplayer experience.",
    },
    {
      title: "CHOOSE YOUR ACTION",
      description:
        "You can either take free will actions, allowing you to type in any action for your character to perform, or you can opt for one of the default moves to influence your character's stats. Be cautious! This is a unique storytelling game where you can gain or lose health, and your character might even die as a result of your choices, when the story concludes.",
    },
    {
      title: "ROLL ‘EM",
      description:
        "After choosing your action, you roll the dice. This is where the fun begins! Depending on the dice roll, you might either succeed or fail in your action. Did you want to pilot the plane to the next location? Rolled less than 5? It's not going to end well for you and your crew. Did you want to look around? Rolled a 12? Excellent, you've found a huge hint for the next scene.",
    },
    {
      title: "ASK BOB",
      description:
        "One unique feature of our game is the option to communicate with Bob by asking him questions. Not satisfied with the direction the adventure is taking? Ask Bob to make adjustments, and he will. Need additional information about an NPC character or mysterious lights in the night? Just ask Bob, and he will provide you with truthful and useful information.",
    },
  ];

  return (
    <div className="w-full relative mt-64 xl:mt-80">
      <Image
        className="max-md:hidden w-full absolute -z-20 max-h-[100%]"
        src="/images/bg-basics.png"
        alt="basics"
        width={1920}
        height={1840}
      />
      <Image
        className="w-full md:hidden absolute -z-20 max-h-[100%]"
        src="/images/bg-basics-mobile.png"
        alt="basics"
        width={390}
        height={1161}
      />
      <div className="w-full flex flex-col items-center">
        <div className="mt-12 flex flex-col items-center gap-6 cursor-default">
          <div
            style={jibril.style}
            className="text-center leading-[60px] mb-2 flex flex-col xl:gap-8"
          >
            <div className="uppercase text-tomato text-3xl xl:text-[72px] tracking-[0.4em] indent-[0.4em]">
              Master
            </div>
            <div className="uppercase text-base xl:text-[32px] tracking-[0.18em] indent-[0.18em] mt-2">
              the basics
            </div>
          </div>
          {cards.map((card, index) => (
            <React.Fragment key={index}>
              <div className="flex w-[90%] xl:w-3/5 mx-auto p-6 xl:pl-16 xl:pr-8 xl:py-8 bg-gray-200 hover:shadow-basic transition-all duration-30 gap-16 rounded-md">
                <div className="hidden xl:flex min-h-full items-center justify-center">
                  <p
                    style={jibril.style}
                    className="text-7xl text-tomato [text-shadow:_0_0_18px_rgba(0,0,0,0.9)]"
                  >
                    {index + 1}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row items-center gap-4">
                    <div className="h-2 w-2 bg-tomato rotate-45" />
                    <p
                      style={jibril.style}
                      className="uppercase text-xl md:text-3xl leading-normal tracking-[2.8px]"
                    >
                      {card.title}
                    </p>
                    <div className="h-2 w-2 bg-tomato rotate-45" />
                  </div>
                  <p className="text-sm md:text-xl leading-normal tracking-[1.5px]">
                    {card.description}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}

          <div className="mt-12 md:mt-40 flex flex-col gap-4 items-center">
            <p className="text-3xl text-center uppercase tracking-[2.8px]">
              Are you ready?
            </p>
            <Link
              className="mt-4 md:mt-10 bg-tomato hover:scale-105 hover:shadow-[0px_0px_60px_rgba(255,_90,_90,_0.4)] flex flex-row py-4 tracking-widest text-xl font-extrabold px-24 text-gray-200 transition-all duration-300 rounded-md"
              href="https://play.v3rpg.com/"
              target="_blank"
            >
              PLAY NOW
            </Link>
          </div>
          <div className="h-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Basics;
