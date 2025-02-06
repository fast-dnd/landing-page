"use client";

import { jibril } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

const GameMods = () => {
  const leaderboards = [
    {
      title: "AI BOX REWARDS",
      type: "daily-challenge",
      description: [
        {
          content:
            "🌟 Daily AI Challenge: Receive unique AI-generated quests daily. Test your skills with one attempt per day in this innovative text adventure format.",
        },
        {
          content:
            "🤖 Blockchain AI Validation: Experience fair gameplay with our decentralized AI JUDGE system, powered by Ora Protocol's advanced validation technology.",
        },
        {
          content:
            "📈 Competitive Rankings: Climb the AI-validated leaderboard and earn exclusive blockchain rewards from the AI-BOX system! 🎁",
        },
      ],
      image: "/images/aibox.jpg",
      alt: "AI-BOX Gaming System - Daily Blockchain Rewards and AI Challenges",
      keywords: ["AI Gaming", "Blockchain Rewards", "Daily Challenges"]
    },
    {
      title: "MULTIPLAYER BATTLES",
      type: "community-competition",
      description: [
        {
          content:
            "⚔️ Seasonal RPG Tournaments: Join epic community battles in our AI-powered text adventure arena. Compete in seasonal tournaments with unique community leaderboards and exclusive prizes! 🏆",
        },
        {
          content:
            "🌍 Global RPG Championships: Participate in worldwide competitions where communities battle for supremacy. Top-performing communities unlock special AI-generated content and rewards! 🎁",
        },
        {
          content:
            "🗓️ Monthly AI Challenges: Compete in month-long tournaments judged by our advanced AI system, evaluating your RPG strategy and storytelling skills.",
        },
        {
          content:
            "🎮 Blockchain Gaming: Enter tournaments using Arbitrum testnet tokens, allowing our AI judge to evaluate your D&D-style gameplay and narrative choices! 🔥",
        },
      ],
      image: "/images/community-battles.png",
      alt: "Multiplayer RPG Battles - AI-Powered Community Competitions",
      keywords: ["Multiplayer RPG", "Community Battles", "Tournament System"]
    },
    {
      title: "HEROIC ACHIEVEMENTS",
      type: "permanent-ranking",
      description: [
        {
          content:
            "🏅 AI RPG Mastery: Track your progress in our permanent leaderboard system, showcasing the best AI text adventure players across multiple categories.",
        },
        {
          content:
            "🎮 Strategic Gameplay: Earn ratings through tactical decisions and creative storytelling in our AI-driven adventure system.",
        },
        {
          content:
            "📣 Community Impact: Share your epic quest transcripts and climb the Influencer rankings in our text-based RPG community.",
        },
        {
          content:
            "✍️ Custom Adventures: Create and share your own D&D-style scenarios. Gain recognition as a top Content Creator in our AI gaming ecosystem!",
        },
      ],
      image: "/images/heroic-leaderboards.png",
      alt: "Heroic Achievement System - Custom D&D Adventures and AI Gaming Rankings",
      keywords: ["Achievement System", "Custom Adventures", "Content Creation"]
    },
  ];

  return (
    <section
      className="w-full relative mt-16 md:mt-40 px-4"
      aria-labelledby="game-modes-heading"
      itemScope
      itemType="https://schema.org/GamePlayMode"
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
              itemProp="name"
            >
              AI-Powered <span className="text-tomato">Gaming Achievements</span>
            </h2>
            <p className="uppercase text-lg tracking-[0.05em] mt-1">
              Master Different Gameplay Modes in Our Text Adventure RPG
            </p>
          </div>
          
          {leaderboards.map((board, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-12 w-full md:w-[90%] xl:w-4/5 mx-auto p-6 md:p-12 bg-gray-200 hover:shadow-basic transition-all duration-300 rounded-lg`}
              itemScope
              itemType="https://schema.org/GamePlayMode"
              data-game-mode={board.type}
            >
              <div className="md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
                <Image
                  src={board.image}
                  alt={board.alt}
                  width={768}
                  height={432}
                  className="w-full rounded-lg shadow-lg"
                  quality={100}
                  loading={index === 0 ? "eager" : "lazy"}
                  draggable={false}
                  itemProp="image"
                />
              </div>
              <div className="flex flex-col gap-4 md:gap-6 md:w-1/2 text-left">
                <h3
                  className="text-2xl md:text-3xl text-tomato leading-normal tracking-[1.5px]"
                  style={jibril.style}
                  itemProp="name"
                >
                  {board.title}
                </h3>
                <div className="flex flex-col gap-2 md:gap-4" itemProp="description">
                  {board.description.map((desc, idx) => (
                    <p
                      key={idx}
                      className="text-base md:text-lg leading-normal tracking-[1.2px]"
                    >
                      {desc.content}
                    </p>
                  ))}
                </div>
                <meta itemProp="keywords" content={board.keywords.join(", ")} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hidden SEO metadata */}
      <meta itemProp="gameCategory" content="AI RPG, Text Adventure, D&D Style Game" />
      <meta itemProp="gamePlatform" content="Web Browser, Blockchain Gaming" />
      <meta itemProp="feature" content="AI Challenges, Multiplayer Battles, Achievement System" />
    </section>
  );
};

export default GameMods;