"use client";

import React, { useState } from "react";
import { jibril } from "@/utils/fonts";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is V3RPG and how does AI enhance the gameplay?",
      answer: (
        <>
          V3RPG is a <span className="font-bold">next-generation AI text adventure game</span> featuring{" "}
          <span className="font-bold">advanced D&D-style gameplay</span>. Players create custom characters,
          experience <span className="font-bold">AI-generated storylines</span>, and compete in{" "}
          <span className="font-bold">blockchain-validated leaderboards</span>. Powered by the{" "}
          <span className="font-bold text-tomato">Ora Protocol</span>, our AI system ensures fair gameplay
          and dynamic storytelling. 🎮🤖
        </>
      ),
      category: "gameplay",
    },
    {
      question: "How do multiplayer battles work in this AI RPG?",
      answer: (
        <>
          Our <span className="font-bold">AI-powered multiplayer system</span> enables exciting{" "}
          <span className="font-bold">community battles</span> during seasonal events. Communities compete
          for <span className="font-bold">exclusive blockchain rewards</span>, with AI-validated scoring
          and achievement tracking. Join forces with other players to unlock{" "}
          <span className="font-bold">special gameplay features</span>! 🏆🔥
        </>
      ),
      category: "multiplayer",
    },
    {
      question: "What makes AI-BOX challenges unique?",
      answer: (
        <>
          <span className="font-bold">AI-BOX challenges</span> are daily{" "}
          <span className="font-bold">AI-generated quests</span> unique to each player. Our{" "}
          <span className="font-bold">decentralized AI validation system</span> powered by Ora Protocol
          evaluates your solutions. Succeed to earn <span className="font-bold">blockchain rewards</span>{" "}
          and climb the global rankings! 🌟🤖
        </>
      ),
      category: "challenges",
    },
    {
      question: "How can I create custom D&D-style adventures?",
      answer: (
        <>
          As a <span className="font-bold">content creator in our AI ecosystem</span>, you can design
          custom <span className="font-bold">text-based RPG adventures</span>. Our AI dungeon master
          enhances your stories with <span className="font-bold">dynamic narratives</span> and{" "}
          <span className="font-bold">interactive elements</span>. Create engaging quests for the
          community! 🌌✍️
        </>
      ),
      category: "creation",
    },
    {
      question: "What are the different achievement systems?",
      answer: (
        <>
          Our <span className="font-bold">AI-tracked achievement system</span> includes permanent
          leaderboards in three categories: <span className="font-bold">Strategic Gameplay</span>,{" "}
          <span className="font-bold">Community Influence</span>, and{" "}
          <span className="font-bold">Content Creation</span>. Each category offers unique rewards
          and recognition in our <span className="font-bold">AI gaming ecosystem</span>! 🏅🎮
        </>
      ),
      category: "achievements",
    },
    {
      question: "How does multiplayer cooperation work?",
      answer: (
        <>
          Invite friends to join your <span className="font-bold">AI-driven adventures</span>! Experience{" "}
          <span className="font-bold">collaborative storytelling</span> and tackle challenges together
          in our <span className="font-bold">multiplayer text RPG</span>. Create parties and embark on
          epic quests! 🤝✨
        </>
      ),
      category: "multiplayer",
    },
  ];

  return (
    <section
      className="w-full flex flex-col items-center px-8 py-16"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <h2
        id="faq-heading"
        className="uppercase text-tomato text-4xl mb-12"
        style={jibril.style}
      >
        AI RPG Gameplay Guide & FAQ
      </h2>
      <div className="max-w-4xl w-full flex flex-col gap-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md transition-transform duration-300"
            itemScope
            itemType="https://schema.org/Question"
            data-category={faq.category}
          >
            <button
              className="flex justify-between items-center w-full text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="text-2xl font-semibold flex-1" itemProp="name">{faq.question}</h3>
              {activeIndex === index ? (
                <ChevronUpIcon className="w-6 h-6" aria-hidden="true" />
              ) : (
                <ChevronDownIcon className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`mt-4 text-lg leading-relaxed transition-all duration-300 overflow-hidden ${
                activeIndex === index ? "max-h-96" : "max-h-0"
              }`}
              itemScope
              itemType="https://schema.org/Answer"
              itemProp="acceptedAnswer"
            >
              {activeIndex === index && <p itemProp="text">{faq.answer}</p>}
            </div>
          </div>
        ))}
      </div>
      <div 
        className="mt-12 md:mt-40 flex flex-col gap-4 items-center"
        itemScope
        itemType="https://schema.org/GamePlayMode"
      >
        <p
          className="text-3xl text-center uppercase tracking-[2.8px]"
          style={jibril.style}
        >
          Start Your <span className="text-tomato">AI Adventure</span> Now
        </p>
        <Link
          className="mt-4 md:mt-10 bg-tomato hover:scale-105 hover:shadow-[0px_0px_60px_rgba(255,_90,_90,_0.4)] flex flex-row py-4 tracking-widest text-xl font-extrabold px-24 text-gray-200 transition-all duration-300 rounded-md"
          href="https://play.v3rpg.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Start playing V3RPG - AI-powered text adventure game"
          title="Play AI Text Adventure RPG"
        >
          PLAY NOW
        </Link>
      </div>

      {/* Hidden SEO metadata */}
      <meta itemProp="keywords" content="AI RPG, Text Adventure, D&D Style Game, AI Gaming, Multiplayer RPG" />
      <meta itemProp="description" content="Frequently asked questions about V3RPG's AI-powered text adventure system, multiplayer battles, and custom D&D-style gameplay." />
    </section>
  );
};

export default FAQ;
