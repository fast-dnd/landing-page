"use client";

import { jibril } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

const Basics = () => {
  const cards = [
    {
      title: "🤖 MEET OUR DM",
      description:
        "The adventures you will play are created by the players and further developed by our AI dungeon master, Bob. All the scenes, playable and NPC characters, and plots are preset by the player, while Bob pushes the story further and makes it exciting until the very end. Choose one of the adventures from the list and dive into the unknown. 🌌",
    },
    {
      title: "🎭 CHOOSE THE CHARACTER",
      description:
        "Once inside the adventure, you will have the opportunity to select one of the playable characters whose role you will assume within the story. Choose wisely, as the character's traits and background will influence the outcome of your actions and decisions. 🧠 Invite your friends and have them choose one of the other characters so you can all enjoy a unique multiplayer experience. 🤝",
    },
    {
      title: "🗡️ CHOOSE YOUR ACTION",
      description:
        "You can either take free will actions, allowing you to type in any action for your character to perform, or you can opt for one of the default moves to influence your character's stats. ⚠️ Be cautious! This is a unique storytelling game where you can gain or lose health, and your character might even die 💀 as a result of your choices, when the story concludes.",
    },
    {
      title: "🎲 ROLL ‘EM",
      description:
        "After choosing your action, you roll the dice. This is where the fun begins! 🎉 Depending on the dice roll, you might either succeed or fail in your action. Did you want to pilot the plane to the next location? ✈️ Rolled less than 5? It's not going to end well for you and your crew. Did you want to look around? Rolled a 12? 🔍 Excellent, you've found a huge hint for the next scene.",
    },
    {
      title: "💬 ASK BOB",
      description:
        "One unique feature of our game is the option to communicate with Bob by asking him questions. Not satisfied with the direction the adventure is taking? ❓ Ask Bob to make adjustments, and he will. Need additional information about an NPC character or mysterious lights in the night? 🌌 Just ask Bob, and he will provide you with truthful and useful information. 💡",
    },
  ];

  return (
    <section
      className="w-full relative mt-16 md:mt-40 px-4"
      aria-labelledby="basics-heading"
    >
      <Image
        className="hidden md:block w-full absolute -z-20 max-h-[100%]"
        src="/images/bg-basics.png"
        alt="Background illustration for the Basics section"
        width={1920}
        height={1840}
      />
      <Image
        className="w-full md:hidden absolute -z-20 max-h-[100%]"
        src="/images/bg-basics-mobile.png"
        alt="Mobile version background illustration for the Basics section"
        width={390}
        height={1161}
      />
      <div className="w-full flex flex-col items-center">
        <div className="mt-8 md:mt-12 flex flex-col items-center gap-4 md:gap-6 cursor-default">
          <div
            style={jibril.style}
            className="text-center leading-[30px] md:leading-[40px] mb-4 md:mb-2 flex flex-col gap-2 md:gap-4"
          >
            <h2
              id="basics-heading"
              className="uppercase text-tomato text-4xl md:text-6xl tracking-[0.1em]"
            >
              Master
            </h2>
            <p className="uppercase text-xl md:text-3xl tracking-[0.05em] mt-1 md:mt-2">
              the basics
            </p>
          </div>
          {cards.map((card, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col md:flex-row w-full md:w-[90%] xl:w-3/5 mx-auto p-4 md:p-6 xl:pl-16 xl:pr-8 xl:py-8 bg-gray-200 hover:shadow-basic transition-all duration-300 gap-4 md:gap-16 rounded-md">
                <div className="hidden md:flex min-h-full items-center justify-center">
                  <p
                    style={jibril.style}
                    className="text-4xl md:text-6xl text-tomato [text-shadow:_0_0_18px_rgba(0,0,0,0.9)]"
                  >
                    {index + 1}
                  </p>
                </div>
                <div className="flex flex-col gap-2 md:gap-4">
                  <div className="flex flex-row items-center gap-2 md:gap-4">
                    <div className="h-2 w-2 bg-tomato rotate-45" />
                    <h3
                      style={jibril.style}
                      className="uppercase text-lg md:text-3xl leading-normal tracking-[1.5px] md:tracking-[2.8px]"
                    >
                      {card.title}
                    </h3>
                    <div className="h-2 w-2 bg-tomato rotate-45" />
                  </div>
                  <p className="text-sm md:text-xl leading-normal tracking-[1px] md:tracking-[1.5px]">
                    {card.description}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
          <div className="h-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Basics;
