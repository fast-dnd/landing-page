"use client";

import { jibril } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

const GameMods = () => {
  const leaderboards = [
    {
      title: "AI BOX",
      description: [
        {
          content:
            "🌟 Daily Unique Query: Each day, you receive a unique query. It’s simple: you have one chance daily to provide your answer to this query.",
        },
        {
          content:
            "🤖 Decentralized AI JUDGE: A decentralized AI JUDGE powered by Ora Protocol will determine your rating, and a transaction will be made for this.",
        },
        {
          content:
            "📈 Climb the Leaderboard: Depending on your rating, you climb the daily leaderboard. The best players can claim valuable rewards from AI-BOX! 🎁",
        },
      ],
      image: "/images/aibox.jpg",
      alt: "AI-BOX Leaderboard",
    },
    {
      title: "COMMUNITY BATTLES",
      description: [
        {
          content:
            "⚔️ Seasonal Community Battles: We will start creating seasons where communities will battle each other. Each community will have its own leaderboards, and players will compete for specific community prizes. The best players earn these prizes! 🏆",
        },
        {
          content:
            "🌍 Global Competition: There is also a global competition where the community that brings the most engagement wins. Depending on the community's place in the leaderboards, all players from those communities will earn secret prizes! 🤫🎁",
        },
        {
          content:
            "🗓️ Monthly Tournaments: Tournaments will last for one month, and again, the Ora Protocol AI-JUDGE will evaluate transcripts generated from playing regular games.",
        },
        {
          content:
            "🎮 How to Participate: To participate, you need to win in a regular adventure game and commit a transaction with Arbitrum testnet tokens, allowing the AI judge to evaluate your RPG skills from the transcript! 🔥",
        },
      ],
      image: "/images/community-battles.png",
      alt: "Community Battles Leaderboard",
    },
    {
      title: "HEROIC RATING",
      description: [
        {
          content:
            "🏅 Everlasting Recognition: Heroic rating is regular leaderboard that determine your RPG skill and are everlasting. They highlight the best players in three categories.",
        },
        {
          content:
            "🎮 Gameplay: This rating is gained by playing the game properly and making wise decisions during adventures.",
        },
        {
          content:
            "📣 Influencer: Share your adventure transcripts to gain influence and rise in the Influencer category.",
        },
        {
          content:
            "✍️ Content Creator: Create adventures that other players try out. The more popular your adventures, the higher your Content Creator rating!",
        },
      ],
      image: "/images/heroic-leaderboards.png", // Placeholder for a new image if available
      alt: "Heroic Leaderboards",
    },
  ];

  return (
    <div className="w-full relative mt-64 xl:mt-80">
      <div className="w-full flex flex-col items-center">
        <div className="mt-12 flex flex-col items-center gap-16 cursor-default">
          <div
            style={jibril.style}
            className="text-center leading-[60px] mb-2 flex flex-col xl:gap-8"
          >
            <h2 className="uppercase text-tomato text-xl xl:text-[72px] tracking-[0.4em] indent-[0.4em]">
              Type of Leaderboards
            </h2>
            <div className="uppercase text-base xl:text-[32px] tracking-[0.18em] indent-[0.18em] mt-2">
              Explore different ways to rank up
            </div>
          </div>
          {leaderboards.map((board, index) => (
            <React.Fragment key={index}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 w-[90%] xl:w-4/5 mx-auto p-12 bg-gray-200 hover:shadow-basic transition-all duration-300 rounded-lg`}
              >
                <div className="lg:w-1/2 flex items-center justify-center">
                  <Image
                    src={board.image}
                    alt={board.alt}
                    width={768}
                    height={432}
                    className="w-full rounded-lg shadow-lg"
                    quality={100}
                    draggable={false}
                  />
                </div>
                <div className="flex flex-col gap-6 lg:w-1/2 text-left">
                  <p
                    style={jibril.style}
                    className="text-3xl md:text-4xl text-tomato leading-normal tracking-[2.8px]"
                  >
                    {board.title}
                  </p>
                  <div className="flex flex-col gap-4">
                    {board.description.map((desc, idx) => (
                      <p
                        key={idx}
                        className="text-lg md:text-xl leading-normal tracking-[1.5px]"
                      >
                        {desc.content}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameMods;
