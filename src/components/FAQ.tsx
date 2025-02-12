"use client";

import React, { useState } from "react";
import { jibril } from "@/utils/fonts";
import Link from "next/link";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const faqItems = [
  {
    question: "What is v3RPG?",
    answer: (
      <>
        A next-generation gaming platform featuring{" "}
        <span className="font-bold">advanced RPG mechanics</span>. Players
        create characters, experience{" "}
        <span className="font-bold">dynamic storylines</span>, and compete on{" "}
        <span className="font-bold">validated leaderboards</span>. Powered by
        the <span className="font-bold text-tomato">Ora Protocol</span> for fair
        gameplay and storytelling.
      </>
    ),
    category: "gameplay",
  },
  {
    question: "How do multiplayer features work?",
    answer: (
      <>
        Our multiplayer system enables{" "}
        <span className="font-bold">seasonal tournaments</span> and{" "}
        <span className="font-bold">community events</span>. Players compete for{" "}
        <span className="font-bold">exclusive rewards</span>, with validated
        scoring and achievement tracking. Form alliances to unlock{" "}
        <span className="font-bold">special content</span>.
      </>
    ),
    category: "multiplayer",
  },
  {
    question: "What are daily challenges?",
    answer: (
      <>
        <span className="font-bold">Daily challenges</span> are unique quests
        generated for each player. Our{" "}
        <span className="font-bold">validation system</span> evaluates solutions
        fairly. Complete challenges to earn rewards and climb global rankings.
      </>
    ),
    category: "challenges",
  },
  {
    question: "Can I create custom adventures?",
    answer: (
      <>
        As a <span className="font-bold">content creator</span>, design your own{" "}
        <span className="font-bold">RPG adventures</span>. Our system enhances
        your stories with <span className="font-bold">dynamic elements</span>{" "}
        and <span className="font-bold">interactive features</span>. Share your
        creations with the community.
      </>
    ),
    category: "creation",
  },
  {
    question: "What achievement categories exist?",
    answer: (
      <>
        Our achievement system includes three categories:{" "}
        <span className="font-bold">Strategic Gameplay</span>,{" "}
        <span className="font-bold">Community Impact</span>, and{" "}
        <span className="font-bold">Content Creation</span>. Each offers unique
        rewards and recognition within the ecosystem.
      </>
    ),
    category: "achievements",
  },
  {
    question: "How does cooperative play work?",
    answer: (
      <>
        Invite friends to join your adventures. Experience{" "}
        <span className="font-bold">collaborative storytelling</span> and tackle{" "}
        <span className="font-bold">group challenges</span>. Form parties and
        embark on epic quests together.
      </>
    ),
    category: "multiplayer",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      className="w-full flex flex-col items-center px-8 py-16"
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <h2
        id="faq-heading"
        className="text-tomato text-4xl mb-12"
        style={jibril.style}
      >
        Gameplay Guide & FAQ
      </h2>

      <div className="max-w-4xl w-full flex flex-col gap-8">
        {faqItems.map((faq, index) => (
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
              <h3 className="text-2xl font-semibold flex-1" itemProp="name">
                {faq.question}
              </h3>
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

      <div className="mt-12 md:mt-40 flex flex-col gap-4 items-center">
        <p
          className="text-3xl text-center tracking-[2.8px]"
          style={jibril.style}
        >
          Begin Your <span className="text-tomato">Adventure</span>
        </p>
        <Link
          className="mt-4 md:mt-10 bg-tomato hover:scale-105 hover:shadow-[0px_0px_60px_rgba(255,_90,_90,_0.4)] flex py-4 tracking-widest text-xl font-extrabold px-24 text-gray-200 transition-all duration-300 rounded-md"
          href="https://play.v3rpg.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Start playing v3RPG"
        >
          Play Now
        </Link>
      </div>

      <meta
        itemProp="description"
        content="Comprehensive guide to v3RPG's gameplay mechanics, multiplayer features, and reward systems."
      />
    </section>
  );
};

export default FAQ;
