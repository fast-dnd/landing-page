"use client";

import { jibril } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Daily Challenges",
    type: "daily-rewards",
    description: [
      {
        content:
          "Complete unique quests with one attempt per day. Our validation system ensures fair play and authentic achievements.",
      },
      {
        content:
          "Climb competitive rankings and earn exclusive rewards through strategic gameplay and creative problem-solving.",
      },
    ],
    image: "/images/aibox.jpg",
    alt: "Daily Challenge Interface",
    keywords: ["Daily Quests", "Competitive Play", "Rewards"],
  },
  {
    title: "Community Events",
    type: "multiplayer",
    description: [
      {
        content:
          "Join seasonal tournaments and compete in epic community battles. Rise through the ranks to unlock exclusive content.",
      },
      {
        content:
          "Participate in global championships where communities vie for supremacy and prestigious rewards.",
      },
      {
        content:
          "Enter monthly competitions that test your strategic prowess and narrative creativity.",
      },
    ],
    image: "/images/community-battles.png",
    alt: "Community Battle Interface",
    keywords: ["Tournaments", "Community Events", "Championships"],
  },
  {
    title: "Achievement System",
    type: "progression",
    description: [
      {
        content:
          "Track your journey through multiple categories. Master tactical decisions and creative storytelling.",
      },
      {
        content:
          "Share your epic adventures and climb the influence rankings within our vibrant community.",
      },
      {
        content:
          "Create and share custom scenarios. Build your reputation as a leading content creator.",
      },
    ],
    image: "/images/heroic-leaderboards.png",
    alt: "Achievement System Interface",
    keywords: ["Progression", "Content Creation", "Community Impact"],
  },
];

const GameMods = () => {
  return (
    <section
      className="w-full relative mt-16 md:mt-40 px-4"
      aria-labelledby="features-heading"
      itemScope
      itemType="https://schema.org/GamePlayMode"
    >
      <div className="w-full flex flex-col items-center">
        <div className="mt-8 flex flex-col items-center gap-8 md:gap-16 cursor-default">
          <div
            style={jibril.style}
            className="text-center leading-[30px] md:leading-[40px] mb-4"
          >
            <h2
              id="features-heading"
              className="text-3xl md:text-4xl tracking-[0.1em]"
              itemProp="name"
            >
              Game <span className="text-tomato">Features</span>
            </h2>
            <p className="text-lg tracking-[0.05em] mt-1">
              Explore Multiple Ways to Play
            </p>
          </div>

          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-12 w-full md:w-[80%] xl:w-3/4 mx-auto p-6 md:p-12 bg-gray-200 hover:shadow-basic transition-all duration-300 rounded-lg`}
              itemScope
              itemType="https://schema.org/GamePlayMode"
              data-feature={feature.type}
            >
              <div className="md:w-2/5 flex items-center justify-center mb-4 md:mb-0">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={600}
                  height={338}
                  className="w-full rounded-lg shadow-lg"
                  loading={index === 0 ? "eager" : "lazy"}
                  itemProp="image"
                />
              </div>
              <div className="flex flex-col gap-4 md:gap-6 md:w-3/5 text-left">
                <h3
                  className="text-2xl md:text-3xl text-tomato leading-normal tracking-[1.5px]"
                  style={jibril.style}
                  itemProp="name"
                >
                  {feature.title}
                </h3>
                <div
                  className="flex flex-col gap-2 md:gap-4"
                  itemProp="description"
                >
                  {feature.description.map((desc, idx) => (
                    <p
                      key={idx}
                      className="text-base md:text-lg leading-normal tracking-[1.2px]"
                    >
                      {desc.content}
                    </p>
                  ))}
                </div>
                <meta
                  itemProp="keywords"
                  content={feature.keywords.join(", ")}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <meta itemProp="gameCategory" content="RPG, Strategy" />
      <meta itemProp="gamePlatform" content="Web Browser" />
      <meta
        itemProp="feature"
        content="Daily Challenges, Community Events, Achievement System"
      />
    </section>
  );
};

export default GameMods;
