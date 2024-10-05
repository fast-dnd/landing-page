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
      question: "What is V3RPG?",
      answer: (
        <>
          V3RPG is an{" "}
          <span className="font-bold">AI-powered RPG adventure game</span> where
          players can create their own characters, embark on unique adventures,
          and compete in various <span className="font-bold">leaderboards</span>
          . With a decentralized AI judge powered by the{" "}
          <span className="font-bold text-tomato">Ora Protocol</span>, the game
          offers thrilling challenges and rewards. 🎮
        </>
      ),
    },
    {
      question: "How do I participate in community battles?",
      answer: (
        <>
          To participate in <span className="font-bold">Community Battles</span>
          , you need to be part of a community and compete during the{" "}
          <span className="font-bold">season</span>. Each community has its own
          leaderboard, and players can earn specific community prizes. The
          community with the most engagement wins, and all its members get{" "}
          <span className="font-bold">secret rewards</span>! 🏆🔥
        </>
      ),
    },
    {
      question: "What are AI-BOX challenges?",
      answer: (
        <>
          <span className="font-bold">AI-BOX</span> is a daily challenge where
          each player gets a<span className="font-bold"> unique query</span>.
          You have one chance each day to answer, and our decentralized AI
          judge, powered by Ora Protocol, determines your rating. Depending on
          your rating, you can{" "}
          <span className="font-bold">climb the leaderboard</span> and claim
          valuable rewards. 🌟🤖
        </>
      ),
    },
    {
      question: "How do I create an adventure in V3RPG?",
      answer: (
        <>
          Creating an adventure in V3RPG is simple. As a{" "}
          <span className="font-bold">Content Creator</span>, you can design an
          adventure with scenes, NPCs, and plots. Our AI dungeon master, Bob,
          will guide the story and help develop it further, making it{" "}
          <span className="font-bold">exciting</span> and unpredictable. 🌌✍️
        </>
      ),
    },
    {
      question: "What are Heroic Leaderboards?",
      answer: (
        <>
          <span className="font-bold">Heroic Leaderboards</span> are everlasting
          leaderboards that showcase the best players in three categories:{" "}
          <span className="font-bold">Gameplay</span> (playing the game
          properly), <span className="font-bold">Influencer</span> (sharing
          transcripts), and <span className="font-bold">Content Creator</span>{" "}
          (creating adventures). Compete in these categories to earn recognition
          for your <span className="font-bold">RPG skills</span>! 🏅🎮
        </>
      ),
    },
    {
      question: "How can I invite my friends to play?",
      answer: (
        <>
          Invite your friends to join the adventure by sharing the game link.
          Together, you can choose characters and explore the story in a{" "}
          <span className="font-bold">multiplayer experience</span>. The more,
          the merrier! 🤝✨
        </>
      ),
    },
  ];

  return (
    <section
      className="w-full flex flex-col items-center px-8 py-16"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="uppercase text-tomato text-4xl mb-12"
        style={jibril.style}
      >
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl w-full flex flex-col gap-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md  transition-transform duration-300"
          >
            <button
              className="flex justify-between items-center w-full text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="text-2xl font-semibold  flex-1">{faq.question}</h3>
              {activeIndex === index ? (
                <ChevronUpIcon className="w-6 h-6 " />
              ) : (
                <ChevronDownIcon className="w-6 h-6 " />
              )}
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`mt-4 text-lg leading-relaxed transition-all duration-300 overflow-hidden ${
                activeIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              {activeIndex === index && <p>{faq.answer}</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 md:mt-40 flex flex-col gap-4 items-center">
        <p
          className="text-3xl text-center uppercase tracking-[2.8px]"
          style={jibril.style}
        >
          Are you <span className="text-tomato ">ready ?</span>
        </p>
        <Link
          className="mt-4 md:mt-10 bg-tomato hover:scale-105 hover:shadow-[0px_0px_60px_rgba(255,_90,_90,_0.4)] flex flex-row py-4 tracking-widest text-xl font-extrabold px-24 text-gray-200 transition-all duration-300 rounded-md"
          href="https://play.v3rpg.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          PLAY NOW
        </Link>
      </div>
    </section>
  );
};

export default FAQ;
