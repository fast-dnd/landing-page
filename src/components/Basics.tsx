"use client";

import { jibril } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

const gameGuides = [
  {
    title: "Meet Your Guide",
    description:
      "Create adventures with our AI guide. Design your scenes, characters, and plots while our system enhances the narrative flow and maintains engaging storylines throughout your journey.",
  },
  {
    title: "Select Your Hero",
    description:
      "Choose from unique characters, each with distinct traits and backgrounds that influence your story. Invite friends to join your adventure by selecting complementary roles for a dynamic multiplayer experience.",
  },
  {
    title: "Take Action",
    description:
      "Shape the story through free-form actions or strategic character moves. Your choices affect character stats and story progression, leading to meaningful consequences in your adventure.",
  },
  {
    title: "Roll for Destiny",
    description:
      "Test your fate with dice rolls that determine action outcomes. High rolls might reveal crucial story elements, while low rolls create challenging situations requiring creative solutions.",
  },
  {
    title: "Guide Interaction",
    description:
      "Communicate with the system to adjust story elements, gather information about characters, or explore mysterious plot points. Shape your adventure through direct narrative input.",
  },
];

const Basics = () => {
  return (
    <section
      className="w-full relative mt-16 md:mt-40 px-4"
      aria-labelledby="basics-heading"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      <Image
        className="hidden md:block w-full absolute -z-20 max-h-[100%]"
        src="/images/bg-basics.png"
        alt="Section Background"
        width={1920}
        height={1840}
        priority={false}
      />
      <Image
        className="w-full md:hidden absolute -z-20 max-h-[100%]"
        src="/images/bg-basics-mobile.png"
        alt="Mobile Section Background"
        width={390}
        height={1161}
        priority={false}
      />

      <div className="w-full flex flex-col items-center">
        <div className="mt-8 md:mt-12 flex flex-col items-center gap-4 md:gap-6">
          <div
            style={jibril.style}
            className="text-center leading-[30px] md:leading-[40px] mb-4 md:mb-2 flex flex-col gap-2 md:gap-4"
          >
            <h2
              id="basics-heading"
              className="text-tomato text-4xl md:text-5xl tracking-[0.1em]"
              itemProp="name"
            >
              Getting Started
            </h2>
            <p className="text-xl md:text-2xl tracking-[0.05em] mt-1 md:mt-2">
              Core Gameplay Elements
            </p>
          </div>

          {gameGuides.map((guide, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row w-full md:w-[90%] xl:w-3/5 mx-auto p-4 md:p-6 xl:pl-16 xl:pr-8 xl:py-8 bg-gray-200 hover:shadow-basic transition-all duration-300 gap-4 md:gap-16 rounded-md"
              itemProp="step"
              itemScope
              itemType="https://schema.org/HowToStep"
            >
              <div className="hidden md:flex min-h-full items-center justify-center">
                <p
                  style={jibril.style}
                  className="text-4xl md:text-5xl text-tomato [text-shadow:_0_0_18px_rgba(0,0,0,0.9)]"
                  aria-hidden="true"
                >
                  {index + 1}
                </p>
              </div>

              <div className="flex flex-col gap-2 md:gap-4">
                <div className="flex flex-row items-center gap-2 md:gap-4">
                  <div
                    className="h-2 w-2 bg-tomato rotate-45"
                    aria-hidden="true"
                  />
                  <h3
                    style={jibril.style}
                    className="text-lg md:text-2xl leading-normal tracking-[1.5px] md:tracking-[2.8px]"
                    itemProp="name"
                  >
                    {guide.title}
                  </h3>
                  <div
                    className="h-2 w-2 bg-tomato rotate-45"
                    aria-hidden="true"
                  />
                </div>
                <p
                  className="text-sm md:text-lg leading-normal tracking-[1px] md:tracking-[1.5px]"
                  itemProp="text"
                >
                  {guide.description}
                </p>
              </div>
            </div>
          ))}

          <div className="h-4" aria-hidden="true" />
        </div>
      </div>

      <meta itemProp="totalTime" content="PT10M" />
      <meta itemProp="tool" content="Web Browser" />
      <meta itemProp="supply" content="Internet Connection" />
    </section>
  );
};

export default Basics;
