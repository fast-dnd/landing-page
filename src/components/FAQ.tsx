import React from "react";

const FAQ = () => {
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
          each player gets a <span className="font-bold">unique query</span>.
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
    <section className="w-full flex flex-col items-center px-8 py-16 ">
      <h2 className="text-4xl font-bold text-center text-tomato mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-4xl w-full flex flex-col gap-8">
        {faqs.map((faq, index) => (
          <div key={index} className=" p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-tomato">
              {faq.question}
            </h3>
            <p className="text-lg leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
