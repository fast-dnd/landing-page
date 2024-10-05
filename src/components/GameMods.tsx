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
      alt: "AI-BOX Leaderboard showing daily unique queries and rewards",
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
      alt: "Community Battles leaderboard showcasing seasonal competitions and prizes",
    },
    {
      title: "HEROIC RATING",
      description: [
        {
          content:
            "🏅 Everlasting Recognition: Heroic rating is a regular leaderboard that determines your RPG skill and is everlasting. It highlights the best players in three categories.",
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
      image: "/images/heroic-leaderboards.png",
      alt: "Heroic Leaderboards showing top RPG players in various categories",
    },
  ];

  return (
    <section
      className="w-full relative mt-16 md:mt-40 px-4"
      aria-labelledby="game-modes-heading"
    >
      <div className="w-full flex flex-col items-center">
        <div className="mt-8 flex flex-col items-center gap-8 md:gap-16 cursor-default">
          <div
            style={jibril.style}
            className="text-center leading-[30px] md:leading-[40px] mb-4 flex flex-col gap-2"
          >
            <h2
              id="game-modes-heading"
              className="uppercase text-3xl md:text-4xl tracking-[0.1em]"
            >
              Type of <span className="text-tomato">Leaderboards</span>
            </h2>
            <p className="uppercase text-lg tracking-[0.05em] mt-1">
              Explore different ways to rank up
            </p>
          </div>
          {leaderboards.map((board, index) => (
            <React.Fragment key={index}>
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-8 md:gap-12 w-full md:w-[90%] xl:w-4/5 mx-auto p-6 md:p-12 bg-gray-200 hover:shadow-basic transition-all duration-300 rounded-lg`}
                aria-labelledby={`leaderboard-title-${index}`}
                aria-describedby={`leaderboard-desc-${index}`}
              >
                <div className="md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
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
                <div className="flex flex-col gap-4 md:gap-6 md:w-1/2 text-left">
                  <h3
                    id={`leaderboard-title-${index}`}
                    style={jibril.style}
                    className="text-2xl md:text-3xl text-tomato leading-normal tracking-[1.5px]"
                  >
                    {board.title}
                  </h3>
                  <div
                    id={`leaderboard-desc-${index}`}
                    className="flex flex-col gap-2 md:gap-4"
                  >
                    {board.description.map((desc, idx) => (
                      <p
                        key={idx}
                        className="text-base md:text-lg leading-normal tracking-[1.2px]"
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
    </section>
  );
};

export default GameMods;
